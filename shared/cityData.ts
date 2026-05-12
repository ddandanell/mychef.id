interface ExtendedContentBasic {
  mainHeading: string;
  paragraphs: string[];
}

interface ExtendedContentRich {
  mainHeading: string;
  introParagraphs?: string[];
  paragraphs?: string[];
  whyChooseSection?: {
    title: string;
    intro: string;
    benefits: Array<{ title: string; description: string }>;
  };
  benefitsSection?: {
    title: string;
    paragraphs: string[];
  };
  customizeSection?: {
    title: string;
    paragraphs: string[];
  };
  diverseCuisinesSection?: {
    title: string;
    paragraphs: string[];
  };
  chefsSection?: {
    title: string;
    intro: string;
    paragraphs: string[];
    specializations: string[];
  };
  occasionsSection?: {
    title: string;
    paragraphs: string[];
  };
  villaServicesSection?: {
    title: string;
    intro: string;
    paragraphs: string[];
    services: Array<{ title: string; description: string }>;
  };
  bookingSection?: {
    title: string;
    intro: string;
    steps: Array<{ step: number; title: string; description: string }>;
  };
  luxuryDiningSection?: {
    title: string;
    paragraphs: string[];
  };
  customMenusSection?: {
    title: string;
    paragraphs: string[];
  };
  localIngredientsSection?: {
    title: string;
    paragraphs: string[];
  };
  mealPlanSection?: {
    title: string;
    paragraphs: string[];
  };
  elevateVacationSection?: {
    title: string;
    paragraphs: string[];
  };
  pricingSection?: {
    title: string;
    intro: string;
    categories: Array<{ title: string; items: string[] }>;
  };
  safetySection?: {
    title: string;
    intro: string;
    guarantees: Array<{ title: string; description: string }>;
  };
  testimonialsSection?: {
    title: string;
    testimonials: Array<{ name: string; quote: string; event: string }>;
  };
  sampleMenuSection?: {
    title: string;
    intro: string;
    menus: Array<{
      name: string;
      courses: Array<{ category: string; items: string[] }>;
    }>;
  };
}

export interface CityData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroDescription: string;
  heroTitle?: string;
  areas: string[];
  popularVenues: string[];
  localInsights: string;
  extendedContent?: ExtendedContentBasic | ExtendedContentRich;
  coordinates: {
    "@type": "GeoCoordinates";
    "latitude": string;
    "longitude": string;
  };
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  // Optional SEO overrides for cities where the default generic
  // "Private Chef in {City}, Bali — Villa Dining from Rp 800k/hr" title
  // mismatches the actual search intent (e.g. Denpasar = medical / expat / residential, not villa).
  // When present, overrides the default <title> and meta description in the pre-render.
  seoTitle?: string;
  seoDescription?: string;
}

