import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// Parallax images
import heroProducts from "@/assets/Hero/heroProducts.png";
import bgStones from "@/assets/Hero/bgStones.png";
import bgfog from "@/assets/Hero/bgfog.png";
import Header from "./Header";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 120,
  });

  // Parallax transforms
  const fogY = useTransform(smoothScroll, [0, 1], ["0%", "50%"]);
  const stonesY = useTransform(smoothScroll, [0, 2], ["0%", "40%"]);
  const productsY = useTransform(smoothScroll, [0, 0.5], ["0%", "60%"]);

  return (
    <>
<Header/>     

    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-start sm:items-center pt-32 sm:pt-0 justify-start bg-cover bg-left"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >


      {/* === Content === */}
      <div className="relative z-40 container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-4"
          >
            <p className="text-gold text-xl sm:text-2xl md:text-4xl lg:text-4xl font-thin font-inria tracking-wide">
              Master Your Look
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="section-title text-4xl pb-4 sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-inria font-extralight leading-tight"
          >
            Define Your{" "}
            <span className="gold-text font-inria font-medium italic ">Legacy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-2xl sm:text-3xl font-normal font-instrument text-gold mb-8 max-w-2xl leading-relaxed"
          >
            Proper Care for the Modern Man
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              className="bg-transparent hover:bg-transparent text-gold font-lexend font-thin text-base sm:text-md border border-gold rounded-full px-8 py-4 sm:px-10 sm:py-5 h-auto"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Experience Excellence
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ y: "50%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full bg-bottom bg-cover"
          style={{
            backgroundImage: `url(${bgfog})`,
            y: fogY,
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        initial={{ y: "40%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="h-full w-full bg-bottom bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${bgStones})`,
            y: stonesY,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-40 flex items-end justify-center sm:justify-end sm:pr-10 pointer-events-none"
        initial={{ y: "60%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={heroProducts}
          alt="Hero Products"
          className="h-1/2 sm:h-2/3 lg:h-3/4 w-auto"
          style={{ y: productsY }}
        />
      </motion.div>

    </section>
    </>
  );
};

export default HeroSection;