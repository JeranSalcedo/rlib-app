import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Disclosure,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { IconBell, IconSearch } from "@tabler/icons-react";

import avatar from "../assets/images/temp.jpg";

const navigation = [
  { name: "Home", pathname: "/" },
  { name: "About", pathname: "/about" },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = ({ page }) => {
  const [current, setCurrent] = useState(page);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.pathname}
                    aria-current={
                      item.pathname === current ? "page" : undefined
                    }
                    className={classNames(
                      item.pathname === current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    onClick={() => setCurrent(item.pathname)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Input
              name="Search"
              type="text"
              className="relative bg-white hidden rounded p-1 sm:m-3 sm:block w-48 md:w-72 lg:w-96"
              placeholder="Search"
            />
            <button
              type="button"
              className="md:hidden relative rounded-full p-1 bg-gray-800 p-2 text-gray-400"
            >
              <span className="sr-only">Search</span>
              <IconSearch aria-hidden="true" className="size-6" />
            </button>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1 5" />
              <span className="sr-only">View notifications</span>
              <IconBell aria-hidden="true" className="size-6" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1 5" />
                  <span className="sr-only">Open user menu</span>
                  <img alt="" src={avatar} className="size-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <NavLink
                    to={"/profile"}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    onClick={() => setCurrent("/")}
                  >
                    Your Profile
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to={"/settings"}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    onClick={() => setCurrent("/")}
                  >
                    Settings
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to={"/"}
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    onClick={() => setCurrent("/")}
                  >
                    Sign out
                  </NavLink>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

// const linkClass = ({ isActive }) =>
//   isActive
//     ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
//     : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
// {<header className="bg-indigo-700 border-b border-indigo-500">
//   <ul className="flex">
//     <li>
//       <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
//         <FaHome className="h-10 w-auto" />
//         <span className="hidden md:block text-white text-2xl font-bold ml-2">
//           RLib
//         </span>
//       </NavLink>
//     </li>
//   </ul>
//   <li>
//     <NavLink className={linkClass} to="/">
//       Home
//     </NavLink>
//   </li>
//   <li>
//     <NavLink className={linkClass} to="/about">
//       About
//     </NavLink>
//   </li>
// </header>}

export default Header;
