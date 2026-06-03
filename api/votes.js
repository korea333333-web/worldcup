const {
  buildVoteSummary,
  countVoteOptions,
  getSupabaseRestUrl,
  sanitizeVotePayload
} = require("./vote-utils");

const TABLE = "match_votes";

module.exports = async function handler(req, res) {
  setJsonHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (!["GET", "POST"].includes(req.method)) {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    res.status(200).json({
      storage: "fallback",
      ...buildVoteSummary({ teamA: 42, draw: 18, teamB: 31, total: 91 })
    });
    return;
  }

  try {
    const body = req.method === "POST" ? await getRequestBody(req) : {};
    const matchId = req.method === "GET"
      ? String(req.query.matchId || "")
      : String((body || {}).matchId || "");

    if (!matchId || matchId.length > 120) {
      res.status(400).json({ error: "Invalid match id" });
      return;
    }

    if (req.method === "POST") {
      const payload = sanitizeVotePayload(body || {});
      await upsertVote(supabaseUrl, supabaseKey, payload);
    }

    const counts = await readVoteCounts(supabaseUrl, supabaseKey, matchId);
    res.status(200).json({ storage: "supabase", ...buildVoteSummary(counts) });
  } catch (error) {
    res.status(400).json({ error: error.message || "Vote request failed" });
  }
};

async function upsertVote(supabaseUrl, supabaseKey, payload) {
  const url = `${getSupabaseRestUrl(supabaseUrl, TABLE)}?on_conflict=match_id,voter_key`;
  const response = await fetch(url, {
    method: "POST",
    headers: supabaseHeaders(supabaseKey, {
      Prefer: "resolution=merge-duplicates,return=minimal"
    }),
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const body = await safeText(response);
    throw new Error(body || "Supabase vote write failed");
  }
}

async function readVoteCounts(supabaseUrl, supabaseKey, matchId) {
  const query = `match_id=eq.${encodeURIComponent(matchId)}&select=vote_option`;
  const response = await fetch(`${getSupabaseRestUrl(supabaseUrl, TABLE)}?${query}`, {
    headers: supabaseHeaders(supabaseKey)
  });

  if (!response.ok) {
    const body = await safeText(response);
    throw new Error(body || "Supabase vote read failed");
  }

  const rows = await response.json();
  return countVoteOptions(rows);
}

function supabaseHeaders(key, extra = {}) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    ...extra
  };
}

function setJsonHeaders(res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
}

async function safeText(response) {
  try {
    return await response.text();
  } catch (_error) {
    return "";
  }
}

async function getRequestBody(req) {
  if (!req.body || typeof req.body === "object") return req.body || {};
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}
