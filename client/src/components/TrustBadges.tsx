import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Award, Users, Clock, CheckCircle, Lock } from 'lucide-react';

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: 'Background-Checked Chefs',
    description: 'All chefs undergo thorough background checks and reference verification',
  },
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Minimum 5 years experience in top Bali restaurants with culinary certifications',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Online payment (Visa, MasterCard, all cards) & cash (IDR). Safe processing with clear invoicing and refund policy',
  },
  {
    icon: CheckCircle,
    title: 'Full Insurance Coverage',
    description: 'All services covered by comprehensive liability insurance',
  },
  {
    icon: Users,
    title: '1000+ Happy Clients',
    description: 'Serving Bali since 2012 with verified 5-star reviews',
  },
  {
    icon: Clock,
    title: 'Clear Cancellation Policy',
    description: 'Flexible cancellation up to 7 days before service with full refund',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4">
            Your Safety & Satisfaction Guaranteed
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We take trust seriously. Every chef is vetted, insured, and committed to the highest professional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="border-2 hover-elevate" data-testid={`card-trust-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg" data-testid={`text-trust-${index}-title`}>
                        {point.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed" data-testid={`text-trust-${index}-description`}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-primary/5 border-2 border-primary/20 rounded-xl">
          <div className="text-center max-w-3xl mx-auto">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">100% Satisfaction Guarantee</h3>
            <p className="text-foreground/80 leading-relaxed">
              If you're not completely satisfied with your experience, contact us within 24 hours. 
              We'll make it right or provide a full refund - no questions asked. Your trust is our top priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
