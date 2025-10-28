import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ChefHat, Star, Users, Sparkles, Award, ShieldCheck, FileText } from 'lucide-react';

const PRICING_EXAMPLES = [
  {
    type: 'Intimate Dinner for 2',
    price: 'From Rp 2,500,000',
    chefRate: 'Rp 800,000 - 1,200,000',
    hours: '3 hours',
    description: 'Perfect for romantic dinners, anniversaries, or proposals',
    cuisines: ['French', 'Italian', 'Japanese', 'Fusion'],
  },
  {
    type: 'Family Gathering (4-6 guests)',
    price: 'From Rp 3,500,000',
    chefRate: 'Rp 850,000 - 1,000,000',
    hours: '3-4 hours',
    description: 'Ideal for family celebrations and casual get-togethers',
    cuisines: ['Indonesian', 'Mediterranean', 'Asian Fusion', 'BBQ'],
  },
  {
    type: 'Villa Party (8-12 guests)',
    price: 'From Rp 5,500,000',
    chefRate: 'Rp 900,000 - 1,100,000',
    hours: '4-5 hours',
    description: 'Great for birthdays, reunions, and special occasions',
    cuisines: ['Seafood BBQ', 'Indonesian Rijsttafel', 'Mixed Cuisine'],
  },
  {
    type: 'Large Event (15-20 guests)',
    price: 'From Rp 8,000,000',
    chefRate: 'Rp 1,000,000 - 1,200,000',
    hours: '5-6 hours',
    description: 'Perfect for weddings, corporate events, and big celebrations',
    cuisines: ['Buffet Style', 'Multi-Course', 'Custom Menus'],
  },
];

export default function ChefProfiles() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=chefProfiles');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=chefProfiles');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4" data-testid="text-chefs-headline">
            We'll Find Your Perfect Match
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-6" data-testid="text-chefs-subheadline">
            Tell us what you're celebrating and what you love to eat. We'll match you with the perfect chef from our network of Indonesian and international culinary experts - all based in Bali and ready to cook in your home.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Badge variant="outline" className="gap-1.5">
              <Award className="w-3.5 h-3.5" />
              5+ Years Experience
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Background Checked
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <Star className="w-3.5 h-3.5" />
              HACCP Certified
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-primary/5 border-primary/20 border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">Expert Matching</h3>
                    <Badge variant="secondary" className="text-xs">AI-Powered</Badge>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    We personally match you with chefs based on your cuisine preference, group size, budget, and occasion. Every chef is vetted with minimum 5 years experience in top restaurants and holds professional culinary certifications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20 border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">Diverse Specialties</h3>
                    <Badge variant="secondary" className="text-xs">50+ Chefs</Badge>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    From Indonesian traditional masters to French fine dining experts, Japanese omakase specialists to Mediterranean BBQ pros - all English-speaking with international training and local expertise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8" data-testid="text-pricing-examples-headline">
          Pricing Examples by Group Size
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {PRICING_EXAMPLES.map((example, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-pricing-${index}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <CardTitle className="text-xl" data-testid={`text-pricing-${index}-type`}>
                    {example.type}
                  </CardTitle>
                  <ChefHat className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div className="text-2xl font-bold text-primary" data-testid={`text-pricing-${index}-price`}>
                  {example.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/70" data-testid={`text-pricing-${index}-description`}>
                  {example.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Chef Service:</span>
                    <span className="font-semibold">{example.chefRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Typical Duration:</span>
                    <span className="font-semibold">{example.hours}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-foreground/60 mb-2">Popular cuisines:</p>
                  <div className="flex flex-wrap gap-2">
                    {example.cuisines.map((cuisine, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {cuisine}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-accent/20 border-accent mb-8">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-pricing-disclaimer">
              <strong>Note:</strong> Prices shown include estimated chef service fees for indicated duration. Ingredient costs are additional and vary by menu selection. Final pricing depends on menu complexity, number of guests, and service duration. Contact us on WhatsApp for exact quotes tailored to your event.
            </p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleQuoteClick}
            variant="outline"
            className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-chefs-quote"
          >
            <FileText className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">See Chef Options</span>
            <span className="sm:hidden">See Chefs</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-chefs-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Find My Perfect Chef</span>
            <span className="sm:hidden">Find Chef</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
