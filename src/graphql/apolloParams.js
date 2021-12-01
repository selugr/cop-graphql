const getType = require("./utils/schemaHelper");
const bookResolver = require("./Book/book.resolvers");
const authorResolver = require("./Author/author.resolvers");
const { gql } = require("apollo-server");

const typeDefs = gql(`
${getType("Book")}
${getType("Author")}
`);

module.exports = {
  typeDefs,
  resolvers: {
    Query: {
      ...bookResolver.Query,
      ...authorResolver.Query,
    },
    Mutation: {
      ...bookResolver.Mutation,
      ...authorResolver.Mutation,
    },
    Book: { ...bookResolver.Book },
    Author: { ...authorResolver.Author },
  },
};
