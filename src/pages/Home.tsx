import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Star, TrendingUp, CheckCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_QUERY, ShopifyProduct } from "@/lib/shopify";

const Home = () => {
  const { data: productsData, isLoading } = useQuery({
    queryKey: ['shopify-products'],
    queryFn: async () => {
      const response = await storefrontApiRequest(STOREFRONT_QUERY, { first: 6 });
      return response.data.products.edges as ShopifyProduct[];
    },
  });

  const features = [
    {
      icon: Shield,
      title: "3-Month Warranty",
      description: "Every device comes with comprehensive coverage",
    },
    {
      icon: CheckCircle,
      title: "Certified Quality",
      description: "Thoroughly tested and professionally restored",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Save up to 40% on like-new Apple products",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        
        {/* Refined Green Wave Animation */}
        <div className="absolute inset-0">
          {/* Subtle base texture */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(3px 3px at 50px 50px, rgba(34, 197, 94, 0.4), transparent),
                radial-gradient(2px 2px at 150px 100px, rgba(16, 185, 129, 0.3), transparent),
                radial-gradient(3px 3px at 250px 30px, rgba(5, 150, 105, 0.4), transparent),
                radial-gradient(2px 2px at 350px 80px, rgba(34, 197, 94, 0.3), transparent)
              `,
              backgroundSize: "400px 400px"
            }}
          />
          
          {/* Main elegant wave */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-0 w-full h-32"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(34, 197, 94, 0.15) 0%, 
                  rgba(16, 185, 129, 0.1) 50%, 
                  rgba(5, 150, 105, 0.2) 100%
                ),
                radial-gradient(1px 1px at 30px 20px, rgba(255, 255, 255, 0.3), transparent),
                radial-gradient(1px 1px at 60px 40px, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(1px 1px at 90px 10px, rgba(255, 255, 255, 0.4), transparent)
              `,
              clipPath: "polygon(0% 100%, 20% 80%, 40% 85%, 60% 75%, 80% 80%, 100% 70%, 100% 100%)"
            }}
          />
          
          {/* Secondary wave */}
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -0.5, 0],
              scale: [1, 0.98, 1]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-0 left-0 w-full h-24"
            style={{
              background: `
                linear-gradient(45deg, 
                  rgba(16, 185, 129, 0.12) 0%, 
                  rgba(5, 150, 105, 0.18) 50%, 
                  rgba(34, 197, 94, 0.1) 100%
                ),
                radial-gradient(1px 1px at 40px 25px, rgba(255, 255, 255, 0.25), transparent),
                radial-gradient(1px 1px at 80px 45px, rgba(255, 255, 255, 0.2), transparent)
              `,
              clipPath: "polygon(0% 100%, 30% 85%, 50% 90%, 70% 80%, 90% 85%, 100% 75%, 100% 100%)"
            }}
          />
          
          {/* Accent wave */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.8, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
            className="absolute bottom-0 left-0 w-full h-20"
            style={{
              background: `
                linear-gradient(225deg, 
                  rgba(5, 150, 105, 0.1) 0%, 
                  rgba(34, 197, 94, 0.15) 50%, 
                  rgba(16, 185, 129, 0.12) 100%
                ),
                radial-gradient(1px 1px at 25px 15px, rgba(255, 255, 255, 0.2), transparent),
                radial-gradient(1px 1px at 55px 35px, rgba(255, 255, 255, 0.3), transparent)
              `,
              clipPath: "polygon(0% 100%, 25% 90%, 45% 95%, 65% 85%, 85% 90%, 100% 85%, 100% 100%)"
            }}
          />
        </div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Certified Pre-Owned Apple Products
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Save Smart, Stay Assured with <span className="text-gradient font-semibold">3-Month Peace of Mind</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/products">Shop Certified</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/sell">Sell Your Device</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="card-hover glass-effect border-0">
                  <CardContent className="pt-6 text-center">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">Handpicked certified devices just for you</p>
          </motion.div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : !productsData || productsData.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products yet</h3>
              <p className="text-muted-foreground mb-6">
                Tell us what product you'd like to add, including the name and price!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productsData.slice(0, 3).map((product, idx) => (
                <motion.div
                  key={product.node.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="card-hover overflow-hidden">
                    <div className="relative">
                      {product.node.images.edges[0] ? (
                        <img
                          src={product.node.images.edges[0].node.url}
                          alt={product.node.title}
                          className="w-full h-64 object-cover"
                        />
                      ) : (
                        <div className="w-full h-64 bg-muted flex items-center justify-center">
                          <Package className="h-12 w-12 text-muted-foreground" />
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        3-Month Certified
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.node.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.node.description || "Certified Pre-Owned"}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-gradient">
                            ₹{Math.round(parseFloat(product.node.priceRange.minVariantPrice.amount) * 83).toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{Math.round(parseFloat(product.node.priceRange.minVariantPrice.amount) * 83 * 1.4).toLocaleString()}
                          </span>
                        </div>
                        <Button asChild>
                          <Link to={`/products/${product.node.handle}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <Star className="h-12 w-12 text-primary fill-primary" />
              <div>
                <p className="text-2xl font-bold">4.8/5 Rating</p>
                <p className="text-muted-foreground">From 2,000+ happy customers</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-12 w-12 text-primary" />
              <div>
                <p className="text-2xl font-bold">100% Authentic</p>
                <p className="text-muted-foreground">Genuine Apple products only</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle className="h-12 w-12 text-primary" />
              <div>
                <p className="text-2xl font-bold">Certified Safe</p>
                <p className="text-muted-foreground">Secure checkout & data wipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
