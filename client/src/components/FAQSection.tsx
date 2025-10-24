import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: 'How do I book a private chef?',
    answer: 'Simply contact us on WhatsApp at +62 822-3756-5997. Share your event details (location, date, number of guests, cuisine preferences) and we\'ll match you with the perfect chef and send menu proposals. We typically respond within 10 minutes during business hours (09:00-22:00 WIB daily).',
  },
  {
    question: 'How much does a private chef cost?',
    answer: 'Chef service fees range from Rp 800,000 - 1,200,000+ per hour, with most dinners requiring 3-4 hours. Example: An intimate dinner for 2 starts from Rp 2,500,000, family gathering (4-6 guests) from Rp 3,500,000, villa party (8-12 guests) from Rp 5,500,000. Ingredients are separate - we can source them for you or provide a shopping list.',
  },
  {
    question: 'Are all chefs background-checked and insured?',
    answer: 'Yes, absolutely. All our chefs undergo thorough criminal background checks, reference verification, and identity confirmation. They are food safety certified (HACCP), professionally trained, and all services are covered by comprehensive liability insurance. Your safety is our top priority.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept secure online payments (Visa, MasterCard, and all major cards), bank transfers, and cash in Indonesian Rupiah (IDR) only. A 30-50% deposit secures your booking. Full payment must be completed before the chef arrives. All transactions are encrypted and processed securely with official invoicing.',
  },
  {
    question: 'Do I need to provide ingredients or will you source them?',
    answer: 'You have two options: (1) We can source all ingredients for you and send a separate bill for groceries (market price plus a 15-20% sourcing fee), or (2) your chef provides a shopping list and you purchase ingredients yourself. Either option works perfectly!',
  },
  {
    question: 'What kitchen equipment is required?',
    answer: 'Most villa kitchens in Bali are well-equipped. Your chef will bring specialized tools. We\'ll discuss your kitchen setup during booking to ensure everything needed is available.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking 1-2 weeks in advance, especially during peak season (June-September, December-January). However, we often accommodate last-minute requests - contact us to check availability.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Bali including Seminyak, Canggu, Ubud, Sanur, Nusa Dua, Uluwatu, Jimbaran, and all other areas across the island.',
  },
  {
    question: 'What time can the chef start?',
    answer: 'Chefs are available from morning until late evening. Most dinner services start between 4-6 PM for a 7-8 PM dinner. Breakfast, lunch, and late-night services available upon request.',
  },
  {
    question: 'Is cleanup included?',
    answer: 'Yes! Complete kitchen cleanup is included in all chef services. Your kitchen will be left spotless.',
  },
  {
    question: 'Should I tip the chef?',
    answer: 'Tipping is not required but always appreciated. 10-15% is customary for exceptional service.',
  },
  {
    question: 'What is the minimum/maximum number of guests?',
    answer: 'We cater from intimate dinners for 2 to large events for 50+ guests. Different chefs specialize in different group sizes - we\'ll match you accordingly.',
  },
  {
    question: 'Can you help with special occasions (birthdays, proposals)?',
    answer: 'Absolutely! We love making celebrations special. Inform us of your occasion and we can arrange special touches like custom cakes, romantic setups, or surprise presentations.',
  },
  {
    question: 'Do your chefs speak English?',
    answer: 'Yes, all our chefs communicate in English. Many also speak Indonesian, and some speak additional languages like French, Italian, or Japanese.',
  },
  {
    question: 'What if my villa doesn\'t have certain equipment?',
    answer: 'Your chef will bring essential tools. For specialized equipment, we can arrange rentals at a small additional cost. We\'ll discuss this during booking.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4" data-testid="text-faq-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about booking a private chef in Bali. Still have questions? WhatsApp us anytime!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-card hover-elevate" data-testid={`accordion-faq-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline py-5" data-testid={`button-faq-${index}-trigger`}>
                <span className="font-semibold text-base pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-5" data-testid={`text-faq-${index}-answer`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
