import { motion } from "framer-motion";
import { Shield, Award, Users, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every device is certified and comes with comprehensive warranty",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Rigorous testing ensures you get the best pre-owned Apple products",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority with dedicated support",
    },
  ];

  const faqs = [
    {
      question: "What does the 3-month warranty cover?",
      answer: "Our warranty covers hardware defects, battery issues, display problems, and charging port malfunctions. Physical damage, water damage, and lost/stolen devices are not covered.",
    },
    {
      question: "How do you test the devices?",
      answer: "Each device undergoes a 50+ point inspection including battery health check, screen calibration, camera testing, connectivity verification, and full factory reset.",
    },
    {
      question: "Can I return a device?",
      answer: "Yes! We offer a 14-day return policy. If you're not satisfied, return the device in its original condition for a full refund.",
    },
    {
      question: "How do I sell my device?",
      answer: "Fill out our sell form with device details and photos. Our AI will generate an instant estimate. Once accepted, we'll send a free shipping label.",
    },
    {
      question: "Are the devices unlocked?",
      answer: "Yes, all devices are carrier-unlocked and work with any carrier worldwide.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* About Section */}
      <section className="py-20 bg-[var(--gradient-hero)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ReStory</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to make premium Apple products accessible to everyone through certified pre-owned devices backed by comprehensive warranties.
            </p>
            <p className="text-muted-foreground">
              Founded in 2023, ReStory has helped thousands of customers save smart while staying assured with quality pre-owned Apple products. Every device tells a story, and we're here to give it a new chapter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="glass-effect text-center card-hover">
                  <CardContent className="pt-8 pb-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="glass-effect rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions? We're here to help. Reach out to our team anytime.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">support@restory.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">1-800-RESTORY</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">123 Market Street, San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Textarea placeholder="Your Message" rows={5} />
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
