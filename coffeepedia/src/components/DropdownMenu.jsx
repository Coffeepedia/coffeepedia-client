import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu() {
  let Links = [
    { name: "Coffee News", link: "/articles" },
    { name: "Coffee Radar", link: "/radar" },
    { name: "Order History", link: "/order/history" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full shadow-md">
      <div className="items-center bg-white py-4 px-4 ">
        <div className="items-center flex cursor-pointer text-2xl font-bold text-gray-800">
          <span className="mr-1 text-2xl text-primary">logo</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-4 top-6 cursor-pointer text-3xl "
        >
          {/* Menu */}
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stoke-gray-700 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stoke-gray-700 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}

          {/* Close */}
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-200px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="mt-6 mb-3 border-b pb-3 text-xl">
              <Link to={link.link} className="text-gray-800">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
