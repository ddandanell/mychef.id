import { Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import { SiInstagram, SiFacebook, SiWhatsapp } from 'react-icons/si';
import { useContactDialog } from '@/contexts/ContactDialogContext';
import { WHATSAPP_NUMBER } from '@/lib/whatsappCTA';

export default function Footer() {
  const { openContactDialog } = useContactDialog();
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    openContactDialog('footer');
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-footer-brand">
              myCHEF Indonesia
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed mb-4">
              Bringing exceptional private dining experiences to villas and homes across Bali since 2012.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="hover-elevate active-elevate-2 p-2 rounded-full"
                data-testid="link-footer-whatsapp"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </button>
              <a
                href="https://www.instagram.com/mychefindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-full"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/mychefindonesia/"
                target="_blank"
                rel="noopener noreferrer"
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

          <div>
            <h4 className="font-semibold mb-4">Serving Bali</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="/seminyak" className="hover:text-primary transition-colors" data-testid="link-footer-seminyak">
                  Seminyak
                </a>
              </li>
              <li>
                <a href="/canggu" className="hover:text-primary transition-colors" data-testid="link-footer-canggu">
                  Canggu
                </a>
              </li>
              <li>
                <a href="/ubud" className="hover:text-primary transition-colors" data-testid="link-footer-ubud">
                  Ubud
                </a>
              </li>
              <li>
                <a href="/sanur" className="hover:text-primary transition-colors" data-testid="link-footer-sanur">
                  Sanur
                </a>
              </li>
              <li>
                <a href="/nusa-dua" className="hover:text-primary transition-colors" data-testid="link-footer-nusadua">
                  Nusa Dua
                </a>
              </li>
              <li>
                <a href="/uluwatu" className="hover:text-primary transition-colors" data-testid="link-footer-uluwatu">
                  Uluwatu
                </a>
              </li>
              <li>
                <a href="/jimbaran" className="hover:text-primary transition-colors" data-testid="link-footer-jimbaran">
                  Jimbaran
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Payment Methods</h4>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <CreditCard className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Online Payment</p>
                  <p className="text-xs">Visa, MasterCard & All Cards</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-lg">💵</span>
                <div>
                  <p className="font-medium text-foreground">Cash</p>
                  <p className="text-xs">Indonesian Rupiah (IDR) Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p data-testid="text-footer-copyright">
              © {currentYear} myCHEF Indonesia. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center md:justify-end">
              <a href="/privacy-policy" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors" data-testid="link-footer-terms">
                Terms of Service
              </a>
              <a href="/payment-terms" className="hover:text-primary transition-colors" data-testid="link-footer-payment-terms">
                Payment Terms
              </a>
              <a href="/quote" className="hover:text-primary transition-colors" data-testid="link-footer-quote">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
