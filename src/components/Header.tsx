import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bg from "@/assets/bg/bg.jpg";

const Header = ({ textColor = "text-white" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Propershop", href: "/products" },
    { name: "Our Story", href: "/story" },
    { name: "Executive Package", href: "/executive" },
    { name: "Why Veloura", href: "/why" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 bg-left">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-2 ${textColor}`}>
            <span className="text-2xl font-julius">VELOURA</span>
          </Link>

          {/* Right side: Navigation + Actions */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Navigation */}
            <nav className="flex font-inter items-center space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-md  transition-colors duration-200 relative group font-inter font-thin ${textColor}`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-4">
              {[Search, User, ShoppingBag].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className={`hover:bg-white/10 transition-colors ${textColor}`}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-cover bg-center backdrop-blur-md"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block hover:text-foreground transition-colors duration-200 ${textColor}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
              {[Search, User, ShoppingBag].map((Icon, idx) => (
                <Button key={idx} variant="ghost" size="icon" className={textColor}>
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
