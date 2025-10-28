import { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

// Import chef photos
import chef1 from '@assets/253095.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205751.webp';
import chef2 from '@assets/678417.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205752.webp';
import chef3 from '@assets/245115.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205752.webp';
import chef4 from '@assets/991995.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205753.webp';
import chef5 from '@assets/683709.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205753.webp';
import chef6 from '@assets/330919.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205754.webp';
import chef7 from '@assets/245875.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205754.webp';
import chef8 from '@assets/767129.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205754.webp';
import chef9 from '@assets/874107.jpg,w_540,h_540,c_1,q_100,fd_1,e__1761644205754.webp';

const CHEF_IMAGES = [
  { src: chef1, alt: 'Professional chef 1' },
  { src: chef2, alt: 'Professional chef 2' },
  { src: chef3, alt: 'Professional chef 3' },
  { src: chef4, alt: 'Professional chef 4' },
  { src: chef5, alt: 'Professional chef 5' },
  { src: chef6, alt: 'Professional chef 6' },
  { src: chef7, alt: 'Professional chef 7' },
  { src: chef8, alt: 'Professional chef 8' },
  { src: chef9, alt: 'Professional chef 9' },
];

export default function ChefGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

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

  // Triple the images for seamless infinite scroll
  const triplicatedImages = [...CHEF_IMAGES, ...CHEF_IMAGES, ...CHEF_IMAGES];

  return (
    <section className="py-12 lg:py-16 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="font-serif text-2xl lg:text-4xl font-semibold text-center" data-testid="text-chef-gallery-headline">
            100+ Professional Chefs
          </h2>
        </div>
        <p className="text-center text-foreground/60 text-sm" data-testid="text-chef-gallery-subtitle">
          Meet some of our talented culinary team
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        data-testid="chef-gallery-container"
      >
        {triplicatedImages.map((chef, index) => (
          <div
            key={`chef-${index}`}
            className="flex-shrink-0 w-[400px] h-[400px] rounded-xl overflow-hidden"
            data-testid={`chef-image-${index % CHEF_IMAGES.length}`}
          >
            <img
              src={chef.src}
              alt={chef.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
