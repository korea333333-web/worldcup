const test = require("node:test");
const assert = require("node:assert/strict");
const { loadWorldCupData } = require("./test-helpers");

test("opening ceremony section exists with performers and songs", () => {
  const data = loadWorldCupData();
  assert.ok(data.openingCeremony);
  assert.ok(Array.isArray(data.openingCeremony.items));
  assert.ok(data.openingCeremony.items.every((item) => item.source?.url));
});
