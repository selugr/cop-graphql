const { ApolloServer } = require("apollo-server");
// Schemas
// const bookSchema = require("./schemas/Book");
// const authorSchema = require("./schemas/Author");
// Resolvers
// const { bookResolver } = require("./graphql/Book/book.resolvers");

const apolloParams = require("./graphql/apolloParams");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer(apolloParams);

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
