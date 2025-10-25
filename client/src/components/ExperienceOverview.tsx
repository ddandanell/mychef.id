import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import villaImage from '@assets/generated_images/Villa_terrace_rice_paddy_dining_024d1337.png';
import grillingImage from '@assets/ADY04381_1761302981950.jpg';
import dinnerImage from '@assets/generated_images/Intimate_dinner_party_Sanur_605d729e.png';
import villaDiningImage from '@assets/ADY04464_1761302865262.jpg';
import dessertImage from '@assets/generated_images/Fine_dining_plated_dessert_2c0047a1.png';
import toastingImage from '@assets/generated_images/Guests_toasting_celebration_dinner_5570ed38.png';

const IMAGES = [
  { src: villaImage, alt: 'Private dining setup on villa terrace overlooking rice paddies' },
  { src: grillingImage, alt: 'Fresh meat grilling on BBQ at private chef villa service' },
  { src: dinnerImage, alt: 'Intimate dinner party in Sanur home' },
  { src: villaDiningImage, alt: 'Group of friends enjoying private chef meal at luxury Bali villa' },
  { src: dessertImage, alt: 'Multi-course plated dessert' },
  { src: toastingImage, alt: 'Happy Indonesian and international guests toasting' },
];

export default function ExperienceOverview() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=experience');
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
                loading="lazy"
                decoding="async"
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
