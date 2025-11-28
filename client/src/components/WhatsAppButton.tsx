import { SiWhatsapp } from 'react-icons/si';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const [, setLocation] = useLocation();
  
  const handleClick = () => {
    setLocation('/contact/confirm?source=floatingButton');
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-primary-foreground rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl hover-elevate active-elevate-2"
      data-testid="button-sticky-whatsapp"
      aria-label="Contact us on WhatsApp"
      style={{ 
        boxShadow: "0 10px 30px -5px rgba(37, 211, 102, 0.4)",
      }}
    >
      <SiWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
    </motion.button>
  );
}
