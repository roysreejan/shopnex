import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener for scroll to change header state
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <motion.header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-[30px] lg:px-0 mx-auto flex items-center justify-between h-full">
        {/* Logo with motion */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to={"/#hero"}>
            <div className="flex items-center">
              {/* Logo */}
              <div className="mr-3">
                <img className="w-[40px]" src={Logo} alt="ShopNex Logo" />
              </div>

              {/* ShopNex Name */}
              <h2 className="text-2xl font-bold font-serif tracking-tight">
                ShopNex
              </h2>
            </div>
          </Link>
        </motion.div>

        {/* Navigation links with motion */}
        <motion.nav
          className="flex items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/#hero"
            className="font-semibold text-black text-lg hover:text-gray-700 hover:underline transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-semibold text-black text-lg hover:text-gray-700 hover:underline transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/#products"
            className="font-semibold text-black text-lg hover:text-gray-700 hover:underline transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="font-semibold text-black text-lg hover:text-gray-700 hover:underline transition duration-300"
          >
            Contact
          </Link>
        </motion.nav>

        {/* Cart icon with motion */}
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
      </div>
    </motion.header>
  );
};

export default Header;
