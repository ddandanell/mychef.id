import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, MessagesSquare, CheckCircle, Sparkles } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Contact Us on WhatsApp',
    description: "You will always speak with a native English speaker. Our food expert chef will understand exactly what you want and help find your perfect chef match.",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'Receive Custom Menu Proposals',
    description: 'Our chefs design personalized menus with transparent pricing in Indonesian Rupiah. Chef service fees and ingredient costs quoted separately.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MessagesSquare,
    title: 'Plan Together Until Perfect',
    description: 'We sit down together (virtually on WhatsApp) to design your dinner. Zero communication mistakes - we ensure you get exactly what you need.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: CheckCircle,
    title: 'Confirm Your Booking',
    description: "Once you're 100% happy with everything, we send payment details. Secure your date with our simple booking process.",
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'Enjoy Your Experience!',
    description: 'Most customers prefer: Chef arrives 2 hours early, you plan together, give them cash, they shop at best markets, then cook your perfect meal!',
    color: 'from-red-500 to-rose-500',
  },
];

export default function HowItWorks() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=howItWorks');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=howItWorks');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
            Simple steps to get your perfect chef experience
          </p>
        </div>

        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* First row - 3 steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {STEPS.slice(0, 3).map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-full group">
                    {/* Gradient glow background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />

                    {/* Card */}
                    <div className="relative bg-white dark:bg-slate-950 border-2 border-muted group-hover:border-primary/50 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 flex flex-col items-center text-center">
                      {/* Step number */}
                      <div className={`absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`bg-gradient-to-br ${step.color} p-4 rounded-full mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg sm:text-xl text-foreground mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
                        {step.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${step.color} rounded-full w-0 group-hover:w-8 transition-all duration-300`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Second row - 2 steps centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 md:max-w-2xl md:mx-auto">
            {STEPS.slice(3).map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index + 3}
                  variants={itemVariants}
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-full group">
                    {/* Gradient glow background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`} />

                    {/* Card */}
                    <div className="relative bg-white dark:bg-slate-950 border-2 border-muted group-hover:border-primary/50 rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 flex flex-col items-center text-center">
                      {/* Step number */}
                      <div className={`absolute -top-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg`}>
                        {index + 4}
                      </div>

                      {/* Icon */}
                      <div className={`bg-gradient-to-br ${step.color} p-4 rounded-full mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-lg sm:text-xl text-foreground mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground/70 leading-relaxed flex-grow">
                        {step.description}
                      </p>

                      {/* Bottom accent line */}
                      <div className={`mt-4 h-1 bg-gradient-to-r ${step.color} rounded-full w-0 group-hover:w-8 transition-all duration-300`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button
            size="lg"
            onClick={handleQuoteClick}
            variant="outline"
            className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2 min-h-12"
            data-testid="button-how-it-works-quote"
          >
            <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="hidden sm:inline">Start My Booking</span>
            <span className="sm:hidden">Book Now</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2 min-h-12"
            data-testid="button-how-it-works-whatsapp"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="hidden sm:inline">Talk to Our Team</span>
            <span className="sm:hidden">Contact Us</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
