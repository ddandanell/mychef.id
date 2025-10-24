import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ChefHat, Utensils, Award, Check, Sparkles, Star, Users2, Globe2, BookOpen, ShieldCheck } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';
const WHATSAPP_MESSAGE = 'Hi! I would like to get a custom quote for my event in Bali.';

const STATS = [
  { number: '2+', label: 'Years Training', icon: BookOpen },
  { number: '5+', label: 'Years Experience', icon: Star },
  { number: '10+', label: 'Chef Specialties', icon: ChefHat },
  { number: '25+', label: 'Cuisine Types', icon: Globe2 },
];

const CHEF_FEATURES = [
  { icon: Star, text: 'Minimum 2 years professional culinary training' },
  { icon: Award, text: 'Minimum 5 years experience in top Bali restaurants and resorts' },
  { icon: Globe2, text: 'Expertise in Indonesian classics, Western fine dining, Asian fusion' },
];

const MENU_SPECIALTIES = [
  'Indonesian Traditional', 'Modern Asian', 'Italian', 'French', 'BBQ & Grills',
  'Vegan/Vegetarian', 'Japanese', 'Seafood', 'Fusion', 'Mediterranean',
];

const MENU_FEATURES = [
  { icon: Sparkles, text: 'Flexible pricing to match your budget' },
  { icon: ShieldCheck, text: 'Accommodation of all dietary requirements: halal, vegetarian, vegan, gluten-free, allergies' },
  { icon: Users2, text: 'We can help source ingredients or you can purchase yourself' },
];

const SERVICE_FEATURES = [
  { icon: ChefHat, text: 'Chef arrives prepared with equipment and cooking tools' },
  { icon: Utensils, text: 'Complete kitchen setup and cooking' },
  { icon: Sparkles, text: 'Beautiful plating and presentation' },
  { icon: Check, text: 'Full cleanup included' },
  { icon: Users2, text: 'Service staff available for larger groups' },
  { icon: ShieldCheck, text: 'Ingredient sourcing assistance available' },
];

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-why-choose-headline">
          Why Choose myCHEF
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
          Every detail perfected for an unforgettable dining experience
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`hover-elevate transition-all duration-500 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Features */}
        <div className="space-y-8 mb-12">
          {/* Skilled Chefs */}
          <Card className="hover-elevate transition-all duration-500 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-10 text-primary-foreground flex flex-col justify-center">
                  <ChefHat className="w-16 h-16 mb-4 opacity-90" />
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2" data-testid="text-pillar-0-title">
                    Skilled Indonesian & International Chefs
                  </h3>
                </div>
                <div className="md:col-span-3 p-8 lg:p-10 bg-card">
                  <div className="space-y-4">
                    {CHEF_FEATURES.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 group"
                          data-testid={`text-pillar-0-feature-${index}`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-foreground/80 leading-relaxed pt-1.5">{feature.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customizable Menus */}
          <Card className="hover-elevate transition-all duration-500 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-8 lg:p-10 bg-card order-2 md:order-1">
                  <p className="text-xl font-medium text-primary mb-6" data-testid="text-pillar-1-subtitle">
                    Tell us what you want - we'll make it happen
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/60 mb-3">10+ CHEF SPECIALTIES</p>
                    <div className="flex flex-wrap gap-2">
                      {MENU_SPECIALTIES.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="hover-elevate transition-all duration-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {MENU_FEATURES.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 group"
                          data-testid={`text-pillar-1-feature-${index + 2}`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-foreground/80 leading-relaxed pt-1.5">{feature.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-10 text-primary-foreground flex flex-col justify-center order-1 md:order-2">
                  <Utensils className="w-16 h-16 mb-4 opacity-90" />
                  <h3 className="text-2xl lg:text-3xl font-semibold" data-testid="text-pillar-1-title">
                    Completely Customizable Menus
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Service */}
          <Card className="hover-elevate transition-all duration-500 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-10 text-primary-foreground flex flex-col justify-center">
                  <Award className="w-16 h-16 mb-4 opacity-90" />
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2" data-testid="text-pillar-2-title">
                    Professional Service Standards
                  </h3>
                  <p className="text-lg opacity-90" data-testid="text-pillar-2-subtitle">
                    Every detail handled perfectly
                  </p>
                </div>
                <div className="md:col-span-3 p-8 lg:p-10 bg-card">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {SERVICE_FEATURES.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-3 group"
                          data-testid={`text-pillar-2-feature-${index}`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm text-foreground/80 leading-relaxed pt-1">{feature.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-why-choose-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Your Custom Quote - Chat WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
