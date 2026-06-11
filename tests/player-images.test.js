const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("player portrait renderer prefers explicit imageUrl before wiki slug", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /player\.imageUrl/);
  assert.match(app, /data-image-source/);
});
