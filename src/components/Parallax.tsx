import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Import your images
import heroProducts from "@/assets/Hero/heroProducts.png";
import bgStones from "@/assets/Hero/bgStones.png";
import bgfog from "@/assets/Hero/bgfog.png";

const Parallax: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { damping: 50, stiffness: 120 });

  // Parallax effects
  const fogY = useTransform(smoothScroll, [0, 0.5], ["0%", "60%"]);
  const stonesY = useTransform(smoothScroll, [0, 0.5], ["0%", "40%"]);
  const productsY = useTransform(smoothScroll, [0, 0.5], ["0%", "20%"]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fog Layer */}
      <motion.div
        className="absolute inset-0 -z-30 bg-bottom bg-cover"
        style={{
          backgroundImage: `url(${bgfog})`,
          y: fogY,
        }}
      />

      {/* Stones Layer */}
      <motion.div
        className="absolute inset-0 -z-20 bg-bottom bg-cover"
        style={{
          backgroundImage: `url(${bgStones})`,
          y: stonesY,
        }}
      />

      {/* Hero Products */}
      <motion.div
        className="absolute inset-0 -z-10 bg-bottom bg-contain bg-no-repeat flex items-end justify-center"
        style={{
          backgroundImage: `url(${heroProducts})`,
          y: productsY,
        }}
      />
    </section>
  );
};

export default Parallax;
