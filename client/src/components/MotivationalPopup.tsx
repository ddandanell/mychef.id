import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const MOTIVATIONAL_MESSAGES = [
  "Hello! Are you looking for getting a private chef to come to your home?",
  "Thinking about hosting a special dinner at your villa?",
  "Why spend hours cooking? Let our chefs handle everything.",
  "Planning a celebration in Bali? We have the perfect chef for you.",
  "Romantic dinner for two? Beach gathering? We specialize in that.",
  "Want to impress your guests with fine dining at home?",
  "Stop worrying about the kitchen. Our chefs bring restaurant-quality meals.",
  "Over 1000 unforgettable experiences since 2012.",
  "All our chefs are background-checked, certified, and fully insured.",
  "Your villa deserves the best. Let us handle your special occasion.",
  "Planning an event? We handle everything from menu to cleanup.",
  "Book 48 hours in advance and let us create magic for you.",
];

export default function MotivationalPopup() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const showNextMessage = () => {
      const randomMessage = MOTIVATIONAL_MESSAGES[Math.floor(Math.random() * MOTIVATIONAL_MESSAGES.length)];
      setCurrentMessage(randomMessage);
      setDisplayedText('');
      setIsTyping(true);
    };

    // Show first message after 6 seconds
    const initialTimer = setTimeout(showNextMessage, 6000);

    // Show random messages every 35-40 seconds
    const interval = setInterval(showNextMessage, 35000 + Math.random() * 5000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping || !currentMessage) return;

    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        // Keep message visible for 7 seconds, then clear
        const hideTimer = setTimeout(() => {
          setCurrentMessage('');
          setDisplayedText('');
        }, 7000);
        return () => clearTimeout(hideTimer);
      }
    }, 30); // 30ms between each character for smooth typing

    return () => clearInterval(typingInterval);
  }, [currentMessage, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <AnimatePresence>
        {displayedText && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="pointer-events-auto"
          >
            <div className="relative max-w-xs">
              <div className="absolute -top-6 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                myCHEF Message
              </div>
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg shadow-xl p-3 sm:p-4 border border-primary/50 flex items-start gap-2 mt-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary-foreground/90" />
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium leading-relaxed min-h-6">{displayedText}{isTyping && <span className="animate-pulse">|</span>}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
