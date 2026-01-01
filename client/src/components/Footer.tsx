import { Mail, Phone, MapPin, CreditCard, Banknote, ChefHat, Star, ArrowRight, Clock, Sparkles, Shield, TrendingUp } from 'lucide-react';
import { SiInstagram, SiFacebook, SiWhatsapp, SiAirbnb } from 'react-icons/si';
import { useLocation, Link } from 'wouter';
import { WHATSAPP_NUMBER } from '@/lib/whatsappCTA';

const CITY_LINKS = {
  'Premium Destinations': [
    { name: 'Seminyak', slug: 'seminyak' },
    { name: 'Canggu', slug: 'canggu' },
    { name: 'Ubud', slug: 'ubud' },
    { name: 'Sanur', slug: 'sanur' },
    { name: 'Nusa Dua', slug: 'nusa-dua' },
    { name: 'Uluwatu', slug: 'uluwatu' },
    { name: 'Jimbaran', slug: 'jimbaran' },
  ],
  'South Bali': [
    { name: 'Kuta', slug: 'kuta' },
    { name: 'Legian', slug: 'legian' },
    { name: 'Kerobokan', slug: 'kerobokan' },
    { name: 'Petitenget', slug: 'petitenget' },
    { name: 'Berawa', slug: 'berawa' },
    { name: 'Pererenan', slug: 'pererenan' },
  ],
  'Bukit Peninsula': [
    { name: 'Bukit', slug: 'bukit' },
    { name: 'Ungasan', slug: 'ungasan' },
    { name: 'Pecatu', slug: 'pecatu' },
  ],
  'Central & West': [
    { name: 'Tanah Lot', slug: 'tanah-lot' },
    { name: 'Tabanan', slug: 'tabanan' },
    { name: 'Denpasar', slug: 'denpasar' },
    { name: 'Gianyar', slug: 'gianyar' },
    { name: 'Tegallalang', slug: 'tegallalang' },
  ],
  'East & North': [
    { name: 'Amed', slug: 'amed' },
    { name: 'Lovina', slug: 'lovina' },
    { name: 'Candidasa', slug: 'candidasa' },
    { name: 'Padang Bai', slug: 'padang-bai' },
  ],
};

const SERVICE_LINKS = [
  { name: 'Villa Parties', slug: 'villa-parties' },
  { name: 'Romantic Dinners', slug: 'romantic-dinners' },
  { name: 'Birthday Celebrations', slug: 'birthday-celebrations' },
  { name: 'Family Reunions', slug: 'family-reunions' },
  { name: 'Corporate Events', slug: 'corporate-events' },
  { name: 'Wedding Celebrations', slug: 'wedding-celebrations' },
  { name: 'Cooking Classes', slug: 'cooking-classes' },
  { name: 'Weekly Meal Prep', slug: 'weekly-meal-prep' },
];

export default function Footer() {
  const [, setLocation] = useLocation();
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=footer');
  };

  return (
    <footer className="bg-gradient-to-b from-card via-card to-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-8 lg:py-12 border-b border-primary/10">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-primary">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>South Bali Premium Service Area</span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    data-testid={`icon-footer-star-${star}`}
                  />
                ))}
                <span className="text-yellow-600 font-bold ml-1 text-sm sm:text-base">4.9/5</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-foreground text-center" data-testid="text-footer-stars">
                Trusted by 1000+ families • 13+ Years of Excellence
              </span>
            </div>
          </div>
        </div>

        <div className="py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-3 sm:mb-4" data-testid="link-footer-logo">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">myCHEF</h3>
                <p className="text-[10px] sm:text-xs text-primary font-semibold">Indonesia</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4 sm:mb-6">
              Premium private chef service for South Bali. Professional, transparent, & trusted by families worldwide.
            </p>
            <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-foreground/60 mb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span>Background Checked Chefs</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span>13+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span>100% Transparent Pricing</span>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4 items-center flex-wrap mb-4 sm:mb-6">
              <button
                onClick={handleWhatsAppClick}
                className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-full"
                data-testid="link-footer-whatsapp"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <a
                href="https://www.instagram.com/mychefindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-full"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/mychefindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-full"
                data-testid="link-footer-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-foreground/70 hover:text-primary text-left"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {WHATSAPP_NUMBER}
              </button>
              <a
                href="mailto:indonesia@mychef.id"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                indonesia@mychef.id
              </a>
              <div className="flex items-start gap-2 text-foreground/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Jl. Sunset Road No. 88<br />Seminyak, Bali 80361</span>
              </div>
              <p className="text-foreground/60">
                Business Hours:<br />
                09:00 - 22:00 WIB (Daily)
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <h4 className="font-semibold mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-wide text-foreground/60">
              Our Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {SERVICE_LINKS.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`link-footer-service-${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="font-semibold mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-wide text-foreground/60">
              Premium Areas
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {CITY_LINKS['Premium Destinations'].map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`link-footer-${city.slug}`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="font-semibold mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-wide text-foreground/60">
              South Bali
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {CITY_LINKS['South Bali'].map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`link-footer-${city.slug}`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-2 sm:mb-3 mt-4 sm:mt-6 text-[10px] sm:text-xs uppercase tracking-wide text-foreground/60">
              Bukit Peninsula
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {CITY_LINKS['Bukit Peninsula'].map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`link-footer-${city.slug}`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h4 className="font-semibold mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-wide text-foreground/60">
              More Areas
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/70">
              {[...CITY_LINKS['Central & West'], ...CITY_LINKS['East & North']].map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="hover:text-primary transition-colors"
                    data-testid={`link-footer-${city.slug}`}
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Payment Methods</h4>
              <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 flex-shrink-0" />
                  <span>Visa, MasterCard & All Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Banknote className="w-4 h-4 flex-shrink-0" />
                  <span>Cash (IDR)</span>
                </div>
              </div>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <div className="flex flex-wrap gap-4 lg:gap-6 text-sm text-foreground/70 md:justify-end">
                <Link href="/quote" className="hover:text-primary transition-colors" data-testid="link-footer-quote">
                  Get Quote
                </Link>
                <Link href="/calculator" className="hover:text-primary transition-colors" data-testid="link-footer-calculator">
                  Price Calculator
                </Link>
                <Link href="/join-our-team" className="hover:text-primary transition-colors" data-testid="link-footer-careers">
                  Careers
                </Link>
                <a href="/recommended-services" className="hover:text-primary transition-colors" data-testid="link-footer-recommended-services">
                  Recommended Services
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60 pt-6 border-t">
            <p data-testid="text-footer-copyright">
              © {currentYear} myCHEF Indonesia. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center md:justify-end">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors" data-testid="link-footer-terms">
                Terms of Service
              </Link>
              <Link href="/payment-terms" className="hover:text-primary transition-colors" data-testid="link-footer-payment-terms">
                Payment Terms
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center items-center mt-6 text-[9px] text-foreground/30">
            <span className="font-semibold">Villa Partnerships:</span>
            <SiAirbnb className="w-4 h-4 text-red-500" title="Airbnb Partner" />
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center mt-4 text-[9px] text-foreground/20">
            <span>Partner Services:</span>
            <a 
              href="https://privatetutoringbali.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground/30 transition-colors" 
              data-testid="link-footer-tutoring"
            >
              Private Tutoring Bali
            </a>
            <a 
              href="https://bali-tech-education.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground/30 transition-colors" 
              data-testid="link-footer-tech-education"
            >
              Tech Education Bali
            </a>
            <a 
              href="https://babysitting-nanny-service.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground/30 transition-colors" 
              data-testid="link-footer-nanny"
            >
              Babysitting & Nanny Services
            </a>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
