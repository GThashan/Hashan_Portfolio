import React from "react";

function Details() {
  return (
    <div className="bg-[#0f172a] mx-4 mt-6 p-8 shadow-xl rounded-xl text-white">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">
        Hi 👋 I am{" "}
        <span className="text-yellow-400">
          Hashan Gamage
        </span>
      </h1>

      {/* Divider Line */}
      <div className="w-20 h-1 bg-yellow-400 mb-6 rounded"></div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed text-lg">
        I am a passionate Software Engineering student specializing in 
        modern web and mobile application development. My core expertise 
        lies in the MERN stack (MongoDB, Express.js, React, Node.js), 
        along with Next.js, HTML, CSS, and JavaScript.
        <br /><br />
        I also have experience working with PHP and Laravel, supported 
        by a strong foundation in Java. In addition, I develop mobile 
        applications using React Native and design user-friendly, 
        visually appealing interfaces using Figma.
        <br /><br />
        I continuously strive to expand my knowledge and build innovative, 
        scalable, and efficient software solutions.
      </p>

    </div>
  );
}

export default Details;