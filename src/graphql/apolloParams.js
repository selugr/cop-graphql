const getType = require("./utils/schemaHelper");
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Author from "./resolvers/Author";
import Book from "./resolvers/Book";
import db from "./services/db";
const { gql } = require("apollo-server");

const typeDefs = gql(`
${getType("book")}
${getType("author")}
`);

module.exports = {
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Book,
    Author,
  },
  context: {
    db,
  },
};
