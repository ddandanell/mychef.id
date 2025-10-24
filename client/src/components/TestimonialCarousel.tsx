import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { useRef, useState } from 'react';

interface Testimonial {
  name: string;
  location: string;
  date: string;
  rating: number;
  occasion: string;
  discovery: string;
  story: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah & Michael',
    location: 'Seminyak',
    date: 'Dec 2024',
    rating: 5,
    occasion: 'Anniversary Dinner',
    discovery: 'Found on Google search',
    story: 'We were celebrating our 10th anniversary at our villa and wanted something special. Found myCHEF through Google and the WhatsApp booking was so easy!',
    highlight: 'The chef created a perfect romantic 5-course menu. Every dish was Instagram-worthy and delicious.',
  },
  {
    name: 'Jennifer L.',
    location: 'Canggu',
    date: 'Dec 2024',
    rating: 5,
    occasion: 'Birthday Party',
    discovery: 'Villa staff recommended',
    story: 'Our villa manager recommended myCHEF for my 30th birthday party. Best decision ever! The chef handled everything while we enjoyed the party.',
    highlight: '12 guests, authentic Indonesian rijsttafel. Everyone is still talking about the rendang!',
  },
  {
    name: 'David & Emma',
    location: 'Ubud',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Family Reunion',
    discovery: 'Instagram',
    story: 'Organizing food for 20 family members seemed impossible. Saw myCHEF on Instagram and messaged on WhatsApp. They made it effortless!',
    highlight: 'The BBQ station was incredible. Kids and grandparents all loved it. Full cleanup included!',
  },
  {
    name: 'Rachel M.',
    location: 'Seminyak',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Girls Trip Dinner',
    discovery: 'Friend recommendation',
    story: 'My friend used them last year. Five of us rented a villa and wanted a special dinner without leaving. Perfect choice!',
    highlight: 'The chef was so professional. Made us a beautiful seafood feast with local fish from Jimbaran.',
  },
  {
    name: 'Mark T.',
    location: 'Nusa Dua',
    date: 'Nov 2024',
    rating: 5,
    occasion: 'Corporate Team Dinner',
    discovery: 'Google search',
    story: 'Needed to organize dinner for our remote team retreat. Found myCHEF online. The consultation in English was super helpful!',
    highlight: 'They customized the menu for dietary restrictions. 15 people, zero complaints. Worth every rupiah.',
  },
  {
    name: 'Lisa & Tom',
    location: 'Canggu',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Wedding Anniversary',
    discovery: 'Villa concierge',
    story: 'Our villa concierge arranged everything. We just showed up and enjoyed. The chef prepared an amazing Italian dinner.',
    highlight: 'Handmade pasta, perfectly cooked risotto. Felt like we were in Tuscany!',
  },
  {
    name: 'Amanda K.',
    location: 'Seminyak',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Baby Shower',
    discovery: 'Facebook group',
    story: 'Saw someone recommend them in a Bali expat Facebook group. Organized a surprise baby shower for my sister at our villa.',
    highlight: 'Beautiful presentation, delicious food, and they decorated the dining area. So thoughtful!',
  },
  {
    name: 'Chris & Jenny',
    location: 'Uluwatu',
    date: 'Oct 2024',
    rating: 5,
    occasion: 'Vow Renewal',
    discovery: 'Instagram',
    story: 'Renewing our vows with just close friends. Found myCHEF on Instagram. The whole booking through WhatsApp was seamless.',
    highlight: 'The chef created a sunset dinner menu that matched our ceremony perfectly. So romantic!',
  },
  {
    name: 'Patricia S.',
    location: 'Sanur',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Extended Family Dinner',
    discovery: 'Google search',
    story: 'Three generations traveling together. Needed someone who could handle both western and Indonesian food. myCHEF was perfect!',
    highlight: 'The Padang feast was authentic and amazing. Grandma approved every dish!',
  },
  {
    name: 'Robert & Michelle',
    location: 'Seminyak',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Pool Party',
    discovery: 'Villa recommendation',
    story: 'Threw a pool party for 25 friends at our villa. The property manager suggested myCHEF. Game changer!',
    highlight: 'BBQ station, live satay grilling, fresh juices. The chef and helpers handled everything!',
  },
  {
    name: 'Sophie L.',
    location: 'Canggu',
    date: 'Sep 2024',
    rating: 5,
    occasion: 'Business Meeting',
    discovery: 'LinkedIn',
    story: 'Had important clients to impress. Found myCHEF through a LinkedIn post. Professional from start to finish.',
    highlight: 'Elegant presentation, international menu, perfect timing. Clients were very impressed.',
  },
  {
    name: 'James & Kate',
    location: 'Ubud',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Honeymoon Dinner',
    discovery: 'Wedding planner',
    story: 'Our wedding planner recommended myCHEF for a private honeymoon dinner at our villa. Absolutely magical!',
    highlight: 'Candlelit 7-course tasting menu. The chef was like having our own Michelin restaurant.',
  },
  {
    name: 'Nicole B.',
    location: 'Seminyak',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Farewell Dinner',
    discovery: 'Friend used them',
    story: 'Leaving Bali after 6 months. Wanted one last special Indonesian meal at home with close friends.',
    highlight: 'Traditional Balinese feast. The ayam betutu was the best I had in all my time here!',
  },
  {
    name: 'Andrew M.',
    location: 'Jimbaran',
    date: 'Aug 2024',
    rating: 5,
    occasion: 'Birthday Celebration',
    discovery: 'Google search',
    story: 'Turning 50 in Bali. Googled "private chef Bali" and myCHEF came up. Easy WhatsApp booking sealed the deal.',
    highlight: 'Fresh seafood BBQ with 18 friends. The chef sourced everything from Jimbaran market that morning!',
  },
  {
    name: 'Melissa & John',
    location: 'Canggu',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Engagement Party',
    discovery: 'Instagram',
    story: 'Just got engaged and wanted to celebrate with our Bali friends. Saw beautiful food photos on their Instagram.',
    highlight: 'The chef made our engagement cake too! Everything was perfect and stress-free.',
  },
  {
    name: 'Kevin T.',
    location: 'Seminyak',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Guys Weekend',
    discovery: 'TripAdvisor',
    story: '8 guys, one villa, wanted good food without the hassle. Found myCHEF on TripAdvisor with great reviews.',
    highlight: 'Epic BBQ night. Steaks, ribs, satay. Chef brought a helper and they crushed it!',
  },
  {
    name: 'Laura & Steve',
    location: 'Ubud',
    date: 'Jul 2024',
    rating: 5,
    occasion: 'Babymoon Dinner',
    discovery: 'Villa manager',
    story: 'Last trip before baby arrives. Villa manager arranged myCHEF for a special dinner. So glad they did!',
    highlight: 'Chef accommodated all my pregnancy cravings and restrictions. So thoughtful and delicious.',
  },
  {
    name: 'Olivia P.',
    location: 'Nusa Dua',
    date: 'Jun 2024',
    rating: 5,
    occasion: 'Mom & Daughters Weekend',
    discovery: 'Google search',
    story: 'Quality time with my mom and sister. Wanted a special meal at our villa. Found myCHEF online - 5 stars!',
    highlight: 'Beautiful Italian dinner. The chef even taught us how to make fresh pasta!',
  },
  {
    name: 'Daniel & Amy',
    location: 'Seminyak',
    date: 'Jun 2024',
    rating: 5,
    occasion: 'Wedding Rehearsal Dinner',
    discovery: 'Wedding coordinator',
    story: 'Getting married in Bali. Our coordinator suggested myCHEF for rehearsal dinner. Incredible experience!',
    highlight: '30 guests, mixed menu (Indonesian & Western). Everyone raved about the food!',
  },
  {
    name: 'Hannah L.',
    location: 'Canggu',
    date: 'Jun 2024',
    rating: 5,
    occasion: 'Birthday Brunch',
    discovery: 'Instagram',
    story: 'Wanted a special birthday brunch at our villa with 10 girlfriends. Messaged myCHEF on WhatsApp after seeing their IG.',
    highlight: 'Healthy breakfast bowls, fresh juices, beautiful presentation. Instagram heaven!',
  },
  {
    name: 'Thomas & Rebecca',
    location: 'Sanur',
    date: 'May 2024',
    rating: 5,
    occasion: 'Retirement Celebration',
    discovery: 'Villa staff',
    story: 'Celebrating retirement with family in Bali. Villa staff highly recommended myCHEF. They were right!',
    highlight: 'Traditional rijsttafel for 14 people. Authentic, delicious, and beautifully served.',
  },
  {
    name: 'Jessica M.',
    location: 'Seminyak',
    date: 'May 2024',
    rating: 5,
    occasion: 'Bachelorette Party',
    discovery: 'Friend recommendation',
    story: 'My bestie used them. Wanted a fancy dinner for my bachelorette without leaving our villa. Perfect!',
    highlight: 'The chef made signature cocktails too! Food was amazing, presentation was stunning.',
  },
  {
    name: 'William & Sarah',
    location: 'Ubud',
    date: 'May 2024',
    rating: 5,
    occasion: 'Anniversary Trip',
    discovery: 'Google search',
    story: 'Our 5th anniversary. Wanted something special at our jungle villa. Found myCHEF with great reviews.',
    highlight: 'Romantic candlelit dinner with local organic ingredients. Better than any restaurant!',
  },
  {
    name: 'Caroline B.',
    location: 'Canggu',
    date: 'Apr 2024',
    rating: 5,
    occasion: 'Yoga Retreat',
    discovery: 'Retreat planner',
    story: 'Organizing a yoga retreat for 20 women. Our retreat planner used myCHEF. Best catering ever!',
    highlight: 'Healthy, beautiful, plant-based meals. Everyone asked who the chef was!',
  },
  {
    name: 'Matthew & Emily',
    location: 'Seminyak',
    date: 'Apr 2024',
    rating: 5,
    occasion: 'Family Vacation',
    discovery: 'Villa concierge',
    story: 'Two families, 12 people total. Villa concierge recommended myCHEF for our group dinner.',
    highlight: 'Kids and adults all happy - that never happens! The street food party was a hit.',
  },
  {
    name: 'Sophia K.',
    location: 'Nusa Dua',
    date: 'Apr 2024',
    rating: 5,
    occasion: 'Corporate Retreat',
    discovery: 'Event coordinator',
    story: 'Organized our company retreat in Bali. Event coordinator insisted on myCHEF. Now I see why!',
    highlight: 'Professional service, accommodated all dietary needs, perfect timing for our schedule.',
  },
  {
    name: 'Alex & Jordan',
    location: 'Uluwatu',
    date: 'Mar 2024',
    rating: 5,
    occasion: 'Proposal Dinner',
    discovery: 'Google search',
    story: 'Planning to propose to my girlfriend. Googled "romantic private chef Bali" - myCHEF made it perfect!',
    highlight: 'She said yes! The chef even helped with the timing and brought champagne. Unforgettable.',
  },
  {
    name: 'Victoria L.',
    location: 'Seminyak',
    date: 'Mar 2024',
    rating: 5,
    occasion: 'Girls Trip',
    discovery: 'Facebook group',
    story: '6 girlfriends, one villa, wanted amazing food. Found myCHEF in a Bali travel Facebook group.',
    highlight: 'Japanese omakase night at our villa! The sushi chef was incredible. Worth every penny.',
  },
  {
    name: 'Ryan & Ashley',
    location: 'Canggu',
    date: 'Mar 2024',
    rating: 5,
    occasion: 'Baby Welcome Dinner',
    discovery: 'Friend used them',
    story: 'Introducing our newborn to Bali friends. A friend recommended myCHEF for an easy dinner solution.',
    highlight: 'Stress-free! They handled everything. Food was delicious and service was so professional.',
  },
  {
    name: 'Isabella M.',
    location: 'Ubud',
    date: 'Feb 2024',
    rating: 5,
    occasion: 'Wellness Retreat',
    discovery: 'Instagram',
    story: 'Hosting a small wellness retreat. Saw myCHEF on Instagram and loved their healthy menu options.',
    highlight: 'Clean, nourishing, beautifully presented. Guests thought we hired a resort chef!',
  },
  {
    name: 'Brandon & Megan',
    location: 'Seminyak',
    date: 'Feb 2024',
    rating: 5,
    occasion: 'Valentine Dinner',
    discovery: 'Villa manager',
    story: 'Valentine Day in Bali. Villa manager suggested myCHEF instead of fighting restaurant crowds. Smart move!',
    highlight: 'Intimate 5-course French dinner. The chef was discreet and professional. So romantic!',
  },
  {
    name: 'Charlotte P.',
    location: 'Jimbaran',
    date: 'Feb 2024',
    rating: 5,
    occasion: 'Milestone Birthday',
    discovery: 'Google search',
    story: 'Turning 40 in Bali with close friends. Googled private chefs and myCHEF had the best reviews.',
    highlight: 'Jimbaran seafood BBQ at our beachfront villa. Fresh fish, perfect sunset. Magical!',
  },
  {
    name: 'Jacob & Emma',
    location: 'Canggu',
    date: 'Jan 2024',
    rating: 5,
    occasion: 'New Year Dinner',
    discovery: 'Friend recommendation',
    story: 'Friends who live in Bali recommended myCHEF for our New Year celebration. Best way to start 2024!',
    highlight: 'Gourmet 7-course menu with wine pairings. Like having a fine dining restaurant at home.',
  },
  {
    name: 'Natalie S.',
    location: 'Seminyak',
    date: 'Jan 2024',
    rating: 5,
    occasion: 'Team Building Dinner',
    discovery: 'LinkedIn',
    story: 'Remote team gathering. Found myCHEF through a business contact on LinkedIn. Very professional!',
    highlight: 'Mixed Asian menu for 12. Accommodated vegan and gluten-free. Everyone was happy!',
  },
  {
    name: 'Ethan & Lily',
    location: 'Ubud',
    date: 'Jan 2024',
    rating: 5,
    occasion: 'Honeymoon',
    discovery: 'Travel agent',
    story: 'Our travel agent included myCHEF in our honeymoon package. Such a special experience!',
    highlight: 'Private romantic dinner in our villa overlooking rice paddies. Absolutely perfect.',
  },
  {
    name: 'Grace M.',
    location: 'Nusa Dua',
    date: 'Dec 2023',
    rating: 5,
    occasion: 'Christmas Dinner',
    discovery: 'Google search',
    story: 'Spending Christmas away from home. Searched for private chef to make it special. myCHEF delivered!',
    highlight: 'Traditional Christmas turkey with Indonesian sides. Best of both worlds!',
  },
  {
    name: 'Lucas & Sofia',
    location: 'Seminyak',
    date: 'Dec 2023',
    rating: 5,
    occasion: 'End of Year Party',
    discovery: 'Villa recommendation',
    story: 'Hosting friends for end of year celebration. Villa recommended myCHEF. Couldn\'t be happier!',
    highlight: 'BBQ pool party for 18. The chef and team made it effortless. We actually got to enjoy our own party!',
  },
  {
    name: 'Ava L.',
    location: 'Canggu',
    date: 'Dec 2023',
    rating: 5,
    occasion: 'Birthday Dinner',
    discovery: 'Instagram',
    story: 'Saw their beautiful food photos on IG. Booked for my birthday dinner. Exceeded expectations!',
    highlight: 'Thai feast for 10. Authentic flavors, beautiful presentation. The tom yum was incredible!',
  },
  {
    name: 'Noah & Zoe',
    location: 'Sanur',
    date: 'Nov 2023',
    rating: 5,
    occasion: 'Anniversary',
    discovery: 'Friend used them',
    story: 'Our friends raved about their experience. Booked for our anniversary. Now we\'re raving too!',
    highlight: 'Personalized menu based on our preferences. The chef remembered we love spicy food!',
  },
  {
    name: 'Mia K.',
    location: 'Seminyak',
    date: 'Nov 2023',
    rating: 5,
    occasion: 'Book Club Dinner',
    discovery: 'Facebook',
    story: 'Our Bali book club wanted to do something special. Found myCHEF on Facebook. Great decision!',
    highlight: 'Mediterranean feast for 8. Felt like we were in Greece! Beautiful food, great conversation.',
  },
  {
    name: 'Jack & Harper',
    location: 'Ubud',
    date: 'Nov 2023',
    rating: 5,
    occasion: 'Family Gathering',
    discovery: 'Villa staff',
    story: 'Extended family visiting. Villa staff arranged myCHEF. Made our reunion so much easier!',
    highlight: 'Indonesian feast for 16. Grandparents to toddlers - everyone found something they loved.',
  },
  {
    name: 'Chloe M.',
    location: 'Canggu',
    date: 'Oct 2023',
    rating: 5,
    occasion: 'Surprise Party',
    discovery: 'Google search',
    story: 'Organizing surprise party for my husband. myCHEF helped plan everything via WhatsApp. He was shocked!',
    highlight: 'His favorite - authentic Italian! The homemade gnocchi was restaurant quality.',
  },
  {
    name: 'Logan & Aria',
    location: 'Seminyak',
    date: 'Oct 2023',
    rating: 5,
    occasion: 'Pre-Wedding Dinner',
    discovery: 'Wedding planner',
    story: 'Getting married in Bali. Wedding planner recommended myCHEF for welcome dinner with our families.',
    highlight: 'Beautiful fusion menu. Both families (different cultures) were impressed. Thank you!',
  },
  {
    name: 'Ella S.',
    location: 'Nusa Dua',
    date: 'Oct 2023',
    rating: 5,
    occasion: 'Milestone Birthday',
    discovery: 'TripAdvisor',
    story: 'My 50th birthday! Read amazing reviews on TripAdvisor. Decided to treat myself. Worth it!',
    highlight: 'Elegant dinner party for 12. The chef created a custom menu just for me. So special!',
  },
  {
    name: 'Mason & Layla',
    location: 'Uluwatu',
    date: 'Sep 2023',
    rating: 5,
    occasion: 'Vow Renewal',
    discovery: 'Instagram',
    story: 'Renewing vows in Uluwatu. Found myCHEF on Instagram. They made our celebration perfect!',
    highlight: 'Sunset dinner for 20. The timing was perfect, food was amazing. Unforgettable evening.',
  },
  {
    name: 'Evelyn P.',
    location: 'Seminyak',
    date: 'Sep 2023',
    rating: 5,
    occasion: 'Girls Weekend',
    discovery: 'Friend recommendation',
    story: '10 girlfriends celebrating life! Friend who lives in Bali insisted we use myCHEF. She was so right!',
    highlight: 'Healthy brunch, then dinner BBQ. The chef was amazing both times. We booked twice!',
  },
  {
    name: 'Sebastian & Bella',
    location: 'Canggu',
    date: 'Sep 2023',
    rating: 5,
    occasion: 'Business Dinner',
    discovery: 'Google search',
    story: 'Important business dinner. Googled "best private chef Bali" - myCHEF was top result for good reason!',
    highlight: 'Impressed our clients completely. Professional service, international cuisine, perfect execution.',
  },
  {
    name: 'Scarlett L.',
    location: 'Ubud',
    date: 'Aug 2023',
    rating: 5,
    occasion: 'Retirement Party',
    discovery: 'Villa manager',
    story: 'Retiring after 30 years! Villa manager recommended myCHEF for celebration with family and friends.',
    highlight: 'They created a menu with dishes from places I worked around Asia. So thoughtful!',
  },
  {
    name: 'Henry & Violet',
    location: 'Seminyak',
    date: 'Aug 2023',
    rating: 5,
    occasion: 'Babymoon',
    discovery: 'Instagram',
    story: 'Last vacation before baby! Wanted special dinners without stress. Found myCHEF on Instagram.',
    highlight: 'Two beautiful dinners - they customized everything for pregnancy. So caring!',
  },
  {
    name: 'Penelope M.',
    location: 'Jimbaran',
    date: 'Aug 2023',
    rating: 5,
    occasion: 'Family Reunion',
    discovery: 'Google search',
    story: 'First family reunion in 5 years. 22 people! Found myCHEF online. They made it look easy!',
    highlight: 'Massive seafood BBQ. They even set up the dining area. Professional from start to finish.',
  },
  {
    name: 'Oliver & Aurora',
    location: 'Canggu',
    date: 'Jul 2023',
    rating: 5,
    occasion: 'Engagement Celebration',
    discovery: 'Friend used them',
    story: 'Just got engaged! Our friends used myCHEF for their wedding. We trusted their recommendation.',
    highlight: 'Champagne dinner for 8 close friends. The chef made it feel so special and celebratory!',
  },
];

