import { CheckCircle, Clock, Zap } from 'lucide-react';

export default function TrustBadgesCompact() {
  return (
    <section className="py-6 border-b border-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-foreground">Money-Back Guarantee</p>
              <p className="text-foreground/70 text-xs">100% satisfaction or refund</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-foreground">10-Min Response</p>
              <p className="text-foreground/70 text-xs">09:00-22:00 WIB daily</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-foreground">Same-Day Booking</p>
              <p className="text-foreground/70 text-xs">Available today & tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
