import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link className="flex flex-shrink-0 items-center mr-4" to="/">
        <FaHome className="h-10 w-auto" />
        <span className="hidden md:block text-white text-2xl font-bold ml-2">
          RLib
        </span>
      </Link>
      <Link
        className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
        to="/about"
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;
