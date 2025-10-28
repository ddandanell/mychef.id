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
        answer: 'Yes! We serve all Seminyak areas including Seminyak Beach, Oberoi, Kayu Aya, Petitenget, and Dhyana Pura. Our chefs are familiar with villas throughout Seminyak and can reach you within 15-20 minutes.'
      },
      {
        question: 'What cuisines are most popular in Seminyak?',
        answer: 'Seminyak clients love contemporary fusion cuisine, fresh seafood (grilled lobster, sashimi platters), premium steaks, Italian pasta, and upscale Asian fusion. Our chefs excel at creating sophisticated multi-course dining experiences.'
      },
      {
        question: 'Can you accommodate villa parties in Seminyak?',
        answer: 'Absolutely! Seminyak is famous for villa parties. We regularly cater events from intimate dinners for 2 to beach club-style parties for 50+ guests. We can also provide additional staff (waiters, bartenders) for larger events.'
      },
      {
        question: 'How quickly can you arrive in Seminyak?',
        answer: 'Our chefs are strategically located throughout Bali. For Seminyak bookings, expect arrival within 15-20 minutes for last-minute requests, though we recommend booking 1-2 weeks in advance for best chef availability.'
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
        answer: 'Yes! We serve all Canggu areas including Echo Beach, Batu Bolong, Berawa, Pererenan, and Nelayan. Our chefs know the area well and can navigate to any villa within 10-15 minutes.'
      },
      {
        question: 'What cuisines are most popular in Canggu?',
        answer: 'Canggu clients love healthy options - acai bowls, smoothie bowls, organic salads, fresh poke, plant-based dishes, and casual beach-style dining. We also do great BBQs, fresh seafood, and Indonesian specialties.'
      },
      {
        question: 'Can you cater to vegan/vegetarian diets in Canggu?',
        answer: 'Absolutely! Canggu has a strong wellness community. Our chefs are experts in plant-based cuisine, vegan fine dining, raw food, and creative vegetarian dishes using local organic produce.'
      },
      {
        question: 'Do you work with surf villas in Canggu?',
        answer: 'Yes! We regularly serve surf villas and beachfront properties throughout Canggu. Whether you want post-surf breakfast, casual BBQ lunches, or healthy dinners, we\'ve got you covered.'
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
        answer: 'Yes! We serve all Ubud areas including Ubud Center, Tegallalang, Penestanan, Sayan, and Campuhan. Our chefs are experienced with jungle villa locations and can reach you within 20-30 minutes from central Ubud.'
      },
      {
        question: 'What cuisines are most popular in Ubud?',
        answer: 'Ubud clients love organic farm-to-table cuisine, traditional Balinese dishes (babi guling, lawar), vegetarian fine dining, raw food, and wellness-focused meals. We source ingredients from local organic farms and traditional markets.'
      },
      {
        question: 'Can you source organic ingredients in Ubud?',
        answer: 'Absolutely! Ubud is surrounded by organic farms. Our chefs have relationships with local farmers and can source the freshest organic vegetables, herbs, and specialty ingredients. This is one of Ubud\'s greatest advantages!'
      },
      {
        question: 'Do you accommodate dietary restrictions in Ubud?',
        answer: 'Yes! Ubud has a strong wellness and spiritual community. Our chefs excel at vegan, vegetarian, raw food, gluten-free, and ayurvedic-inspired cuisine. We can create completely customized menus for any dietary need.'
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
        answer: 'Yes! We serve all Sanur areas including Sanur Beach, Sindhu, Semawang, and Mertasari. Our chefs know Sanur well and can reach your beachside villa within 10-20 minutes.'
      },
      {
        question: 'What cuisines are most popular in Sanur?',
        answer: 'Sanur clients love family-style dining, fresh seafood (grilled fish, prawns), Indonesian classics (nasi goreng, satay), Italian family favorites (pasta, pizza), and kid-friendly options. We focus on crowd-pleasing, comfort food.'
      },
      {
        question: 'Are your chefs good with families and children in Sanur?',
        answer: 'Absolutely! Sanur is very family-oriented. Our chefs have extensive experience creating kid-friendly menus, accommodating picky eaters, and serving multi-generational family gatherings. We make dining fun for all ages!'
      },
      {
        question: 'Can you do early breakfast service in Sanur?',
        answer: 'Yes! Sanur is popular with families who like early starts. We offer breakfast service starting from 6:00 AM, perfect for families with young children or guests who want to catch the sunrise beach walks.'
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
        answer: 'Yes! We serve all Nusa Dua areas including BTDC Nusa Dua, Tanjung Benoa, and the Bukit Peninsula. Our chefs regularly work with luxury resort villas and private estates throughout the area.'
      },
      {
        question: 'What cuisines are most popular in Nusa Dua?',
        answer: 'Nusa Dua clients expect five-star quality - premium steaks, fresh seafood towers, French fine dining, Japanese teppanyaki, Italian fine dining, and sophisticated multi-course tasting menus. We match resort-level standards.'
      },
      {
        question: 'Can you match resort-level quality in Nusa Dua?',
        answer: 'Absolutely! Our chefs have extensive experience in Nusa Dua\'s luxury resorts. We use premium ingredients, professional plating, and sophisticated techniques that meet the highest five-star dining standards.'
      },
      {
        question: 'Do you serve resort villas in Nusa Dua?',
        answer: 'Yes! We regularly serve private villas within resort complexes (St. Regis, Mulia, Ritz-Carlton, etc.) as well as standalone luxury estates. We\'re familiar with resort security procedures and kitchen standards.'
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
        answer: 'Yes! We serve all Uluwatu areas including the famous cliffs, Pecatu, Ungasan, Bingin, and Padang Padang. Our chefs are experienced with clifftop villa locations and breathtaking settings.'
      },
      {
        question: 'What cuisines are most popular in Uluwatu?',
        answer: 'Uluwatu clients love romantic fine dining, sunset BBQs, fresh seafood (lobster, prawns), contemporary fusion, Japanese cuisine, and Instagram-worthy presentations that complement the dramatic ocean views.'
      },
      {
        question: 'Can you create romantic experiences in Uluwatu?',
        answer: 'Absolutely! Uluwatu is Bali\'s most romantic destination. We specialize in sunset dinners, proposal setups, anniversary celebrations, and intimate dining experiences with ocean views. We can arrange special touches like candle lighting and floral arrangements.'
      },
      {
        question: 'How do you handle clifftop villa access in Uluwatu?',
        answer: 'Our chefs are very experienced with Uluwatu\'s unique clifftop villas. We plan for additional time to navigate steep access roads and coordinate with villa staff for equipment and ingredient delivery to ensure smooth service.'
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
        answer: 'Yes! We serve all Jimbaran areas including Jimbaran Beach, Bukit Permai, Balangan, and the famous bay area. Our chefs know the best local seafood markets and can source the freshest catches.'
      },
      {
        question: 'What cuisines are most popular in Jimbaran?',
        answer: 'Jimbaran is famous for seafood! Clients love fresh fish BBQs, grilled lobster, prawns, whole grilled snapper, seafood platters, and traditional Jimbaran-style beach dining. We source from the morning fish market for ultimate freshness.'
      },
      {
        question: 'Can you source seafood from Jimbaran fish market?',
        answer: 'Absolutely! Jimbaran has the best fish market in Bali. Our chefs personally select the freshest seafood each morning - lobster, prawns, snapper, grouper, squid, and more. You get restaurant-quality seafood at market prices.'
      },
      {
        question: 'Can you recreate the famous Jimbaran beach seafood experience?',
        answer: 'Yes! We bring the authentic Jimbaran beach dining experience to your villa - grilled seafood platters, sambal, rice, and all the traditional accompaniments. Same quality and taste, but in the comfort of your private villa with ocean breeze.'
      }
    ]
  }
};

export const CITY_LIST = Object.values(CITY_DATA);
