import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe2 } from 'lucide-react';

const MENUS = [
  {
    name: 'Indonesian Rijsttafel Party',
    guests: 6,
    foodCost: 'Rp 1,200,000',
    chefCost: 'Rp 3,200,000',
    total: 'Rp 4,400,000',
    courses: [
      'Welcome: Es kelapa muda (fresh coconut water)',
      'Appetizers: Mini satay (chicken, beef), gado-gado, perkedel jagung',
      'Main rijsttafel: Rendang sapi, ayam betutu, ikan bakar sambal matah, sayur urap, tempe goreng, tahu isi, nasi putih, nasi kuning',
      'Sambal selection: Sambal matah, sambal terasi, sambal kecap',
      'Dessert: Klepon, pisang goreng, es campur',
    ],
    breakdown: 'Food Rp 1,200,000 + Chef 4 hours @ Rp 800,000/hr = Rp 4,400,000 total',
  },
  {
    name: 'Jimbaran Seafood BBQ Feast',
    guests: 8,
    foodCost: 'Rp 2,400,000',
    chefCost: 'Rp 3,200,000',
    total: 'Rp 5,600,000',
    courses: [
      'Fresh seafood from Jimbaran market: Grilled prawns, whole fish (kakap/snapper), squid',
      'Grilled chicken and beef satay',
      'Sambal matah, sambal kecap, kecap manis',
      'Sides: Nasi goreng, cap cay vegetables, fresh cucumber & tomato salad',
      'Fresh tropical fruits: Watermelon, pineapple, papaya',
    ],
    breakdown: 'Food Rp 2,400,000 (fresh seafood) + Chef 4 hours @ Rp 800,000/hr = Rp 5,600,000 total',
  },
  {
    name: 'Traditional Balinese Celebration',
    guests: 10,
    foodCost: 'Rp 1,800,000',
    chefCost: 'Rp 3,600,000',
    total: 'Rp 5,400,000',
    courses: [
      'Welcome drink: Jamu kunyit asam or lemongrass tea',
      'Appetizer: Sate lilit (minced fish satay), lawar (mixed vegetable salad)',
      'Main dishes: Ayam betutu (slow-cooked chicken), bebek goreng (crispy duck), ikan pepes (steamed fish in banana leaf)',
      'Vegetables: Plecing kangkung, urap sayuran, sambal matah',
      'Rice: Nasi putih, nasi kuning',
      'Dessert: Dadar gulung (green pancakes), kolak pisang',
    ],
    breakdown: 'Food Rp 1,800,000 + Chef 4 hours @ Rp 900,000/hr = Rp 5,400,000 total',
  },
  {
    name: 'Indonesian Street Food Party',
    guests: 12,
    foodCost: 'Rp 2,200,000',
    chefCost: 'Rp 4,000,000',
    total: 'Rp 6,200,000',
    courses: [
      'Live stations: Bakso (meatball soup), mie goreng (fried noodles), nasi goreng kambing',
      'Satay selection: Chicken, beef, lamb with peanut sauce',
      'Street favorites: Martabak telur, lumpia goreng, tahu isi, bakwan jagung',
      'Sweet treats: Martabak manis (sweet pancake), es teler, es cendol',
    ],
    breakdown: 'Food Rp 2,200,000 + Chef 5 hours @ Rp 800,000/hr = Rp 6,200,000 total',
  },
  {
    name: 'Birthday Party Indonesian Style',
    guests: 15,
    foodCost: 'Rp 2,800,000',
    chefCost: 'Rp 4,500,000',
    total: 'Rp 7,300,000',
    courses: [
      'Appetizer buffet: Spring rolls, risoles, pastel, lemper',
      'Main buffet: Nasi tumpeng (yellow rice cone), ayam goreng kremes, rendang sapi, gulai kambing',
      'Seafood: Udang saus padang (prawns in Padang sauce), cumi goreng tepung',
      'Vegetables: Capcay, tumis kangkung, sambal goreng kentang',
      'Birthday cake: Custom Indonesian or Western style cake',
    ],
    breakdown: 'Food Rp 2,800,000 + Chef 5 hours @ Rp 900,000/hr = Rp 7,300,000 total',
  },
  {
    name: 'Villa Pool Party BBQ',
    guests: 20,
    foodCost: 'Rp 4,500,000',
    chefCost: 'Rp 6,400,000',
    total: 'Rp 10,900,000',
    courses: [
      'BBQ station: Mixed satay (20 sticks per person), grilled chicken wings, beef ribs',
      'Seafood grill: Prawns, whole fish, grilled corn',
      'Hot dishes: Nasi goreng, mie goreng, cap cay',
      'Cold appetizers: Gado-gado salad, fruit platter, Asian slaw',
      'Drinks: Fresh juice station (orange, watermelon, mixed fruit)',
      'Dessert: Assorted kue (Indonesian cakes), es campur',
    ],
    breakdown: 'Food Rp 4,500,000 + Chef 4 hours @ Rp 1,000,000/hr + Waiter 4 hours @ Rp 300,000/hr + Helper 4 hours @ Rp 300,000/hr = Rp 10,900,000 total',
  },
  {
    name: 'Thai Family Feast',
    guests: 8,
    foodCost: 'Rp 2,000,000',
    chefCost: 'Rp 3,600,000',
    total: 'Rp 5,600,000',
    courses: [
      'Appetizers: Fresh spring rolls, tom yum soup, chicken satay with peanut sauce',
      'Curries: Green curry with chicken, massaman curry with beef, panang curry with prawns',
      'Stir-fries: Pad thai noodles, pad see ew, basil chicken (pad krapow)',
      'Salads: Som tam (papaya salad), larb gai (chicken salad)',
      'Dessert: Mango sticky rice, coconut ice cream',
    ],
    breakdown: 'Food Rp 2,000,000 + Chef 4 hours @ Rp 900,000/hr = Rp 5,600,000 total',
  },
  {
    name: 'Japanese Omakase Experience',
    guests: 4,
    foodCost: 'Rp 3,200,000',
    chefCost: 'Rp 4,800,000',
    total: 'Rp 8,000,000',
    courses: [
      'Appetizer: Edamame, miso soup, wakame salad',
      'Sashimi platter: Premium tuna, salmon, yellowtail, fresh wasabi',
      'Sushi selection: Nigiri (10 pieces per person), specialty rolls',
      'Hot dishes: Wagyu beef tataki, grilled black cod, tempura vegetables',
      'Dessert: Mochi ice cream, matcha cheesecake',
    ],
    breakdown: 'Food Rp 3,200,000 (premium ingredients) + Chef 4 hours @ Rp 1,200,000/hr = Rp 8,000,000 total',
  },
  {
    name: 'Chinese Banquet Dinner',
    guests: 10,
    foodCost: 'Rp 2,500,000',
    chefCost: 'Rp 3,600,000',
    total: 'Rp 6,100,000',
    courses: [
      'Appetizers: Dim sum platter (har gow, siu mai, spring rolls), crispy duck',
      'Soups: Hot and sour soup, sweet corn chicken soup',
      'Main dishes: Peking duck pancakes, sweet and sour pork, kung pao chicken, mapo tofu',
      'Seafood: Steamed fish with ginger, salt and pepper squid',
      'Rice & noodles: Yang chow fried rice, chow mein',
      'Dessert: Deep fried ice cream, fortune cookies',
    ],
    breakdown: 'Food Rp 2,500,000 + Chef 4 hours @ Rp 900,000/hr = Rp 6,100,000 total',
  },
  {
    name: 'Padang Feast (Indonesian)',
    guests: 12,
    foodCost: 'Rp 2,400,000',
    chefCost: 'Rp 4,000,000',
    total: 'Rp 6,400,000',
    courses: [
      'Signature dishes: Rendang sapi (slow-cooked beef), ayam pop (fried chicken), gulai ikan (fish curry)',
      'Vegetables: Sayur nangka (jackfruit curry), gulai daun singkong (cassava leaves), sambal goreng hati',
      'Sides: Perkedel kentang (potato fritters), telur balado (spicy eggs), kerupuk',
      'Rice: Nasi putih, nasi kuning',
      'Sambal: Sambal hijau, sambal merah, sambal ijo',
      'Dessert: Bubur sumsum, kue cucur',
    ],
    breakdown: 'Food Rp 2,400,000 + Chef 5 hours @ Rp 800,000/hr = Rp 6,400,000 total',
  },
];

