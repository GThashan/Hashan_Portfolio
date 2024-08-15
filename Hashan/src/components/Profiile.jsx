import React from 'react'
import Logo from '../assets/logo.jpg'
import {  FaGithub, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa';


export default function Profiile() {
  return (
    <div className='bg-white mx-4 mt-10 p-3 shadow-lg rounded-lg'>
        <div>
            <img src={Logo} alt=""  className="rounded-lg"/>
            <h1 className='font-bold text-[20px] my-4'> Hashan Gamage 👋</h1>
            <p className='font-medium text-gray-500'>💻 Full Stack Developer |  MERN Stack Enthusiast | Software Engineer |  Creating Impactful Digital Experiences</p>
        </div>
        <div className="flex space-x-4 mt-6">
        <a href="https://github.com/GThashan/" target="_blank" className="text-black hover:text-gray-700 p-3 bg-slate-100 rounded-lg border">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/gamage-hashan-39b648271/" target="_blank"  className="text-blue-700 hover:text-blue-900 p-3 bg-slate-100 rounded-lg border">
          <FaLinkedin size={24} />
        </a>
        <a href="tharinduh20@gmail.com" className="text-red-600 hover:text-red-800 p-3 bg-slate-100 rounded-lg border">
          <FaEnvelopeOpenText size={24} />
        </a>
      </div>
      
    </div>
  )
}
