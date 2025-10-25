import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Home, Users } from 'lucide-react';

export default function VillaPartners() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=villaPartners');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl lg:text-4xl font-semibold mb-4">
                For Villa & Airbnb Owners
              </h2>
              <p className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                Enhance your guests' experience by offering private chef services through myCHEF. 
                We currently partner with 200+ villa owners across Bali.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Premium Guest Service</h3>
                  <p className="text-sm text-foreground/70">
                    Offer your guests an exclusive dining experience without any effort on your part
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Easy Collaboration</h3>
                  <p className="text-sm text-foreground/70">
                    Simple partnership setup with ongoing support for you and your guests
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
                data-testid="button-villa-partners-whatsapp"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Schedule a Meeting on WhatsApp</span>
                <span className="sm:hidden">Schedule Meeting</span>
              </Button>
              <p className="text-sm text-foreground/60 mt-4">
                Contact us to learn more about our partnership program
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
