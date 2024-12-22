import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaDraftingCompass,
} from "react-icons/fa";

export default function Service() {
  return (
    <div className="bg-[#0f172a]   mx-4 mt-4 p-10 shadow-lg rounded-lg">
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      <h1 className="font-bold text-[25px] mb-4 text-white text-center underline">
        My Services
      </h1>
      <p className="text-center my-3 text-white">
        I'm here to help if you're searching for a product designer to bring
        your idea to life or a design partner to help take your business to the
        next level.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaLaptopCode className="mr-2 text-blue-500 " size={60} />
          <h1 className="text-center mt-3">Web Development</h1>
        </div>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaMobileAlt className="mr-2 text-blue-500" size={60} />
          <h1 className="text-center mt-5">Mobile App</h1>
        </div>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaPencilRuler className="mr-2 text-blue-500" size={60} />
          <h1 className="text-center mt-3">UI/UX Design</h1>
        </div>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaDraftingCompass className="mr-2 text-blue-500" size={60} />
          <h1 className="text-center mt-3">Product Design</h1>
        </div>
      </div>
    </div>
  );
}
