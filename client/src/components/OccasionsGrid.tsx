import { Card, CardContent } from '@/components/ui/card';
import { PartyPopper, Heart, Cake, Users, Briefcase, Church, ChefHat, Calendar } from 'lucide-react';

const OCCASIONS = [
  {
    icon: PartyPopper,
    title: 'Villa Parties',
    description: 'Turn your Bali villa into the ultimate party venue with custom menus',
  },
  {
    icon: Heart,
    title: 'Romantic Dinners',
    description: 'Intimate candlelit dinners for anniversaries and proposals',
  },
  {
    icon: Cake,
    title: 'Birthday Celebrations',
    description: 'Memorable birthday feasts for guests of all ages',
  },
  {
    icon: Users,
    title: 'Family Reunions',
    description: 'Multi-course meals that bring families together',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional catering for business retreats and team building',
  },
  {
    icon: Church,
    title: 'Wedding Celebrations',
    description: 'Elegant wedding receptions and rehearsal dinners',
  },
  {
    icon: ChefHat,
    title: 'Cooking Classes',
    description: 'Interactive culinary experiences in your kitchen',
  },
  {
    icon: Calendar,
    title: 'Weekly Meal Prep',
    description: 'Regular chef services for ongoing villa stays',
  },
];

export default function OccasionsGrid() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-occasions-headline">
          Whatever You're Celebrating, We'll Make It Delicious
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occasion, index) => {
            const Icon = occasion.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-occasion-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`text-occasion-${index}-title`}>
                    {occasion.title}
                  </h3>
                  <p className="text-sm text-foreground/70" data-testid={`text-occasion-${index}-description`}>
                    {occasion.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
