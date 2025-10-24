import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

const TIPS = [
  {
    title: 'Book Early',
    description: 'Reserve your chef 1-2 weeks in advance, especially during high season, to ensure availability of your preferred chef.',
  },
  {
    title: 'Share Dietary Needs Early',
    description: 'Inform us of any allergies, dietary restrictions, or preferences during initial contact for the best menu design.',
  },
  {
    title: 'Check Your Villa Kitchen',
    description: 'Take photos of your kitchen and equipment. Share with your chef so they can plan accordingly.',
  },
  {
    title: 'Ingredient Sourcing Options',
    description: 'Decide if you want us to source ingredients or if you\'d prefer to shop yourself. Both options work well!',
  },
  {
    title: 'Timing Considerations',
    description: 'Plan for 30-45 minutes of prep before serving. Discuss your desired dinner time when booking.',
  },
  {
    title: 'Service Staff for Large Groups',
    description: 'For 8+ guests, consider adding waitstaff to ensure smooth service and allow your chef to focus on cooking.',
  },
  {
    title: 'Communicate Special Occasions',
    description: 'Let us know if it\'s a birthday, anniversary, or proposal. We can arrange special touches!',
  },
  {
    title: 'Menu Flexibility',
    description: 'Don\'t hesitate to request changes to proposed menus. Your chef wants you to love every dish.',
  },
  {
    title: 'Cleanup Expectations',
    description: 'Full cleanup is included, but discuss specific expectations (like dishwashing) during booking.',
  },
  {
    title: 'Payment Terms',
    description: 'Ask about deposit and final payment timing. Most chefs require 30-50% deposit to secure the booking.',
  },
];

export default function BookingTips() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold" data-testid="text-tips-headline">
            Booking Tips
          </h2>
          <p className="text-lg text-foreground/70 mt-4">
            Make the most of your private chef experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TIPS.map((tip, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-tip-${index}`}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-start gap-2" data-testid={`text-tip-${index}-title`}>
                  <span className="text-primary">•</span>
                  {tip.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed pl-5" data-testid={`text-tip-${index}-description`}>
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
