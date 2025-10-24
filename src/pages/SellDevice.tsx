import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const SellDevice = () => {
  const { toast } = useToast();
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate AI price estimation
    const mockEstimate = Math.floor(Math.random() * 500) + 300;
    setEstimate(mockEstimate);
    
    toast({
      title: "Estimate Generated! 💰",
      description: `Your device is valued at $${mockEstimate}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sell Your Device</h1>
            <p className="text-muted-foreground text-lg">Get instant price estimate powered by AI</p>
          </div>

          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Device Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="device-type">Device Type</Label>
                  <Select>
                    <SelectTrigger id="device-type">
                      <SelectValue placeholder="Select device type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iphone">iPhone</SelectItem>
                      <SelectItem value="macbook">MacBook</SelectItem>
                      <SelectItem value="ipad">iPad</SelectItem>
                      <SelectItem value="watch">Apple Watch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" placeholder="e.g., iPhone 14 Pro" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select>
                    <SelectTrigger id="condition">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent - Like new, no visible damage</SelectItem>
                      <SelectItem value="good">Good - Minor scratches, fully functional</SelectItem>
                      <SelectItem value="average">Average - Visible wear, fully functional</SelectItem>
                      <SelectItem value="poor">Poor - Significant wear or issues</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="storage">Storage Capacity</Label>
                  <Select>
                    <SelectTrigger id="storage">
                      <SelectValue placeholder="Select storage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="64">64GB</SelectItem>
                      <SelectItem value="128">128GB</SelectItem>
                      <SelectItem value="256">256GB</SelectItem>
                      <SelectItem value="512">512GB</SelectItem>
                      <SelectItem value="1024">1TB</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Upload Photos (up to 3)</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square border-2 border-dashed border-border rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Get Instant Estimate
                </Button>
              </form>

              {estimate && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl text-center"
                >
                  <p className="text-sm text-muted-foreground mb-2">Estimated Value</p>
                  <p className="text-5xl font-bold text-gradient mb-4">${estimate}</p>
                  <div className="flex space-x-4">
                    <Button className="flex-1">Accept & Sell</Button>
                    <Button variant="outline" className="flex-1">Get Better Offer</Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          <Card className="glass-effect mt-8">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-semibold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fill Device Details</h4>
                    <p className="text-sm text-muted-foreground">Provide information about your device</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-semibold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Get AI Estimate</h4>
                    <p className="text-sm text-muted-foreground">Our AI analyzes market data for best price</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-semibold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ship & Get Paid</h4>
                    <p className="text-sm text-muted-foreground">Free shipping label, payment within 24 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default SellDevice;
