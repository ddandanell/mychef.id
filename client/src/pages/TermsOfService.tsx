import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service | myCHEF Indonesia"
        description="Read the terms and conditions for booking private chef services in Bali with myCHEF Indonesia. Understand our policies, payment terms, and service agreements."
        canonical="https://mychef.id/terms-of-service"
        ogType="article"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-foreground/70 mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and myCHEF Indonesia ("myCHEF," "we," "our," or "us") regarding your use of our private chef booking services in Bali, Indonesia.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              By booking our services or using our website, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">2. Our Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              myCHEF Indonesia connects clients with professional private chefs for in-home dining experiences across Bali. Our services include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Matching clients with qualified chefs based on cuisine preferences, group size, and occasion</li>
              <li>Custom menu design and consultation</li>
              <li>Chef services at your villa, home, or designated location in Bali</li>
              <li>Optional ingredient sourcing and procurement assistance</li>
              <li>Additional service staff (waiters, bartenders, sommeliers) upon request</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">3. Booking Process</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Making a Booking</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To book our services, you must contact us via WhatsApp at +62 822-3756-5997 or email at indonesia@mychef.com. You will provide details including event date, location, number of guests, cuisine preferences, and any dietary requirements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Confirmation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A booking is confirmed only after we send you written confirmation (via WhatsApp or email) and you have paid the required deposit. Verbal agreements or preliminary discussions do not constitute a confirmed booking.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Minimum Notice</h3>
            <p className="text-foreground/80 leading-relaxed">
              While we accommodate last-minute requests when possible, we recommend booking at least 1-2 weeks in advance, especially during peak season (June-September and December-January).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Pricing Structure</h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Our pricing consists of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li><strong>Chef Service Fee:</strong> Charged per hour (typically Rp 800,000 - 1,200,000/hour depending on chef expertise and cuisine specialty)</li>
              <li><strong>Ingredient Costs:</strong> Either market price plus 15-20% sourcing fee if we purchase, or your direct costs if you purchase</li>
              <li><strong>Additional Services:</strong> Optional waitstaff (Rp 150,000/hour), bartenders (Rp 200,000/hour), sommeliers (Rp 250,000/hour)</li>
              <li><strong>Travel Fees:</strong> May apply for locations outside main service areas</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>A deposit of 30-50% is required to secure your booking</li>
              <li>Full payment is due 48 hours before the service date, unless otherwise agreed</li>
              <li>We accept bank transfers, credit cards, and cash (Indonesian Rupiah)</li>
              <li>All prices are quoted in Indonesian Rupiah (IDR)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Price Changes</h3>
            <p className="text-foreground/80 leading-relaxed">
              Prices quoted are valid for 7 days. Significant changes to your booking (guest count, menu complexity, additional services) may result in price adjustments, which will be communicated and agreed upon before confirmation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">5. Cancellations and Refunds</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Client Cancellations</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li><strong>7+ days before service:</strong> Full refund of deposit minus 10% administrative fee</li>
              <li><strong>3-6 days before service:</strong> 50% refund of total amount paid</li>
              <li><strong>Less than 3 days before service:</strong> No refund; full payment required</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 myCHEF Cancellations</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              In the unlikely event we must cancel your booking (due to chef illness, emergency, or force majeure), we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Attempt to provide a suitable replacement chef</li>
              <li>If replacement is not acceptable, provide a full refund</li>
              <li>We are not liable for any consequential damages or expenses</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Rescheduling</h3>
            <p className="text-foreground/80 leading-relaxed">
              Requests to reschedule must be made at least 5 days before the original service date. One free reschedule is permitted; subsequent changes may incur a Rp 500,000 rescheduling fee.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">6. Client Responsibilities</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Provide accurate information about your event, location, guest count, and dietary requirements</li>
              <li>Ensure your kitchen has basic equipment and is accessible to the chef</li>
              <li>Provide a safe working environment for our staff</li>
              <li>Inform us immediately of any changes to guest count (at least 48 hours notice)</li>
              <li>Be present or have a representative available during service</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Treat our chefs and staff with respect and professionalism</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">7. Kitchen and Equipment Requirements</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Most Bali villa kitchens are adequately equipped for our services. Your chef will bring specialized tools as needed. However, you must ensure your kitchen has:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Working stove/cooktop and oven (if required for your menu)</li>
              <li>Refrigeration</li>
              <li>Running water and sink</li>
              <li>Basic cookware and utensils</li>
              <li>Adequate counter space</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              If your kitchen lacks essential equipment, please inform us during booking so we can arrange alternatives or rentals.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">8. Food Safety and Dietary Requirements</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our chefs follow strict food safety and hygiene practices. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>You must inform us of all allergies and dietary restrictions at booking</li>
              <li>While we take all reasonable precautions, we cannot guarantee zero cross-contamination</li>
              <li>Guests with severe allergies should exercise appropriate caution</li>
              <li>We are not liable for allergic reactions if full information was not provided</li>
              <li>Fresh ingredients are sourced as close to service date as possible to ensure quality</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">9. Liability and Insurance</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">9.1 Our Liability</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our liability is limited to the total amount paid for your booking. We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Personal injury unless caused by our negligence</li>
              <li>Damage to your property unless caused by our negligence</li>
              <li>Food-borne illness from ingredients you sourced</li>
              <li>Consequential or indirect damages</li>
              <li>Events beyond our reasonable control (force majeure)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">9.2 Your Liability</h3>
            <p className="text-foreground/80 leading-relaxed">
              You are responsible for any damage to our chefs' equipment or injuries to our staff caused by your negligence or the condition of your premises.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">10. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All content on our website, including recipes, menus, photos, and chef profiles, is owned by myCHEF Indonesia or our chefs and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">11. Reviews and Testimonials</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may request your feedback after service. By providing reviews or testimonials:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>You grant us permission to use your feedback in marketing materials</li>
              <li>You confirm your review is honest and based on your genuine experience</li>
              <li>We may edit reviews for length or clarity while maintaining the original meaning</li>
              <li>We reserve the right to remove reviews that are offensive, false, or violate these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">12. Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">13. Governing Law and Dispute Resolution</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              These Terms are governed by the laws of Indonesia. Any disputes shall be resolved through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Good faith negotiation between the parties</li>
              <li>If negotiation fails, mediation in Bali, Indonesia</li>
              <li>If mediation fails, the courts of Bali, Indonesia shall have exclusive jurisdiction</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may modify these Terms at any time. Updated Terms will be posted on our website with a new "Last updated" date. Continued use of our services after changes constitutes acceptance of the modified Terms. Bookings made before changes will be governed by the Terms in effect at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">15. Severability</h2>
            <p className="text-foreground/80 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">16. Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For questions about these Terms or our services, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-foreground/80 mb-2"><strong>myCHEF Indonesia</strong></p>
              <p className="text-foreground/80 mb-2">Jl. Sunset Road No. 88</p>
              <p className="text-foreground/80 mb-2">Seminyak, Bali 80361</p>
              <p className="text-foreground/80 mb-2">Indonesia</p>
              <p className="text-foreground/80 mb-2">Email: indonesia@mychef.com</p>
              <p className="text-foreground/80">WhatsApp: +62 822-3756-5997</p>
            </div>
          </section>

          <section className="bg-accent/10 p-6 rounded-lg border border-accent/20">
            <h2 className="font-serif text-2xl font-semibold mb-4">Acknowledgment</h2>
            <p className="text-foreground/80 leading-relaxed">
              By using myCHEF Indonesia's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/">
            <Button variant="outline" className="hover-elevate" data-testid="button-back-home-bottom">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
