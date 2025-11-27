import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, ShoppingCart, Users, Car, MessageCircle, Calculator } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PricingSection() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=pricing');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=pricing');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-pricing-headline">
          Transparent Pricing
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-2">
          No hidden fees - know exactly what you're paying for
        </p>
        <div className="text-center mb-12">
          <p className="text-sm text-center text-foreground/60 mb-3">
            Online payment & cash (IDR) • 50% when you book, 50% the day before
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-xs font-semibold text-foreground/70">Accepted:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">VISA</span>
              <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">MC</span>
              <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded">AMEX</span>
              <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded">DISCOVER</span>
              <span className="px-2 py-1 bg-gray-700 text-white text-xs font-bold rounded">IDR</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
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

          <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Ingredient Shopping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-primary mb-1">⭐ Most Popular</p>
                <p className="font-semibold text-sm">Chef Arrives Early & Shops</p>
                <p className="text-xs text-foreground/70 mt-1">Chef comes 2 hours before, you discuss menu together, give them cash, and they buy exactly what you need from the best markets</p>
              </div>
              <div className="text-sm text-foreground/80 space-y-2">
                <div>
                  <p className="font-semibold text-xs">Other Options:</p>
                  <p className="text-xs text-foreground/70">• We source beforehand (market price + 15-20% fee)</p>
                  <p className="text-xs text-foreground/70">• You shop yourself using our list</p>
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button
            size="lg"
            onClick={handleQuoteClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-pricing-quote"
          >
            <Calculator className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Get Your Custom Quote</span>
            <span className="sm:hidden">Get Quote</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            variant="outline"
            className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-pricing-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Discuss My Budget</span>
            <span className="sm:hidden">Chat Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
