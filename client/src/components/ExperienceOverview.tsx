import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText } from 'lucide-react';
import { useContactDialog } from '@/contexts/ContactDialogContext';

// Import all the new client photos
import diningExperience from '@assets/Dining-Experience-Bali-2_1761391000570.jpg';
import villaBreakfast from '@assets/In-Villa-Breakfast-bvilla-Seminyak-Bali-3_1761391000571.webp';
import chefPlating from '@assets/PrestigeLuxuryVillas_Vacation-Concierge_Relax_1761391000571.webp';
import gastronomy from '@assets/Concierge-Gastronomy-2022_1761391000572.jpg';
import cottonHouse from '@assets/bali-the-cotton-house-dinner_1761391000572.jpg';
import villaAloui from '@assets/villa-aloui-aloui-dining-01-62e20c82768f3_1761391000572.webp';
import villaSemara from '@assets/8-Villa-Semara-35_1761391000572.jpg';
import andariVilla from '@assets/Andari-Bali-Villas-2-3-bedroom-private-villas-Legian-Private-Villa-Dining-1-1030x593_1761391000572.jpg';
import beachDining from '@assets/group-beachfront-dining-casa-teresa-nighttime-1024x768_1761391000572.webp';
import romanticBeach from '@assets/ECB33570-B79E-479E-B9AF-C5C14DB52480-768x1024_1761391000572.jpg';
import grillingImage from '@assets/ADY04381_1761302981950.jpg';
import villaDiningImage from '@assets/ADY04464_1761302865262.jpg';

interface GalleryImage {
  src: string;
  alt: string;
}

const IMAGES_ROW1: GalleryImage[] = [
  { src: diningExperience, alt: 'Elegant villa dining table setup with tropical garden view' },
  { src: villaBreakfast, alt: 'Happy client enjoying breakfast at luxury villa in Bali' },
  { src: chefPlating, alt: 'Professional chef plating gourmet dish in villa kitchen' },
  { src: gastronomy, alt: 'Chef garnishing fine dining plate with precision' },
  { src: cottonHouse, alt: 'Happy clients with chef in villa kitchen' },
  { src: villaAloui, alt: 'Tropical villa dining room with breakfast spread' },
];

const IMAGES_ROW2: GalleryImage[] = [
  { src: villaSemara, alt: 'Villa server preparing elegant dinner table' },
  { src: andariVilla, alt: 'Beautiful Indonesian cuisine spread on villa dining table' },
  { src: beachDining, alt: 'Large group beachfront dining celebration at night' },
  { src: romanticBeach, alt: 'Romantic beach cabana dinner setup at sunset' },
  { src: grillingImage, alt: 'Fresh meat grilling on BBQ at private chef villa service' },
  { src: villaDiningImage, alt: 'Group of friends enjoying private chef meal at luxury Bali villa' },
];

interface ScrollingRowProps {
  images: GalleryImage[];
  direction: 'left' | 'right';
}

function ScrollingRow({ images, direction }: ScrollingRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = direction === 'left' ? 0.5 : -0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (direction === 'left' && scrollPosition >= maxScroll) {
          scrollPosition = 0;
        } else if (direction === 'right' && scrollPosition <= -maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = Math.abs(scrollPosition);
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    const timer = setTimeout(() => {
      animationFrameId = requestAnimationFrame(scroll);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [direction]);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={`${image.alt}-${index}`}
          className="flex-shrink-0 w-[300px] h-[225px] rounded-xl overflow-hidden"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default function ExperienceOverview() {
  const { openContactDialog } = useContactDialog();
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    openContactDialog('experience');
  };

  const handleQuoteClick = () => {
    setLocation('/quote');
  };

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-experience-headline">
          Turn Your Bali Villa Into Bali's Best Restaurant
        </h2>
        <p className="text-base lg:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto text-center mb-4" data-testid="text-experience-description">
          There is no more intimate restaurant than your own home in Bali. Whether you're staying in a luxury villa, celebrating with family, or hosting friends, bring the magic of fine dining to your table with talented chefs who create menus tailored to your cravings.
        </p>
        <p className="text-sm text-foreground/60 text-center">
          Real photos from our happy clients across Bali
        </p>
      </div>

      <div className="space-y-6 mb-12">
        <ScrollingRow images={IMAGES_ROW1} direction="left" />
        <ScrollingRow images={IMAGES_ROW2} direction="right" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          size="lg"
          onClick={handleQuoteClick}
          variant="outline"
          className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
          data-testid="button-experience-quote"
        >
          <FileText className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Experience This Magic</span>
          <span className="sm:hidden">Experience It</span>
        </Button>
        
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
          data-testid="button-experience-whatsapp"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          <span className="hidden sm:inline">Book This Experience</span>
          <span className="sm:hidden">Book Now</span>
        </Button>
      </div>
    </section>
  );
}
