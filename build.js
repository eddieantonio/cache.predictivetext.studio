const fs = require("fs");
const data = require("./cached-keyman-api.json");

fs.writeFileSync(
  "./public/cached-keyman-api.json",
  JSON.stringify(data),
  "utf8"
);
