import React from "react";
import model from "../assets/Model/Frame 16.png"; // transparent PNG

export default function ModelSection() {
  return (
    <div className="relative w-full h-[784px] flex items-center justify-center bg-gradient-to-r from-[#141E30] to-[#243B55] overflow-hidden">
      {/* Left Text */}
      <div className="absolute left-[10%] top-[50%] -translate-y-1/2 text-white text-[48px] font-inria">
        <h1>
          For <em>Leaders</em>
        </h1>
      </div>

      {/* Right Text */}
      <div className="absolute right-[10%] top-[50%] -translate-y-1/2 text-white text-[48px] font-inria text-right">
        <h1>
          By <em>Leaders</em>
        </h1>
      </div>

      {/* Center Model */}
      <img
        src={model}
        alt="Model"
        className="relative z-10 object-contain"
      />

      {/* Horizontal Line */}
      <div className="absolute w-[80%] h-[1px] bg-white/60 top-[58%] left-1/2 -translate-x-1/2 z-0"></div>

      {/* Button */}
      <button className="absolute  font-lexend top-[73%] left-1/2 -translate-x-1/2 px-14 py-3 border border-white rounded-full text-white tracking-wide hover:bg-[#ffffff6a] hover:text-black transition z-20">
        SHOP
      </button>
    </div>
  );
}
