export interface ServiceData {
  name: string;
  slug: string;
  tagline: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  icon: string;
  content: {
    introduction: string;
    whatWeOffer: string[];
    howItWorks: string[];
    whyChooseUs: string[];
    pricing: string;
    faq: Array<{ question: string; answer: string }>;
  };
}

export const SERVICE_DATA: Record<string, ServiceData> = {
  'villa-parties': {
    name: 'Villa Parties',
    slug: 'villa-parties',
    tagline: 'Epic Villa Party Catering in Bali',
    metaDescription: 'Transform your Bali villa into the ultimate party venue with myCHEF Indonesia private chef services. Professional catering for birthdays, celebrations, bachelor/bachelorette parties, and group events. From 10 to 50+ guests.',
    heroTitle: 'Villa Party Catering in Bali',
    heroDescription: 'Turn your Bali villa into an unforgettable celebration with professional private chef services',
    icon: 'PartyPopper',
    content: {
      introduction: `Planning an epic villa party in Bali? Whether you're celebrating a milestone birthday, hosting a bachelor or bachelorette bash, reuniting with friends, or throwing a corporate retreat celebration, myCHEF Indonesia transforms your villa into the ultimate party venue with exceptional private chef catering services.

Since 2012, we've catered over 1,000 villa parties across Bali - from intimate gatherings of 10 friends to spectacular celebrations with 50+ guests. Our background-checked professional chefs create custom menus that match your party vibe, dietary requirements, and budget. No stress, no mess, just unforgettable memories.

Bali's stunning villas provide the perfect backdrop for celebrations, and our private chef service elevates your event from ordinary to extraordinary. Imagine your guests enjoying restaurant-quality cuisine while lounging by the infinity pool, cocktails in hand, as the sun sets over rice paddies or ocean views. That's the myCHEF experience.`,
      whatWeOffer: [
        'Custom party menus designed for sharing and grazing - tapas-style platters, mezze boards, seafood towers, BBQ stations, and themed cuisine',
        'Professional chefs experienced with large groups and complex dietary requirements (vegan, halal, allergies)',
        'Complete kitchen setup, cooking, plating, service, and cleanup - you enjoy the party, we handle everything',
        'Flexible timing - brunches, pool parties, sunset cocktail hours, late-night feasts, multi-day events',
        'Additional staff available: waiters, bartenders, sommeliers for seamless service',
        'Coordination with event planners, DJs, decorators for turnkey celebrations'
      ],
      howItWorks: [
        'Contact us via WhatsApp with your party details: date, guest count, villa location, vibe/theme, and any dietary needs',
        'Our team matches you with the perfect chef(s) and sends custom menu proposals within 24 hours',
        'Finalize your menu, confirm pricing (no hidden fees), and pay 50% deposit to lock in your date',
        'On party day, your chef(s) arrive early to prep. Ingredient shopping can be handled same-day for peak freshness',
        'Relax and enjoy your celebration while we cook, serve, and ensure every guest is delighted',
        'Complete cleanup included - your villa is spotless when we leave. Pay remaining 50% after service'
      ],
      whyChooseUs: [
        '1000+ villa parties catered since 2012 - we know what works for Bali celebrations',
        'All chefs background-checked, food safety certified, and professionally trained',
        '100% liability insurance for complete peace of mind',
        'Transparent pricing with no hidden fees - you approve all costs upfront',
        'Local expertise across all Bali areas: Seminyak, Canggu, Ubud, Uluwatu, and beyond',
        '4.9/5 average rating from delighted party hosts'
      ],
      pricing: 'Villa party pricing varies based on guest count, menu complexity, and service duration. Typical costs: 10-15 guests from Rp 5,000,000, 16-25 guests from Rp 8,000,000, 26-50 guests from Rp 15,000,000+. Ingredients billed separately at market prices. Contact us for a custom quote tailored to your celebration.',
      faq: [
        { question: 'How many guests can you serve at a villa party?', answer: 'We regularly serve groups of 10-50 guests. For larger events (50+), we provide multiple chefs and additional service staff. We\'ve successfully catered celebrations with 100+ guests at larger venues.' },
        { question: 'Can you handle diverse dietary requirements at the same party?', answer: 'Absolutely! We excel at mixed groups - vegan, vegetarian, gluten-free, halal, allergies, and regular eaters all accommodated within the same menu. Just let us know everyone\'s needs during booking.' },
        { question: 'Do you provide drinks and bartending?', answer: 'We focus on food, but can arrange professional bartenders, cocktail service, and coordinate with alcohol suppliers. Many clients handle their own drinks; we provide the feast!' },
        { question: 'What if our villa has a basic kitchen?', answer: 'We\'ve worked in hundreds of Bali villas - from compact to massive. Our chefs bring specialized equipment and work magic in any kitchen. We assess during booking and plan accordingly.' },
        { question: 'How far in advance should we book for a villa party?', answer: 'For best chef selection, book 2-3 weeks ahead. Peak season (June-September, December-January) requires 4+ weeks notice. Last-minute requests often possible - just ask!' }
      ]
    }
  },
  'romantic-dinners': {
    name: 'Romantic Dinners',
    slug: 'romantic-dinners',
    tagline: 'Intimate Private Chef Dining in Bali',
    metaDescription: 'Create unforgettable romantic moments with myCHEF Indonesia private chef services. Perfect for proposals, anniversaries, honeymoons, and intimate celebrations in your Bali villa. Candlelit dining, custom menus, complete privacy.',
    heroTitle: 'Romantic Private Dining in Bali',
    heroDescription: 'Create magical intimate moments with a private chef experience tailored for two',
    icon: 'Heart',
    content: {
      introduction: `Planning to pop the question? Celebrating an anniversary? On honeymoon in Bali? Or simply want to create an unforgettable romantic evening for your partner? myCHEF Indonesia specializes in intimate private dining experiences that transform your villa into the most romantic restaurant in Bali - with just the two of you.

Since 2012, we've helped create hundreds of magical moments - from surprise marriage proposals (100% success rate!) to milestone anniversaries, honeymoon celebrations, and spontaneous romantic gestures. Our professional chefs craft personalized multi-course menus while you focus on what matters: each other.

Bali's romantic settings - clifftop villas overlooking the ocean, jungle retreats surrounded by fireflies, beachfront properties with sunset views - deserve cuisine that matches the magic. That's exactly what our private chefs deliver: restaurant-quality fine dining in your private paradise, with complete discretion and personalized attention.`,
      whatWeOffer: [
        'Personalized multi-course tasting menus crafted for two, featuring your favorite cuisines and ingredients',
        'Proposal and celebration coordination: special dessert presentations, champagne service, rose petals, and timing assistance',
        'Premium ingredient options: fresh lobster, wagyu beef, truffles, caviar, and fine wines',
        'Beautiful plating and presentation worthy of Instagram (and your memories)',
        'Discrete service - your chef prepares and presents, then gives you privacy to enjoy',
        'Complete coordination with villa staff for table settings, candles, flowers, and ambiance'
      ],
      howItWorks: [
        'Share your vision via WhatsApp: the occasion, your partner\'s preferences, dietary needs, and any special requests',
        'We match you with a romantic dining specialist chef and create a custom menu proposal',
        'Confirm your menu, coordinate special touches (proposals, surprises), and secure your date with 50% deposit',
        'On the evening, your chef arrives 2-3 hours early to prepare everything perfectly',
        'Enjoy appetizers as the sun sets, followed by expertly timed courses throughout your intimate evening',
        'Your chef handles all cleanup, leaving you to enjoy a nightcap under the stars'
      ],
      whyChooseUs: [
        'Hundreds of successful proposal dinners - we know how to make the moment perfect',
        'Chefs trained in fine dining presentation and romantic service pacing',
        'Complete discretion and privacy - we understand the importance of intimate moments',
        'Coordination expertise with surprise elements, timing, and special presentations',
        'Stunning Bali villa settings enhanced with our culinary artistry',
        '4.9/5 rating from couples who\'ve celebrated with us'
      ],
      pricing: 'Romantic dinner for two starts from Rp 2,500,000 including chef service fees (3-4 hours), menu consultation, beautiful plating, and complete cleanup. Premium ingredients (lobster, wagyu, imported items) billed separately based on market prices. Contact us with your vision for a personalized quote.',
      faq: [
        { question: 'Can you help coordinate a surprise proposal?', answer: 'Yes! We\'ve assisted hundreds of successful proposals. We coordinate timing, special dessert reveals (ring presentation, "Will you marry me?" plates), champagne service, and work with your villa staff on rose petals, candles, and photography coordination.' },
        { question: 'What cuisines work best for romantic dinners?', answer: 'French, Italian, Japanese (omakase-style), and contemporary fusion are most popular. We can also create menus around your partner\'s favorites or meaningful cuisines from your relationship. Tell us your story; we\'ll create the perfect menu.' },
        { question: 'How private is the dining experience?', answer: 'Completely private. Your chef prepares in the kitchen, presents each course with brief elegant service, then retreats to give you space. Many couples barely see their chef except for those magical moments when dishes appear.' },
        { question: 'Can you accommodate dietary restrictions for romantic dinners?', answer: 'Absolutely. Vegan, vegetarian, gluten-free, allergies - we create equally stunning romantic menus for all dietary needs. Love has no dietary restrictions; neither do our chefs\' skills.' },
        { question: 'What if it rains on our outdoor dinner?', answer: 'We always have backup plans. Most villas have covered areas that are equally romantic. Your chef and villa staff will ensure your evening is perfect regardless of weather.' }
      ]
    }
  },
  'birthday-celebrations': {
    name: 'Birthday Celebrations',
    slug: 'birthday-celebrations',
    tagline: 'Memorable Birthday Dining in Bali',
    metaDescription: 'Celebrate birthdays in Bali with myCHEF Indonesia private chef services. Custom menus, surprise presentations, and professional catering for intimate dinners to large villa parties. Make every birthday unforgettable.',
    heroTitle: 'Birthday Chef Services in Bali',
    heroDescription: 'Make their special day extraordinary with a private chef birthday experience',
    icon: 'Cake',
    content: {
      introduction: `Birthdays in Bali deserve more than restaurant reservations. Whether you're planning an intimate milestone dinner for a loved one, a surprise celebration, or an epic birthday bash with all your friends, myCHEF Indonesia creates birthday dining experiences as unique as the person you're celebrating.

Since 2012, we've catered hundreds of Bali birthday celebrations - from surprise 30th dinners for two to legendary 50th birthday villa parties for 50 guests. Our professional chefs craft custom menus that reflect the birthday person's favorites, handle all the cooking and cleanup, and even coordinate surprise presentations with custom birthday cakes.

A birthday in Bali is already special. With myCHEF, it becomes unforgettable. Imagine their favorite foods prepared by a professional chef in your villa, surrounded by loved ones, with a stunning Bali backdrop. That's the gift of a private chef birthday celebration.`,
      whatWeOffer: [
        'Custom birthday menus featuring the celebrant\'s favorite dishes and cuisines',
        'Birthday cake coordination: we can source beautiful custom cakes or create our own dessert presentations',
        'Surprise dinner coordination - we help you plan the perfect reveal',
        'Flexible formats: intimate dinners for 2-4, family gatherings for 8-12, villa parties for 20-50+',
        'Theme menus available: Italian feast, Asian adventure, seafood extravaganza, healthy wellness, and more',
        'Complete service including cooking, plating, service, and cleanup'
      ],
      howItWorks: [
        'Contact us with birthday details: date, guest count, the celebrant\'s favorite foods, any dietary needs',
        'We match you with the perfect chef and create a custom birthday menu proposal',
        'Finalize your menu, coordinate any surprises, and confirm with 50% deposit',
        'Your chef arrives early to prepare. If it\'s a surprise, we coordinate timing and signals with you',
        'The celebration unfolds beautifully - delicious food, happy guests, memorable moments',
        'We handle all cleanup. You focus on singing "Happy Birthday" and creating memories'
      ],
      whyChooseUs: [
        'Experts at surprise dinner coordination and timing',
        'Connections with Bali\'s best bakeries for custom birthday cakes',
        'Flexible service from intimate dinners to large parties',
        'Background-checked, professional chefs who enhance celebrations',
        'All dietary needs accommodated - everyone celebrates together',
        'Transparent pricing with no birthday surprises (except the good ones!)'
      ],
      pricing: 'Birthday celebration pricing varies by group size: Intimate birthday dinner (2-4 guests) from Rp 2,800,000, family celebration (6-10 guests) from Rp 4,500,000, birthday party (15-25 guests) from Rp 7,500,000. Custom birthday cakes can be arranged from Rp 350,000. Ingredients billed separately. Contact us for a custom quote.',
      faq: [
        { question: 'Can you help plan a surprise birthday dinner?', answer: 'Absolutely! We\'re experts at surprise coordination. We work with you on timing, signals (when to dim lights, bring out the cake), and can even create fake "reservation confirmations" to throw off the birthday person.' },
        { question: 'Can you provide birthday cakes?', answer: 'Yes! We partner with excellent Bali bakeries for custom cakes, or our chefs can create stunning dessert presentations. From traditional layer cakes to dramatic chocolate fondant, we make the moment special.' },
        { question: 'What if some guests are vegetarian and others aren\'t?', answer: 'We excel at mixed-diet celebrations. We can create cohesive menus with options for everyone, or separate dishes that accommodate all needs. Everyone celebrates together, eating deliciously.' },
        { question: 'Can you do themed birthday menus?', answer: 'Yes! Japanese sushi party, Italian feast, Mexican fiesta, elegant French, healthy wellness theme - tell us the birthday person\'s style and we\'ll create a themed celebration to match.' },
        { question: 'How far in advance should I book for a birthday?', answer: 'For best results, book 1-2 weeks ahead. Peak season or larger parties need 3-4 weeks. We often accommodate last-minute birthday requests - just reach out!' }
      ]
    }
  },
  'family-reunions': {
    name: 'Family Reunions',
    slug: 'family-reunions',
    tagline: 'Private Chef Dining for Multi-Generational Families',
    metaDescription: 'Bring families together with myCHEF Indonesia private chef services in Bali. Multi-generational dining, kid-friendly menus, and catering for family reunions, holiday gatherings, and milestone celebrations.',
    heroTitle: 'Family Reunion Catering in Bali',
    heroDescription: 'Bring generations together with memorable family meals in your Bali villa',
    icon: 'Users',
    content: {
      introduction: `Family reunions in Bali are magical - cousins playing by the pool, grandparents relaxing in tropical gardens, parents finally unwinding on vacation. But feeding a multi-generational family with varied tastes and dietary needs? That's where myCHEF Indonesia makes family gatherings effortless.

Since 2012, we've catered hundreds of family reunions across Bali - from intimate three-generation dinners to sprawling 30-person family celebrations. Our chefs specialize in creating menus that please everyone: adventurous eaters and picky kids, health-conscious parents and indulgent grandparents, meat-lovers and vegetarians at the same table.

A family reunion should be about connection, not cooking logistics. With a private chef, parents can actually relax, grandparents can tell stories without kitchen duty, and children can be children. Everyone gathers around the table for meaningful meals while we handle everything else.`,
      whatWeOffer: [
        'Multi-generational menus that include options for adventurous and conservative eaters alike',
        'Kid-friendly dishes that children actually want to eat, prepared with quality ingredients',
        'Dietary accommodation for all family members: allergies, vegan, halal, medical diets, preferences',
        'Family-style service perfect for sharing, passing dishes, and togetherness',
        'Breakfast, lunch, and dinner service available for multi-day family vacations',
        'Flexible scheduling around family activities: early breakfasts, late lunches, sunset dinners'
      ],
      howItWorks: [
        'Share your family details: ages, headcount, dietary needs, favorite cuisines, and your villa location',
        'We match you with a family-experienced chef and create inclusive menu options',
        'Finalize menus (with kid options and adult upgrades), confirm pricing, and pay 50% deposit',
        'Your chef arrives to prepare meals - one-time dinner or recurring service for your stay',
        'Family gathers for stress-free meals while chef handles cooking and cleanup',
        'Enjoy quality family time without anyone stuck in the kitchen'
      ],
      whyChooseUs: [
        'Specialized experience with multi-generational family dynamics and diverse preferences',
        'Patient, friendly chefs who are great with children and respectful with elders',
        'Flexible service: single dinners, daily meals, or entire vacation meal planning',
        'All dietary restrictions accommodated without making anyone feel "difficult"',
        'Family-friendly pricing for groups - no per-person gouging',
        'Understanding that families need flexibility with timing and last-minute changes'
      ],
      pricing: 'Family reunion pricing depends on group size and service frequency. Single family dinner (6-10 guests) from Rp 4,000,000, larger family gathering (12-20 guests) from Rp 7,000,000. Multi-day packages available with significant discounts for recurring service. Children 12 and under may be discounted. Contact us for family-tailored pricing.',
      faq: [
        { question: 'Can you handle picky children?', answer: 'Absolutely! We serve families regularly and know kids can be challenging. We offer separate kid menus (familiar favorites like pasta, chicken, rice) while adults enjoy more adventurous cuisine. Happy kids = relaxed parents.' },
        { question: 'What about elderly family members with special diets?', answer: 'We accommodate all medical and preference-based diets: soft foods, low-sodium, diabetic-friendly, heart-healthy, easy-to-digest options. Grandparents are often our most appreciative guests!' },
        { question: 'Can you cook breakfast, lunch, and dinner for our entire stay?', answer: 'Yes! We offer multi-day packages for family vacations. Chef arrives for breakfast, returns for dinner - or we can provide meal prep for lunches. Your entire stay can be catered.' },
        { question: 'How does family-style service work?', answer: 'Dishes are served in the center of the table for passing and sharing - just like home, but better! It encourages conversation, allows everyone to try everything, and creates that family dinner atmosphere.' },
        { question: 'What if family members want different cuisines?', answer: 'We create inclusive menus that blend preferences. Example: an Asian-fusion menu with Indonesian, Thai, and Chinese elements that grandma loves alongside kid-friendly fried rice. Everyone finds their favorites!' }
      ]
    }
  },
  'corporate-events': {
    name: 'Corporate Events',
    slug: 'corporate-events',
    tagline: 'Professional Catering for Business in Bali',
    metaDescription: 'Elevate corporate events with myCHEF Indonesia professional catering. Team retreats, executive dinners, client entertainment, and business celebrations in Bali villas. Sophisticated service for demanding professionals.',
    heroTitle: 'Corporate Event Catering in Bali',
    heroDescription: 'Impress clients and teams with sophisticated private chef dining',
    icon: 'Briefcase',
    content: {
      introduction: `Corporate gatherings in Bali - whether team-building retreats, executive planning sessions, client entertainment, or milestone celebrations - demand catering that reflects your company's standards. myCHEF Indonesia delivers professional private chef services that impress discerning business travelers and elevate corporate experiences.

Since 2012, we've catered corporate events for multinational companies, startups, family businesses, and everything in between. From intimate executive dinners for 6 to full retreat catering for 40+ team members, our background-checked professional chefs create sophisticated dining experiences that facilitate connection, celebration, and productive conversations.

Bali's villa settings provide inspiring environments for corporate gatherings, but dining logistics shouldn't distract from your objectives. With myCHEF, your team or clients enjoy restaurant-quality meals in private settings while you focus on business outcomes.`,
      whatWeOffer: [
        'Executive-level multi-course dinners for client entertainment and partner appreciation',
        'Team retreat catering: breakfast, lunch, and dinner service for multi-day programs',
        'Networking cocktail receptions with elegant passed appetizers and stations',
        'Working lunch service that keeps energy high without heavy mid-day meals',
        'Cultural dining experiences: Indonesian cooking classes, local cuisine showcases',
        'Dietary accommodation for international teams with diverse requirements'
      ],
      howItWorks: [
        'Share event details: purpose, guest count, duration, dietary requirements, and budget parameters',
        'We propose suitable chefs and menu options aligned with your corporate objectives',
        'Finalize menus, confirm logistics, and coordinate with your event organizer or EA',
        'Professional invoicing and payment processing suitable for company accounting',
        'Seamless execution: our team handles all F&B while you manage your program',
        'Post-event, we provide itemized documentation for expense reporting'
      ],
      whyChooseUs: [
        'Professional service standards expected in corporate environments',
        'Experience with international business travelers and diverse dietary needs',
        'Discrete, efficient staff who understand corporate dynamics',
        'Flexible scheduling around meeting agendas and program timing',
        'Proper invoicing and documentation for company expense processes',
        'Reliable, punctual service - we understand business time is valuable'
      ],
      pricing: 'Corporate event pricing depends on service type and duration. Executive dinner (6-10 guests) from Rp 6,000,000, team retreat daily catering (20-30 guests, 3 meals) from Rp 15,000,000/day. Networking cocktail receptions from Rp 500,000/person. Contact us for formal proposals suitable for corporate approval processes.',
      faq: [
        { question: 'Can you provide proper invoices for company accounting?', answer: 'Yes, we provide detailed invoices suitable for corporate expense processing, including itemized costs, service descriptions, and tax documentation. We understand business requirements.' },
        { question: 'How do you handle diverse dietary needs for international teams?', answer: 'We regularly serve international corporate groups with varied requirements: halal, kosher, vegan, allergies, religious restrictions. We create menus where everyone eats well together without anyone feeling singled out.' },
        { question: 'Can you work around a corporate retreat schedule?', answer: 'Absolutely. We coordinate with your program timing - quick breakfasts for early sessions, energizing lunches between meetings, networking dinners that facilitate conversation. We work around your agenda, not the other way around.' },
        { question: 'Do you offer alcohol and bartending for corporate events?', answer: 'We can coordinate professional bartending and beverage service for networking receptions and dinners. We also respect companies with alcohol-free policies - we\'re flexible to your corporate culture.' },
        { question: 'Can you help with a company anniversary or milestone celebration?', answer: 'Yes! We\'ve catered company milestone dinners, annual celebrations, and team achievement events. We create special touches appropriate for corporate celebrations while maintaining professional service standards.' }
      ]
    }
  },
  'wedding-celebrations': {
    name: 'Wedding Celebrations',
    slug: 'wedding-celebrations',
    tagline: 'Wedding Catering in Bali',
    metaDescription: 'Make your Bali wedding unforgettable with myCHEF Indonesia private chef catering. Rehearsal dinners, intimate ceremonies, reception dining, and morning-after brunches. Professional wedding catering for all celebration sizes.',
    heroTitle: 'Wedding Catering in Bali',
    heroDescription: 'Create magical wedding dining moments with professional private chef services',
    icon: 'Church',
    content: {
      introduction: `A Bali wedding deserves dining as beautiful as your love story. Whether you're planning an intimate elopement dinner for two, a boutique villa wedding for 30 guests, or need catering support for larger celebrations, myCHEF Indonesia creates wedding dining experiences that become part of your forever memories.

Since 2012, we've been part of hundreds of Bali weddings - from surprise destination elopements to elaborate multi-day celebrations. Our professional chefs work with couples and wedding planners to create custom menus that reflect your tastes, accommodate your guests, and enhance your special day without the stress of DIY catering.

Your wedding celebration deserves more than banquet catering. With myCHEF, you get personalized menu design, professional execution, and the flexibility to create unique dining moments - from casual poolside welcome drinks to elegant plated receptions.`,
      whatWeOffer: [
        'Pre-wedding events: welcome dinners, rehearsal dinners, and spa day catering',
        'Wedding day catering: ceremony refreshments, cocktail hours, seated receptions',
        'Post-wedding brunches: the relaxed morning-after celebration you deserve',
        'Menu customization reflecting your story, cultures, and favorite cuisines',
        'Coordination with wedding planners, venues, and other vendors',
        'Dietary accommodation for diverse wedding guest requirements'
      ],
      howItWorks: [
        'Share your wedding vision: event timeline, guest count, venue, style, and culinary preferences',
        'We match you with experienced wedding chefs and propose menu concepts',
        'Tasting sessions available to finalize your wedding menu (cost applied to booking)',
        'Coordinate all details with your planner, finalize timeline, confirm service team',
        'On your wedding day(s), we execute flawlessly while you focus on love and celebration',
        'Seamless service from first course to final cleanup - your only job is to celebrate'
      ],
      whyChooseUs: [
        'Experienced with Bali wedding logistics and coordination',
        'Flexible service scales from intimate to large celebrations',
        'Works seamlessly with wedding planners and venue teams',
        'Custom menus that tell your story and delight your guests',
        'Professional, discrete service appropriate for formal celebrations',
        'Understanding of cultural and religious dietary requirements'
      ],
      pricing: 'Wedding catering varies significantly based on guest count, service style, and event duration. Intimate wedding dinner (10-20 guests) from Rp 8,000,000, boutique villa wedding (30-50 guests) from Rp 15,000,000, larger celebrations quoted individually. Tasting sessions from Rp 1,500,000 (credited to booking). Contact us for a detailed wedding proposal.',
      faq: [
        { question: 'Can you work with our wedding planner?', answer: 'Absolutely! We regularly coordinate with Bali wedding planners. We join planning calls, coordinate timelines, work with venue requirements, and ensure seamless integration with your overall wedding production.' },
        { question: 'Do you provide catering for multiple wedding events?', answer: 'Yes! Many couples book us for the complete wedding weekend: welcome dinner, wedding day, and morning-after brunch. We offer package pricing for multi-event bookings.' },
        { question: 'Can you accommodate cultural or religious dietary requirements?', answer: 'We specialize in diverse weddings! Hindu, Muslim, Jewish, Buddhist dietary requirements, plus vegan, vegetarian, and allergy needs. We can create menus that honor traditions while delighting all guests.' },
        { question: 'What\'s included in wedding catering service?', answer: 'Complete service: menu design, ingredient sourcing, cooking, beautiful plating, service staff (as needed), and full cleanup. We can also coordinate bar service, rental items, and other F&B elements.' },
        { question: 'How far in advance should we book for a wedding?', answer: 'For weddings, book 2-3 months ahead to ensure chef availability and allow time for menu planning and tastings. Peak wedding season (April-October) may require earlier booking for preferred dates.' }
      ]
    }
  },
  'cooking-classes': {
    name: 'Cooking Classes',
    slug: 'cooking-classes',
    tagline: 'Interactive Bali Cooking Experiences',
    metaDescription: 'Learn authentic Balinese and international cooking with myCHEF Indonesia private cooking classes. In-villa experiences, market tours, and hands-on instruction from professional chefs. Perfect for couples, families, and groups.',
    heroTitle: 'Private Cooking Classes in Bali',
    heroDescription: 'Master new cuisines with hands-on instruction from professional chefs in your villa',
    icon: 'ChefHat',
    content: {
      introduction: `Want to take more than photos home from Bali? Learn to cook authentic Balinese cuisine, master Indonesian street food, or explore international techniques with myCHEF Indonesia's private cooking classes. Our professional chefs transform your villa kitchen into a culinary classroom for unforgettable hands-on experiences.

Since 2012, we've taught cooking to couples, families, friend groups, and corporate teams across Bali. Unlike group cooking schools, our private classes are customized to your skill level, interests, and dietary needs. Whether you're a kitchen novice or experienced home cook, our patient instructors ensure you leave with new skills and recipes you'll use forever.

A private cooking class in Bali is more than learning recipes - it's cultural immersion. Optional market tours introduce you to local ingredients, traditional shopping, and the stories behind Balinese cuisine. Then you cook, you eat, and you take home skills that keep giving.`,
      whatWeOffer: [
        'In-villa private cooking classes for individuals, couples, families, or groups',
        'Market tour options: visit traditional Balinese markets, learn to select ingredients, understand local food culture',
        'Cuisine specializations: Traditional Balinese, Indonesian street food, Thai, Japanese, Italian, healthy cooking',
        'Customized instruction matching your skill level - beginner to advanced',
        'Complete recipes and technique guides to take home',
        'Cooking and then eating your creations - lunch or dinner included!'
      ],
      howItWorks: [
        'Tell us your interests: cuisines, skill level, group size, and any dietary preferences',
        'We match you with a patient, experienced instructor chef',
        'Confirm your class format: kitchen-only or with market tour (add 2 hours)',
        'On class day, your chef arrives with all ingredients and equipment needed',
        '3-4 hours of hands-on cooking instruction - you make everything yourself',
        'Sit down to enjoy your creations with your chef, then take home recipes'
      ],
      whyChooseUs: [
        'Professional chef instructors with teaching experience and patience',
        'Completely private - just you and your group, customized pace',
        'Flexible scheduling to fit your vacation itinerary',
        'All ingredients, equipment, and recipes included',
        'Market tours with English-speaking guides and cooking story context',
        'Eat what you cook - no going home hungry!'
      ],
      pricing: 'Private cooking class (1-4 participants) from Rp 2,000,000 including all ingredients, instruction, recipes, and the meal you prepare. Market tour add-on from Rp 500,000. Additional participants Rp 400,000 each. Group classes (8+ participants) available with special pricing. Contact us to design your perfect class.',
      faq: [
        { question: 'What cuisines can we learn?', answer: 'Traditional Balinese (satay, nasi goreng, lawar, sambal), Indonesian regional (rendang, soto), Asian cuisines (Thai, Japanese, Vietnamese), Western (pasta, risotto), and health-focused cooking. Tell us what you want to learn!' },
        { question: 'Is this suitable for beginners?', answer: 'Absolutely! Many participants have never cooked before. Our chefs are patient instructors who adapt to any skill level. You\'ll be guided step-by-step through every technique.' },
        { question: 'Can children participate?', answer: 'Yes! We offer family-friendly classes with kid-appropriate tasks. Children can roll satay, mix ingredients, and learn alongside parents. We tailor activities to make it fun and safe for all ages.' },
        { question: 'What does the market tour include?', answer: 'Visit a traditional Balinese market, learn to select fresh ingredients, understand local produce and spices, hear stories about Indonesian food culture. About 1.5-2 hours, followed by cooking what you bought!' },
        { question: 'What do we take home?', answer: 'All recipes written in English with techniques explained, tips for finding ingredients at home, and the satisfaction of new skills. Many guests tell us they cook their Bali dishes for years after!' }
      ]
    }
  },
  'weekly-meal-prep': {
    name: 'Weekly Meal Prep',
    slug: 'weekly-meal-prep',
    tagline: 'Regular Private Chef Services in Bali',
    metaDescription: 'Simplify your Bali stay with myCHEF Indonesia weekly meal prep and regular chef services. Perfect for long-stay travelers, families, digital nomads, and expats. Healthy, delicious meals prepared in your villa.',
    heroTitle: 'Weekly Chef Services in Bali',
    heroDescription: 'Enjoy regular, healthy meals with recurring private chef service',
    icon: 'Calendar',
    content: {
      introduction: `Staying in Bali for weeks or months? Whether you're a digital nomad, expat family, wellness retreat participant, or long-stay vacationer, myCHEF Indonesia's weekly meal prep and regular chef services transform your villa into a home with delicious, healthy meals - no daily cooking stress required.

Since 2012, we've served countless long-stay guests across Bali with recurring chef services. Our meal prep model is simple: your chef visits 1-2 times per week, prepares 3-5 days of fresh, portioned meals, and stocks your fridge with ready-to-heat nutrition. It's like having a personal chef without the full-time commitment.

Eating well in Bali shouldn't require restaurant spending or kitchen slavery. With weekly meal prep, you get home-cooked quality, customized to your dietary goals, at predictable costs that make long stays sustainable.`,
      whatWeOffer: [
        'Weekly meal prep: chef prepares 3-5 days of ready-to-heat meals in one visit',
        'Regular chef shifts: 2-3 days per week cooking fresh meals',
        'Extended stay packages: vacation-length chef services (1-4 weeks)',
        'Fully customized menus: high-protein, low-carb, vegan, family-friendly, or whatever you need',
        'Flexible scheduling around your work, activities, and lifestyle',
        'Portioned, labeled containers organized in your fridge'
      ],
      howItWorks: [
        'Tell us about your stay: duration, dietary goals, typical schedule, and household size',
        'We match you with a chef and discuss menu preferences, cooking frequency, and budget',
        'Choose your service format: meal prep visits, regular chef days, or combination',
        'Your chef shops for fresh ingredients (included in service or you provide budget)',
        'Cooking days: chef prepares, portions, labels, and stores meals. Kitchen left spotless',
        'You enjoy healthy, delicious meals all week without cooking or cleanup'
      ],
      whyChooseUs: [
        'Specialists in long-stay and recurring service logistics',
        'Dietary customization for health goals: weight loss, muscle gain, wellness protocols',
        'Predictable weekly/monthly budgeting - no surprise costs',
        'Flexible scheduling adapts to your work and travel within Bali',
        'Same chef builds relationship, learns your preferences',
        'Cost-effective alternative to daily restaurant dining'
      ],
      pricing: 'Weekly meal prep (1 cooking session, 3-4 days of meals for 1-2 people) from Rp 2,500,000/week including chef time and ingredients. Regular chef service (2 days/week cooking) from Rp 4,000,000/week. Larger households and extended packages priced individually. Contact us for a recurring service proposal.',
      faq: [
        { question: 'How does meal prep differ from having a chef cook daily?', answer: 'Meal prep: chef visits 1-2 times weekly, batch cooks 3-5 days of meals, stored for easy reheating. Daily cooking: chef comes multiple days weekly to prepare fresh meals. Meal prep is more cost-effective; daily cooking offers more variety.' },
        { question: 'Can meal prep work for a family with children?', answer: 'Absolutely! We prepare kid-friendly options alongside adult meals. Common setup: pasta, rice dishes, and proteins kids love, plus more adventurous meals for parents. Everyone eats well.' },
        { question: 'How are meals stored and reheated?', answer: 'Meals are portioned into containers, labeled with contents and reheating instructions, and organized in your fridge. Most meals simply require 5-10 minutes of stovetop or microwave reheating.' },
        { question: 'Can you support specific dietary protocols?', answer: 'Yes! We support keto, paleo, Whole30, vegan, low-carb, high-protein, anti-inflammatory, elimination diets, and more. Tell us your goals and restrictions; we design menus accordingly.' },
        { question: 'Is this cost-effective compared to restaurants?', answer: 'Much more so! Weekly meal prep typically costs less than 2-3 restaurant dinners, yet feeds you all week with healthy, customized meals. For long stays, the savings are substantial while eating better.' }
      ]
    }
  }
};

export const SERVICE_LIST = Object.values(SERVICE_DATA);
