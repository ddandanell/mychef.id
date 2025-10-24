import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

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
    breakdown: 'Food Rp 1,200k + Chef 4 hours @ Rp 800k/hr = Rp 4,400k total',
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
    breakdown: 'Food Rp 2,400k (fresh seafood) + Chef 4 hours @ Rp 800k/hr = Rp 5,600k total',
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
    breakdown: 'Food Rp 1,800k + Chef 4 hours @ Rp 900k/hr = Rp 5,400k total',
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
    breakdown: 'Food Rp 2,200k + Chef 5 hours @ Rp 800k/hr = Rp 6,200k total',
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
    breakdown: 'Food Rp 2,800k + Chef 5 hours @ Rp 900k/hr = Rp 7,300k total',
  },
  {
    name: 'Villa Pool Party BBQ',
    guests: 20,
    foodCost: 'Rp 4,500,000',
    chefCost: 'Rp 5,600,000',
    total: 'Rp 10,100,000',
    courses: [
      'BBQ station: Mixed satay (20 sticks per person), grilled chicken wings, beef ribs',
      'Seafood grill: Prawns, whole fish, grilled corn',
      'Hot dishes: Nasi goreng, mie goreng, cap cay',
      'Cold appetizers: Gado-gado salad, fruit platter, Asian slaw',
      'Drinks: Fresh juice station (orange, watermelon, mixed fruit)',
      'Dessert: Assorted kue (Indonesian cakes), es campur',
    ],
    breakdown: 'Food Rp 4,500k + Chef 4 hours @ Rp 1,000k/hr + Waiter 4 hours @ Rp 150k/hr + Helper 4 hours @ Rp 150k/hr = Rp 10,100k total',
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
      </div>
    </section>
  );
}
