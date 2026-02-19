import React, { useEffect, useState } from 'react'
import Logo from '../assets/profile.jpg'
import { FaGithub, FaLinkedin, FaEnvelopeOpenText } from 'react-icons/fa'

export default function Profile() {

  const text =
    "💻 Full Stack Developer | MERN Stack Enthusiast | Software Engineer | Creating Impactful Digital Experiences"

  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index])
        setIndex(index + 1)
      }, 50) // typing speed

      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return (
    <div className="bg-[#0f172a] mx-4 mt-4 p-6 shadow-lg rounded-lg text-white">

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">

        <img
          src={Logo}
          alt="Profile"
          className="w-45 h-45 rounded-full object-cover mb-4"
        />

        <h1 className="font-bold text-xl mb-2">
          Hashan Gamage 👋
        </h1>

        <p className="font-medium text-gray-400 max-w-md">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>

      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-6">

        <a
          href="https://github.com/GThashan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 p-3 bg-slate-100 rounded-lg border"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/gamage-hashan-39b648271/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 p-3 bg-slate-100 rounded-lg border"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="mailto:tharinduh20@gmail.com"
          className="text-red-600 hover:text-red-800 p-3 bg-slate-100 rounded-lg border"
        >
          <FaEnvelopeOpenText size={24} />
        </a>

      </div>

    </div>
  )
}