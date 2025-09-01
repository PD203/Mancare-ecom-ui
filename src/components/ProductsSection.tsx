import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import faceOilHero from "@/assets/face-oil-hero.jpg";
import bodyWashHero from "@/assets/body-wash-hero.jpg";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "face-oil",
      title: "Face Oil",
      price: "399 rs",
      image: faceOilHero,
      description: "Premium face oil for the modern gentleman",
    },
    {
      id: "body-wash",
      title: "Body Wash",
      price: "299 rs",
      image: bodyWashHero,
      description: "Luxurious body wash for daily grooming",
    },
  ];

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="pl-10">
      <ProductCard />
      </div>
    </section>
  );
};

export default ProductsSection;