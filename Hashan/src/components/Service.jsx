import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaDraftingCompass,
} from "react-icons/fa";

export default function Service() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-6 p-8 shadow-xl rounded-xl text-white">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          My Services
        </h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          I help businesses and individuals transform ideas into powerful,
          scalable digital products with clean design and solid engineering.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-lg">
          <FaLaptopCode
            size={50}
            className="mx-auto text-yellow-400 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-xl font-semibold mb-3">Web Development</h2>
         
        </div>

        {/* Card 2 */}
        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-lg">
          <FaMobileAlt
            size={50}
            className="mx-auto text-yellow-400 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-xl font-semibold mb-3">Mobile App Development</h2>
         
        </div>

        {/* Card 3 */}
        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-lg">
          <FaPencilRuler
            size={50}
            className="mx-auto text-yellow-400 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-xl font-semibold mb-3">UI / UX Design</h2>
          
        </div>

        {/* Card 4 */}
        <div className="group bg-slate-900 border border-slate-800 rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-yellow-400/20 hover:shadow-lg">
          <FaDraftingCompass
            size={50}
            className="mx-auto text-yellow-400 mb-4 group-hover:scale-110 transition"
          />
          <h2 className="text-xl font-semibold mb-3">Product Design</h2>
          
        </div>

      </div>
    </div>
  );
}