import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '+6282237565997';

const TESTIMONIALS = [
  {
    name: 'Sarah & James',
    location: 'Seminyak Villa',
    rating: 5,
    text: "We hired myCHEF for our wedding anniversary at our villa in Seminyak. Chef Wayan created an incredible 7-course Indonesian-Western fusion menu. The rijsttafel starter and wagyu rendang were unforgettable. He helped us source the best ingredients from local markets. So affordable compared to going out!",
  },
  {
    name: 'The Anderson Family',
    location: 'Canggu',
    rating: 5,
    text: "Celebrating my husband's 50th with 20 friends. Chef Idah prepared the most amazing seafood BBQ right by our pool. She coordinated getting fresh Jimbaran fish and prawns delivered that morning. Her special sambal was incredible. Everyone is still talking about it! Great value for what we got.",
  },
  {
    name: 'Michael',
    location: 'Ubud Retreat',
    rating: 5,
    text: "As a vegetarian, I was worried about options. Chef Made created a stunning plant-based menu using local Ubud organic ingredients he sourced from the morning market. The tempeh rendang and jackfruit satay were incredible. Much better than any restaurant and we got to enjoy it in our own villa!",
  },
  {
    name: 'Lisa Chen',
    location: 'Nusa Dua Villa',
    rating: 5,
    text: "Hired Chef Nicolas for a French dinner party at our villa. Bouillabaisse with Bali seafood, duck confit, perfect soufflé. Restaurant quality in our dining room. He handled all the ingredient shopping - made it so easy. The whole experience was more affordable than taking 8 people to a high-end restaurant!",
  },
  {
    name: 'Budi & Family',
    location: 'Jakarta',
    rating: 5,
    text: "Hosted a family reunion at our Jakarta home. Chef Thila prepared an amazing fusion menu that pleased everyone from grandparents to kids. The service was impeccable and the food was outstanding. Better than any restaurant experience!",
  },
  {
    name: 'Emma & Tom',
    location: 'Uluwatu',
    rating: 5,
    text: "Proposal dinner on our villa terrace overlooking the ocean. Chef Simone created the most romantic Italian menu. Fresh pasta, local lobster, perfect tiramisu. She said yes! Thank you myCHEF for making it perfect and so reasonably priced.",
  },
];

export default function Testimonials() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-testimonials-headline">
          Over 1,000 Unforgettable Experiences Across Indonesia
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-12" data-testid="text-testimonials-subheadline">
          From intimate anniversary dinners in Ubud to 50-person celebrations in Seminyak villas
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6 lg:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-1" data-testid={`text-testimonial-${index}-name`}>
                  {testimonial.name}
                </h3>
                <p className="text-sm text-primary mb-4" data-testid={`text-testimonial-${index}-location`}>
                  {testimonial.location}
                </p>
                <p className="text-foreground/80 leading-relaxed italic" data-testid={`text-testimonial-${index}-text`}>
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-testimonials-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Read More Reviews & Book on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
