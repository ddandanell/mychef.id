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
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from our expert chefs trained in world-class restaurants. All available for your private dining experience in Bali.
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

        <div className="mt-12 text-center">
          <p className="text-foreground/70 max-w-2xl mx-auto">
            All our chefs are experienced professionals with 5+ years in fine dining restaurants. 
            They arrive with all equipment, complete your kitchen cleanup, and handle food shopping. 
            <strong className="text-primary"> Ready to cook anywhere in Bali.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