const CUISINES = [
  {
    flag: '🇯🇵',
    name: 'Japanese',
    specialty: 'Omakase, Wagyu beef, handmade sushi & sashimi, authentic ramen',
  },
  {
    flag: '🇮🇹',
    name: 'Italian',
    specialty: 'Fresh pasta, risotto, osso buco, tiramisu & wood-fired pizza',
  },
  {
    flag: '🇫🇷',
    name: 'French',
    specialty: 'Coq au vin, bouillabaisse, crème brûlée & classic sauces',
  },
  {
    flag: '🇹🇭',
    name: 'Thai',
    specialty: 'Pad Thai, Tom Yum, green curry, mango sticky rice',
  },
  {
    flag: '🇮🇳',
    name: 'Indian',
    specialty: 'Tandoori, butter chicken, biryani, curry masala & naan',
  },
  {
    flag: '🇨🇳',
    name: 'Chinese',
    specialty: 'Peking duck, dim sum, kung pao, mapo tofu & wok dishes',
  },
  {
    flag: '🇰🇷',
    name: 'Korean',
    specialty: 'Korean BBQ, bibimbap, kimchi, bulgogi & tteokbokki',
  },
  {
    flag: '🇪🇸',
    name: 'Spanish',
    specialty: 'Paella, tapas, jamón ibérico, churros & sangria',
  },
  {
    flag: '🇬🇷',
    name: 'Greek',
    specialty: 'Moussaka, souvlaki, Greek salad, tzatziki & baklava',
  },
  {
    flag: '🇻🇳',
    name: 'Vietnamese',
    specialty: 'Pho, banh mi, spring rolls, bun cha & fresh herbs',
  },
  {
    flag: '🇱🇧',
    name: 'Lebanese',
    specialty: 'Mezze platters, hummus, falafel, shawarma & tabbouleh',
  },
  {
    flag: '🇺🇸',
    name: 'American BBQ',
    specialty: 'Smoked brisket, ribs, pulled pork, mac & cheese, cornbread',
  },
  {
    flag: '🇲🇽',
    name: 'Mexican',
    specialty: 'Tacos, mole, ceviche, enchiladas & authentic guacamole',
  },
  {
    flag: '🇵🇪',
    name: 'Peruvian',
    specialty: 'Ceviche, lomo saltado, anticuchos & pisco sour',
  },
  {
    flag: '🇧🇷',
    name: 'Brazilian',
    specialty: 'Churrasco, feijoada, pão de queijo & caipirinha',
  },
  {
    flag: '🇲🇦',
    name: 'Moroccan',
    specialty: 'Tagine, couscous, harira, pastilla & mint tea',
  },
  {
    flag: '🇹🇷',
    name: 'Turkish',
    specialty: 'Kebabs, manti, börek, baklava & Turkish breakfast',
  },
  {
    flag: '✨',
    name: 'Modern Fusion',
    specialty: 'Creative blends, molecular gastronomy & international twists',
  },
];

