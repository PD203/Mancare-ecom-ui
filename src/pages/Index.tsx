import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import ModelSection from "@/components/ModelSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AccessoriesSection />
      <ModelSection />
      <Footer />
    </div>
  );
};

export default Index;
