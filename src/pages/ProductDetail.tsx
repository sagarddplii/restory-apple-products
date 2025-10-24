import { motion } from "framer-motion";
import { Shield, CheckCircle, TrendingUp, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const ProductDetail = () => {
  const product = {
    name: "iPhone 14 Pro",
    condition: "Excellent",
    price: 66000,
    originalPrice: 83000,
    images: [
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80",
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=800&q=80",
    ],
    specs: {
      Display: "6.1-inch Super Retina XDR",
      Chip: "A16 Bionic",
      Camera: "48MP Main + 12MP Ultra Wide",
      Storage: "256GB",
      Battery: "95% Health",
    },
    warranty: {
      duration: "3 Months",
      coverage: ["Hardware defects", "Battery issues", "Display problems", "Charging port"],
      exclusions: ["Physical damage", "Water damage", "Lost/stolen"],
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-2xl bg-card">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <Badge className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 text-sm">
                3-Month Certified Warranty
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 2}`}
                  className="w-full h-32 object-cover rounded-xl cursor-pointer hover:opacity-75 transition"
                />
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.condition} Condition</p>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-5xl font-bold text-gradient">₹{product.price.toLocaleString()}</span>
              <span className="text-2xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge variant="secondary" className="text-sm">Save ₹{(product.originalPrice - product.price).toLocaleString()}</Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">3-month comprehensive warranty included</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Thoroughly tested & certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm">100% authentic Apple product</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Buy Now
              </Button>
            </div>

            {/* Tabs */}
            <Card className="glass-effect">
              <CardContent className="p-6">
                <Tabs defaultValue="specs" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="warranty">Warranty Info</TabsTrigger>
                  </TabsList>
                  <TabsContent value="specs" className="space-y-3 mt-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border/40 last:border-0">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="warranty" className="mt-4 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Coverage ({product.warranty.duration})</h4>
                      <ul className="space-y-2">
                        {product.warranty.coverage.map((item) => (
                          <li key={item} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Exclusions</h4>
                      <ul className="space-y-2">
                        {product.warranty.exclusions.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Chatbot CTA */}
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6">
                <p className="text-sm mb-3">💬 Have questions about this device?</p>
                <p className="text-xs text-muted-foreground">
                  Ask PocketBuddy about warranty, price drops, or device condition
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ProductDetail;
