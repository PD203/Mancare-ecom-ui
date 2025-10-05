import React from "react";
import model from "../assets/Model/Frame 16.png"; // use your transparent PNG here


export default function HeroSection() {
  return (
    <div className="relative w-full h-[782px] flex items-center justify-center bg-gradient-to-r from-[#141E30] to-[#243B55]">
      
      {/* Left Text */}
      <div className="absolute left-10 pl-24 top-1/3 text-white">
        <h1 className="text-[64px] font-serif">For <em>Leaders</em></h1>
      </div>

      {/* Right Text */}
      <div className="absolute right-10 pr-24 top-1/3 text-white text-right">
        <h1 className="text-[64px] font-serif">By <em>Leaders</em></h1>
      </div>

      {/* Center Model */}
      <img
        src={model}
        alt="Model"
        className="relative z-10 object-contain"
      />

      {/* Horizontal Gradient Line */}
      <div className="absolute w-[80%] h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#6F6F6F] top-[45%] left-1/2 -translate-x-1/2 z-0"></div>

      {/* Button */}
      <button className="absolute bottom-12 px-6 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-black transition z-20">
        Shop
      </button>
    </div>
  );
}
