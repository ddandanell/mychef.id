import { motion } from 'framer-motion';

const MicrosoftLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="8" height="8" fill="#F25022"/>
    <rect x="14" y="2" width="8" height="8" fill="#7FBA00"/>
    <rect x="2" y="14" width="8" height="8" fill="#00A4EF"/>
    <rect x="14" y="14" width="8" height="8" fill="#FFB900"/>
  </svg>
);

const AirbnbLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="#FF5A5F"/>
  </svg>
);

const GrabLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="#00B300"/>
    <path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2C6.48 4 2 8.48 2 14s4.48 10 10 10 10-4.48 10-10S17.52 4 12 4z" fill="white"/>
  </svg>
);

export default function TrustedByCompanies() {
  const companies = [
    { name: 'Microsoft', icon: MicrosoftLogo },
    { name: 'Airbnb', icon: AirbnbLogo },
    { name: 'Grab', icon: GrabLogo },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6" data-testid="text-trusted-by-headline">
              Trusted by industry leaders
            </h2>
            
            <p className="text-lg text-foreground/70 leading-relaxed">
              With the combination of technology, food knowledge, and love for the hospitality business, we have been able to offer the only global solution in the market to provide high-quality private chef services at any destination, at any given time.
            </p>
          </motion.div>

          {/* Right Content - Company Logos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 items-center justify-center"
          >
            {companies.map((company) => {
              const IconComponent = company.icon;
              return (
                <motion.div
                  key={company.name}
                  whileHover={{ scale: 1.15 }}
                  className="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity"
                  data-testid={`logo-company-${company.name.toLowerCase()}`}
                >
                  <IconComponent />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
