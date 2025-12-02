import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin, FileText } from 'lucide-react';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

const BALI_LOCATIONS = [
  { name: 'Seminyak', slug: 'seminyak' },
  { name: 'Canggu', slug: 'canggu' },
  { name: 'Ubud', slug: 'ubud' },
  { name: 'Sanur', slug: 'sanur' },
  { name: 'Nusa Dua', slug: 'nusa-dua' },
  { name: 'Uluwatu', slug: 'uluwatu' },
  { name: 'Jimbaran', slug: 'jimbaran' },
  { name: 'Kerobokan', slug: 'kerobokan' },
  { name: 'Denpasar', slug: 'denpasar' },
  { name: 'Gianyar', slug: 'gianyar' },
  { name: 'Tegallalang', slug: 'tegallalang' },
  { name: 'Berawa', slug: 'berawa' },
  { name: 'Pererenan', slug: 'pererenan' },
  { name: 'Tabanan', slug: 'tabanan' },
  { name: 'Tanah Lot', slug: 'tanah-lot' },
  { name: 'Petitenget', slug: 'petitenget' },
];

export default function LocationsSection() {
  const [, setLocation] = useLocation();
  const { getLocalizedPath } = useLocalizedPath();
  
  const handleWhatsAppClick = () => {
    setLocation(getLocalizedPath('/contact/confirm?source=locations'));
  };

  const handleQuoteClick = () => {
    setLocation(getLocalizedPath('/contact/confirm?source=locations'));
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-locations-headline">
          Private Chef Service Across All of Bali
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-12 max-w-4xl mx-auto" data-testid="text-locations-description">
          Whether you're anywhere across Bali - from beachfront villas in Seminyak to jungle retreats in Ubud - myCHEF brings exceptional private dining to your location.
        </p>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 text-2xl font-semibold" data-testid="text-bali-title">
              <MapPin className="w-6 h-6 text-primary" />
              <span>ALL BALI AREAS</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {BALI_LOCATIONS.map((location, index) => (
              <Link 
                key={index}
                href={getLocalizedPath(`/${location.slug}`)}
                className="text-center py-3 px-4 rounded-lg bg-background hover-elevate transition-all cursor-pointer"
                data-testid={`link-location-${location.slug}`}
              >
                <span className="text-foreground/80 font-medium">{location.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleQuoteClick}
            variant="outline"
            className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-locations-quote"
          >
            <FileText className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Book Your Area</span>
            <span className="sm:hidden">Book Area</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-locations-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Find My Chef</span>
            <span className="sm:hidden">Find Chef</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
