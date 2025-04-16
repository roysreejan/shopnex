import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <Link to="/#hero" className="flex items-center">
              <div className="mr-3">
                <img className="w-[40px]" src={Logo} alt="ShopNex Logo" />
              </div>
              <h2 className="text-2xl font-bold font-serif tracking-tight">
                ShopNex
              </h2>
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elevate your wardrobe with our curated collection of stylish,
            affordable, and high-quality apparel. Designed for everyday fashion
            lovers.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/#hero" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Customer Support */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-semibold text-lg mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center text-gray-500 text-sm"
      >
        &copy; {new Date().getFullYear()} ShopNex. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
