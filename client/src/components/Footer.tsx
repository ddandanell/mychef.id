import { Mail, Phone } from 'lucide-react';
import { SiInstagram, SiFacebook, SiWhatsapp } from 'react-icons/si';

const WHATSAPP_NUMBER = '+6282237565997';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-footer-brand">
              myCHEF Indonesia
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              Bringing exceptional private dining experiences to villas and homes across Indonesia since 2012.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-full"
                data-testid="link-footer-whatsapp"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-full"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover-elevate active-elevate-2 p-2 rounded-full"
                data-testid="link-footer-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`}
                className="flex items-center gap-2 text-foreground/70 hover:text-primary"
                data-testid="link-footer-phone"
              >
                <Phone className="w-4 h-4" />
                {WHATSAPP_NUMBER}
              </a>
              <a
                href="mailto:indonesia@mychef.com"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                indonesia@mychef.com
              </a>
              <p className="text-foreground/60">
                Business Hours:<br />
                9 AM - 10 PM WIB (Daily)
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Bali (All Areas)</li>
              <li>Jakarta</li>
              <li>Surabaya</li>
              <li>Bandung</li>
              <li>Yogyakarta</li>
              <li>Lombok & Gili Islands</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Cuisines</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Indonesian Traditional</li>
              <li>Modern Asian Fusion</li>
              <li>Italian & Mediterranean</li>
              <li>French Fine Dining</li>
              <li>Japanese Omakase</li>
              <li>Seafood BBQ</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p data-testid="text-footer-copyright">
              © {currentYear} myCHEF Indonesia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary" data-testid="link-footer-privacy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary" data-testid="link-footer-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
