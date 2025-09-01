import { motion } from "framer-motion";
import faceOil from "@/assets/Featured/product1.png";
import leaf from "@/assets/Featured/leaf.png";

// gradients.js
export const gradients = [
  "linear-gradient(to right, #6A9113, #141517)",
  "linear-gradient(to right, #243B55, #141E30)",
  "linear-gradient(to right, #9a8478, #1e130c)",
];

export const products = [
  {
    id: 1,
    name: "Face Oil",
    image: faceOil,
    gradient: gradients[0],
  },
  {
    id: 2,
    name: "Serum",
    image: faceOil,
    gradient: gradients[1],
  },
  {
    id: 3,
    name: "Body Lotion",
    image: faceOil,
    gradient: gradients[2],
  },
];

const ProductCard = ({ title, image, gradient }) => {
  return (
    <div
      className="relative min-w-[750px] h-[400px] rounded-2xl overflow-hidden p-8 flex items-center justify-between group"
      style={{ background: gradient }}
    >
      {/* Text Section */}
      <div className="z-20">
        <h2 className="text-6xl font-bold text-white mb-6">{title}</h2>
        <button className="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-green-700 transition">
          Shop Now
        </button>
      </div>

      {/* Product Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-[350px] relative z-20"
        whileHover={{ rotate: 12 }}
        transition={{ ease: "easeInOut" }}
      />

      {/* Leafs */}
      <img
        src={leaf}
        alt="Leaf"
        className="absolute w-[450px] top-0 right-0 opacity-0 group-hover:opacity-100 transition duration-500"
      />
      
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="flex overflow-x-auto gap-10 scrollbar-hide pl-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image}
          gradient={product.gradient}
        />
      ))}
    </div>
  );
};

export default ProductList;
