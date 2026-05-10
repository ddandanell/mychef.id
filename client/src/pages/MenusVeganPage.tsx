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
    title: 'Plant-Based Tasting Menu — 5 Courses',
    pricePer: 'Rp 5.4M for 6 guests, all-in (chef + ingredients)',
    courses: [
      { name: 'Amuse-bouche', dish: 'Smoked beetroot tartare, capers, dill, sourdough crisp' },
      { name: 'First', dish: 'Charred cauliflower, romesco, hazelnut crumble, parsley oil' },
      { name: 'Second', dish: 'Hand-rolled cavatelli, brown-butter mushroom ragu, lemon zest' },
      { name: 'Main', dish: 'Wood-roasted celeriac steak, miso jus, charred greens, smoked salt' },
      { name: 'Dessert', dish: 'Coconut + dark chocolate ganache, raspberry coulis, cocoa nibs' },
    ],
  },
  {
    title: 'Vegan Mediterranean Sharing Feast',
    pricePer: 'Rp 4.6M for 8 guests, all-in',
    courses: [
      { name: 'Mezze', dish: 'Hummus, baba ganoush, muhammara, olives, dolma, charred flatbread' },
      { name: 'Salad', dish: 'Fattoush — heirloom tomato, cucumber, sumac, pomegranate, mint, sourdough' },
      { name: 'Mains (Sharing)', dish: 'Slow-roasted whole cauliflower, tahini, pomegranate. Stuffed peppers with farro + walnut. Roasted aubergine with smoked tomato' },
      { name: 'Dessert', dish: 'Vegan baklava, coconut ice cream, fresh figs' },
    ],
  },
];

export default function MenusVeganPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Vegan & Plant-Based Private Chef Menu in Bali | myCHEF"
        description="Sample vegan + plant-based menus from myCHEF private chefs in Bali. Tasting menus, Mediterranean sharing feasts. Full-flavor plant-based dining. From Rp 4.6M for 8 guests."
        canonical="https://mychef.id/menus/vegan"
        keywords="vegan private chef bali, plant-based chef bali, vegan villa dinner bali, vegan retreat chef, vegan tasting menu bali"
        structuredData={[
          { '@context': 'https://schema.org', '@type': 'Menu', '@id': 'https://mychef.id/menus/vegan#menu', name: 'Vegan Sample Menu',
            hasMenuSection: SAMPLE_MENU.map(m => ({ '@type': 'MenuSection', name: m.title, description: m.pricePer, hasMenuItem: m.courses.map(c => ({ '@type': 'MenuItem', name: c.name, description: c.dish })) })) },
          { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
            { '@type': 'ListItem', position: 2, name: 'Menus', item: 'https://mychef.id/menus' },
            { '@type': 'ListItem', position: 3, name: 'Vegan', item: 'https://mychef.id/menus/vegan' },
          ] },
        ]}
      />
      <Header />
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">Vegan & Plant-Based Private Chef Menu — Bali</h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            Full-flavor plant-based menus that don't compromise. For vegan guests, mixed groups, wellness retreats, and yoga teacher trainings. We work with local Tegallalang and Tabanan organic farms for the freshest produce. Sample menus below — every booking is fully custom.
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
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for a vegan menu
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
