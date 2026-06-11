const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

test("index includes dedicated ceremony and stats entry points", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert.match(html, /data-tab="ceremony"/);
  assert.match(html, /data-tab="stats"/);
});

test("app includes mobile menu toggling helpers", () => {
  const app = fs.readFileSync("app.js", "utf8");
  assert.match(app, /function wireMobileMenu/);
  assert.match(app, /function toggleMobileMenu/);
});
