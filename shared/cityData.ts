export interface CityData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroDescription: string;
  areas: string[];
  popularVenues: string[];
  localInsights: string;
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
  }
};

export const CITY_LIST = Object.values(CITY_DATA);
