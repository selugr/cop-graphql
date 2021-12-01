const authors = require("./author.model");

module.exports = {
  Query: {
    authors: () => authors,
    author: (parent, args) => {
      console.log("id", typeof args.id);
      console.log("authors", authors);
      return authors.find((a) => a.id === args.id);
    },
  },
  Mutation: {
    addAuthor: (parent, args) => {
      const newAuthor = {
        id: author.length + 1,
        name: args.name,
        country: args.country,
      };
      authors.push(newAuthor);
      return newAuthor;
    },
  },
};
