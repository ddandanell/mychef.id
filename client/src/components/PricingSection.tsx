import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, ShoppingCart, Users, Car, MessageCircle, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Daily Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-primary" data-testid="text-daily-rate">
                800,000 IDR
              </div>
              <p className="text-sm text-foreground/70">per hour</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Weekly Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-primary" data-testid="text-weekly-rate">
                350,000 IDR
              </div>
              <p className="text-sm text-foreground/70">per hour (7+ days)</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Monthly Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-3xl font-bold text-primary" data-testid="text-monthly-rate">
                250,000 IDR
              </div>
              <p className="text-sm text-foreground/70">per hour (30+ days)</p>
            </CardContent>
          </Card>
        </div>

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
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              onClick={handleQuoteClick}
              className="bg-primary hover:bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 text-sm lg:text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-pricing-quote"
            >
              <Calculator className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Get Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              onClick={handleWhatsAppClick}
              variant="outline"
              className="px-4 md:px-6 py-2 md:py-3 text-sm lg:text-base font-semibold hover-elevate active-elevate-2"
              data-testid="button-pricing-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Chat Now</span>
              <span className="sm:hidden">Chat</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
