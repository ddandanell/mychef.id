import { MessageCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SupportTeam() {
  const handleWhatsApp = () => {
    window.location.href = '/contact/confirm?source=support';
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
      <h3 className="text-lg md:text-xl font-bold mb-6 text-center">Need Help? We're Here! 👋</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Support Person Card */}
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4 border-4 border-primary/30">
            <span className="text-5xl md:text-6xl">👩‍💼</span>
          </div>
          <h4 className="text-lg md:text-xl font-bold mb-1">Siti Nurhaliza</h4>
          <p className="text-sm text-primary font-semibold mb-3">Support Team Leader</p>
          <p className="text-xs md:text-sm text-foreground/70 mb-4 max-w-xs">
            Indonesian hospitality expert. I'm here to help you find the perfect chef and answer any questions about our services!
          </p>
          <div className="space-y-2 w-full">
            <a
              href="tel:+62"
              className="flex items-center justify-center gap-2 text-xs md:text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Available 09:00 - 22:00 WIB
            </a>
            <a
              href="mailto:support@mychef.id"
              className="flex items-center justify-center gap-2 text-xs md:text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@mychef.id
            </a>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col justify-center">
          <h4 className="text-base md:text-lg font-bold mb-4">How Can We Help?</h4>
          <ul className="space-y-3 mb-6 text-sm text-foreground/80">
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Questions about pricing or chef types?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Need a specific cuisine or special dietary requirements?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Want to book a chef for a special event?</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Have concerns about availability or timing?</span>
            </li>
          </ul>
          <p className="text-xs md:text-sm text-foreground/70 mb-4">
            Our team speaks English and Indonesian. We're ready to help you create the perfect culinary experience! 🎯
          </p>
          <Button
            onClick={handleWhatsApp}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-elevate active-elevate-2"
            data-testid="button-support-whatsapp"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat with Siti on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
