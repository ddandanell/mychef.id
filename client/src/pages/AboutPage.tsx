import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, ShieldCheck, Award, Users, MapPin, Clock } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsappCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="About myCHEF Indonesia — Private Chef Service in Bali Since 2012"
        description="myCHEF is Bali's longest-running private chef booking service. Background-checked chefs, 13+ years in Bali hospitality, 24 service areas. Office in Denpasar."
        canonical="https://mychef.id/about"
        keywords="about mychef, private chef bali company, mychef indonesia history, bali private chef since 2012"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://mychef.id/about#page',
            url: 'https://mychef.id/about',
            name: 'About myCHEF Indonesia',
            description: 'About the private chef booking service operating in Bali since 2012',
            mainEntity: { '@id': 'https://mychef.id/#organization' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://mychef.id/about' },
            ],
          },
        ]}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Bali's Private Chef Service Since 2012
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-10">
            myCHEF Indonesia has been booking professional private chefs into Bali villas, family
            homes, and event venues for over 13 years. We started small in 2012 with a handful of
            chefs in Seminyak; today we serve 24 neighborhoods across Bali plus Jakarta, with a
            roster of background-checked chefs covering Mediterranean, modern European, Asian
            fusion, Balinese, vegan, and dietary-restricted menus.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <Card className="hover-elevate"><CardContent className="p-6">
              <Clock className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">Operating since 2012</h2>
              <p className="text-foreground/70">
                13+ years of private dining in Bali villas. We have been booking chefs since the year
                most Bali villa-rental companies were founded.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <ShieldCheck className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">Every chef is background-checked</h2>
              <p className="text-foreground/70">
                Identity verified, criminal background checked, and food-safety certified before
                joining the roster. Every booking is covered by commercial liability insurance.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <MapPin className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">24 Bali neighborhoods covered</h2>
              <p className="text-foreground/70">
                Canggu, Seminyak, Uluwatu, Ubud, Nusa Dua, Sanur, Jimbaran, Kuta, Pererenan, Berawa,
                Petitenget, Kerobokan, Legian, Pecatu, Bukit, Ungasan, Tabanan, Tanah Lot,
                Tegallalang, Gianyar, Denpasar, Lovina, Amed, Candidasa, Padang Bai.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <Award className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">Real chefs, real food</h2>
              <p className="text-foreground/70">
                Our chefs are professional cooks with restaurant experience — many trained in Europe
                or at international hotel groups before joining myCHEF. They cook on the spot in
                your kitchen, not pre-made catering food.
              </p>
            </CardContent></Card>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">How myCHEF works</h2>
          <ol className="space-y-4 mb-10 text-foreground/80 list-decimal pl-6">
            <li><strong>WhatsApp us</strong> with the date, area, guest count, and any cuisine or dietary
              preferences. Most bookings are confirmed within an hour during operating hours.</li>
            <li><strong>We match a chef</strong> to your event. You receive a chef profile and a sample
              menu before the booking is confirmed. You can request a different chef if the match
              isn't right.</li>
            <li><strong>The chef arrives</strong> at your villa 2-3 hours before service, shops for
              ingredients en route, cooks in your kitchen, plates and serves the food, and cleans
              the kitchen before leaving.</li>
            <li><strong>You enjoy a private restaurant</strong> in your own home — without the
              transport, the reservation hunt, or the post-meal cleanup.</li>
          </ol>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">Why guests choose myCHEF</h2>
          <ul className="space-y-3 mb-10 text-foreground/80 list-disc pl-6">
            <li>13+ year operating history in Bali — not a hospitality startup</li>
            <li>Every chef is background-checked and food-safety certified</li>
            <li>Commercial liability insurance on every booking</li>
            <li>Transparent pricing from Rp 800,000/hour, 3-hour minimum</li>
            <li>Equipment, plating, and cleanup included — you provide the kitchen and table only</li>
            <li>Add-on staff (waiter, bartender, sommelier) available</li>
            <li>10-minute average WhatsApp response during operating hours</li>
          </ul>

          <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-semibold mb-2">myCHEF Indonesia — Office</h2>
            <p className="text-foreground/80">
              Jl. Tukad Barito Timur III No.16<br />
              Panjer, Denpasar Selatan<br />
              Kota Denpasar, Bali 80226<br />
              Indonesia
            </p>
            <p className="text-foreground/80 mt-3">
              Email: <a href="mailto:indonesia@mychef.id" className="text-primary underline">indonesia@mychef.id</a><br />
              WhatsApp: <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="text-primary underline">+62 822-3756-5997</a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button size="lg" onClick={() => openWhatsApp('hero')}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp myCHEF
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
