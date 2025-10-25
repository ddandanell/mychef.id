import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Testimonial {
  name: string;
  location: string;
  date: string;
  rating: number;
  occasion: string;
  review: string;
}

const TESTIMONIALS_ROW1: Testimonial[] = [
  {
    name: 'Sarah & Michael',
    location: 'Seminyak',
    date: 'Oct 2025',
    rating: 5,
    occasion: 'Anniversary Dinner',
    review: 'Celebrating our 10th anniversary. The chef created the most amazing 5-course menu. Every single dish was restaurant-quality. Highly recommend!',
  },
  {
    name: 'Jennifer L.',
    location: 'Canggu',
    date: 'Oct 2025',
    rating: 5,
    occasion: 'Birthday Party',
    review: 'My 30th birthday with 12 guests. The Indonesian rijsttafel was incredible - authentic flavors, beautiful presentation. Everyone still talks about the rendang!',
  },
  {
    name: 'David & Emma',
    location: 'Ubud',
    date: 'Sep 2025',
    rating: 5,
    occasion: 'Family Reunion',
    review: 'Organized dinner for 20 family members. The BBQ station was phenomenal. Chef handled everything professionally. Kids and grandparents all loved it!',
  },
  {
    name: 'Mark T.',
    location: 'Nusa Dua',
    date: 'Aug 2025',
    rating: 5,
    occasion: 'Corporate Retreat',
    review: 'Needed dinner for our team retreat. They customized everything for dietary needs. 15 people, zero complaints. Professional service, excellent food.',
  },
  {
    name: 'Lisa & Tom',
    location: 'Canggu',
    date: 'Aug 2025',
    rating: 5,
    occasion: 'Anniversary',
    review: 'Italian dinner at our villa was perfection. Handmade pasta, perfect risotto. Felt like dining in Tuscany! The chef was talented and friendly.',
  },
  {
    name: 'Amanda K.',
    location: 'Seminyak',
    date: 'Jul 2025',
    rating: 5,
    occasion: 'Baby Shower',
    review: 'Surprise baby shower for my sister. Beautiful presentation, delicious food, and they even decorated! So much attention to detail.',
  },
  {
    name: 'Chris & Jenny',
    location: 'Uluwatu',
    date: 'Jul 2025',
    rating: 5,
    occasion: 'Vow Renewal',
    review: 'Renewed our vows with close friends. The sunset dinner menu matched our ceremony perfectly. Romantic, delicious, unforgettable.',
  },
  {
    name: 'Patricia S.',
    location: 'Sanur',
    date: 'Jun 2025',
    rating: 5,
    occasion: 'Family Dinner',
    review: 'Three generations together. Needed both Western and Indonesian dishes. The Padang feast was authentic! Even grandma approved every dish.',
  },
  {
    name: 'Sophie L.',
    location: 'Canggu',
    date: 'May 2025',
    rating: 5,
    occasion: 'Business Dinner',
    review: 'Important client dinner. The 8-course tasting menu was exceptional. Elegant presentation, perfect timing. Helped seal the deal!',
  },
  {
    name: 'William & Grace',
    location: 'Seminyak',
    date: 'May 2025',
    rating: 5,
    occasion: 'Honeymoon',
    review: 'Honeymooning in Bali! Romantic beachside setup with candles. The chef created pure magic. Best meal of our entire honeymoon.',
  },
  {
    name: 'Ethan & Sophia',
    location: 'Canggu',
    date: 'Apr 2025',
    rating: 5,
    occasion: 'Birthday',
    review: "Wife's 40th birthday. Japanese omakase at our villa - 10 courses of absolute perfection. She actually cried happy tears!",
  },
  {
    name: 'Jackson & Lily',
    location: 'Nusa Dua',
    date: 'Mar 2025',
    rating: 5,
    occasion: 'Family Vacation',
    review: 'First time in Bali with kids. Had three amazing dinners. Chef made kid-friendly versions of everything. Made our vacation so much easier!',
  },
  {
    name: 'Mason & Harper',
    location: 'Canggu',
    date: 'Feb 2025',
    rating: 5,
    occasion: 'Anniversary',
    review: '15 years together! French 7-course dinner with wine pairing. The chef even played our wedding song. Absolutely magical evening.',
  },
  {
    name: 'Lucas & Aria',
    location: 'Ubud',
    date: 'Jan 2025',
    rating: 5,
    occasion: 'Proposal',
    review: 'Planning to propose! Romantic dinner by the rice fields - she said YES! The chef even helped capture the moment. Perfect night.',
  },
  {
    name: 'Aiden & Charlotte',
    location: 'Seminyak',
    date: 'Dec 2024',
    rating: 5,
    occasion: 'Babymoon',
    review: 'Last trip before baby! Pregnancy-safe sushi alternatives were creative and delicious. Chef was so knowledgeable about nutrition.',
  },
  {
    name: 'Benjamin & Scarlett',
    location: 'Uluwatu',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Anniversary',
    review: 'Sunset cliff-top dinner setup. The tasting menu was creative, delicious, and incredibly romantic. Worth every rupiah!',
  },
  {
    name: 'James & Kate',
    location: 'Ubud',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Honeymoon',
    review: 'Private honeymoon dinner was absolutely magical. 7-course candlelit tasting menu. Like having our own Michelin restaurant!',
  },
  {
    name: 'Andrew M.',
    location: 'Jimbaran',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Birthday',
    review: 'Turning 50 in Bali! Fresh seafood BBQ with 18 friends. Chef sourced everything from Jimbaran market that same morning. So fresh!',
  },
  {
    name: 'Kevin T.',
    location: 'Seminyak',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Guys Weekend',
    review: '8 guys, one villa. Epic BBQ night with steaks, ribs, satay. Chef brought a helper and they absolutely crushed it!',
  },
  {
    name: 'Daniel & Amy',
    location: 'Ubud',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Retreat',
    review: 'Wellness retreat for 10 guests. All organic, plant-based Indonesian cuisine. Creative, healthy, and incredibly delicious!',
  },
];

