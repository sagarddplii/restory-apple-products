import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, AlertTriangle, XCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

type WarrantyStatus = "valid" | "expired" | "not-found" | null;

const Warranty = () => {
  const { toast } = useToast();
  const [imei, setImei] = useState("");
  const [status, setStatus] = useState<WarrantyStatus>(null);
  const [warrantyData, setWarrantyData] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (!imei || imei.length < 10) {
      toast({
        variant: "destructive",
        title: "Invalid IMEI",
        description: "Please enter a valid IMEI or Serial Number",
      });
      return;
    }

    // Simulate API call
    const mockStatuses: WarrantyStatus[] = ["valid", "expired", "not-found"];
    const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
    
    setStatus(randomStatus);
    
    if (randomStatus === "valid") {
      setWarrantyData({
        device: "iPhone 14 Pro",
        purchaseDate: "2024-08-15",
        warrantyStart: "2024-08-15",
        warrantyEnd: "2024-11-15",
        coverage: ["Hardware defects", "Battery issues", "Display problems", "Charging port"],
        exclusions: ["Physical damage", "Water damage", "Lost/stolen"],
      });
    } else if (randomStatus === "expired") {
      setWarrantyData({
        device: "iPhone 13",
        warrantyEnd: "2024-05-10",
      });
    }
  };

  const StatusDisplay = () => {
    if (!status) return null;

    switch (status) {
      case "valid":
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-primary">Warranty Active ✅</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Your device is fully covered</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Device</p>
                    <p className="font-semibold">{warrantyData.device}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Valid Until</p>
                    <p className="font-semibold">{warrantyData.warrantyEnd}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">Coverage Includes:</p>
                  <ul className="space-y-2">
                    {warrantyData.coverage.map((item: string) => (
                      <li key={item} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2">Not Covered:</p>
                  <ul className="space-y-2">
                    {warrantyData.exclusions.map((item: string) => (
                      <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button className="flex-1">Start Claim</Button>
                  <Button variant="outline" className="flex-1">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case "expired":
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="border-yellow-500 bg-yellow-500/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                  <div>
                    <CardTitle className="text-yellow-500">Warranty Expired ⚠️</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Coverage ended on {warrantyData.warrantyEnd}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">Your warranty has expired. You can still:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Purchase extended warranty</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Get paid repair service</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        );

      case "not-found":
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="border-destructive bg-destructive/5">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <div>
                    <CardTitle className="text-destructive">Not Found ❌</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">No warranty found for this IMEI</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">This device was not purchased from ReStory or the IMEI is incorrect.</p>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        );
    }
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
            <h1 className="text-4xl font-bold mb-4">Check Warranty Status</h1>
            <p className="text-muted-foreground text-lg">Enter your IMEI or Serial Number to verify coverage</p>
          </div>

          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle>Device Lookup</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCheck} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="imei">IMEI or Serial Number</Label>
                  <Input
                    id="imei"
                    placeholder="Enter 15-digit IMEI or Serial Number"
                    value={imei}
                    onChange={(e) => setImei(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Find IMEI: Settings → General → About
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Search className="mr-2 h-5 w-5" />
                  Check Warranty
                </Button>
              </form>
            </CardContent>
          </Card>

          <StatusDisplay />

          <Card className="glass-effect mt-8">
            <CardHeader>
              <CardTitle>About Our Warranty</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Every ReStory device comes with a comprehensive 3-month warranty covering hardware defects and component failures.
              </p>
              <p>
                Our warranty is designed to give you peace of mind when purchasing certified pre-owned Apple products.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Warranty;
