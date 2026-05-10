import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, ShieldCheck, Award, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsappCTA';

const SPECIALIZATIONS = [
  'Mediterranean & modern European',
  'Traditional Balinese (rijsttafel, betutu, lawar)',
  'Asian fusion (Japanese, Thai, Korean)',
  'Vegan and plant-based',
  'Wedding multi-course catering',
  'Wood-fired and grill cooking',
  'Pastry and dessert specialists',
  'Sommelier-paired tasting menus',
  'Private retreat and yoga-event cooking',
  'Halal-certified menu design',
  'Gluten-free and allergen-managed kitchens',
  'Children-friendly menu adaptation',
];

export default function ChefsPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Private Chefs in Bali — Background-Checked & Certified | myCHEF"
        description="Meet myCHEF's network of background-checked private chefs in Bali. Mediterranean, Balinese, Asian fusion, vegan, wedding catering specialists. Insured, food-safety certified."
        canonical="https://mychef.id/chefs"
        keywords="bali private chefs, mychef chefs roster, background-checked chefs bali, certified private chef indonesia, professional chefs bali"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': 'https://mychef.id/chefs#collection',
            url: 'https://mychef.id/chefs',
            name: 'myCHEF Private Chef Network in Bali',
            isPartOf: { '@id': 'https://mychef.id/#website' },
            about: { '@id': 'https://mychef.id/#organization' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'Our Chefs', item: 'https://mychef.id/chefs' },
            ],
          },
        ]}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Private Chefs in Bali
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-10 max-w-3xl">
            myCHEF's chef network covers the full spectrum of cuisines and event types across Bali.
            Every chef on the roster has been identity-verified, criminal-checked, and food-safety
            certified before their first booking. Many trained in European restaurants or
            international hotel groups before joining myCHEF.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-elevate"><CardContent className="p-6">
              <ShieldCheck className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-lg font-semibold mb-2">Background-checked</h2>
              <p className="text-foreground/70 text-sm">
                Every chef is identity-verified and criminal-record-checked. Many hold international
                hospitality references.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <Award className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-lg font-semibold mb-2">Food-safety certified</h2>
              <p className="text-foreground/70 text-sm">
                HACCP-aware kitchen practice, allergen handling protocols, temperature control —
                all standard.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <ChefHat className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-lg font-semibold mb-2">Insured & supported</h2>
              <p className="text-foreground/70 text-sm">
                Commercial liability insurance covers every booking. Operations team on WhatsApp
                throughout your event.
              </p>
            </CardContent></Card>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-6">Chef specializations on the roster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {SPECIALIZATIONS.map((s) => (
              <div key={s} className="flex items-start gap-3 bg-card border rounded-lg p-3">
                <ChefHat className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{s}</span>
              </div>
            ))}
          </div>

          <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-semibold mb-2">Want to be matched with a specific chef?</h2>
            <p className="text-foreground/80">
              When you WhatsApp us with your event details (date, area, guest count, cuisine),
              we send you the chef profile and a sample menu before the booking is confirmed.
              You can request a different chef if the match isn't right — your satisfaction is
              the standard, not the exception.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" onClick={() => openWhatsApp('chefProfiles')}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp for a chef recommendation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
