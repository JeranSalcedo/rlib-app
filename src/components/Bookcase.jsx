import { useState, useEffect } from "react";

import BookCard from "./BookCard";

const Bookcase = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();

        setBooks(data);
      } catch (err) {
        console.log("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {loading
        ? "Loading"
        : books.map((book) => <BookCard key={book.id} title={book.title} />)}
    </div>
  );
};

export default Bookcase;
