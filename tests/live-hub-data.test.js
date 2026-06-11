const test = require("node:test");
const assert = require("node:assert/strict");
const { loadWorldCupData } = require("./test-helpers");

test("daily hub exposes sectioned live hub cards", () => {
  const data = loadWorldCupData();
  assert.ok(data.dailyMatchHub);
  assert.equal(data.dailyMatchHub.mode, "live-hub");
  assert.ok(Array.isArray(data.dailyMatchHub.sections));
  assert.ok(data.dailyMatchHub.sections.some((section) => section.id === "matches"));
  assert.ok(data.dailyMatchHub.sections.some((section) => section.id === "interviews"));
});

test("daily hub can hide friendlies from the lead area in tournament mode", () => {
  const data = loadWorldCupData();
  assert.equal(data.dailyMatchHub.archive?.friendliesHiddenFromLead, true);
});
