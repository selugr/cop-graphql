const authors = require("./author.model");
const books = require("../Book/book.model");

module.exports = {
  Query: {
    authors: () => authors,
    author: (parent, args) => authors.find((a) => a.id === parent.id),
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
  Author: {
    books: (parent, args, ctx, info) => {
      return books.filter((b) => parent.books?.includes(b.id));
    },
  },
};
