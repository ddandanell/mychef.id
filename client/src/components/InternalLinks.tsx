import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { MapPin, Utensils, ChefHat, Heart, PartyPopper, Users, Briefcase, Church, Calendar, Cake } from 'lucide-react';

const ALL_CITIES = [
  { name: 'Seminyak', slug: 'seminyak', region: 'Premium Destinations' },
  { name: 'Canggu', slug: 'canggu', region: 'Premium Destinations' },
  { name: 'Ubud', slug: 'ubud', region: 'Premium Destinations' },
  { name: 'Sanur', slug: 'sanur', region: 'Premium Destinations' },
  { name: 'Nusa Dua', slug: 'nusa-dua', region: 'Premium Destinations' },
  { name: 'Uluwatu', slug: 'uluwatu', region: 'Premium Destinations' },
  { name: 'Jimbaran', slug: 'jimbaran', region: 'Premium Destinations' },
  { name: 'Kuta', slug: 'kuta', region: 'South Bali' },
  { name: 'Legian', slug: 'legian', region: 'South Bali' },
  { name: 'Kerobokan', slug: 'kerobokan', region: 'South Bali' },
  { name: 'Petitenget', slug: 'petitenget', region: 'South Bali' },
  { name: 'Berawa', slug: 'berawa', region: 'South Bali' },
  { name: 'Pererenan', slug: 'pererenan', region: 'South Bali' },
  { name: 'Bukit', slug: 'bukit', region: 'Bukit Peninsula' },
  { name: 'Ungasan', slug: 'ungasan', region: 'Bukit Peninsula' },
  { name: 'Pecatu', slug: 'pecatu', region: 'Bukit Peninsula' },
  { name: 'Tanah Lot', slug: 'tanah-lot', region: 'Central & West Bali' },
  { name: 'Tabanan', slug: 'tabanan', region: 'Central & West Bali' },
  { name: 'Denpasar', slug: 'denpasar', region: 'Central & West Bali' },
  { name: 'Gianyar', slug: 'gianyar', region: 'Central & West Bali' },
  { name: 'Tegallalang', slug: 'tegallalang', region: 'Central & West Bali' },
  { name: 'Amed', slug: 'amed', region: 'East & North Bali' },
  { name: 'Lovina', slug: 'lovina', region: 'East & North Bali' },
  { name: 'Candidasa', slug: 'candidasa', region: 'East & North Bali' },
  { name: 'Padang Bai', slug: 'padang-bai', region: 'East & North Bali' },
];

const ALL_SERVICES = [
  { name: 'Villa Parties', slug: 'villa-parties', icon: PartyPopper },
  { name: 'Romantic Dinners', slug: 'romantic-dinners', icon: Heart },
  { name: 'Birthday Celebrations', slug: 'birthday-celebrations', icon: Cake },
  { name: 'Family Reunions', slug: 'family-reunions', icon: Users },
  { name: 'Corporate Events', slug: 'corporate-events', icon: Briefcase },
  { name: 'Wedding Celebrations', slug: 'wedding-celebrations', icon: Church },
  { name: 'Cooking Classes', slug: 'cooking-classes', icon: ChefHat },
  { name: 'Weekly Meal Prep', slug: 'weekly-meal-prep', icon: Calendar },
];

const REGIONS = ['Premium Destinations', 'South Bali', 'Bukit Peninsula', 'Central & West Bali', 'East & North Bali'];

interface InternalLinksProps {
  currentSlug?: string;
  variant?: 'full' | 'cities' | 'services';
  showHeading?: boolean;
}

export default function InternalLinks({ currentSlug, variant = 'full', showHeading = true }: InternalLinksProps) {
  const { t } = useTranslation();
  
  const citiesByRegion = REGIONS.reduce((acc, region) => {
    acc[region] = ALL_CITIES.filter(city => city.region === region && city.slug !== currentSlug);
    return acc;
  }, {} as Record<string, typeof ALL_CITIES>);

  const filteredServices = ALL_SERVICES.filter(service => service.slug !== currentSlug);

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {t('internalLinks.exploreMore', 'Explore More myCHEF Services')}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {t('internalLinks.subtitle', 'Discover private chef experiences across all of Bali')}
            </p>
          </div>
        )}

        {(variant === 'full' || variant === 'services') && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Utensils className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">{t('internalLinks.ourServices', 'Our Services')}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-background border hover:border-primary hover:bg-primary/5 transition-all group"
                    data-testid={`link-service-${service.slug}`}
                  >
                    <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                      {service.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {(variant === 'full' || variant === 'cities') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">{t('internalLinks.servingBali', 'Serving All of Bali')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {REGIONS.map((region) => {
                const regionCities = citiesByRegion[region];
                if (regionCities.length === 0) return null;
                
                return (
                  <div key={region}>
                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide mb-3">
                      {region}
                    </h4>
                    <ul className="space-y-2">
                      {regionCities.map((city) => (
                        <li key={city.slug}>
                          <Link
                            href={`/${city.slug}`}
                            className="text-sm text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                            data-testid={`link-city-${city.slug}`}
                          >
                            <span className="group-hover:underline">{city.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-foreground/60 mb-4">
            {t('internalLinks.cantFind', "Can't find your area? We serve all of Bali!")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            data-testid="link-back-home"
          >
            <ChefHat className="w-4 h-4" />
            {t('internalLinks.backToHome', 'Back to Homepage')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export { ALL_CITIES, ALL_SERVICES, REGIONS };
