import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold font-serif tracking-tight text-gray-900 mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-10 text-center max-w-md">
          Need help with your order, size guidance, or just want to say hi? Our
          team is here for you.
        </p>

        <div className="bg-white w-full shadow-xl rounded-2xl p-10 lg:p-16">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 uppercase tracking-wider"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
