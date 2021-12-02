const { readFileSync } = require("fs");
const path = require("path");

module.exports = (schema) =>
  readFileSync(
    path.resolve(path.join(__dirname, "../schemas", `${schema}.graphql`)),
    "utf-8"
  );
