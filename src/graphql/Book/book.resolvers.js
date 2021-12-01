// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const books = require("./book.model");
const authors = require("../Author/author.model");

module.exports = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (parent, args) => {
      const newBook = {
        id: books.length + 1,
        title: args.title,
        author: args.author,
        comment: args.comment,
        rating: args.rating,
      };
      books.push(newBook);
      return newBook;
    },
  },
  Book: {
    author: (parent, args, ctx, info) => {
      return authors.find((a) => a.id === parent.author);
    },
  },
};
