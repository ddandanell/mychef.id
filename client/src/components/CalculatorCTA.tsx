import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CalculatorCTA() {
  const [, setLocation] = useLocation();

  const handleCalculator = () => {
    setLocation('/calculator');
  };

  const handleWhatsApp = () => {
    setLocation('/contact/confirm?source=calculator_cta');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4" data-testid="text-calculator-cta-headline">
              See Your Price in Seconds
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Get an instant quote with our pricing calculator. Choose your dates, meals, and chef preferences to see exactly how much your private chef experience costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  onClick={handleCalculator}
                  className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-calculator-cta-primary"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  <span>Use Calculator</span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-calculator-cta-secondary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>Ready to Book? Let's Chat</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white dark:bg-card rounded-2xl p-8 shadow-xl border border-primary/20">
                <div className="space-y-4">
                  <div className="h-3 bg-primary/10 rounded w-3/4" />
                  <div className="h-3 bg-primary/10 rounded w-full" />
                  <div className="h-3 bg-primary/10 rounded w-5/6" />
                  <div className="pt-4 border-t border-primary/10">
                    <div className="h-8 bg-primary/20 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
