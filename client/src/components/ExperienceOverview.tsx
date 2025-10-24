import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import villaImage from '@assets/generated_images/Villa_terrace_rice_paddy_dining_024d1337.png';
import grillingImage from '@assets/generated_images/Chef_grilling_seafood_poolside_e160ded9.png';
import dinnerImage from '@assets/generated_images/Intimate_dinner_party_Sanur_605d729e.png';
import ingredientsImage from '@assets/generated_images/Fresh_Ubud_market_ingredients_f0d3df5e.png';
import dessertImage from '@assets/generated_images/Fine_dining_plated_dessert_2c0047a1.png';
import toastingImage from '@assets/generated_images/Guests_toasting_celebration_dinner_5570ed38.png';

const WHATSAPP_NUMBER = '+6282237565997';
const WHATSAPP_MESSAGE = 'Hi! I would like to chat about pricing for a private chef experience in Bali.';

const IMAGES = [
  { src: villaImage, alt: 'Private dining setup on villa terrace overlooking rice paddies' },
  { src: grillingImage, alt: 'Chef grilling fresh seafood at Bali beach house' },
  { src: dinnerImage, alt: 'Intimate dinner party in Sanur home' },
  { src: ingredientsImage, alt: 'Fresh local ingredients from Ubud markets' },
  { src: dessertImage, alt: 'Multi-course plated dessert' },
  { src: toastingImage, alt: 'Happy Indonesian and international guests toasting' },
];

export default function ExperienceOverview() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-experience-headline">
          Turn Your Villa Into Bali's Best Restaurant
        </h2>
        <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center mb-12" data-testid="text-experience-description">
          There is no more intimate restaurant than your own home. Whether you're staying in a luxury villa in Seminyak, celebrating in Ubud, or hosting friends at your Canggu beach house, bring the magic of fine dining to your table with talented chefs who create menus tailored to your cravings.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {IMAGES.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              data-testid={`img-experience-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-experience-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Chat on WhatsApp for Pricing</span>
            <span className="sm:hidden">Get Pricing</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
