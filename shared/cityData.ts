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
  extendedContent?: {
    mainHeading: string;
    paragraphs: string[];
  };
  coordinates: {
    "@type": "GeoCoordinates";
    "latitude": string;
    "longitude": string;
  };
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
}

export const CITY_DATA: Record<string, CityData> = {
  seminyak: {
    name: 'Seminyak',
    slug: 'seminyak',
    tagline: 'Private Chef Services in Seminyak - Luxury Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Seminyak. Background-checked chefs deliver personalized culinary experiences in your luxury villa.',
    heroDescription: 'Experience world-class private dining in your Seminyak villa with professionally trained chefs',
    areas: ['Seminyak Beach', 'Oberoi', 'Kayu Aya', 'Petitenget', 'Dhyana Pura'],
    popularVenues: ['The Legian Seminyak', 'W Bali', 'The Oberoi Beach Resort', 'Alila Seminyak', 'Potato Head Beach Club area villas'],
    localInsights: 'Seminyak is Bali\'s upscale beach resort area known for luxury villas, high-end dining, and sophisticated nightlife. Our chefs specialize in contemporary fusion cuisine, fresh seafood, and international fine dining perfect for Seminyak\'s cosmopolitan atmosphere.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.692067",
      "longitude": "115.172882"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Seminyak?',
        answer: 'Yes! We serve all Seminyak areas including Seminyak Beach, Oberoi, Kayu Aya, Petitenget, and Dhyana Pura. Our chefs are familiar with every villa complex and can reach you within 15-20 minutes. We work with The Legian, W Bali, Alila, and hundreds of private villas.'
      },
      {
        question: 'What cuisines are most popular in Seminyak?',
        answer: 'Seminyak clients love contemporary fusion, fresh seafood (grilled lobster, sashimi platters), premium steaks, Italian fine dining, and upscale Asian fusion. Our chefs excel at sophisticated multi-course tasting menus perfect for Seminyak\'s cosmopolitan vibe.'
      },
      {
        question: 'How far in advance should I book in Seminyak during peak season?',
        answer: 'Seminyak is Bali\'s busiest area, especially June-September and December-January. Book 2-3 weeks ahead during peak season for best chef selection. For holidays (Christmas, New Year, Valentine\'s Day), book 4 weeks early. Last-minute requests often possible - just contact us!'
      },
      {
        question: 'Can you accommodate large villa parties in Seminyak?',
        answer: 'Absolutely! Seminyak is famous for villa parties. We regularly cater events for 2-50+ guests. For parties over 15 people, we provide additional chefs and service staff (waiters, bartenders, sommeliers). We can coordinate with event planners for full beach club-style experiences.'
      },
      {
        question: 'Do you work with Seminyak beach clubs and venues?',
        answer: 'Yes! While we specialize in private villa dining, we can coordinate with Seminyak beach clubs and venues for hybrid events. We\'ve worked with properties near Potato Head, Ku De Ta, and La Plancha for special villa + beach club celebrations.'
      },
      {
        question: 'What\'s the typical dinner service time in Seminyak?',
        answer: 'Seminyak guests typically dine 7-9 PM after beach club sunset hours. Chefs usually arrive 4-6 PM to prepare (or 2 hours earlier if shopping). Late-night dining available - some clients prefer 9-11 PM service after nightlife. We adapt to your schedule!'
      },
      {
        question: 'Can you source premium ingredients for Seminyak events?',
        answer: 'Yes! Seminyak clients often request premium ingredients - imported wagyu beef, fresh lobster, oysters, truffle, caviar, premium wines. We have connections with Bali\'s best suppliers and can source luxury ingredients. Costs vary - we provide transparent pricing upfront.'
      },
      {
        question: 'Are your chefs familiar with Seminyak villa kitchens?',
        answer: 'Absolutely! Our chefs have worked in hundreds of Seminyak villas - from compact beach villa kitchens to massive luxury estate kitchens. They know the equipment standards, space limitations, and workarounds for every villa type. We assess during booking to ensure smooth service.'
      },
      {
        question: 'Can you handle special dietary needs for Seminyak wellness retreats?',
        answer: 'Yes! Seminyak has a growing wellness community. Our chefs are experienced with detox programs, juice cleanses, raw food, alkaline diets, and medical dietary restrictions. We can create sophisticated wellness menus that don\'t compromise on flavor or presentation.'
      }
    ]
  },
  canggu: {
    name: 'Canggu',
    slug: 'canggu',
    tagline: 'Private Chef Services in Canggu - Beachfront Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Canggu. Background-checked chefs deliver personalized culinary experiences in your beachfront villa.',
    heroDescription: 'Enjoy healthy, vibrant cuisine in your Canggu villa with expert private chefs',
    areas: ['Echo Beach', 'Batu Bolong', 'Berawa', 'Pererenan', 'Nelayan'],
    popularVenues: ['The Lawn Canggu', 'Como Uma Canggu', 'Tugu Bali Hotel', 'Luxury surf villas', 'Echo Beach area villas'],
    localInsights: 'Canggu is Bali\'s trendy surf and wellness hub with a laid-back beach vibe. Our chefs specialize in healthy bowls, fresh juices, organic ingredients, plant-based options, and casual beachside dining that matches Canggu\'s wellness-focused lifestyle.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.648892",
      "longitude": "115.138206"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Canggu?',
        answer: 'Yes! We serve all Canggu areas including Echo Beach, Batu Bolong, Berawa, Pererenan, Nelayan, and Umalas. Our chefs know every surf villa, rice field hideaway, and beachfront property. We navigate Canggu\'s unique road network with ease!'
      },
      {
        question: 'What cuisines are most popular in Canggu?',
        answer: 'Canggu is all about healthy, vibrant food! Clients love acai bowls, smoothie bowls, organic salads, fresh poke, plant-based dishes, and casual beach-style dining. We also excel at BBQs, fresh seafood, Indonesian comfort food, and creative fusion bowls.'
      },
      {
        question: 'Can you cater to vegan and plant-based diets in Canggu?',
        answer: 'Absolutely! Canggu has Bali\'s strongest wellness and vegan community. Our chefs are experts in plant-based fine dining, raw food, creative vegan cuisine, and nutritious bowl meals using local organic ingredients. We make plant-based food exciting and Instagram-worthy!'
      },
      {
        question: 'Do you work with surf villas and coliving spaces in Canggu?',
        answer: 'Yes! We regularly serve surf villas, coliving spaces like Outpost and Dojo, and beachfront properties. Perfect for post-surf breakfast groups, casual BBQ lunches, family-style dinners, or meal prep for digital nomads. We understand Canggu\'s unique lifestyle!'
      },
      {
        question: 'Can you source organic ingredients in Canggu?',
        answer: 'Absolutely! Canggu is surrounded by organic farms and has excellent health food markets. Our chefs source from local organic suppliers, farmers markets (Samadi Sunday Market), and specialty stores. You get the freshest, healthiest ingredients Bali offers.'
      },
      {
        question: 'What\'s the typical meal schedule for Canggu bookings?',
        answer: 'Canggu runs on surfer/digital nomad time! Popular times: Early breakfast (6-7 AM) post-surf, brunch (10 AM-12 PM), late lunch (2-3 PM), and dinner (7-9 PM). Many clients also request meal prep services - we cook 3-5 days of healthy meals in one session.'
      },
      {
        question: 'How do you handle Canggu traffic during service?',
        answer: 'Canggu traffic is legendary! Our chefs are locals who know all the shortcuts and back roads. We factor in extra time for ingredient shopping and arrival, especially during peak hours (4-7 PM). Booking 2 hours early for shopping helps avoid delays.'
      },
      {
        question: 'Can you do casual beach BBQ-style dining in Canggu?',
        answer: 'Yes! This is perfect for Canggu\'s laid-back vibe. We do amazing beach-style BBQs - grilled seafood, satay skewers, fresh salads, corn on the cob, and tropical fruit platters. Casual, fun, shareable food perfect for villa gatherings or surf house dinners.'
      },
      {
        question: 'Do you cater to large groups in Canggu villas?',
        answer: 'Absolutely! Canggu has many large surf villas and group accommodations. We regularly serve 10-20+ guests for birthdays, retreats, or group celebrations. We can provide family-style service or plated dining, plus additional staff for larger events.'
      }
    ]
  },
  ubud: {
    name: 'Ubud',
    slug: 'ubud',
    tagline: 'Private Chef Services in Ubud - Jungle Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Ubud. Background-checked chefs deliver personalized culinary experiences in your jungle villa retreat.',
    heroDescription: 'Savor organic, farm-to-table cuisine in your Ubud jungle villa with expert private chefs',
    areas: ['Ubud Center', 'Tegallalang', 'Penestanan', 'Sayan', 'Campuhan'],
    popularVenues: ['Four Seasons Sayan', 'Viceroy Bali', 'Hanging Gardens', 'Bambu Indah', 'Private jungle villas'],
    localInsights: 'Ubud is Bali\'s cultural and spiritual heart, surrounded by rice terraces and rainforest. Our chefs specialize in organic farm-to-table cuisine, traditional Balinese dishes, vegetarian fine dining, and wellness-focused meals using ingredients from local organic farms.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.508830",
      "longitude": "115.263214"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Ubud?',
        answer: 'Yes! We serve all Ubud areas including Ubud Center, Tegallalang, Penestanan, Sayan, Campuhan, and remote jungle villas. Our chefs are experienced navigating Ubud\'s winding roads and can reach you within 20-30 minutes from central Ubud, longer for very remote locations.'
      },
      {
        question: 'What cuisines are most popular in Ubud?',
        answer: 'Ubud is Bali\'s wellness capital! Clients love organic farm-to-table cuisine, traditional Balinese dishes (babi guling, lawar, bebek betutu), vegetarian fine dining, raw food, ayurvedic meals, and spiritual wellness menus. Authentic Balinese cooking classes also popular!'
      },
      {
        question: 'Can you source ingredients from Ubud\'s organic farms?',
        answer: 'Absolutely! This is Ubud\'s superpower. Our chefs have direct relationships with local organic farmers, Pasar Ubud traditional market, and specialty suppliers. We source the freshest organic vegetables, herbs, rice, spices, and rare ingredients unavailable elsewhere in Bali.'
      },
      {
        question: 'Do you accommodate spiritual and wellness dietary needs?',
        answer: 'Yes! Ubud attracts yoga retreats, meditation groups, and spiritual seekers. Our chefs excel at sattvic diets, ayurvedic principles, vegan fine dining, raw food, juice cleanses, and completely customized wellness menus. We understand the spiritual approach to food.'
      },
      {
        question: 'Can you teach Balinese cooking in Ubud?',
        answer: 'Absolutely! Ubud is perfect for cooking experiences. Our chefs can offer interactive Balinese cooking sessions - market visits, spice grinding, traditional techniques, and hands-on preparation of dishes like lawar, satay, and sambal. Educational and delicious!'
      },
      {
        question: 'How do you handle remote jungle villa locations?',
        answer: 'Our Ubud chefs are experts with remote locations! We\'ve served villas deep in rice terraces, hanging over rivers, and far up mountain roads. We factor in extra travel time, coordinate ingredient delivery, and ensure we have backup equipment for limited-facility kitchens.'
      },
      {
        question: 'What\'s the booking lead time for Ubud during yoga retreat season?',
        answer: 'Ubud gets busy during yoga/wellness high season (March-May, September-October). Book 2-3 weeks ahead for retreats or large groups. For special ceremonies (Nyepi, Galungan), book 4 weeks early as chefs have limited availability. Last-minute often possible for smaller groups!'
      },
      {
        question: 'Can you cater to large yoga retreats in Ubud?',
        answer: 'Yes! We regularly serve yoga retreats, wellness groups, and spiritual gatherings for 10-30+ people. We provide family-style vegetarian/vegan meals, accommodate special diets, and can coordinate multiple meal services per day for multi-day retreats.'
      },
      {
        question: 'Do you work with Ubud\'s luxury resorts like Four Seasons Sayan?',
        answer: 'Yes! While resorts have their own restaurants, we serve private villas within resort complexes and nearby luxury properties. Our chefs meet the high standards expected by Four Seasons, Viceroy, and Hanging Gardens guests. We coordinate with resort security and facilities.'
      }
    ]
  },
  sanur: {
    name: 'Sanur',
    slug: 'sanur',
    tagline: 'Private Chef Services in Sanur - Beachside Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Sanur. Background-checked chefs deliver personalized culinary experiences in your beachside villa.',
    heroDescription: 'Enjoy relaxed, family-friendly dining in your Sanur villa with professional private chefs',
    areas: ['Sanur Beach', 'Sindhu', 'Semawang', 'Mertasari', 'Bypass Ngurah Rai'],
    popularVenues: ['Hyatt Regency Bali', 'Maya Sanur', 'Prama Sanur Beach', 'Mercure Resort Sanur', 'Family villas along the beach'],
    localInsights: 'Sanur is Bali\'s tranquil beachside village known for calm waters and family-friendly atmosphere. Our chefs specialize in family-style dining, fresh seafood, Indonesian classics, and kid-friendly menus perfect for multi-generational gatherings.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.692857",
      "longitude": "115.262778"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Sanur?',
        answer: 'Yes! We serve all Sanur areas including Sanur Beach, Sindhu, Semawang, Mertasari, and along Bypass Ngurah Rai. Our chefs know every beachfront villa, family resort, and neighborhood. We reach most locations within 10-20 minutes.'
      },
      {
        question: 'What cuisines are most popular in Sanur?',
        answer: 'Sanur is all about family-friendly comfort food! Clients love fresh seafood (grilled fish, prawns), Indonesian classics (nasi goreng, mie goreng, satay), Italian favorites (pasta, pizza), Western comfort food (burgers, chicken), and kid-friendly options. Crowd-pleasing food for all ages!'
      },
      {
        question: 'Are your chefs experienced with families and children?',
        answer: 'Absolutely! Sanur is Bali\'s family destination. Our chefs excel at creating kid-friendly menus, accommodating picky eaters, managing food allergies, and serving multi-generational gatherings (grandparents to toddlers). We make mealtime fun and stress-free for everyone!'
      },
      {
        question: 'Can you provide early breakfast service in Sanur?',
        answer: 'Yes! Sanur families love early starts for beach walks and temple visits. We offer breakfast service from 6:00 AM - pancakes, eggs, fresh fruit, smoothies, Indonesian breakfast, or continental spreads. Perfect for families with young children or early risers!'
      },
      {
        question: 'Do you work with Sanur\'s family resorts and villas?',
        answer: 'Yes! We regularly serve Hyatt Regency Bali, Maya Sanur, Prama, Mercure, and hundreds of family villas along the beach. We\'re familiar with resort villa kitchens, security procedures, and family-focused service standards. Multi-generational groups are our specialty!'
      },
      {
        question: 'Can you accommodate large family gatherings in Sanur?',
        answer: 'Absolutely! Sanur is popular for family reunions and celebrations. We regularly serve 10-25+ family members with mixed ages. We provide family-style platters, diverse menu options (something for everyone), and can accommodate multiple dietary needs simultaneously.'
      },
      {
        question: 'What\'s the pace and atmosphere for Sanur dining?',
        answer: 'Sanur is relaxed and unhurried - perfect for leisurely family meals! Unlike Seminyak\'s party scene, Sanur clients prefer calm, early dinners (6-8 PM), extended breakfast service, and beach picnic lunches. We match the peaceful, family-oriented vibe.'
      },
      {
        question: 'Can you source fresh seafood in Sanur?',
        answer: 'Yes! Sanur has excellent morning fish markets and beachfront seafood suppliers. Our chefs select the freshest catches - snapper, prawns, squid, grouper, and seasonal fish. Sanur\'s calm bay waters mean abundant fresh seafood perfect for grilling or steaming!'
      },
      {
        question: 'Do you cater to elderly guests and special dietary needs in Sanur?',
        answer: 'Absolutely! Sanur attracts many retirees and multi-gen families. Our chefs are experienced with soft foods, low-sodium diets, diabetic-friendly meals, heart-healthy options, and easy-to-digest cuisine. We accommodate medical dietary restrictions with care and respect.'
      }
    ]
  },
  nusadua: {
    name: 'Nusa Dua',
    slug: 'nusa-dua',
    tagline: 'Private Chef Services in Nusa Dua - Resort Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Nusa Dua. Background-checked chefs deliver personalized culinary experiences in your luxury resort villa.',
    heroDescription: 'Experience five-star dining in your Nusa Dua villa with professionally trained private chefs',
    areas: ['BTDC Nusa Dua', 'Tanjung Benoa', 'Sawangan', 'Bukit Peninsula', 'Peninsula Island'],
    popularVenues: ['The St. Regis Bali', 'Mulia Resort', 'The Ritz-Carlton Bali', 'Sofitel Bali Nusa Dua', 'The Laguna Resort'],
    localInsights: 'Nusa Dua is Bali\'s exclusive resort enclave with pristine beaches and world-class resorts. Our chefs specialize in five-star fine dining, international cuisine, premium ingredients, and sophisticated presentation that matches the area\'s luxury standards.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.792730",
      "longitude": "115.231193"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Nusa Dua?',
        answer: 'Yes! We serve BTDC Nusa Dua, Tanjung Benoa, Sawangan, and the entire Bukit Peninsula. Our chefs regularly work with luxury resort villas (St. Regis, Mulia, Ritz-Carlton, Sofitel) and private estates. We navigate resort security seamlessly.'
      },
      {
        question: 'What cuisines are most popular in Nusa Dua?',
        answer: 'Nusa Dua demands five-star excellence! Clients love premium steaks (wagyu, ribeye), fresh seafood towers, French fine dining, Japanese teppanyaki and sushi, Italian fine dining, and sophisticated multi-course tasting menus. We match the area\'s ultra-luxury resort standards.'
      },
      {
        question: 'Can you match Nusa Dua resort-level quality?',
        answer: 'Absolutely! Our Nusa Dua chefs have worked in five-star resort kitchens (Mulia, St. Regis, Ritz-Carlton). We use premium imported ingredients, Michelin-quality plating techniques, and sophisticated presentations. Your villa dining rivals the best resort restaurants!'
      },
      {
        question: 'Do you serve private villas within resort complexes?',
        answer: 'Yes! We regularly serve St. Regis Villas, Mulia Villas, Ritz-Carlton Villas, and other resort-integrated properties. We\'re familiar with security procedures, villa access protocols, kitchen standards, and resort service expectations. Coordination is seamless!'
      },
      {
        question: 'Can you source premium and imported ingredients for Nusa Dua?',
        answer: 'Absolutely! Nusa Dua clients often request luxury ingredients - imported wagyu beef (A5, A4), fresh oysters, lobster, truffle, caviar, premium wines, specialty cheeses. We have suppliers for the finest ingredients. Full transparency on costs upfront.'
      },
      {
        question: 'How do you handle high-profile and VIP guests in Nusa Dua?',
        answer: 'With complete discretion and professionalism. Our Nusa Dua chefs have served celebrities, executives, and high-net-worth clients. We sign NDAs when needed, coordinate with security teams, and maintain absolute privacy. Your confidentiality is guaranteed.'
      },
      {
        question: 'What\'s the typical service style in Nusa Dua?',
        answer: 'Nusa Dua clients expect formal, sophisticated service. We provide white-glove plated courses, wine pairings, professional table service, and elegant presentations. For larger events, we supply additional staff (sommeliers, waiters) trained in five-star service standards.'
      },
      {
        question: 'Can you coordinate with resort amenities for special events?',
        answer: 'Yes! We often coordinate with resort event teams, florists, musicians, and coordinators for milestone celebrations (anniversaries, proposals, birthdays). We work seamlessly with Nusa Dua\'s luxury service ecosystem for unforgettable experiences.'
      },
      {
        question: 'What\'s the booking lead time for peak season in Nusa Dua?',
        answer: 'Nusa Dua fills early during holidays and high season (June-Sept, Dec-Jan). For guaranteed access to our top chefs, book 3-4 weeks ahead. For major holidays (Christmas, New Year, Valentine\'s), book 6-8 weeks early. Last-minute sometimes possible!'
      }
    ]
  },
  uluwatu: {
    name: 'Uluwatu',
    slug: 'uluwatu',
    tagline: 'Private Chef Services in Uluwatu - Cliffside Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Uluwatu. Background-checked chefs deliver personalized culinary experiences in your stunning cliffside villa.',
    heroDescription: 'Dine with breathtaking ocean views in your Uluwatu villa with expert private chefs',
    areas: ['Uluwatu Cliffs', 'Pecatu', 'Ungasan', 'Bingin', 'Padang Padang'],
    popularVenues: ['Bulgari Resort Bali', 'Karma Kandara', 'Alila Villas Uluwatu', 'The Edge Bali', 'Luxury clifftop villas'],
    localInsights: 'Uluwatu is Bali\'s dramatic clifftop destination with stunning ocean views and luxury villas. Our chefs specialize in romantic fine dining, sunset dinners, contemporary fusion, fresh seafood, and Instagram-worthy presentations perfect for spectacular settings.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.829167",
      "longitude": "115.085833"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Uluwatu?',
        answer: 'Yes! We serve all Uluwatu areas including the dramatic cliffs, Pecatu, Ungasan, Bingin, Padang Padang, and Dreamland. Our chefs are experienced with clifftop villas, steep access roads, and spectacular ocean-view settings. We navigate Uluwatu\'s unique terrain expertly!'
      },
      {
        question: 'What cuisines are most popular in Uluwatu?',
        answer: 'Uluwatu is all about romance and Instagram-worthy dining! Clients love romantic fine dining, sunset BBQs, fresh seafood (lobster, prawns, grilled fish), contemporary fusion, Japanese teppanyaki, and stunning presentations that complement the dramatic cliff-edge ocean views.'
      },
      {
        question: 'Can you create romantic proposal and anniversary experiences?',
        answer: 'Absolutely! Uluwatu is Bali\'s most romantic destination. We specialize in sunset proposal dinners, anniversary celebrations, honeymoon dining, and intimate ocean-view experiences. We coordinate candle lighting, rose petals, champagne service, and surprise dessert presentations. Hundreds of successful proposals!'
      },
      {
        question: 'How do you handle Uluwatu\'s clifftop villa access challenges?',
        answer: 'Our Uluwatu chefs are experts with steep, winding access roads and clifftop locations. We factor in extra travel time, coordinate ingredient delivery with villa staff, use appropriate vehicles for terrain, and ensure we have all equipment before arrival. Access challenges don\'t slow us down!'
      },
      {
        question: 'Can you coordinate with villa staff for special setups?',
        answer: 'Yes! Uluwatu villas often have amazing infinity pools and cliff-edge dining areas. We coordinate with villa staff for table setup, lighting, sound systems, and decoration placement. For special events, we work with the villa team days in advance to perfect every detail!'
      },
      {
        question: 'What\'s the best time for sunset dining in Uluwatu?',
        answer: 'Uluwatu has the best sunsets in Bali (approximately 6-6:30 PM year-round). We typically start cooking 4-5 PM, serve appetizers during golden hour (5:30 PM), and time the main course perfectly with sunset. It\'s magical - and we\'ve perfected the timing!'
      },
      {
        question: 'Do you work with Uluwatu\'s luxury resorts like Bulgari and Alila?',
        answer: 'Yes! We serve villas at Bulgari Resort, Alila Villas Uluwatu, Karma Kandara, The Edge, and other ultra-luxury properties. Our chefs meet the exceptional standards these properties demand. We coordinate with resort concierge and security for seamless service.'
      },
      {
        question: 'Can you handle weather concerns for outdoor dining in Uluwatu?',
        answer: 'Absolutely! Uluwatu is exposed to ocean winds and occasional rain. We always have contingency plans - indoor dining setups, covered areas, timing adjustments. We monitor weather closely and coordinate with villa staff for backup locations. Your event proceeds beautifully regardless!'
      },
      {
        question: 'What makes Uluwatu dining special compared to other areas?',
        answer: 'The views! Uluwatu offers unmatched ocean panoramas and sunsets. We create Instagram-perfect presentations, time courses with natural light changes, and design menus that complement the setting. It\'s not just a meal - it\'s an experience you\'ll remember forever. Perfect for life milestones!'
      }
    ]
  },
  jimbaran: {
    name: 'Jimbaran',
    slug: 'jimbaran',
    tagline: 'Private Chef Services in Jimbaran - Seafood Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Jimbaran. Background-checked chefs deliver personalized culinary experiences featuring fresh seafood.',
    heroDescription: 'Savor the freshest seafood in your Jimbaran villa with expert private chefs',
    areas: ['Jimbaran Beach', 'Bukit Permai', 'Balangan', 'Kedonganan', 'Jimbaran Bay'],
    popularVenues: ['Four Seasons Jimbaran Bay', 'InterContinental Bali', 'Belmond Jimbaran Puri', 'AYANA Resort', 'Beachfront villas'],
    localInsights: 'Jimbaran is Bali\'s premier seafood destination with calm bay waters and traditional fishing village charm. Our chefs specialize in fresh seafood BBQs, grilled fish platters, seafood feasts, and beach-style dining using the day\'s freshest catch from local markets.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.768889",
      "longitude": "115.165833"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Jimbaran?',
        answer: 'Yes! We serve all Jimbaran areas including Jimbaran Beach, Jimbaran Bay, Bukit Permai, Balangan, Kedonganan, and all beachfront properties. Our chefs know the best local fish markets, every villa location, and the freshest seafood suppliers. Jimbaran is our seafood specialty area!'
      },
      {
        question: 'What cuisines are most popular in Jimbaran?',
        answer: 'Jimbaran is Bali\'s seafood capital! Clients love fresh fish BBQs, grilled whole snapper, lobster, prawns, squid, seafood platters, traditional Jimbaran beach-style grilling, and Indonesian seafood specialties. We also do international seafood (Mediterranean, Asian fusion) using Jimbaran\'s amazing fresh catches.'
      },
      {
        question: 'Can you source seafood directly from Jimbaran fish market?',
        answer: 'Absolutely! Jimbaran has Bali\'s best fish market with daily catches from local fishermen. Our chefs personally select the freshest seafood each morning - lobster, prawns, snapper, grouper, barramundi, squid, clams, crab, and seasonal specialties. Restaurant quality at market prices!'
      },
      {
        question: 'Can you recreate the famous Jimbaran beach seafood BBQ experience?',
        answer: 'Yes! We bring the authentic Jimbaran beach dining experience to your villa - whole grilled fish, seafood platters, traditional sambal (spicy, mild, sweet), fresh vegetables, rice, and all accompaniments. Same legendary taste, your private setting, with ocean breeze and comfort!'
      },
      {
        question: 'How fresh is the seafood in Jimbaran compared to other areas?',
        answer: 'Jimbaran is unbeatable! Fishing boats arrive at dawn with overnight catches. By 7-8 AM, our chefs select live/ultra-fresh seafood at the market. By noon, it\'s in your fridge. By evening, it\'s perfectly grilled. You cannot get fresher seafood anywhere in Bali - this is Jimbaran\'s advantage!'
      },
      {
        question: 'Do you work with Jimbaran\'s luxury resorts and beachfront villas?',
        answer: 'Yes! We regularly serve Four Seasons Jimbaran Bay, InterContinental Bali, Belmond Jimbaran Puri, AYANA Resort villas, and hundreds of beachfront private villas. We\'re familiar with resort kitchens, security procedures, and high-end service standards throughout Jimbaran.'
      },
      {
        question: 'Can you do beachfront BBQ setups in Jimbaran?',
        answer: 'Yes! If your villa has beach access, we can coordinate beachfront BBQ setups - portable grills, beach tables, tiki torches, sunset timing. We work with villa staff for permissions and setup. It\'s the ultimate Jimbaran experience - fresh seafood on your private beach!'
      },
      {
        question: 'What\'s the typical price for seafood in Jimbaran?',
        answer: 'Jimbaran offers exceptional value! Market prices fluctuate seasonally, but typically: whole snapper (Rp 100-200k depending on size), lobster (Rp 300-500k per kg), prawns (Rp 150-250k per kg), squid (Rp 80-120k per kg). Much cheaper than restaurants with same quality. We provide exact costs after market visit!'
      },
      {
        question: 'Can you accommodate large seafood feast events in Jimbaran?',
        answer: 'Absolutely! Jimbaran is perfect for seafood feast parties. We regularly serve 10-30+ guests with massive seafood spreads - multiple fish, lobster platters, prawn mountains, grilled selections, Indonesian sides. For large events, we provide additional cooking staff and waiters. It\'s spectacular!'
      }
    ]
  },
  // Additional 18 Bali areas for comprehensive coverage
  kuta: {
    name: 'Kuta',
    slug: 'kuta',
    tagline: 'Private Chef Kuta: Your Key to Gourmet Experiences',
    description: 'Experience luxury and convenience with a private chef Kuta service in Bali. Turn your villa into top dining, tailored to your palate. Background-checked professional chefs deliver personalized culinary experiences.',
    heroDescription: 'Experience delicious home dining in your Kuta villa with expert private chefs serving authentic cuisines',
    heroTitle: 'Private Chef Kuta: Your Key to Gourmet Experiences',
    areas: ['Kuta Beach', 'Tuban', 'Kartika Plaza', 'Legian Street', 'Discovery Mall area'],
    popularVenues: ['Hard Rock Hotel Bali', 'Sheraton Bali Kuta Resort', 'The Anvaya Beach Resort', 'Discovery Kartika Plaza', 'Holiday Inn Express'],
    localInsights: 'Kuta is Bali\'s iconic beach destination known for its famous surf break, vibrant nightlife, and convenient location near the airport. Our chefs specialize in crowd-pleasing international cuisine, fresh seafood, Indonesian favorites, and casual beach-style dining perfect for groups and families.',
    extendedContent: {
      mainHeading: 'Turn Your Bali Villa Into Bali\'s Best Restaurant',
      paragraphs: [
        'There is no more intimate restaurant than your own home in Bali. Whether you\'re staying in a luxury villa, celebrating with family, or hosting friends, bring the magic of fine dining to your table with a private chef service, featuring talented chefs who create menus tailored to your cravings.',
        'Hiring a personal chef brings unparalleled convenience and luxury to any occasion. Whether you\'re planning a romantic dinner for two or a lively gathering with friends and family, a personal chef can customize every detail to suit your unique preferences, ensuring an unforgettable dining experience in the comfort of your own space. With a focus on personalized service, each meal becomes a bespoke culinary creation, tailored to impress even the most discerning palate.',
        'Opting for a professional chef not only elevates your dining experience but ensures every aspect is crafted to perfection. These culinary masters possess extensive knowledge and training, blending local Indonesian flavors with international techniques to create stunning dishes that delight and satisfy every guest. Their professionalism is evident not just in the food but in their commitment to providing a seamless, memorable experience in your Kuta villa.',
        'Successful event preparation can significantly impact the outcome, especially when it involves culinary experiences like hiring a personal chef. Thoughtful planning ensures that every aspect of the dining experience, from menu selection to presentation, aligns with the event\'s theme and guest preferences. Engaging a chef for a wellness retreat, dinner party, or special celebration requires a focus on fresh, quality ingredients and accommodating dietary restrictions, which starts well before the event itself.',
        'Hiring a professional chef not only adds an air of sophistication to your event but also ensures that the culinary aspects are handled by someone with extensive training and experience. A professional chef brings a deep understanding of flavors, presentation, and kitchen management, making them indispensable for events that require top-tier culinary execution. They can create custom menus that surpass guests\' expectations, transforming any gathering into a gourmet experience that leaves lasting memories.',
        'From intimate anniversary dinners to large family reunions, our private chef Kuta service adapts to every occasion. Our chefs arrive early to plan and shop for the freshest ingredients at local markets, ensuring your meal features the best Bali has to offer. Every dish is prepared with precision and passion, bringing restaurant-quality dining directly to your villa\'s table.',
        'Experience the ultimate in Bali hospitality with a private chef who understands both international cuisine and local culinary traditions. Whether you crave authentic Indonesian satay and nasi goreng, fresh grilled seafood, Mediterranean delights, or Asian fusion creations, our Kuta chefs deliver exceptional flavors tailored to your taste. Complete with beautiful presentation, attentive service, and full kitchen cleanup, your private dining experience in Kuta will exceed every expectation.'
      ]
    },
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.718206",
      "longitude": "115.169506"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Kuta?',
        answer: 'Yes! We serve all Kuta areas including Kuta Beach, Tuban (near airport), Kartika Plaza, and the main Kuta-Legian strip. Our chefs are familiar with all major hotels, resorts, and private accommodations. We can reach most locations within 10-15 minutes.'
      },
      {
        question: 'What cuisines are most popular in Kuta?',
        answer: 'Kuta attracts diverse international visitors! Popular requests include Indonesian classics (satay, nasi goreng), fresh grilled seafood, Australian BBQ, American comfort food, Italian pasta, and Asian fusion. We excel at crowd-pleasing menus that satisfy varied tastes.'
      },
      {
        question: 'Can you serve groups staying in Kuta hotels?',
        answer: 'Absolutely! While some hotels have kitchen restrictions, we work with many Kuta properties with villa-style accommodations, serviced apartments, and kitchenette suites. We\'ll coordinate with your hotel staff and use portable equipment when needed.'
      },
      {
        question: 'Is Kuta convenient for airport arrivals?',
        answer: 'Yes! Kuta is just 10 minutes from Ngurah Rai Airport. We can arrange welcome dinners for late arrivals or farewell meals before departure. Perfect for jet-lagged travelers who want quality home dining without going out.'
      },
      {
        question: 'What\'s the typical vibe for Kuta dining?',
        answer: 'Kuta is casual and fun! Clients love relaxed beach-style meals, surf group gatherings, birthday celebrations, and farewell parties. We match the laid-back atmosphere while delivering restaurant-quality food in your accommodation.'
      }
    ]
  },
  legian: {
    name: 'Legian',
    slug: 'legian',
    tagline: 'Private Chef Services in Legian - Beachfront Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Legian. Background-checked chefs deliver personalized culinary experiences in your beachfront accommodation.',
    heroDescription: 'Enjoy exceptional private dining in your Legian villa with professionally trained chefs',
    areas: ['Legian Beach', 'Padma', 'Double Six', 'Werkudara', 'Nakula'],
    popularVenues: ['Padma Resort Legian', 'The Jayakarta Bali', 'Double-Six Luxury Hotel', 'Pullman Bali Legian Beach', 'All Seasons Legian'],
    localInsights: 'Legian bridges the gap between Kuta\'s energy and Seminyak\'s sophistication. Known for its beautiful beach, sunset cocktail bars, and accessible luxury. Our chefs specialize in fresh beach cuisine, international favorites, and upscale casual dining.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.699389",
      "longitude": "115.168167"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Legian?',
        answer: 'Yes! We cover all Legian from the beach to the main road - Padma area, Double Six, Werkudara, Nakula, and surrounding neighborhoods. We\'re familiar with all hotels, villas, and private accommodations in the area.'
      },
      {
        question: 'What makes Legian different from Kuta or Seminyak?',
        answer: 'Legian offers the best of both worlds - Kuta\'s accessibility with more relaxed sophistication. Clients here often want upscale casual dining, beach sunset meals, and quality without pretension. We tailor our service to match this vibe.'
      },
      {
        question: 'Can you do sunset beach-view dinners in Legian?',
        answer: 'Absolutely! Legian has stunning sunset views. We time our service so appetizers arrive during golden hour, main courses as the sun sets. Many accommodations have ocean-view terraces or rooftops perfect for memorable sunset dining.'
      },
      {
        question: 'What cuisines work best for Legian\'s atmosphere?',
        answer: 'Fresh Mediterranean, grilled seafood, contemporary Indonesian, Thai, and casual Italian are very popular. Legian clients appreciate quality ingredients with relaxed presentation. We focus on flavor-forward, shareable dishes perfect for the beach holiday vibe.'
      },
      {
        question: 'How do you handle large groups in Legian?',
        answer: 'Legian is great for group celebrations! We regularly serve surf groups, friends reunions, and birthday parties for 10-25 guests. We provide family-style service, multiple courses, and can accommodate diverse dietary needs within the same group.'
      }
    ]
  },
  kerobokan: {
    name: 'Kerobokan',
    slug: 'kerobokan',
    tagline: 'Private Chef Services in Kerobokan - Hidden Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Kerobokan. Background-checked chefs deliver personalized culinary experiences in your private Bali villa.',
    heroDescription: 'Discover exceptional private dining in your Kerobokan villa with expert chefs creating custom menus',
    areas: ['Kerobokan Kelod', 'Kerobokan Kaja', 'Umalas', 'Banjar Anyar', 'Semer'],
    popularVenues: ['The Samaya Seminyak (Kerobokan border)', 'Villa Air Bali', 'Private luxury villas', 'Boutique accommodations', 'Long-term rental villas'],
    localInsights: 'Kerobokan is Bali\'s residential expat hub with beautiful private villas hidden among rice fields and quiet lanes. Popular with long-stay visitors and expats. Our chefs specialize in varied international cuisines, healthy meal prep, and regular recurring services.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.667333",
      "longitude": "115.167639"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Kerobokan?',
        answer: 'Yes! We serve all Kerobokan including Kerobokan Kelod, Kerobokan Kaja, Umalas, Banjar Anyar, and Semer areas. Our chefs know the winding gang (lanes) and hidden villas throughout this residential area.'
      },
      {
        question: 'Is Kerobokan good for long-stay chef services?',
        answer: 'Absolutely! Kerobokan is popular with expats and long-stay visitors. We offer recurring services - weekly meal prep, regular chef shifts, and ongoing arrangements. Many Kerobokan clients book us on a weekly or monthly basis.'
      },
      {
        question: 'What cuisines are popular with Kerobokan residents?',
        answer: 'Kerobokan has a diverse expat community! We serve everything from Australian home cooking, European favorites, healthy meal prep bowls, Asian cuisines, and Indonesian comfort food. Variety and consistency are key for regular clients.'
      },
      {
        question: 'Can you provide ongoing meal prep services in Kerobokan?',
        answer: 'Yes! This is very popular here. We prepare 3-5 days of healthy meals in a single session - portioned, labeled, and ready to heat. Perfect for busy professionals, families, and health-conscious residents. Customized to your macros and preferences.'
      },
      {
        question: 'How does Kerobokan compare to Seminyak for private dining?',
        answer: 'Kerobokan is quieter and more residential - perfect for those who prefer peaceful villa stays over tourist buzz. Villas here are often larger with better kitchens. Our service is the same high quality, with a more relaxed, home-like atmosphere.'
      }
    ]
  },
  petitenget: {
    name: 'Petitenget',
    slug: 'petitenget',
    tagline: 'Private Chef Services in Petitenget - Boutique Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Petitenget. Background-checked chefs deliver personalized culinary experiences in your boutique Bali villa.',
    heroDescription: 'Experience refined private dining in your Petitenget villa with award-worthy chef expertise',
    areas: ['Jalan Petitenget', 'Petitenget Temple area', 'Batubelig Beach', 'Kayu Aya', 'Oberoi area'],
    popularVenues: ['Katamama Hotel', 'Luna2 Private Hotel', 'Potato Head Suites', 'The Legian Seminyak', 'Boutique design villas'],
    localInsights: 'Petitenget is Bali\'s most sophisticated dining and lifestyle district with world-class restaurants, beach clubs, and designer boutiques. Our chefs bring restaurant-quality excellence to your villa - creative menus, premium ingredients, and Instagram-perfect presentations.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.678222",
      "longitude": "115.157083"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Petitenget?',
        answer: 'Yes! We serve the entire Petitenget strip from Seminyak Square to Batubelig Beach, including Kayu Aya, the temple area, and surrounding boutique villa neighborhoods. This is our most-requested area for upscale private dining.'
      },
      {
        question: 'What level of cuisine can you provide in Petitenget?',
        answer: 'Petitenget clients expect restaurant-level excellence - and we deliver. Our top chefs have worked in Petitenget\'s acclaimed restaurants (Sarong, Merah Putih, Métis). We bring the same creativity, quality, and presentation to your private villa.'
      },
      {
        question: 'Can you compete with Petitenget\'s famous restaurants?',
        answer: 'Absolutely! Many clients prefer private dining to the area\'s busy restaurants. You get the same caliber chef, personalized menus, premium ingredients - plus complete privacy, no noise, no waiting, and customization to your exact preferences.'
      },
      {
        question: 'What are the most requested cuisines in Petitenget?',
        answer: 'Creative Asian fusion, contemporary Indonesian (think Locavore or Merah Putih style), Japanese omakase, Mediterranean, French-inspired, and multi-course tasting menus. Petitenget clients appreciate culinary creativity and sophisticated presentation.'
      },
      {
        question: 'Do Petitenget villa kitchens support fine dining preparation?',
        answer: 'Most Petitenget villas have excellent, well-equipped kitchens - they\'re built for the design-conscious luxury market. We assess during booking and bring any specialty equipment needed. Even basic kitchens work with the right chef skills!'
      }
    ]
  },
  berawa: {
    name: 'Berawa',
    slug: 'berawa',
    tagline: 'Private Chef Services in Berawa - Modern Villa Dining',
    description: 'Book professional private chefs for in-villa dining in Berawa. Background-checked chefs deliver personalized culinary experiences in your trendy Bali villa.',
    heroDescription: 'Enjoy trendy, delicious cuisine in your Berawa villa with expert private chefs',
    areas: ['Berawa Beach', 'Pantai Berawa', 'Finns Beach Club area', 'Nelayan', 'Tibubeneng'],
    popularVenues: ['Finns Beach Club villas', 'Como Uma Canggu', 'The Slow', 'Theanna Eco Villa', 'Modern design villas'],
    localInsights: 'Berawa is Canggu\'s most happening neighborhood with Finns Beach Club, trendy cafes, and Instagram-worthy spots. Our chefs specialize in contemporary healthy cuisine, brunch culture, creative bowls, and casual sophistication matching the area\'s modern vibe.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.658500",
      "longitude": "115.146222"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Berawa?',
        answer: 'Yes! We cover all Berawa from the beach to Tibubeneng, including the Finns Beach Club area, Nelayan, and all modern villa complexes. Our chefs know every trendy corner of this rapidly developing neighborhood.'
      },
      {
        question: 'What makes Berawa dining special?',
        answer: 'Berawa is Bali\'s trendiest neighborhood! Clients want Instagram-worthy presentations, creative healthy food, modern brunch experiences, and the same quality they\'d find at Finns or other famous spots - all in their private villa.'
      },
      {
        question: 'Can you do brunch service in Berawa?',
        answer: 'Absolutely! Brunch is huge in Berawa. We serve beautiful brunch spreads - smoothie bowls, avocado toast variations, eggs Benedict, fresh juices, healthy pancakes, and Mediterranean-style grazing boards. Perfect for late morning villa gatherings.'
      },
      {
        question: 'What healthy cuisine options do you offer in Berawa?',
        answer: 'Berawa attracts the health-conscious crowd. We excel at plant-based bowls, protein-rich meals, low-carb options, superfood-packed dishes, organic ingredients, and creative vegan/vegetarian cuisine. Healthy never means boring with our chefs!'
      },
      {
        question: 'How close is Berawa to Canggu center?',
        answer: 'Berawa is essentially part of greater Canggu - just south of Batu Bolong and Echo Beach. Same wellness-focused, trendy atmosphere. We serve seamlessly across the Canggu-Berawa area with consistent quality and style.'
      }
    ]
  },
  pererenan: {
    name: 'Pererenan',
    slug: 'pererenan',
    tagline: 'Private Chef Services in Pererenan - Tranquil Rice Field Dining',
    description: 'Book professional private chefs for in-villa dining in Pererenan. Background-checked chefs deliver personalized culinary experiences in your peaceful rice field villa.',
    heroDescription: 'Savor peaceful, organic cuisine in your Pererenan villa surrounded by rice fields',
    areas: ['Pererenan Beach', 'Rice field villas', 'Cemagi border', 'Munggu area', 'Black sand beaches'],
    popularVenues: ['Desa Seni', 'Theanna Eco Villa', 'Escape Ritual', 'Traditional rice field villas', 'Wellness retreat centers'],
    localInsights: 'Pererenan offers the authentic Bali rice field experience with a growing wellness community. Quieter than central Canggu with stunning rural landscapes. Our chefs specialize in organic farm-to-table cuisine, traditional Balinese dishes, and wellness-focused menus.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.635444",
      "longitude": "115.118861"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Pererenan?',
        answer: 'Yes! We serve all Pererenan including the beach area, rice field villas, the border with Cemagi and Munggu. Our chefs know the small gang (lanes) and hidden villa retreats throughout this peaceful area.'
      },
      {
        question: 'What makes Pererenan dining unique?',
        answer: 'Pererenan offers the authentic Bali experience - dining among rice paddies with genuine tranquility. Clients here appreciate organic ingredients, traditional Balinese cooking, farm-to-table philosophy, and the slower pace of villa dining.'
      },
      {
        question: 'Can you source organic and local ingredients in Pererenan?',
        answer: 'Absolutely! Pererenan is surrounded by farms and organic gardens. Our chefs work with local farmers for fresh vegetables, herbs, and traditional ingredients. Some villas even have their own gardens we can harvest from!'
      },
      {
        question: 'Do you serve wellness retreats in Pererenan?',
        answer: 'Yes! Pererenan has many yoga and wellness retreats. We provide multi-day meal services, detox menus, ayurvedic-inspired dishes, and group dining for retreat participants. We understand wellness nutrition and can coordinate with retreat programs.'
      },
      {
        question: 'Is Pererenan too remote for chef services?',
        answer: 'Not at all! We have chefs based in the greater Canggu area who serve Pererenan regularly. We factor in travel time for shopping and arrival. Many clients specifically choose Pererenan for its peaceful atmosphere - and our service makes it even better.'
      }
    ]
  },
  tanahlot: {
    name: 'Tanah Lot',
    slug: 'tanah-lot',
    tagline: 'Private Chef Services in Tanah Lot - Temple View Dining',
    description: 'Book professional private chefs for in-villa dining near Tanah Lot. Background-checked chefs deliver personalized culinary experiences with stunning temple views.',
    heroDescription: 'Experience spiritual dining near Tanah Lot Temple with expert private chefs',
    areas: ['Tanah Lot Temple area', 'Kediri', 'Pan Pacific Resort area', 'Batu Bolong Temple', 'Nirwana Golf area'],
    popularVenues: ['Pan Pacific Nirwana Bali', 'Alila Villas Soori', 'Tanah Lot area villas', 'Golf resort accommodations', 'Cliffside private villas'],
    localInsights: 'Tanah Lot is home to Bali\'s most iconic sea temple with spectacular sunset views. The area offers a spiritual, culturally-rich atmosphere. Our chefs create memorable dining experiences that complement the temple\'s majesty with traditional Balinese and refined international cuisine.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.621139",
      "longitude": "115.086500"
    },
    faqItems: [
      {
        question: 'Do you serve the Tanah Lot area?',
        answer: 'Yes! We serve all Tanah Lot area including the temple vicinity, Pan Pacific Nirwana resort, Kediri, and surrounding villa communities. This area offers unique dining opportunities with incredible sunset temple views.'
      },
      {
        question: 'Can you time dinner with Tanah Lot sunset?',
        answer: 'Absolutely! Sunset timing is everything at Tanah Lot. We coordinate service so appetizers arrive during golden hour, main courses as the sun sets behind the temple. It\'s one of Bali\'s most spectacular dining experiences - and we\'ve perfected the timing.'
      },
      {
        question: 'What cuisines complement the Tanah Lot experience?',
        answer: 'Traditional Balinese cuisine feels most authentic here - we celebrate local culture with dishes like bebek betutu, lawar, satay, and regional specialties. We also offer refined international options for those who prefer, always respecting the spiritual setting.'
      },
      {
        question: 'Is Tanah Lot far from main tourist areas?',
        answer: 'Tanah Lot is about 45-60 minutes from Seminyak/Canggu. Our chefs factor in travel time and often shop closer to the area. The journey is part of the authentic Bali experience - and the temple sunset makes it worthwhile!'
      },
      {
        question: 'Do you serve the Pan Pacific and Alila resorts?',
        answer: 'Yes! We work with villas at Pan Pacific Nirwana and the stunning Alila Villas Soori nearby. Our chefs meet the luxury standards these properties demand. We coordinate with resort staff for seamless, sophisticated service.'
      }
    ]
  },
  tabanan: {
    name: 'Tabanan',
    slug: 'tabanan',
    tagline: 'Private Chef Services in Tabanan - Rice Terrace Dining',
    description: 'Book professional private chefs for in-villa dining in Tabanan. Background-checked chefs deliver personalized culinary experiences amid stunning rice terrace landscapes.',
    heroDescription: 'Enjoy authentic Balinese dining in your Tabanan villa surrounded by UNESCO rice terraces',
    areas: ['Jatiluwih UNESCO Rice Terraces', 'Batukaru Temple area', 'Penebel', 'Kerambitan', 'Antosari'],
    popularVenues: ['Alila Villas Soori', 'The Royal Pita Maha (Tabanan)', 'Rice terrace eco lodges', 'Traditional Balinese compounds', 'Mountain retreat villas'],
    localInsights: 'Tabanan is Bali\'s agricultural heartland with UNESCO World Heritage rice terraces at Jatiluwih. This region offers authentic rural Bali with stunning mountain and rice field landscapes. Our chefs specialize in traditional Balinese village cuisine and farm-to-table organic dishes.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.540667",
      "longitude": "115.122444"
    },
    faqItems: [
      {
        question: 'Do you serve the Tabanan regency?',
        answer: 'Yes! We serve all Tabanan including the famous Jatiluwih rice terraces, Batukaru temple area, Penebel, Kerambitan, and mountain retreats. This is authentic rural Bali at its finest.'
      },
      {
        question: 'What makes Tabanan dining special?',
        answer: 'Tabanan offers the most authentic Balinese culinary experience. Traditional village cooking, fresh farm ingredients, rice paddies as your backdrop. We celebrate local food culture with dishes rarely found in tourist areas - authentic village recipes passed down generations.'
      },
      {
        question: 'Can you source ingredients from Jatiluwih farms?',
        answer: 'Absolutely! Jatiluwih produces Bali\'s finest organic rice and vegetables. Our chefs work directly with local farmers for the freshest ingredients - heritage rice varieties, organic vegetables, local chicken, and traditional spices. True farm-to-table dining.'
      },
      {
        question: 'Is Tabanan too remote for chef services?',
        answer: 'Tabanan requires more travel time (1-2 hours from south Bali), but we serve the area regularly. We arrange ingredient shopping efficiently and factor in travel time. For remote mountain locations, we may request accommodation for overnight multi-day bookings.'
      },
      {
        question: 'What traditional Balinese dishes can you prepare in Tabanan?',
        answer: 'Tabanan is perfect for authentic village cuisine! We prepare bebek betutu (slow-cooked duck), lawar (traditional salad), sate lilit (fish satay), nasi campur village-style, traditional sambals, and ceremonial dishes usually only found in Balinese homes. A true cultural experience.'
      }
    ]
  },
  denpasar: {
    name: 'Denpasar',
    slug: 'denpasar',
    tagline: 'Private Chef Services in Denpasar - Capital City Dining',
    description: 'Book professional private chefs for in-home dining in Denpasar. Background-checked chefs deliver personalized culinary experiences in Bali\'s vibrant capital city.',
    heroDescription: 'Experience authentic Indonesian cuisine in your Denpasar home with professional private chefs',
    areas: ['Renon', 'Sanglah', 'Panjer', 'Sesetan', 'Tohpati', 'Denpasar Barat'],
    popularVenues: ['Private homes', 'Serviced apartments', 'Business accommodations', 'Long-term expat residences', 'Government area housing'],
    localInsights: 'Denpasar is Bali\'s bustling capital with authentic local life, traditional markets, and excellent street food culture. Away from tourist areas, this is real Bali. Our chefs excel at authentic Indonesian home cooking, local market ingredients, and casual family-style dining.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.650000",
      "longitude": "115.216667"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Denpasar?',
        answer: 'Yes! We serve all Denpasar districts including Renon, Sanglah, Panjer, Sesetan, Tohpati, and surrounding areas. We\'re familiar with the city\'s neighborhoods and can navigate Denpasar traffic efficiently.'
      },
      {
        question: 'What makes Denpasar different from tourist areas?',
        answer: 'Denpasar is real, working Bali! No tourist markup, authentic local markets (Pasar Badung is legendary), and genuine Indonesian home cooking culture. Our chefs source from the best local suppliers and prepare dishes rarely found in tourist restaurants.'
      },
      {
        question: 'Can you source ingredients from Denpasar\'s famous markets?',
        answer: 'Absolutely! Pasar Badung is Bali\'s largest traditional market with unbeatable prices and variety. Our chefs shop here for the freshest produce, meats, spices, and specialty ingredients. Denpasar offers ingredient access unavailable elsewhere in Bali.'
      },
      {
        question: 'Do you serve expats and long-term residents in Denpasar?',
        answer: 'Yes! Many expats and long-term residents live in Denpasar for lower costs and authentic Bali life. We provide regular chef services - weekly cooking, meal prep, and ongoing arrangements perfect for residents who want quality home dining.'
      },
      {
        question: 'What authentic Indonesian dishes can you prepare?',
        answer: 'Denpasar is perfect for mastering Indonesian cuisine! We prepare authentic nasi campur, rawon (black beef soup), soto ayam, gado-gado, rendang, and regional specialties from across Indonesia. This is where you experience real Indonesian home cooking at its finest.'
      }
    ]
  },
  gianyar: {
    name: 'Gianyar',
    slug: 'gianyar',
    tagline: 'Private Chef Services in Gianyar - Cultural Heritage Dining',
    description: 'Book professional private chefs for in-villa dining in Gianyar. Background-checked chefs deliver personalized culinary experiences in Bali\'s cultural heartland.',
    heroDescription: 'Taste authentic Balinese heritage cuisine in your Gianyar villa with expert private chefs',
    areas: ['Gianyar Town', 'Mas Village', 'Batuan', 'Sukawati', 'Celuk'],
    popularVenues: ['Artisan village villas', 'Cultural heritage accommodations', 'Traditional Balinese compounds', 'Art gallery guesthouses', 'Rice terrace retreats'],
    localInsights: 'Gianyar is Bali\'s cultural heartland famous for traditional arts, crafts, and the legendary babi guling (roast suckling pig). This regency preserves authentic Balinese traditions. Our chefs specialize in traditional ceremonial dishes, local specialties, and cultural dining experiences.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.534444",
      "longitude": "115.322500"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Gianyar?',
        answer: 'Yes! We serve Gianyar town, the famous artisan villages (Mas, Batuan, Celuk, Sukawati), and surrounding areas. This region is between Ubud and Denpasar, easily accessible with rich cultural experiences.'
      },
      {
        question: 'What is Gianyar famous for in terms of food?',
        answer: 'Gianyar is legendary for babi guling (roast suckling pig) - considered Bali\'s best! Also famous for traditional market food, ceremonial dishes, and authentic village cooking. Our chefs can prepare babi guling and other local specialties that made this region famous.'
      },
      {
        question: 'Can you prepare traditional babi guling in Gianyar?',
        answer: 'Yes! Gianyar\'s babi guling is Bali\'s most famous dish. We can prepare authentic roast suckling pig with all traditional accompaniments - lawar, sate, crackling skin, and special spice blends. This requires advance booking due to preparation time.'
      },
      {
        question: 'What cultural experiences can you combine with dining?',
        answer: 'Gianyar is perfect for cultural dining experiences! We can incorporate visits to art villages (woodcarving in Mas, silver in Celuk), market tours, cooking lessons featuring traditional techniques, and ceremonial dish preparation. Food here is deeply connected to Balinese culture.'
      },
      {
        question: 'Is Gianyar convenient for day trips from other areas?',
        answer: 'Yes! Gianyar is centrally located - 20 minutes from Ubud, 30 minutes from Sanur, 45 minutes from Seminyak. Many clients visit art villages and book our service for lunch or dinner during their cultural exploration day.'
      }
    ]
  },
  tegallalang: {
    name: 'Tegallalang',
    slug: 'tegallalang',
    tagline: 'Private Chef Services in Tegallalang - Famous Rice Terrace Dining',
    description: 'Book professional private chefs for in-villa dining in Tegallalang. Background-checked chefs deliver personalized culinary experiences with iconic rice terrace views.',
    heroDescription: 'Dine with spectacular rice terrace views in your Tegallalang villa with expert private chefs',
    areas: ['Tegallalang Rice Terraces', 'Ceking', 'Pakudui', 'Kenderan', 'Pejeng'],
    popularVenues: ['Rice terrace view villas', 'Jungle lodges', 'Ubud outskirts accommodations', 'Instagram-famous properties', 'Eco-resort villas'],
    localInsights: 'Tegallalang is home to Bali\'s most photographed rice terraces, just north of Ubud. This area offers spectacular views, cooler mountain climate, and authentic village life. Our chefs create dining experiences as memorable as the iconic terraced landscape.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.431944",
      "longitude": "115.278889"
    },
    faqItems: [
      {
        question: 'Do you serve the Tegallalang area?',
        answer: 'Yes! We serve all Tegallalang including the famous rice terraces, Ceking, Pakudui, Kenderan, and surrounding villages. Many villas here have stunning terrace views that we enhance with equally beautiful dining experiences.'
      },
      {
        question: 'Can you arrange dining with rice terrace views?',
        answer: 'Absolutely! Tegallalang villas often have spectacular terrace-view dining areas. We time service to maximize the views - morning mist, golden afternoon light, or magical sunset hours. The setting is Instagram-perfect; our food matches it.'
      },
      {
        question: 'What cuisine suits the Tegallalang atmosphere?',
        answer: 'Organic, farm-fresh, and authentically Balinese cuisine feels most natural here. We emphasize local ingredients, traditional cooking methods, and dishes that connect you to the agricultural landscape you\'re dining within. Modern healthy options also popular.'
      },
      {
        question: 'Is Tegallalang far from central Ubud?',
        answer: 'Tegallalang is just 15-20 minutes north of Ubud center - close enough for easy chef access, far enough for peaceful rice terrace seclusion. We serve both areas seamlessly and can shop in Ubud markets before arriving at your villa.'
      },
      {
        question: 'Do you work with the famous terrace-view accommodations?',
        answer: 'Yes! We serve villas along the famous terrace viewpoints, jungle lodges, and the many stunning properties in this area. We\'re experienced with Tegallalang\'s access roads, villa locations, and creating dining experiences that match these spectacular settings.'
      }
    ]
  },
  amed: {
    name: 'Amed',
    slug: 'amed',
    tagline: 'Private Chef Services in Amed - Coastal Paradise Dining',
    description: 'Book professional private chefs for in-villa dining in Amed. Background-checked chefs deliver personalized culinary experiences in Bali\'s peaceful diving paradise.',
    heroDescription: 'Experience fresh seafood and coastal cuisine in your Amed villa with expert private chefs',
    areas: ['Amed Beach', 'Jemeluk Bay', 'Lipah Beach', 'Bunutan', 'Selang'],
    popularVenues: ['Amed beachfront villas', 'Dive resort accommodations', 'Traditional bungalows', 'Oceanview guesthouses', 'Eco beach lodges'],
    localInsights: 'Amed is East Bali\'s peaceful diving and snorkeling paradise with black sand beaches and traditional fishing villages. Far from tourist crowds, this area offers authentic coastal life. Our chefs specialize in ultra-fresh seafood, local village cooking, and simple, delicious seaside dining.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.349722",
      "longitude": "115.652778"
    },
    faqItems: [
      {
        question: 'Do you serve the Amed area?',
        answer: 'Yes! We serve all Amed including the main beach, Jemeluk Bay (famous for diving), Lipah Beach, Bunutan, and Selang. We have chefs familiar with East Bali who serve this beautiful coastal region regularly.'
      },
      {
        question: 'How fresh is the seafood in Amed?',
        answer: 'Incredibly fresh! Amed is a traditional fishing village. Local fishermen bring catches directly to shore each morning. Our chefs select fish, squid, prawns, and seasonal catches just hours old. This is possibly Bali\'s freshest seafood source!'
      },
      {
        question: 'What is Amed best known for food-wise?',
        answer: 'Ultra-fresh grilled seafood, traditional East Balinese cooking, and simple beachside dining. Think whole grilled fish with sambal, fresh prawns, squid satay, and catches you literally watched fishermen land. Authentic coastal Indonesian cuisine.'
      },
      {
        question: 'Is Amed too remote for chef services?',
        answer: 'Amed is remote (2-2.5 hours from south Bali), but we serve it regularly. We arrange local ingredient sourcing and work with chefs familiar with the area. For multi-day stays, we can provide ongoing service. The peaceful location makes private dining even more special!'
      },
      {
        question: 'Can you arrange beachside BBQ in Amed?',
        answer: 'Absolutely! Amed is perfect for beach BBQ experiences. We can set up grills on villa beachfronts, serve fresh-caught seafood as the sun sets over Mount Agung, and create memorable coastal dining experiences. Simple, authentic, unforgettable.'
      }
    ]
  },
  lovina: {
    name: 'Lovina',
    slug: 'lovina',
    tagline: 'Private Chef Services in Lovina - North Bali Dining',
    description: 'Book professional private chefs for in-villa dining in Lovina. Background-checked chefs deliver personalized culinary experiences on Bali\'s peaceful northern coast.',
    heroDescription: 'Enjoy relaxed coastal dining in your Lovina villa with expert private chefs',
    areas: ['Lovina Beach', 'Kalibukbuk', 'Anturan', 'Temukus', 'Singaraja area'],
    popularVenues: ['The Lovina Bali', 'Damai Resort', 'Puri Bagus Lovina', 'Beachfront villas', 'Traditional guesthouses'],
    localInsights: 'Lovina is North Bali\'s calm beach resort area, famous for dolphin watching and volcanic hot springs. Far from southern crowds with a relaxed atmosphere. Our chefs specialize in fresh seafood, Balinese village cooking, and leisurely dining perfect for Lovina\'s peaceful pace.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.152778",
      "longitude": "115.025833"
    },
    faqItems: [
      {
        question: 'Do you serve the Lovina area?',
        answer: 'Yes! We serve all Lovina including the beach area, Kalibukbuk, Anturan, Temukus, and the nearby Singaraja region. North Bali has a unique character and we have chefs who specialize in this peaceful area.'
      },
      {
        question: 'What makes Lovina dining different?',
        answer: 'Lovina is relaxed, authentic, and uncrowded. Dining here is about peaceful enjoyment - calm seas, dolphin sunrises, volcanic scenery. Our service matches this atmosphere: unhurried, personal, and focused on genuine flavors over flashy presentation.'
      },
      {
        question: 'Can you source local seafood in Lovina?',
        answer: 'Absolutely! Lovina\'s fishing boats return each morning with fresh catches. We source directly from local fishermen for the freshest seafood - mahi-mahi, snapper, prawns, and seasonal fish. North Bali offers excellent variety at reasonable prices.'
      },
      {
        question: 'Is Lovina too far for chef services?',
        answer: 'Lovina is about 2-2.5 hours from south Bali, but we serve the area regularly. We work with chefs familiar with North Bali and arrange local ingredient sourcing. For multi-day villa stays, we provide recurring service at competitive rates.'
      },
      {
        question: 'What unique North Bali dishes can you prepare?',
        answer: 'North Bali has distinctive regional cuisine! We prepare authentic Buleleng-style dishes, North Balinese satay variations, local vegetable preparations using volcanic soil produce, and fresh seafood with regional sambal recipes. It\'s different from south Bali - equally delicious!'
      }
    ]
  },
  candidasa: {
    name: 'Candidasa',
    slug: 'candidasa',
    tagline: 'Private Chef Services in Candidasa - East Bali Coastal Dining',
    description: 'Book professional private chefs for in-villa dining in Candidasa. Background-checked chefs deliver personalized culinary experiences on Bali\'s serene eastern coast.',
    heroDescription: 'Experience authentic East Bali cuisine in your Candidasa villa with expert private chefs',
    areas: ['Candidasa Beach', 'Mendira', 'Bugbug', 'Padang Bai border', 'Tenganan village area'],
    popularVenues: ['Amankila', 'Alila Manggis', 'The Watergarden', 'Candi Beach Resort', 'Traditional beachfront villas'],
    localInsights: 'Candidasa is East Bali\'s tranquil resort area near ancient temples and traditional Tenganan village. Known for coral beaches, diving, and authentic Balinese culture. Our chefs specialize in fresh seafood, regional East Balinese cuisine, and refined dining in this peaceful setting.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.509167",
      "longitude": "115.561111"
    },
    faqItems: [
      {
        question: 'Do you serve the Candidasa area?',
        answer: 'Yes! We serve all Candidasa including the main beach, Mendira, Bugbug, and surrounding areas. We also serve the nearby luxury resorts Amankila and Alila Manggis. East Bali is our area of expertise for authentic regional cuisine.'
      },
      {
        question: 'What makes Candidasa cuisine special?',
        answer: 'Candidasa offers authentic East Balinese flavors often different from south Bali tourist cuisine. Regional specialties, fresher seafood, vegetables from volcanic soil, and traditional village cooking methods. It\'s genuine Bali cuisine without tourist adaptation.'
      },
      {
        question: 'Do you work with Amankila and Alila Manggis?',
        answer: 'Yes! We serve private villas and guests at both these world-class resorts. Our chefs meet the exceptional standards these properties demand. We coordinate with resort staff for seamless, sophisticated service that matches the setting.'
      },
      {
        question: 'Can you incorporate cultural experiences into dining?',
        answer: 'Absolutely! Candidasa is near Tenganan (ancient Bali Aga village), Tirta Gangga water palace, and important temples. We can create culturally-themed dining experiences, visit traditional markets together, or prepare ceremonial dishes with historical significance.'
      },
      {
        question: 'Is Candidasa accessible for chef services?',
        answer: 'Candidasa is about 1.5-2 hours from south Bali - a beautiful scenic drive. We serve the area regularly with chefs who know East Bali intimately. For multi-day stays, we provide ongoing service and local ingredient sourcing.'
      }
    ]
  },
  padangbai: {
    name: 'Padang Bai',
    slug: 'padang-bai',
    tagline: 'Private Chef Services in Padang Bai - Harbor Town Dining',
    description: 'Book professional private chefs for in-villa dining in Padang Bai. Background-checked chefs deliver personalized culinary experiences in this charming harbor town.',
    heroDescription: 'Savor fresh harbor seafood in your Padang Bai accommodation with expert private chefs',
    areas: ['Padang Bai harbor', 'Blue Lagoon Beach', 'Bias Tugel Beach', 'Manggis', 'Kusamba area'],
    popularVenues: ['Harbor-view guesthouses', 'Diving accommodations', 'Alila Manggis (nearby)', 'Traditional bungalows', 'Beachside villas'],
    localInsights: 'Padang Bai is Bali\'s main ferry port to the Gili Islands with excellent diving at Blue Lagoon Beach. This authentic harbor town offers the freshest seafood and genuine local atmosphere. Our chefs create memorable seafood experiences using just-landed catches.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.536111",
      "longitude": "115.504722"
    },
    faqItems: [
      {
        question: 'Do you serve Padang Bai?',
        answer: 'Yes! We serve Padang Bai harbor town, Blue Lagoon Beach area, Bias Tugel Beach, and nearby Manggis. This is a wonderful area for authentic local dining and ultra-fresh seafood experiences.'
      },
      {
        question: 'How fresh is seafood in Padang Bai?',
        answer: 'As fresh as it gets! Padang Bai is an active fishing harbor with boats returning throughout the day. Our chefs can literally select fish that was swimming hours ago. The variety and freshness rival anywhere in Indonesia.'
      },
      {
        question: 'Can you prepare seafood from the morning catch?',
        answer: 'Absolutely! We can arrange for our chef to select the morning\'s best catches right at the harbor, then prepare them for lunch or dinner. You\'ll know exactly where your fish came from - possibly even which boat caught it!'
      },
      {
        question: 'Is Padang Bai good for divers\' dining needs?',
        answer: 'Perfect! Many clients are divers staying in Padang Bai. We provide hearty pre-dive breakfasts, packed lunches for boat trips, and celebratory dinners after diving. We understand divers\' nutritional needs and timing requirements.'
      },
      {
        question: 'What local specialties are unique to Padang Bai?',
        answer: 'Harbor-style grilled fish, traditional fisherman\'s dishes, fresh squid satay, and regional East Balinese cooking. We also prepare excellent seafood BBQs and local market-style meals. It\'s authentic Indonesian coastal cuisine at its freshest.'
      }
    ]
  },
  bukit: {
    name: 'Bukit Peninsula',
    slug: 'bukit',
    tagline: 'Private Chef Services in Bukit - Clifftop Luxury Dining',
    description: 'Book professional private chefs for in-villa dining on the Bukit Peninsula. Background-checked chefs deliver personalized culinary experiences in Bali\'s most dramatic settings.',
    heroDescription: 'Experience luxury clifftop dining on the Bukit Peninsula with expert private chefs',
    areas: ['Bukit cliffs', 'Balangan', 'Dreamland', 'Bingin', 'Impossibles area'],
    popularVenues: ['Six Senses Uluwatu', 'Bulgari Resort', 'Anantara Uluwatu', 'Private cliff villas', 'Surf accommodation villas'],
    localInsights: 'The Bukit Peninsula is Bali\'s dramatic limestone plateau with world-class surf breaks, clifftop resorts, and stunning ocean views. This area offers the most spectacular settings in Bali. Our chefs create dining experiences that match the breathtaking landscapes.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.800000",
      "longitude": "115.150000"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of the Bukit Peninsula?',
        answer: 'Yes! We serve the entire Bukit from Balangan to Bingin, Dreamland, Impossibles, Padang Padang, and beyond. Our chefs are experts with clifftop access, surf villa locations, and the Peninsula\'s unique terrain.'
      },
      {
        question: 'What makes Bukit dining unique?',
        answer: 'The settings are unmatched - dramatic cliffs, infinite ocean views, spectacular sunsets. We create dining experiences that complement these natural wonders. Romantic proposals, anniversary celebrations, and milestone moments find their perfect backdrop here.'
      },
      {
        question: 'Can you serve surf villas on the Bukit?',
        answer: 'Absolutely! We serve many surf villas near Balangan, Bingin, Impossibles, and Dreamland. Post-surf feasts are our specialty - hearty, satisfying meals for hungry surfers. We also do early breakfasts for dawn patrol and recovery smoothies.'
      },
      {
        question: 'How do you handle Bukit access challenges?',
        answer: 'Many Bukit villas have steep, winding access. Our chefs know the terrain, appropriate vehicles, and logistics. We coordinate with villa staff, factor extra travel time, and ensure we have everything needed before navigating access roads.'
      },
      {
        question: 'Do you work with Bukit luxury resorts like Six Senses?',
        answer: 'Yes! We serve private villas at Six Senses, Bulgari, Anantara, and other ultra-luxury Bukit properties. Our chefs meet the exceptional standards these properties demand. We coordinate with resort concierge for seamless, sophisticated service.'
      }
    ]
  },
  ungasan: {
    name: 'Ungasan',
    slug: 'ungasan',
    tagline: 'Private Chef Services in Ungasan - Exclusive Estate Dining',
    description: 'Book professional private chefs for in-villa dining in Ungasan. Background-checked chefs deliver personalized culinary experiences in Bali\'s most exclusive estate villas.',
    heroDescription: 'Indulge in world-class private dining in your Ungasan estate with expert private chefs',
    areas: ['Ungasan cliffs', 'Karma Kandara area', 'Pandawa Beach', 'Gunung Payung', 'Southern cliffs'],
    popularVenues: ['Karma Kandara', 'Jumana Bali Ungasan', 'AYANA Segara', 'Private cliff estates', 'Luxury mega-villas'],
    localInsights: 'Ungasan is home to Bali\'s most exclusive cliff-edge estates and private mega-villas. This ultra-luxury enclave attracts discerning guests seeking complete privacy and world-class amenities. Our chefs provide five-star private dining matching the area\'s exceptional standards.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.835000",
      "longitude": "115.167500"
    },
    faqItems: [
      {
        question: 'Do you serve Ungasan\'s exclusive estates?',
        answer: 'Yes! We specialize in Ungasan\'s luxury villa sector - mega-estates, cliff-edge properties, and exclusive compounds. Our top chefs are experienced with high-net-worth clients, exceptional standards, and complete discretion.'
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
    tagline: 'Private Chef Services in Pecatu - Surf & Sunset Dining',
    description: 'Book professional private chefs for in-villa dining in Pecatu. Background-checked chefs deliver personalized culinary experiences in this stunning surf and sunset destination.',
    heroDescription: 'Enjoy epic sunset dining in your Pecatu villa with expert private chefs',
    areas: ['Pecatu Indah', 'Single Fin area', 'Suluban Beach', 'Padang Padang area', 'New Kuta Golf area'],
    popularVenues: ['Six Senses Uluwatu', 'Renaissance Bali Uluwatu', 'Single Fin beach club area villas', 'Surf villas', 'New Kuta Golf estates'],
    localInsights: 'Pecatu is the heart of Bali\'s famous surf coast with world-class breaks at Padang Padang and Uluwatu. Known for the legendary Single Fin cliff bar, dramatic sunsets, and laid-back surf culture. Our chefs create memorable dining from casual beach feasts to romantic clifftop experiences.',
    coordinates: {
      "@type": "GeoCoordinates",
      "latitude": "-8.815278",
      "longitude": "115.105278"
    },
    faqItems: [
      {
        question: 'Do you serve all areas of Pecatu?',
        answer: 'Yes! We serve all Pecatu including Pecatu Indah residential area, Single Fin surrounds, Suluban Beach area, Padang Padang, and the golf course estates. We know every villa complex and surf accommodation in the area.'
      },
      {
        question: 'Can you cater to surfers in Pecatu?',
        answer: 'Absolutely! Pecatu is surf central. We serve surf villas with pre-dawn breakfasts (before paddling out at Uluwatu!), post-surf recovery meals, hearty group dinners, and meal prep for multi-day surf trips. We understand the surf lifestyle and fuel accordingly.'
      },
      {
        question: 'What\'s the food vibe in Pecatu?',
        answer: 'Pecatu is casual-cool. Think sunset BBQs, fresh seafood platters, healthy bowls, and shareable feasts for villa groups. We also do romantic fine dining for couples enjoying the cliff views. The food matches the laid-back but spectacular setting.'
      },
      {
        question: 'Can you time dinner with Pecatu sunsets?',
        answer: 'Essential! Pecatu sunsets are legendary. We time appetizers for golden hour, main course as the sun dips, and dessert under the stars. Whether you\'re at a cliff villa or near Single Fin, we create unforgettable sunset dining moments.'
      },
      {
        question: 'Do you work with surf camps and group accommodations?',
        answer: 'Yes! We serve many surf camps and group villas in Pecatu. We handle 10-20+ guests with family-style service, diverse menus (vegetarian surfers to hungry big wave riders), and flexible timing around surf schedules. We\'ve fed countless surf trip groups!'
      }
    ]
  }
};

export const CITY_LIST = Object.values(CITY_DATA);
