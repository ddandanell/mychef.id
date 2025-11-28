import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Award, Users, Clock, CheckCircle, Lock, Utensils, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function TrustBadges() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <Badge variant="outline" className="mb-4 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
            Trusted by 1000+ Guests Since 2012
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            Your Safety & Satisfaction Guaranteed
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-3xl mx-auto px-2">
            We take trust seriously. Every chef is thoroughly vetted, professionally certified, fully insured, and committed to the highest safety and quality standards.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-2 hover-elevate bg-background h-full" data-testid={`card-trust-${index}`}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'hsl(var(--primary-light))' }}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-2">
                          <h3 className="font-semibold text-base sm:text-lg leading-tight" data-testid={`text-trust-${index}-title`}>
                            {point.title}
                          </h3>
                          <Badge variant="secondary" className="text-[10px] sm:text-xs flex-shrink-0 w-fit">
                            {point.badge}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed" data-testid={`text-trust-${index}-description`}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 rounded-xl border-2" 
          style={{ backgroundColor: 'hsl(var(--primary-light))', borderColor: 'hsl(var(--primary-light-border))' }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground text-[10px] sm:text-xs">100% Satisfaction</Badge>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground text-[10px] sm:text-xs">24/7 Support</Badge>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                <Badge className="bg-primary text-primary-foreground text-[10px] sm:text-xs">Secure Data</Badge>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">Our Promise to You</h3>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              If you're not completely satisfied with your experience, contact us within 24 hours. 
              We'll make it right or provide a full refund - no questions asked. Your data is never shared. 
              Your trust and safety are our top priorities, always.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