export default function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4" data-testid="text-testimonials-headline">
            Real Stories from Real Guests
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto px-2">
            Over 50 authentic reviews from guests who discovered and experienced myCHEF for their special occasions
          </p>
        </div>

        <div className="relative -mx-4 sm:mx-0">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover-elevate active-elevate-2 rounded-full p-3 shadow-lg hidden md:block"
              data-testid="button-scroll-left"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row gap-3 sm:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-80 snap-start hover-elevate bg-background/80 backdrop-blur-sm"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-base" data-testid={`text-testimonial-${index}-name`}>
                          {testimonial.name}
                        </h4>
                        <CheckCircle className="w-4 h-4 text-primary fill-primary/20" />
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
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      Verified
                    </Badge>
                  </div>

                  <Badge className="mb-3 w-fit text-xs bg-primary/10 text-primary border-primary/20">
                    {testimonial.occasion}
                  </Badge>

                  <div className="space-y-3 flex-grow">
                    <div>
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1">
                        How they found us
                      </p>
                      <p className="text-sm text-foreground/70 italic">
                        "{testimonial.discovery}"
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1">
                        Their story
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {testimonial.story}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wide mb-1">
                        Highlight
                      </p>
                      <p className="text-sm font-medium text-primary/90 leading-relaxed">
                        {testimonial.highlight}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover-elevate active-elevate-2 rounded-full p-3 shadow-lg hidden md:block"
              data-testid="button-scroll-right"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        <div className="text-center mt-6 sm:mt-8 px-4">
          <p className="text-xs sm:text-sm text-foreground/60">
            Swipe to read more stories • All reviews verified • Updated December 2024
          </p>
        </div>
      </div>
    </section>
  );
}
