import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AccessoriesSection from "@/components/AccessoriesSection";
import ModelSection from "@/components/ModelSection";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <HeroSection />
      <Featured />
      <AccessoriesSection />
      <ModelSection />
      <Footer />
    </div>
  );
};

export default Index;
