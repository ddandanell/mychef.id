import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';
const WHATSAPP_MESSAGE = 'Hi! I would like to check availability for a private chef in my area of Bali.';

const BALI_LOCATIONS = [
  'Seminyak', 'Canggu', 'Ubud', 'Sanur', 'Nusa Dua', 'Uluwatu', 
  'Jimbaran', 'Pererenan', 'Berawa', 'Canggu Beach', 'Umalas', 
  'Kerobokan', 'Tanah Lot', 'Candidasa', 'Amed', 'Lovina'
];

export default function LocationsSection() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-locations-headline">
          Serving All of Bali
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-12 max-w-4xl mx-auto" data-testid="text-locations-description">
          Whether you're in a beachfront villa in Seminyak, a jungle retreat in Ubud, or a clifftop property in Uluwatu, myCHEF brings exceptional private dining to your location.
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
              <div 
                key={index} 
                className="text-center py-3 px-4 rounded-lg bg-background hover-elevate transition-all" 
                data-testid={`text-location-bali-${index}`}
              >
                <span className="text-foreground/80">{location}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-locations-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Check Availability in Your Area - WhatsApp {WHATSAPP_NUMBER}
          </Button>
        </div>
      </div>
    </section>
  );
}