export const CITY_DATA: Record<string, CityData> = {
  seminyak: {
    name: 'Seminyak',
    slug: 'seminyak',
    tagline: 'Seminyak Private Chef: Gourmet Dining at Your Luxury Villa',
    description: 'Transform your Seminyak villa into an exclusive restaurant. Award-worthy chefs craft bespoke menus using Jimbaran seafood and imported delicacies. Sunset cocktails to midnight feasts.',
    heroDescription: 'Where Bali\'s most glamorous neighborhood meets culinary artistry. Your villa becomes the stage for unforgettable gastronomic theater.',
    heroTitle: 'Seminyak Private Chef: Your Villa, Your Menu, Your Night',
    areas: ['Oberoi Golden Mile', 'Kayu Aya Beach Walk', 'Petitenget Temple Area', 'Dhyana Pura Sunset Strip', 'Double Six Beach Zone'],
    popularVenues: ['The Legian Bali', 'W Retreat & Spa', 'Oberoi Beach Resort', 'Alila Seminyak', 'Villa Belong Dua', 'Hu\'u Villas'],
    localInsights: 'Seminyak pulses with a distinct energy — boutique galleries by day, rooftop cocktails at dusk, and world-class restaurants competing for attention. Yet nothing rivals dining in your own villa, where a private chef transforms fresh catches from Kedonganan fish market into dishes rivaling any Michelin establishment. Here, sophistication meets island soul.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.692067",
      "longitude": "115.172882"
    },
    extendedContent: {
      mainHeading: 'The Art of Private Dining in Seminyak',
      introParagraphs: [
        'Seminyak stands apart from other Bali destinations. This is where fashion designers vacation next to tech billionaires, where beach clubs set global trends, and where the line between casual elegance and haute couture blurs beautifully. Your private chef experience here must match this distinctive character — and ours does.',
        'Imagine returning from a lazy afternoon at Potato Head Beach Club to find your villa transformed. Champagne chilling, candles lit along the infinity pool, and aromas of butter-basted lobster drifting from the kitchen. Your chef, trained in Parisian technique but fluent in Indonesian spice, presents a menu designed around your morning\'s whims. This is Seminyak dining at its finest.',
        'The neighborhood\'s proximity to Jimbaran\'s legendary fish market gives our chefs an unfair advantage. By 5 AM, they\'re selecting the night\'s catch — line-caught barramundi still glistening, prawns the size of your palm, reef fish with colors that belong in aquariums. By sunset, these treasures become edible art on your terrace.'
      ],
      whyChooseSection: {
        title: 'What Sets Seminyak Private Dining Apart',
        intro: 'This neighborhood demands excellence. Our service rises to meet its standards.',
        benefits: [
          { title: 'Beach Club Coordination', description: 'We time your villa dinner to follow sunset at Ku De Ta or Mrs Sippy. Return to a table already set, wines breathing, appetizers awaiting.' },
          { title: 'Fashion Week Ready', description: 'Hosting industry guests? Our presentation rivals editorial photo shoots. Every plate becomes Instagram gold without trying.' },
          { title: 'Nightlife Fuel', description: 'Late dinner before hitting Jenja or Mirror? We serve until midnight, crafting menus that energize rather than sedate.' },
          { title: 'Morning After Magic', description: 'Legendary breakfast service cures any celebration aftermath. Eggs Benedict with smoked salmon, fresh coconut hydration, reviving smoothie bowls.' },
          { title: 'Boutique Shopping Breaks', description: 'Need the chef to pause while you browse Kayu Aya galleries? We adapt to your day\'s rhythm, not the other way around.' }
        ]
      },
      chefsSection: {
        title: 'Seminyak\'s Culinary Artists',
        intro: 'Our Seminyak chefs understand that here, presentation matters as much as flavor. Many trained at the neighborhood\'s own legendary restaurants before joining our team.',
        paragraphs: [
          'Chef Wayan spent seven years at Sarong, mastering the delicate balance of Asian spices that defines Seminyak\'s modern Indonesian cuisine. Now he brings that expertise exclusively to private villas, creating tasting menus that tell stories of Balinese heritage through contemporary technique.',
          'Chef Marco arrived from Barcelona with a suitcase of saffron and a passion for molecular gastronomy. His paella uses Bali black rice, his gazpacho features local tomatoes sweeter than Spanish ones. He represents the international fusion that makes Seminyak\'s food scene electric.',
          'Chef Ayu specializes in intimate romantic dinners — the kind of meal that accompanies proposals at sunset. She\'s helped orchestrate over 200 engagements along this coastline, each one featuring custom menus that future couples remember forever.'
        ],
        specializations: ['French Classical Technique with Balinese Ingredients', 'Mediterranean Seafood Mastery', 'Contemporary Asian Tasting Menus', 'Romantic Dinner Choreography', 'Late-Night Supper Club Style', 'Wellness-Forward Fine Dining', 'Champagne Pairing Expertise']
      },
      occasionsSection: {
        title: 'Seminyak Moments Made Memorable',
        paragraphs: [
          'A fortieth birthday that started with spa treatments and ended with a private omakase. A fashion buyer\'s dinner for international clients that sparked a collaboration. Honeymooners who wanted their final Bali night to outshine every restaurant they\'d visited. These are the occasions we elevate.',
          'Seminyak celebrations carry particular stakes — your guests have likely dined at the neighborhood\'s acclaimed restaurants already. Your private dinner must offer something those venues cannot: complete personalization, absolute privacy, and the luxury of lingering without closing time constraints. We deliver all three, plus the Instagram story that makes followers jealous.'
        ]
      },
      pricingSection: {
        title: 'Investment in Excellence',
        intro: 'Seminyak private dining reflects the neighborhood\'s premium positioning. Our pricing ensures access to top-tier talent.',
        categories: [
          { title: 'Intimate Sunset Dinner (2-4 guests)', items: ['Chef fee from Rp 3,200,000', 'Includes 4-hour service window', 'Three to five courses', 'Wine pairing guidance included', 'Complete kitchen restoration'] },
          { title: 'Villa Gathering (6-12 guests)', items: ['Chef fee from Rp 4,800,000', 'Additional sous chef for parties 8+', 'Shared feast or plated service', 'Cocktail hour appetizers', 'Dessert course with table service'] },
          { title: 'Private Event (15-30 guests)', items: ['Chef team from Rp 8,500,000', 'Full service staff available', 'Beverage management', 'Multi-station setup options', 'Event timeline coordination'] }
        ]
      },
      testimonialsSection: {
        title: 'Voices from Seminyak Villas',
        testimonials: [
          { name: 'Caroline W.', quote: 'We\'d been to Sardine, Mama San, and La Lucciola that week. Our final night villa dinner topped them all. The lobster thermidor was better than anything we\'d had, and we didn\'t have to share the experience with strangers.', event: 'Anniversary celebration at private villa' },
          { name: 'James & Michael', quote: 'The chef created a surprise tasting menu based on our favorite childhood meals, elevated to fine dining. Mac and cheese became truffle-laden pasta, fish sticks became tempura snapper. We cried happy tears.', event: 'Civil partnership dinner' },
          { name: 'Dewi Santoso', quote: 'Hosting 20 fashion industry colleagues required perfection. The chef understood the aesthetic requirements immediately — every dish was a visual statement. Business connections deepened over beautiful food.', event: 'Industry networking dinner' },
          { name: 'The Bergman Family', quote: 'Three generations celebrating Grandma\'s 80th. The chef made separate courses for kids, gluten-free for mom, pescatarian for dad, and Grandma\'s favorite Swedish meatballs. Everyone happy simultaneously — magic.', event: 'Multi-generational birthday' },
          { name: 'Anonymous Guest', quote: 'I proposed at sunset. The chef had timed the champagne to arrive exactly as she said yes. Hidden rose petals revealed with dessert. She still talks about the meal more than the ring.', event: 'Proposal dinner' }
        ]
      },
      sampleMenuSection: {
        title: 'A Taste of Seminyak Possibility',
        intro: 'Every menu is bespoke, but these examples showcase our Seminyak style.',
        menus: [
          { name: 'Sunset to Starlight Coastal Journey', courses: [
            { category: 'Golden Hour Bites', items: ['Tuna tartare on crispy wontons', 'Local oysters with finger lime mignonette', 'Coconut prawn ceviche'] },
            { category: 'First Wave', items: ['Bali black rice risotto with seared scallops and sambal butter'] },
            { category: 'Main Current', items: ['Butter-poached Jimbaran lobster tail', 'Grilled barramundi with Balinese long pepper', 'Crispy pork belly with tamarind glaze'] },
            { category: 'Sweet Shore', items: ['Tropical fruit panna cotta with passion fruit coulis', 'Chocolate lava cake with coconut ice cream'] }
          ]},
          { name: 'Contemporary Indonesian Celebration', courses: [
            { category: 'Opening Notes', items: ['Beef rendang spring rolls with peanut aioli', 'Grilled satay trio: chicken, lamb, prawn'] },
            { category: 'Middle Movement', items: ['Nasi goreng tasting: seafood, vegetable, kampung style'] },
            { category: 'Grand Finale', items: ['Slow-cooked lamb shank with kecap manis reduction', 'Grilled whole snapper with Balinese spice'] },
            { category: 'Closing Sweetness', items: ['Klepon cake with pandan cream', 'Es cendol with coconut milk foam'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Your Seminyak Night Awaits',
        paragraphs: [
          'The boutiques close, the beach clubs quieten, but your evening is just beginning. Back at your villa, fairy lights twinkle around the pool, your chosen playlist fills the tropical air, and a world-class chef is plating your first course. This is the Seminyak experience they don\'t advertise in travel magazines — because it\'s exclusively yours.',
          'Contact us today to design your unforgettable evening. From menu conception to midnight cleanup, every detail receives our complete attention. Your Seminyak story deserves a remarkable chapter.'
        ]
      }
    },
    faqItems: [
      {
        question: 'My villa is near Potato Head — can the chef time dinner around our beach club reservation?',
        answer: 'Precisely what we do best. Share your Potato Head reservation time and we\'ll have appetizers waiting when you return, main courses timed to your hunger. Many Seminyak clients flow from beach club sundowners directly into their villa dinner seamlessly.'
      },
      {
        question: 'I\'m hosting fashion industry colleagues who\'ve eaten everywhere. Will this impress them?',
        answer: 'Fashion clients are our specialty. Seminyak attracts design-conscious guests who appreciate visual presentation as much as flavor. Our chefs understand editorial aesthetics — every plate is composed for both taste and photography. Your guests will recognize the difference from restaurant dining instantly.'
      },
      {
        question: 'We want dinner at 10 PM after clubbing at Jenja. Is late service available?',
        answer: 'Late-night Seminyak dining is absolutely available. We serve until midnight for guests who prefer the after-party feast. Think substantial dishes that satisfy without weighing down — sharing platters, elegant finger foods, or a proper sit-down meal whenever you\'re ready.'
      },
      {
        question: 'Can you source the same quality seafood as Sardine restaurant?',
        answer: 'Better, actually. Sardine sources from Jimbaran market — so do we, but earlier. Our chefs arrive at 5 AM for first selection while restaurant buyers wait until 7 AM. You get the freshest catches because there\'s no restaurant kitchen to share with.'
      },
      {
        question: 'We\'re celebrating a proposal tomorrow night. Can you help make it perfect?',
        answer: 'Proposals are our specialty in Seminyak — we\'ve orchestrated over 200 successful engagements along this coast. Beyond food, we coordinate ring presentation timing, champagne reveals, hidden flower arrangements, and photographer moments. Every successful proposal strengthens our reputation; your joy is our business card.'
      },
      {
        question: 'What if we want wines to match Seminyak\'s sophisticated vibe?',
        answer: 'Seminyak guests expect premium wine service. Our chefs coordinate with Bali\'s top wine suppliers for bottles matching your menu and preferences. From crisp New Zealand Sauvignons for seafood to bold Australian Shirazes for red meat, we curate pairings worthy of the neighborhood\'s reputation.'
      },
      {
        question: 'Our group wants both fine dining AND a late-night pizza session. Possible?',
        answer: 'Multi-act dining is perfectly Seminyak. Start with an elegant three-course dinner, transition to cocktails by the pool, then round two: artisan pizzas from a portable wood-fired oven we can arrange. Your villa becomes a multi-venue evening without leaving home.'
      }
    ]
  },
  canggu: {
    name: 'Canggu',
    slug: 'canggu',
    tagline: 'Canggu Private Chef: Fuel Your Surf, Feed Your Soul',
    description: 'From dawn patrol breakfasts to rice-field sunset feasts. Organic ingredients, plant-powered menus, and laid-back dining that matches Canggu\'s creative spirit. Your villa, your vibe.',
    heroDescription: 'Where rice paddies meet surf breaks, and every meal becomes a celebration of conscious living. Nourishing food for the adventurous soul.',
    heroTitle: 'Canggu Private Chef: Eat Well, Live Free, Surf Happy',
    areas: ['Echo Beach Surf Zone', 'Batu Bolong Creative Hub', 'Berawa Rice Fields', 'Pererenan Hidden Gems', 'Nelayan Village Edge'],
    popularVenues: ['The Lawn Canggu', 'COMO Uma Canggu', 'Tugu Bali', 'Echo Beach Villa Compounds', 'Rice Paddy Retreats'],
    localInsights: 'Canggu operates on its own rhythm — early morning surf sessions, mid-morning smoothie bowls, laptop work at café-offices, sunset skateboard runs, and communal dinners at shared tables. Our chefs tap into this creative energy, crafting meals that fuel active lifestyles without sacrificing flavor. Think abundant bowls, locally-grown produce, and food that photographs as beautifully as it tastes.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.648892",
      "longitude": "115.138206"
    },
    extendedContent: {
      mainHeading: 'Nourishment for the Canggu Lifestyle',
      introParagraphs: [
        'Canggu doesn\'t follow rules. This is the neighborhood where yoga instructors live next to crypto traders, where surfers and artists share coffee at the same warung, and where "dinner party" might mean twelve people around a communal table or two watching the rice fields turn gold. Your private chef here adapts to whatever your Canggu chapter looks like.',
        'Forget stuffy fine dining. Canggu demands food that matches its energy — vibrant, nourishing, Instagrammable without trying. Our chefs specialize in the cuisine that defines this neighborhood: abundant grain bowls, plant-forward plates, sustainable seafood, and the kind of Indonesian comfort food that makes you understand why locals never tire of their grandmothers\' recipes.',
        'The secret ingredient in every Canggu meal is proximity. Within cycling distance, our chefs access organic farms in Tanah Lot, fishing villages along the coast, and specialty suppliers who cater to the neighborhood\'s wellness-obsessed residents. Your dinner\'s vegetables might have been in the ground that morning.'
      ],
      whyChooseSection: {
        title: 'Why Canggu Dining Hits Different',
        intro: 'This neighborhood invented its own food culture. Our chefs speak its language fluently.',
        benefits: [
          { title: 'Surf Schedule Flexibility', description: 'Dawn patrol at 5:30 AM? We\'ll have post-surf breakfast ready when you return. Afternoon session running late? Dinner slides accordingly. Your waves come first.' },
          { title: 'Retreat-Ready Cuisine', description: 'Hosting a yoga group? We create sattvic menus, juice cleanses, Ayurvedic-inspired meals, and group nutrition that supports practice rather than hindering it.' },
          { title: 'Digital Nomad Meal Prep', description: 'Working from your villa? We batch-cook 3-5 days of balanced meals so you can focus on deadlines instead of wondering what\'s for lunch.' },
          { title: 'Organic Sourcing Network', description: 'Direct relationships with Bali\'s organic farms mean your produce is picked that morning. No middlemen, no mystery origins.' },
          { title: 'Casual is King', description: 'Barefoot dining on the terrace? Floor cushions around a low table? We serve your food however matches your villa\'s vibe.' }
        ]
      },
      chefsSection: {
        title: 'Meet Canggu\'s Culinary Creatives',
        intro: 'Our Canggu chefs aren\'t just cooks — they\'re part of the neighborhood\'s wellness community, sourcing from the same farms and understanding the lifestyle from the inside.',
        paragraphs: [
          'Chef Komang grew up in a rice farming family outside Tanah Lot. She brings generational knowledge of Balinese agriculture to her cooking, transforming humble local vegetables into dishes that surprise even the most seasoned foodie. Her tempeh preparations alone have converted dozens of skeptics.',
          'Chef Tom arrived from Melbourne five years ago for the surf and never left. His plant-based fine dining background merges with local ingredients to create the kind of elevated vegan food that makes carnivores reconsider everything. His jackfruit rendang has its own fan following.',
          'Chef Wira specializes in feeding crowds — the communal surf house dinners that define Canggu social life. She makes Indonesian classics shareable: banana leaf platters of grilled fish, family-style nasi campur spreads, and desserts designed for passing around the table.'
        ],
        specializations: ['High-Protein Athletic Nutrition', 'Whole-Food Plant-Based Excellence', 'Raw and Living Foods', 'Indonesian Home Cooking Elevated', 'Communal Feast Choreography', 'Juice Cleanse and Detox Programs', 'Allergen-Free Family Cooking']
      },
      occasionsSection: {
        title: 'Canggu Gatherings We\'ve Fed',
        paragraphs: [
          'The twelve-person yoga teacher training that needed sattvic meals for four weeks. The surf brand launch party where everyone still talks about the poke station. The remote workers who pooled money for a weekly "proper dinner" to escape screen time together. These are Canggu occasions — less formal, more heartfelt.',
          'Birthday celebrations here look different. Instead of dress codes, there\'s a general vibe. Instead of courses, there\'s abundance. We create the kind of food that encourages lingering, that keeps conversations flowing, that respects the casualness while still delivering restaurant-quality execution.'
        ]
      },
      pricingSection: {
        title: 'Accessible Excellence',
        intro: 'Canggu attracts budget-conscious travelers and successful entrepreneurs alike. Our pricing accommodates both.',
        categories: [
          { title: 'Solo/Couple Wellness Meals', items: ['Chef service from Rp 1,800,000', 'Perfect for 2-3 hour sessions', 'Meal prep options available', 'Organic ingredient focus', 'Nutritional guidance included'] },
          { title: 'Villa Group Dinners (4-10)', items: ['Chef service from Rp 2,800,000', 'Family-style or individual plating', 'Shareable feast format available', 'Dietary mix accommodation', 'Casual outdoor setup included'] },
          { title: 'Retreat & Event Catering (12+)', items: ['Chef team from Rp 5,500,000', 'Multi-day packages available', 'Juice bar additions', 'Breakfast through dinner coverage', 'Special diet coordination'] }
        ]
      },
      testimonialsSection: {
        title: 'From the Canggu Community',
        testimonials: [
          { name: 'Emma & the Dawn Patrol Crew', quote: 'Six weeks of post-surf breakfasts that actually fueled our sessions instead of making us food-coma. The chef understood athlete nutrition without making it taste like diet food.', event: 'Extended surf trip meal support' },
          { name: 'Bali Yoga Collective', quote: 'Our 200-hour teacher training needed specific Ayurvedic meals. The chef researched our requirements, asked intelligent questions, and delivered food that our guru approved of — no small feat.', event: 'Month-long retreat catering' },
          { name: 'Ricardo M.', quote: 'Forty of us, half vegan, quarter with allergies, everyone with opinions. The chef created six different options that somehow all worked together as a cohesive feast. Still not sure how she pulled it off.', event: 'Birthday villa party' },
          { name: 'Nomad House Collective', quote: 'We pooled funds for weekly chef dinners instead of eating Warung every night. It became our community ritual — proper food, proper conversations, proper break from screens.', event: 'Weekly coliving dinners' },
          { name: 'Sarah K.', quote: 'I have celiac, my partner is pescatarian, and we wanted authentic Indonesian food. The chef recreated my grandmother-in-law\'s recipes safely gluten-free. I cried a little at how good it was.', event: 'Anniversary dinner' }
        ]
      },
      sampleMenuSection: {
        title: 'Canggu-Style Menus',
        intro: 'Every menu reflects your preferences, but these showcase our neighborhood flavor.',
        menus: [
          { name: 'Sunrise Surf Fuel', courses: [
            { category: 'Pre-Surf Quick Bites', items: ['Coconut chia pudding with mango', 'Energy balls with cacao and dates', 'Fresh pressed ginger-turmeric shots'] },
            { category: 'Post-Session Feast', items: ['Acai bowl with granola and local fruits', 'Savory congee with soft egg and crispy shallots', 'Avocado toast on sourdough with everything bagel spice'] },
            { category: 'Hydration Station', items: ['Fresh young coconuts', 'Electrolyte smoothies with sea salt and citrus', 'Herbal iced teas with lemongrass'] }
          ]},
          { name: 'Rice Field Sunset Gathering', courses: [
            { category: 'Golden Hour Grazing', items: ['Vegetable tempura with sambal mayo', 'Fresh spring rolls with peanut sauce', 'Grilled corn with chili-lime butter'] },
            { category: 'Communal Mains', items: ['Jackfruit rendang with turmeric rice', 'Grilled whole fish with Balinese spices', 'Gado-gado with peanut dressing and tempeh'] },
            { category: 'Sweet Endings', items: ['Coconut black rice pudding', 'Fresh fruit platter with chili salt', 'Pandan layer cake'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Your Canggu Story Starts Here',
        paragraphs: [
          'Tomorrow morning, you could wake to the smell of fresh pancakes while you check the surf report. Or come home from a productive café session to find dinner waiting on your terrace, rice fields glowing pink beyond. These aren\'t fantasies — they\'re Tuesday for our Canggu clients.',
          'Whether you\'re here for a week or a season, eating well shouldn\'t be complicated. Let us handle the food so you can focus on why you came to Canggu in the first place.'
        ]
      }
    },
    faqItems: [
      {
        question: 'I\'m training for a surf competition — can you help with sports nutrition?',
        answer: 'Absolutely. Several of our chefs have backgrounds in athletic nutrition. We design high-protein, anti-inflammatory meals timed around your training schedule. Think proper fueling before dawn sessions and recovery-focused dinners that help your body repair overnight.'
      },
      {
        question: 'Our yoga retreat has strict dietary requirements — sattvic only. Can you accommodate?',
        answer: 'We\'ve catered multiple yoga teacher trainings in Canggu. Our chefs understand sattvic principles: no onion, no garlic, vegetarian, fresh and simply prepared. We create menus that honor the practice while still being genuinely delicious and varied over multiple days.'
      },
      {
        question: 'We\'re digital nomads wanting weekly meal prep. Is that a service?',
        answer: 'One of our most popular Canggu offerings. We come once or twice weekly, batch-cook balanced meals stored in your fridge, ready to heat. No more deciding what to eat during work hours, no daily café expenses. Many nomads find it transforms their productivity.'
      },
      {
        question: 'Can you source ingredients from the Samadi Sunday Market?',
        answer: 'We shop there ourselves. The market is our preferred source for organic produce, specialty health foods, and items that match Canggu\'s wellness culture. If there\'s a specific vendor or product you love, we\'ll incorporate it into your menu.'
      },
      {
        question: 'Our villa is down a tiny gang near Nelayan. Can chefs find us?',
        answer: 'Canggu\'s maze of gangs is our daily territory. Share your GPS pin during booking and our chefs will navigate there without issue. They\'ve served villas accessed only by scooter, rice field paths requiring sturdy shoes, and everything in between.'
      },
      {
        question: 'We want a communal dinner for 15 friends but nothing fancy — just good food and good vibes.',
        answer: 'Exactly our specialty. Think abundant Indonesian sharing platters, banana leaves instead of plates, everyone passing dishes around the table. Casual doesn\'t mean compromising on quality — it means food that encourages conversation rather than silent appreciation.'
      },
      {
        question: 'Half our group is vegan, half wants meat. Can you make everyone happy?',
        answer: 'This is standard Canggu reality. We design menus where plant-based dishes stand on their own merit alongside meat options, sharing the same flavor profiles and presentation quality. Neither group feels like an afterthought.'
      }
    ]
  },
  ubud: {
    name: 'Ubud',
    slug: 'ubud',
    tagline: 'Ubud Private Chef: Sacred Flavors in the Cultural Heart of Bali',
    description: 'Where ancient rice terraces inspire timeless cuisine. Farm-to-table dining amid jungle canopy, temple ceremonies, and artistic traditions. Nourish body and soul together.',
    heroDescription: 'Dining as spiritual practice. Your jungle villa becomes a sanctuary where locally-grown ingredients transform into meals that honor Balinese heritage.',
    heroTitle: 'Ubud Private Chef: Cuisine Born from the Land',
    areas: ['Ubud Royal Palace Quarter', 'Tegallalang Rice Terrace Valley', 'Penestanan Artist Village', 'Sayan Ridge', 'Campuhan Sacred Valley'],
    popularVenues: ['Four Seasons Resort Sayan', 'Viceroy Bali', 'Hanging Gardens of Bali', 'Bambu Indah Eco Retreat', 'COMO Shambhala Estate'],
    localInsights: 'Ubud exists outside ordinary time. Morning offerings placed at temple doorways, gamelan music drifting from palace rehearsals, farmers tending terraces their families have cultivated for generations. Food here carries deeper meaning — every ingredient connects to the land, the seasons, the spiritual calendar. Our chefs understand this sacred relationship and cook accordingly.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.508830",
      "longitude": "115.263214"
    },
    extendedContent: {
      mainHeading: 'Cuisine as Cultural Immersion',
      introParagraphs: [
        'In Ubud, eating well means eating mindfully. The jungle canopy filters morning light through your villa\'s open-air kitchen while your chef grinds spices using the same stone mortar techniques passed down through centuries. This isn\'t performance — it\'s preservation. And the flavors prove why these methods endure.',
        'Your Ubud dining experience begins before the first flame ignites. Perhaps a dawn visit to Pasar Ubud, where farmers sell produce picked hours earlier. Or a morning spent learning to distinguish between the seventeen traditional sambals. Understanding the food\'s origins deepens every subsequent bite.',
        'The terraced landscape surrounding Ubud produces ingredients unavailable elsewhere in Bali. Higher altitude means cooler nights, which means sweeter vegetables and more complex spice development. Organic farming isn\'t a trend here — it\'s tradition, practiced for millennia. Your plate reflects this heritage.'
      ],
      whyChooseSection: {
        title: 'The Ubud Difference',
        intro: 'This is not beach resort dining. Ubud demands a different approach — slower, more intentional, connected to place.',
        benefits: [
          { title: 'Farm Relationships', description: 'Our chefs know the farmers by name. They understand which fields produce the best morning glory, when the snake beans peak, where to find wild ferns after rain. Your ingredients travel mere kilometers from soil to plate.' },
          { title: 'Ceremony Accommodation', description: 'Galungan, Kuningan, temple anniversaries — Ubud\'s calendar revolves around sacred days. We navigate chef availability around ceremonies and can incorporate ceremonial foods into your meal.' },
          { title: 'Wellness Integration', description: 'Many Ubud guests pursue healing journeys. We coordinate with retreat schedules, create detox-compatible menus, and understand the connection between nourishment and transformation.' },
          { title: 'Artistic Presentation', description: 'Ubud inspires creativity. Our plating draws from local artistic traditions — the precision of Batuan painting, the balance of temple architecture. Every dish becomes visual art.' },
          { title: 'Jungle Setting Expertise', description: 'River gorges, rice terrace edges, canopy platforms — Ubud villas occupy extraordinary locations. Our chefs navigate access challenges and bring proper equipment regardless of remoteness.' }
        ]
      },
      chefsSection: {
        title: 'Keepers of Culinary Tradition',
        intro: 'Ubud attracts chefs drawn to tradition, spirituality, and craft. Many have chosen this location specifically for its connection to authentic Balinese culture.',
        paragraphs: [
          'Chef Made grew up in Ubud\'s palace banjar, learning to cook for royal ceremonies from childhood. His lawar preparation follows recipes unchanged for generations, yet his presentation speaks to contemporary aesthetics. Watching him cook is an education in living tradition.',
          'Chef Putu Ayu trained at Mandapa Ritz-Carlton before returning to private service. She merges fine dining precision with deep respect for Balinese ingredients, creating tasting menus that tell stories of the island\'s agricultural heritage across eight carefully sequenced courses.',
          'Chef Nyoman specializes in raw and living food cuisine that honors Ubud\'s wellness community. His approach draws from Ayurvedic principles while showcasing the exceptional quality of local organic produce. Every dish nourishes while delighting.'
        ],
        specializations: ['Traditional Balinese Ceremonial Cuisine', 'Organic Farm-to-Table Excellence', 'Ayurvedic and Sattvic Cooking', 'Raw and Living Food Mastery', 'Vegetarian Fine Dining', 'Ancient Spice Blending Techniques', 'Wellness Retreat Menus']
      },
      occasionsSection: {
        title: 'Moments Worth Gathering For',
        paragraphs: [
          'The yoga teacher training that concluded with a ceremonial feast featuring dishes from each students\' homeland, unified by Balinese technique. The silver anniversary couple who renewed vows at a temple then returned to a private Megibung-style dinner — the traditional communal feast of their adopted Balinese family. The solo traveler who wanted a proper introduction to the cuisine and left with both recipes and meaning.',
          'Ubud occasions carry weight. People come here seeking transformation, healing, reconnection. Our dining experiences honor these deeper intentions. Whether celebrating concrete milestones or marking internal shifts, we create meals that meet the significance of your moment.'
        ]
      },
      pricingSection: {
        title: 'Investment in Authentic Experience',
        intro: 'Ubud dining involves more than cooking — it encompasses sourcing from organic farms, often traveling considerable distances, and bringing expertise in traditional cuisine.',
        categories: [
          { title: 'Intimate Cultural Dinner (2-4)', items: ['Chef fee from Rp 2,600,000', 'Includes market visit option', 'Traditional cooking demonstration', 'Five-course tasting format', 'History and meaning shared with each dish'] },
          { title: 'Retreat Group Service (6-15)', items: ['Chef fee from Rp 4,200,000', 'Multi-dietary accommodation', 'Family-style service available', 'Wellness menu options', 'Multi-meal day packages'] },
          { title: 'Ceremony & Celebration (16-40)', items: ['Chef team from Rp 7,800,000', 'Traditional feast formats', 'Staff for service', 'Special dietary coordination', 'Cultural presentation elements'] }
        ]
      },
      testimonialsSection: {
        title: 'Voices from the Valley',
        testimonials: [
          { name: 'The Morrison Family', quote: 'We\'d eaten at Mozaic and Locavore — Ubud\'s famous restaurants. But dinner in our villa, overlooking the Ayung River as Chef Made explained each dish\'s ceremonial origins... this was the Bali experience we came for. Our teenage sons still talk about it.', event: 'Family cultural immersion dinner' },
          { name: 'Bali Spirit Festival Group', quote: 'Twenty-two people, eight countries, countless dietary restrictions. The chef created a banquet that felt unified despite accommodating everyone. Vegans sat next to meat-eaters, all sharing the same cultural experience.', event: 'Festival gathering dinner' },
          { name: 'Dr. Amanda Chen', quote: 'I came to Ubud for a healing retreat after burnout. The chef coordinated with my Ayurvedic practitioner to create meals supporting my treatment. Food became part of my recovery, not just fuel.', event: 'Wellness retreat support' },
          { name: 'James & Sutarto', quote: 'Our wedding reception happened at the rice terraces, then our intimate dinner continued the celebration. The chef incorporated foods from both our cultures — Australian and Balinese — creating dishes neither of us had imagined.', event: 'Post-wedding celebration' },
          { name: 'Painting Retreat Collective', quote: 'Art students fueled by art-level food. The presentation inspired our work. One student painted her dessert before eating it. That\'s the kind of chef we\'re talking about.', event: 'Art retreat catering' }
        ]
      },
      sampleMenuSection: {
        title: 'Seasonal Ubud Menus',
        intro: 'These examples show our approach. Your menu will reflect the day\'s harvest and your preferences.',
        menus: [
          { name: 'Terraced Tasting Journey', courses: [
            { category: 'Opening Blessing', items: ['Jamu wellness shot with turmeric and tamarind', 'Rice terrace vegetables with kecombrang flower'] },
            { category: 'From the Farms', items: ['Organic tempeh three preparations: raw, fermented, grilled', 'Jungle fern salad with coconut and lime'] },
            { category: 'Heritage Mains', items: ['Bebek betutu: duck slow-cooked in banana leaf with Ubud spices', 'Lawar: ceremonial vegetable and coconut preparation'] },
            { category: 'Sweet Completion', items: ['Black rice pudding with palm sugar and coconut cream', 'Tropical fruit with chili salt and lime'] }
          ]},
          { name: 'Wellness Evening', courses: [
            { category: 'Cleansing Start', items: ['Green juice with spirulina and local herbs', 'Raw vegetable crudités with cashew dips'] },
            { category: 'Living Mains', items: ['Kelp noodle pad thai with sprouted seeds', 'Buddha bowl with quinoa, roasted vegetables, tahini'] },
            { category: 'Grounding Finish', items: ['Chia pudding with cacao and adaptogens', 'Fresh coconut with bee pollen'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Your Ubud Journey Deepens Here',
        paragraphs: [
          'The rice terraces glow amber in late afternoon light. Gamelan practice floats up from the village below. In your villa kitchen, spices toast in coconut oil as your chef prepares a meal rooted in this place, this moment, this ancient tradition meeting your modern presence.',
          'Ubud invites transformation. Let us contribute to yours through nourishment that honors where you are and feeds where you\'re going.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re attending a yoga training that has strict dietary guidelines. Can you coordinate with our retreat leaders?',
        answer: 'This is common in Ubud. Share your retreat\'s dietary parameters — sattvic restrictions, meal timing, specific prohibitions — and we\'ll coordinate directly with your program directors if helpful. Our chefs understand the connection between food and practice.'
      },
      {
        question: 'Can the chef take us to Pasar Ubud and teach us about local ingredients?',
        answer: 'One of our most meaningful offerings. An early morning market visit with your chef reveals Ubud\'s food culture in ways menus cannot. Watch ingredient selection, learn about ceremonial foods, then return to your villa for cooking informed by real understanding.'
      },
      {
        question: 'Our villa is twenty minutes outside central Ubud, deep in the rice fields. Is that a problem?',
        answer: 'Remote locations are normal here. We serve villas accessible only by narrow paths between terraces. Chefs factor in travel time, carry appropriate equipment, and arrive prepared for whatever kitchen facilities await. Distance adds adventure, not difficulty.'
      },
      {
        question: 'We want to experience authentic ceremonial Balinese cuisine. Is that possible?',
        answer: 'Several of our Ubud chefs specialize in ritual cooking — the dishes served during temple ceremonies and family celebrations. They can prepare traditional Megibung communal feasts, lawar, babi guling, and other ceremonial preparations, explaining cultural significance alongside cooking technique.'
      },
      {
        question: 'I\'m on an Ayurvedic protocol that changes weekly. Can the menu adapt?',
        answer: 'Ubud attracts many guests following Ayurvedic treatment. Our chefs understand dosha balancing, seasonal eating, and treatment-phase adjustments. Provide your current protocol and we\'ll create menus that support your healing journey while delivering genuine culinary pleasure.'
      },
      {
        question: 'Our group includes serious foodies who\'ve already eaten at Locavore and Mozaic. Will this compare?',
        answer: 'Different experience, equal caliber. Those restaurants showcase refined technique in formal settings. Your villa dinner offers ingredient access, personalization, and cultural immersion unavailable in any restaurant. Many guests who\'ve dined at both say the private experience proved more memorable.'
      },
      {
        question: 'Can you accommodate a large group during Galungan when many chefs have family obligations?',
        answer: 'Ceremonial periods require advance planning. Book 4+ weeks ahead during major holidays. We maintain availability even during festivities, though our team composition may differ from typical weeks. Early booking guarantees your preferred date.'
      }
    ]
  },
  sanur: {
    name: 'Sanur',
    slug: 'sanur',
    tagline: 'Sanur Private Chef: Family-Friendly Dining Where Bali Began',
    description: 'Bali\'s original seaside village welcomes families and couples alike. Gentle waves, morning walks on the promenade, and evening meals prepared with grandparents and grandchildren equally in mind.',
    heroDescription: 'Where Bali greets the sunrise first and families gather without pretense. Your villa becomes the neighborhood restaurant everyone wishes they knew about.',
    heroTitle: 'Sanur Private Chef: Relaxed Dining for Real Families',
    areas: ['Sanur Beach Promenade', 'Sindhu Harbor Quarter', 'Semawang Fishing Village', 'Mertasari Southern Stretch', 'Ketewel Traditional Zone'],
    popularVenues: ['Hyatt Regency Bali', 'Maya Sanur Resort', 'Sudamala Suites', 'Tandjung Sari', 'Beachside family compounds'],
    localInsights: 'Sanur moves at human pace. Elderly couples walk the beachfront promenade at dawn, fishermen launch jukung boats for the morning catch, and by evening, multi-generational Indonesian families fill the waterfront restaurants. This isn\'t the Bali of beach clubs and influencers — it\'s the Bali of real vacation, where the biggest decision is whether to swim before or after breakfast. Your private chef fits this rhythm perfectly.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.692857",
      "longitude": "115.262778"
    },
    extendedContent: {
      mainHeading: 'When Everyone Eats Together, Everyone Belongs',
      introParagraphs: [
        'Family vacations test even the best relationships. Grandfather refuses spicy food. The teenager survives on chicken fingers. Auntie maintains strict vegetarian observance. The twins have opposite texture aversions. Navigating Bali\'s restaurant scene with this crew sounds exhausting before you\'ve even finished reading the menu. Here\'s a better option: bring the restaurant to your villa, staffed by a chef who makes everyone happy.',
        'Sanur attracts families precisely because it demands nothing. No FOMO about missing the cool beach clubs, no traffic battles to reach attractions, no late-night temptations interfering with early bedtimes. The neighborhood rewards slow living. Your chef complements this by eliminating meal planning stress entirely.',
        'The Sindhu harbor opens at 4 AM, when the night fishing fleet returns. Your chef arrives shortly after, selecting the freshest catches before any restaurant buyer appears. By the time your kids wake up, tonight\'s dinner is already chosen — fish still carrying ocean cold, prawns with antennae twitching, crabs heavy with roe. This is sourcing advantage that Sanur uniquely offers.'
      ],
      whyChooseSection: {
        title: 'Designed Around Real Family Needs',
        intro: 'We\'ve fed enough multi-generational groups to anticipate the challenges before they arise.',
        benefits: [
          { title: 'Simultaneous Service', description: 'Kids\' meals arrive warm alongside adult courses. No more inhaling your food before someone starts crying. Everyone eats together, at temperature.' },
          { title: 'Texture Flexibility', description: 'Same ingredients, different preparations. Grandpa gets soft-cooked vegetables while teens crunch raw versions. One shopping trip, multiple happy palates.' },
          { title: 'Nap-Time Scheduling', description: 'Toddler down at 2 PM? Adults can have a proper lunch. Then early dinner for kids, late dinner for grownups. Your schedule drives ours.' },
          { title: 'Allergy Vigilance', description: 'Cross-contamination is no joke. We dedicate separate cookware, boards, and utensils for allergenic ingredients. Peace of mind lets everyone relax.' },
          { title: 'Beachfront Logistics', description: 'Many Sanur villas lack full kitchens. We bring equipment, source gas if needed, and manage whatever infrastructure your accommodation provides.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Understand Family Dynamics',
        intro: 'Cooking for one discerning foodie is easy. Cooking for twelve people across four generations with five dietary restrictions? That requires a different skill set.',
        paragraphs: [
          'Chef Ketut raised six children in Sanur before training professionally. She instinctively knows how to engage kids without condescension, when a dish needs more salt for senior palates, and how to make vegetables disappear into sauces for picky eaters. Parents book her specifically for the stress reduction she provides.',
          'Chef Wawan worked resort kids clubs for eight years before private service. His pasta-making sessions keep children entertained while adults decompress by the pool. He transforms cooking into family activity rather than separate chore.',
          'Chef Dewi specializes in Indonesian home cooking — the comfort food that Indonesian grandmothers make, adapted for international palates. Her rijsttafel feasts introduce Balinese cuisine gently, with familiar flavors alongside adventurous options.'
        ],
        specializations: ['Multi-Generational Menu Design', 'Allergy-Safe Kitchen Protocols', 'Kids Cooking Activities', 'Indonesian Home Cooking', 'Fresh Seafood from Sindhu Harbor', 'Comfort Food Expertise', 'Patient Service for Large Groups']
      },
      occasionsSection: {
        title: 'Sanur Gatherings We Remember',
        paragraphs: [
          'The Australian family who rented three adjacent villas for grandmother\'s ninetieth birthday — twenty-eight family members, seven dietary requirements, and not a single complaint across five catered dinners. The Indonesian-Dutch couple introducing their parents to each other over food that honored both heritages. The adoptive family finally meeting their daughter\'s birth relatives, with cuisine bridging the language gap.',
          'Sanur family celebrations carry emotional weight that Seminyak parties rarely match. These meals matter beyond flavor. Our chefs understand the responsibility and rise accordingly.'
        ]
      },
      pricingSection: {
        title: 'Family-Friendly Value',
        intro: 'Sanur attracts value-conscious travelers. Our pricing respects this without compromising quality.',
        categories: [
          { title: 'Intimate Family Dinner (2-6)', items: ['Chef service from Rp 2,200,000', 'Kid-friendly options included', 'Same pricing for mixed adult/child groups', 'Flexible timing for nap schedules', 'Complete cleanup included'] },
          { title: 'Extended Family Gathering (8-15)', items: ['Chef service from Rp 3,600,000', 'Multi-dietary menu design', 'Family-style or individual plating', 'Additional serving staff available', 'Leftovers properly stored for next-day enjoyment'] },
          { title: 'Multi-Day Family Packages', items: ['Daily service from Rp 1,800,000', 'Breakfast, lunch, and dinner coverage', 'Ingredient shopping handled completely', 'Consistent chef for relationship building', 'Flexibility for beach day schedules'] }
        ]
      },
      testimonialsSection: {
        title: 'Families Who\'ve Been There',
        testimonials: [
          { name: 'The Tanaka-Williams Family', quote: 'Four adults, six kids ages 2-14, multiple allergies, and very opinionated grandparents. The chef somehow made everyone feel heard and fed. We\'ve done this trip three times now — same chef each time by request.', event: 'Annual family reunion' },
          { name: 'Grandpa Roberto', quote: 'I\'m 84 years old and I came to Bali skeptical about the food. The chef made dishes that reminded me of my late wife\'s cooking — flavors she adapted from our years in Southeast Asia. I cried at the table. Best meal of my life.', event: 'Seventy-fifth wedding anniversary memorial' },
          { name: 'Parent of Twins', quote: 'Trying to get two five-year-olds to eat the same thing is normally impossible. The chef turned dinner into a game — they helped make spring rolls, decorated their own plates, competed over who ate more vegetables. Life-changing.', event: 'Week-long family stay' },
          { name: 'Blended Family of Eight', quote: 'First vacation combining both families after our wedding. Food could have been tense — dietary conflicts, cultural differences, kids meeting for the first time. The chef created neutral ground. We bonded over shared meals.', event: 'Blended family first trip' },
          { name: 'Medical Diet Traveler', quote: 'I manage multiple chronic conditions with strict dietary protocols. Traveling is usually miserable. The chef researched my conditions, coordinated with my nutritionist, and created meals that felt celebratory rather than restrictive.', event: 'Solo wellness trip' }
        ]
      },
      sampleMenuSection: {
        title: 'Sanur Family Favorites',
        intro: 'These menus have passed the ultimate test: picky eaters and traditional elders both cleaned their plates.',
        menus: [
          { name: 'Everybody Wins Indonesian Feast', courses: [
            { category: 'Shared Starters', items: ['Corn fritters (kid favorite)', 'Satay trio with peanut sauce on the side', 'Spring rolls with dipping sauces'] },
            { category: 'Flex Mains', items: ['Grilled fish for seafood lovers', 'Chicken for traditionalists', 'Tempeh for vegetarians', 'All with adjustable spice levels'] },
            { category: 'Sides Everyone Likes', items: ['Coconut rice', 'Stir-fried vegetables', 'Cucumber salad', 'Mild sambal and hot sambal separate'] },
            { category: 'Kid-Approved Sweet', items: ['Banana fritters with ice cream', 'Fresh tropical fruit', 'Chocolate pudding for picky eaters'] }
          ]},
          { name: 'Grandparent-Friendly Fine Dining', courses: [
            { category: 'Gentle Starters', items: ['Smooth fish soup with herb oil', 'Steamed dumplings', 'Tender prawn cakes'] },
            { category: 'Soft Proteins', items: ['Slow-braised beef cheek', 'Flaky barramundi', 'Chicken thigh cooked until falling apart'] },
            { category: 'Easy Vegetables', items: ['Roasted root vegetables', 'Creamed spinach', 'Buttered rice'] },
            { category: 'Nostalgic Dessert', items: ['Coconut custard', 'Stewed fruits', 'Vanilla ice cream with palm sugar'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'The Sanur Family Vacation You Imagined',
        paragraphs: [
          'Tomorrow morning, nobody negotiates restaurant choices. Breakfast appears when the household wakes — early birds get pancakes, late sleepers find theirs warming in the oven. Afternoon brings sandwiches poolside without anyone suggesting an outing. Evening means gathering around your villa table, all generations present, food that works for everyone, and dishes that disappear after you\'ve finished.',
          'This is the family vacation that actually bonds rather than strains. Let us help you achieve it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'My kids will only eat plain pasta and chicken nuggets. Can your chefs work with extremely picky eaters?',
        answer: 'We\'ve converted more picky eaters than we can count. The secret isn\'t forcing adventurous food — it\'s presenting familiar favorites alongside options that might tempt. Fresh pasta appears next to satay skewers. Chicken prepared three ways offers easy wins. Zero pressure, maximum opportunity. Many parents report kids trying new foods simply because the chef made them feel safe.'
      },
      {
        question: 'We\'re traveling with elderly parents who need soft foods and mild flavors. Can you accommodate?',
        answer: 'Absolutely. We\'ve served guests in their nineties who needed tender proteins, reduced salt, and textures that don\'t require strong teeth. Same ingredients, different preparations. Grandpa gets his fish poached while grandchildren have theirs grilled crispy. Everyone eats together, everyone enjoys their version.'
      },
      {
        question: 'Our villa has a very basic kitchen — just a two-burner stove. Is that a problem?',
        answer: 'Many Sanur beachfront properties have limited kitchens. Our chefs bring portable equipment, manage timing across limited burners, and have served full multi-course meals from setups that would intimidate most cooks. We assess during booking and arrive prepared for whatever we find.'
      },
      {
        question: 'We want seafood but my daughter has severe shellfish allergy. How do you handle cross-contamination?',
        answer: 'Severe allergies require serious protocols. We use dedicated cutting boards, knives, and cookware for allergenic ingredients. Your daughter\'s meal gets prepared first with clean equipment. We trace ingredient sourcing for hidden allergens. Parents with allergic children often say we\'re more careful than most restaurants they\'ve visited.'
      },
      {
        question: 'Can the chef keep the kids entertained while we have a date-night dinner?',
        answer: 'One of our most requested services. We serve kids dinner with fun activities — spring roll assembly, dessert decoration, safe cooking tasks — then transition to adult service once children are settled. Parents get romantic dining while kids feel included rather than dismissed. Everyone wins.'
      },
      {
        question: 'We\'re an Indonesian family wanting traditional home cooking, not tourist versions. Can your chefs deliver authentic flavors?',
        answer: 'Several of our Sanur chefs learned from their Balinese grandmothers and maintain regional authenticity without adaptation. They know the difference between resort rendang and village rendang. Share your family\'s regional preferences — Javanese, Padang, Manado — and we\'ll match you with chefs who cook those traditions genuinely.'
      },
      {
        question: 'Is it possible to have the same chef for our entire week-long stay?',
        answer: 'Yes, and families often prefer this. Children warm up to familiar faces; elderly guests appreciate consistency; everyone benefits from a chef who learns your preferences. We try to assign one chef to multi-day bookings when schedules permit. Book early to guarantee availability.'
      }
    ]
  },
  nusadua: {
    name: 'Nusa Dua',
    slug: 'nusa-dua',
    // SEO override: 1434 imp, pos 11, but only 0.9% CTR (site avg at pos 11 ≈ 2.5%+).
    // Default "Villa Dining" title misses Nusa Dua's resort/conference audience.
    seoTitle: 'Private Chef in Nusa Dua — In-Villa Resort Dining & Tasting Menus | myCHEF',
    seoDescription: 'Private chef in Nusa Dua delivering 5-star tasting menus in your villa or resort suite. Multi-course wine pairing, dietary handling. Conference + family suites welcome.',
    tagline: 'Nusa Dua Private Chef: Five-Star Excellence Behind Private Gates',
    description: 'Where world leaders stay and fortune 500 executives unwind. Resort-caliber dining in your villa, with chefs trained in Michelin kitchens and discretion as standard practice.',
    heroDescription: 'The security gates close behind you. The outside world fades. Your villa becomes the most exclusive restaurant in the enclave.',
    heroTitle: 'Nusa Dua Private Chef: Luxury Without Limits',
    areas: ['BTDC Resort Complex', 'Tanjung Benoa Water Sports Zone', 'Sawangan Clifftop District', 'The Mulia Beachfront', 'Peninsula Island Access'],
    popularVenues: ['The St. Regis Bali', 'Mulia Resort', 'The Ritz-Carlton Bali', 'Sofitel Nusa Dua', 'Waldorf Astoria', 'Kayumanis Private Estates'],
    localInsights: 'Nusa Dua exists behind gates for a reason. Heads of state stay here during summits. Celebrities vacation without paparazzi concerns. Executives close deals in absolute privacy. The enclave maintains standards other Bali destinations simply cannot match. Your private chef must meet these expectations — and ours exceed them.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.792730",
      "longitude": "115.231193"
    },
    extendedContent: {
      mainHeading: 'When Only the Best Will Do',
      introParagraphs: [
        'You chose Nusa Dua for a reason. Perhaps the security of a gated enclave. Perhaps the guarantee of world-class resort standards throughout. Perhaps the certainty that when you request something, it will materialize correctly. Your private dining experience must uphold these same standards.',
        'Our Nusa Dua chefs come from the enclave\'s own legendary kitchens. Former executive sous chefs from Mulia. Garde manger veterans from St. Regis. Pastry specialists trained at Ritz-Carlton. They know what five-star guests expect because they\'ve served them for years. Now they bring that expertise exclusively to your villa.',
        'The sourcing network in Nusa Dua operates at a level unavailable elsewhere in Bali. Need A5 Wagyu from Miyazaki prefecture? Oysters flown in that morning from Tasmania? A specific vintage of Burgundy? The infrastructure exists here because the clientele demands it. Our chefs access these channels on your behalf.'
      ],
      whyChooseSection: {
        title: 'Standards Befitting the Enclave',
        intro: 'Nusa Dua guests don\'t compromise. Neither do we.',
        benefits: [
          { title: 'Resort Pedigree', description: 'Our chefs have worn the uniforms of the enclave\'s five-star properties. They understand the service culture, the presentation standards, and the discretion required.' },
          { title: 'Security Coordination', description: 'We work seamlessly with resort security protocols, private protection details, and villa access procedures. No delays, no awkwardness.' },
          { title: 'Premium Ingredient Access', description: 'Wagyu. Caviar. White truffle. Bluefin tuna. If it exists in Bali\'s luxury supply chain, we can source it within 24 hours.' },
          { title: 'VIP Discretion', description: 'Celebrity clients. Business leaders. High-profile families. We\'ve served them all with zero publicity. Confidentiality isn\'t requested; it\'s assumed.' },
          { title: 'Sommelier Partnerships', description: 'Wine pairings worthy of Nusa Dua cellars. We coordinate with distributors who supply the enclave\'s finest restaurants.' }
        ]
      },
      chefsSection: {
        title: 'Resort-Caliber Talent, Villa Exclusivity',
        intro: 'These chefs left hotel employment for private service. They bring institutional excellence to intimate settings.',
        paragraphs: [
          'Chef Andreas spent twelve years rising through Mulia\'s kitchen brigade, finishing as executive sous chef responsible for state dinner execution. His understanding of protocol, timing, and presentation comes from serving presidents and royalty. Now he applies this expertise to private villas.',
          'Chef Sari trained in classical French technique at Le Cordon Bleu before joining St. Regis Bali\'s culinary team. Her dessert presentations have appeared in international hospitality publications. She creates the kind of finale courses that guests photograph and remember years later.',
          'Chef Budi specializes in Japanese precision — twelve years between Tokyo and Bali\'s finest omakase restaurants. His knife skills, his sourcing connections for quality fish, and his understanding of seasonal kaiseki make him the choice for guests seeking Japanese excellence in their villa.'
        ],
        specializations: ['Michelin-Style Multi-Course Service', 'Japanese Kaiseki and Omakase', 'Classical French Technique', 'Premium Steak Preparation', 'Wine Pairing Expertise', 'State Dinner Protocol', 'VIP Privacy Management']
      },
      occasionsSection: {
        title: 'Nusa Dua Occasions',
        paragraphs: [
          'The corporate retreat where dinner became the deal-closing venue. The anniversary celebration that required twelve courses matching the couple\'s twelve years. The family reunion where three Michelin-starred chefs collaborated on a single night\'s menu. These are Nusa Dua expectations, and we meet them.',
          'Business dining here carries stakes. Every detail reflects on your taste, your standards, your attention to excellence. Our chefs understand this pressure and perform accordingly. Your guests leave impressed not just by the food, but by the entire experience.'
        ]
      },
      pricingSection: {
        title: 'Investment Aligned with Excellence',
        intro: 'Nusa Dua pricing reflects access to premier talent and premium ingredients.',
        categories: [
          { title: 'Executive Dinner (2-6 guests)', items: ['Chef service from Rp 4,200,000', 'Includes sommelier consultation', 'Premium tableware and linens', 'Full-service dining experience', 'Discretion and NDA available'] },
          { title: 'Business Gathering (8-14 guests)', items: ['Chef team from Rp 7,500,000', 'Additional service staff included', 'Multi-course tasting format', 'Wine pairing coordination', 'Event timeline management'] },
          { title: 'Private Event (16-40 guests)', items: ['Full culinary team from Rp 15,000,000', 'Complete venue transformation', 'Multi-station options', 'Beverage program management', 'Entertainment coordination available'] }
        ]
      },
      testimonialsSection: {
        title: 'From Nusa Dua Villas',
        testimonials: [
          { name: 'Anonymous Executive', quote: 'We hosted twelve investors for what became the most significant deal of our careers. The chef understood that dinner was theater — every course built momentum toward the conversation we needed to have. Investment closed before dessert.', event: 'Business dinner' },
          { name: 'The K. Family', quote: 'Three generations, five dietary restrictions, extremely particular grandmother. The chef created a menu that honored everyone\'s needs while maintaining cohesive elegance. Grandmother said it was the finest meal she\'d had in twenty years.', event: 'Family celebration' },
          { name: 'Concierge, Major Resort', quote: 'I recommend this service to our most demanding villa guests. They consistently meet or exceed the standards our guests expect from the resort itself. No complaints in forty recommendations.', event: 'Concierge feedback' },
          { name: 'Mr. & Mrs. L.', quote: 'For our thirtieth anniversary, we wanted a meal that would define memory. Twelve courses, each representing a year of our marriage through flavors from places we\'d traveled together. The chef researched our history and delivered perfection.', event: 'Anniversary milestone' },
          { name: 'Security Detail Lead', quote: 'Working with high-profile clients requires service providers who understand discretion. This team arrives, executes, and departs without incident. Their professionalism matches the principal\'s expectations.', event: 'VIP service assessment' }
        ]
      },
      sampleMenuSection: {
        title: 'Nusa Dua Caliber Menus',
        intro: 'Every menu is bespoke. These examples illustrate our approach to enclave-worthy dining.',
        menus: [
          { name: 'Executive Tasting Journey', courses: [
            { category: 'Amuse-Bouche', items: ['Oyster with champagne foam', 'Tuna tartare with gold leaf', 'Caviar on blini with crème fraîche'] },
            { category: 'Progression', items: ['Lobster bisque with truffle oil', 'Seared scallops with cauliflower purée', 'Palate cleanser of yuzu sorbet'] },
            { category: 'Main Statement', items: ['A5 Wagyu striploin with bone marrow butter', 'Or: Turbot with champagne beurre blanc', 'Seasonal vegetables and potato gratin'] },
            { category: 'Grand Finale', items: ['Valrhona chocolate sphere with raspberry heart', 'Artisanal cheese selection', 'Petit fours and coffee service'] }
          ]},
          { name: 'Japanese Kaiseki Evening', courses: [
            { category: 'Sakizuke', items: ['Seasonal opening to set the mood'] },
            { category: 'Hassun', items: ['Multiple small expressions of the season'] },
            { category: 'Owan', items: ['Dashi-based soup with seasonal ingredients'] },
            { category: 'Yakimono', items: ['Grilled course featuring premium seafood'] },
            { category: 'Gohan', items: ['Rice course with traditional accompaniments'] },
            { category: 'Mizugashi', items: ['Seasonal fruit and wagashi sweets'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'The Nusa Dua Standard, Maintained',
        paragraphs: [
          'You came through those gates expecting a certain level of experience. Everything in the enclave meets that expectation — the service, the facilities, the attention to detail. Your private dining should be no exception.',
          'Contact us to discuss your requirements. Specify your standards. Describe your vision. We\'ll exceed it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re staying at St. Regis Villas. Can you serve within the resort complex?',
        answer: 'We serve St. Regis villa guests regularly. Our team coordinates with resort security, concierge, and butler service to ensure seamless access. Many guests prefer our private dining to the resort restaurants for privacy and customization. The resort staff knows us; coordination is effortless.'
      },
      {
        question: 'Our principal requires NDA compliance. Is that standard?',
        answer: 'We sign confidentiality agreements when requested without hesitation. Several of our Nusa Dua clients require this as standard practice. Our chefs understand discretion as a core professional requirement. No photographs, no social media, no disclosure of any kind.'
      },
      {
        question: 'Can you source A5 Wagyu and other premium imports with short notice?',
        answer: 'Nusa Dua\'s luxury supply infrastructure allows premium sourcing within 24-48 hours for most items. A5 Wagyu, fresh French oysters, European cheeses, specific wine vintages — the distribution networks that serve the enclave\'s resorts are available to us. Share your requirements and we\'ll confirm availability.'
      },
      {
        question: 'We\'re hosting potential investors. The dinner needs to impress people who\'ve eaten at Eleven Madison Park and Noma.',
        answer: 'We\'ve served guests with exactly these reference points. Our Nusa Dua chefs understand international fine dining standards and create experiences that stand alongside top global restaurants. The difference: complete privacy, total customization, and no Michelin pretension. Business closes over comfortable excellence.'
      },
      {
        question: 'Our security detail will need to be present during service. Does that affect your team?',
        answer: 'We work comfortably alongside protection details and personal security. Our chefs arrive at agreed times, follow established protocols, and accommodate any screening requirements. This is routine for our Nusa Dua service. Your security team\'s job becomes easier with professional catering staff.'
      },
      {
        question: 'The villa\'s resort affiliation includes their own chef option. Why should we use your service instead?',
        answer: 'Resort chefs execute standardized menus across multiple properties. Our service provides complete customization, exclusive chef attention, and often access to talent who\'ve left those same resorts for private practice. Guests who\'ve tried both consistently prefer the personalization and focus of private service.'
      },
      {
        question: 'We need service for twelve consecutive nights. Is that possible?',
        answer: 'Extended engagements are our specialty for Nusa Dua guests. We assign a consistent chef who learns your preferences, understands your rhythms, and improves service nightly. Multi-week packages include menu variation, wine program development, and complete dietary tracking across the stay.'
      }
    ]
  },
  uluwatu: {
    name: 'Uluwatu',
    slug: 'uluwatu',
    tagline: 'Uluwatu Private Chef: Romance on the Edge of the World',
    description: 'Cliffs drop 200 feet to crashing waves below. Sunset paints the sky impossible colors. And your private chef plates a meal worthy of the moment. This is Uluwatu dining.',
    heroDescription: 'Where the Indian Ocean meets Indonesian sky, and every dinner becomes the proposal story, the anniversary memory, the moment everything changed.',
    heroTitle: 'Uluwatu Private Chef: Dinner With a 200-Foot Drop',
    areas: ['Uluwatu Temple Cliffs', 'Pecatu Indah', 'Ungasan Hills', 'Bingin Beach Access', 'Padang Padang Cove'],
    popularVenues: ['Bulgari Resort Bali', 'Karma Kandara', 'Alila Villas Uluwatu', 'The Edge Bali', 'Six Senses Uluwatu', 'Anantara Uluwatu'],
    localInsights: 'Uluwatu operates on sunset time. Everything builds toward that moment when the sky ignites and the ocean glows gold. Your chef understands this rhythm, timing each course to the light, culminating in a main course as the sun touches the horizon. This isn\'t coincidence; it\'s choreography refined over hundreds of sunset dinners.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.829167",
      "longitude": "115.085833"
    },
    extendedContent: {
      mainHeading: 'When the Setting Demands Perfection',
      introParagraphs: [
        'Uluwatu villas don\'t just have ocean views. They have theater — a proscenium stage where the sun performs nightly and your dinner table occupies front row center. The meal must match this drama without competing with it. Our chefs understand this delicate balance, creating food that enhances the spectacle rather than distracting from it.',
        'The proposals happen at sunset. The champagne uncorks as colors peak. The ring emerges with dessert. We\'ve orchestrated over three hundred successful engagements along these cliffs, each one timed to the moment when she looks at the view and finds something more beautiful in front of her: her future.',
        'But Uluwatu isn\'t only romance. The surf breaks below draw athletes seeking barrels at Padang Padang. The temples attract spiritual seekers. The isolation appeals to writers, artists, and executives who need distance from distraction. Your private dinner here accommodates whatever brought you to the edge.'
      ],
      whyChooseSection: {
        title: 'Cliff-Edge Expertise',
        intro: 'Uluwatu demands specialized skills our team has developed over years of clifftop service.',
        benefits: [
          { title: 'Sunset Choreography', description: 'We know precisely when golden hour begins, when colors peak, and when the sun disappears. Each course arrives at its moment in the performance.' },
          { title: 'Weather Wisdom', description: 'Ocean exposure means unpredictable winds. We bring weighted elements, indoor backup plans, and real-time weather monitoring. No surprise storm ruins your evening.' },
          { title: 'Access Navigation', description: 'Steep drives, narrow paths, cliff-edge parking — our chefs handle Uluwatu\'s terrain daily. Your ingredients arrive safely regardless of villa location.' },
          { title: 'Proposal Precision', description: 'Ring hidden in which course? Photographer coordinated where? Champagne chilled when? We\'ve perfected the timeline that leads to yes.' },
          { title: 'Presentation Standards', description: 'Your photos will circulate for years. Every plate is styled for the camera, every setup Instagram-ready without trying.' }
        ]
      },
      chefsSection: {
        title: 'Artists of the Cliff Edge',
        intro: 'Uluwatu attracts chefs with theatrical instincts — those who understand that here, dining is performance.',
        paragraphs: [
          'Chef Nyoman grew up in the villages below Uluwatu temple, climbing these cliffs since childhood. He understands the land, the winds, the way afternoon light shifts. His cooking mirrors this knowledge — local ingredients prepared with techniques that respect both tradition and the modern palate of cliff dwellers.',
          'Chef Isabella arrived from Sicily, drawn by Uluwatu\'s resemblance to Mediterranean drama. She creates seafood dishes that bridge Italy and Indonesia, her plating designed specifically for outdoor terrace settings where natural beauty competes for attention.',
          'Chef Agus specializes exclusively in romantic occasions — proposals, anniversaries, honeymoons. He\'s participated in over four hundred milestone dinners, learning what works when emotion runs high. His menus reduce complexity, maximize meaning, and time perfectly to sunset transitions.'
        ],
        specializations: ['Sunset-Timed Multi-Course Service', 'Proposal and Engagement Dinners', 'Outdoor Terrace Presentation', 'Mediterranean-Indonesian Fusion', 'Wind-Resistant Tablescaping', 'Photographer Coordination', 'Post-Surf Recovery Meals']
      },
      occasionsSection: {
        title: 'Uluwatu Moments',
        paragraphs: [
          'The proposal where he\'d planned everything for three months and she suspected nothing until the ring appeared in the dessert\'s chocolate shell. The anniversary where they recreated their wedding menu seventeen years later, on the same cliff where they\'d married. The solo traveler who wanted one perfect meal before returning to a difficult reality — and found unexpected peace watching the sunset with exquisite food and absolute silence.',
          'Uluwatu occasions carry weight. People come to the edge of the world when something important happens, or when they need something important to happen. Our dinners honor these moments with appropriate gravity while still bringing genuine joy.'
        ]
      },
      pricingSection: {
        title: 'Value of Perfection',
        intro: 'Uluwatu pricing reflects the specialized skills required for clifftop excellence.',
        categories: [
          { title: 'Romantic Sunset Dinner (2)', items: ['Chef service from Rp 3,400,000', 'Sunset timing coordination', 'Proposal coordination available', 'Champagne service included', 'Complete terrace restoration'] },
          { title: 'Celebration Dinner (4-8)', items: ['Chef service from Rp 4,800,000', 'Extended golden hour service', 'Family-style or plated options', 'Weather contingency planning', 'Photography-ready presentation'] },
          { title: 'Milestone Event (10-20)', items: ['Chef team from Rp 8,500,000', 'Full service staff', 'Multi-station setups', 'Beverage program management', 'Timeline management across sunset'] }
        ]
      },
      testimonialsSection: {
        title: 'From the Cliff Edge',
        testimonials: [
          { name: 'Now-Engaged David', quote: 'She said yes during the dessert course. The chef had hidden the ring so perfectly she didn\'t suspect until the box appeared. The sunset was on cue. She cried. I cried. The chef discreetly brought tissues and more champagne. Perfect.', event: 'Proposal dinner' },
          { name: 'The Hendersons', quote: 'Our fortieth anniversary, same cliff where we got married in 1983. The chef recreated dishes from our original reception — some from handwritten recipes we\'d saved. Time travel through taste. We wept.', event: 'Anniversary celebration' },
          { name: 'Professional Photographer', quote: 'I shoot proposal dinners for a living. This team understands angles, timing, and discretion. They position plates for my camera without my asking. They anticipate the champagne pop for my shutter. Seamless collaboration.', event: 'Photographer feedback' },
          { name: 'Solo Traveler Maria', quote: 'I came to Uluwatu after my divorce, needing something beautiful. A table for one at sunset, five courses of exceptional food, and the ocean reminding me that some things remain endless. That dinner began my healing.', event: 'Solo wellness dinner' },
          { name: 'Surf Crew Leader', quote: 'Fifteen of us, exhausted from twelve hours in the water. The chef arrived as the sun set, served protein-rich recovery meals on our villa terrace, and we ate watching replays of ourselves catching barrels. Best post-surf meal ever.', event: 'Surf trip celebration' }
        ]
      },
      sampleMenuSection: {
        title: 'Sunset-Timed Menus',
        intro: 'Each course arrives at its moment in the evening\'s progression.',
        menus: [
          { name: 'The Proposal Evening', courses: [
            { category: 'Golden Hour (5:30 PM)', items: ['Champagne with oysters on ice', 'Amuse of local tuna tartare', 'Light bites that don\'t distract'] },
            { category: 'Pink Sky (6:00 PM)', items: ['Lobster bisque with saffron cream', 'Palate cleansing intermezzo'] },
            { category: 'Sunset Peak (6:20 PM)', items: ['Butter-poached lobster tail', 'Or: Wagyu tenderloin', 'Seasonal vegetables, minimal distraction'] },
            { category: 'Purple Twilight', items: ['The Ring Course — chocolate sphere with surprise', 'More champagne following the answer'] }
          ]},
          { name: 'Surf Recovery Feast', courses: [
            { category: 'Post-Session Hydration', items: ['Coconut water service', 'Electrolyte smoothies', 'Light grazing as group gathers'] },
            { category: 'Protein Rebuilding', items: ['Grilled whole fish family-style', 'Beef satay platters', 'Tempeh and tofu for plant-based athletes'] },
            { category: 'Carb Restoration', items: ['Nasi goreng station', 'Fresh salads with peanut dressing', 'Tropical fruit finish'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Your Cliff Awaits',
        paragraphs: [
          'Tomorrow evening, the sun will set over the Indian Ocean as it has for millennia. You can watch from your villa terrace with takeaway containers, or you can experience it properly — champagne in hand, extraordinary food appearing at just the right moments, the world\'s most dramatic dining room all yours.',
          'Contact us to choreograph your Uluwatu evening. Some moments deserve perfection.'
        ]
      }
    },
    faqItems: [
      {
        question: 'I want to propose during dinner. Can you help coordinate the entire experience?',
        answer: 'This is our specialty. We handle ring concealment (recommend the dessert course), champagne timing (post-yes celebration), photographer positioning (we know the best angles), and the subtle signals that tell staff when the moment approaches. Over three hundred successful proposals — we\'ve refined this to an art.'
      },
      {
        question: 'Our villa is at the end of a narrow cliff road with no real parking. Is that a problem?',
        answer: 'Uluwatu logistics are our daily reality. We use appropriate vehicles, coordinate with villa staff for access, and plan ingredient transport in advance. Some of our finest dinners happen at villas accessible only by footpath the final hundred meters. Remoteness adds to the experience.'
      },
      {
        question: 'The weather forecast shows possible rain. Should we reschedule?',
        answer: 'Not necessarily. We always prepare indoor alternatives, bring weighted tablescaping for wind, and monitor conditions in real-time. Many Uluwatu dinners happen with dramatic weather adding atmosphere — stormy ocean views can be even more spectacular than calm ones. We discuss contingencies during planning.'
      },
      {
        question: 'Can you time the main course exactly with sunset?',
        answer: 'Precisely what we do. We track sunset times daily, account for your specific villa\'s view angle, and cook to that schedule rather than a clock. Your main course arrives as colors peak. This timing is choreographed, not improvised.'
      },
      {
        question: 'We\'re here for a surf trip — can you do casual group dinners rather than romantic fine dining?',
        answer: 'Absolutely. Uluwatu hosts serious surfers alongside romantic travelers. We create family-style recovery meals, protein-rich dishes for athletic rebuilding, and casual service that matches post-surf energy. Same beautiful setting, completely different vibe.'
      },
      {
        question: 'My partner is vegetarian. Can you still create a proposal-worthy dinner?',
        answer: 'Our vegetarian proposal dinners are equally stunning. The ring courses work with chocolate desserts regardless of the preceding menu. We create plant-based tasting menus that match the drama of the occasion without compromising dietary needs.'
      },
      {
        question: 'We want a photographer present. Do you coordinate with outside vendors?',
        answer: 'We work with professional photographers regularly. Our chefs understand angles, timing, and the subtle choreography required for good shots. We coordinate arrival times, position plates for cameras, and signal moments worth capturing. The photographer becomes part of the team.'
      }
    ]
  },
  jimbaran: {
    name: 'Jimbaran',
    slug: 'jimbaran',
    tagline: 'Jimbaran Private Chef: From the Fishing Boats to Your Table',
    description: 'The fishing fleet returns at dawn. By breakfast, your chef has chosen your dinner from the catch. By sunset, creatures that swam that morning become the finest seafood meal of your life.',
    heroDescription: 'Bali\'s legendary fish market meets culinary mastery. The ocean provides; your chef transforms. This is seafood dining as it was meant to be.',
    heroTitle: 'Jimbaran Private Chef: Where the Ocean Feeds Your Soul',
    areas: ['Jimbaran Bay Beachfront', 'Kedonganan Fish Market Zone', 'Bukit Permai Hills', 'Balangan Beach Access', 'AYANA Cliff District'],
    popularVenues: ['Four Seasons Jimbaran Bay', 'InterContinental Bali Resort', 'Belmond Jimbaran Puri', 'AYANA Resort', 'Rimba Jimbaran', 'Rock Bar area villas'],
    localInsights: 'Jimbaran Bay has supplied Bali\'s finest restaurants for generations. The Kedonganan market opens before sunrise, when the night fishing fleet returns. Local jukung boats offload catches while chefs from the island\'s best kitchens negotiate quality. Your private chef joins this ritual, selecting the same premium seafood that stocks five-star resort restaurants — then brings it directly to your villa.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.768889",
      "longitude": "115.165833"
    },
    extendedContent: {
      mainHeading: 'The Source of Bali\'s Best Seafood',
      introParagraphs: [
        'Understanding Jimbaran means understanding its mornings. At 4 AM, the bay fills with returning boats. By 5 AM, the market buzzes with wholesale buyers. By 7 AM, the premium selections disappear into resort refrigerators across the island. Your chef arrives earlier than most, building relationships with captains who save the best catches for clients who appreciate the difference.',
        'What makes Jimbaran seafood superior isn\'t mystique — it\'s geography. The bay\'s protected waters attract diverse species. The traditional fishing methods preserve quality. The short distance from catch to consumption means maximum freshness. When your dinner arrives at the table, the ocean journey might be measured in hours, not days.',
        'The famous Jimbaran beach cafes introduced the world to grilled seafood with sambal and sunset views. But those experiences serve tourists by the hundred. Your villa dinner captures the same flavors with privacy, customization, and a chef devoted entirely to your table. Same origin, elevated execution.'
      ],
      whyChooseSection: {
        title: 'The Jimbaran Advantage',
        intro: 'Seafood excellence requires specific expertise. Our Jimbaran chefs possess it.',
        benefits: [
          { title: 'Market Relationships', description: 'The best catches don\'t wait for casual buyers. Our chefs maintain relationships with captains and vendors who hold premium seafood for serious clients. This access changes what\'s possible for your dinner.' },
          { title: 'Species Knowledge', description: 'Which snapper came from cleaner waters? When is lobster at peak sweetness? Is that tuna fresh or frozen? Our chefs read fish the way sommeliers read wine.' },
          { title: 'Grilling Mastery', description: 'The iconic Jimbaran cooking style requires specific skills — coconut husk fire management, salt crust techniques, sambal timing. These methods take years to master.' },
          { title: 'Whole-Animal Approach', description: 'Nothing wastes. Fish heads become soup. Shells become stock. Scraps become crab cakes. This approach reduces cost while maximizing flavor complexity.' },
          { title: 'Sunset Timing', description: 'Jimbaran Bay faces west. Sunset dining is obligatory. We time cooking to deliver your meal as golden hour peaks over the bay.' }
        ]
      },
      chefsSection: {
        title: 'Fishermen\'s Friends, Kitchen Masters',
        intro: 'Our Jimbaran chefs maintain dual expertise: market relationships and culinary excellence.',
        paragraphs: [
          'Chef Gede\'s father fished these waters for forty years. Growing up on the boats, Gede learned species, seasons, and quality indicators before he learned to cook. Now he combines that knowledge with professional training, selecting seafood like a fisherman and preparing it like a master chef.',
          'Chef Putu worked at Four Seasons Jimbaran Bay for eight years, managing their seafood program. She knows which vendors supply which resorts, where the premium product flows, and how to intercept it before lesser buyers claim second-tier catches. Her market mornings resemble military operations.',
          'Chef Komang specializes in traditional Balinese seafood preparations — the ancestral recipes that Jimbaran families have perfected over centuries. His sambal collection includes seventeen varieties, each suited to different fish and cooking methods. He treats grilling as a craft passed through generations.'
        ],
        specializations: ['Dawn Market Procurement', 'Traditional Jimbaran Grilling', 'Sambal Artistry', 'Whole Fish Preparation', 'Lobster and Crustacean Excellence', 'Seafood Platter Choreography', 'Bay-Facing Sunset Service']
      },
      occasionsSection: {
        title: 'Seafood Feasts We\'ve Created',
        paragraphs: [
          'The thirtieth birthday where thirty guests each received a different species, prepared uniquely, as a culinary tour of Jimbaran Bay. The corporate retreat that wanted "the best seafood in Bali" and received a twelve-course tasting menu showcasing the morning\'s exceptional catches. The couple who\'d honeymooned in Jimbaran twenty years prior and wanted to recreate their beach cafe dinner with sunset, sambal, and grilled fish — but this time with privacy and champagne.',
          'Jimbaran occasions center on abundance. The stacked platters, the whole grilled fish, the buckets of prawns meant for passing around the table. Our chefs understand that here, generosity matters as much as technique. Your table should groan with seafood.'
        ]
      },
      pricingSection: {
        title: 'Exceptional Value from the Source',
        intro: 'Jimbaran\'s direct market access means remarkable quality at reasonable cost.',
        categories: [
          { title: 'Intimate Seafood Dinner (2-4)', items: ['Chef service from Rp 2,400,000', 'Includes market selection trip', 'Your choice of species and preparation', 'Traditional accompaniments', 'Complete beach-style service'] },
          { title: 'Family Seafood Feast (6-12)', items: ['Chef service from Rp 3,800,000', 'Mixed seafood platters', 'Multiple sambal varieties', 'Side dishes and rice', 'Sunset timing guaranteed'] },
          { title: 'Grand Seafood Celebration (15-30)', items: ['Chef team from Rp 6,500,000', 'Spectacular abundance', 'Full service staff', 'Grilling stations visible to guests', 'Premium lobster inclusions available'] }
        ]
      },
      testimonialsSection: {
        title: 'From Jimbaran Tables',
        testimonials: [
          { name: 'Seafood Enthusiasts from Sydney', quote: 'We own a seafood restaurant in Australia. This was the best fish we\'ve eaten in years. The chef took us to the market at 5 AM, taught us quality indicators, then grilled our selections to perfection that night. Education and feast combined.', event: 'Industry professionals\' experience' },
          { name: 'The Martinez Anniversary', quote: 'We first fell in love over a Jimbaran beach dinner twenty-five years ago. Recreating that experience in our villa — same flavors, better quality, complete privacy, our own sunset — brought happy tears. Better than the original.', event: 'Anniversary recreation' },
          { name: 'Birthday Party Host', quote: 'Twenty-two guests, one massive table, platters of grilled fish, lobster, prawns, squid everywhere. Nobody could believe the quality at the price. The chef explained we paid market rates plus his fee — no restaurant markups. Extraordinary value.', event: 'Birthday celebration' },
          { name: 'Keto Diet Traveler', quote: 'Protein and healthy fats from the ocean, prepared simply with Balinese spice. The chef created a week of keto-compliant seafood meals that never repeated and never bored. First time diet food made me excited.', event: 'Extended stay meal program' },
          { name: 'The Fishing Crew', quote: 'We spent the day surf fishing. Caught nothing worth keeping. The chef met us with our dinner already prepared — the fish we failed to catch, grilled perfectly. He suggested we leave the fishing to professionals next time.', event: 'Fishing trip consolation dinner' }
        ]
      },
      sampleMenuSection: {
        title: 'Jimbaran Seafood Possibilities',
        intro: 'Menus depend on the day\'s catch. These examples show our approach.',
        menus: [
          { name: 'Traditional Jimbaran Beach Feast', courses: [
            { category: 'Market Selection Display', items: ['Chef presents the day\'s catches', 'You choose your fish and preparations', 'Grilling begins as sun descends'] },
            { category: 'Accompaniments Arrive', items: ['Steamed rice and coconut rice', 'Morning glory with garlic', 'Cucumber and tomato salad', 'Sambal trio: matah, plecing, sweet soy'] },
            { category: 'Grilled Parade', items: ['Whole snapper with sambal topping', 'Jumbo prawns split and charred', 'Squid with lime and chili', 'Lobster tail if available'] },
            { category: 'Sweet Finish', items: ['Fresh tropical fruit platter', 'Black rice pudding', 'Young coconut to drink'] }
          ]},
          { name: 'Elevated Seafood Tasting', courses: [
            { category: 'Ocean Opening', items: ['Oysters with finger lime mignonette', 'Tuna tartare with avocado', 'Prawn ceviche with coconut'] },
            { category: 'Soup Course', items: ['Lobster bisque with sambal oil'] },
            { category: 'Grilled Main', items: ['Market fish with XO sauce', 'Scallops with garlic butter', 'Crab with Balinese spice'] },
            { category: 'Finale', items: ['Panna cotta with passion fruit', 'Petit fours'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'The Bay Provides',
        paragraphs: [
          'Tonight\'s dinner swam past your villa this morning. The fishing fleet that feeds Bali\'s finest restaurants also feeds your table — when you have the right chef and the right connections. This isn\'t seafood shipped from distant waters; this is local, sustainable, exceptional.',
          'Contact us to arrange your Jimbaran experience. Tell us your preferences, let us handle the market, and prepare for the freshest seafood of your life.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Can I go to the fish market with the chef to select our dinner?',
        answer: 'One of our most popular offerings. We arrange 5-6 AM market visits where your chef explains species, demonstrates quality selection, and lets you choose your own dinner. Return to your villa for coffee while the chef prepares your selections for evening. Educational, memorable, and you eat exactly what you picked.'
      },
      {
        question: 'How do prices compare to Jimbaran beach restaurants?',
        answer: 'You\'ll often pay less while eating better. Beach restaurants mark up seafood significantly. We charge market prices for ingredients plus chef fees. For the same quality fish, you\'ll typically pay 30-50% less — with privacy, customization, and service in your own villa. The value proposition is compelling.'
      },
      {
        question: 'Can you handle seafood allergies in a predominantly seafood meal?',
        answer: 'Absolutely. We serve guests who love seafood dining while one person has shellfish allergy. The allergic guest receives chicken, beef, or vegetarian dishes prepared on separate equipment with zero cross-contamination. Everyone experiences Jimbaran hospitality together.'
      },
      {
        question: 'What happens if the market doesn\'t have what we want?',
        answer: 'This rarely happens — the market carries remarkable variety. But if a specific species isn\'t available (sometimes lobster runs short), your chef has alternatives prepared. We confirm availability before finalizing menus, and weather affecting catches gets communicated in advance.'
      },
      {
        question: 'We want the beach cafe atmosphere in our villa. Can you create that vibe?',
        answer: 'The full Jimbaran experience: charcoal grilling visible, fish laid out on ice display, communal platters arriving continuously, multiple sambal varieties, and the informal atmosphere of passing dishes around the table. We recreate the beach cafe energy with villa comfort and privacy.'
      },
      {
        question: 'How much seafood should we order for our group?',
        answer: 'We guide you based on group size and appetites. As a rough guide: one whole medium fish per person, plus shared platters of prawns and squid, plus any special-request lobster or crab. For groups, variety matters more than volume. Your chef prevents both waste and shortage.'
      },
      {
        question: 'Our villa is near AYANA on the cliffs. Is fresh seafood available there too?',
        answer: 'AYANA-area villas receive the same market access as beachfront properties. The drive from Kedonganan market is twenty minutes; fish quality doesn\'t degrade in that time. Cliff-side dining offers dramatic views with identical seafood freshness. Many guests prefer the elevated perspective.'
      }
    ]
  },
  kuta: {
    name: 'Kuta',
    slug: 'kuta',
    tagline: 'Kuta Private Chef: Where Every Bali Adventure Begins',
    description: 'Ten minutes from the airport, your Bali story starts here. Surfboards lean against walls, jet lag fades over excellent food, and tomorrow\'s adventure plans take shape over dinner in your accommodation.',
    heroDescription: 'First night in Bali after a long flight. Last night before heading home. The reunions, the farewells, the surf celebrations. Kuta hosts the bookends of every great Bali trip.',
    heroTitle: 'Kuta Private Chef: Fuel for Your Bali Adventure',
    areas: ['Kuta Beach', 'Tuban Airport Zone', 'Kartika Plaza', 'Discovery Shopping District', 'Poppies Lane Area'],
    popularVenues: ['Hard Rock Hotel Bali', 'Sheraton Bali Kuta Resort', 'The Anvaya Beach Resort', 'Bali Dynasty Resort', 'Discovery Kartika Plaza'],
    localInsights: 'Kuta operates on arrival and departure time. Red-eye flights land, bleary travelers reach their hotels, and the last thing anyone wants is to navigate unfamiliar streets for dinner. Our welcome meals arrive when you need them — warm, comforting, and exactly what jet lag requires. The same applies for farewell gatherings: one final Bali feast before the airport run.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.718206",
      "longitude": "115.169506"
    },
    extendedContent: {
      mainHeading: 'The Gateway to Bali, Fed Properly',
      introParagraphs: [
        'Your flight lands at 11 PM. Immigration takes forever. The driver finds you eventually. By midnight, you\'re at your hotel, exhausted but hungry, with nothing open that looks trustworthy. This is when you wish you\'d arranged a private chef — dinner waiting at your accommodation, ready to eat the moment you arrive.',
        'Kuta serves a practical purpose: it\'s closest to the airport, perfect for first and last nights. But practical doesn\'t mean boring. The energy here is different from anywhere else in Bali — surf culture collision with Balinese hospitality, international travelers meeting over shared waves, celebrations that start early and run loud.',
        'Your private chef adapts to this rhythm. Late-night arrivals get warming meals ready when you walk in. Surf group dinners cater to appetites built by hours in the water. Farewell parties pack every Bali flavor into one memorable evening. We\'ve been feeding Kuta travelers since before most boutique hotels in other areas existed.'
      ],
      whyChooseSection: {
        title: 'Built for Travelers in Motion',
        intro: 'Kuta guests have specific needs that differ from other Bali destinations.',
        benefits: [
          { title: 'Flight-Synced Timing', description: 'We coordinate with your arrival time. Land at midnight, eat at 12:30 AM. No restaurant does this. We do.' },
          { title: 'Jet Lag Recovery Menus', description: 'Light proteins, hydrating vegetables, gentle spices. First-night menus designed to reset rather than overwhelm.' },
          { title: 'Surf Recovery Fuel', description: 'Kuta is still a surf town. Post-session meals packed with protein, carbs, and electrolytes for athletes who\'ve earned their hunger.' },
          { title: 'Group Management', description: 'Surf crews, school groups, bachelor parties. We handle large gatherings with diverse dietary needs and appetites.' },
          { title: 'Last-Night Excellence', description: 'Your final Bali meal before the airport. Make it count with a curated experience featuring your favorite discoveries from the trip.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Know the Kuta Rhythm',
        intro: 'Our Kuta team understands that timing and adaptability matter more than pretension here.',
        paragraphs: [
          'Chef Wayan has worked Kuta since before the boutique hotel boom in Seminyak drew the crowds north. He remembers when this was Bali\'s only tourist beach, and he still serves with the energy of those earlier, simpler days. His specialty is feeding groups efficiently without sacrificing flavor.',
          'Chef Linda came from the Hard Rock Hotel kitchen after twelve years of serving international guests at all hours. She understands jet-lagged appetites, the specific comfort foods that different nationalities crave, and the logistics of hotel-based cooking when villa kitchens aren\'t available.',
          'Chef Kadek specializes in surf-crew dining — the hearty, protein-rich meals that follow dawn patrol sessions. He\'s fed professional surfers and weekend warriors alike, understanding that after four hours in the water, presentation matters less than portion size and flavor.'
        ],
        specializations: ['Late-Night Arrival Service', 'Jet Lag Recovery Cuisine', 'Group and Crew Feeding', 'Indonesian Comfort Food', 'International Crowd-Pleasers', 'Quick-Turnaround Farewell Dinners', 'Hotel Room Service Alternatives']
      },
      occasionsSection: {
        title: 'Kuta Moments We\'ve Fed',
        paragraphs: [
          'The surf group of sixteen who landed exhausted at midnight and found satay, rice, and cold Bintang waiting at their hotel. The bachelor party that needed serious food to balance serious drinking. The family whose last Bali night deserved better than airport departure lounge options — they ate nasi goreng and rendang while the kids swam one final time.',
          'Kuta celebrations tend toward the boisterous. The energy is younger, louder, more spontaneous. Our chefs match this vibe, delivering food that encourages sharing, laughter, and the kind of communal dining that creates trip memories.'
        ]
      },
      pricingSection: {
        title: 'Traveler-Friendly Value',
        intro: 'Kuta pricing reflects the practical nature of gateway dining.',
        categories: [
          { title: 'Arrival Recovery Dinner (2-4)', items: ['Chef service from Rp 1,800,000', 'Pre-scheduled for your landing time', 'Jet-lag-friendly menu options', 'Ready the moment you arrive', 'Cleanup before you sleep'] },
          { title: 'Surf Crew Feast (6-12)', items: ['Chef service from Rp 3,200,000', 'Protein-packed recovery meals', 'Family-style abundance', 'Beer-friendly menus available', 'Quick setup and service'] },
          { title: 'Farewell Celebration (8-20)', items: ['Chef service from Rp 4,400,000', 'Greatest-hits Bali menu', 'Timed to departure schedules', 'Packaged leftovers for the flight', 'Complete venue restoration'] }
        ]
      },
      testimonialsSection: {
        title: 'From Kuta Travelers',
        testimonials: [
          { name: 'Exhausted Arrival Family', quote: 'Flight delayed, kids melting down, immigration took ninety minutes. We arrived at the hotel expecting misery. The chef had adjusted timing, dinner was warm and waiting, and the kids ate themselves into immediate sleep. Trip saved before it started.', event: 'Midnight arrival dinner' },
          { name: 'Surf Crew Captain', quote: 'Fourteen of us, different dietary restrictions, massive appetites after a week of waves. The chef fed us family-style for our last night — enough food that even our biggest eater tapped out. Legends.', event: 'Surf trip finale' },
          { name: 'Solo Business Traveler', quote: 'Quick Bali stopover, didn\'t want to leave my room after the long flight. The chef brought dinner to my hotel suite — proper Indonesian food instead of room service mediocrity. Worth every rupiah.', event: 'Business trip comfort' },
          { name: 'The Fletcher Wedding Party', quote: 'Twenty-three guests, last night before the Ubud wedding. The chef created a rehearsal dinner in our Kuta hotel meeting room that rivaled what we\'d planned for the actual reception. Incredible start to the weekend.', event: 'Wedding welcome dinner' },
          { name: 'Return Travelers', quote: 'Every trip starts and ends in Kuta. Now we book the same chef for both arrival and farewell. She remembers us, knows our preferences, and the meals bracket our trip perfectly.', event: 'Repeat client relationship' }
        ]
      },
      sampleMenuSection: {
        title: 'Kuta Classics',
        intro: 'Menus designed for arrivals, departures, and everything between.',
        menus: [
          { name: 'Jet Lag Recovery Dinner', courses: [
            { category: 'Settling In', items: ['Coconut water and fresh juice', 'Light soup with ginger', 'Something familiar to ground you'] },
            { category: 'Gentle Mains', items: ['Steamed fish with mild herbs', 'Chicken satay with peanut sauce', 'Plain rice and easy vegetables', 'Nothing too aggressive for tired stomachs'] },
            { category: 'Sleep Preparation', items: ['Chamomile or ginger tea', 'Fresh fruit', 'Light sweetness if desired'] }
          ]},
          { name: 'Surf Crew Recovery Feast', courses: [
            { category: 'Immediate Fuel', items: ['Satay station — chicken, beef, lamb', 'Nasi goreng and mie goreng', 'Spring rolls and dumplings'] },
            { category: 'Protein Loading', items: ['Grilled fish fresh from morning market', 'BBQ ribs for the hungry', 'Tempeh and tofu for plant-based athletes'] },
            { category: 'Carb Restoration', items: ['Rice three ways', 'Vegetable sides family-style', 'Sambal selection for those who dare'] },
            { category: 'Sweet Finish', items: ['Pisang goreng with ice cream', 'Tropical fruit mountain'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Start and End Right',
        paragraphs: [
          'Your Bali trip deserves proper bookends. Not airport sandwiches and hotel vending machines, but real food — the kind that welcomes you to the island on arrival and sends you home with perfect flavor memories at departure.',
          'Tell us your flight times. We\'ll be ready when you are.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Our flight lands at 1 AM. Is that too late for a private chef?',
        answer: 'Not at all. We specialize in late-arrival service. Give us your expected landing time and accommodation details; we\'ll have dinner ready and waiting when you walk in. Jet-lagged travelers are our specialty — light, comforting meals that help rather than overwhelm.'
      },
      {
        question: 'We\'re staying in a hotel, not a villa. Can you still serve us?',
        answer: 'Yes! Many Kuta guests stay in hotels. We work with suites that have kitchenettes, coordinate with hotel management for larger gatherings, and bring portable equipment when needed. Some hotels let us use their event spaces. We assess logistics during booking.'
      },
      {
        question: 'Can you feed a group of surfers with enormous appetites?',
        answer: 'Surf crews are our favorites. We understand post-session hunger — the combination of saltwater, sun, and physical exertion creates serious appetites. Our portions are generous, our menus are protein-heavy, and we\'ve never left a surf crew hungry. Challenge accepted.'
      },
      {
        question: 'We want a farewell dinner the night before our early morning flight. What timing works?',
        answer: 'We typically serve farewell dinners at 6-8 PM, leaving guests time to pack and rest before early departures. We can also prepare takeaway containers of Balinese snacks for the flight home. Your last Bali meal doesn\'t have to be airport food.'
      },
      {
        question: 'Is Kuta really the best place to stay in Bali?',
        answer: 'For first and last nights, absolutely. The airport proximity is unbeatable. For mid-trip, many travelers explore Seminyak, Canggu, or Ubud. But Kuta\'s convenience for arrivals and departures makes it the smart logistical choice — and we make sure the food matches the convenience.'
      },
      {
        question: 'We\'re a large wedding party staying across multiple Kuta hotels. Can you coordinate a group dinner?',
        answer: 'Yes! We regularly serve wedding welcome dinners and rehearsal gatherings with guests spread across accommodations. We coordinate venue, timing, and service to bring everyone together. Large group logistics are our strength in Kuta\'s hotel-heavy landscape.'
      }
    ]
  },
  legian: {
    name: 'Legian',
    slug: 'legian',
    tagline: 'Legian Private Chef: The Sweet Spot Between Chaos and Calm',
    description: 'Neither as hectic as Kuta nor as curated as Seminyak. Legian occupies the comfortable middle — close enough to everything, quiet enough to breathe, and perfectly suited for genuinely good dining.',
    heroDescription: 'Sunset colors the sky behind Double Six beach. The day\'s energy settles. Dinner arrives in your villa, casual enough for sandy feet yet sophisticated enough to celebrate.',
    heroTitle: 'Legian Private Chef: Relaxed Elegance for Beach Lovers',
    areas: ['Double Six Beach', 'Padma Resort Strip', 'Jalan Werkudara', 'Nakula Corridor', 'Legian-Seminyak Border'],
    popularVenues: ['Padma Resort Legian', 'Double-Six Luxury Hotel', 'Pullman Bali Legian Beach', 'The Jayakarta Bali', 'Legian beachside villas'],
    localInsights: 'Legian guests discovered the secret: this stretch of beach rivals Seminyak\'s beauty without the crowds and scene pressure. Sunset cocktails at Double Six. Morning walks on quieter sand. Evenings that don\'t require reservations three weeks in advance. Your private chef enhances this balance — excellent food without unnecessary formality.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.699389",
      "longitude": "115.168167"
    },
    extendedContent: {
      mainHeading: 'Where Quality Meets Genuine Relaxation',
      introParagraphs: [
        'Seminyak intimidates some travelers — the scene, the prices, the requirement to look polished. Kuta overwhelms others — the crowds, the noise, the relentless energy. Legian found the middle path. The same Indian Ocean. Similar sunsets. Better breathing room.',
        'Your private chef fits this philosophy. The food is excellent — no compromise there. But the service is warmer, more flexible. We cook what you want, when you want, without pretense. Come to the table barefoot. Eat in your swimsuit if you prefer. The formality serves you, not the other way around.',
        'Double Six beach holds particular magic at sunset. The sky performs its nightly show while families, couples, and friends gather on the sand. Your villa dinner can time with this beauty — appetizers as colors peak, mains as twilight settles, dessert under emerging stars. Legian makes this easy.'
      ],
      whyChooseSection: {
        title: 'The Legian Approach',
        intro: 'Our Legian service matches the neighborhood\'s easy sophistication.',
        benefits: [
          { title: 'Sunset Synchronization', description: 'Double Six sunsets are legendary. We time service so you\'re eating while the sky paints itself spectacular.' },
          { title: 'Beach-to-Table Flow', description: 'Spend the afternoon on the sand. Shower, and dinner appears. The transition from beach day to evening meal requires no effort.' },
          { title: 'Flexible Formality', description: 'Want white linens and wine glasses? Done. Prefer paper plates by the pool? Also done. Your comfort drives our presentation.' },
          { title: 'Group-Size Adaptability', description: 'Legian sees reunions, birthdays, and multi-generation gatherings. We scale from romantic pairs to twenty-person parties.' },
          { title: 'Value Positioning', description: 'Excellent quality at prices that reflect Legian\'s position between budget and luxury. Premium ingredients, reasonable investment.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Appreciate Balance',
        intro: 'Our Legian team chose this neighborhood for a reason — they value quality without pretense.',
        paragraphs: [
          'Chef Made grew up surfing Legian\'s breaks before the hotels arrived. He watched the neighborhood evolve from fishing village to tourist destination, and he cooks with that history in mind — traditional flavors adapted for international palates, served with genuine Balinese warmth.',
          'Chef Sarah came from Australia, fell in love with Bali, and built a career serving fellow expats and travelers. She understands exactly what Western palates crave while respecting Indonesian ingredients. Her fusion menus bridge both worlds comfortably.',
          'Chef Nyoman specializes in what he calls "beach food" — the casual, shareable, flavor-forward dishes that taste best after a day in the water. His satay is legendary, his grilled fish impeccable, and his ability to feed groups efficiently is unmatched.'
        ],
        specializations: ['Sunset-Timed Service', 'Beach Casual Excellence', 'Group and Party Catering', 'Indonesian-Western Fusion', 'Shareable Feast Creation', 'Flexible Formality Dining', 'Birthday and Celebration Specialists']
      },
      occasionsSection: {
        title: 'Legian Celebrations',
        paragraphs: [
          'The fortieth birthday where nobody wanted a fancy restaurant — just friends, a villa pool, sunset views, and food worth talking about. The family reunion where generations gathered from four countries, sharing dishes that accommodated everyone from the picky toddler to the adventurous grandmother.',
          'Legian celebrations feel authentic. The pressure to perform drops away. People actually enjoy themselves rather than worrying about appearances. Our chefs understand and encourage this atmosphere.'
        ]
      },
      pricingSection: {
        title: 'Quality Without Inflation',
        intro: 'Legian pricing reflects excellent value — premium service without Seminyak premiums.',
        categories: [
          { title: 'Couple\'s Sunset Dinner', items: ['Chef service from Rp 2,000,000', 'Timed to golden hour', 'Multi-course romantic flow', 'Complete privacy', 'Beach-view setup if villa permits'] },
          { title: 'Group Gathering (6-12)', items: ['Chef service from Rp 3,400,000', 'Family-style abundance', 'Multiple dietary accommodations', 'Casual or polished presentation', 'Pool or terrace service'] },
          { title: 'Birthday Celebration (12-25)', items: ['Chef service from Rp 5,200,000', 'Full party catering', 'Dietary variety across group', 'Service staff included', 'Cake coordination available'] }
        ]
      },
      testimonialsSection: {
        title: 'Legian Stories',
        testimonials: [
          { name: 'The Birthday Crew', quote: 'Sixteen friends, one villa, zero desire to make dinner reservations for that many people. The chef set up by the pool, served family-style, and everyone ate exactly what they wanted. Best birthday I\'ve ever hosted — zero stress.', event: 'Group birthday celebration' },
          { name: 'Sunset Romantics', quote: 'We chose Legian specifically for the sunsets but weren\'t sure about food options nearby. The private chef solved everything. We ate on our balcony as the sky changed colors. Perfect evening without leaving the villa.', event: 'Anniversary dinner' },
          { name: 'Multi-Gen Vacation', quote: 'My parents, my kids, my siblings — dietary needs ranged from \"I only eat nuggets\" to \"strictly vegan.\" The chef somehow made everyone happy with the same meal. Magic.', event: 'Family gathering' },
          { name: 'Surf Trip Organizer', quote: 'After years of fighting over restaurant choices with the crew, I hired a private chef for our last night. Food came to us, timing was perfect, and nobody had to drive anywhere. This is now standard procedure for all future trips.', event: 'Surf group farewell' },
          { name: 'Return Visitor', quote: 'Third time staying Legian, third time booking the same chef. She knows our preferences, suggests new dishes within our comfort zone, and the quality never wavers. Why would I eat anywhere else?', event: 'Repeat client' }
        ]
      },
      sampleMenuSection: {
        title: 'Legian Favorites',
        intro: 'Menus that match the neighborhood — quality without ceremony.',
        menus: [
          { name: 'Sunset Beach Feast', courses: [
            { category: 'Golden Hour', items: ['Chilled drinks on arrival', 'Satay and dipping sauces', 'Fresh spring rolls', 'Things to pick at while watching the sky'] },
            { category: 'As Sun Sets', items: ['Grilled fish with sambal trio', 'Coconut rice', 'Seasonal vegetables', 'Tofu for non-fish eaters'] },
            { category: 'Twilight Sweet', items: ['Tropical fruit plate', 'Pisang goreng with chocolate', 'Coffee or tea'] }
          ]},
          { name: 'Group Party Spread', courses: [
            { category: 'Grazing Stations', items: ['Satay station with peanut sauce', 'Fresh roll wrapping station', 'Dips and crackers for mingling'] },
            { category: 'Main Event', items: ['Family-style platters of protein', 'Rice varieties', 'Vegetable selection', 'Sambal levels for every tolerance'] },
            { category: 'Sweet Finish', items: ['Dessert grazing', 'Coffee and tea station', 'Fresh fruit always available'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'The Legian Balance',
        paragraphs: [
          'Some evenings call for fancy restaurants. Other evenings call for staying exactly where you are, watching the sunset from your villa, and having excellent food appear without effort. Legian excels at the second option.',
          'Tell us what you\'re celebrating — or not celebrating. We\'ll make it memorable.'
        ]
      }
    },
    faqItems: [
      {
        question: 'How does Legian compare to Seminyak for private dining?',
        answer: 'Same quality, different atmosphere. Seminyak carries a scene pressure that Legian lacks. You can be more casual here, more yourself. The sunset views are equally spectacular. Our chefs deliver identical excellence with a more relaxed vibe.'
      },
      {
        question: 'We want to eat by the pool as the sun sets. Is timing complicated?',
        answer: 'Not at all — this is our most requested Legian setup. Sunset times are predictable; we cook to that schedule. Appetizers arrive during golden hour, mains as colors peak, dessert as twilight settles. We\'ve perfected the choreography.'
      },
      {
        question: 'Our group has diverse dietary needs. Can you really accommodate everyone?',
        answer: 'Yes! Legian groups often include vegetarians, meat-lovers, picky children, and adventurous adults at the same table. We design menus with enough variety that everyone finds favorites. Same base ingredients, different preparations. Nobody feels like an afterthought.'
      },
      {
        question: 'We\'re celebrating a birthday but don\'t want formal service. Is that okay?',
        answer: 'Absolutely — this matches Legian\'s character. Paper plates by the pool if you prefer. Barefoot service if that\'s your vibe. The food is excellent regardless of formality level. Your comfort sets the tone; we adapt.'
      },
      {
        question: 'Can you set up on Double Six beach for a dinner?',
        answer: 'Beach dinners require permits and coordination with local authorities, which we can explore for special occasions. More commonly, we serve in beachfront villas with ocean views — all the atmosphere, less logistical complexity. We discuss options during booking.'
      }
    ]
  },
  kerobokan: {
    name: 'Kerobokan',
    slug: 'kerobokan',
    tagline: 'Kerobokan Private Chef: Home Cooking for Those Who Live Here',
    description: 'Behind unmarked gates and down dusty lanes, expats and long-stayers have built real lives. This is Bali\'s neighborhood for people who actually live here — and need real food for real life.',
    heroDescription: 'Not tourist dining. Home cooking. Weekly meal prep. The chef who knows your kids\'s picky preferences and your dietary restrictions. Kerobokan is where vacation becomes life.',
    heroTitle: 'Kerobokan Private Chef: Your Personal Kitchen Team',
    areas: ['Kerobokan Kelod', 'Kerobokan Kaja', 'Umalas Village', 'Banjar Anyar', 'Semer Enclave'],
    popularVenues: ['Villa Air Bali', 'The Samaya Kerobokan', 'Umalas retreat villas', 'Long-term rental compounds', 'Expat residential estates'],
    localInsights: 'Kerobokan operates differently from tourist Bali. The unmarked villas down narrow lanes house families who need weekly groceries, working professionals who need meal prep, and retirees who want home-cooked dinner on Tuesday. Our service adapts to this rhythm — recurring schedules, consistent quality, chefs who become part of your household.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.667333",
      "longitude": "115.167639"
    },
    extendedContent: {
      mainHeading: 'When Bali Becomes Home',
      introParagraphs: [
        'Three months into your Bali stay, the novelty of restaurant dining fades. You want to eat at home. You need someone who shops for groceries that match your preferences, preps meals you\'ll actually finish, and shows up on schedule without supervision. Welcome to Kerobokan — where we operate as your personal kitchen staff.',
        'Expats chose this neighborhood because it feels like actually living in Bali rather than visiting. The villas are hidden, the lanes are quiet, and the community is genuine. Your private chef becomes part of this ecosystem — someone your neighbors recommend, someone who knows which market has the best produce on which days.',
        'The needs here differ from vacation dining. Meal prep for the week ahead. Dinners ready when the kids get home from school. Healthy lunches portioned for gym-goers. Dinner parties when friends visit from Singapore or Sydney. We handle all of it.'
      ],
      whyChooseSection: {
        title: 'Built for Residents',
        intro: 'Our Kerobokan service operates on residential rather than vacation logic.',
        benefits: [
          { title: 'Recurring Schedules', description: 'Same chef, same days, same reliable quality. Your household runs on predictable food service without constant rebooking.' },
          { title: 'Meal Prep Mastery', description: 'Five days of lunches prepared in one Sunday session. Portioned, labeled, ready for the week. Your refrigerator works for you.' },
          { title: 'Dietary Tracking', description: 'We remember that Dad can\'t eat gluten, the teenager won\'t eat fish, and Mom counts macros. No repetitive explaining.' },
          { title: 'Budget Consistency', description: 'Monthly arrangements with predictable costs. No vacation-pricing surprises. Real household budgeting.' },
          { title: 'Shopping Delegation', description: 'Your chef handles market runs. Quality ingredients, fair prices, and you never navigate crowded markets yourself.' }
        ]
      },
      chefsSection: {
        title: 'Staff You Actually Know',
        intro: 'Our Kerobokan chefs become household names — part of your weekly routine rather than one-time visitors.',
        paragraphs: [
          'Chef Ketut has served the same six Kerobokan families for four years. She knows their children\'s birthdays, their dietary restrictions, and their preferred spice levels. These households don\'t think of her as a service provider — she\'s Ketut who makes Wednesday dinner.',
          'Chef Budi specializes in healthy meal prep for fitness-focused expats. He understands macros, sources quality proteins, and creates variety within nutritional constraints. His Sunday sessions fill refrigerators with fuel that makes Monday-Friday easier.',
          'Chef Dewi serves families with young children. She knows which vegetables can be hidden in sauces, which proteins kids actually eat, and how to make dinner pleasant rather than a battle. Parents rely on her to reduce mealtime stress.'
        ],
        specializations: ['Weekly Recurring Service', 'Healthy Meal Prep', 'Family-Friendly Daily Cooking', 'Dietary Restriction Management', 'Market Shopping Delegation', 'Dinner Party Hosting', 'Long-Term Relationship Building']
      },
      occasionsSection: {
        title: 'Kerobokan Life',
        paragraphs: [
          'The working-from-home consultant who needs lunch ready at noon, dinner at seven, and nothing to think about in between. The retired couple who want home-cooked comfort without cooking themselves. The young family managing toddler feeding schedules alongside adult meals.',
          'This isn\'t vacation dining — it\'s life support. Your chef becomes part of how your household functions, as essential as the housekeeper or the driver. Kerobokan residents understand this investment in quality of life.'
        ]
      },
      pricingSection: {
        title: 'Household Economics',
        intro: 'Kerobokan pricing rewards commitment — recurring arrangements offer the best value.',
        categories: [
          { title: 'Weekly Meal Prep', items: ['From Rp 1,400,000 per session', 'Includes shopping and ingredient costs', 'Five days of meals prepared', 'Customized to your nutrition goals', 'Same-day-each-week scheduling'] },
          { title: 'Regular Dinner Service', items: ['From Rp 1,800,000 per dinner', 'Scheduled days each week', 'Chef arrives, cooks, cleans, departs', 'Dietary consistency maintained', 'Flexible menu within preferences'] },
          { title: 'Full Household Package', items: ['Custom monthly pricing', 'Breakfast, lunch, dinner coverage', 'Shopping and kitchen management', 'Consistent chef assignment', 'Household integration'] }
        ]
      },
      testimonialsSection: {
        title: 'From Kerobokan Households',
        testimonials: [
          { name: 'Remote Worker Marcus', quote: 'I work Sydney hours from Bali. The last thing I need is grocery shopping and cooking stress. My chef comes twice a week, fills the fridge, and I eat well without thinking about it. Lifesaver.', event: 'Ongoing meal prep client' },
          { name: 'The Patterson Family', quote: 'Three kids, different eating phases, and two parents too tired to cook. Chef Dewi comes Monday through Friday. The kids actually eat. We actually relax at dinner. Worth every rupiah.', event: 'Full-time family service' },
          { name: 'Fitness-Focused Couple', quote: 'We track macros religiously. Chef Budi preps our week\'s meals every Sunday — perfect portions, accurate nutrition, zero temptation to order junk. Our physique coach thinks we meal prep ourselves.', event: 'Athletic nutrition program' },
          { name: 'Retired Expats', quote: 'We didn\'t move to Bali to spend our days cooking. Same chef every Wednesday and Saturday. She knows what we like, surprises us with new dishes occasionally, and we eat better than we ever cooked ourselves.', event: 'Semi-weekly dinner service' },
          { name: 'Dinner Party Regular', quote: 'Every month, friends gather at our Kerobokan villa. Same chef handles every party. She knows our friends\' preferences by now. Setting up these dinners takes one message, not hours of planning.', event: 'Monthly entertaining' }
        ]
      },
      sampleMenuSection: {
        title: 'Kerobokan Weekly Realities',
        intro: 'What recurring service actually looks like.',
        menus: [
          { name: 'Healthy Week Prep', courses: [
            { category: 'Protein Prep', items: ['Grilled chicken portions x10', 'Beef meatballs x10', 'Fish fillets portioned and marinated', 'Tofu/tempeh for plant-based days'] },
            { category: 'Carb Prep', items: ['Brown rice portioned', 'Roasted sweet potatoes', 'Quinoa ready to reheat', 'Rice paper rolls for light days'] },
            { category: 'Veg Prep', items: ['Roasted vegetable mix', 'Fresh salad components separated', 'Stir-fry vegetables blanched', 'Soup base for easy meals'] },
            { category: 'Sauces and Extras', items: ['Peanut sauce', 'Tahini dressing', 'Homemade sambal', 'Portion labels with dates'] }
          ]},
          { name: 'Family Dinner Service', courses: [
            { category: 'Kids Eat First', items: ['Pasta with hidden-veggie sauce', 'Chicken strips they\'ll actually finish', 'Easy vegetables without battle'] },
            { category: 'Adult Dinner', items: ['Proper meal for grown-up tastes', 'Wine-worthy if you\'re opening a bottle', 'Something the kids won\'t steal off your plate'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Life Support, Not Vacation Service',
        paragraphs: [
          'Kerobokan residents chose Bali for the lifestyle. That lifestyle requires support — people who help your household run smoothly. Your private chef isn\'t a luxury; they\'re infrastructure.',
          'Tell us what your household needs. We\'ll become part of how it works.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Can the same chef come every week on the same days?',
        answer: 'Yes — this is how most Kerobokan arrangements work. You\'ll have a consistent chef who learns your household, knows your preferences, and becomes part of your routine. We prioritize schedule stability for regular clients.'
      },
      {
        question: 'We need meal prep for specific macros. Can your chefs handle nutrition tracking?',
        answer: 'Absolutely. Several of our chefs specialize in athletic nutrition and macro-counted meal prep. Share your targets; they\'ll portion accordingly. Some clients provide apps with their requirements, and the chef logs everything.'
      },
      {
        question: 'How does billing work for recurring service?',
        answer: 'Most Kerobokan clients pay monthly in advance at a discounted rate. This simplifies budgeting and guarantees chef availability. We can also bill per session if you prefer flexibility, though committed schedules receive better pricing.'
      },
      {
        question: 'Our dietary needs are complex — multiple restrictions across family members. Is that manageable?',
        answer: 'This is exactly what Kerobokan service handles well. Your chef creates one shopping list that accommodates everyone, then prepares variations from shared base ingredients. Gluten-free kid, vegetarian teen, keto parent — all from the same kitchen session.'
      },
      {
        question: 'We sometimes have guests staying. Can the chef scale up temporarily?',
        answer: 'Of course. Give us a few days\' notice for guest periods, and your regular chef adjusts quantities and menu scope. When guests leave, service returns to normal. Flexibility within consistency.'
      },
      {
        question: 'Does the chef also handle grocery shopping?',
        answer: 'Yes — this is standard for Kerobokan service. Your chef knows the best markets for different ingredients, shops before cooking sessions, and handles all procurement. You provide budget guidance; they manage execution.'
      }
    ]
  },
  petitenget: {
    name: 'Petitenget',
    slug: 'petitenget',
    tagline: 'Petitenget Private Chef: Restaurant District Excellence, Villa Privacy',
    description: 'Bali\'s most celebrated restaurant strip sits outside your door. But tonight, the best meal happens inside your villa — the same caliber chef, zero reservation hassle, complete privacy.',
    heroDescription: 'Sarong, Merah Putih, and Métis set the standard. Your private dinner matches it. Petitenget excellence without leaving your accommodation.',
    heroTitle: 'Petitenget Private Chef: World-Class Dining, Villa Intimacy',
    areas: ['Jalan Petitenget', 'Batubelig Beachfront', 'Kayu Aya Golden Mile', 'Temple Quarter', 'Oberoi Heritage Zone'],
    popularVenues: ['Katamama Hotel', 'Potato Head Suites', 'Luna2 Private Hotel', 'The Legian Seminyak', 'Petitenget design villas'],
    localInsights: 'Petitenget restaurant reservations book weeks ahead. The best tables require connections. The scene can overwhelm. Your villa offers an alternative: the same caliber chefs who trained in these acclaimed kitchens, cooking exclusively for you, at your pace, in your space. This is Petitenget dining without the performance.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.678222",
      "longitude": "115.157083"
    },
    extendedContent: {
      mainHeading: 'Why Fight for Reservations?',
      introParagraphs: [
        'Petitenget defines Bali\'s restaurant scene. The strip between Seminyak and Batubelig concentrates more acclaimed kitchens per kilometer than anywhere else on the island. Sarong, Merah Putih, Métis, Mejekawi — names that food critics reference and travelers plan trips around.',
        'But here\'s what nobody tells you: the best meal of your Petitenget stay might happen in your villa. The same chef training. The same caliber ingredients. The same sophisticated techniques. Minus the crowd noise, the service hurry, the need to look polished, and the impossibility of getting exactly what you want.',
        'Our Petitenget chefs have walked out of those famous kitchens into private service. They bring institutional excellence to intimate settings. The creativity that earned restaurant acclaim now focuses entirely on your table.'
      ],
      whyChooseSection: {
        title: 'Restaurant Quality, Villa Conditions',
        intro: 'Everything Petitenget\'s restaurants offer, delivered to your space.',
        benefits: [
          { title: 'Same Talent Pool', description: 'Our chefs trained at the strip\'s acclaimed restaurants. They know the techniques, the plating standards, and the flavor profiles that made Petitenget famous.' },
          { title: 'No Reservation Battle', description: 'Peak season means weeks-ahead bookings for top restaurants. Your villa dinner books with a message.' },
          { title: 'Complete Customization', description: 'Restaurants execute their menu. Your chef executes yours. Every dietary need, every preference, every creative request.' },
          { title: 'Intimate Atmosphere', description: 'No noise competition. No neighboring tables. Just you, your guests, and food worthy of attention.' },
          { title: 'Timeline Control', description: 'Restaurants time courses for table turnover. Your dinner moves at your pace.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Graduated the Strip',
        intro: 'Petitenget restaurant alumni who chose private service.',
        paragraphs: [
          'Chef Rizky spent six years at Merah Putih, rising to senior sous chef. His contemporary Indonesian techniques — the molecular touches, the modernized presentations — bring the same creativity that put that restaurant on every \"best of Bali\" list. He left for private service to create without menu constraints.',
          'Chef Anna trained at Sarong under the watchful eye of Will Meyrick. Her understanding of Asian flavor combinations spans Thai, Indian, and Indonesian traditions, blending them in ways that surprise without confusing. She calls her style \"Petitenget fusion\" — the district\'s defining approach.',
          'Chef Yudhi worked pastry at Métis before expanding into full-menu creation. His desserts remain legendary — architectural, flavorful, photographed for years. Now he creates complete dining experiences, but every meal ends with something that reminds guests why Métis matters.'
        ],
        specializations: ['Contemporary Indonesian', 'Pan-Asian Fusion', 'French-Influenced Fine Dining', 'Architectural Dessert Work', 'Tasting Menu Creation', 'Wine Pairing Expertise', 'Molecular Techniques']
      },
      occasionsSection: {
        title: 'Petitenget Occasions',
        paragraphs: [
          'The anniversary dinner that required better than any restaurant could offer — a private tasting menu built around the couple\'s favorite cuisines, served over four hours with wine pairings. The business dinner where conversation mattered more than ambiance — a villa setting allowed deals to close without restaurant eavesdroppers.',
          'Petitenget guests choose private dining for reasons beyond convenience. They want the meal to matter completely. No distractions, no compromises, no shared experience with strangers. Just excellent food and the people they chose to share it with.'
        ]
      },
      pricingSection: {
        title: 'Comparable to the Best Restaurants',
        intro: 'Petitenget private dining matches restaurant quality and comparable investment.',
        categories: [
          { title: 'Intimate Tasting (2-4)', items: ['Chef service from Rp 3,200,000', 'Multi-course progression', 'Wine pairing coordination available', 'Restaurant-caliber presentation', 'Complete villa dining experience'] },
          { title: 'Dinner Party (6-10)', items: ['Chef service from Rp 5,000,000', 'Family-style or plated options', 'Appetizer through dessert service', 'Service staff for seamless flow', 'Premium ingredient access'] },
          { title: 'Private Event (12-20)', items: ['Chef team from Rp 8,000,000', 'Full event coordination', 'Multiple course options', 'Beverage program available', 'Complete venue management'] }
        ]
      },
      testimonialsSection: {
        title: 'From Petitenget Villas',
        testimonials: [
          { name: 'Restaurant Industry Couple', quote: 'We own restaurants. We\'re hard to impress. This chef understood exactly what we expect — timing, technique, flavor balance. Better than most of the famous places on the strip, frankly. No ego, just excellence.', event: 'Anniversary dinner' },
          { name: 'Food Blogger Guest', quote: 'I came to Petitenget specifically for the restaurant scene. But the private dinner in our villa produced better content than any restaurant visit. Total control over plating angles, natural lighting, no interruptions. And the food was legitimately exceptional.', event: 'Content creation dinner' },
          { name: 'Quiet Celebration Seeker', quote: 'My wife doesn\'t like crowded restaurants. Making our anniversary special without triggering her anxiety seemed impossible in Petitenget. The private chef solution was perfect — world-class food, total comfort.', event: 'Anxiety-accommodating celebration' },
          { name: 'Business Entertainment Host', quote: 'Closing a major deal over dinner in a public restaurant felt risky. The villa setting allowed real conversation, no interruptions, and food impressive enough to signal seriousness. Deal closed. Chef was instrumental.', event: 'High-stakes business dinner' },
          { name: 'Return Foodie', quote: 'Third trip to Petitenget, finally tried private dining instead of restaurants. Won\'t go back. The customization, the pacing, the attention — it\'s what restaurants should be but can\'t execute at scale.', event: 'Revelation experience' }
        ]
      },
      sampleMenuSection: {
        title: 'Petitenget Caliber Menus',
        intro: 'Representative of what our restaurant-trained chefs create.',
        menus: [
          { name: 'Contemporary Indonesian Journey', courses: [
            { category: 'Opening Statement', items: ['Smoked tuna with coconut pearls', 'Nasi goreng crisp with egg yolk', 'Something that signals: this will be special'] },
            { category: 'Progression', items: ['Tom yum risotto', 'Beef rendang with polenta', 'Balinese duck with five-spice reduction'] },
            { category: 'Intermezzo', items: ['Tamarind sorbet with coconut foam'] },
            { category: 'Main Focus', items: ['Lobster with sambal butter', 'Or: Wagyu with tempeh praline', 'Vegetables treated as seriously as protein'] },
            { category: 'Sweet Architecture', items: ['Chocolate temple with mango core', 'Pandan custard with palm sugar glass', 'Petit fours worth photographing'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Skip the Queue',
        paragraphs: [
          'The best restaurants on Petitenget will be there next time you visit. Tonight, don\'t compete for reservations. Don\'t dress for the scene. Don\'t share your evening with strangers. Stay in your villa and eat better.',
          'Tell us what you want. We\'ll exceed it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'How does the quality really compare to Petitenget\'s famous restaurants?',
        answer: 'Our chefs trained in those kitchens. Same techniques, same ingredient access, same standards. The difference: complete attention on your table. No ticket pressure, no kitchen chaos, no service hurry. Many guests report preferring their private meal to prior restaurant experiences.'
      },
      {
        question: 'Can you accommodate very specific dietary restrictions without compromising quality?',
        answer: 'This is where private dining outperforms restaurants. Your chef designs around your requirements rather than adapting existing dishes. Celiac guests get genuinely gluten-free menus, not modified restaurant plates. The creativity stays intact; the accommodations are fundamental.'
      },
      {
        question: 'We want wine pairings with dinner. How does that work?',
        answer: 'We coordinate with Bali\'s best wine distributors — the same sources that supply Petitenget\'s restaurants. Your chef suggests pairings; we arrange procurement. Premium bottles are available with advance notice. The experience rivals any restaurant sommelier service.'
      },
      {
        question: 'Is this really better than just booking Sarong or Merah Putih?',
        answer: 'Different, not inherently better or worse. Those restaurants offer scene, energy, and specific famous dishes. Private dining offers customization, privacy, and complete focus. Guests seeking quiet excellence often prefer private service. Scene-seekers should still experience the strip.'
      },
      {
        question: 'Our villa is beautiful but the kitchen is small. Is that a problem?',
        answer: 'Most Petitenget villas prioritize design over kitchen practicality. Our chefs are skilled at working within constraints, bringing portable equipment when needed. We assess during booking and prepare accordingly. Small kitchens don\'t limit quality — they just require experienced navigation.'
      }
    ]
  },
  berawa: {
    name: 'Berawa',
    slug: 'berawa',
    tagline: 'Berawa Private Chef: Fuel for the Digital Nomad Lifestyle',
    description: 'Coffee shops fill with laptop screens. Fitness classes run back-to-back. The pace is modern, the vibe is productive, and your food should match — efficient, nutritious, and occasionally spectacular.',
    heroDescription: 'Post-workout smoothie bowls. Co-working fuel. Date-night dining worthy of the gram. Berawa demands food that fits its momentum.',
    heroTitle: 'Berawa Private Chef: Modern Food for Modern Bali',
    areas: ['Berawa Beach', 'Finns Beach Club Zone', 'Nelayan Cafe Strip', 'Tibubeneng Village', 'Pantai Berawa Road'],
    popularVenues: ['Finns Beach Club', 'Como Uma Canggu', 'The Slow', 'Theanna Eco Villa', 'Berawa design villas'],
    localInsights: 'Berawa pulses with productive energy. The coffee shops fill by 8 AM with laptops and spreadsheets. The gyms run classes all day. The restaurants serve superfoods and oat milk. This neighborhood attracted people who combine work and wellness, vacation and productivity. Your private chef fits this rhythm — meals that fuel performance without sacrificing pleasure.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.658500",
      "longitude": "115.146222"
    },
    extendedContent: {
      mainHeading: 'Optimized Nutrition, Beautiful Execution',
      introParagraphs: [
        'The Berawa resident or visitor has specific requirements: protein after training, sustained energy for focus work, something impressive when the date arrives, and nothing that derails the wellness goals that brought them here. Your private chef navigates all of this.',
        'Morning looks like post-yoga smoothie bowls or protein scrambles ready when you return from the gym. Midday brings lunches that maintain focus without the carb coma. Evening might be simple recovery meals or elevated dining for entertaining. The range is intentional.',
        'Berawa attracts health-conscious achievers. Macro counters. Supplement researchers. People who read ingredient lists. Your chef understands this world — sourcing quality proteins, balancing macros, accommodating specific dietary protocols without sacrificing the flavor that makes food enjoyable.'
      ],
      whyChooseSection: {
        title: 'Built for the Optimized Life',
        intro: 'Berawa dining serves specific functional purposes.',
        benefits: [
          { title: 'Training Recovery', description: 'Post-workout meals designed around protein timing. Ready when you return from CrossFit, yoga, or surf. The window matters; we hit it.' },
          { title: 'Productivity Fuel', description: 'Lunch that sustains focus without the crash. Low glycemic, nutrient-dense, easy to eat between calls.' },
          { title: 'Macro Precision', description: 'Tell us your targets. We\'ll hit them. Keto, paleo, high-protein, plant-based — accuracy without flavor sacrifice.' },
          { title: 'Social Excellence', description: 'When colleagues visit from Singapore or you\'re entertaining clients, dinner elevates. Same chef, different occasion.' },
          { title: 'Bowl Culture', description: 'Berawa invented the beautiful bowl. We master it — smoothie bowls, poke bowls, grain bowls, all photographable and functional.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Understand the Lifestyle',
        intro: 'Our Berawa team lives the wellness-productivity balance they cook for.',
        paragraphs: [
          'Chef Ayu competes in fitness events and understands sports nutrition intimately. She designs meals around training schedules, recovery windows, and competition prep. Her meal prep clients trust her macros implicitly.',
          'Chef Ryan came from Australia\'s healthy dining scene, bringing cafe-culture expertise to Bali. His smoothie bowl presentations match anything on Instagram, but more importantly, the nutrition actually works. Form and function.',
          'Chef Wulan specializes in plant-based cooking for the significant vegan community in Berawa. Her creativity with Indonesian ingredients produces dishes that satisfy meat-eaters and vegans equally — proof that dietary restrictions needn\'t limit pleasure.'
        ],
        specializations: ['Sports Nutrition', 'Macro-Counted Meal Prep', 'Smoothie Bowl Artistry', 'Plant-Based Creativity', 'Healthy Cafe Style', 'Post-Workout Recovery', 'Entertainment-Quality Dinners']
      },
      occasionsSection: {
        title: 'Berawa Scenarios',
        paragraphs: [
          'The digital nomad who needs five days of meal prep on Sunday — containers that fuel the week without decision fatigue. The fitness couple who want date night without compromising training — elegant dining that fits their protocol. The remote team celebrating a product launch — impressive dinner that says \"we\'re successful\" without saying \"we\'re irresponsible.\"',
          'Berawa occasions balance aspiration with discipline. Your chef makes both possible in the same meal.'
        ]
      },
      pricingSection: {
        title: 'Investment in Performance',
        intro: 'Berawa pricing reflects the value of meals that actually work.',
        categories: [
          { title: 'Weekly Fuel Prep', items: ['From Rp 1,600,000 per session', 'Five days of meals prepared', 'Macro targets accommodated', 'Post-workout timing considered', 'Beautiful containers for villa fridge'] },
          { title: 'Daily Dinner Service', items: ['From Rp 1,800,000 per dinner', 'Balanced evening meals', 'Date-worthy when needed', 'Quick service for busy schedules', 'Cleanup included'] },
          { title: 'Special Occasion', items: ['From Rp 3,200,000', 'Entertainment-quality dining', 'Wine pairing available', 'Multiple courses', 'Instagram-ready presentation'] }
        ]
      },
      testimonialsSection: {
        title: 'From Berawa Performers',
        testimonials: [
          { name: 'Remote Tech Lead', quote: 'I manage a distributed team across timezones. The last thing I need is food stress. My chef preps Sunday evenings; I eat well all week without thinking. Productivity hack that actually works.', event: 'Weekly meal prep client' },
          { name: 'Fitness Competitor', quote: 'Competition prep requires exact nutrition. Chef Ayu understood my protocols, hit my macros, and created variety within constraints. I brought my best physique and actually enjoyed eating the whole prep.', event: 'Competition nutrition' },
          { name: 'Vegan Power Couple', quote: 'Finding genuinely creative plant-based food in Bali seemed impossible until this chef. Now we entertain omnivore friends with dinners that convert skeptics. No apologies for our choices.', event: 'Plant-based entertaining' },
          { name: 'Startup Celebration Host', quote: 'Series A closed. Team gathered in Berawa to celebrate. The chef created a dinner that felt like achievement — sophisticated, memorable, impressive to investors joining us. Worth it.', event: 'Business milestone' },
          { name: 'Health-Focused Mom', quote: 'Kids, work, wellness goals — something has to give. Except food doesn\'t have to. My chef handles family meals three times a week. Kids eat, I hit my targets, dinner happens without my attention.', event: 'Busy family service' }
        ]
      },
      sampleMenuSection: {
        title: 'Berawa Fuel Options',
        intro: 'Menus that match the neighborhood\'s performance orientation.',
        menus: [
          { name: 'High-Performance Week Prep', courses: [
            { category: 'Breakfast Options', items: ['Overnight oats portioned', 'Egg muffins for grab-and-go', 'Smoothie packs (blend and drink)', 'Protein pancake mix ready'] },
            { category: 'Lunch Containers', items: ['Grain bowls with protein', 'Salad bases with dressings separate', 'Soup portions for light days', 'Wrap components for assembly'] },
            { category: 'Dinner Ready', items: ['Protein portions cooked and portioned', 'Vegetable mixes ready to heat', 'Complex carbs prepared', 'Sauce options for variety'] }
          ]},
          { name: 'Elevated Date Night', courses: [
            { category: 'Light Opening', items: ['Tuna poke crisp', 'Summer rolls with dipping sauce', 'Something that won\'t ruin the calorie budget'] },
            { category: 'Protein Focus', items: ['Grilled fish with herb crust', 'Or: Grass-fed tenderloin', 'Vegetables that earn their plate space'] },
            { category: 'Reasonable Sweet', items: ['Dark chocolate something', 'Fresh fruit elevated', 'Dessert that doesn\'t undo the week'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Food That Works for You',
        paragraphs: [
          'Berawa attracts people who optimize. They track metrics, manage energy, and refuse to sacrifice goals for convenience. Your private chef becomes part of that system — another resource for performing at your best.',
          'Tell us your protocols. We\'ll execute them deliciously.'
        ]
      }
    },
    faqItems: [
      {
        question: 'I track macros seriously. Can your chefs hit specific numbers?',
        answer: 'Absolutely. Share your targets; we\'ll portion and log accordingly. Several of our Berawa chefs have sports nutrition training and understand why protein timing matters. Your spreadsheet will be accurate; the food will still taste good.'
      },
      {
        question: 'Can you work around my training schedule?',
        answer: 'This is standard for Berawa service. Tell us when you train; we\'ll have recovery meals ready within your anabolic window. Morning yoga? Breakfast waiting. Evening CrossFit? Dinner times accordingly. Your schedule drives ours.'
      },
      {
        question: 'We\'re hosting clients from Singapore for dinner. Can you elevate from meal prep to impressive?',
        answer: 'Same chef, different mode. Your regular meal prep chef can execute formal dinners when business entertainment calls. We match the occasion to the audience. Investors don\'t need to know about your weekly containers.'
      },
      {
        question: 'I\'m plant-based but my partner eats meat. How does that work?',
        answer: 'Common in Berawa. We create meals from shared bases that branch at the protein stage. Same vegetables, same grains, same sauces — your tofu, their chicken. Nobody eats \"the restriction version.\" Both eat deliciously.'
      },
      {
        question: 'Is your food actually healthy or just marketed as healthy?',
        answer: 'We share exact nutrition information on request. No hidden sugars, no deceptive marketing. Many Berawa clients have specific protocols — keto, carnivore, elimination diets — and we accommodate with transparency. Your health decisions should be informed.'
      }
    ]
  },
  pererenan: {
    name: 'Pererenan',
    slug: 'pererenan',
    tagline: 'Pererenan Private Chef: Where Rice Fields Meet Real Food',
    description: 'The rice paddies haven\'t been replaced by coffee shops yet. Farmers still work the terraces. The pace still allows genuine presence. Your meals here should honor this remaining authenticity.',
    heroDescription: 'Organic gardens, traditional farming, and the Bali that travelers used to discover. Your chef sources from the fields around your villa and cooks with respect for what remains.',
    heroTitle: 'Pererenan Private Chef: Authentic Bali, Authentic Food',
    areas: ['Pererenan Beach', 'Rice Terrace Villas', 'Cemagi Border Zone', 'Munggu Traditional Area', 'Black Sand Coast'],
    popularVenues: ['Desa Seni', 'Escape Nomade', 'Theanna Eco Villa', 'Traditional rice field compounds', 'Wellness retreat centers'],
    localInsights: 'Pererenan exists in the space between tourism and tradition. The rice farmers still work the paddies. The temples still host genuine ceremonies. The organic gardens actually supply local tables rather than just existing for photographs. Your private chef engages with this reality — sourcing from neighbors, cooking with ingredients that traveled meters rather than miles.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.635444",
      "longitude": "115.118861"
    },
    extendedContent: {
      mainHeading: 'The Bali That Remains',
      introParagraphs: [
        'Development creeps north from Seminyak every year. What was rice field yesterday becomes boutique hotel tomorrow. Pererenan represents the edge — still enough agricultural land to feel authentic, still enough space to breathe, still enough connection to what Bali offered before the influencers arrived.',
        'Your private chef here understands this context. We source from the farms you see from your villa. The vegetables come from gardens you can walk to. The eggs might come from chickens you hear in the morning. This isn\'t farm-to-table marketing; it\'s simply the supply chain that makes sense when you\'re surrounded by working agriculture.',
        'The wellness retreats chose Pererenan for these reasons. The rice field views support meditation better than construction sounds. The organic sourcing actually works here. The pace allows presence. Your dining experience should match — clean ingredients, mindful preparation, food that nourishes beyond calories.'
      ],
      whyChooseSection: {
        title: 'Authentically Sourced, Thoughtfully Prepared',
        intro: 'Pererenan dining connects directly to the land around you.',
        benefits: [
          { title: 'True Local Sourcing', description: 'The farms around your villa actually supply your dinner. Your chef knows the farmers, the gardens, the seasonal rhythms. This isn\'t marketing language; it\'s geography.' },
          { title: 'Organic By Default', description: 'Many Pererenan farms practice traditional agriculture without chemicals. Not certified organic — just the way Balinese farmers have always grown food.' },
          { title: 'Traditional Techniques', description: 'Some preparations haven\'t changed in generations. Your chef learned from grandmothers, using methods that predate restaurant trends.' },
          { title: 'Retreat Compatibility', description: 'If you\'re here for yoga, detox, or healing, your food supports that intention. Clean, aligned with your protocols, prepared with awareness.' },
          { title: 'Pace Matching', description: 'Pererenan chose you for slowness. Your chef matches that — unhurried preparation, mindful presentation, meals designed for presence.' }
        ]
      },
      chefsSection: {
        title: 'Cooks Who Know the Land',
        intro: 'Our Pererenan chefs maintain relationships with the farms that surround your villa.',
        paragraphs: [
          'Chef Nyoman grew up in Cemagi, learning to cook from her grandmother before any culinary school existed in Bali. Her recipes connect to specific places — the moringa from the neighbor\'s garden, the turmeric from the temple grounds, the coconuts from family trees. She cooks Pererenan because she\'s from here.',
          'Chef Ari trained in wellness cuisine and chose Pererenan specifically for retreat service. She understands juice cleanses, elimination diets, ayurvedic protocols, and the delicate transition phases of healing programs. Her food supports whatever transformation you\'re undertaking.',
          'Chef Made specializes in organic cooking — not the label, but the practice. He sources from farmers who never stopped traditional agriculture, choosing produce based on what\'s actually ready this week rather than what\'s available year-round through industrial supply chains.'
        ],
        specializations: ['Traditional Balinese Cuisine', 'Wellness and Detox Menus', 'Organic Farm Sourcing', 'Retreat Group Catering', 'Ayurvedic-Inspired Cooking', 'Raw and Living Foods', 'Mindful Meal Preparation']
      },
      occasionsSection: {
        title: 'Pererenan Moments',
        paragraphs: [
          'The yoga retreat ending with a celebration meal — clean food that honors the practice while acknowledging completion. The couple who came to Bali for healing and found themselves dining in a rice field pavilion, weeping at the beauty of simple well-prepared food. The writer finishing a manuscript, needing quiet dinners that supported creative work without demanding attention.',
          'Pererenan occasions tend toward the meaningful. People come here intentionally, seeking something beyond vacation entertainment. Your chef understands and creates accordingly.'
        ]
      },
      pricingSection: {
        title: 'Accessible Mindfulness',
        intro: 'Pererenan pricing reflects simpler sourcing and genuine accessibility.',
        categories: [
          { title: 'Solo Retreat Dining', items: ['From Rp 1,400,000 per meal', 'Designed for one', 'Clean, nourishing, beautiful', 'Supports your practice', 'Peaceful service style'] },
          { title: 'Couple\'s Organic Dinner', items: ['From Rp 2,200,000', 'Farm-sourced ingredients', 'Multi-course or family-style', 'Rice field setting when possible', 'Complete cleanup'] },
          { title: 'Retreat Group Dining', items: ['From Rp 3,500,000', 'Serves groups up to 15', 'Protocol-compatible menus', 'Silent or conversational service', 'Coordination with retreat schedule'] }
        ]
      },
      testimonialsSection: {
        title: 'From the Fields of Pererenan',
        testimonials: [
          { name: 'Silent Retreat Participant', quote: 'Ten days of silence, and food became the highlight. The chef created each meal with such care that eating became meditation. Nothing fancy — just rice, vegetables, and presence. It was enough.', event: 'Silent retreat catering' },
          { name: 'Healing Journey Traveler', quote: 'I came to Bali after cancer treatment, rebuilding my relationship with food. The chef worked with my nutritionist, created meals that supported healing, and never made me feel like a restriction. That gentleness mattered.', event: 'Recovery support dining' },
          { name: 'Long-Stay Writer', quote: 'Three months writing in a rice field villa. Same chef came twice a week. She learned what helped me work and what distracted. The dinners became part of the creative process.', event: 'Extended creative residency' },
          { name: 'Yoga Teacher on Sabbatical', quote: 'Teaching for ten years depleted me. Pererenan for four months, proper food, proper rest. The chef understood what I was rebuilding and fed accordingly. I teach better now because I ate well then.', event: 'Professional recovery' },
          { name: 'Anniversary Escape', quote: 'We specifically avoided fancy restaurants for our twenty-fifth. Dinner in a rice field with candles and farm-fresh food was more romantic than any Michelin experience could match. Simple is sometimes everything.', event: 'Milestone celebration' }
        ]
      },
      sampleMenuSection: {
        title: 'Pererenan Simplicity',
        intro: 'Menus that let ingredients speak clearly.',
        menus: [
          { name: 'Clean Balinese Feast', courses: [
            { category: 'Garden Opening', items: ['Fresh vegetable crudités', 'Herb-infused water', 'Things that grew nearby'] },
            { category: 'Traditional Preparations', items: ['Steamed fish with coconut', 'Tempeh in banana leaf', 'Urap: vegetables with coconut sambal', 'Rice from local paddies'] },
            { category: 'Simple Sweet', items: ['Tropical fruit in coconut cream', 'Ginger tea', 'Nothing processed, nothing complicated'] }
          ]},
          { name: 'Wellness Protocol Aligned', courses: [
            { category: 'Cleansing', items: ['Morning juice preparation', 'Digestive support tea', 'Light fruit if permitted'] },
            { category: 'Building', items: ['Protein within protocol guidelines', 'Approved vegetables', 'Healing fats'] },
            { category: 'Restoration', items: ['Evening broth', 'Calming infusion', 'Whatever your program prescribes'] }
          ]}
        ]
      },
      elevateVacationSection: {
        title: 'Food as Practice',
        paragraphs: [
          'Pererenan chose you because you were seeking something beyond tourist Bali. Your meals here should support whatever brought you to the rice fields — healing, creativity, presence, or simply rest. Clean food from clean sources, prepared with awareness.',
          'Tell us your intention. We\'ll nourish it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Can you really source ingredients from nearby farms?',
        answer: 'Yes — this is Pererenan\'s advantage. Our chefs have relationships with farmers you can literally see from most villas. The eggs, vegetables, herbs, and some proteins come from within walking distance. It\'s not marketing; it\'s what makes logistical sense here.'
      },
      {
        question: 'We\'re on a specific wellness protocol. Can you accommodate?',
        answer: 'Wellness protocols are common in Pererenan. Share your guidelines — elimination diet, juice cleanse, ayurvedic recommendations — and we\'ll cook within them precisely. Many of our chefs specialize in retreat-compatible cuisine.'
      },
      {
        question: 'Is Pererenan really that different from Canggu?',
        answer: 'Significantly. Canggu\'s energy is productive, social, busy. Pererenan\'s energy is quieter, more inward, more connected to agricultural rhythms. Your dining here reflects that difference — simpler, more mindful, less performance.'
      },
      {
        question: 'Can you coordinate with our retreat schedule?',
        answer: 'Absolutely. We work with Pererenan retreats regularly. Your program\'s timing, dietary phases, and silent periods all factor into our service. We coordinate with retreat leaders to align meals with practice.'
      },
      {
        question: 'We want romance without pretension. Is that possible here?',
        answer: 'Pererenan romance looks different from Seminyak romance. Candles among rice paddies, simple food prepared with care, absolute quiet except for frogs and birds. Less Instagram, more intimacy. This is what the setting offers, and our service matches.'
      },
      {
        question: 'How far are you from ingredient sources if we want specific items?',
        answer: 'Local sourcing covers most needs, but specialized items require travel to Denpasar markets (about forty-five minutes). For specific requests, we plan shopping trips accordingly. The local-first approach works for most Pererenan guests; specialty requests require advance notice.'
      }
    ]
  },
  tanahlot: {
    name: 'Tanah Lot',
    slug: 'tanah-lot',
    tagline: 'Tanah Lot Private Chef: Dining Where the Sea Temple Watches',
    description: 'The sun drops behind the most photographed temple in Indonesia. The sky flames orange, purple, gold. Your dinner table commands this view while exceptional food arrives in courses.',
    heroDescription: 'Bali\'s iconic sea temple silhouettes against sunset while your private dinner unfolds. This is the postcard, and you\'re eating inside it.',
    heroTitle: 'Tanah Lot Private Chef: Sunset Ceremonies, Private Dining',
    areas: ['Temple Viewpoint Villas', 'Kediri District', 'Nirwana Golf Estate', 'Pan Pacific Zone', 'Batu Bolong Temple Area'],
    popularVenues: ['Pan Pacific Nirwana Bali', 'Alila Villas Soori', 'Tanah Lot cliffside villas', 'Golf resort properties', 'Temple-view private compounds'],
    localInsights: 'Tanah Lot exists for one reason: the temple sunset. Visitors arrive by the busload for thirty minutes of photographs, then leave. But you\'re staying here, and your private chef transforms that fleeting tourist moment into an extended dining experience. The temple silhouette becomes your backdrop; sunset becomes your appetizer course.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.621139",
      "longitude": "115.086500"
    },
    extendedContent: {
      mainHeading: 'The Temple at Your Table',
      introParagraphs: [
        'Tanah Lot appears on every Bali postcard. The sea temple perched on its ocean rock, waves crashing around sacred stones, the sun dropping behind in oranges and pinks that seem deliberately theatrical. Millions photograph this scene. A privileged few dine within it.',
        'Your villa near Tanah Lot offers what day-trippers cannot imagine: watching the sunset unfold slowly, dinner appearing in courses timed to the light. Appetizers as the golden hour begins. Wine poured as colors intensify. Main courses served when the temple becomes silhouette. Dessert under early stars.',
        'Our chefs understand this choreography. They\'ve cooked thousands of Tanah Lot sunsets and know exactly when to plate, when to serve, when to disappear so you can absorb the view. The timing matters as much as the food — and both are excellent.'
      ],
      whyChooseSection: {
        title: 'Sunset-Synchronized Service',
        intro: 'Every element of Tanah Lot dining serves the view.',
        benefits: [
          { title: 'Astronomical Timing', description: 'We check sunset times for your specific date. Service begins ninety minutes before, builds through golden hour, peaks as the sun touches the horizon.' },
          { title: 'View-Preserving Presentation', description: 'Plates arrive when you\'re ready, not when we\'re ready. No one blocks your view. Service disappears at key moments.' },
          { title: 'Traditional Authenticity', description: 'Temple dining calls for Balinese cuisine that honors the spiritual setting. Our traditional preparations connect food to place.' },
          { title: 'Resort-Level Excellence', description: 'Pan Pacific and Alila set standards. Our chefs match or exceed what their restaurants deliver, with private focus.' },
          { title: 'Complete Experience', description: 'From pre-dinner drinks through post-dessert coffee, the entire evening flows around the temple\'s gift of light.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Read the Sky',
        intro: 'Our Tanah Lot specialists have mastered sunset service.',
        paragraphs: [
          'Chef Komang has cooked at Tanah Lot since the Pan Pacific opened. He understands how light changes with seasons, how monsoon clouds create different drama than clear-sky sunsets, and how to adjust service for the specific evening you\'re experiencing.',
          'Chef Wayan Sari focuses on traditional Balinese preparations that honor the temple\'s spiritual significance. Her grandmother taught her ceremonial cooking; she translates this knowledge into dishes that feel appropriate for sacred-adjacent dining.',
          'Chef Andre brings international sophistication when the occasion calls for it. Some guests want elegant fusion rather than strictly Balinese; he creates progressive menus that respect the setting while offering broader flavors.'
        ],
        specializations: ['Sunset-Timed Service', 'Traditional Balinese Ceremonial Cooking', 'Temple-Appropriate Menus', 'Resort-Quality Presentation', 'Dramatic View Integration', 'Romantic Evening Orchestration', 'Multi-Course Progression']
      },
      pricingSection: {
        title: 'Experience Investment',
        intro: 'Tanah Lot dining commands attention to detail and timing precision.',
        categories: [
          { title: 'Sunset Dinner for Two', items: ['Chef service from Rp 2,800,000', 'Timed precisely to sunset', 'Multi-course Balinese or fusion', 'Complete view-focused service', 'Romantic table arrangement'] },
          { title: 'Temple View Gathering (6-12)', items: ['Chef service from Rp 5,200,000', 'Family-style or plated options', 'Sunset timing for group', 'Traditional feast presentation', 'Full staff support'] }
        ]
      },
      testimonialsSection: {
        title: 'From Temple View Tables',
        testimonials: [
          { name: 'Proposal Evening', quote: 'I proposed as the sun touched the temple silhouette. The chef had timed dessert perfectly — she said yes between bites of chocolate mousse. The whole evening felt orchestrated by someone who understood exactly what I needed.', event: 'Engagement dinner' },
          { name: 'Milestone Anniversary', quote: 'Fifty years married. We\'ve seen sunsets everywhere. But this one, with perfect food appearing as the colors changed, reminded us why we still adventure together. Simple but profound.', event: 'Golden anniversary' },
          { name: 'Family Reunion Host', quote: 'Three generations, ten people, one incredible sunset. The chef served everyone gracefully while we watched the temple disappear into darkness. Photos that will hang in our home forever.', event: 'Multi-generation gathering' }
        ]
      },
      elevateVacationSection: {
        title: 'Watch the Temple, Not the Clock',
        paragraphs: [
          'Tanah Lot sunsets are famous because they\'re genuinely spectacular. Your private dinner transforms a thirty-minute tourist stop into a three-hour experience. The temple watches; your chef works invisibly; and you simply eat well while Bali performs.',
          'Tell us your date. We\'ll check the sunset time and build your evening around it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'How do you time dinner with the actual sunset?',
        answer: 'We check astronomical data for your specific date — sunset time varies seasonally. Service typically begins ninety minutes before sunset, with appetizers during golden hour and main courses as the temple silhouettes. We\'ve perfected this timing over hundreds of Tanah Lot dinners.'
      },
      {
        question: 'Our villa is near Tanah Lot but doesn\'t have temple views. Is private dining still special here?',
        answer: 'Absolutely. The Tanah Lot area offers peaceful rural atmosphere beyond just temple views. We can often arrange viewing-terrace setups for sunset, then return to your villa for dinner. Or simply enjoy excellent dining in a spiritual, quieter part of Bali.'
      },
      {
        question: 'Is traditional Balinese cuisine required, or can we request other styles?',
        answer: 'Traditional Balinese feels most appropriate for temple-adjacent dining, but we serve your preferences. International fusion, Mediterranean, or Asian cuisines work beautifully with sunset views. We suggest letting the setting inspire at least one traditional element.'
      },
      {
        question: 'We\'re staying at Pan Pacific or Alila. Why use a private chef instead of the resort restaurants?',
        answer: 'Privacy and customization. Resort restaurants are excellent but serve multiple tables. Your private chef focuses entirely on you, with menu tailored to your preferences, service timed to your view, and no sharing the moment with strangers.'
      },
      {
        question: 'Is Tanah Lot too far from other areas for a one-night private dinner?',
        answer: 'If you\'re staying elsewhere and visiting for sunset, yes, timing is tight. Day-trip dinners require careful coordination. For guests staying near Tanah Lot, we serve seamlessly. The temple sunset justifies the trip — plan around it rather than rushing it.'
      }
    ]
  },
  tabanan: {
    name: 'Tabanan',
    slug: 'tabanan',
    tagline: 'Tabanan Private Chef: Bali\'s Farming Heart, Real Village Food',
    description: 'UNESCO-listed rice terraces spread to the horizon. Mount Batukaru rises through morning mist. This is agricultural Bali, where ingredients travel from field to kitchen in minutes.',
    heroDescription: 'Jatiluwih\'s terraces aren\'t scenery — they\'re your chef\'s ingredient source. Farm-to-table stops being marketing when the farm surrounds your villa.',
    heroTitle: 'Tabanan Private Chef: Where the Rice Comes From',
    areas: ['Jatiluwih UNESCO Terraces', 'Batukaru Mountain Zone', 'Penebel Highlands', 'Kerambitan Palace Area', 'Antosari Coast Road'],
    popularVenues: ['Jatiluwih terrace lodges', 'Batukaru temple retreats', 'Alila Villas Soori', 'Traditional Balinese compounds', 'Mountain eco-resorts'],
    localInsights: 'Tabanan grows Bali\'s food. The UNESCO-listed subak irrigation system has fed the island for a thousand years. The rice terraces tourists photograph are working farms; the vegetables in village markets were harvested this morning. Your private chef here cooks with what the land provides — true origin dining.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.540667",
      "longitude": "115.122444"
    },
    extendedContent: {
      mainHeading: 'Eating from the Source',
      introParagraphs: [
        'Tourism Bali imports much of its food. Seminyak restaurants order from distributors; resort kitchens rely on supply chains. Tabanan operates differently. The rice terraces are farms. The village markets sell what neighbors grew. The chickens scratched the earth yesterday.',
        'Your private chef in Tabanan accesses ingredients unavailable elsewhere. Heritage rice varieties that never reach tourist areas. Vegetables picked the morning of your dinner. Traditional preparations that require village knowledge to execute properly.',
        'This is the Bali that existed before hotels — agricultural, community-oriented, food-connected. Jatiluwih earned UNESCO status not for beauty but for the ancient irrigation system that makes the terraces function. Your dinner here connects to that thousand-year tradition.'
      ],
      whyChooseSection: {
        title: 'Authentic Source Access',
        intro: 'Tabanan dining offers what tourist areas cannot.',
        benefits: [
          { title: 'True Farm-to-Table', description: 'Not marketing language — actual farms. Your chef knows the farmers, shops their harvests, cooks what\'s genuinely fresh today.' },
          { title: 'Heritage Varieties', description: 'Tabanan grows rice varieties that don\'t appear in restaurants. Red rice, black rice, heritage strains that taste different because they are different.' },
          { title: 'Village Recipes', description: 'Traditional preparations passed through grandmothers, not culinary schools. Dishes you cannot order in restaurants because restaurants don\'t know them.' },
          { title: 'Agricultural Immersion', description: 'Eat dinner surrounded by working terraces. Understand where Balinese food comes from because you\'re dining inside the source.' },
          { title: 'Ceremonial Knowledge', description: 'Tabanan preserves traditions. Your chef can prepare ceremonial dishes usually reserved for temple festivals.' }
        ]
      },
      chefsSection: {
        title: 'Cooks from the Villages',
        intro: 'Our Tabanan chefs grew up in this agricultural tradition.',
        paragraphs: [
          'Chef Made Murni was born in a Jatiluwih farming family. She learned to cook from her grandmother before learning there was such a thing as a professional chef. Her dishes connect to specific harvests, seasonal rhythms, and family recipes that never crossed into commercial cooking.',
          'Chef Ketut Wira specializes in ceremonial preparations — the elaborate dishes Balinese families create for temple festivals. He can produce bebek betutu the traditional way (twenty-four hours buried with burning coconut husks) or adapt for villa kitchen realities.',
          'Chef Putu brings mountain expertise from the Batukaru slopes. His knowledge includes wild vegetables from forest edges, traditional hunting preparations, and the specific flavors that high-altitude climate creates in Tabanan produce.'
        ],
        specializations: ['Traditional Village Cuisine', 'Ceremonial Feast Preparation', 'Heritage Rice Cooking', 'Farm-Direct Sourcing', 'Bebek Betutu Mastery', 'Mountain Forest Ingredients', 'Multi-Generation Recipes']
      },
      pricingSection: {
        title: 'Authentic Value',
        intro: 'Tabanan pricing reflects real sourcing and traditional expertise.',
        categories: [
          { title: 'Village Feast (2-4)', items: ['Chef service from Rp 2,400,000', 'Farm-sourced ingredients', 'Traditional preparations', 'Heritage rice varieties', 'Authentic village experience'] },
          { title: 'Ceremonial Dinner (6-12)', items: ['Chef service from Rp 4,800,000', 'Full ceremonial spread', 'Multi-dish traditional feast', 'Extended preparation time', 'Complete cultural immersion'] }
        ]
      },
      testimonialsSection: {
        title: 'From the Terraces',
        testimonials: [
          { name: 'Food Researcher', quote: 'I\'ve studied Indonesian cuisine for fifteen years. This dinner in Tabanan introduced me to dishes I\'d never encountered — village preparations that exist in no cookbook. The chef\'s grandmother\'s recipes, finally documented through eating them.', event: 'Academic culinary exploration' },
          { name: 'Return Bali Travelers', quote: 'After ten trips to Bali, we\'d never tasted real Balinese food until Tabanan. Everything before was adapted, softened, tourist-friendly. This was the actual thing, and it was better.', event: 'Cultural discovery' },
          { name: 'Farm-to-Table Advocate', quote: 'I run farm-to-table restaurants in California. Tabanan showed me what the phrase actually means — the rice from the terrace I could see from dinner. Not similar to farm-to-table; the definition of it.', event: 'Industry insight' }
        ]
      },
      elevateVacationSection: {
        title: 'Taste the Source',
        paragraphs: [
          'Tourist Bali serves food prepared for tourist expectations. Tabanan serves food prepared for Balinese families, using ingredients from Balinese farms, following Balinese traditions. The difference isn\'t subtle — it\'s a revelation.',
          'Tell us you want authenticity. We\'ll deliver it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Is Tabanan too far from where most visitors stay?',
        answer: 'Tabanan requires one to two hours from south Bali, depending on location. Many guests visit for day trips to Jatiluwih. For chef service, we recommend staying in the area — the agricultural immersion rewards extended time. Multi-day visits receive the full experience.'
      },
      {
        question: 'How is the food really different from tourist-area Balinese food?',
        answer: 'Tourist-area Indonesian food is adapted — spice levels reduced, presentations modified, ingredients standardized. Tabanan village food is authentic — family recipes unchanged, local varieties utilized, preparations requiring traditional knowledge. The gap is significant. First-time tasters usually notice immediately.'
      },
      {
        question: 'Can you prepare bebek betutu the traditional way?',
        answer: 'Yes, with advance notice. Traditional bebek betutu requires twenty-four hours of slow cooking with burning coconut husks. This demands preparation beginning the day before your dinner. We also offer excellent same-day alternatives using modern techniques that preserve traditional flavors.'
      },
      {
        question: 'We\'re staying at Jatiluwih. How does ingredient sourcing work?',
        answer: 'Jatiluwih sourcing is immediate. Your chef shops from the farmers whose terraces you see from breakfast. Rice, vegetables, eggs, chicken — all within walking distance. This is the true farm-to-table advantage that makes Tabanan dining unique.'
      },
      {
        question: 'Are there options for visitors who want authentic food but not too spicy?',
        answer: 'Absolutely. Balinese village food varies in spice intensity. We can select dishes naturally milder while maintaining authenticity. Traditional ceremonial foods are often less aggressively spiced than everyday cooking. Your comfort matters; authentic doesn\'t require painful.'
      }
    ]
  },
  denpasar: {
    name: 'Denpasar',
    slug: 'denpasar',
    // SEO override: 954 imp, pos 9, but 0.1% CTR with the generic "villa dining" title.
    // Denpasar search intent is residential (expats, medical tourists, embassy staff,
    // long-term remote workers) — not villa-vacation tourists. Title reflects that.
    seoTitle: 'Private Chef in Denpasar, Bali — Weekly Meal Prep + Family Dinners | myCHEF',
    seoDescription: 'Private chef in Denpasar for expat families, long-term residents, and medical-stay visitors. Weekly meal prep, family dinners, Pasar Badung market sourcing. WhatsApp booking.',
    tagline: 'Denpasar Private Chef: Real Bali Behind the Tourist Facade',
    description: 'Scooters swarm the roundabouts. Markets overflow before dawn. Government offices bustle. This is working Bali — where residents actually live, and where authentic home cooking never adapted for tourists.',
    heroDescription: 'Pasar Badung stalls piled with morning produce. Street food masters working corner carts. Denpasar feeds Bali, and your chef sources from the same vendors who supply the island.',
    heroTitle: 'Denpasar Private Chef: Capital City Authenticity',
    areas: ['Renon Government District', 'Sanglah Medical Zone', 'Panjer Residential', 'Sesetan Local Hub', 'Tohpati Arts Corridor', 'Denpasar Barat'],
    popularVenues: ['Private residences', 'Serviced apartments', 'Long-term expat homes', 'Business accommodations', 'Embassy housing'],
    localInsights: 'Denpasar confuses tourists — where are the beaches, the rice terraces, the Instagram spots? That\'s the point. This is functional Bali: the capital, the commercial center, the place where Balinese families actually live. Your private chef here accesses markets tourists never visit, sources ingredients at local prices, and prepares food the way Balinese families eat it.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.650000",
      "longitude": "115.216667"
    },
    extendedContent: {
      mainHeading: 'Where Bali Actually Eats',
      introParagraphs: [
        'Tourist Bali and real Bali coexist but rarely intersect. Seminyak visitors eat at restaurants designed for them. Denpasar residents eat at warung that open at 5 AM for market workers, that sell out by noon, that tourists never find because they\'re not looking.',
        'Your private chef in Denpasar shops at Pasar Badung — Bali\'s largest traditional market, four stories of produce, spices, meat, and fish that supply the island\'s serious kitchens. The vendors know our chefs by name. The prices haven\'t been tourist-adjusted. The ingredients are fresher because turnover is faster.',
        'Living in Denpasar means committing to authentic Indonesia. The expats who choose this capital city over beachside tourism want real life — and real food follows. Home cooking here doesn\'t adapt for foreign palates; it satisfies Indonesian ones.'
      ],
      whyChooseSection: {
        title: 'Capital City Advantages',
        intro: 'Denpasar offers what tourist areas cannot.',
        benefits: [
          { title: 'Market Access', description: 'Pasar Badung, Pasar Kumbasari, Pasar Sanglah — legendary markets with ingredients unavailable elsewhere. Your chef sources from Bali\'s best suppliers at Bali\'s best prices.' },
          { title: 'Local Pricing', description: 'No tourist markup. Denpasar operates on resident economics. The cost savings in ingredient sourcing translate to better value for you.' },
          { title: 'Authentic Preparations', description: 'Denpasar cooks haven\'t adapted for foreign tastes. The dishes retain their original character, spice levels, and traditional preparations.' },
          { title: 'Indonesian Diversity', description: 'Denpasar is multicultural. Your chef can access Javanese, Sumatran, Sulawesi, and archipelago-wide cuisines through the city\'s diverse resident communities.' },
          { title: 'Residential Service', description: 'Denpasar clients often need regular service — weekly cooking, meal prep, ongoing arrangements. We\'re structured for residential patterns.' }
        ]
      },
      chefsSection: {
        title: 'Capital City Cooks',
        intro: 'Our Denpasar chefs know the city\'s culinary infrastructure intimately.',
        paragraphs: [
          'Chef Ibu Sari has worked Pasar Badung since before the 2016 renovation. She knows which vendors have the best beef, which fishmongers get the morning catch, which spice sellers stock regional specialties. Her market knowledge alone is worth the booking.',
          'Chef Pak Wayan came from hospitality but returned to home cooking because he missed real food. His years in hotels taught technique; his years in Denpasar taught authenticity. The combination produces Indonesian cuisine that\'s both skilled and genuine.',
          'Chef Ni Luh specializes in regional Indonesian — not just Balinese, but dishes from across the archipelago. Denpasar\'s diverse population includes communities from everywhere in Indonesia; she learned their traditions by cooking for their families.'
        ],
        specializations: ['Traditional Market Sourcing', 'Pan-Indonesian Cuisine', 'Authentic Home Cooking', 'Regular Meal Service', 'Family-Style Preparations', 'Local Ingredient Expertise', 'Resident Client Relationships']
      },
      pricingSection: {
        title: 'Resident-Friendly Value',
        intro: 'Denpasar pricing reflects market sourcing and local economics.',
        categories: [
          { title: 'Single Dinner', items: ['Chef service from Rp 1,600,000', 'Market-sourced ingredients', 'Authentic preparations', 'Full cleanup included', 'Home-style comfort'] },
          { title: 'Weekly Service', items: ['From Rp 1,200,000 per session', 'Recurring schedule', 'Meal prep options', 'Shopping included', 'Consistent quality'] }
        ]
      },
      testimonialsSection: {
        title: 'From Denpasar Residents',
        testimonials: [
          { name: 'Embassy Staff Family', quote: 'We\'ve lived in Denpasar three years. The private chef service made it home. Proper Indonesian food every week, ingredients from markets we could never navigate alone, and a connection to the culture that restaurants couldn\'t provide.', event: 'Long-term family service' },
          { name: 'Remote Worker Marcus', quote: 'I work Jakarta hours from Denpasar. By evening, I want real food, not delivery apps. Same chef comes twice a week; my fridge is always full of food worth eating. This is why I can live here productively.', event: 'Ongoing meal prep' },
          { name: 'Medical Tourist', quote: 'Extended treatment at Sanglah Hospital meant months in Denpasar. The chef made apartment meals that supported recovery — clean, nutritious, home-cooked. Hospital food couldn\'t compare; restaurant food was exhausting. Private chef was essential.', event: 'Medical stay support' }
        ]
      },
      elevateVacationSection: {
        title: 'Capital City Authenticity',
        paragraphs: [
          'Denpasar isn\'t where tourists vacation — it\'s where Bali functions. The authenticity isn\'t curated; it\'s simply how the capital operates. Your private chef brings that genuine character into your home, cooking the way Indonesian families eat.',
          'Tell us what you need. We\'ll make Denpasar feel like home.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re staying in Denpasar for medical reasons at Sanglah area. Can you help?',
        answer: 'Absolutely. We regularly serve guests at Denpasar for extended medical stays. Your chef can prepare meals that support recovery — clean proteins, gentle spices, nutritious vegetables. We coordinate with dietary restrictions and create comfort food that hospital cafeterias cannot match.'
      },
      {
        question: 'How authentic is the food compared to tourist-area restaurants?',
        answer: 'Significantly different. Denpasar home cooking hasn\'t been adapted for foreign palates. Spice levels remain traditional. Preparations follow family methods rather than restaurant efficiencies. If you want what Indonesian families actually eat, Denpasar delivers.'
      },
      {
        question: 'We\'re expats living in Denpasar long-term. How does recurring service work?',
        answer: 'Most Denpasar clients book recurring arrangements — weekly dinner service, regular meal prep, or ongoing schedules. Your chef learns your household, maintains consistent quality, and becomes reliable infrastructure. Monthly billing simplifies budgeting.'
      },
      {
        question: 'Can you source specialty ingredients from the markets?',
        answer: 'Pasar Badung has virtually everything Indonesian cuisine requires, including regional specialties for dishes from across the archipelago. If you\'re craving specific Javanese, Sumatran, or Sulawesi preparations, we can source appropriately. The market access is Denpasar\'s greatest advantage.'
      },
      {
        question: 'Is Denpasar good for visitors, or only residents?',
        answer: 'Both, but for different reasons. Visitors use Denpasar as a base for authentic cultural experience — real markets, real food, real Bali. Residents build lives here. Either way, private chef service enhances your Denpasar experience by connecting you to genuine Indonesian home cooking.'
      }
    ]
  },
  gianyar: {
    name: 'Gianyar',
    slug: 'gianyar',
    tagline: 'Gianyar Private Chef: Where Art and Appetite Intersect',
    description: 'Woodcarvers perfect their craft in Mas. Dancers rehearse temple ceremonies. Painters capture rice field light. Gianyar preserves Balinese culture — and its food traditions run equally deep.',
    heroDescription: 'The babi guling capital. The ceremonial feast masters. Where food is art and art is life. Gianyar feeds both appetite and spirit.',
    heroTitle: 'Gianyar Private Chef: Bali\'s Cultural Kitchen',
    areas: ['Gianyar Town', 'Mas Woodcarving Village', 'Batuan Painting Center', 'Sukawati Art Market', 'Celuk Silver District'],
    popularVenues: ['Traditional artisan compounds', 'Cultural heritage villas', 'Artist guesthouses', 'Art gallery accommodations', 'Traditional Balinese homes'],
    localInsights: 'Gianyar earned its reputation through craft mastery — woodcarving, painting, dance, and gamelan. But ask any Balinese where to find the best babi guling, and they\'ll direct you here. The same culture that produces master artists produces master cooks. Your private chef in Gianyar accesses traditions that tourists rarely taste.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.534444",
      "longitude": "115.322500"
    },
    extendedContent: {
      mainHeading: 'The Babi Guling Capital',
      introParagraphs: [
        'Every Balinese regency claims cultural significance. Gianyar actually delivers it. The woodcarvers of Mas produce museum-quality pieces. The painters of Batuan maintain centuries-old traditions. The dancers train from childhood for temple ceremonies. And the cooks — the cooks created babi guling\'s definitive version.',
        'Babi guling is roast suckling pig, Bali\'s most celebrated dish. You can find it throughout the island, but Gianyar\'s preparation is referenced as the standard. The spice blend differs here. The technique has been refined across generations. The result is what every other version tries to replicate.',
        'Your private chef in Gianyar accesses these traditions directly. Some of our chefs learned babi guling from families who\'ve prepared it for generations. Others trained in ceremonial cooking for temple festivals. The knowledge here goes deeper than restaurant techniques — it connects to culture and religion.'
      ],
      whyChooseSection: {
        title: 'Cultural Cooking Authority',
        intro: 'Gianyar dining offers cultural authenticity that can\'t be replicated elsewhere.',
        benefits: [
          { title: 'Babi Guling Mastery', description: 'The dish that defines Balinese cuisine, prepared by chefs who learned from Gianyar\'s legendary families. Authentic spice blends, traditional technique, the real thing.' },
          { title: 'Ceremonial Knowledge', description: 'Balinese food traditions connect to temple rituals. Our chefs understand the religious significance of certain preparations.' },
          { title: 'Market Excellence', description: 'Gianyar\'s traditional market is legendary among Balinese cooks. Ingredients here are fresher, more varied, and authentically sourced.' },
          { title: 'Artisan Integration', description: 'Dining can connect to cultural experiences — visit Mas woodcarvers, Batuan painters, or Celuk silversmiths before dinner.' },
          { title: 'Living Tradition', description: 'Unlike tourism-adapted areas, Gianyar maintains genuine cultural practices. Your meal participates in this continuity.' }
        ]
      },
      chefsSection: {
        title: 'Guardians of Culinary Tradition',
        intro: 'Our Gianyar chefs carry knowledge that can\'t be taught in culinary schools.',
        paragraphs: [
          'Chef Ibu Rai comes from a family that has prepared babi guling for village ceremonies for four generations. Her grandmother taught her mother; her mother taught her. The spice blend is proprietary — she\'ll cook it for you but won\'t write it down.',
          'Chef Ketut Suadnyana trained in ceremonial cooking, preparing the elaborate offerings that accompany temple festivals. He understands which dishes hold religious significance and how traditional preparations connect to spiritual beliefs.',
          'Chef Made Sukarta combines traditional knowledge with modern technique. He can prepare authentic babi guling using ancient methods or adapt for contemporary palates and timing. The flavors remain genuine; the approach accommodates reality.'
        ],
        specializations: ['Babi Guling Preparation', 'Ceremonial Feast Cooking', 'Temple Offering Foods', 'Traditional Spice Blending', 'Village-Style Preparations', 'Market-Fresh Cooking', 'Cultural Integration Dining']
      },
      pricingSection: {
        title: 'Cultural Value',
        intro: 'Gianyar pricing reflects traditional expertise and authentic sourcing.',
        categories: [
          { title: 'Traditional Feast (4-8)', items: ['Chef service from Rp 3,000,000', 'Babi guling with accompaniments', 'Full ceremonial spread', 'Market-sourced ingredients', 'Complete cultural experience'] },
          { title: 'Babi Guling Focus (2-4)', items: ['Chef service from Rp 2,400,000', 'Authentic suckling pig preparation', 'Traditional side dishes', 'Advance ordering required', 'Definitive Gianyar experience'] }
        ]
      },
      testimonialsSection: {
        title: 'From Cultural Explorers',
        testimonials: [
          { name: 'Bali Repeat Visitors', quote: 'Fifteen trips to Bali, never had real babi guling until Gianyar. Every restaurant version was apparently a pale imitation. The chef\'s family recipe was a revelation — this is what we\'d been missing.', event: 'Babi guling revelation' },
          { name: 'Art Collectors', quote: 'We were in Gianyar for the woodcarving. The dinner afterwards matched the craft level — traditional preparations that felt as carefully made as the art we\'d purchased. Culture runs deep here.', event: 'Art and food pairing' },
          { name: 'Cultural Documentary Crew', quote: 'Filming Balinese food traditions brought us to Gianyar. The chef we hired became part of the story — her family\'s ceremonial cooking knowledge filmed better than we\'d hoped. Authentic beyond expectation.', event: 'Documentary research' }
        ]
      },
      elevateVacationSection: {
        title: 'Taste the Culture',
        paragraphs: [
          'Gianyar maintains Balinese traditions because the community values them. Art, dance, music, and food here aren\'t performances for tourists — they\'re living practices. Your private chef connects you to this authenticity through flavor.',
          'Tell us what you want to understand about Bali. We\'ll cook it for you.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Is Gianyar\'s babi guling really that different from other places?',
        answer: 'Yes. The spice blend differs. The cooking technique has regional specifics. And the family traditions here have refined the dish across generations. Balinese people themselves recognize Gianyar babi guling as the standard. Other versions reference this one.'
      },
      {
        question: 'Can you prepare babi guling for a small group, or does it require many people?',
        answer: 'Traditionally, babi guling feeds gatherings. We can scale for smaller groups by using smaller pigs or serving portions. The experience and flavor remain authentic. Minimum group size is usually four for full babi guling preparation; smaller groups can enjoy babi guling components alongside other dishes.'
      },
      {
        question: 'We\'re visiting Gianyar art villages and want dinner afterwards. How does timing work?',
        answer: 'This is common. We coordinate with your day trip schedule. Visit Mas, Batuan, or Celuk in the afternoon; return to your accommodation for dinner. Your chef arrives earlier and has everything ready. The cultural day concludes with cultural dining.'
      },
      {
        question: 'Are there vegetarian options in traditional Gianyar cooking?',
        answer: 'Yes. While babi guling is the famous dish, Balinese ceremonial cooking includes many vegetarian preparations — lawar with tempeh instead of meat, vegetable dishes for offerings, and rice preparations. Vegetarians can experience authentic Gianyar flavors without compromise.'
      },
      {
        question: 'How do ceremonial dishes differ from everyday Balinese food?',
        answer: 'Ceremonial preparations are more elaborate — specific spice combinations, particular presentation styles, and dishes with religious significance. Your chef can explain the meanings behind different preparations. Food here connects to spiritual practice; understanding enriches the experience.'
      }
    ]
  },
  tegallalang: {
    name: 'Tegallalang',
    slug: 'tegallalang',
    tagline: 'Tegallalang Private Chef: Dining Inside the Most Photographed Landscape',
    description: 'The terraces cascade down the valley in perfect carved steps. Morning mist rises through palm trees. Farmers work the paddies as their ancestors did. Your dinner arrives as this living postcard surrounds you.',
    heroDescription: 'Bali\'s most photographed rice terraces become your dining backdrop. Not looking at the view — eating inside it.',
    heroTitle: 'Tegallalang Private Chef: Terrace-View Dining Perfected',
    areas: ['Tegallalang Rice Terraces', 'Ceking Viewpoint', 'Pakudui Valley', 'Kenderan Village', 'Pejeng Temple Zone'],
    popularVenues: ['Terrace-view villas', 'Jungle infinity pool lodges', 'Ubud northern retreats', 'Eco-resorts', 'Instagram-famous properties'],
    localInsights: 'Every Bali guidebook includes Tegallalang. The terraced rice paddies appear on postcards, in Instagram feeds, in travel documentaries. But tourists visit for thirty minutes and leave. You\'re staying in the landscape. Your private dinner unfolds as mist rises through the paddies, as light shifts across carved hillsides, as the view that millions photograph becomes your personal backdrop.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.431944",
      "longitude": "115.278889"
    },
    extendedContent: {
      mainHeading: 'Living Inside the Photograph',
      introParagraphs: [
        'Tegallalang\'s terraces define Bali\'s visual identity. The cascading rice paddies carved into volcanic hillsides, palm trees punctuating green geometry, farmers in conical hats tending crops — this is the image that sells a million flights. Most visitors photograph from roadside viewpoints and move on.',
        'You\'ve chosen to stay. Your villa perches above the terraces or nestles into the valley. The view isn\'t a day trip — it\'s your environment. Morning coffee watches mist clear from the paddies. Afternoon reading happens beside infinity pools overlooking rice fields. And dinner, with the right chef, transforms the landscape into your personal dining room.',
        'Your private chef here understands the setting demands attention. Food arrives to complement views, not compete with them. Timing synchronizes with light shifts across the valley. Presentation matches the natural beauty surrounding you. The terraces are the centerpiece; dinner is the worthy accompaniment.'
      ],
      whyChooseSection: {
        title: 'View-Integrated Dining',
        intro: 'Every element of Tegallalang service serves the landscape.',
        benefits: [
          { title: 'Light Coordination', description: 'Morning mist, afternoon warmth, golden hour magic — we time courses to landscape moods. Breakfast during mist clearing. Dinner as light turns gold.' },
          { title: 'Terrace-View Setup', description: 'Most Tegallalang villas offer multiple dining locations. We assess which maximizes views for your specific booking.' },
          { title: 'Non-Competing Presentation', description: 'Food should be beautiful but not distract from surroundings. Clean, elegant plating that lets the view dominate.' },
          { title: 'Farm-Fresh Sourcing', description: 'The terraces aren\'t just scenery — they\'re working farms. Ingredients come from the land you\'re viewing.' },
          { title: 'Quiet Service', description: 'Tegallalang rewards stillness. Service appears and disappears without disrupting contemplation.' }
        ]
      },
      chefsSection: {
        title: 'Chefs Who Respect the View',
        intro: 'Our Tegallalang team understands that they\'re supporting an experience, not starring in it.',
        paragraphs: [
          'Chef Nyoman grew up in Pakudui village, working the terraces before becoming a cook. He understands the paddies as working agriculture, not just scenery. His menus reflect seasonal cycles — what the farmers plant and harvest, what the land provides at different times.',
          'Chef Wayan trained in Ubud\'s finest restaurants before choosing Tegallalang\'s quieter rhythm. She specializes in elegant simplicity — dishes beautiful enough to photograph but not demanding attention from the view beyond.',
          'Chef Komang handles larger gatherings in Tegallalang\'s villa settings. His experience with view-focused events — weddings, proposals, milestone celebrations — means understanding when to be visible and when to disappear.'
        ],
        specializations: ['View-Integrated Timing', 'Organic Farm Sourcing', 'Elegant Simplicity Plating', 'Terrace Setting Service', 'Special Occasion Coordination', 'Quiet Professional Service', 'Landscape-Appropriate Menus']
      },
      pricingSection: {
        title: 'Terrace-View Value',
        intro: 'Tegallalang pricing reflects exceptional setting service.',
        categories: [
          { title: 'Romantic Terrace Dinner', items: ['Chef service from Rp 2,600,000', 'View-optimized timing', 'Multi-course progression', 'Quiet intimate service', 'Complete terrace experience'] },
          { title: 'Villa Celebration (6-12)', items: ['Chef service from Rp 4,600,000', 'Full villa catering', 'Multiple terrace locations', 'Event coordination', 'Memorable backdrop service'] }
        ]
      },
      testimonialsSection: {
        title: 'From the Terraces',
        testimonials: [
          { name: 'Proposal Success', quote: 'Asked her to marry me as the sun set over Tegallalang terraces. The chef had placed dessert perfectly — she saw the ring as golden light flooded the valley. Couldn\'t have timed it better if we\'d rehearsed. She said yes.', event: 'Engagement moment' },
          { name: 'Instagram Influencer', quote: 'I\'ve photographed food globally. This dinner against Tegallalang rice terraces produced my most-engaged post ever. The chef understood exactly what the content needed — beautiful food against stunning backdrop.', event: 'Content creation' },
          { name: 'Anniversary Celebration', quote: 'Thirty years married. Dinner overlooking the terraces felt earned — like the landscape validated our journey. Simple food, extraordinary view, perfect evening. The chef made everything effortless.', event: 'Milestone recognition' }
        ]
      },
      elevateVacationSection: {
        title: 'The View Deserves the Meal',
        paragraphs: [
          'Tegallalang terraces represent centuries of agricultural engineering, carved into hillsides by generations of farmers. The beauty isn\'t accidental — it\'s functional. Your dinner here should match: beautiful because it works, not beautiful instead of working.',
          'Tell us your timing preferences. We\'ll orchestrate dinner around the light.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Our villa has multiple terrace-view areas. How do you choose where to serve?',
        answer: 'We assess during booking or on arrival. Factors include time of day (where the light is best), wind conditions, group size, and your preferences. Most villas offer obvious best spots for different times; we\'ll recommend based on your dinner timing.'
      },
      {
        question: 'What if the weather is misty or rainy?',
        answer: 'Mist creates dramatic terrace atmospheres — many guests actually prefer it to clear conditions. Rain is trickier but most Tegallalang villas have covered areas maintaining views. We coordinate with weather forecasts and adjust plans accordingly.'
      },
      {
        question: 'Can you photograph the dinner for us?',
        answer: 'Our primary focus is cooking and service. For important moments like proposals, we can coordinate with photographers you\'ve arranged separately. Some chefs are skilled at capturing quick food photos if you\'d like a few shots.'
      },
      {
        question: 'Is morning breakfast service available with mist-rising views?',
        answer: 'Absolutely — morning mist clearing from the terraces is magical. Breakfast service times with this phenomenon, typically 7-9 AM depending on conditions. Your villa staff can often confirm optimal timing.'
      },
      {
        question: 'We want to share terrace views with extended family for a reunion. Is this possible?',
        answer: 'Yes, Tegallalang villas often accommodate larger gatherings. We coordinate family-style service that allows everyone to face the view, with multiple courses served around the terrace table. The setting creates natural gathering energy.'
      }
    ]
  },
  amed: {
    name: 'Amed',
    slug: 'amed',
    tagline: 'Amed Private Chef: Where Fishing Boats Still Determine the Menu',
    description: 'The jukung boats launch before dawn. By breakfast, fishermen return with the night\'s catch. By dinner, that fish is on your plate. Amed offers seafood freshness that tourist areas cannot match.',
    heroDescription: 'Watch the fishing boats return. Walk to the beach. Your chef selects dinner from the morning\'s catch. Hours from ocean to table. This is how coastal Indonesia has eaten for centuries.',
    heroTitle: 'Amed Private Chef: Fishing Village Freshness',
    areas: ['Amed Beach', 'Jemeluk Bay Diving Zone', 'Lipah Beach', 'Bunutan Snorkeling', 'Selang Secret Beach'],
    popularVenues: ['Dive resort villas', 'Traditional beachfront bungalows', 'Eco-lodges', 'Oceanview guesthouses', 'Amed beach compounds'],
    localInsights: 'Amed survived tourism by staying authentic. The fishing village still functions as one. Jukung boats line the black sand beach. Fishermen spread nets to dry. The daily catch determines what\'s available — not menus, not distributors, not supply chains. Your private chef here engages directly with this rhythm, selecting fish from neighbors, cooking what the sea provides.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.349722",
      "longitude": "115.652778"
    },
    extendedContent: {
      mainHeading: 'The Freshest Seafood in Indonesia',
      introParagraphs: [
        'Jimbaran claims the seafood title. Sanur has its beach restaurants. But Amed — remote, quiet, unchanged — offers something neither can: actual fishing village dynamics determining your dinner. The boats go out at night. They return at dawn. By mid-morning, the catch is sorted on the beach. By evening, it\'s on your plate.',
        'The supply chain is invisible because it barely exists. Your chef knows the fishermen personally. Selection happens on the beach, examining what arrived today. There\'s no cold storage extending shelf life. There\'s no distributor marking up prices. There\'s fish that was swimming twelve hours ago, prepared by someone who watched it come ashore.',
        'Amed rewards those who embrace its remoteness. The two-hour drive from the airport discourages day-trippers. Dive resorts attract guests who stay multiple nights. The village pace hasn\'t accelerated for tourism. Your private dining here participates in rhythms that predate any restaurant industry.'
      ],
      whyChooseSection: {
        title: 'Direct Ocean Access',
        intro: 'Amed\'s fishing village reality translates to unmatched freshness.',
        benefits: [
          { title: 'Beach-to-Table Speed', description: 'Fish caught overnight, selected morning, prepared evening. No seafood anywhere in Bali moves faster from ocean to plate.' },
          { title: 'Fisherman Relationships', description: 'Our chefs know Amed\'s fishing families. Priority selection from morning catches. Access tourists never receive.' },
          { title: 'Catch Variety', description: 'Amed\'s waters produce mahi-mahi, snapper, barramundi, squid, octopus, prawns, and seasonal species. Menu possibilities shift with what the sea provides.' },
          { title: 'Traditional Preparations', description: 'East Balinese coastal cooking techniques perfected over generations. Simple methods that let fresh fish speak.' },
          { title: 'Beachside BBQ', description: 'Grill fish on the black sand beach as Mount Agung turns pink at sunset. Amed\'s setting demands this experience.' }
        ]
      },
      chefsSection: {
        title: 'Cooks Who Know the Catch',
        intro: 'Our Amed chefs have relationships with the village\'s fishing families.',
        paragraphs: [
          'Chef Wayan grew up in Amed before tourists discovered it. His family still fishes. He understands which boats catch which species, which fishermen handle their product carefully, and how to assess quality on a dawn beach. His selection skills are worth as much as his cooking.',
          'Chef Komang moved from Candidasa specifically for Amed\'s freshness. She specializes in simple preparations that showcase fish quality — grilled whole with sambal, steamed with coconut, raw if quality permits. Her philosophy: the ocean already flavored it; don\'t overpower.',
          'Chef Putu handles the dive resort clients who want post-dive feasts. He understands diver appetites (substantial), timing preferences (after surface interval), and how to fuel people who\'ve been underwater all day.'
        ],
        specializations: ['Morning Catch Selection', 'Traditional Grilling Techniques', 'East Balinese Coastal Cuisine', 'Diver Nutrition', 'Beachside BBQ Setup', 'Simple Freshness Cooking', 'Multi-Day Stay Service']
      },
      pricingSection: {
        title: 'Remote Simplicity',
        intro: 'Amed pricing reflects local sourcing and coastal simplicity.',
        categories: [
          { title: 'Seafood Beach Dinner (2-4)', items: ['Chef service from Rp 2,200,000', 'Morning catch selection', 'Traditional preparations', 'Beach or villa service', 'Sunset timing available'] },
          { title: 'Diver\'s Feast (4-8)', items: ['Chef service from Rp 3,600,000', 'Post-dive recovery menus', 'Abundant protein', 'Flexible timing', 'Village-style sharing'] }
        ]
      },
      testimonialsSection: {
        title: 'From Amed Guests',
        testimonials: [
          { name: 'Dive Trip Organizer', quote: 'Five days in Amed, diving Japanese wreck in the morning, private chef dinners at night. The seafood was extraordinary — fresh like nothing we\'d ever tasted. The chef knew exactly what divers need after hours underwater.', event: 'Dive expedition' },
          { name: 'Honeymoon Couple', quote: 'We chose Amed specifically to escape tourist Bali. Dinner on the beach with fish the chef selected that morning, Mount Agung turning colors behind us. Nobody else around. Exactly what we wanted.', event: 'Romantic getaway' },
          { name: 'Returning Travelers', quote: 'Third trip to Amed, same chef each time. He remembers our preferences, knows which boats are best, and the quality never wavers. We schedule our Bali trips around his availability now.', event: 'Loyal return clients' }
        ]
      },
      elevateVacationSection: {
        title: 'Worth the Distance',
        paragraphs: [
          'Amed requires commitment — the drive filters out casual visitors. Those who arrive find a Bali that feels older, quieter, more genuine. The fishing village operates as it has for generations. Your dinner participates in this continuity.',
          'Tell us your dates. We\'ll arrange the freshest seafood you\'ve ever tasted.'
        ]
      }
    },
    faqItems: [
      {
        question: 'How does morning catch selection actually work?',
        answer: 'Your chef arrives at Amed beach early morning as jukung boats return. Fishermen display catches; the chef assesses quality and selects the best fish for your dinner. You\'re welcome to join for this experience — see where your meal originates.'
      },
      {
        question: 'What if the catch is poor on our dinner night?',
        answer: 'Amed\'s waters are productive, but the ocean decides. On rare low-catch days, we source from nearby fishing villages or adjust menus around available ingredients. Flexibility is part of authentic fishing village dining. We communicate proactively if catches are unusually limited.'
      },
      {
        question: 'We\'re divers with big appetites. Can you handle post-dive hunger?',
        answer: 'Diver feeding is our specialty in Amed. We understand surface interval timing, protein needs, and the appetites that underwater exertion creates. Portions are generous. Menus are protein-heavy. Nobody leaves our table unsatisfied.'
      },
      {
        question: 'Is Amed really two hours from the airport? Is it worth the drive?',
        answer: 'Yes and yes. The drive (closer to 2.5 hours with traffic) filters out casual tourists, preserving Amed\'s authenticity. The seafood freshness is unmatched anywhere in Bali. For those seeking genuine fishing village life plus world-class diving, the distance is investment.'
      },
      {
        question: 'Can you set up dinner directly on the beach?',
        answer: 'Absolutely — Amed\'s black sand beaches are perfect for beachside BBQ. We coordinate with your accommodation and local authorities if needed. Grilling fresh fish as Mount Agung turns pink at sunset is the definitive Amed experience.'
      }
    ]
  },
  lovina: {
    name: 'Lovina',
    slug: 'lovina',
    tagline: 'Lovina Private Chef: North Bali\'s Unhurried Coast',
    description: 'The Bali Sea lies flat as glass. Dolphins break the surface at dawn. The pace here hasn\'t accelerated for tourism. Lovina offers what south Bali surrendered: genuine coastal tranquility.',
    heroDescription: 'Black sand beaches curve along a calm sea. No wave crowds, no beach clubs, no hustle. Lovina moves at village speed. Your private dinner matches this unhurried rhythm.',
    heroTitle: 'Lovina Private Chef: The Other Side of Bali',
    areas: ['Lovina Beach', 'Kalibukbuk Center', 'Anturan Fishing Village', 'Temukus', 'Singaraja Approach'],
    popularVenues: ['Damai Resort', 'Puri Bagus Lovina', 'The Lovina Bali', 'Beachfront traditional villas', 'Mountain-view guesthouses'],
    localInsights: 'Lovina represents north Bali\'s character: calmer seas, quieter beaches, authentic village life continuing despite tourism. The Bali Sea creates different dynamics than the surf-pounded south coast. Dolphins visit at sunrise. Hot springs steam in the mountains. Your private chef here cooks with the same unhurried quality that brings guests to this coast.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.152778",
      "longitude": "115.025833"
    },
    extendedContent: {
      mainHeading: 'Calm Waters, Genuine Flavors',
      introParagraphs: [
        'North Bali exists separately from tourism\'s main stream. The mountain roads that kept it isolated now filter visitors seeking peace over party. The Bali Sea — calm, flat, dolphin-populated — creates coastal atmosphere entirely different from southern surf breaks.',
        'Lovina grew as a resort area for those seeking this tranquility. The beaches have black volcanic sand. The waves are gentle enough for children. The dolphin pods appear at sunrise, drawing boats full of viewers to the pre-dawn waters. Everything moves slower.',
        'Your private chef embraces this rhythm. Service unfolds without urgency. Meals linger because there\'s nowhere to rush. The focus is on genuine flavors and peaceful enjoyment rather than spectacle. Lovina dining complements Lovina living: unhurried, authentic, deeply relaxed.'
      ],
      whyChooseSection: {
        title: 'North Coast Tranquility',
        intro: 'Lovina dining reflects the area\'s peaceful character.',
        benefits: [
          { title: 'Unhurried Service', description: 'No rush. Courses arrive when you\'re ready. Conversation flows. The evening extends naturally.' },
          { title: 'Calm Sea Seafood', description: 'Lovina\'s fishing boats work calmer waters than the south coast. Different species, different techniques, different flavors.' },
          { title: 'Buleleng Regional Cuisine', description: 'North Balinese cooking has its own traditions. Our chefs prepare regional dishes rarely found in tourist areas.' },
          { title: 'Volcanic Produce', description: 'The mountains behind Lovina produce vegetables in volcanic soil. Flavors intensify in this terrain.' },
          { title: 'Resort Integration', description: 'Damai, Puri Bagus, The Lovina — we serve the area\'s fine properties with standards matching their quality.' }
        ]
      },
      chefsSection: {
        title: 'North Bali Specialists',
        intro: 'Our Lovina chefs understand northern rhythms.',
        paragraphs: [
          'Chef Wayan Buleleng (his family name reflects the regency) has cooked exclusively in north Bali for decades. He knows which villages produce the best vegetables, which fishermen bring the finest catches, and how Buleleng cuisine differs from what tourists expect in the south.',
          'Chef Ni Ketut brought fine dining training to Lovina\'s relaxed atmosphere. She creates elegant presentations at peaceful paces — proof that quality and tranquility coexist.',
          'Chef Made serves the hot springs resort guests who combine spa treatments with private dining. His menus support wellness: light preparations, clean flavors, health-conscious options that taste genuinely delicious.'
        ],
        specializations: ['Buleleng Regional Cuisine', 'North Coast Seafood', 'Volcanic Soil Vegetables', 'Wellness-Focused Menus', 'Relaxed Pace Service', 'Resort Quality Standards', 'Multi-Day Stay Cooking']
      },
      pricingSection: {
        title: 'North Bali Value',
        intro: 'Lovina pricing reflects local economics and accessible sourcing.',
        categories: [
          { title: 'Coastal Evening (2-4)', items: ['Chef service from Rp 1,800,000', 'North coast seafood', 'Regional preparations', 'Relaxed service pace', 'Beachfront option'] },
          { title: 'Villa Retreat Service (Multi-Day)', items: ['From Rp 1,400,000 per meal', 'Daily fresh sourcing', 'Varied menus', 'Wellness options available', 'Consistent chef relationship'] }
        ]
      },
      testimonialsSection: {
        title: 'From North Bali Guests',
        testimonials: [
          { name: 'Wellness Retreat', quote: 'Spent a week at Lovina doing nothing intentionally. The private chef understood exactly what we needed — light, healthy, beautiful food with absolutely no rush. We\'d eat for three hours some nights, just talking. Perfect.', event: 'Relaxation holiday' },
          { name: 'Dolphin Tour Family', quote: 'Kids woke at 5 AM for dolphin watching, were exhausted by afternoon. The chef made early dinners they could enjoy, kept portions kid-appropriate, handled our scheduling chaos with grace. Family vacation saved.', event: 'Family trip' },
          { name: 'Repeat Lovina Visitor', quote: 'Fourth year returning to the same Lovina villa, same chef. He remembers what we liked last year, surprises us with new dishes, feels like family now. This consistency is why we come back.', event: 'Annual tradition' }
        ]
      },
      elevateVacationSection: {
        title: 'Embrace the Slow',
        paragraphs: [
          'South Bali accelerates. Lovina decelerates. Guests come here specifically for the pace reduction, for calm waters, for dolphins at dawn. Your private dining should honor this intention — nourishing rather than impressing, relaxing rather than stimulating.',
          'Tell us your rhythm. We\'ll cook accordingly.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re doing the early morning dolphin tour. Does that affect dinner timing?',
        answer: 'Dolphin tours launch around 6 AM; guests return by 8 AM typically. This doesn\'t affect dinner timing, but you might want later breakfast service instead. We can arrange flexible meal schedules around your dolphin viewing.'
      },
      {
        question: 'How does north Bali cuisine differ from what we\'d find in Seminyak or Ubud?',
        answer: 'Buleleng regency has distinct regional cooking — different spice combinations, specific local dishes, ingredients from volcanic mountain slopes. South Bali tourist areas serve adapted versions of Balinese food; Lovina serves authentic regional preparations tourists rarely encounter.'
      },
      {
        question: 'We\'re visiting the hot springs. Can dinner connect to that wellness experience?',
        answer: 'Absolutely. Many Lovina guests combine spa and hot springs with wellness dining. Our chefs prepare light, health-conscious menus that support relaxation — clean proteins, fresh vegetables, gentle preparations. Post-treatment dining feels continuous with the wellness experience.'
      },
      {
        question: 'Is Lovina worth the long drive from the airport?',
        answer: 'For guests seeking genuine tranquility, absolutely. The 2.5-hour drive discourages day-trippers, preserving Lovina\'s peaceful character. Calm seas, dolphins, hot springs, and unhurried atmosphere reward those who make the journey. Most Lovina guests stay multiple nights to justify the travel.'
      },
      {
        question: 'Can you serve multiple days during our villa stay?',
        answer: 'This is common in Lovina. Guests often book the same chef for their entire stay — dinner each evening, occasional breakfasts or lunches. Your chef learns preferences, provides variety, and becomes part of your retreat rhythm. Multi-day arrangements receive favorable rates.'
      }
    ]
  },
  candidasa: {
    name: 'Candidasa',
    slug: 'candidasa',
    tagline: 'Candidasa Private Chef: Where East Bali Reveals Its Secrets',
    description: 'Ancient Tenganan village preserves thousand-year traditions. Tirta Gangga\'s water palace flows with sacred springs. Candidasa sits at the gateway to Bali\'s cultural core, far from tourist adaptation.',
    heroDescription: 'The east coast guards Bali\'s oldest traditions. Tenganan villagers weave double-ikat textiles. Water temples distribute sacred irrigation. Your private dinner here connects to depths tourist Bali never reaches.',
    heroTitle: 'Candidasa Private Chef: East Bali\'s Cultural Gateway',
    areas: ['Candidasa Beach', 'Mendira Bay', 'Bugbug Village', 'Tenganan Border', 'Manggis Coast'],
    popularVenues: ['Amankila', 'Alila Manggis', 'The Watergarden Hotel', 'Candi Beach Resort', 'Traditional beachfront villas'],
    localInsights: 'Candidasa serves as base camp for East Bali exploration. Tenganan, the ancient Bali Aga village, preserves pre-Hindu traditions unchanged for centuries. Tirta Gangga\'s water palace demonstrates Balinese hydraulic engineering. Besakih, the mother temple, rises on Agung\'s slopes nearby. Your private chef here can connect dining to these cultural depths — regional cuisine that reflects ancient traditions.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.509167",
      "longitude": "115.561111"
    },
    extendedContent: {
      mainHeading: 'The Gateway to Ancient Bali',
      introParagraphs: [
        'East Bali preserved what tourism transformed elsewhere. Tenganan village maintains Bali Aga traditions — pre-Hindu practices, unique double-ikat textiles, ritual calendars disconnected from modern Bali. Tirta Gangga demonstrates sophisticated water engineering that sustained kingdoms. Besakih remains the island\'s spiritual center.',
        'Candidasa grew as a resort area serving those who explore these depths. The accommodations are quieter than south Bali. The visitors tend to be culturally curious rather than party-seeking. The atmosphere supports contemplation.',
        'Your private chef in Candidasa can extend this cultural immersion through cuisine. East Balinese cooking traditions differ from tourist-adapted versions. Ingredients come from volcanic slopes untouched by commercial agriculture. The regional character in every dish adds dimension to your cultural exploration.'
      ],
      whyChooseSection: {
        title: 'Cultural Depth',
        intro: 'Candidasa dining enriches East Bali exploration.',
        benefits: [
          { title: 'Regional Authenticity', description: 'East Balinese cuisine maintains distinctions lost in tourist areas. Different spices, different techniques, different flavor profiles.' },
          { title: 'Volcanic Agriculture', description: 'Mount Agung\'s slopes produce vegetables with intensified flavors. Volcanic soil creates taste depth commercial farms cannot match.' },
          { title: 'Cultural Integration', description: 'Connect dining to your day\'s explorations — Tenganan visits, temple ceremonies, water palace experiences.' },
          { title: 'Luxury Resort Standards', description: 'Amankila and Alila Manggis set expectations. Our chefs meet or exceed resort restaurant quality with private focus.' },
          { title: 'Seafood Excellence', description: 'East coast fishing villages supply fresh catches different from south Bali sources. Calmer waters, different species.' }
        ]
      },
      chefsSection: {
        title: 'East Bali Specialists',
        intro: 'Our Candidasa chefs understand the region\'s cultural and culinary depths.',
        paragraphs: [
          'Chef Wayan from Karangasem regency grew up in the shadow of Mount Agung. He learned East Balinese cooking from his grandmother, including ceremonial preparations rarely seen by tourists. His dishes connect to temple rituals and village traditions.',
          'Chef Nyoman trained at Amankila before moving to private chef work. She understands what luxury resort guests expect and delivers accordingly — elegant presentations, impeccable service, sophisticated menus — all within your private villa.',
          'Chef Ketut specializes in cultural dining experiences. He can explain the significance of ceremonial dishes, connect flavors to regional history, and create meals that extend your East Bali learning.'
        ],
        specializations: ['East Balinese Regional Cuisine', 'Volcanic Produce Specialties', 'Ceremonial Dish Preparation', 'Luxury Resort Standards', 'Cultural Integration Dining', 'Multi-Day Stay Service', 'Temple Visit Coordination']
      },
      pricingSection: {
        title: 'Cultural Experience Investment',
        intro: 'Candidasa pricing reflects regional expertise and resort-quality service.',
        categories: [
          { title: 'Cultural Dinner (2-4)', items: ['Chef service from Rp 2,400,000', 'Regional East Balinese cuisine', 'Volcanic produce featured', 'Cultural context provided', 'Private villa service'] },
          { title: 'Explorer\'s Week (Multi-Day)', items: ['From Rp 1,800,000 per meal', 'Varied daily menus', 'Coordination with day trips', 'Different regional specialties', 'Consistent chef relationship'] }
        ]
      },
      testimonialsSection: {
        title: 'From East Bali Explorers',
        testimonials: [
          { name: 'Tenganan Visitors', quote: 'Spent the day at Tenganan watching double-ikat weaving. Returned to our villa where the chef had prepared dishes he explained connected to Bali Aga traditions. The food extended what we\'d learned. Cultural immersion completed.', event: 'Cultural exploration' },
          { name: 'Amankila Guests', quote: 'We love Amankila but wanted private dining flexibility. The chef matched resort quality entirely — perhaps exceeded it, since he cooked exactly what we requested. Best of both worlds.', event: 'Luxury villa stay' },
          { name: 'Spiritual Seekers', quote: 'Water temple ceremonies, Besakih visit, Tirta Gangga meditation — deep Bali exploration. The chef\'s traditional preparations felt continuous with our spiritual journey. Food as ceremony.', event: 'Sacred Bali journey' }
        ]
      },
      elevateVacationSection: {
        title: 'Beyond the Surface',
        paragraphs: [
          'Most Bali visitors never reach the cultural depths East Bali offers. Candidasa positions you for genuine exploration — ancient villages, sacred temples, traditional ceremonies. Your private dining can extend this immersion, connecting flavor to meaning.',
          'Tell us what you\'re exploring. We\'ll create meals that deepen the experience.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re visiting Tenganan village. Can dinner connect to that experience?',
        answer: 'Absolutely. Tenganan preserves Bali Aga traditions predating Hindu influence. Your chef can prepare dishes reflecting these ancient practices, explain connections between food and Bali Aga culture, and extend your cultural immersion through dinner.'
      },
      {
        question: 'We\'re staying at Amankila. Is private chef service appropriate at such a luxury property?',
        answer: 'Many Amankila guests appreciate private dining flexibility beyond resort restaurants. Our chefs meet Aman standards while offering menu customization and exclusive attention impossible in shared dining venues. The combination enhances your stay.'
      },
      {
        question: 'What makes East Balinese cuisine different from what we\'ve tried in Seminyak?',
        answer: 'South Bali tourist areas serve adapted versions of Balinese cuisine. East Bali maintains regional authenticity — different spice ratios, specific local dishes, ingredients from volcanic slopes. The flavors are bolder, more complex, and less compromised for foreign palates.'
      },
      {
        question: 'We\'re planning temple visits including Besakih. Can meal timing accommodate early departures?',
        answer: 'Temple visits often require early starts. We coordinate with your schedule — substantial breakfasts before departure, packed lunches if appropriate, flexible dinner timing upon return. Your exploration drives the schedule; we adapt.'
      },
      {
        question: 'Is Candidasa better as a day trip or overnight stay?',
        answer: 'East Bali rewards multiple days. Tenganan, Tirta Gangga, Besakih, and other sites deserve unhurried exploration. Most guests stay three to five nights in Candidasa, allowing deep immersion. Private chef service makes extended stays comfortable and well-fed.'
      }
    ]
  },
  padangbai: {
    name: 'Padang Bai',
    slug: 'padang-bai',
    tagline: 'Padang Bai Private Chef: Harbor-Fresh, Diver-Fueled',
    description: 'Ferry horns echo across the bay. Fishing boats motor past departing fast boats. Divers surface with stories. Padang Bai operates as a working harbor — and its seafood arrives impossibly fresh.',
    heroDescription: 'The harbor never sleeps. Fishing boats dock beside ferries. Catches transfer from deck to market to your plate. Padang Bai seafood is measured in hours, not days.',
    heroTitle: 'Padang Bai Private Chef: Harbor Town Authenticity',
    areas: ['Padang Bai Harbor', 'Blue Lagoon Beach', 'Bias Tugel Secret Beach', 'Manggis Approach', 'Kusamba Salt Flats'],
    popularVenues: ['Dive resort accommodations', 'Harbor-view guesthouses', 'Blue Lagoon villas', 'Traditional bungalows', 'Backpacker-friendly lodges'],
    localInsights: 'Padang Bai functions as Bali\'s working harbor — ferries to Lombok, fast boats to Gili Islands, fishing fleet operations. The town serves travelers in transit, divers exploring Blue Lagoon, and those seeking authentic harbor atmosphere. Your private chef sources directly from fishing boats, accessing seafood fresher than any restaurant can claim.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.536111",
      "longitude": "115.504722"
    },
    extendedContent: {
      mainHeading: 'From Boat to Table in Hours',
      introParagraphs: [
        'Padang Bai is utilitarian. Ferries load vehicles for Lombok. Fast boats shuttle tourists to Gili Islands. Fishing boats return from night operations. The harbor functions around the clock, serving commerce rather than Instagram.',
        'This working character translates to exceptional seafood. Fish arrives at the harbor throughout the day. There\'s no distribution delay, no cold storage extending shelf life, no supply chain adding days. Your chef selects from catches that were swimming hours before.',
        'The diving community drives much of Padang Bai tourism. Blue Lagoon offers exceptional snorkeling; deeper sites attract serious divers. These visitors need fuel — substantial breakfasts before morning dives, recovery meals afterwards, seafood celebrations to end perfect diving days. Private chef service meets these specific requirements.'
      ],
      whyChooseSection: {
        title: 'Harbor Advantage',
        intro: 'Padang Bai\'s working harbor creates unique dining opportunities.',
        benefits: [
          { title: 'Hours-Fresh Seafood', description: 'No supply chain. Fish arrives at the harbor, transfers to your chef, reaches your plate. Time from ocean: measured in hours.' },
          { title: 'Diver Understanding', description: 'We know surface intervals, understand dive fatigue, respect scheduling constraints. Meals support underwater adventures.' },
          { title: 'Harbor Selection', description: 'Your chef walks the harbor, examines catches, selects the best. Quality control happens personally, visually, immediately.' },
          { title: 'Authentic Atmosphere', description: 'Padang Bai hasn\'t prettified for tourism. The working harbor character remains. Dining here feels real.' },
          { title: 'Transit Hub Flexibility', description: 'Catching early ferries? Returning late from Gili trips? We coordinate with travel schedules.' }
        ]
      },
      chefsSection: {
        title: 'Harbor Town Cooks',
        intro: 'Our Padang Bai chefs know the harbor\'s rhythms.',
        paragraphs: [
          'Chef Wayan has worked Padang Bai since before fast boats arrived. He knows which fishing boats are careful with their catches, which captains have the best spots, and when different species come ashore. His selection skills equal his cooking.',
          'Chef Made specializes in diver nutrition. She understands protein needs, hydration requirements, and timing constraints. Her menus fuel underwater adventure while satisfying post-dive appetites.',
          'Chef Ketut handles the transit crowd — guests passing through en route to Lombok or Gili. He creates memorable meals for short stays, proving that even one night in Padang Bai can include exceptional dining.'
        ],
        specializations: ['Harbor Catch Selection', 'Diver Nutrition', 'Ultra-Fresh Seafood', 'Transit Scheduling', 'Blue Lagoon Area Service', 'Simple Preparations Highlighting Freshness', 'Working Harbor Sourcing']
      },
      pricingSection: {
        title: 'Harbor Town Value',
        intro: 'Padang Bai pricing reflects direct sourcing and practical atmosphere.',
        categories: [
          { title: 'Harbor Fresh Dinner (2-4)', items: ['Chef service from Rp 1,800,000', 'Morning catch selection', 'Simple preparation highlighting freshness', 'Diver-friendly timing', 'Authentic harbor experience'] },
          { title: 'Dive Trip Package', items: ['Chef service from Rp 1,400,000 per meal', 'Pre-dive breakfast', 'Post-dive dinner', 'Flexible scheduling', 'Protein-focused recovery menus'] }
        ]
      },
      testimonialsSection: {
        title: 'From Harbor Visitors',
        testimonials: [
          { name: 'Dive Trip Leader', quote: 'Six divers, five days in Padang Bai. The chef kept everyone fueled — substantial breakfasts before morning dives, seafood feasts at night. The fish was caught that day; you could taste it. Perfect dive trip support.', event: 'Diving expedition' },
          { name: 'Gili Transit', quote: 'Overnight in Padang Bai before our fast boat to Gili. Expected nothing special. The private dinner on Blue Lagoon terrace with just-caught fish was a highlight of the entire trip. Unexpected perfection.', event: 'Transit surprise' },
          { name: 'Seafood Purists', quote: 'We came specifically for the harbor\'s fresh seafood reputation. The chef walked us through the morning catch selection. Watching him choose our dinner, then eating it hours later — this is why we travel for food.', event: 'Culinary research' }
        ]
      },
      elevateVacationSection: {
        title: 'Working Harbor, Exceptional Dining',
        paragraphs: [
          'Padang Bai lacks Seminyak\'s polish or Ubud\'s spirituality. Its charm is authentic function — a working harbor that happens to produce incredibly fresh seafood. Private chef service captures this advantage, turning utilitarian setting into culinary opportunity.',
          'Tell us your schedule. We\'ll work around your boats, dives, and travels.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re catching an early ferry to Lombok. Can you do pre-departure breakfast?',
        answer: 'Absolutely. Early ferries depart around 6 AM; we can serve breakfast from 4:30 AM if needed. Substantial meals to fuel your travel day, prepared and cleared efficiently for your schedule. We handle transit-day logistics regularly.'
      },
      {
        question: 'We\'re divers with serious appetites. Can portions handle post-dive hunger?',
        answer: 'Diver feeding is our specialty in Padang Bai. Portions are generous. Proteins are emphasized. Recovery nutrition is considered. Nobody surfaces hungry and stays that way. Your appetite will be satisfied.'
      },
      {
        question: 'Can we actually watch our dinner being selected from the harbor catch?',
        answer: 'Yes — this is a memorable experience we can arrange. Join your chef at the harbor when fishing boats return. Watch the selection process. Understand where your meal originated. Then enjoy it hours later on your terrace.'
      },
      {
        question: 'Is Blue Lagoon beach area served, or just the main harbor?',
        answer: 'We serve Blue Lagoon Beach, Bias Tugel, and all Padang Bai areas. Blue Lagoon accommodations often have excellent terrace dining setups. The harbor remains the sourcing hub regardless of where you\'re staying.'
      },
      {
        question: 'We\'re only in Padang Bai one night before moving on. Is private chef worth it?',
        answer: 'Many guests are transit visitors — one night en route elsewhere. That single dinner can be exceptional. Harbor-fresh seafood served on your terrace creates memories despite short stays. We make transit nights worthwhile.'
      }
    ]
  },
  bukit: {
    name: 'Bukit Peninsula',
    slug: 'bukit',
    tagline: 'Bukit Private Chef: Clifftop Drama, World-Class Surf, Unforgettable Dinners',
    description: 'Limestone cliffs plunge to churning ocean. Legendary surf breaks pulse below. Ultra-luxury resorts perch on precipices. The Bukit delivers Bali\'s most dramatic settings — and demands dining to match.',
    heroDescription: 'Sheer cliffs drop to crashing waves. Surfers dot the lineup at Bingin. The sun descends into infinite ocean. This is where Bali gets vertical — and where private dining becomes theater.',
    heroTitle: 'Bukit Private Chef: Where Bali Drops Away',
    areas: ['Balangan Beach Zone', 'Bingin Cliffs', 'Dreamland Area', 'Impossibles Coast', 'Padang Padang Shores'],
    popularVenues: ['Six Senses Uluwatu', 'Bulgari Resort', 'Anantara Uluwatu', 'Private clifftop villas', 'Surf compound accommodations'],
    localInsights: 'The Bukit Peninsula is geologically different from the rest of Bali — limestone rather than volcanic, cliffs rather than beaches, surf rather than stillness. The landscape demands attention. Ultra-luxury resorts recognized this drama; world-class surfers chase the waves. Your private chef here creates dining that honors the setting\'s intensity.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.800000",
      "longitude": "115.150000"
    },
    extendedContent: {
      mainHeading: 'Where the Island Gets Dramatic',
      introParagraphs: [
        'The Bukit Peninsula is Bali\'s geological exclamation point. Limestone cliffs rise from crashing ocean. Legendary surf breaks — Uluwatu, Bingin, Impossibles, Padang Padang — draw riders from everywhere. The terrain is rugged, the access often challenging, the views consistently spectacular.',
        'Two communities coexist here: luxury travelers and serious surfers. Five-star resorts perch on clifftops; surf camps cluster near the breaks. Both demand excellent food — the resorts for elegance, the surfers for fuel. Private chef service bridges these worlds.',
        'Your dinner on the Bukit commands drama. Cliff-edge tables overlook the lineup. Sunset paints the ocean as courses arrive. The setting does much of the work; your chef completes it with food worthy of the view.'
      ],
      whyChooseSection: {
        title: 'Drama and Delivery',
        intro: 'The Bukit\'s challenges are also its advantages.',
        benefits: [
          { title: 'Unmatched Settings', description: 'Clifftop terraces, ocean infinities, sunset performances. No area in Bali offers more dramatic dining backdrops.' },
          { title: 'Surf Understanding', description: 'We know dawn patrol schedules, understand surf hunger, time meals around swells. Surfers eat differently; we adapt.' },
          { title: 'Luxury Standards', description: 'Six Senses, Bulgari, Anantara set expectations. Our chefs meet or exceed resort restaurant quality with private focus.' },
          { title: 'Access Expertise', description: 'Bukit roads challenge. Cliff access varies. Our chefs know the terrain, plan logistics, arrive prepared.' },
          { title: 'Occasion Perfection', description: 'Proposals, anniversaries, milestone moments — the Bukit provides the backdrop; we provide the meal that completes it.' }
        ]
      },
      chefsSection: {
        title: 'Peninsula Specialists',
        intro: 'Our Bukit chefs understand the peninsula\'s dual personality.',
        paragraphs: [
          'Chef Wayan serves the luxury resort guests who expect Bulgari-level quality. His plating is architectural. His service disappears until needed. His understanding of fine dining translates perfectly to private clifftop settings.',
          'Chef Made fuels the surf community. He knows what bodies need after hours in the water. His portions are generous, his timing flexible around swell windows, his understanding of surf culture genuine.',
          'Chef Nyoman orchestrates special occasions. He\'s plated proposaal dinners as partners said yes against sunset. He\'s served anniversary meals that couples still reference years later. The Bukit\'s drama meets his attention to emotional detail.'
        ],
        specializations: ['Clifftop Dining Service', 'Surf Athlete Nutrition', 'Luxury Resort Standards', 'Special Occasion Orchestration', 'Challenging Access Navigation', 'Sunset Timing Expertise', 'Multi-Villa Compound Service']
      },
      pricingSection: {
        title: 'Peninsula Investment',
        intro: 'Bukit pricing reflects spectacular settings and access logistics.',
        categories: [
          { title: 'Clifftop Romance (2)', items: ['Chef service from Rp 3,200,000', 'Sunset-timed service', 'Elegant multi-course progression', 'Spectacular backdrop integration', 'Complete occasion orchestration'] },
          { title: 'Surf Villa Feast (6-10)', items: ['Chef service from Rp 4,800,000', 'Substantial portions', 'Flexible timing', 'Post-surf recovery focus', 'Group energy matching'] }
        ]
      },
      testimonialsSection: {
        title: 'From the Cliffs',
        testimonials: [
          { name: 'Cliff Proposal', quote: 'Asked her to marry me on a Bingin cliff as the sun set. The chef had orchestrated everything perfectly — champagne chilled, dinner appearing at exactly the right moment. She said yes with the ocean crashing below. Couldn\'t have imagined it better.', event: 'Engagement' },
          { name: 'Pro Surfer Group', quote: 'Ten days chasing Bukit swells. The chef understood surfer hunger — massive portions, perfect timing, fuel that worked. We surfed harder knowing dinner was handled. Next trip, same chef.', event: 'Surf expedition' },
          { name: 'Six Senses Guests', quote: 'We stayed at Six Senses but wanted one special dinner in a private clifftop villa. The chef matched resort quality while giving us complete privacy and customization. The Bukit sunset did the rest.', event: 'Luxury escape' }
        ]
      },
      elevateVacationSection: {
        title: 'The Setting Demands the Meal',
        paragraphs: [
          'Bukit cliffs create expectations. The drama of the landscape, the quality of the resorts, the intensity of the surf — everything here operates at elevated levels. Private dining should match. We ensure it does.',
          'Tell us your Bukit vision. We\'ll orchestrate dinner worthy of it.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Our villa has challenging cliff access. How do you manage?',
        answer: 'Bukit access varies dramatically — some villas require four-wheel drive, others long stair descents. We assess during booking, plan appropriate logistics, and arrive fully prepared. Our chefs know the peninsula\'s terrain intimately.'
      },
      {
        question: 'We\'re surfers who eat differently than typical villa guests. Can you accommodate?',
        answer: 'Surf nutrition is our Bukit specialty. Early dawn patrol breakfasts. Generous post-session refueling. Timing flexible around swell windows. We understand what paddling bodies need and deliver accordingly.'
      },
      {
        question: 'We want a proposal dinner timed perfectly with sunset. Is this possible?',
        answer: 'Proposal orchestration is something we excel at on the Bukit. We check sunset timing for your date, coordinate service around the moment, and ensure everything aligns — champagne, ring reveal, emotional timing. The cliff drama does the rest.'
      },
      {
        question: 'We\'re staying at Bulgari/Six Senses but want private villa dinner elsewhere. Can you help?',
        answer: 'This is common. Guests staying at luxury resorts want one special evening in a private setting. We can recommend stunning clifftop villas available for dinner rental, or serve you at a friend\'s property. The resort-level quality travels with us.'
      },
      {
        question: 'Is the Bukit suitable for family dining, or is it more for couples?',
        answer: 'Both work wonderfully. The dramatic settings create memorable family experiences, not just romantic ones. Children love watching surfers; adults appreciate the views. We adapt service style and menu for family dynamics. The Bukit works for any group composition.'
      }
    ]
  },
  ungasan: {
    name: 'Ungasan',
    slug: 'ungasan',
    tagline: 'Ungasan Private Chef: Ultra-Luxury, Complete Discretion',
    description: 'Gated estate entrances. Security protocols. Staff quarters. The mega-villas of Ungasan cater to guests for whom privacy isn\'t preference — it\'s requirement. Our chefs operate at this level seamlessly.',
    heroDescription: 'Compounds designed for billionaires. Multi-bedroom estates with dedicated staff. The southern cliff\'s most exclusive addresses. Ungasan dining matches the rarefied atmosphere.',
    heroTitle: 'Ungasan Private Chef: Where Ultra-Luxury Meets Privacy',
    areas: ['Ungasan Clifftops', 'Karma Kandara Zone', 'Pandawa Beach Cliffs', 'Gunung Payung Area', 'Southern Estate Corridor'],
    popularVenues: ['Karma Kandara', 'Jumana Bali Ungasan', 'AYANA Segara', 'Private mega-estates', 'Gated compound villas'],
    localInsights: 'Ungasan attracts guests who measure accommodation in staff count rather than bedroom count. The mega-villas here are compounds — private pools, dedicated staff quarters, security perimeters. Guests include celebrities, billionaires, and privacy-demanding travelers. Your private chef in Ungasan operates within this ecosystem, matching five-star quality with complete discretion.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.835000",
      "longitude": "115.167500"
    },
    extendedContent: {
      mainHeading: 'Discreet Excellence',
      introParagraphs: [
        'Ungasan\'s mega-villas exist for a specific clientele: guests who require compound-level privacy, dedicated staff, and standards that exceed luxury resorts. The properties here aren\'t merely expensive — they\'re designed for people whose presence creates attention they wish to avoid.',
        'Our chefs serving Ungasan understand this context. Discretion is fundamental, not optional. Service appears and disappears without intrusion. Dietary requirements are met without discussion. The quality is exceptional; the presence is invisible.',
        'Many Ungasan estates come with their own kitchen staff. We supplement or replace these arrangements when guests require culinary talent beyond household capacity. The coordination happens professionally, seamlessly, and without creating awkwardness among existing staff.'
      ],
      whyChooseSection: {
        title: 'Ultra-Luxury Standards',
        intro: 'Ungasan service operates at the highest levels.',
        benefits: [
          { title: 'Complete Discretion', description: 'No photos. No social media. No discussions of clientele. Privacy is absolute and assumed.' },
          { title: 'Estate Integration', description: 'We coordinate with existing villa staff, butlers, and household managers. Seamless addition to estate operations.' },
          { title: 'Celebrity Experience', description: 'Our top chefs have served high-profile guests. Nothing surprises them. Standards never slip.' },
          { title: 'Multi-Day Residency', description: 'Extended stays in mega-estates often require a chef in residence. We provide ongoing excellence.' },
          { title: 'Dietary Precision', description: 'Complex requirements — allergies, preferences, religious observances — are handled invisibly and perfectly.' }
        ]
      },
      chefsSection: {
        title: 'Trusted at the Highest Levels',
        intro: 'Our Ungasan chefs have served guests whose names you\'d recognize.',
        paragraphs: [
          'Chef Andre spent a decade in international luxury hotels before moving to private service. His client list includes names that would breach confidentiality to mention. His cooking is exceptional; his discretion is absolute.',
          'Chef Nyoman manages multi-week residencies for returning Ungasan guests. Some families book her annually; she remembers preferences from previous years. The continuity creates comfort that money cannot otherwise purchase.',
          'Chef Wayan coordinates with estate staff seamlessly. Many mega-villas have household kitchens with existing staff; he integrates without creating hierarchy conflicts. The collaboration elevates everyone\'s work.'
        ],
        specializations: ['Ultra-High-Net-Worth Service', 'Celebrity Discretion', 'Estate Staff Integration', 'Multi-Week Residencies', 'Complex Dietary Requirements', 'Private Event Catering', 'Invisible Excellence']
      },
      pricingSection: {
        title: 'Ultra-Luxury Investment',
        intro: 'Ungasan pricing reflects exceptional standards and discretion requirements.',
        categories: [
          { title: 'Estate Dinner Service', items: ['Chef service from Rp 4,500,000', 'Complete discretion', 'Staff integration', 'Exceptional quality', 'Professional invisibility'] },
          { title: 'Residence Week (Chef-in-Villa)', items: ['From Rp 3,500,000 per day', 'Daily breakfast, lunch, dinner', 'Kitchen management', 'Market shopping included', 'Complete dining solution'] }
        ]
      },
      testimonialsSection: {
        title: 'From Estate Guests',
        testimonials: [
          { name: 'Verified Discretion', quote: 'I cannot share details about who I am or the event, but I can confirm: the chef\'s discretion matched the culinary excellence. Both were exceptional. That combination is rare and worth compensating accordingly.', event: 'Confidential' },
          { name: 'Annual Family Return', quote: 'Same Ungasan estate, same chef, fifth year running. The children expect her. She remembers their favorites from last summer. This consistency justifies the annual booking months in advance.', event: 'Family tradition' },
          { name: 'Event Host', quote: 'Forty guests over three days at our compound. The chef managed kitchen staff, coordinated with our events team, and delivered flawlessly. Nobody knew what was happening behind the scenes — exactly as required.', event: 'Multi-day gathering' }
        ]
      },
      elevateVacationSection: {
        title: 'Excellence Without Attention',
        paragraphs: [
          'Ungasan mega-estates attract guests who appreciate excellence but avoid attention. Your private chef operates within this expectation — exceptional quality delivered with professional invisibility. The focus remains on your experience, not on those providing it.',
          'Contact us through your estate manager or directly. Either works; discretion applies regardless.'
        ]
      }
    },
    faqItems: [
      {
        question: 'Our estate has existing kitchen staff. How does private chef service integrate?',
        answer: 'Seamlessly. Our chef coordinates with your household staff rather than displacing them. We can work alongside existing cooks, manage the kitchen while they assist, or operate independently. The approach adapts to your estate\'s staffing structure and your preferences.'
      },
      {
        question: 'What level of service do you provide in Ungasan?',
        answer: 'Five-star excellence. Ungasan clients expect impeccable service - premium ingredients (wagyu, seafood towers, truffles), sophisticated presentations, wine pairings, professional front-of-house staff. We meet and exceed luxury resort dining standards.'
      },
      {
        question: 'Can you handle VIP and celebrity clients?',
        answer: 'Absolutely. Our Ungasan team is experienced with high-profile guests. We sign NDAs, coordinate with security, maintain complete confidentiality, and provide seamless service that respects privacy. Your identity and event details remain completely protected.'
      },
      {
        question: 'Do you work with Karma Kandara and AYANA?',
        answer: 'Yes! We regularly serve private villas at Karma Kandara, AYANA Segara, Jumana, and other luxury properties. We\'re familiar with their standards, access procedures, and coordination requirements. Service is effortlessly professional.'
      },
      {
        question: 'Can you provide full event staffing in Ungasan?',
        answer: 'Yes! For Ungasan events, we provide complete teams - executive chefs, sous chefs, waitstaff, bartenders, sommeliers. We coordinate table design, florals, lighting, and all elements for flawless private events worthy of Ungasan\'s exceptional settings.'
      }
    ]
  },
  pecatu: {
    name: 'Pecatu',
    slug: 'pecatu',
    tagline: 'Pecatu Private Chef: Surf Culture Meets Sunset Spectacle',
    description: 'Single Fin\'s cliff-edge crowd watches the lineup below. Padang Padang barrels peel toward shore. The sun descends in colors that seem exaggerated. Pecatu is where surf culture and sunset worship intersect.',
    heroDescription: 'The surf breaks rank among the world\'s best. The sunsets rank among the world\'s most photographed. Pecatu earned both reputations — and your private dining participates in the ritual.',
    heroTitle: 'Pecatu Private Chef: Surf, Sunset, Satisfaction',
    areas: ['Pecatu Indah Residential', 'Single Fin Cliff Zone', 'Suluban Beach Access', 'Padang Padang Surrounds', 'New Kuta Golf Estates'],
    popularVenues: ['Six Senses Uluwatu', 'Renaissance Bali Uluwatu', 'Cliff-edge surf villas', 'Single Fin area accommodations', 'Golf course estates'],
    localInsights: 'Pecatu exists because of two facts: the surf breaks are legendary, and the sunsets are theatrical. Uluwatu, Padang Padang, Suluban — the names mean something to surfers globally. Single Fin Bali became iconic for its cliff perch overlooking the lineup. Your private chef here serves both tribes: the surfers who need fuel and the sunset watchers who need beauty.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.815278",
      "longitude": "115.105278"
    },
    extendedContent: {
      mainHeading: 'Where the Waves End and Dinner Begins',
      introParagraphs: [
        'Pecatu\'s identity is simple: world-class waves and world-class sunsets. Surfers plan entire trips around Uluwatu\'s left-handers and Padang Padang\'s barrels. Non-surfers discover that watching both surf and sunset from Pecatu\'s cliffs is equally compelling.',
        'Single Fin Bali became famous for its perch — drinks on a cliff, watching surfers work the break below, sun descending into the Indian Ocean. The formula works. Pecatu grew around it, adding surf villas, boutique hotels, and accommodations serving both communities.',
        'Your private chef here serves this dual culture. Surf trip groups need substantial fuel — pre-dawn breakfasts, post-session recovery, hearty dinners. Sunset romantics need timing perfection — courses arriving as colors shift, dessert under emerging stars. We handle both beautifully.'
      ],
      whyChooseSection: {
        title: 'Dual Culture Service',
        intro: 'Pecatu demands understanding of both surf and sunset.',
        benefits: [
          { title: 'Surfer Nutrition', description: 'Dawn patrol breakfasts before the lineup. Post-surf protein. Hydration support. We understand paddling bodies.' },
          { title: 'Sunset Choreography', description: 'Golden hour appetizers. Main course as colors peak. Dessert under stars. Timing perfected.' },
          { title: 'Group Handling', description: 'Surf trips mean 8-15 people with varied diets. We serve large groups efficiently without losing quality.' },
          { title: 'Casual Elegance', description: 'Pecatu vibe is laid-back but not careless. Food should feel relaxed yet be genuinely excellent.' },
          { title: 'Cliff Access', description: 'Pecatu accommodations often involve stairs, cliff paths, and logistical challenges. We navigate them.' }
        ]
      },
      chefsSection: {
        title: 'Surf and Sunset Specialists',
        intro: 'Our Pecatu chefs understand both communities.',
        paragraphs: [
          'Chef Made surfs. He paddles out before work on good days. His understanding of what surfers need isn\'t theoretical — he\'s fueling his own sessions with his own cooking. The portions are generous because he knows they need to be.',
          'Chef Nyoman doesn\'t surf but has perfected sunset timing. She\'s served thousands of clifftop dinners timed to the light. Her sense of when to plate, when to serve, when to disappear is intuitive after years of practice.',
          'Chef Wayan handles large groups — the ten-person surf trips, the family reunions, the villa gatherings. His kitchen organization and service coordination keep chaos contained while quality remains high.'
        ],
        specializations: ['Surf Athlete Nutrition', 'Sunset Timing Mastery', 'Large Group Service', 'Casual Elegance Plating', 'Cliff Access Logistics', 'Post-Surf Recovery Meals', 'Golden Hour Choreography']
      },
      pricingSection: {
        title: 'Surf & Sunset Value',
        intro: 'Pecatu pricing reflects the dual demands of athletes and aesthetes.',
        categories: [
          { title: 'Surf Group Dinner (6-12)', items: ['Chef service from Rp 3,400,000', 'Generous portions', 'Flexible scheduling', 'Diverse dietary handling', 'Post-session recovery focus'] },
          { title: 'Sunset Romance (2)', items: ['Chef service from Rp 2,800,000', 'Sunset-timed service', 'Cliff-view integration', 'Multi-course elegance', 'Golden hour to starlight'] }
        ]
      },
      testimonialsSection: {
        title: 'From Pecatu Guests',
        testimonials: [
          { name: 'Surf Trip Crew', quote: 'Eight guys, seven days, Uluwatu every session. The chef understood surfer hunger — huge portions, perfect timing, fuel that actually worked. Best-fed surf trip any of us had experienced. We paddled harder knowing dinner was handled.', event: 'Surf expedition' },
          { name: 'Honeymoon Couple', quote: 'Married at sunset in Pecatu, then private dinner as the stars emerged. The chef had timed everything to the light — appetizers during golden hour, toasts as the sun touched water, main course as colors faded. Magic.', event: 'Wedding night' },
          { name: 'Single Fin Regulars', quote: 'We stay in Pecatu annually for the sunsets. This year we skipped Single Fin crowds for private villa dining. Same cliff views, better food, no sharing with strangers. Upgrade discovered.', event: 'Annual tradition' }
        ]
      },
      elevateVacationSection: {
        title: 'Fuel for Both Passions',
        paragraphs: [
          'Pecatu serves two passions: riding waves and watching sunsets. Your private chef supports both — substantial meals for active bodies, beautiful meals for aesthetic moments. The laid-back vibe doesn\'t mean the food is casual. Excellence fits the setting.',
          'Tell us your schedule. We\'ll work around the swell forecast.'
        ]
      }
    },
    faqItems: [
      {
        question: 'We\'re a surf trip group with different diets. Can you handle vegetarians alongside hungry carnivores?',
        answer: 'This is common on surf trips. We prepare varied options within the same meal — substantial proteins for meat-eaters, equally satisfying plant-based options for vegetarians. Everyone eats well; nobody compromises. The sharing-style service works for mixed groups.'
      },
      {
        question: 'Can you do pre-dawn breakfast before Uluwatu sessions?',
        answer: 'Absolutely. Dawn patrol at Uluwatu means being in the water by 6 AM. We can serve substantial breakfast starting from 4:30 AM — the fuel surfers need before paddling out. Timing works around your session schedule, not ours.'
      },
      {
        question: 'We want sunset dinner but aren\'t staying at a clifftop villa. Options?',
        answer: 'Many Pecatu guests at non-cliff accommodations arrange one special sunset dinner at a property with views. We can recommend villas available for evening rental, or coordinate with your accommodation for the best sunset vantage. The timing magic travels.'
      },
      {
        question: 'What distinguishes Pecatu from other Bukit areas for dining?',
        answer: 'Pecatu combines surf culture and sunset culture more intensely than neighboring areas. The vibe is laid-back but passionate. Food should feel casual yet be genuinely good — not resort formal, not backpacker basic. Our service matches this specific energy.'
      },
      {
        question: 'We\'re staying near Single Fin. How does villa service compare to the bar?',
        answer: 'Single Fin is great for crowds and atmosphere. Private villa dining offers the same cliff views without sharing. Better food, complete customization, your own schedule. Many Single Fin fans discover private chef service as an upgrade for special occasions.'
      }
    ]
  }
};

export const CITY_LIST = Object.values(CITY_DATA);
