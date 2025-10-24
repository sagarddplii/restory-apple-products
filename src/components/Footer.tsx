import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/restory-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="ReStory" className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              Certified pre-owned Apple products with 3-month warranty. Save smart, stay assured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products?category=iphone" className="hover:text-primary transition-colors">iPhones</Link></li>
              <li><Link to="/products?category=macbook" className="hover:text-primary transition-colors">MacBooks</Link></li>
              <li><Link to="/products?category=ipad" className="hover:text-primary transition-colors">iPads</Link></li>
              <li><Link to="/products?category=watch" className="hover:text-primary transition-colors">Apple Watch</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/warranty" className="hover:text-primary transition-colors">Check Warranty</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/about#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+919945771616" className="hover:text-primary transition-colors">
                  +91 99457 71616
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon-Sat: 11:00 AM - 8:30 PM<br />Sunday: Closed</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-xs">
                  Plot No. 5730, Congress Rd, Shivaji Colony,<br />
                  Tilakwadi, Belagavi, Karnataka 590001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ReStory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
