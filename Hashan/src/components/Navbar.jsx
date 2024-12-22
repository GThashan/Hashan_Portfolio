import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBriefcase,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import cv from "../assets/cv.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0f172a]  text-white flex items-center justify-between flex-wrap p-4  shadow-lg mx-4  rounded-lg">
      <div className="flex items-center flex-shrink-0  mr-6 lg:mr-72">
        <img src={cv} alt="" className="rounded-lg w-10 h-10" />
      </div>
      <div className="block lg:hidden ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-5 w-5 font-bold  ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 font-bold ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow text-white">
          <Link to="/">
            <p className="text-white block mt-4 lg:inline-block lg:mt-0 text-gray-700 text-[20px] mr-6 font-bold cursor-pointer hover:bg-black p-3 rounded-lg items-center  ">
              <FaHome className="inline-block mr-2" />
               Home
            </p>
          </Link>
          <Link to="/about">
            <p className="text-white block mt-4 lg:inline-block lg:mt-0 text-gray-700 text-[20px] mr-6 font-bold cursor-pointer hover:bg-[#eaf2f8] p-3 rounded-lg">
              <FaInfoCircle className="inline-block mr-2" />
              About
            </p>
          </Link>
          <Link to="/service">
            <p className=" text-white block mt-4 lg:inline-block lg:mt-0 text-gray-700 text-[20px] mr-6 font-bold cursor-pointer hover:bg-[#eaf2f8] p-3 rounded-lg">
              <FaCogs className="inline-block mr-2" />
              Service
            </p>
          </Link>

          <Link to="/work">
            <p className="text-white block mt-4 lg:inline-block lg:mt-0 text-gray-700 text-[20px] mr-6 font-bold cursor-pointer hover:bg-[#eaf2f8] p-3 rounded-lg">
              <FaBriefcase className="inline-block mr-2" />
              Works
            </p>
          </Link>

          <Link to="/contact">
            <p className="text-white block mt-4 lg:inline-block lg:mt-0 text-gray-700 text-[20px] mr-6 font-bold cursor-pointer hover:bg-[#eaf2f8] p-3 rounded-lg">
              <FaEnvelope className="inline-block mr-2" />
              Contact
            </p>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <button className="inline-flex items-center bg-slate-900 hover:bg-[#5588ff] border-0 py-2 px-4 text-white font-bold rounded-lg">
              Let's Talk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
