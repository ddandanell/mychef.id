import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Flame, Music, Wine, Utensils, Zap, BookOpen } from 'lucide-react';
import bbqImage from '@assets/generated_images/professional_barbecue_grill_setup.png';
import djImage from '@assets/generated_images/dj_sound_system_party.png';
import wineImage from '@assets/generated_images/wine_tasting_experience.png';
import sushiImage from '@assets/generated_images/premium_sushi_bar_service.png';
import teppanyakiImage from '@assets/generated_images/live_teppanyaki_cooking_show.png';
import balineseImage from '@assets/generated_images/balinese_cooking_class.png';

const ADDONS = [
  {
    icon: Flame,
    title: 'Professional BBQ Grills',
    description: 'Large professional grills available for rent. Perfect for villa parties and BBQ feasts. We handle delivery, setup, and pickup.',
    image: bbqImage,
  },
  {
    icon: Music,
    title: 'DJ & Sound System',
    description: 'Complete sound system with speakers, or book a professional DJ to keep your party going. Full party entertainment solutions.',
    image: djImage,
  },
  {
    icon: Wine,
    title: 'Wine Tasting Experience',
    description: 'Partner with local Bali wineries for an elegant wine tasting paired with your dinner. Each course matched with the perfect wine selection.',
    image: wineImage,
  },
  {
    icon: Utensils,
    title: 'Premium Sushi Bar',
    description: 'Master sushi chef creates fresh sashimi and rolls right at your villa. Premium seafood and authentic Japanese techniques for an unforgettable experience.',
    image: sushiImage,
  },
  {
    icon: Zap,
    title: 'Teppanyaki Cooking Show',
    description: 'Watch our chef cook your dinner with theatrical flair and precision. Interactive dining experience with flames, skill, and showmanship at your table.',
    image: teppanyakiImage,
  },
  {
    icon: BookOpen,
    title: 'Balinese Cooking Class',
    description: 'Learn authentic Indonesian cuisine from a professional chef. Interactive cooking class where you prepare dishes and enjoy the meal together.',
    image: balineseImage,
  },
];

export default function PartyAddons() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=partyAddons');
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ADDONS.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <Card key={index} className="hover-elevate overflow-hidden" data-testid={`card-addon-${index}`}>
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <img 
                    src={addon.image} 
                    alt={addon.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-addon-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col items-center text-center">
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
