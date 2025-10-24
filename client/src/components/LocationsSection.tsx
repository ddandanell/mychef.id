import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';

const LOCATIONS = {
  bali: ['Seminyak', 'Canggu', 'Ubud', 'Sanur', 'Nusa Dua', 'Uluwatu', 'Jimbaran', 'Pererenan', 'Berawa', 'Canggu Beach', 'Umalas', 'Kerobokan', 'Tanah Lot', 'Candidasa', 'Amed', 'Lovina'],
  java: ['Jakarta (all areas)', 'Surabaya', 'Bandung', 'Yogyakarta', 'Semarang'],
  otherIslands: ['Lombok', 'Gili Islands', 'Nusa Penida', 'Nusa Lembongan'],
};

export default function LocationsSection() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-locations-headline">
          myCHEF Across Indonesia - Global Experience, Local Heart
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-12 max-w-4xl mx-auto" data-testid="text-locations-description">
          Based in Bali, serving all of Indonesia. Whether you're in a beachfront villa in Seminyak, a jungle retreat in Ubud, or a city penthouse in Jakarta, myCHEF brings exceptional private dining to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2" data-testid="text-bali-title">
              <MapPin className="w-6 h-6 text-primary" />
              BALI
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {LOCATIONS.bali.map((location, index) => (
                <div key={index} className="text-sm text-foreground/80" data-testid={`text-location-bali-${index}`}>
                  • {location}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2" data-testid="text-java-title">
              <MapPin className="w-6 h-6 text-primary" />
              JAVA
            </h3>
            <div className="space-y-3">
              {LOCATIONS.java.map((location, index) => (
                <div key={index} className="text-sm text-foreground/80" data-testid={`text-location-java-${index}`}>
                  • {location}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2" data-testid="text-other-islands-title">
              <MapPin className="w-6 h-6 text-primary" />
              OTHER ISLANDS
            </h3>
            <div className="space-y-3">
              {LOCATIONS.otherIslands.map((location, index) => (
                <div key={index} className="text-sm text-foreground/80" data-testid={`text-location-other-${index}`}>
                  • {location}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-accent/20 rounded-xl p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold mb-2" data-testid="text-international-title">
            INTERNATIONAL (For traveling clients)
          </h3>
          <p className="text-foreground/70" data-testid="text-international-description">
            Our sister services operate in: Singapore, Bangkok, Tokyo, Sydney, Paris, London, New York, and 30+ more cities worldwide
          </p>
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
