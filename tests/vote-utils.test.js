const assert = require("node:assert/strict");
const {
  countVoteOptions,
  sanitizeVotePayload,
  buildVoteSummary,
  getSupabaseRestUrl
} = require("../api/vote-utils");

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

test("counts vote options and ignores unknown values", () => {
  const counts = countVoteOptions([
    { vote_option: "teamA" },
    { vote_option: "teamA" },
    { vote_option: "draw" },
    { vote_option: "teamB" },
    { vote_option: "bad" }
  ]);

  assert.deepEqual(counts, { teamA: 2, draw: 1, teamB: 1, total: 4 });
});

test("builds percentages that add up to 100", () => {
  const summary = buildVoteSummary({ teamA: 2, draw: 1, teamB: 1, total: 4 });

  assert.deepEqual(summary.percentages, { teamA: 50, draw: 25, teamB: 25 });
});

test("sanitizes valid anonymous vote payload", () => {
  const payload = sanitizeVotePayload({
    matchId: "warmup-kor-tri-2026-05-31",
    voteOption: "teamA",
    voterKey: "wc_1234567890abcdef"
  });

  assert.equal(payload.match_id, "warmup-kor-tri-2026-05-31");
  assert.equal(payload.vote_option, "teamA");
  assert.equal(payload.voter_key, "wc_1234567890abcdef");
});

test("rejects invalid vote option", () => {
  assert.throws(
    () => sanitizeVotePayload({ matchId: "m1", voteOption: "home", voterKey: "wc_abc123" }),
    /Invalid vote option/
  );
});

test("normalizes supabase rest url without duplicate slashes", () => {
  assert.equal(
    getSupabaseRestUrl("https://example.supabase.co/", "match_votes"),
    "https://example.supabase.co/rest/v1/match_votes"
  );
});
