import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "SASS", icon: FaSass, color: "text-pink-500" },
    { name: "JAVASCRIPT", icon: FaJs, color: "text-yellow-400" },
    { name: "REACT JS", icon: FaReact, color: "text-cyan-400" },
    { name: "GITHUB", icon: FaGithub, color: "text-white" },
    { name: "NODE JS", icon: FaNodeJs, color: "text-green-500" },
    { name: "FIREBASE", icon: SiFirebase, color: "text-yellow-500" },
    { name: "MONGODB", icon: SiMongodb, color: "text-green-400" },
    { name: "DOCKER", icon: FaDocker, color: "text-blue-400" },
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen text-white flex items-center justify-center mx-4 mt-4 shadow-lg rounded-lg">
       {/* <div className='bg-[#0f172a]  mx-4 mt-4 p-4 shadow-lg rounded-lg flex items-center justify-center'></div> */}
      <div className="relative w-full max-w-6xl p-4">

        {/* Left Vertical Skills Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-2xl font-bold text-gray-400 tracking-widest">
          SKILLS
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          What I do
        </h1>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate developer creating modern, responsive, and scalable
          applications using latest technologies.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl shadow-lg text-center 
                hover:bg-slate-700 hover:scale-105 transition-all duration-300"
              >
                <Icon size={50} className={`mx-auto mb-4 ${skill.color}`} />
                <p className="text-sm font-semibold tracking-wide">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}