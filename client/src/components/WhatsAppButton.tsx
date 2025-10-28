import { useState, useEffect } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { getWhatsAppURL } from '@/lib/whatsappCTA';

const ROTATING_MESSAGES = [
  "Hi! We're here to help you plan the perfect private chef experience 👨‍🍳",
  "Hey! Let us know how we can support you today. We're always here! 🌟",
  "Hi! Looking for a private chef in Bali? We'd love to help you! 🍽️",
  "Hey! Have questions? Our team is ready to assist you right now! 💬",
  "Hi! Planning something special? Let us create the perfect menu for you! ✨",
  "Hey! Need a quote? Chat with us - we reply within 10 minutes! ⚡",
  "Hi! Celebrating in Bali? Let's make your event unforgettable! 🎉",
  "Hey! Want to know more? We're here to answer all your questions! 🙋",
  "Hi! Craving something delicious? Our chefs are ready for you! 😋",
  "Hey! Let's create an amazing dining experience together! 🌺",
];

export default function WhatsAppButton() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const currentMessage = ROTATING_MESSAGES[currentMessageIndex];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % ROTATING_MESSAGES.length);
    }, 40000); // Change message every 40 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const phoneNumber = '+6282237565997'.replace(/\+/g, '');
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(currentMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-primary-foreground rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 animate-pulse"
      data-testid="button-sticky-whatsapp"
      aria-label="Contact us on WhatsApp"
      title={currentMessage}
    >
      <SiWhatsapp className="w-8 h-8 md:w-9 md:h-9" />
    </button>
  );
}
