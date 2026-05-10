import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, ShieldCheck, Users, Clock, Award, FileText } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsappCTA';

export default function VillaPartnersHubPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Villa Manager Chef Partnership in Bali — myCHEF Indonesia"
        description="myCHEF supplies background-checked private chefs to Bali villas, villa-rental agencies, and concierge teams. On-call coverage, liability insurance, 13+ year track record."
        canonical="https://mychef.id/villa-partners"
        keywords="villa chef partner bali, private chef for villa rental, villa concierge chef bali, on-call chef bali villa management, villa hospitality partner bali"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://mychef.id/villa-partners#service',
            serviceType: 'Private chef partnership for Bali villas',
            description: 'Recurring private chef supply for villa-rental agencies, concierge teams, villa managers, and standalone luxury villas in Bali.',
            provider: { '@id': 'https://mychef.id/#organization' },
            areaServed: { '@type': 'AdministrativeArea', name: 'Bali, Indonesia' },
            audience: {
              '@type': 'BusinessAudience',
              audienceType: 'Villa managers, villa-rental agencies, concierge services, hospitality operators',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
              { '@type': 'ListItem', position: 2, name: 'Villa Partners', item: 'https://mychef.id/villa-partners' },
            ],
          },
        ]}
      />
      <Header />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Villa Manager Chef Partnership in Bali
          </h1>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed mb-10 max-w-3xl">
            myCHEF supplies background-checked private chefs to villa-rental agencies, concierge teams,
            and villa managers across Bali on a recurring partnership basis. Your guests get a private
            chef in their villa within hours; you get a 13-year operator covering liability, food
            safety, and consistent service quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-elevate"><CardContent className="p-6">
              <Clock className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">On-call coverage, 09:00–22:00 WIB</h2>
              <p className="text-foreground/70">
                Average WhatsApp response under 10 minutes during operating hours. Most bookings
                confirmed within an hour, including same-day bookings in Canggu, Seminyak, Ubud.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <ShieldCheck className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">Background-checked + insured</h2>
              <p className="text-foreground/70">
                Every chef is identity-verified, criminal-checked, and food-safety certified.
                Commercial liability insurance covers every booking — your villa is not the policy
                holder.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <Users className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">Single point of contact</h2>
              <p className="text-foreground/70">
                One account manager handles all bookings for your villa portfolio. No juggling
                multiple chefs or freelancers; one WhatsApp thread, one invoice schedule.
              </p>
            </CardContent></Card>

            <Card className="hover-elevate"><CardContent className="p-6">
              <Award className="w-7 h-7 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-2">Consistent guest experience</h2>
              <p className="text-foreground/70">
                Standardised menu briefing, plating, and clean-up protocol across every chef. Your
                guests get the same service quality whether they book one night or stay a month.
              </p>
            </CardContent></Card>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">Partnership models</h2>
          <ul className="space-y-3 mb-10 text-foreground/80 list-disc pl-6">
            <li><strong>Per-booking referral</strong> — Your guest books directly via your concierge.
              Standard chef rate, you take a referral commission. Best for villa agencies with
              occasional chef requests.</li>
            <li><strong>White-label chef supply</strong> — myCHEF chefs operate under your villa brand.
              Your guest never sees myCHEF. Best for premium villa brands with strong identity.</li>
            <li><strong>Resident chef placement</strong> — Long-stay or owner-occupied villas where a
              chef works on-site weekly or full-time. Best for repeat luxury renters and full-time
              residents.</li>
          </ul>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">How to start</h2>
          <ol className="space-y-3 mb-10 text-foreground/80 list-decimal pl-6">
            <li>WhatsApp +62 822-3756-5997 mentioning "villa partnership" + your portfolio size.</li>
            <li>30-minute call: we walk through pricing, commission structure, and the chef briefing
              protocol.</li>
            <li>Trial booking: one chef, one villa, one weekend. Get feedback from your guest before
              committing.</li>
            <li>Roll out across your portfolio with the partnership terms that fit your model.</li>
          </ol>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button size="lg" onClick={() => openWhatsApp('villaPartners')}
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold">
              <MessageCircle className="w-5 h-5 mr-2" />WhatsApp the partnership team
            </Button>
            <Button size="lg" variant="outline" asChild
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold">
              <a href="mailto:indonesia@mychef.id?subject=Villa%20Partnership%20Enquiry"><FileText className="w-5 h-5 mr-2" />Email indonesia@mychef.id</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
