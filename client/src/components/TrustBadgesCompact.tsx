import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap } from 'lucide-react';

export default function TrustBadgesCompact() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 to-primary/5 border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Money-Back Guarantee</p>
              <p className="text-sm text-foreground/70">100% satisfaction or full refund</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">10-Minute Response</p>
              <p className="text-sm text-foreground/70">Available 09:00-22:00 WIB daily</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Same-Day Booking</p>
              <p className="text-sm text-foreground/70">Available for today & tomorrow</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