export default function SampleMenus() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-menus-headline">
          Sample Menus & Pricing
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-12">
          Real Indonesian party menus with authentic Bali dishes and transparent pricing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {MENUS.map((menu, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-menu-${index}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2">
                  <CardTitle className="text-lg sm:text-xl" data-testid={`text-menu-${index}-name`}>
                    {menu.name}
                  </CardTitle>
                  <Badge variant="secondary" className="flex items-center gap-1 flex-shrink-0 text-xs">
                    <Users className="w-3 h-3" />
                    {menu.guests}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold text-primary break-words" data-testid={`text-menu-${index}-total`}>
                    {menu.total}
                  </div>
                  <div className="text-xs text-foreground/60">
                    Food: {menu.foodCost} + Service: {menu.chefCost}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Menu:</h4>
                  <ul className="space-y-2">
                    {menu.courses.map((course, i) => (
                      <li key={i} className="text-sm text-foreground/80" data-testid={`text-menu-${index}-course-${i}`}>
                        • {course}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-1 text-sm">Breakdown:</h4>
                  <p className="text-xs text-foreground/70" data-testid={`text-menu-${index}-breakdown`}>
                    {menu.breakdown}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            All prices are estimates. Actual costs depend on market prices and your specific requests. Contact us on WhatsApp for exact quotes.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8 lg:p-12 border border-primary/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe2 className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
            <h3 className="font-serif text-2xl lg:text-4xl font-semibold text-center" data-testid="text-international-cuisine-headline">
              World-Class Chefs for Every Cuisine
            </h3>
          </div>
          <p className="text-center text-base lg:text-lg text-foreground/70 mb-8 max-w-3xl mx-auto">
            While the examples above showcase Indonesian cuisine, our chef network includes 50+ specialists trained around the world in 18+ international cuisines
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {CUISINES.map((cuisine, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 bg-background/80 backdrop-blur-sm" data-testid={`card-cuisine-${index}`}>
                <CardContent className="p-4 sm:p-5 text-center">
                  <div className="text-3xl sm:text-4xl mb-2">{cuisine.flag}</div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1" data-testid={`text-cuisine-${index}-name`}>
                    {cuisine.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/60 leading-tight" data-testid={`text-cuisine-${index}-specialty`}>
                    {cuisine.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
            <p className="text-base lg:text-lg font-semibold text-foreground/90">
              Whatever cuisine you crave, we have the perfect chef.
            </p>
            <p className="text-sm lg:text-base text-foreground/70 mt-2">
              Just tell us what you want, and we'll match you with a specialist who can bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
