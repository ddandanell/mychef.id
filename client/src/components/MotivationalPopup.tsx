import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const MOTIVATIONAL_MESSAGES = [
  "We have Chef just waiting to come home to you 👨‍🍳",
  "Your perfect culinary experience is just one WhatsApp away ✨",
  "Expert chefs ready to transform your dinner into a masterpiece 🍽️",
  "Villa dining just got a whole lot easier - let us handle the cooking 🏝️",
  "From your kitchen to restaurant-quality meals, we've got you covered 🌟",
  "Every meal tells a story - let our chefs write yours 📖",
  "No stress, no mess, just incredible food delivered to your villa 🎉",
  "Your guests will think you hired a 5-star restaurant 💎",
  "Personalized menus, premium ingredients, pure magic ✨",
  "Background-checked chefs, transparent pricing, unforgettable experiences 🙌",
  "From intimate dinners to grand celebrations - we do it all 🎊",
  "Fresh ingredients, expertly prepared, served with passion 🔥",
  "Stop cooking, start celebrating - let our chefs do the work 🥂",
  "Bali's most trusted private chef service since 2012 🏆",
  "Your villa deserves a chef - and we know just the one 👨‍🍳",
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

      // Auto-remove after 6 seconds
      setTimeout(() => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
      }, 6000);
    };

    // Show first message after 3 seconds
    const initialTimer = setTimeout(showRandomMessage, 3000);

    // Show random messages every 12-15 seconds
    const interval = setInterval(showRandomMessage, 12000 + Math.random() * 3000);

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
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg shadow-xl p-4 max-w-xs border border-primary/50 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-foreground/90" />
              <div className="flex-1">
                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
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
