const fs = require("fs");
const apiData = require("./cached-keyman-api.json");
const languages = require("./cached-languages.json");

exportAsMinimalJSON(apiData, "cached-keyman-api.json");
exportAsMinimalJSON(languages, "cached-languages.json");

function exportAsMinimalJSON(thing, filename) {
  fs.writeFileSync(
    `./public/${filename}`,
    JSON.stringify(thing),
    "utf8"
  );
}
