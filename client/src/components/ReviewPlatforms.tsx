import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SiTrustpilot, SiGoogle, SiAirbnb } from 'react-icons/si';

export default function ReviewPlatforms() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="text-review-platforms-headline">
              We offer the best chefs for a reason
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Check out our reviews and join over 1000+ happy guests from all around the world.
            </p>

            {/* Platform Logos */}
            <div className="flex items-center gap-8 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 group cursor-pointer"
                data-testid="logo-trustpilot"
              >
                <SiTrustpilot className="w-6 h-6 text-green-500" />
                <span className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">
                  Trustpilot
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 group cursor-pointer"
                data-testid="logo-google"
              >
                <SiGoogle className="w-6 h-6 text-blue-500" />
                <span className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">
                  Google
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 group cursor-pointer"
                data-testid="logo-airbnb"
              >
                <SiAirbnb className="w-6 h-6 text-red-500" />
                <span className="text-sm font-semibold text-foreground/70 group-hover:text-foreground transition-colors">
                  Airbnb
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Review Cards Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block relative h-96"
          >
            {/* Card 1 - Left */}
            <motion.div
              whileHover={{ y: -8 }}
              className="absolute left-0 top-8 w-48 bg-white dark:bg-card rounded-2xl shadow-2xl p-4 border border-primary/10"
              data-testid="card-review-1"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-foreground/70 mb-3 line-clamp-3">
                "Best experience we ever had. The chef was professional and the food was incredible!"
              </p>
              <p className="text-xs font-semibold text-foreground">John D.</p>
            </motion.div>

            {/* Card 2 - Center */}
            <motion.div
              whileHover={{ y: -12 }}
              className="absolute left-1/2 top-0 -translate-x-1/2 w-48 bg-white dark:bg-card rounded-2xl shadow-2xl p-4 border border-primary/10 z-10"
              data-testid="card-review-2"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs font-bold text-primary ml-1">4.9</span>
              </div>
              <p className="text-xs text-foreground/70 mb-3 line-clamp-3">
                "Outstanding service. Everything was perfect from start to finish!"
              </p>
              <p className="text-xs font-semibold text-foreground">Sarah M.</p>
            </motion.div>

            {/* Card 3 - Right */}
            <motion.div
              whileHover={{ y: -8 }}
              className="absolute right-0 top-12 w-48 bg-white dark:bg-card rounded-2xl shadow-2xl p-4 border border-primary/10"
              data-testid="card-review-3"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-foreground/70 mb-3 line-clamp-3">
                "Highly recommend! Professional chefs, delicious food, complete satisfaction."
              </p>
              <p className="text-xs font-semibold text-foreground">Michael R.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
