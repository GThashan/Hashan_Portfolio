import React from "react";

function Info() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-6 p-8 shadow-xl rounded-xl text-white">
      
      {/* Education Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Education
        </h1>
        <div className="w-16 h-1 bg-yellow-400 mb-4 rounded"></div>

        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="font-semibold text-white">
            BSc. Honours Degree in Software Engineering
          </span>
          <br />
          University of Sabaragamuwa
        </p>
      </div>

      {/* Personal Info Section */}
      <div>
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Personal Info
        </h1>
        <div className="w-16 h-1 bg-yellow-400 mb-4 rounded"></div>

        <ul className="space-y-3 text-gray-300 text-lg">
          <li>
            <span className="font-semibold text-white">Contact:</span> (+94) 76 761 7650
          </li>
          <li>
            <span className="font-semibold text-white">Email:</span> tharinduh20@gmail.com
          </li>
          <li>
            <span className="font-semibold text-white">LinkedIn:</span> linkedin.com/in/yourprofile
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Info;