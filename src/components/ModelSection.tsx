import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import modelHero from "@/assets/model-hero.jpg";

const ModelSection = () => {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={modelHero}
          alt="Sophisticated male model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              For Leaders
            </h2>
            <div className="w-32 h-0.5 bg-gradient-gold mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right mb-16"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light italic text-muted-foreground">
              By Leaders
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button className="premium-button text-lg px-12 py-4 h-auto">
              SHOP
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-10 w-2 h-2 bg-gradient-gold rounded-full"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-20 w-3 h-3 bg-copper rounded-full"
      />
    </section>
  );
};

export default ModelSection;