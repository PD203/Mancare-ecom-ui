import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import faceOil from "@/assets/Featured/product1.png";
import leaf from "@/assets/Featured/leaf.png";

// gradients.js
export const gradients = [
  "linear-gradient(to right, #6A9113, #141517)",
  "linear-gradient(to right, #243B55, #141E30)",
  "linear-gradient(to right, #9a8478, #1e130c)",
];

export const products = [
  { id: 1, name: "Face Oil", image: faceOil, gradient: gradients[0] },
  { id: 2, name: "Serum", image: faceOil, gradient: gradients[1] },
  { id: 3, name: "Body Lotion", image: faceOil, gradient: gradients[2] },
];

const ProductCard = ({ title, image, gradient }) => {
  return (
    <motion.div
      className="relative min-w-[750px] h-[400px] rounded-2xl p-8 flex items-center justify-between group my-8"
      style={{ background: gradient }}
      initial="rest"
      whileHover="hover"
    >
      {/* Text Section */}
      <div className="z-20">
        <div className="mb-6 w-fit">
          <h2 className="text-6xl font-serif font-extralight text-white mb-2">
            {title}
          </h2>
          <hr className="w-full h-[1px] bg-gradient-to-r from-white to-[#474747] border-0 rounded" />
        </div>
        <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-gray-600 transition">
          Shop Now
        </button>
      </div>

      {/* Product Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-[350px] relative z-20"
        variants={{ rest: { rotate: 0 }, hover: { rotate: 17 } }}
        transition={{ ease: "easeInOut" }}
      />

      {/* Leaf Image */}
      <img
        src={leaf}
        alt="Leaf"
        className="absolute w-[450px] top-[-20px] right-[-25px] opacity-0 group-hover:opacity-100 transition duration-500"
      />
    </motion.div>
  );
};

const ProductList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 800; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-primary p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden gap-10 scrollbar-hide pl-6"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            image={product.image}
            gradient={product.gradient}
          />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-primary  p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default ProductList;
