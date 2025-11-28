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
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1, boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-primary-foreground rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl"
      data-testid="button-sticky-whatsapp"
      aria-label="Contact us on WhatsApp"
      style={{ 
        boxShadow: "0 10px 30px -5px rgba(37, 211, 102, 0.4)",
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <SiWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
      </motion.div>
    </motion.button>
  );
}
