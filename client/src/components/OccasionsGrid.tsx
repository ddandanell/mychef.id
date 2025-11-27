import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { PartyPopper, Heart, Cake, Users, Briefcase, Church, ChefHat, Calendar } from 'lucide-react';

const OCCASIONS = [
  {
    icon: PartyPopper,
    title: 'Villa Parties',
    description: 'Turn your Bali villa into the ultimate party venue with custom menus',
    slug: 'villa-parties',
  },
  {
    icon: Heart,
    title: 'Romantic Dinners',
    description: 'Intimate candlelit dinners for anniversaries and proposals',
    slug: 'romantic-dinners',
  },
  {
    icon: Cake,
    title: 'Birthday Celebrations',
    description: 'Memorable birthday feasts for guests of all ages',
    slug: 'birthday-celebrations',
  },
  {
    icon: Users,
    title: 'Family Reunions',
    description: 'Multi-course meals that bring families together',
    slug: 'family-reunions',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional catering for business retreats and team building',
    slug: 'corporate-events',
  },
  {
    icon: Church,
    title: 'Wedding Celebrations',
    description: 'Elegant wedding receptions and rehearsal dinners',
    slug: 'wedding-celebrations',
  },
  {
    icon: ChefHat,
    title: 'Cooking Classes',
    description: 'Interactive culinary experiences in your kitchen',
    slug: 'cooking-classes',
  },
  {
    icon: Calendar,
    title: 'Weekly Meal Prep',
    description: 'Regular chef services for ongoing villa stays',
    slug: 'weekly-meal-prep',
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
              <Link 
                key={index} 
                href={`/services/${occasion.slug}`}
                className="block"
                data-testid={`link-occasion-${occasion.slug}`}
              >
                <Card className="hover-elevate transition-all cursor-pointer h-full border-2 border-primary/20 hover:border-primary" data-testid={`card-occasion-${index}`}>
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
