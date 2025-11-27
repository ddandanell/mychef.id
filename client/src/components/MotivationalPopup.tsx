import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const MOTIVATIONAL_MESSAGES = [
  "Hello! Are you looking for getting a private chef to come to your home? We can help make your dinner unforgettable.",
  "Thinking about hosting a special dinner? Our expert chefs are ready to transform your villa into a fine dining experience.",
  "Why spend hours cooking? Let one of our professional chefs handle everything while you relax and enjoy your guests.",
  "Planning a celebration in Bali? We have background-checked chefs ready to create personalized menus for your event.",
  "Romantic dinner for two? Beach gathering? Our chefs specialize in creating magical moments at your villa.",
  "Looking for something special this weekend? Fresh ingredients, expert preparation, and impeccable service at your door.",
  "Stop worrying about the kitchen. Our experienced chefs bring restaurant-quality meals directly to your Bali villa.",
  "Want to impress your guests? Let our professional chefs create a custom dining experience they'll never forget.",
  "From intimate dinners to large celebrations - we've prepared over 1000 unforgettable culinary experiences since 2012.",
  "Concerned about quality and trust? All our chefs are background-checked, certified, and fully insured.",
  "Your villa deserves the best. Let us bring fine dining to your home with personalized service and premium ingredients.",
  "Planning an event? Our chefs handle everything - menu planning, shopping, cooking, and cleanup.",
  "Book at least 48 hours in advance and let us create something amazing for your special occasion.",
];

export default function MotivationalPopup() {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const showRandomMessage = () => {
      const randomMessage = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];
      const id = nextId;
      setNextId(prev => prev + 1);
      
      setMessages(prev => [...prev, { id, text: randomMessage }]);

      // Auto-remove after 8 seconds
      setTimeout(() => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
      }, 8000);
    };

    // Show first message after 5 seconds
    const initialTimer = setTimeout(showRandomMessage, 5000);

    // Show random messages every 20-25 seconds (much slower)
    const interval = setInterval(showRandomMessage, 20000 + Math.random() * 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [nextId]);

  const removeMessage = (id: number) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-3 pointer-events-auto"
            style={{ marginBottom: `${index * 80}px` }}
          >
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg shadow-xl p-5 sm:p-6 max-w-sm border border-primary/50 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-foreground/90" />
              <div className="flex-1">
                <p className="text-sm sm:text-base font-medium leading-relaxed">{msg.text}</p>
              </div>
              <button
                onClick={() => removeMessage(msg.id)}
                className="flex-shrink-0 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                aria-label="Close message"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
