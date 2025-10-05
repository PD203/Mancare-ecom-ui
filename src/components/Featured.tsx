import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import faceOilHero from "@/assets/face-oil-hero.jpg";
import bodyWashHero from "@/assets/body-wash-hero.jpg";
import ProductCard from "./ProductCard";

const Featured = () => {
  const navigate = useNavigate();


  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section id="products" className="py-20  bg-white">
      <div className="px-5">
      <ProductCard />
      </div>
    </section>
  );
};

export default Featured;