import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Clock, DollarSign, Star, CheckCircle2, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function IngredientShoppingSection() {
  const [, setLocation] = useLocation();
  
  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=ingredientShopping');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <ShoppingCart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4" data-testid="text-ingredient-shopping-headline">
            Complete Transparency with Ingredient Shopping
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Most of our customers prefer this method - it gives you complete control over quality, budget, and portions
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2" data-testid="text-preferred-method-title">
                    Our Most Popular Method: Chef Arrives Early & Shops
                  </h3>
                  <p className="text-foreground/80 text-lg">
                    Your chef comes 2 hours before your event to plan everything with you personally
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">30-Minute Planning Session</p>
                    <p className="text-sm text-foreground/70">
                      Sit down with your chef to discuss the menu in detail. Adjust dishes, talk about quality preferences, decide on portions, and plan if you want ingredients for extra meals or breakfast the next day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">You Give Chef Cash for Shopping</p>
                    <p className="text-sm text-foreground/70">
                      Based on your discussion, you give the chef money for ingredients. They go to the best local markets and buy exactly what you need - nothing more, nothing less.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <ShoppingCart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Chef Shops at Best Markets</p>
                    <p className="text-sm text-foreground/70">
                      Your chef personally selects fresh, high-quality ingredients from trusted local markets. They know exactly where to get the best seafood, meats, vegetables, and specialty items.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Chef Returns & Starts Cooking</p>
                    <p className="text-sm text-foreground/70">
                      Your chef comes back with fresh ingredients and begins preparing your meal. You only paid for what was actually purchased - complete transparency!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-elevate" data-testid="card-benefit-control">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Complete Control</h3>
              <p className="text-sm text-foreground/70">
                You decide exactly what quality ingredients you want and how much to spend. Want organic vegetables? Premium wagyu beef? It's your choice.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-benefit-transparency">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Only Pay What's Used</h3>
              <p className="text-sm text-foreground/70">
                No markup fees, no surprises. You pay exactly what the ingredients cost at the market. Many chefs even return with receipts and change!
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-benefit-flexibility">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Plan Multiple Meals</h3>
              <p className="text-sm text-foreground/70">
                Smart planning! Get ingredients for tonight's dinner AND breakfast tomorrow, or prep for multiple days. Your chef helps you maximize value.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            Of course, if you prefer, we can also source ingredients beforehand or provide a shopping list for you to purchase yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
