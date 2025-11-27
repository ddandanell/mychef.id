import { motion } from 'framer-motion';
import { CheckCircle, Clock, Zap } from 'lucide-react';

const TRUST_FEATURES = [
  {
    icon: CheckCircle,
    title: 'Money-Back Guarantee',
    description: '100% satisfaction or refund',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    title: '10-Min Response',
    description: '09:00-22:00 WIB daily',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Easy Booking',
    description: 'Book 48+ hours in advance',
    color: 'from-orange-500 to-amber-500',
  },
];

export default function TrustBadgesCompact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Why Choose myCHEF?
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            Three reasons to book with confidence
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TRUST_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative h-full group">
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300`} />

                  {/* Card background */}
                  <div className="relative bg-white dark:bg-slate-950 border-2 border-muted group-hover:border-primary/50 rounded-xl p-6 sm:p-8 h-full transition-all duration-300 flex flex-col items-center text-center">
                    {/* Icon container with gradient background */}
                    <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-full mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70">
                      {feature.description}
                    </p>

                    {/* Animated bottom line */}
                    <div className={`mt-4 h-1 bg-gradient-to-r ${feature.color} rounded-full w-0 group-hover:w-12 transition-all duration-300`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
