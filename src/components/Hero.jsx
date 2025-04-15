import React from "react";
import WomanImg from "../assets/woman_hero.png";
import bgHero from "../assets/bg_hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="h-[800px] bg-no-repeat bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="container px-[30px] lg:px-0 mx-auto flex justify-center around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading -[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMANS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
