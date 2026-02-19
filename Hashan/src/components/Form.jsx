import React from "react";

function Form() {
  return (
    <div className="bg-[#0f172a] text-white mx-4 mt-6 p-10 shadow-xl rounded-xl max-w-2xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          Contact Me
        </h1>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4 rounded"></div>
        <p className="text-gray-300 text-lg">
          Have a project or idea in mind? Feel free to reach out — 
          I’d love to collaborate and build something great together.
        </p>
      </div>

      <form className="space-y-6">

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-gray-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 
            focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 
            outline-none transition text-white"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-gray-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 
            focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 
            outline-none transition text-white"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 text-gray-300">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 
            focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 
            outline-none transition text-white"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 
            focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 
            outline-none transition resize-none text-white"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg 
          hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Form;