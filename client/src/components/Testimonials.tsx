import { useLocation } from 'wouter';
import { openWhatsApp } from '@/lib/whatsappCTA';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Star, ShieldCheck, FileText } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah & James M.',
    location: 'Seminyak Villa',
    date: 'December 2024',
    verified: true,
    rating: 5,
    text: "We hired myCHEF for our wedding anniversary. Chef Wayan was professional, punctual, and incredibly clean. He created an amazing 7-course menu and left our kitchen spotless. The whole booking process was transparent with clear pricing. Felt very safe and secure throughout!",
  },
  {
    name: 'The Anderson Family',
    location: 'Canggu',
    date: 'November 2024',
    verified: true,
    rating: 5,
    text: "Celebrating with 20 friends. myCHEF team was very professional from start to finish. Chef Idah arrived on time with all necessary permits and equipment. Clear communication, no hidden fees. She even helped coordinate ingredient delivery. Highly trustworthy service!",
  },
  {
    name: 'Michael R.',
    location: 'Ubud Retreat',
    date: 'October 2024',
    verified: true,
    rating: 5,
    text: "As a vegetarian with allergies, I had concerns. The team was incredibly professional and detailed about ingredients. Chef Made wore proper uniform, followed strict hygiene protocols. They answered all my questions patiently. Felt completely safe and well taken care of!",
  },
  {
    name: 'Lisa Chen',
    location: 'Nusa Dua Villa',
    date: 'September 2024',
    verified: true,
    rating: 5,
    text: "Hired Chef Nicolas for a dinner party. Professional from booking to cleanup. All chefs are background-checked and certified - you can tell. Clear contract, punctual service, complete cleanup. The transparent pricing was refreshing. Would absolutely recommend!",
  },
  {
    name: 'Emma & Tom W.',
    location: 'Uluwatu',
    date: 'August 2024',
    verified: true,
    rating: 5,
    text: "Proposal dinner - needed everything perfect. myCHEF team was discreet, professional, and reliable. Chef Simone arrived early to prepare, followed our specific requests exactly. Clear pricing, no surprises. They made us feel secure and confident. Thank you for making it magical!",
  },
];

export default function Testimonials() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    openWhatsApp('testimonials');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=testimonials');
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-testimonials-headline">
          Over 1,000 Trusted Experiences in Bali
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-4" data-testid="text-testimonials-subheadline">
          From intimate dinners to large celebrations - all our chefs are background-checked and certified
        </p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <ShieldCheck className="w-4 h-4 mr-2" />
            All Reviews Verified
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Star className="w-4 h-4 mr-2 fill-primary text-primary" />
            4.9/5 Average Rating
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge variant="outline" className="text-xs border-primary/30">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-1" data-testid={`text-testimonial-${index}-name`}>
                  {testimonial.name}
                </h3>
                <p className="text-sm text-primary mb-1" data-testid={`text-testimonial-${index}-location`}>
                  {testimonial.location}
                </p>
                <p className="text-xs text-foreground/60 mb-4">{testimonial.date}</p>
                <p className="text-foreground/80 leading-relaxed italic" data-testid={`text-testimonial-${index}-text`}>
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleQuoteClick}
            variant="outline"
            className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-testimonials-quote"
          >
            <FileText className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Create Your Story</span>
            <span className="sm:hidden">Join Them</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-testimonials-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Share Your Event</span>
            <span className="sm:hidden">Share Event</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
