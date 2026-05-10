import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsappCTA';

const FAQS = [
  {
    cat: 'Booking',
    q: 'How do I book a private chef in Bali?',
    a: 'The fastest way is WhatsApp at +62 822-3756-5997 — most bookings are confirmed within an hour. You can also use the quote form on mychef.id. Booking 2+ days in advance gives the widest chef + menu choice; same-day bookings are usually possible in Canggu, Seminyak, and Ubud subject to availability.',
  },
  {
    cat: 'Booking',
    q: 'Can I hire a private chef for one night?',
    a: 'Yes. Most myCHEF bookings are single-night villa dinners for 4–20 guests. The chef arrives 2–3 hours before service, shops for ingredients en route, cooks in your villa kitchen, plates and serves, and cleans the kitchen before leaving.',
  },
  {
    cat: 'Booking',
    q: 'Can I hire a chef weekly or full-time?',
    a: 'Yes. myCHEF places chefs on weekly meal-prep contracts (1–3 sessions per week) and full-time household-chef arrangements for expat families and long-term renters. Weekly meal-prep starts at Rp 2.5M per session.',
  },
  {
    cat: 'Pricing',
    q: 'How much does a private chef cost in Bali?',
    a: 'A private chef in Bali costs from Rp 800,000 per hour with a 3-hour minimum, plus ingredient cost. A typical 4-course dinner for 6 guests runs Rp 3.5M–4.5M total (chef fee + ingredients + cleanup). Additional staff (waiter, bartender, sommelier) are Rp 300,000–500,000 per hour.',
  },
  {
    cat: 'Pricing',
    q: "What's included in the chef rate?",
    a: "Chef labor, plating, presentation, and kitchen cleanup are included in the per-hour rate. Ingredients are billed separately at cost (the chef shops at local markets and supplies receipts). Add-on staff (waiter, bartender, sommelier) and equipment rental (bar, premium glassware) are additional.",
  },
  {
    cat: 'Pricing',
    q: 'Are there hidden fees?',
    a: 'No. The chef rate is per hour with a 3-hour minimum. Ingredients are passed through at cost. Optional add-ons are clearly priced before you book. We send a written quote covering everything before any payment.',
  },
  {
    cat: 'Cuisines',
    q: 'What cuisines can a private chef in Bali make?',
    a: 'myCHEF chefs specialize in Mediterranean, modern European, Asian fusion, traditional Balinese, vegan, and dietary-restricted menus (gluten-free, dairy-free, kosher, halal). Each chef profile shows their specializations. You can request a specific cuisine when booking.',
  },
  {
    cat: 'Cuisines',
    q: 'Can the chef accommodate dietary restrictions?',
    a: 'Yes — gluten-free, dairy-free, halal, kosher, vegan, low-carb, paleo, allergy-aware. Tell us the restriction; the chef builds the menu around it. We have chefs specialised in allergen-managed kitchens.',
  },
  {
    cat: 'Cuisines',
    q: 'Can children eat from the same menu?',
    a: 'Yes. Many chefs adapt their menu for children — simpler plating, milder spices, kid-friendly versions of adult dishes. Tell us the kids\' ages when booking.',
  },
  {
    cat: 'Service area',
    q: 'Does myCHEF cover my area in Bali?',
    a: 'myCHEF covers all major Bali neighborhoods: Canggu (including Berawa, Echo Beach, Batu Bolong, Pererenan), Seminyak, Petitenget, Kerobokan, Legian, Kuta, Jimbaran, Uluwatu, Nusa Dua, Pecatu, Ubud, Tegallalang, Sanur, Denpasar, Tabanan, Tanah Lot, Gianyar, Lovina, Amed, Candidasa, and Padang Bai.',
  },
  {
    cat: 'Service area',
    q: 'Do you charge extra for far-from-Denpasar locations?',
    a: 'A small travel surcharge applies for areas like Lovina, Amed, Candidasa, and Padang Bai (covering chef transport time). For all main tourist neighborhoods (Canggu, Seminyak, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Kuta) there is no extra travel fee.',
  },
  {
    cat: 'Trust & safety',
    q: 'Is it safe to hire a private chef in your villa?',
    a: "Every myCHEF chef is background-checked, has verifiable hospitality experience, and is insured under myCHEF's commercial liability policy. The company has operated since 2012 and serves villa management companies, individual travelers, and recurring private clients across Bali.",
  },
  {
    cat: 'Trust & safety',
    q: 'Is the chef insured?',
    a: 'Yes — every booking is covered by myCHEF\'s commercial liability insurance. You don\'t need to add the chef to your villa policy.',
  },
  {
    cat: 'Trust & safety',
    q: 'What happens if the chef is unwell on the day?',
    a: 'We always have backup chefs on standby. If your assigned chef can\'t make it (rare — last 12 months <0.5% of bookings), we send a backup of the same skill level for the same menu, no extra cost.',
  },
  {
    cat: 'Comparison',
    q: "What's the difference between myCHEF and a Bali catering company?",
    a: 'Catering companies cook food off-site and deliver it to you. myCHEF sends a chef into your kitchen who shops, cooks, plates, and serves on the spot — the same model as a private restaurant in your home. Food is fresher and the experience is interactive (chef can describe dishes, take wine cues, and adapt the menu for picky eaters).',
  },
  {
    cat: 'Special events',
    q: 'Can a private chef cook a birthday or anniversary dinner?',
    a: "Yes — birthdays, anniversaries, proposals, and milestone dinners are myCHEF's most-booked event type. Add-ons include sommelier wine pairing, professional photography coordination, candle and flower setup, and surprise cake course.",
  },
  {
    cat: 'Special events',
    q: 'Can you handle a wedding rehearsal dinner or small ceremony?',
    a: 'Yes. We do small (8-30 guest) wedding rehearsal dinners and intimate ceremonies. For larger weddings we can supply additional kitchen and service staff scaled to the event size.',
  },
  {
    cat: 'Logistics',
    q: 'What does the chef need from the villa kitchen?',
    a: 'Basic: a working stove, oven, fridge, and sink. Most Bali villa kitchens are well equipped. The chef brings any specialty equipment (sous vide, specific knives, etc.) needed for your specific menu.',
  },
  {
    cat: 'Logistics',
    q: 'Do I need to provide table settings?',
    a: 'Standard plates, glasses, and cutlery — yes (your villa typically provides). For premium settings (chef\'s plates, wine glasses, charcuterie boards), we can rent and bring on request.',
  },
  {
    cat: 'Logistics',
    q: 'When does the chef arrive and leave?',
    a: 'Typically 2-3 hours before service for prep + shopping. Stays through service and cleanup, leaves once the kitchen is back to villa state. For multi-course tasting menus, expect the chef on-site 4-5 hours total.',
  },
];

