import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaDraftingCompass } from 'react-icons/fa';

export default function Service() {
  return (
    <div className='bg-white mx-4 mt-4 p-4 shadow-lg rounded-lg'>
      <h1 className='font-bold text-[20px] mb-4'>My Services</h1>
      <p className='text-center my-3'>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
      <div className='grid grid-cols-2 gap-4'>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaLaptopCode className="mr-2 text-blue-500" size={50} />
          <h1 className='text-center'>Web Development</h1>
        </div>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaMobileAlt className="mr-2 text-blue-500" size={50} />
          <h1 className='text-center'>Mobile App</h1>
        </div>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaPencilRuler className="mr-2 text-blue-500" size={50} />
          <h1 className='text-center'>UI/UX Design</h1>
        </div>
        <div className="flex items-center align-center justify-center flex-col p-4 bg-slate-100 rounded-lg">
          <FaDraftingCompass className="mr-2 text-blue-500" size={50} />
          <h1 className='text-center'>Product Design</h1>
        </div>
      </div>
    </div>
  );
}
