import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import faceOilHero from "@/assets/face-oil-hero.jpg";
import bodyWashHero from "@/assets/body-wash-hero.jpg";

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
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="accent-text">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium grooming essentials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="product-card cursor-pointer group"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <span className="text-lg text-muted-foreground">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <Button 
                  className="premium-button w-full group-hover:bg-gold/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;