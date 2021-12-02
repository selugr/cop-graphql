const authors = [
  {
    id: "1",
    name: "Kate Chopin",
    country: "Spain",
    books: ["1"],
  },
  {
    id: "2",
    name: "Paul Auster",
    country: "Spain",
    books: ["2", "3"],
  },
  {
    id: "3",
    name: "George Orwell",
    country: "United Kingdom",
    books: ["4"],
  },
];

const books = [
  {
    id: "1",
    title: "The Awakening",
    author: "1",
    comments: ["Nice book"],
    rating: 4,
  },
  {
    id: "2",
    title: "City of Glass",
    author: "2",
    comments: ["Psep psep book"],
    rating: 1,
  },
  {
    id: "3",
    title: "City of Glass II",
    author: "2",
    comments: ["Better than first part book"],
    rating: 0,
  },
  {
    id: "4",
    title: "1984",
    author: "3",
    comments: ["The movie sucks"],
    rating: 0,
  },
];

export default {
  authors,
  books,
};
