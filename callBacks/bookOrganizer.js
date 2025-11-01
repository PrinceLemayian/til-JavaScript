const books = [
  {
    title: "The Alchemist",
    authorName: "Paulo Coelho",
    releaseYear: 1988,
  },
  {
    title: "Murder in the CIA",
    authorName: "Margaret Truman",
    releaseYear: 1956,
  },
  {
    title: "My Life",
    authorName: "William Clinton",
    releaseYear: 2004,
  },
  {
    title: "Primary Colors",
    authorName: "Joe Klein",
    releaseYear: 1996,
  },
];

const sortByYear = (book1, book2) => {
  let result = book1.releaseYear - book2.releaseYear;
  if (result < 0) {
    return -1;
  } else if (result > 0) {
    return 1;
  } else {
    return 0;
  }
};

const filteredBooks = books.filter((book) => book.releaseYear < 2000);

filteredBooks.sort(sortByYear);
