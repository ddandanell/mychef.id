import { SiWhatsapp } from 'react-icons/si';

const WHATSAPP_NUMBER = '+6282237565997';
const WHATSAPP_MESSAGE = 'Hi! I would like to inquire about booking a private chef in Bali.';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-primary-foreground rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200"
      data-testid="button-sticky-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="w-8 h-8 md:w-9 md:h-9" />
    </button>
  );
}
