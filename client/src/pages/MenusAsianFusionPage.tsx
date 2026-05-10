import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsappCTA';

const SAMPLE_MENU = [
  {
    title: 'Pan-Asian Tasting Menu — 5 Courses',
    pricePer: 'Rp 5.8M for 6 guests, all-in (chef + ingredients)',
    courses: [
      { name: 'Amuse-bouche', dish: 'Yellowtail sashimi, ponzu, jalapeño, micro shiso' },
      { name: 'First', dish: 'Tom yum cappuccino with prawn dumpling, lemongrass air' },
      { name: 'Second', dish: 'Hand-pulled biang biang noodles, brown butter, chili crisp, soft yolk' },
      { name: 'Main', dish: 'Miso-glazed black cod, charred bok choy, ginger jus, sesame foam' },
      { name: 'Dessert', dish: 'Pandan crème brûlée, coconut sorbet, palm sugar caramel' },
    ],
  },
  {
    title: 'Family-Style Asian Fusion Sharing',
    pricePer: 'Rp 5.2M for 8-10 guests, all-in',
    courses: [
      { name: 'Sharing Cold', dish: 'Tuna tataki, smashed cucumber, Sichuan chili oil, coriander' },
      { name: 'Sharing Hot', dish: 'Korean fried chicken, gochujang glaze, pickled daikon, sesame' },
      { name: 'Mains', dish: 'Whole roast duck (Peking-style), pancakes, hoisin, spring onion' },
      { name: 'Sides', dish: 'Garlic bok choy, jasmine rice, kimchi' },
      { name: 'Dessert', dish: 'Mango sticky rice, coconut cream, salted palm sugar' },
    ],
  },
];

export default function MenusAsianFusionPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Asian Fusion Private Chef Menu in Bali — Sample Menus | myCHEF"
        description="Sample Asian fusion menus from myCHEF private chefs in Bali. Pan-Asian tasting menus, family-style sharing. Modern Indonesian + Japanese + Thai + Korean. From Rp 5.2M."
        canonical="https://mychef.id/menus/asian-fusion"
        keywords="asian fusion private chef bali, japanese chef bali, thai chef bali, korean chef bali, pan asian menu bali villa"
        structuredData={[
          { '@context': 'https://schema.org', '@type': 'Menu', '@id': 'https://mychef.id/menus/asian-fusion#menu', name: 'Asian Fusion Sample Menu',
            hasMenuSection: SAMPLE_MENU.map(m => ({ '@type': 'MenuSection', name: m.title, description: m.pricePer, hasMenuItem: m.courses.map(c => ({ '@type': 'MenuItem', name: c.name, description: c.dish })) })) },
          { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
            { '@type': 'ListItem', position: 2, name: 'Menus', item: 'https://mychef.id/menus' },
            { '@type': 'ListItem', position: 3, name: 'Asian Fusion', item: 'https://mychef.id/menus/asian-fusion' },
          ] },
        ]}
      />
      <Header />
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">Asian Fusion Private Chef Menu — Bali</h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            Modern Asian fusion — Japanese sashimi, Thai broths, Sichuan chili crisp, Korean fried chicken, hand-pulled noodles. Our chefs interpret pan-Asian flavors for villa dining without losing the essence of each cuisine. Sample menus below; every booking is custom.
          </p>
          {SAMPLE_MENU.map((menu) => (
            <Card key={menu.title} className="mb-6"><CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{menu.title}</h2>
              <p className="text-sm text-primary font-semibold mb-4">{menu.pricePer}</p>
              <ul className="space-y-3">{menu.courses.map(c => (
                <li key={c.name} className="border-l-2 border-primary/30 pl-4">
                  <div className="text-sm font-semibold text-primary uppercase tracking-wide">{c.name}</div>
                  <div className="text-foreground/80">{c.dish}</div>
                </li>
              ))}</ul>
            </CardContent></Card>
          ))}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" onClick={() => openWhatsApp('hero')} className="bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for an Asian fusion menu
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
