import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, MessagesSquare, CheckCircle, Sparkles } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';
const WHATSAPP_MESSAGE = 'Hi! I would like to start planning my private chef experience in Bali.';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Contact Us on WhatsApp',
    description: 'Share your celebration details - villa location, number of guests, preferred date, and cuisine style (Indonesian, Western, Japanese fusion, etc.)',
  },
  {
    icon: FileText,
    title: 'Receive Custom Menu Proposals',
    description: 'Our chefs design personalized menus with transparent pricing in Indonesian Rupiah. Chef service fees and ingredient costs quoted separately.',
  },
  {
    icon: MessagesSquare,
    title: 'Chat With Your Chef',
    description: 'Message back and forth on WhatsApp until your perfect menu is ready. Ask questions, make adjustments, discuss ingredients.',
  },
  {
    icon: CheckCircle,
    title: 'Confirm Your Booking',
    description: "Once you're happy, we send payment details. Secure your date with our simple booking process.",
  },
  {
    icon: Sparkles,
    title: 'Enjoy Your Experience!',
    description: 'Your chef arrives at your villa with fresh ingredients (we can help source them!) and creates an unforgettable dining experience.',
  },
];

export default function HowItWorks() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-how-it-works-headline">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 mb-12">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`card-step-${index}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary/20 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-step-${index}-title`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed" data-testid={`text-step-${index}-description`}>
                    {step.description}
                  </p>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-how-it-works-whatsapp"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="hidden sm:inline">Start Planning on WhatsApp</span>
            <span className="sm:hidden">Start Planning</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
