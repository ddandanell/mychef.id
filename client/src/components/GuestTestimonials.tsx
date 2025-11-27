import { useEffect, useState } from 'react';
import { MessageCircle, Star } from 'lucide-react';

export default function GuestTestimonials() {
  const [reviewCount, setReviewCount] = useState(807);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewCount(prev => prev + 1);
    }, 25000); // Every 25 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 mb-12">
      <h3 className="text-lg md:text-xl font-bold mb-6 text-center">What Our Guests Are Saying</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Review Counter */}
        <div className="bg-white dark:bg-slate-950 rounded-lg p-6 border border-primary/20 text-center hover-elevate transition-all">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-xs text-foreground/60 mb-2">Total Guest Reviews</p>
          <p className="text-4xl md:text-5xl font-bold text-primary transition-all duration-300" data-testid="text-review-count">
            {reviewCount.toLocaleString()}
          </p>
          <p className="text-xs text-foreground/60 mt-3">New review every 25 seconds</p>
        </div>

        {/* Testimonial 1 */}
        <div className="bg-white dark:bg-slate-950 rounded-lg p-6 border border-primary/20 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
              👨‍👩‍👧‍👦
            </div>
            <div>
              <p className="text-sm font-semibold">The Johnson Family</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-foreground/70 italic">
            "Absolutely incredible! Chef made the best meal we've had in Bali. Professional, friendly, and left our kitchen spotless!"
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white dark:bg-slate-950 rounded-lg p-6 border border-primary/20 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
              👨‍🍳
            </div>
            <div>
              <p className="text-sm font-semibold">Maria & Giuseppe</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-foreground/70 italic">
            "We've used myCHEF three times now. Every chef brings passion and expertise. Perfect for our villa celebrations!"
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageCircle className="w-4 h-4 text-primary" />
          <p className="text-xs md:text-sm font-semibold text-primary">Real guests, real experiences</p>
        </div>
        <p className="text-xs text-foreground/70">
          Join thousands of happy guests who've experienced amazing private chef dining in Bali
        </p>
      </div>
    </div>
  );
}
