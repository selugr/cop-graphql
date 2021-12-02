const Query = {
  books: (parent, args, { db }, info) => db.books,
  authors: (parent, args, { db }, info) => db.authors,
  author: (parent, args, { db }, info) =>
    db.authors.find((a) => a.id === parent.id),
};

export default Query;
