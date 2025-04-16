import React from "react";
import { motion } from "framer-motion"; // Importing motion
import { FaShoppingCart, FaHandshake } from "react-icons/fa"; // Adding icons for better visuals

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 pt-32 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header with Motion */}
        <motion.h1
          className="text-4xl font-bold font-serif text-gray-700 mb-6 hover:text-indigo-700 transition duration-300 ease-in-out"
          initial={{ opacity: 0, y: -50 }} // Initial state for fade and slide-in
          animate={{ opacity: 1, y: 0 }} // Final state for full opacity and no slide
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Welcome to <strong>ShopNex</strong>! We are passionate about providing
          you with the best shopping experience. Our mission is to bring you
          high-quality products that meet your needs and exceed your
          expectations.
        </motion.p>

        {/* Mission and Vision Sections with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, x: -100 }} // Slide-in from left
            animate={{ opacity: 1, x: 0 }} // Final state
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition duration-200">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At <strong>ShopNex</strong>, our mission is to make shopping easy,
              enjoyable, and accessible for everyone. We strive to offer a wide
              range of products that cater to your lifestyle.
            </p>
            <div className="mt-4 text-center">
              <FaShoppingCart className="text-4xl text-gray-600 mx-auto mb-3 hover:text-indigo-500 transition duration-300" />
              <p className="text-gray-500 mt-2">
                Our Mission is to make shopping simple and accessible for all.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-8 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            initial={{ opacity: 0, x: 100 }} // Slide-in from right
            animate={{ opacity: 1, x: 0 }} // Final state
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition duration-200">
              Our Vision
            </h2>
            <p className="text-gray-600">
              We envision a world where shopping is seamless and stress-free.
              Our team works tirelessly to ensure that you have the best
              experience every time you shop with us.
            </p>
            <div className="mt-4 text-center">
              <FaHandshake className="text-4xl text-gray-600 mx-auto mb-3 hover:text-indigo-500 transition duration-300" />
              <p className="text-gray-500 mt-2">
                Our vision is to foster long-term relationships with our
                customers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative Section with Motion */}
        <motion.div
          className="mt-12 bg-gray-50 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6 hover:text-indigo-600 transition duration-200">
            Why Choose ShopNex?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 text-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaShoppingCart className="text-4xl text-gray-800 mb-4 hover:text-indigo-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-gray-800">
                Wide Selection
              </h3>
              <p className="text-gray-600 mt-2">
                Choose from a wide variety of products that cater to your every
                need and preference.
              </p>
            </motion.div>
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 text-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaHandshake className="text-4xl text-gray-800 mb-4 hover:text-indigo-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-gray-800">
                Customer-Centric
              </h3>
              <p className="text-gray-600 mt-2">
                We prioritize customer satisfaction and strive to provide
                personalized service.
              </p>
            </motion.div>
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 text-center transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaShoppingCart className="text-4xl text-gray-800 mb-4 hover:text-indigo-500 transition duration-300" />
              <h3 className="text-xl font-semibold text-gray-800">
                Affordable Prices
              </h3>
              <p className="text-gray-600 mt-2">
                Enjoy competitive pricing without compromising on quality.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
