const fs = require("node:fs");
const vm = require("node:vm");

function loadWorldCupData() {
  const ctx = { window: {} };
  ["data.js", "rich-data.js", "schedule-data.js", "daily-data.js", "hub-data.js"].forEach((file) => {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx, { filename: file });
  });
  return ctx.window.WORLD_CUP_DATA;
}

module.exports = {
  loadWorldCupData
};
