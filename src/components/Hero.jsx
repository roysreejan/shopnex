import React from "react";
import WomanImg from "../assets/woman_hero.png";
import bgHero from "../assets/bg_hero.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-[800px] bg-no-repeat bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="container px-[30px] lg:px-0 mx-auto flex justify-between items-center h-full">
        {/* text */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* pretitle */}
          <motion.div
            className="font-semibold flex items-center uppercase mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            New Trend
          </motion.div>

          {/* title */}
          <motion.h1
            className="text-[70px] leading-[1.1] font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMANS</span>
          </motion.h1>

          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="self-start uppercase font-semibold border-b-2 border-primary hover:text-red-500 transition"
            >
              Discover More
            </Link>
          </motion.div>
        </motion.div>

        {/* image */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src={WomanImg} alt="woman" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
