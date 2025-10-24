import { Button } from '@/components/ui/button';
import { MessageCircle, ChefHat, Utensils, Award } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';

const PILLARS = [
  {
    icon: ChefHat,
    title: 'Skilled Indonesian & International Chefs',
    features: [
      'Minimum 2 years professional culinary training',
      'Minimum 5 years experience in top Bali restaurants and resorts',
      'Expertise in Indonesian classics, Western fine dining, Asian fusion',
    ],
  },
  {
    icon: Utensils,
    title: 'Completely Customizable Menus',
    subtitle: 'Tell us what you want - we\'ll make it happen',
    features: [
      '10+ Chef Specialties (Indonesian Traditional, Modern Asian, Italian, French, BBQ & Grills, Vegan/Vegetarian, Japanese, Seafood, Fusion, Mediterranean)',
      '25+ Cuisine Types',
      'Flexible pricing to match your budget',
      'Accommodation of all dietary requirements: halal, vegetarian, vegan, gluten-free, allergies',
      'We can help source ingredients or you can purchase yourself',
    ],
  },
  {
    icon: Award,
    title: 'Professional Service Standards',
    subtitle: 'Every detail handled perfectly',
    features: [
      'Chef arrives prepared with equipment and cooking tools',
      'Complete kitchen setup and cooking',
      'Beautiful plating and presentation',
      'Full cleanup included',
      'Service staff available for larger groups',
      'Ingredient sourcing assistance available',
    ],
  },
];

export default function WhyChoose() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-16" data-testid="text-why-choose-headline">
          Why Choose myCHEF
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="space-y-6" data-testid={`card-pillar-${index}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold" data-testid={`text-pillar-${index}-title`}>
                    {pillar.title}
                  </h3>
                </div>
                {pillar.subtitle && (
                  <p className="text-lg font-medium text-primary" data-testid={`text-pillar-${index}-subtitle`}>
                    {pillar.subtitle}
                  </p>
                )}
                <ul className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                      data-testid={`text-pillar-${index}-feature-${featureIndex}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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
