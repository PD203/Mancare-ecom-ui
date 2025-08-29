import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const infoLinks = [
    { name: "Formats", href: "/formats" },
    { name: "Compression", href: "/compression" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Status", href: "/status" },
  ];

  const resourceLinks = [
    { name: "Accessories", href: "/accessories" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">INFO</h3>
            <ul className="space-y-4">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">RESOURCES</h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Subscribe to our email newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-background border-border/50 focus:border-gold"
              />
              <Button className="hero-button px-6">
                SUBSCRIBE
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-gold rounded-md flex items-center justify-center">
              <span className="text-gold-foreground font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold accent-text">VELOURA</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Veloura. All rights reserved. Crafted for the modern gentleman.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;