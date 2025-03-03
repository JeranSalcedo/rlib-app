import Book from "./Book";

const Bookcase = () => {
  const books = [
    { id: 1, title: "book1" },
    { id: 2, title: "book2" },
    { id: 3, title: "book3" },
  ];

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} />
      ))}
    </div>
  );
};

export default Bookcase;
