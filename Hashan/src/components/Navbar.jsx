import React, { useState } from "react";
import { Link } from "react-router-dom";
import cv from "../assets/12.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0f172a] text-white flex items-center justify-between flex-wrap px-6 py-4 shadow-xl mx-4 mt-4 rounded-xl">

      {/* Logo */}
      <div className="flex items-center">
        <img src={cv} alt="logo" className="rounded-lg w-20 h-25" />
      </div>

      {/* Mobile Button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-400 focus:outline-none"
        >
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block mt-4" : "hidden"
        }`}
      >
        <div className="lg:flex-grow lg:flex lg:items-center lg:space-x-6 text-lg font-semibold">

          <Link to="/">
            <span className="block mt-3 lg:mt-0 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Home
            </span>
          </Link>

          <Link to="/about">
            <span className="block mt-3 lg:mt-0 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              About
            </span>
          </Link>

          <Link to="/service">
            <span className="block mt-3 lg:mt-0 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Service
            </span>
          </Link>

          <Link to="/work">
            <span className="block mt-3 lg:mt-0 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Works
            </span>
          </Link>

          <Link to="/contact">
            <span className="block mt-3 lg:mt-0 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Contact
            </span>
          </Link>

        </div>

        {/* Button */}
        <div className="mt-4 lg:mt-0 lg:ml-6">
          <Link to="/contact">
            <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300 transition shadow-lg hover:shadow-yellow-400/30">
              Let's Talk
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Navbar;