const fs = require("fs");
const data = require("./cached-keyman-api.json");
const languages = require("./cached-languages.json");

fs.writeFileSync(
  "./public/cached-keyman-api.json",
  JSON.stringify(data),
  "utf8"
);

fs.writeFileSync(
  "./public/cached-languages.json",
  JSON.stringify(data),
  "utf8"
);
