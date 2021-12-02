const { ApolloServer } = require("apollo-server");
const apolloParams = require("./graphql/apolloParams");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer(apolloParams);

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
