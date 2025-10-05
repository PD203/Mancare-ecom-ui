import React from "react";
import faceOil from "@/assets/Featured/product1.png";

function AccessoriesSection() {
  // gradients.js
  const gradients = [
    "linear-gradient(to right, #1e130c, #9a8478)",
    "linear-gradient(to right, #243B55, #141E30)",
    "linear-gradient(to right, #6A9113, #141517)",
    ,
  ];

  const products = [
    {
      id: 1,
      name: "Wooden Comb",
      description:
        "A natural, handcrafted comb designed for gentle detangling and scalp stimulation. Perfect for daily grooming.",
      image: faceOil,
      button: "Shop Now",
      gradient: gradients[0],
    },
    {
      id: 2,
      name: "Shaving Brush",
      description:
        "Premium shaving brush with soft bristles for a smooth lather. Enhances your shaving routine.",
      image: faceOil,
      button: "Shop Now",
      gradient: gradients[1],
    },
  ];

  return (
    <section className="w-full bg-white  px-6 md:px-20">
      {/* Heading */}
      <div className="w-screen px-5 relative left-1/2 -translate-x-1/2 overflow-x-hidden">
        <h2 className="text-center text-[151px] font-serif tracking-[0.2em] text-primary font-thin">
          ACCESSORIES
        </h2>
        <p className="text-center text-gray-600 font-instrument text-[48px]">
          Unlock Proper Care’s Full Potentials
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center bg-gray-50 shadow-lg p-6"
          >
            {/* Left side: Image with gradient */}
            <div
              className="w-full md:w-1/2 flex justify-center rounded-3xl p-6"
              style={{ background: product.gradient }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="max-h-60 object-contain"
              />
            </div>

            {/* Right side: Details */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="mt-4 px-5 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition">
                {product.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AccessoriesSection;
