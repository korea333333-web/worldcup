const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("salary rendering uses club salary labels only", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /salary\.source/);
  assert.match(app, /salary\.confidence/);
  assert.doesNotMatch(app, /endorsement/i);
});
