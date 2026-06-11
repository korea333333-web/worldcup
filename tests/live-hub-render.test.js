const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("app.js contains dedicated renderers for live hub sections", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /function renderMatchHero/);
  assert.match(app, /function renderLiveHubSection/);
  assert.match(app, /function renderInterviewCard/);
  assert.match(app, /function renderEventCard/);
});
