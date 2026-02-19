import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaDraftingCompass,
} from "react-icons/fa";

export default function Service() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-4 p-8 shadow-lg rounded-xl text-white">

      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">My Services</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          I help businesses and individuals turn ideas into real-world digital
          products with clean design and solid engineering.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Card */}
        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
          <FaLaptopCode
            size={50}
            className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-lg font-semibold mb-2">Web Development</h2>
          <p className="text-sm text-gray-400">
            Modern, responsive, and scalable web applications using the MERN
            stack.
          </p>
        </div>

        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
          <FaMobileAlt
            size={50}
            className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-lg font-semibold mb-2">Mobile App Development</h2>
          <p className="text-sm text-gray-400">
            Cross-platform mobile apps with smooth performance and clean UI.
          </p>
        </div>

        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
          <FaPencilRuler
            size={50}
            className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-lg font-semibold mb-2">UI / UX Design</h2>
          <p className="text-sm text-gray-400">
            User-focused designs that are clean, intuitive, and conversion-ready.
          </p>
        </div>

        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500">
          <FaDraftingCompass
            size={50}
            className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-lg font-semibold mb-2">Product Design</h2>
          <p className="text-sm text-gray-400">
            From idea to launch — designing products that solve real problems.
          </p>
        </div>

      </div>
    </div>
  );
}