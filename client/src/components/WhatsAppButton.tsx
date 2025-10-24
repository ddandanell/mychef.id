import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <Button
      size="lg"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 shadow-xl bg-primary hover:bg-primary text-primary-foreground rounded-full w-14 h-14 p-0 hover-elevate active-elevate-2"
      data-testid="button-sticky-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
}
