import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Products = () => {
  const [priceRange, setPriceRange] = useState([25000, 150000]);

  const products = [
    { id: 1, name: "iPhone 14 Pro", category: "iphone", condition: "Excellent", price: 66000, image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&q=80" },
    { id: 2, name: "MacBook Pro M2", category: "macbook", condition: "Very Good", price: 125000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80" },
    { id: 3, name: "iPad Air", category: "ipad", condition: "Excellent", price: 41000, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80" },
    { id: 4, name: "iPhone 13", category: "iphone", condition: "Good", price: 50000, image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=500&q=80" },
    { id: 5, name: "Apple Watch Series 8", category: "watch", condition: "Excellent", price: 29000, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80" },
    { id: 6, name: "MacBook Air M1", category: "macbook", condition: "Very Good", price: 75000, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Certified Pre-Owned Apple Products</h1>
          <p className="text-muted-foreground text-lg">Browse our collection of certified devices</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="glass-effect sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Filters</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="iphone">iPhone</SelectItem>
                        <SelectItem value="macbook">MacBook</SelectItem>
                        <SelectItem value="ipad">iPad</SelectItem>
                        <SelectItem value="watch">Apple Watch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Condition</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="All Conditions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Conditions</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-4 block">
                      Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                    </label>
                    <Slider
                      min={25000}
                      max={150000}
                      step={5000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="card-hover overflow-hidden">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{product.condition} Condition</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-gradient">
                            ₹{(product.price * 83).toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{(product.price * 83 * 1.4).toLocaleString()}
                          </span>
                        </div>
                        <Button asChild size="sm">
                          <Link to={`/products/${product.id}`}>View</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Products;
