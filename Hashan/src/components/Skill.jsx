import React from 'react'
import { FaJs, FaReact, FaNodeJs, FaPhp, FaLaravel, FaGithub, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiAdobe } from 'react-icons/si';

export default function Skill() {
  return (
    <div className='bg-white mx-4 mt-4 p-4 shadow-lg rounded-lg'>
        <h1 className='font-bold text-[20px]'>My Skills</h1>

        <div className='grid grid-cols-2 gap-4 mt-4'>
        <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaJs className="mr-2 text-yellow-500 " size={24} />
        <p>JavaScript</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaReact className="mr-2 text-blue-500" size={24} />
        <p>React</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaNodeJs className="mr-2 text-green-600" size={24} />
        <p>Node.js</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaPhp className="mr-2 text-indigo-600" size={24} />
        <p>PHP</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaLaravel className="mr-2 text-red-600" size={24} />
        <p>Laravel</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <SiMongodb className="mr-2 text-green-700" size={24} />
        <p>MongoDB</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaGithub className="mr-2 text-black" size={24} />
        <p>GitHub</p>
      </div>
      <div className="flex items-center flex-col bg-slate-200 p-3 rounded-lg">
        <FaFigma className="mr-2 text-pink-500" size={24} />
        <p>UI/UX (Figma)</p>
      </div>
        </div>
      
    </div>
  )
}
