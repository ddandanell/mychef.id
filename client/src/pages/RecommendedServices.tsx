import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Sparkles, Heart, GraduationCap, Droplets, 
  Waves, Laptop, ArrowRight, Home, Shield
} from 'lucide-react';

const PARTNER_SERVICES = [
  {
    id: 'massage-ubud',
    name: 'In-Villa Massage Ubud',
    url: 'https://homemassageubud.com/',
    icon: Heart,
    description: 'After a delicious private chef dinner, complete your evening with a relaxing in-villa massage. Professional therapists come directly to your Ubud villa for the ultimate wellness experience.',
    cta: 'In-Villa Massage in Ubud',
    highlight: 'Perfect post-dinner relaxation'
  },
  {
    id: 'massage-kuta',
    name: 'In-Villa Massage Kuta',
    url: 'https://www.homemassagekuta.com/',
    icon: Sparkles,
    description: 'Serving the Kuta, Seminyak, and Legian areas with professional massage services. Combine a memorable private dining experience with therapeutic wellness treatments at your villa.',
    cta: 'In-Villa Massage in Kuta',
    highlight: 'South Bali coverage'
  },
  {
    id: 'tutoring',
    name: 'Private Tutoring Bali',
    url: 'https://privatetutoringbali.com/',
    icon: GraduationCap,
    description: 'Expat families trust myCHEF for special occasions and weekly meal prep. For your children\'s education needs, Private Tutoring Bali offers personalized homeschooling and academic support.',
    cta: 'Private Tutoring in Bali',
    highlight: 'For expat families'
  },
  {
    id: 'tech-education',
    name: 'Tech Education Bali',
    url: 'https://bali-tech-education.com/',
    icon: Laptop,
    description: 'While we bring culinary excellence to your villa, Tech Education Bali brings coding and technology skills to your family. Perfect for kids and adults looking to learn programming.',
    cta: 'Coding Classes in Bali',
    highlight: 'Tech skills for all ages'
  },
  {
    id: 'pool-service',
    name: 'Pool Service Bali',
    url: 'https://balipoolservice.com/',
    icon: Waves,
    description: 'A sparkling clean pool is essential for any villa gathering. Trust Bali Pool Service to maintain your pool in pristine condition before your next private chef dinner party.',
    cta: 'Professional Pool Maintenance in Bali',
    highlight: 'Villa maintenance essential'
  },
  {
    id: 'water-purification',
    name: 'Aqua Pure Bali',
    url: 'https://aquapurebali.com/',
    icon: Droplets,
    description: 'Clean, purified water is fundamental for any kitchen. Aqua Pure Bali provides water filtration and purification systems to ensure the highest quality water for your villa lifestyle.',
    cta: 'Water Purification Services in Bali',
    highlight: 'Essential for health'
  },
];

export default function RecommendedServices() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Home className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Villa Lifestyle Services</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="heading-recommended-services">
                Recommended Services for Your Bali Villa Lifestyle
              </h1>
              
              <p className="text-lg text-foreground/70 leading-relaxed">
                To help you create the perfect Bali living experience, we recommend these trusted complementary services for wellness, education, dining, and villa maintenance. Each partner shares our commitment to quality, professionalism, and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PARTNER_SERVICES.map((service) => (
                <Card 
                  key={service.id} 
                  className="hover-elevate transition-all duration-300 overflow-visible"
                  data-testid={`card-partner-${service.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg mb-1">{service.name}</h2>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-accent-foreground">
                          {service.highlight}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <a 
                      href={service.url}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      data-testid={`link-partner-${service.id}`}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="inline-block max-w-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-lg">Trusted Partner Network</h3>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    All recommended services are independently operated businesses that share our values of quality, reliability, and customer satisfaction. We've personally vetted each partner to ensure they meet the high standards expected by villa owners and expat families in Bali.
                  </p>
                  <Button asChild>
                    <a href="/" data-testid="link-back-home">
                      Return to myCHEF
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
