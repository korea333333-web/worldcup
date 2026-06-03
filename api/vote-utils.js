const VALID_OPTIONS = new Set(["teamA", "draw", "teamB"]);

function countVoteOptions(rows = []) {
  const counts = { teamA: 0, draw: 0, teamB: 0, total: 0 };
  for (const row of rows) {
    const option = row?.vote_option;
    if (!VALID_OPTIONS.has(option)) continue;
    counts[option] += 1;
    counts.total += 1;
  }
  return counts;
}

function buildVoteSummary(counts) {
  const total = counts.total || 0;
  const percentages = {
    teamA: total ? Math.round((counts.teamA / total) * 100) : 0,
    draw: total ? Math.round((counts.draw / total) * 100) : 0,
    teamB: total ? Math.round((counts.teamB / total) * 100) : 0
  };
  return { counts, percentages };
}

function sanitizeVotePayload(input = {}) {
  const matchId = String(input.matchId || "").trim();
  const voteOption = String(input.voteOption || "").trim();
  const voterKey = String(input.voterKey || "").trim();

  if (!matchId || matchId.length > 120) throw new Error("Invalid match id");
  if (!VALID_OPTIONS.has(voteOption)) throw new Error("Invalid vote option");
  if (!/^wc_[a-zA-Z0-9_-]{6,80}$/.test(voterKey)) throw new Error("Invalid voter key");

  return {
    match_id: matchId,
    vote_option: voteOption,
    voter_key: voterKey
  };
}

function getSupabaseRestUrl(baseUrl, tableName) {
  return `${String(baseUrl || "").replace(/\/+$/, "")}/rest/v1/${tableName}`;
}

module.exports = {
  VALID_OPTIONS,
  countVoteOptions,
  buildVoteSummary,
  sanitizeVotePayload,
  getSupabaseRestUrl
};
