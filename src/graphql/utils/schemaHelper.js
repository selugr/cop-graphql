const { readFileSync } = require("fs");
const path = require("path");

module.exports = (folder) =>
  readFileSync(
    path.resolve(path.join(__dirname, `../${folder}`, "schema.graphql")),
    "utf-8"
  );
