const getType = require("./utils/schemaHelper");
const { gql } = require("apollo-server");
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Author from "./resolvers/Author";
import Book from "./resolvers/Book";
import Subscription from "./resolvers/Subscription";
import db from "./services/db";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

const typeDefs = gql(`
${getType("book")}
${getType("author")}
`);

module.exports = {
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Book,
    Author,
  },
  context: {
    db,
  },
};
