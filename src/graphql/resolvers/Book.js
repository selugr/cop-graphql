const Book = {
  author: (parent, args, { db }, info) => {
    return db.authors.find((a) => a.id === parent.author);
  },
};

export default Book;