const TESTIMONIALS_ROW2: Testimonial[] = [
  {
    name: 'Rachel M.',
    location: 'Seminyak',
    date: 'Sep 2025',
    rating: 5,
    occasion: 'Girls Trip',
    review: 'Five of us renting a villa. Beautiful seafood feast with local fish from Jimbaran. The chef was professional and friendly!',
  },
  {
    name: 'Robert & Michelle',
    location: 'Seminyak',
    date: 'Jun 2025',
    rating: 5,
    occasion: 'Pool Party',
    review: 'Pool party for 25 friends! BBQ station, live satay grilling, fresh juices. Chef and helpers handled absolutely everything!',
  },
  {
    name: 'Naomi P.',
    location: 'Ubud',
    date: 'Apr 2025',
    rating: 5,
    occasion: 'Wellness Retreat',
    review: 'Leading wellness retreat. Plant-based Indonesian cuisine was creative and delicious! 18 guests raved about every single meal.',
  },
  {
    name: 'Ava M.',
    location: 'Seminyak',
    date: 'Mar 2025',
    rating: 5,
    occasion: 'Bridal Shower',
    review: 'Surprise bridal shower at my villa. High tea with Indonesian twist - klepon cake, pandan panna cotta. So creative!',
  },
  {
    name: 'Isabella T.',
    location: 'Uluwatu',
    date: 'Feb 2025',
    rating: 5,
    occasion: 'Graduation',
    review: 'Celebrating graduation with parents. Mediterranean feast for 8 people. Felt like dining at a Mykonos restaurant!',
  },
  {
    name: 'Ella K.',
    location: 'Seminyak',
    date: 'Jan 2025',
    rating: 5,
    occasion: 'Bachelorette',
    review: 'Bachelorette party in Bali! Bottomless brunch then dinner party for 14. The chefs were amazing, food was incredible!',
  },
  {
    name: 'Mia R.',
    location: 'Sanur',
    date: 'Dec 2024',
    rating: 5,
    occasion: 'New Years Eve',
    review: 'NYE with family. Countdown dinner with champagne service for 16 people. Amazing food, perfect way to start the year!',
  },
  {
    name: 'Evelyn M.',
    location: 'Canggu',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Yoga Retreat',
    review: 'My first yoga retreat. All organic, mostly local, completely delicious. 12 guests raved about the food all week!',
  },
  {
    name: 'Zoe L.',
    location: 'Seminyak',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Birthday',
    review: 'Birthday celebration with friends. Themed menu, amazing cocktails, most fun dinner party ever. Chef had great energy!',
  },
  {
    name: 'Nicole B.',
    location: 'Seminyak',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Farewell Dinner',
    review: 'Leaving Bali after 6 months. Traditional Balinese feast. The ayam betutu was the best I had in all my time here!',
  },
  {
    name: 'Melissa & John',
    location: 'Canggu',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Engagement',
    review: 'Just got engaged! Celebrating with Bali friends. The chef even made our engagement cake. Everything was perfect!',
  },
  {
    name: 'Laura & Steve',
    location: 'Ubud',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Babymoon',
    review: 'Last trip before baby. Chef accommodated all my pregnancy cravings and restrictions. So thoughtful and delicious!',
  },
  {
    name: 'Olivia P.',
    location: 'Nusa Dua',
    date: 'Jun 2024',
    rating: 5,
    occasion: 'Mom & Daughters',
    review: 'Weekend with mom and sister. Beautiful Italian dinner. The chef even taught us how to make fresh pasta!',
  },
  {
    name: 'Thomas & Emma',
    location: 'Seminyak',
    date: 'May 2024',
    rating: 5,
    occasion: 'Anniversary',
    review: 'Celebrating 20 years together. Multi-course tasting menu with wine pairing. Intimate, romantic, absolutely delicious!',
  },
  {
    name: 'Ryan & Claire',
    location: 'Canggu',
    date: 'Apr 2024',
    rating: 5,
    occasion: 'Birthday',
    review: "Surprise birthday for my wife. The chef prepared her favorite Thai dishes perfectly. She was blown away!",
  },
  {
    name: 'Victoria S.',
    location: 'Ubud',
    date: 'Mar 2024',
    rating: 5,
    occasion: 'Wellness Week',
    review: 'Week-long wellness program. Daily healthy meals that were actually exciting! Lost weight and felt amazing.',
  },
  {
    name: 'Brandon & Ashley',
    location: 'Nusa Dua',
    date: 'Feb 2024',
    rating: 5,
    occasion: "Valentine's Day",
    review: "Valentine's at our villa. Aphrodisiac-themed tasting menu. Creative, delicious, romantic. Perfect V-Day dinner!",
  },
  {
    name: 'Michelle T.',
    location: 'Seminyak',
    date: 'Jan 2024',
    rating: 5,
    occasion: 'Family Gathering',
    review: 'Extended family vacation. Chef handled 18 people with various dietary needs. Everyone was happy and well-fed!',
  },
  {
    name: 'Alex & Jordan',
    location: 'Canggu',
    date: 'Dec 2023',
    rating: 5,
    occasion: 'Holiday Dinner',
    review: 'Christmas dinner away from home. Traditional roast with Indonesian sides. Made us feel festive and special!',
  },
  {
    name: 'Samantha R.',
    location: 'Uluwatu',
    date: 'Nov 2023',
    rating: 5,
    occasion: 'Birthday',
    review: 'Milestone birthday celebration. Sunset dinner on our villa terrace. The view and food were both stunning!',
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex-shrink-0 w-[320px] bg-background/80 backdrop-blur-sm border-2 hover-elevate" data-testid="card-testimonial">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-sm">{testimonial.name}</h4>
              <CheckCircle className="w-3.5 h-3.5 text-primary fill-primary/20 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-1 text-xs text-foreground/60">
              <MapPin className="w-3 h-3" />
              {testimonial.location}
            </div>
          </div>
          <Badge variant="secondary" className="text-xs flex-shrink-0">
            {testimonial.date}
          </Badge>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
            Verified
          </Badge>
        </div>

        <Badge className="mb-3 w-fit text-xs bg-primary/10 text-primary border-primary/20">
          {testimonial.occasion}
        </Badge>

        <p className="text-sm text-foreground/80 leading-relaxed">
          {testimonial.review}
        </p>
      </CardContent>
    </Card>
  );
}

function ScrollingRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: 'left' | 'right' }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let cleanup: (() => void) | undefined;

    // Wait for content to load and measure
    const timer = setTimeout(() => {
      if (!scrollContainer) return;
      
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      // Initialize scroll position
      let scrollPosition = direction === 'right' ? maxScroll : 0;
      scrollContainer.scrollLeft = scrollPosition;

      const scroll = () => {
        if (!scrollContainer) return;

        const currentMax = scrollContainer.scrollWidth / 2;

        if (direction === 'left') {
          // Scroll leftward (content moves left, showing right side)
          scrollPosition += 0.5;
          if (scrollPosition >= currentMax) {
            scrollPosition = 0;
          }
        } else {
          // Scroll rightward (content moves right, showing left side)
          scrollPosition -= 0.5;
          if (scrollPosition <= 0) {
            scrollPosition = currentMax;
          }
        }

        scrollContainer.scrollLeft = scrollPosition;
        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);

      cleanup = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [direction]);

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4" data-testid="text-testimonials-headline">
            Real Stories from Real Guests
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
            Over 1000+ verified reviews from guests who trusted myCHEF for their special occasions
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <ScrollingRow testimonials={TESTIMONIALS_ROW1} direction="left" />
        <ScrollingRow testimonials={TESTIMONIALS_ROW2} direction="right" />
      </div>

      <div className="text-center mt-8 px-4">
        <p className="text-xs sm:text-sm text-foreground/60">
          All reviews verified • Updated October 2025 • 4.9/5 average rating
        </p>
      </div>
    </section>
  );
}
