import React from "react";
import p1 from "../assets/p1r.png";
import p2 from "../assets/p2r.png";

export default function Project() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-6 p-8 shadow-lg rounded-xl text-white">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Recent Projects</h1>
        <p className="text-gray-400">
          A selection of projects I’ve worked on recently
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Project Card */}
        <div className="group relative overflow-hidden rounded-xl border border-slate-800">
          <img
            src={p1}
            alt="Project 1"
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-lg font-semibold mb-2">Project One</h2>
            <p className="text-sm text-gray-300 mb-4">
              MERN stack web application with modern UI
            </p>
            <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              View Project
            </button>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl border border-slate-800">
          <img
            src={p2}
            alt="Project 2"
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-lg font-semibold mb-2">Project Two</h2>
            <p className="text-sm text-gray-300 mb-4">
              Responsive mobile-first application
            </p>
            <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              View Project
            </button>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-10">
        <div className="animate-bounce w-10 h-10 flex items-center justify-center border border-slate-600 rounded-full text-gray-300">
          ↓
        </div>
      </div>

    </div>
  );
}