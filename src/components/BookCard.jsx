import { useState } from "react";

const BookCard = ({ title }) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div>
      {title}
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

export default BookCard;
