import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Navbar = () => {  
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-red-700 p-4 flex items-center justify-between shadow-lg relative">
      <div className="flex items-center space-x-4">
        <div className="sm:hidden cursor-pointer" onClick={toggleNav}>
          <img src="/images/Nss new logo-1.png" alt="Popcorn Logo" className="w-8 h-8" />
        </div>
      </div>
      <div className="text-center flex-grow">
        <h2 className="text-white text-2xl font-bold tracking-wide">
          Grain-a-thon
        </h2>
      </div>
      <ul
        className={`sm:flex sm:space-x-6 absolute right-0 bg-red-700 sm:bg-transparent text-white text-lg font-semibold sm:relative transition-all duration-300 ease-in-out
            ${isNavOpen ? "block top-full w-full space-y-4 p-4" : "hidden"}`}
      >
        <li className="text-center">
          <Link
            to="/"
            className="hover:bg-red-500 p-2 rounded block sm:inline-block"
          >
            Leaderboard
          </Link>
        </li>
        <li className="relative group text-center">
          <span className="hover:bg-red-500 p-2 rounded cursor-pointer block sm:inline-block">
            Department
          </span>
          <ul className="absolute hidden group-hover:block bg-red-600 top-full left-0 rounded shadow-lg sm:text-left text-center w-full sm:w-auto">
            {[
              "COMPS",
              "IT",
              "AIDS",
              "AIML",
              "ICB",
              "MECH",
              "ELEX",
              "CS-DS",
            ].map((dept, index) => (
              <li key={index}>
                <Link
                  to={`/${dept}`}
                  className="block px-4 py-2 hover:bg-red-500"
                >
                  {dept}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
