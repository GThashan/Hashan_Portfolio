import React from "react";
import p1 from "../assets/p1r.png";
import p2 from "../assets/p2r.png";

export default function Project() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-6 p-8 shadow-xl rounded-xl text-white">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Recent Projects
        </h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A selection of projects I’ve worked on recently, showcasing
          my expertise in modern web and mobile development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

        {/* Project Card 1 */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-800 hover:border-yellow-400 transition duration-300">
          <img
            src={p1}
            alt="Project 1"
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-xl font-semibold mb-3">
              Project One
            </h2>
            <p className="text-gray-300 mb-5">
              MERN stack web application with modern UI and scalable architecture.
            </p>
            <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
              View Project
            </button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-800 hover:border-yellow-400 transition duration-300">
          <img
            src={p2}
            alt="Project 2"
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-xl font-semibold mb-3">
              Project Two
            </h2>
            <p className="text-gray-300 mb-5">
              Fully responsive mobile-first application with optimized performance.
            </p>
            <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
              View Project
            </button>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12">
        <div className="animate-bounce w-10 h-10 flex items-center justify-center border border-yellow-400 rounded-full text-yellow-400">
          ↓
        </div>
      </div>

    </div>
  );
}