import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; // Assuming logo is in assets

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex items-center mb-4">
            <Link to={"/"}>
              <div className="mr-3">
                <img className="w-[40px]" src={Logo} alt="ShopNex Logo" />
              </div>
            </Link>
            <h2 className="text-2xl font-bold font-serif tracking-tight">
              ShopNex
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Elevate your wardrobe with our curated collection of stylish,
            affordable, and high-quality apparel. Designed for everyday fashion
            lovers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Care</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Returns & Exchanges</li>
            <li>Shipping Info</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
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
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopNex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
