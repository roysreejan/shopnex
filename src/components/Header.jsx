import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { HashLink as Link } from "react-router-hash-link";
import { BsBag } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <motion.header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-[15px] lg:px-0 mx-auto flex items-center justify-between h-full">
        {/* ShopNex Logo - Always visible */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center lg:justify-start"
        >
          <Link to={"/#hero"} onClick={() => setMobileMenuOpen(false)}>
            <div className="flex items-center">
              <img className="w-[40px] mr-2" src={Logo} alt="ShopNex Logo" />
              <h2 className="text-2xl font-bold font-serif tracking-tight">
                ShopNex
              </h2>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav - Centered */}
        <motion.nav
          className="hidden md:flex items-center justify-center space-x-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/#hero"
            className="nav-link text-lg font-semibold hover:text-gray-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link text-lg font-semibold hover:text-gray-700"
          >
            About Us
          </Link>
          <Link
            to="/#products"
            className="nav-link text-lg font-semibold hover:text-gray-700"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="nav-link text-lg font-semibold hover:text-gray-700"
          >
            Contact
          </Link>
        </motion.nav>

        {/* Cart & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon (Visible on Desktop & Mobile) */}
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </motion.div>

          {/* Mobile Menu Toggle (Visible only on mobile) */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            {mobileMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-white flex flex-col pt-24 px-6"
        >
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-5 right-5 text-3xl"
          >
            <HiX />
          </button>

          {/* Nav Links */}
          <nav className="flex flex-col items-start space-y-6 px-4 pt-4">
            <Link
              to="/#hero"
              onClick={toggleMobileMenu}
              className="text-2xl font-semibold hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMobileMenu}
              className="text-2xl font-semibold hover:text-gray-700"
            >
              About Us
            </Link>
            <Link
              to="/#products"
              onClick={toggleMobileMenu}
              className="text-2xl font-semibold hover:text-gray-700"
            >
              Products
            </Link>
            <Link
              to="/contact"
              onClick={toggleMobileMenu}
              className="text-2xl font-semibold hover:text-gray-700"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
