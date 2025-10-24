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
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200"
      data-testid="button-sticky-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="w-9 h-9" />
    </button>
  );
}
