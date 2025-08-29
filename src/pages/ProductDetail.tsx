import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import faceOilHero from "@/assets/face-oil-hero.jpg";
import bodyWashHero from "@/assets/body-wash-hero.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  id: string;
  title: string;
  price: string;
  images: string[];
  description: string;
  usage: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const products: Record<string, Product> = {
    "face-oil": {
      id: "face-oil",
      title: "Face Oil",
      price: "399 rs",
      images: [faceOilHero, faceOilHero],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to more.",
      usage: "Apply 2-3 drops to clean, dry skin. Gently massage in upward circular motions until fully absorbed. Use morning and evening for best results.",
    },
    "body-wash": {
      id: "body-wash",
      title: "Body Wash",
      price: "299 rs",
      images: [bodyWashHero, bodyWashHero],
      description: "Premium body wash formulated with natural ingredients to cleanse and nourish your skin while providing a luxurious lather and masculine fragrance.",
      usage: "Apply to wet skin, work into a rich lather, and rinse thoroughly. Use daily for optimal skin health and fragrance.",
    },
  };

  const product = id ? products[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button className="premium-button">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-card">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index
                        ? "border-gold"
                        : "border-border hover:border-gold/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="text-2xl text-gold font-semibold">
                  {product.price}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="text-foreground font-medium">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button className="hero-button w-full text-lg py-4 h-auto">
                Add to Cart
              </Button>

              {/* Tabs */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted/30">
                  <TabsTrigger 
                    value="description"
                    className="data-[state=active]:bg-gold data-[state=active]:text-gold-foreground"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger 
                    value="usage"
                    className="data-[state=active]:bg-gold data-[state=active]:text-gold-foreground"
                  >
                    Proper Usage
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </TabsContent>
                <TabsContent value="usage" className="mt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.usage}
                  </p>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;