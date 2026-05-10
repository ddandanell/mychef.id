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
    title: 'Three-Course Mediterranean Villa Dinner',
    pricePer: 'Rp 4.2M for 6 guests, all-in (chef + ingredients)',
    courses: [
      { name: 'Starter', dish: 'Burrata, heirloom tomatoes, basil oil, sourdough crisps' },
      { name: 'Main', dish: 'Slow-cooked lamb shoulder, saffron jus, charred fennel, smoked cauliflower' },
      { name: 'Dessert', dish: 'Coconut panna cotta, Tegallalang strawberries, basil sugar' },
    ],
  },
  {
    title: 'Five-Course Mediterranean Tasting Menu',
    pricePer: 'Rp 7.8M for 6 guests, all-in (chef + ingredients + sommelier add-on optional)',
    courses: [
      { name: 'Amuse-bouche', dish: 'Olive tapenade on charred bread, Sicilian anchovy' },
      { name: 'First', dish: 'Burrata, peach, balsamic, basil' },
      { name: 'Second', dish: 'Hand-rolled cavatelli, brown butter, sage, brown crab' },
      { name: 'Third', dish: 'Wood-fired sea bass, salsa verde, charred lemon' },
      { name: 'Dessert', dish: 'Affogato with house-made vanilla gelato' },
    ],
  },
  {
    title: 'Family-Style Mediterranean Sharing Feast',
    pricePer: 'Rp 5.5M for 8-10 guests, all-in (chef + ingredients)',
    courses: [
      { name: 'Mezze', dish: 'Hummus, tzatziki, baba ganoush, charred flatbread, olives, dolma' },
      { name: 'Salad', dish: 'Fattoush — heirloom tomato, cucumber, sumac, pomegranate, mint' },
      { name: 'Mains (sharing)', dish: 'Whole roast lamb shoulder, saffron rice, roasted aubergine, slow-grilled vegetables' },
      { name: 'Dessert', dish: 'Baklava, honey ice cream, fresh figs' },
    ],
  },
];

export default function MenusMediterraneanPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mediterranean Private Chef Menu in Bali — Sample Menus | myCHEF"
        description="Sample Mediterranean menus from myCHEF private chefs in Bali. 3-course villa dinners, 5-course tasting menus, family-style sharing feasts. From Rp 4.2M for 6 guests."
        canonical="https://mychef.id/menus/mediterranean"
        keywords="mediterranean private chef bali, mediterranean menu villa bali, mediterranean tasting menu bali, italian chef bali, greek chef bali, mediterranean dinner bali"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Menu',
            '@id': 'https://mychef.id/menus/mediterranean#menu',
            name: 'Mediterranean Sample Menu',
            description: 'Sample Mediterranean menus cooked by myCHEF private chefs in Bali villas',
            inLanguage: 'en',
            hasMenuSection: SAMPLE_MENU.map((m) => ({
              '@type': 'MenuSection',
              name: m.title,
              description: m.pricePer,
              hasMenuItem: m.courses.map((c) => ({
                '@type': 'MenuItem',
                name: c.name,
                description: c.dish,
              })),
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'Menus', item: 'https://mychef.id/menus' },
              { '@type': 'ListItem', position: 3, name: 'Mediterranean', item: 'https://mychef.id/menus/mediterranean' },
            ],
          },
        ]}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
            Mediterranean Private Chef Menu — Bali
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            Mediterranean cooking is the most-requested cuisine for myCHEF villa dinners in Bali — olive
            oil, charred vegetables, fresh seafood from Jimbaran, slow-cooked lamb, brown-butter pasta.
            These three sample menus are the starting points our chefs work from. Every menu is rebuilt
            for your guests, dietary needs, and what's freshest in the market that morning.
          </p>

          {SAMPLE_MENU.map((menu) => (
            <Card key={menu.title} className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{menu.title}</h2>
                <p className="text-sm text-primary font-semibold mb-4">{menu.pricePer}</p>
                <ul className="space-y-3">
                  {menu.courses.map((c) => (
                    <li key={c.name} className="border-l-2 border-primary/30 pl-4">
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide">{c.name}</div>
                      <div className="text-foreground/80">{c.dish}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" onClick={() => openWhatsApp('hero')}
              className="bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for a Mediterranean menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
