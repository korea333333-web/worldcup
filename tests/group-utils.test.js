const assert = require("node:assert/strict");
const {
  buildGroupMatches,
  buildProjectedGroupTable,
  buildGroupRouteSlots
} = require("../group-utils");

function test(name, fn) {
  try {
    fn();
    console.log(`ok - ${name}`);
  } catch (error) {
    console.error(`not ok - ${name}`);
    throw error;
  }
}

const teams = {
  mexico: { id: "mexico", nameKo: "Mexico", advance: 71 },
  "south-africa": { id: "south-africa", nameKo: "South Africa", advance: 42 },
  korea: { id: "korea", nameKo: "Korea", advance: 63 },
  norway: { id: "norway", nameKo: "Norway", advance: 67 },
  usa: { id: "usa", nameKo: "USA", advance: 74 }
};

const group = { id: "A", name: "Group A", teams: ["mexico", "south-africa", "korea", "norway"] };
const matches = [
  { number: 8, stage: "Group A", date: "2026-06-17", teamA: "korea", teamB: "mexico" },
  { number: 1, stage: "Group A", date: "2026-06-11", teamA: "mexico", teamB: "south-africa" },
  { number: 4, stage: "Group C", date: "2026-06-12", teamA: "usa", teamB: "korea" }
];

test("buildGroupMatches returns only the selected group in date order", () => {
  const result = buildGroupMatches(group, matches);
  assert.deepEqual(result.map((item) => item.number), [1, 8]);
});

test("buildProjectedGroupTable ranks teams by advance percentage", () => {
  const result = buildProjectedGroupTable(group, teams);
  assert.deepEqual(result.map((item) => item.team.id), ["mexico", "norway", "korea", "south-africa"]);
  assert.equal(result[0].label, "1위 예상");
  assert.equal(result[2].label, "3위 경쟁");
});

test("buildGroupRouteSlots includes winner and runner-up knockout routes", () => {
  const table = buildProjectedGroupTable(group, teams);
  const slots = buildGroupRouteSlots(group, table);
  assert.equal(slots[0].seed, "A 1위");
  assert.equal(slots[0].team.id, "mexico");
  assert.equal(slots[1].seed, "A 2위");
  assert.equal(slots[2].stage, "32강 가능");
});
