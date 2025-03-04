import { useState, useEffect } from "react";

import Spinner from "./Spinner";
import Book from "./Book";

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
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        books.map((book) => <Book key={book.id} title={book.title} />)
      )}
    </div>
  );
};

export default Bookcase;
