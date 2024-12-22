import React from "react";
import p1 from "../assets/p1r.png";
import p2 from "../assets/p2r.png";

export default function Project() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-3 p-6 shadow-lg rounded-lg">
      <h1 className="underline font-bold text-[25px] text-white text-center">
        Recent Project
      </h1>

      <div className="lg:grid gap-2 mt-8">
        <div className="border-b bg-slate-300 rounded-lg shadow-lg w-50 h-40 flex items-center justify-center">
          <img src={p1} alt="" className="w-full h-full object-cover rounded" />
        </div>
        <div className="border-b bg-slate-300 rounded-lg shadow-lg w-50 h-40 flex items-center justify-center">
          <img src={p2} alt="" className="w-full h-full object-cover rounded" />
        </div>
      </div>

      
      <div className="flex justify-center mt-6">
        <svg
          className="animate-bounce w-6 h-6 text-white border-2 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 3a1 1 0 011 1v12.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L11 16.586V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
