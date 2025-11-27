import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';

// Import dish photos - using generated food/culinary images
import dish1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import dish2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import dish3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const DISH_IMAGES = [
  { src: dish1, alt: 'Gourmet satay and appetizers' },
  { src: dish2, alt: 'Beachside dining presentation' },
  { src: dish3, alt: 'Family gathering feast' },
];

export default function DishGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
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
  }, []);

  const triplicatedImages = [...DISH_IMAGES, ...DISH_IMAGES, ...DISH_IMAGES];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-card overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Utensils className="w-6 h-6 text-primary" />
          <h2 className="font-serif text-2xl lg:text-4xl font-semibold text-center">
            Culinary Masterpieces
          </h2>
        </div>
        <p className="text-center text-foreground/60 text-sm">
          Experience restaurant-quality dishes prepared fresh in your villa
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {triplicatedImages.map((dish, index) => (
          <motion.div
            key={`dish-${index}`}
            className="flex-shrink-0 w-[450px] h-[300px] rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={dish.src}
              alt={dish.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