const CATEGORIES = ['Booking', 'Pricing', 'Cuisines', 'Service area', 'Trust & safety', 'Comparison', 'Special events', 'Logistics'];

export default function FAQMasterPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Private Chef in Bali — Frequently Asked Questions | myCHEF Indonesia"
        description="20 common questions about hiring a private chef in Bali: pricing, booking, cuisines, dietary restrictions, service area, trust & safety. Direct answers from myCHEF Indonesia."
        canonical="https://mychef.id/faq"
        keywords="private chef bali faq, hire private chef questions, private chef cost bali, private chef bali safety, private chef bali booking faq"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': 'https://mychef.id/faq#faqs',
            mainEntity: FAQS.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://mychef.id/faq' },
            ],
          },
        ]}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Private Chef in Bali — Questions Answered
          </h1>
          <p className="text-lg text-foreground/80 mb-10 max-w-3xl">
            20 of the most common questions guests ask about hiring a private chef in Bali. Don't see
            your question? WhatsApp us — we respond in under 10 minutes during operating hours.
          </p>

          {CATEGORIES.map((cat) => {
            const items = FAQS.filter((f) => f.cat === cat);
            return (
              <div key={cat} className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {items.map((f, i) => (
                    <AccordionItem key={i} value={`${cat}-${i}`} className="border-2 rounded-lg px-4 sm:px-6 bg-card hover-elevate">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold">{f.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 leading-relaxed pb-4">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" onClick={() => openWhatsApp('faq')}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp with a question
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
