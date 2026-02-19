import React from 'react';

function Form() {
  return (
    <div className="bg-[#0f172a] text-white mx-4 mt-6 p-8 shadow-xl rounded-xl max-w-2xl mx-auto">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
      <p className="text-center text-gray-400 mb-8">
        Have a project or idea in mind? Feel free to reach out, I’d love to collaborate!
      </p>

      <form className="space-y-6">

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg mb-2">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-lg mb-2">Phone Number</label>
          <input
            id="phone"
            type="text"
            placeholder="Enter your phone number"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white transition resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Message
        </button>

      </form>
    </div>
  );
}

export default Form;