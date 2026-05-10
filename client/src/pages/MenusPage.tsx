import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, MessageCircle } from 'lucide-react';
import { Link } from 'wouter';
import { openWhatsApp } from '@/lib/whatsappCTA';

const CUISINES = [
  { slug: 'mediterranean', name: 'Mediterranean', description: 'Olive oil, fresh seafood, charred vegetables, slow-cooked lamb. Perfect for Bali\'s coastal lifestyle and warm-evening villa dining.' },
  { slug: 'asian-fusion', name: 'Asian Fusion', description: 'Modern interpretations of Indonesian, Thai, Japanese and Chinese flavors — designed to surprise and delight without losing the essence.' },
  { slug: 'balinese', name: 'Traditional Balinese', description: 'Authentic rijsttafel, satay, lawar, and bebek betutu prepared by chefs trained in classical Balinese technique.' },
  { slug: 'modern-european', name: 'Modern European', description: 'Plated multi-course tasting menus in the style of contemporary European fine dining — French, Italian, Nordic.' },
  { slug: 'vegan', name: 'Vegan & Plant-Based', description: 'Full-flavor plant-based menus that don\'t compromise — for vegan guests, mixed groups, and wellness retreats.' },
  { slug: 'dietary-restricted', name: 'Dietary Restricted', description: 'Gluten-free, dairy-free, halal, kosher, low-carb, paleo. Tell us the restriction; the chef builds the menu.' },
];

export default function MenusPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Sample Menus — Private Chef in Bali | myCHEF Indonesia"
        description="Sample menus from myCHEF private chefs in Bali: Mediterranean, Asian fusion, Balinese, modern European, vegan, dietary-restricted. Custom menus for every occasion."
        canonical="https://mychef.id/menus"
        keywords="private chef menu bali, sample menu private chef, mediterranean menu bali, balinese tasting menu, vegan private chef bali"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': 'https://mychef.id/menus#collection',
            url: 'https://mychef.id/menus',
            name: 'Sample Menus by Cuisine',
            isPartOf: { '@id': 'https://mychef.id/#website' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'Menus', item: 'https://mychef.id/menus' },
            ],
          },
        ]}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Sample Menus by Cuisine
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mb-12">
            Browse sample menus our chefs cook regularly across Bali. Every booking is fully customised
            to your guests, dietary needs, occasion, and the produce that's freshest in the market that
            morning. Use these as starting points — your final menu will be unique to your event.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CUISINES.map((c) => (
              <Card key={c.slug} className="hover-elevate">
                <CardContent className="p-6">
                  <ChefHat className="w-7 h-7 text-primary mb-3" />
                  <h2 className="text-xl font-semibold mb-2">{c.name}</h2>
                  <p className="text-foreground/70 text-sm mb-4">{c.description}</p>
                  <Link href={`/menus/${c.slug}`}>
                    <a className="text-primary font-semibold hover:underline">View sample menu →</a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => openWhatsApp('hero')}
              className="bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for a custom menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
