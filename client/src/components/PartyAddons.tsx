import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Flame, Music, Wine } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';
const WHATSAPP_MESSAGE = 'Hi! I would like to ask about party equipment and add-on services for my event.';

const ADDONS = [
  {
    icon: Flame,
    title: 'Professional BBQ Grills',
    description: 'Large professional grills available for rent. Perfect for villa parties and BBQ feasts. We handle delivery, setup, and pickup.',
  },
  {
    icon: Music,
    title: 'DJ & Sound System',
    description: 'Complete sound system with speakers, or book a professional DJ to keep your party going. Full party entertainment solutions.',
  },
  {
    icon: Wine,
    title: 'Wine Tasting Experience',
    description: 'Partner with local Bali wineries for an elegant wine tasting paired with your dinner. Each course matched with the perfect wine selection.',
  },
];

export default function PartyAddons() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-addons-headline">
          Complete Party Solutions
        </h2>
        <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center mb-12" data-testid="text-addons-description">
          We don't just provide incredible chefs. We can arrange everything needed for the perfect party experience at your villa - from equipment to entertainment to wine experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ADDONS.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-addon-${index}`}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold mb-3" data-testid={`text-addon-title-${index}`}>
                      {addon.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed" data-testid={`text-addon-description-${index}`}>
                      {addon.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-card border border-border rounded-xl p-6 lg:p-8 text-center">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-3" data-testid="text-addons-cta-headline">
            Need Something Special?
          </h3>
          <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-6" data-testid="text-addons-cta-description">
            Music speakers, party decorations, special equipment - whatever you need to make your villa party perfect, we can arrange it. Just tell us what you're looking for.
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-addons-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Ask About Party Equipment</span>
            <span className="sm:hidden">Ask About Add-ons</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
