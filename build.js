const fs = require("fs");
const apiData = require("./cached-keyman-api.json");
let languages = require("./cached-languages.json");

/* Never send a bare Array, to prevent Array constructor poisoning attack.
 * See: https://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/ */
if (languages instanceof Array) {
  languages = { languages };
}

exportAsMinimalJSON(apiData, "cached-keyman-api.json");
exportAsMinimalJSON(languages, "cached-languages.json");

function exportAsMinimalJSON(thing, filename) {
  fs.writeFileSync(
    `./public/${filename}`,
    JSON.stringify(thing),
    "utf8"
  );
}
