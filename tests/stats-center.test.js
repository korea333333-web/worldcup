const test = require("node:test");
const assert = require("node:assert/strict");
const { loadWorldCupData } = require("./test-helpers");

test("stats center exists with player and team tabs", () => {
  const data = loadWorldCupData();
  assert.ok(data.statsCenter);
  assert.ok(Array.isArray(data.statsCenter.playerStats));
  assert.ok(Array.isArray(data.statsCenter.teamStats));
});
