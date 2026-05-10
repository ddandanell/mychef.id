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
    title: 'Traditional Balinese Rijsttafel — Sharing Feast',
    pricePer: 'Rp 4.8M for 6-8 guests, all-in (chef + ingredients)',
    courses: [
      { name: 'Mezze (Sharing)', dish: 'Lawar (vegetable + coconut salad), sambal matah, urap, tempeh manis, krupuk' },
      { name: 'Mains (Sharing)', dish: 'Bebek betutu (slow-roasted duck), ikan bakar (grilled fish), satay lilit, ayam pelalah, sayur urap' },
      { name: 'Sides', dish: 'Steamed rice, yellow rice, sambal trio (matah, terasi, hijau)' },
      { name: 'Dessert', dish: 'Dadar gulung (pandan crepes), klepon, tropical fruit selection' },
    ],
  },
  {
    title: 'Modern Balinese Tasting Menu — 5 Courses',
    pricePer: 'Rp 6.8M for 6 guests, all-in',
    courses: [
      { name: 'Amuse-bouche', dish: 'Sambal matah on coconut crisp, jicama, lime' },
      { name: 'First', dish: 'Lawar of green papaya, betel leaf, smoked candlenut' },
      { name: 'Second', dish: 'Sayur tabu broth, banana flower, kaffir lime, soft tofu' },
      { name: 'Main', dish: 'Bebek betutu — slow-roasted duck wrapped in banana leaf, base genep spice paste, yellow rice' },
      { name: 'Dessert', dish: 'Coconut + palm sugar custard, black rice, fresh mango' },
    ],
  },
];

export default function MenusBalinesePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Balinese Private Chef Menu in Bali — Sample Menus | myCHEF"
        description="Sample traditional + modern Balinese menus from myCHEF private chefs. Rijsttafel sharing feasts, modern Balinese tasting menus. From Rp 4.8M for 6-8 guests."
        canonical="https://mychef.id/menus/balinese"
        keywords="balinese private chef bali, balinese tasting menu, rijsttafel chef bali, traditional balinese chef, bebek betutu chef bali"
        structuredData={[
          { '@context': 'https://schema.org', '@type': 'Menu', '@id': 'https://mychef.id/menus/balinese#menu', name: 'Balinese Sample Menu', description: 'Sample Balinese menus cooked by myCHEF private chefs in Bali villas',
            hasMenuSection: SAMPLE_MENU.map(m => ({ '@type': 'MenuSection', name: m.title, description: m.pricePer, hasMenuItem: m.courses.map(c => ({ '@type': 'MenuItem', name: c.name, description: c.dish })) })) },
          { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
            { '@type': 'ListItem', position: 2, name: 'Menus', item: 'https://mychef.id/menus' },
            { '@type': 'ListItem', position: 3, name: 'Balinese', item: 'https://mychef.id/menus/balinese' },
          ] },
        ]}
      />
      <Header />
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">Balinese Private Chef Menu — Bali</h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            Traditional Balinese cooking — base genep spice pastes, slow-roasted bebek betutu wrapped in banana leaf, sambal trio, lawar — prepared in your villa kitchen by chefs trained in classical Balinese technique. We can also do modern Balinese tasting menus that reframe traditional flavors as plated multi-course dining.
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
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for a Balinese menu
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
