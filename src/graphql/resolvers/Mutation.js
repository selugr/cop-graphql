const Mutation = {
  addBook: (parent, args, { db }, info) => {
    const newBook = {
      id: db.books.length + 1,
      ...args,
    };
    db.books.push(newBook);
    db.authors.find((a) => a.id === args.author).books.push(newBook);
    return newBook;
  },
  addAuthor: (parent, args, { db }, info) => {
    const newAuthor = {
      id: db.authors.length + 1,
      ...args,
    };
    db.authors.push(newAuthor);
    return newAuthor;
  },
  addBookComment: (parent, args, { db }, info) => {
    const book = db.books.find((b) => b.id === args.bookID);
    book.comments.push(args.comment);
    return book;
  },
};

export default Mutation;
