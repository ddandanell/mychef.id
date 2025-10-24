import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: 'How do I book a private chef?',
    answer: 'Simply contact us on WhatsApp at +62 822-3756-5997. Share your event details (location, date, number of guests, cuisine preferences) and we\'ll match you with the perfect chef and send menu proposals.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept online payments (Visa, MasterCard, and all major cards), secure bank transfers, and cash in Indonesian Rupiah (IDR) only. Full payment must be completed before the chef arrives at your villa. A deposit of 30-50% secures your booking initially. All payments are processed securely with clear invoicing. Contact us on WhatsApp for a secure payment link.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We have a fair and transparent cancellation policy: 7+ days before service = full refund minus 10% admin fee. 3-6 days before = 50% refund. Less than 3 days = no refund. We understand emergencies happen and handle special situations with care.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer: 'Absolutely! Our chefs specialize in halal, vegetarian, vegan, gluten-free, and allergy-friendly menus. Just let us know your requirements when booking.',
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
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-12" data-testid="text-faq-headline">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6" data-testid={`accordion-faq-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline" data-testid={`button-faq-${index}-trigger`}>
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80" data-testid={`text-faq-${index}-answer`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
