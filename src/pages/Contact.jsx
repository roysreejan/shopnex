import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-4 pt-36">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title Animation */}
        <motion.h2
          className="text-4xl font-bold font-serif tracking-tight text-gray-900 mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          className="text-gray-600 mb-10 text-center max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Need help with your order, size guidance, or just want to say hi? Our
          team is here for you.
        </motion.p>

        {/* Form Animation */}
        <motion.div
          className="bg-white w-full shadow-xl rounded-2xl p-10 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form className="space-y-6">
            {/* Name Field Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </motion.div>

            {/* Email Field Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
            </motion.div>

            {/* Message Field Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              ></textarea>
            </motion.div>

            {/* Submit Button Animation */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button
                type="submit"
                className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300 uppercase tracking-wider"
              >
                Send Message
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
