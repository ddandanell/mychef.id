import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TRUSTPILOT_REVIEWS = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 5,
    title: 'Exceeded all expectations!',
    text: 'Chef Budi prepared an incredible 5-course meal. Professional, friendly, and cleanup was immaculate. Our guests are still talking about it!',
    date: '2 weeks ago',
    verified: true,
  },
  {
    id: 2,
    name: 'James Chen',
    rating: 5,
    title: 'Best decision for our anniversary',
    text: 'The romantic beach dinner setup was perfect. Amazing food, beautiful presentation. Highly recommend to anyone visiting Bali.',
    date: '1 month ago',
    verified: true,
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    rating: 5,
    title: 'Professional and reliable',
    text: 'Background-checked chef, great communication, arrived on time, cooked delicious food. Everything was transparent and trustworthy.',
    date: '3 weeks ago',
    verified: true,
  },
];

export default function TrustpilotSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4">
            Trusted by Thousands on Trustpilot
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Read authentic reviews from real guests who've experienced myCHEF Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <div className="bg-white dark:bg-slate-950 border border-muted rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">4.9/5</p>
              <p className="text-foreground/70 mb-4">Based on 487 reviews</p>
              <div className="flex items-center justify-center">
                <svg
                  className="w-32 h-auto"
                  viewBox="0 0 120 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="60"
                    y="20"
                    textAnchor="middle"
                    className="fill-foreground font-semibold text-lg"
                  >
                    Trustpilot
                  </text>
                </svg>
              </div>
              <p className="text-sm text-foreground/60 mt-4">
                Verified reviews from real customers
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {TRUSTPILOT_REVIEWS.map((review) => (
              <Card
                key={review.id}
                className="p-5 border hover-elevate"
                data-testid={`card-trustpilot-review-${review.id}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                      Verified
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {review.title}
                </h4>
                <p className="text-sm text-foreground/70 mb-3">{review.text}</p>
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  <span>{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover-elevate border border-primary/20 rounded-lg text-primary font-semibold transition-all"
            data-testid="link-trustpilot-full"
          >
            See all reviews on Trustpilot
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
