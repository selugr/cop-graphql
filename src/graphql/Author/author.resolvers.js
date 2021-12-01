const authors = require("./author.model");

module.exports = {
  Query: {
    authors: () => authors,
    author: (id) => {
      authors.find((a) => a.id === id);
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
