import { useQuery } from "@tanstack/react-query";

import BookCard from "./BookCard";

const Bookcase = () => {
  const {
    data: books,
    error,
    isPending,
  } = useQuery({
    queryKey: ["books"],
    staleTime: Infinity,
    queryFn: async () => {
      const res = await fetch("/api/books");
      return await res.json();
    },
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  return (
    <ul>
      {books?.map((book) => (
        <BookCard key={book.id} title={book.title} />
      ))}
    </ul>
  );
};

export default Bookcase;
