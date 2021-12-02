const Author = {
  books: (parent, args, { db }, info) => {
    return db.books.filter((b) => parent.books?.includes(b.id));
  },
};

export default Author;
