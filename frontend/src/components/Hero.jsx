import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center space-x-2">
            <p className="h-px w-8 bg-[#414141] md:w-11"></p>
            <p className=" font-semibold text-sm md:text-base">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="font-Prata text-3xl sm:text-4xl md:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center space-x-2">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <p className="h-px w-8 bg-[#414141] md:w-11 "></p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full sm:w-1/2">
        <img src={assets.hero_img} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
