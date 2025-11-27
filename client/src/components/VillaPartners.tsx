import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Building2, Users, Award } from 'lucide-react';
import { SiAirbnb } from 'react-icons/si';
import { motion } from 'framer-motion';
import type { MotionDiv } from 'framer-motion';
import villaImage from '@assets/generated_images/luxury_villa_dinner_experience.png';

export default function VillaPartners() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=villaPartners');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-2 border-primary/30 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden h-80 lg:h-full min-h-96"
                >
                  <img 
                    src={villaImage} 
                    alt="Luxury Villa Dining Experience" 
                    className="w-full h-full object-cover"
                    data-testid="img-villa-partners"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 lg:p-12 flex flex-col justify-center"
                >
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <div className="text-2xl text-foreground/60">Villa Partners</div>
                      <SiAirbnb className="w-6 h-6 text-red-500" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 mb-4"
                    >
                      <Building2 className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
                      For Villa & Airbnb Owners
                    </h2>
                    <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                      Elevate your guests' experience by partnering with myCHEF. We currently work with <span className="font-semibold text-primary">560+ luxury villas</span> across Bali. Whatever your guests need, we lift everything we touch with excellence.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Premium Guest Service</h3>
                        <p className="text-sm text-foreground/70">
                          Offer exclusive dining without any effort on your part
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                    >
                      <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">Easy Partnership</h3>
                        <p className="text-sm text-foreground/70">
                          Simple setup with ongoing support for you and your guests
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        size="sm"
                        onClick={handleWhatsAppClick}
                        className="w-full bg-primary hover:bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover-elevate active-elevate-2"
                        data-testid="button-villa-partners-whatsapp"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Partner With myCHEF Today
                    </Button>
                    <p className="text-xs text-foreground/60 mt-3 text-center">
                      Join 560+ successful villa partners across Bali
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
