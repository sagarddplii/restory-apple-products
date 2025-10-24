import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactInfo = {
    phone: "+91 99457 71616",
    email: "info@restory.in",
    address: "Plot No. 5730, Congress Rd, Shivaji Colony, Tilakwadi, Belagavi, Karnataka 590001",
    hours: "Monday to Saturday: 11:00 AM – 8:30 PM\nSunday: Closed"
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: contactInfo.phone,
      action: "Call Now",
      href: `tel:${contactInfo.phone}`
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your queries",
      value: contactInfo.email,
      action: "Send Email",
      href: `mailto:${contactInfo.email}`
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our store",
      value: contactInfo.address,
      action: "Get Directions",
      href: "https://maps.google.com/?q=Plot+No.+5730,+Congress+Rd,+Shivaji+Colony,+Tilakwadi,+Belagavi,+Karnataka+590001"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available",
      value: contactInfo.hours,
      action: "View Hours",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with <span className="text-gradient">ReStory</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help you with all your certified pre-owned Apple product needs. 
              Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground break-words">
                      {method.value}
                    </p>
                    <Button asChild className="w-full">
                      <a href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'}>
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">ReStory Gadgets</CardTitle>
                <CardDescription>
                  Your trusted partner for certified pre-owned Apple products in Belagavi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Store Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Address</p>
                          <p className="text-sm text-muted-foreground">
                            {contactInfo.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Operating Hours</p>
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {contactInfo.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Quick Contact</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a 
                            href={`tel:${contactInfo.phone}`}
                            className="text-sm text-primary hover:underline"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <a 
                            href={`https://wa.me/919945771616`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            Chat with us on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h3 className="font-semibold text-lg mb-4">Why Choose ReStory?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <h4 className="font-medium">3-Month Warranty</h4>
                      <p className="text-sm text-muted-foreground">Every device comes with warranty</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <h4 className="font-medium">Certified Quality</h4>
                      <p className="text-sm text-muted-foreground">Thoroughly tested devices</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 font-bold">✓</span>
                      </div>
                      <h4 className="font-medium">Local Support</h4>
                      <p className="text-sm text-muted-foreground">Based in Belagavi, Karnataka</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
