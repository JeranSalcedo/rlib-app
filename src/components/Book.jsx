import { useState } from "react";
import { FaBook } from "react-icons/fa";

const Book = ({ title }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div>
      {title}
      <FaBook className="inline text-lg mb-1 mr-1" />
      {showFull ? "............................" : "..."}
      <button
        className="text-indigo-500 mb-5 hover:text-indigo-600"
        onClick={() => setShowFull((prevState) => !prevState)}
      >
        {showFull ? "less" : "more"}
      </button>
    </div>
  );
};

export default Book;
