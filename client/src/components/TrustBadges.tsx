import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Award, Users, Clock, CheckCircle, Lock, Utensils, FileCheck } from 'lucide-react';

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: 'Background-Checked Chefs',
    description: 'All chefs undergo thorough criminal background checks, reference verification, and identity confirmation',
    badge: 'Police-Verified',
  },
  {
    icon: Award,
    title: 'Professional Certifications',
    description: 'Minimum 5 years experience in top Bali restaurants. Food safety certified with international culinary credentials',
    badge: 'HACCP Certified',
  },
  {
    icon: Utensils,
    title: 'Health & Hygiene Standards',
    description: 'All chefs follow strict food safety protocols with regular health certifications and hygiene training',
    badge: 'Health Certified',
  },
  {
    icon: Lock,
    title: '100% Secure Payments',
    description: 'Encrypted online payment (Visa, MasterCard, all cards) & cash (IDR). Full payment before service with official invoicing',
    badge: 'Secure Processing',
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Insurance',
    description: 'Full liability coverage for all services. Your property and guests are protected throughout the experience',
    badge: '100% Insured',
  },
  {
    icon: FileCheck,
    title: 'Villa Partner Network',
    description: 'Trusted by 50+ luxury villas in Bali. Verified partnerships with top accommodation providers',
    badge: 'Villa-Approved',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium">
            Trusted by 1000+ Guests Since 2012
          </Badge>
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4">
            Your Safety & Satisfaction Guaranteed
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We take trust seriously. Every chef is thoroughly vetted, professionally certified, fully insured, and committed to the highest safety and quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card key={index} className="border-2 hover-elevate bg-background" data-testid={`card-trust-${index}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary-light))' }}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg" data-testid={`text-trust-${index}-title`}>
                          {point.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          {point.badge}
                        </Badge>
                      </div>
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

        <div className="mt-12 p-8 rounded-xl border-2" style={{ backgroundColor: 'hsl(var(--primary-light))', borderColor: 'hsl(var(--primary-light-border))' }}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground">100% Satisfaction</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-8 h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground">24/7 Support</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-8 h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground">Secure Data</Badge>
              </div>
            </div>
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Our Promise to You</h3>
            <p className="text-foreground/80 leading-relaxed text-base lg:text-lg">
              If you're not completely satisfied with your experience, contact us within 24 hours. 
              We'll make it right or provide a full refund - no questions asked. Your data is never shared. 
              Your trust and safety are our top priorities, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
