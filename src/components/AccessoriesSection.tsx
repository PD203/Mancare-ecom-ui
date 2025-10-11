import React from "react";
import { accessories } from "@/lib/data";
import { Link } from "react-router-dom";

function AccessoriesSection() {
  return (
    <section className="w-full bg-white pb-20 px-6 md:px-14">
      {/* Heading */}
      <div className="w-screen px-5 relative left-1/2 -translate-x-1/2 overflow-x-hidden">
        <h2 className="text-center text-[151px] font-ibarra tracking-[0.1em] text-primary font-thin">
          ACCESSORIES
        </h2>
        <p className="text-center text-gray-600 font-instrument text-[48px]">
          Unlock Proper Care’s Full Potentials
        </p>
      </div>

      {/* Scrollable Cards */}
      <div className="flex overflow-x-auto space-x-6 py-10 overflow-y-hidden mt-20">
        {accessories.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 flex gap-[47px] flex-col md:flex-row items-center p-6 "
          >
            {/* Left side: Image with gradient */}
            <div
              className="relative w-[307px] rounded-[40px] overflow-visible"
              style={{ background: product.gradient }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="p-2 ml-6 mt-6 transform scale-150 "
              />
            </div>

            {/* Right side: Details (same width as left) */}
            <div className="w-[276px] mr-10 h-full mt-6 md:mt-0 md:ml-6">
              <h3 className="font-lexend uppercase text-[#9B9B9B] text-[14px]">
                {product.category}
              </h3>
              <h3 className="text-[24px] font-lexend text-[#000000]">
                {product.name}
              </h3>
              <p className="text-[#696969] font-lexend text-[14px] mt-2">
                {product.description}
              </p>
              <Link to={`/products/${product.id}`}>
                <button className="mt-4 font-lexend tracking-[0.1em] px-8 py-2 border-y-[1px] border-black text-black ">
                  SHOP
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AccessoriesSection;