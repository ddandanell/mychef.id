import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat } from 'lucide-react';

const SHOWCASE_CHEFS = [
  { name: 'Professional Sushi Chef', specialty: '🍣 Japanese', hours: '4-8 hours' },
  { name: 'French Culinary Master', specialty: '🇫🇷 French', hours: '4-8 hours' },
  { name: 'Italian Chef', specialty: '🇮🇹 Italian', hours: '4-8 hours' },
  { name: 'Master Chef Indonesian', specialty: '🇮🇩 Indonesian', hours: '4-8 hours' },
  { name: 'Thai Culinary Expert', specialty: '🇹🇭 Thai', hours: '4-8 hours' },
  { name: 'Spanish Chef', specialty: '🇪🇸 Spanish', hours: '4-8 hours' },
  { name: 'Mediterranean Chef', specialty: '🌊 Mediterranean', hours: '4-8 hours' },
  { name: 'Fusion Master Chef', specialty: '🍽️ Asian Fusion', hours: '4-8 hours' },
];

export default function ChefShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 mb-4">
            <ChefHat className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold mb-4" data-testid="text-chef-showcase-headline">
            Our Specialist Chefs
          </h2>
          <p className="text-sm font-semibold text-primary mb-3">🌟 200+ Chefs | Bali's Largest Database</p>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from our expert chefs trained in world-class restaurants. With 200+ local and foreign chefs, we match you with the perfect culinary match. All available for your private dining experience in Bali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SHOWCASE_CHEFS.map((chef, index) => (
            <Card 
              key={index} 
              className="border-2 border-primary/20 hover:border-primary transition-colors hover-elevate cursor-pointer"
              data-testid={`card-chef-showcase-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{chef.specialty.split(' ')[0]}</div>
                <h3 className="font-semibold text-foreground mb-2" data-testid={`text-chef-name-${index}`}>
                  {chef.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-3">{chef.specialty.split(' ').slice(1).join(' ')}</p>
                <p className="text-xs text-primary font-semibold">⏱️ {chef.hours}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center mb-8">
          <p className="text-foreground/70 max-w-2xl mx-auto mb-4">
            All our chefs are experienced professionals with 5+ years in fine dining restaurants. 
            They arrive with all equipment, complete your kitchen cleanup, and handle food shopping. 
            <strong className="text-primary"> Ready to cook anywhere in Bali.</strong>
          </p>
          <div className="max-w-2xl mx-auto bg-primary/10 border-2 border-primary/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-3">📊 Transparent Pricing Structure:</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>1-2 Days:</span>
                <span className="font-bold text-primary">Rp 3,000,000/day</span>
              </div>
              <div className="flex justify-between">
                <span>3-6 Days:</span>
                <span className="font-bold text-primary">Rp 2,300,000/day</span>
              </div>
              <div className="flex justify-between">
                <span>7-20 Days:</span>
                <span className="font-bold text-primary">Rp 1,700,000/day</span>
              </div>
              <div className="flex justify-between">
                <span>21+ Days:</span>
                <span className="font-bold text-primary">Rp 1,200,000/day</span>
              </div>
              <div className="border-t border-primary/20 pt-2 mt-2 flex justify-between font-bold">
                <span>Full Month (30+ days):</span>
                <span className="text-primary">Rp 29,000,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
