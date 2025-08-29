import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import woodBrush from "@/assets/wood-brush.jpg";
import shavingBrush from "@/assets/shaving-brush.jpg";

const AccessoriesSection = () => {
  const accessories = [
    {
      id: "wood-brush",
      title: "Wood Brush",
      image: woodBrush,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to more.",
    },
    {
      id: "shaving-brush",
      title: "Shaving Brush",
      image: shavingBrush,
      description: "Premium shaving brush crafted with natural bristles for the perfect lather and comfortable shave experience.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="accent-text">ACCESSORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Unlock Proper Care's Full Potentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={accessory.image}
                  alt={accessory.title}
                  className="w-80 h-80 object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="max-w-md">
                <p className="text-sm uppercase tracking-wider text-gold mb-2">
                  ACCESSORIES
                </p>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {accessory.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {accessory.description}
                </p>
                <Button className="premium-button">
                  SHOP
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;