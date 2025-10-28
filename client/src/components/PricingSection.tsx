import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChefHat, ShoppingCart, Users, Car } from 'lucide-react';

export default function PricingSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-pricing-headline">
          Transparent Pricing
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-2">
          No hidden fees - know exactly what you're paying for
        </p>
        <p className="text-sm text-center text-foreground/60 mb-12">
          💳 Online payment (Visa, MasterCard, all cards) & cash (IDR) • 50% when you book, 50% the day before
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Chef Service Fees
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2 break-words" data-testid="text-chef-fees-range">
                  Rp 800,000 - 1,200,000+/hour
                </div>
                <p className="text-sm text-foreground/70">
                  Varies by chef expertise and cuisine specialty
                </p>
              </div>
              <div className="text-sm text-foreground/80 space-y-2">
                <p>• Minimum 3-4 hours of service for most dinners</p>
                <p>• All cooking equipment and tools provided</p>
                <p>• Complete kitchen cleanup included</p>
                <p>• Beautiful plating and presentation</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Ingredient Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-lg font-semibold mb-2">Two Options:</div>
              </div>
              <div className="text-sm text-foreground/80 space-y-3">
                <div>
                  <p className="font-semibold">Option 1: We Source for You</p>
                  <p className="text-foreground/70">Separate bill for groceries (market price + 15-20% sourcing fee)</p>
                </div>
                <div>
                  <p className="font-semibold">Option 2: You Purchase</p>
                  <p className="text-foreground/70">Chef provides shopping list, you buy ingredients</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              Additional Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-lg sm:text-xl font-bold text-primary" data-testid="text-waiter-rate">Rp 300,000/hour</div>
                <p className="text-sm text-foreground/70">Professional Waiter/Server</p>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-primary" data-testid="text-bartender-rate">Rp 400,000/hour</div>
                <p className="text-sm text-foreground/70">Bartender</p>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-primary" data-testid="text-sommelier-rate">Rp 500,000/hour</div>
                <p className="text-sm text-foreground/70">Sommelier/Wine Expert</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-accent/20 border-accent">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Car className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Travel Fees</h3>
                <p className="text-sm text-foreground/70">
                  May apply for remote locations outside main service areas. Discussed during booking process. Most Bali locations have no travel fees.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
