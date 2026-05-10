import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText } from 'lucide-react';
import { useLocation } from 'wouter';
import { openWhatsApp } from '@/lib/whatsappCTA';

const FAQS = [
  {
    question: 'How do I book a private chef in Bali?',
    answer: 'Simply contact us on WhatsApp at +62 822-3756-5997. Share your event details (location, date, number of guests, cuisine preferences) and we\'ll match you with the perfect chef and send menu proposals within 10 minutes. You can also use our quick quote form for instant pricing estimates.',
  },
  {
    question: 'How much does a private chef cost in Bali?',
    answer: 'Chef service fees range from Rp 800,000 - 1,200,000+ per hour, with most dinners requiring 3-4 hours minimum. Example pricing: Intimate dinner for 2 starts from Rp 2,500,000, family gathering (4-6 guests) from Rp 3,500,000, villa party (8-12 guests) from Rp 5,500,000. Ingredients are billed separately. No hidden fees - you know exactly what you\'re paying before you book.',
  },
  {
    question: 'Are all chefs background-checked and insured?',
    answer: 'Yes, 100%. All our chefs undergo thorough criminal background checks, reference verification, and identity confirmation. They are food safety certified (HACCP), professionally trained, and all services are covered by comprehensive liability insurance. Your safety and peace of mind are our top priorities.',
  },
  {
    question: 'Can your chefs accommodate dietary restrictions and food allergies?',
    answer: 'Absolutely! Our chefs are experienced with all dietary needs including vegan, vegetarian, gluten-free, dairy-free, nut allergies, halal, kosher, keto, paleo, and medical diets (diabetes, Celiac, etc.). We take allergies very seriously and ensure zero cross-contamination. Just tell us your requirements during booking and we\'ll match you with a specialist chef.',
  },
  {
    question: 'What cuisines and dishes can your chefs prepare?',
    answer: 'Our 100+ chefs specialize in diverse cuisines: Indonesian (satay, nasi goreng, rendang), Italian (pasta, risotto, pizza), French, Japanese (sushi, teppanyaki), Thai, Mediterranean, BBQ, seafood, vegan, and fusion. Each chef has their specialties - we match you with the perfect chef based on your menu preferences.',
  },
  {
    question: 'What\'s included in the chef service?',
    answer: 'Everything you need for stress-free dining: Custom menu creation, professional cooking on-site using your kitchen, beautiful plating and presentation, table service during the meal, and complete kitchen cleanup. Your chef brings specialized tools and equipment. You only need to provide basic kitchen facilities and enjoy the experience!',
  },
  {
    question: 'How does ingredient shopping work?',
    answer: '**Most Popular (95% of clients choose this):** Your chef arrives 2 hours early, spends 30 minutes planning the exact menu with you, receives cash, then shops at the best local markets for peak freshness. You get complete transparency and only pay for what\'s bought. Perfect for quality control!\n\n**Option 2:** We source ingredients beforehand (market price + 15-20% service fee).\n\n**Option 3:** We provide a shopping list and you buy ingredients yourself.',
  },
  {
    question: 'How far in advance should I book my private chef?',
    answer: 'For best chef selection, book 1-2 weeks ahead. During peak seasons (June-September, December-January, holidays like Christmas and New Year), book 3-4 weeks early as top chefs fill up fast. Need last-minute help? Contact us anyway - we often accommodate same-day or next-day requests based on availability!',
  },
  {
    question: 'What are your payment terms and accepted methods?',
    answer: 'We accept secure online payments (Visa, MasterCard, all major credit/debit cards), bank transfers, and cash (IDR only). Simple payment schedule: 50% deposit when booking to secure your chef, remaining 50% paid 72 hours (3 days) before your event. All transactions are encrypted with official invoicing. No payment processing fees.',
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'We understand plans change! Cancellation/change terms based on timing:\n\n• 14+ days before: 100% refund\n• 7-13 days before: 50% refund\n• Less than 7 days: No refund (deposit retained)\n\nMenu changes, date/time adjustments, or location changes must be requested at least 72 hours (3 days) in advance at no charge. Changes within 72 hours may incur additional fees.',
  },
  {
    question: 'Can I request a trial or tasting before committing?',
    answer: 'Yes! While most clients book directly after reviewing our chef profiles and sample menus, we offer trial tastings for recurring services (weekly meal prep, full-time chefs) or large events. Contact us to arrange a paid tasting session where you can meet your chef and sample their cooking style before your main booking.',
  },
  {
    question: 'What areas of Bali do you serve?',
    answer: 'We serve ALL of Bali! Popular areas include Seminyak, Canggu, Ubud, Sanur, Nusa Dua, Uluwatu, Jimbaran, Pererenan, Berawa, Kerobokan, Denpasar, Tanah Lot, and beyond. Whether you\'re in a beachfront villa, jungle retreat, or cliff-top resort, we\'ll bring exceptional dining to your location. No additional travel fees within Bali.',
  },
  {
    question: 'What is the minimum and maximum number of guests you can serve?',
    answer: 'We cater to all group sizes: Intimate dinners for 2, family meals (4-8), villa parties (10-20), weddings and events (20-50+). For groups over 15, we may assign multiple chefs or additional service staff to ensure perfect execution. Different chefs specialize in different scales - we match accordingly.',
  },
  {
    question: 'What time can the chef start? Are breakfast and lunch available?',
    answer: 'Our chefs are available 7 days a week from early morning to late night! Breakfast service (starting 6-8 AM), lunch (11 AM-2 PM), afternoon events, dinner (most start 4-6 PM for 7-8 PM dining), and late-night cooking all available. Tell us your preferred timing and we\'ll accommodate your schedule.',
  },
  {
    question: 'What kitchen equipment is required? What if my villa kitchen is basic?',
    answer: 'Most Bali villas have adequate kitchens (stove, oven, basic cookware). Your chef brings specialized tools, knives, and equipment. For villas with limited facilities, we assess during booking and can arrange equipment rentals if needed (small additional cost). Even basic kitchens work fine - we\'ve successfully served in hundreds of different villas!',
  },
  {
    question: 'Is kitchen cleanup included in the service?',
    answer: 'Yes, 100%! Complete kitchen cleanup is included in every booking. Your chef washes all dishes, cookware, utensils, wipes counters, sweeps floors, and leaves your kitchen spotless. You can relax and enjoy your evening without worrying about the mess. Many clients tell us this is their favorite part!',
  },
  {
    question: 'Do your chefs speak English? What about other languages?',
    answer: 'All our chefs communicate fluently in English and Indonesian. Many also speak additional languages including French, Italian, Japanese, Mandarin, or Spanish. If language is important for your event, let us know your preference and we\'ll match you with a chef who can communicate perfectly in your language.',
  },
  {
    question: 'Can you help with special occasions like birthdays, anniversaries, or proposals?',
    answer: 'We LOVE making celebrations unforgettable! Tell us about your special occasion and we\'ll add magical touches: custom birthday cakes, romantic table setups, surprise dessert presentations, coordinated timing for proposals, themed decorations, or special menu touches. We\'ve helped with hundreds of celebrations - your success is our specialty!',
  },
  {
    question: 'Should I tip my chef? What\'s customary in Bali?',
    answer: 'Tipping is not required or expected, but always appreciated for exceptional service. If you choose to tip, 10-15% of the chef service fee is customary in Bali. Many clients also tip additional service staff (waiters, bartenders) separately. Tips can be given in cash (IDR) directly to your chef at the end of service.',
  },
  {
    question: 'How do you match me with the right chef?',
    answer: 'Our expert team considers your cuisine preferences, dietary needs, group size, event style, budget, and location to match you with the perfect chef from our network of 100+ professionals. We send you chef profiles and sample menus for approval before confirming. You can request a different chef if the match isn\'t perfect - your satisfaction is guaranteed!',
  },
];

export default function FAQSection() {
  const [, setLocation] = useLocation();
  
  const handleWhatsAppClick = () => {
    openWhatsApp('faq');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=faq');
  };

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

        <Accordion type="single" collapsible className="space-y-3 mb-12">
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-faq-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Ask a Question</span>
            <span className="sm:hidden">Ask Now</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleQuoteClick}
            variant="outline"
            className="px-6 md:px-8 py-5 md:py-6 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-faq-quote"
          >
            <FileText className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Schedule Free Consultation</span>
            <span className="sm:hidden">Get Consultation</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
