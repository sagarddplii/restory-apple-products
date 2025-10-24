import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! 👋 I'm PocketBuddy — your certified Apple helper. Want to check your warranty or sell a device?",
    },
  ]);
  const [input, setInput] = useState("");

  const quickActions = [
    { label: "Check Warranty", action: "warranty" },
    { label: "Sell My Device", action: "sell" },
    { label: "Talk to Support", action: "support" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    
    // Simulate AI response (replace with Lovable AI later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'd be happy to help with that! 😊 Could you provide more details?",
        },
      ]);
    }, 1000);

    setInput("");
  };

  const handleQuickAction = (action: string) => {
    if (action === "warranty") {
      window.location.href = "/warranty";
    } else if (action === "sell") {
      window.location.href = "/sell";
    } else {
      setMessages([
        ...messages,
        { role: "user", content: "I need to talk to support" },
        {
          role: "assistant",
          content: "📧 Our support team is here for you! Email us at support@restory.com or call 1-800-RESTORY.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 animate-glow-pulse"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] h-[500px] glass-effect rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-primary-foreground">
              <h3 className="font-semibold">PocketBuddy</h3>
              <p className="text-xs opacity-90">Your certified Apple helper</p>
            </div>

            {/* Messages */}
            <ScrollArea className="h-[340px] p-4">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-card-foreground"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {quickActions.map((action) => (
                      <Button
                        key={action.action}
                        onClick={() => handleQuickAction(action.action)}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
