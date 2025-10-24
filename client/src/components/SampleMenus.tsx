import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';

const MENUS = [
  {
    name: 'Indonesian Rijsttafel',
    guests: 6,
    total: 'Rp 3,500,000',
    courses: [
      'Welcome drink: Es kelapa muda',
      'Appetizer spread: Mini satay, gado-gado, perkedel',
      'Main rijsttafel: 8 traditional dishes including rendang, ayam betutu, ikan bakar, sambal varieties',
      'Dessert: Klepon and pisang goreng',
    ],
    breakdown: 'Chef 4 hours (Rp 900k) + Ingredients (Rp 1,100k) + Service (Rp 1,500k)',
  },
  {
    name: 'Bali Seafood BBQ',
    guests: 8,
    total: 'Rp 4,200,000',
    courses: [
      'Fresh seafood platter: Prawns, lobster, fish from Jimbaran market',
      'Grilled selections with sambal matah',
      'Side dishes: Balinese vegetables, coconut rice',
      'Tropical fruit dessert',
    ],
    breakdown: 'Chef 4 hours (Rp 900k) + Fresh seafood (Rp 2,100k) + Service (Rp 1,200k)',
  },
  {
    name: 'Romantic French Dinner',
    guests: 2,
    total: 'Rp 2,800,000',
    courses: [
      'Amuse-bouche',
      'Foie gras appetizer',
      'French onion soup',
      'Pan-seared duck breast with cherry reduction',
      'Cheese course',
      'Crème brûlée',
    ],
    breakdown: 'Chef 3 hours (Rp 1,200k) + Premium ingredients (Rp 1,100k) + Service (Rp 500k)',
  },
  {
    name: 'Vegetarian Feast',
    guests: 4,
    total: 'Rp 2,400,000',
    courses: [
      'Fresh spring rolls with peanut sauce',
      'Creamy mushroom soup',
      'Tempeh rendang',
      'Jackfruit satay',
      'Organic vegetable curry',
      'Coconut panna cotta',
    ],
    breakdown: 'Chef 3.5 hours (Rp 850k) + Organic ingredients (Rp 800k) + Service (Rp 750k)',
  },
  {
    name: 'Family Italian Night',
    guests: 10,
    total: 'Rp 5,000,000',
    courses: [
      'Antipasti platter',
      'Fresh-made pasta course (choice of 3)',
      'Osso buco or chicken piccata',
      'Risotto ai funghi',
      'Tiramisu and gelato',
    ],
    breakdown: 'Chef 5 hours (Rp 1,000k) + Ingredients (Rp 1,800k) + Waiter (Rp 600k) + Service (Rp 1,600k)',
  },
  {
    name: 'Japanese Omakase',
    guests: 6,
    total: 'Rp 6,000,000',
    courses: [
      'Assorted sashimi (premium cuts)',
      'Chawanmushi',
      'Grilled miso black cod',
      'Wagyu beef tataki',
      'Nigiri selection (12 pieces)',
      'Mochi dessert',
    ],
    breakdown: 'Chef 4 hours (Rp 1,200k) + Premium fish & wagyu (Rp 3,500k) + Service (Rp 1,300k)',
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
          Real examples to help you plan your perfect dining experience
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
                <div className="text-xl sm:text-2xl font-bold text-primary break-words" data-testid={`text-menu-${index}-total`}>
                  {menu.total}
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
            All prices are estimates. Contact us on WhatsApp for exact quotes based on your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
