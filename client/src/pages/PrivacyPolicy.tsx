import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Header from '@/components/Header';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | myCHEF Indonesia"
        description="Learn how myCHEF Indonesia protects your privacy and handles your personal information when booking private chef services in Bali."
        canonical="https://mychef.id/privacy-policy"
        ogType="article"
      />
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-foreground/70 mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              myCHEF Indonesia ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our private chef booking services in Bali, Indonesia.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We collect information that you provide directly to us when booking our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
              <li>Name and contact information (email, phone number, WhatsApp number)</li>
              <li>Villa or accommodation address in Bali</li>
              <li>Event details (date, time, number of guests, occasion)</li>
              <li>Dietary preferences and restrictions</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Communication history with our team and chefs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p className="text-foreground/80 leading-relaxed mb-3">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, links clicked)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Process and fulfill your private chef bookings</li>
              <li>Match you with appropriate chefs based on your preferences</li>
              <li>Communicate with you about your booking, menu selections, and service details</li>
              <li>Process payments and prevent fraud</li>
              <li>Send booking confirmations, reminders, and follow-up communications</li>
              <li>Improve our services and customer experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations under Indonesian law</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li><strong>Our Chefs:</strong> We share necessary booking details with the chef assigned to your event</li>
              <li><strong>Service Providers:</strong> Payment processors, ingredient suppliers, and other vendors who assist in delivering our services</li>
              <li><strong>Legal Requirements:</strong> When required by Indonesian law or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              We do not sell your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Payment information is processed through secure, PCI-compliant payment gateways and is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal requirements)</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with relevant data protection authorities</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              To exercise these rights, please contact us at indonesia@mychef.id or via WhatsApp at +62 822-3756-5997.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you use our site, remember your preferences, and improve our services.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-foreground/80 leading-relaxed">
              Your information is primarily stored and processed in Indonesia. If we transfer information to other countries, we ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">9. Data Retention</h2>
            <p className="text-foreground/80 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by Indonesian law. Booking records are typically retained for accounting and legal purposes for up to 7 years after the service date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-foreground/80 mb-2"><strong>myCHEF Indonesia</strong></p>
              <p className="text-foreground/80 mb-2">Jl. Sunset Road No. 88</p>
              <p className="text-foreground/80 mb-2">Seminyak, Bali 80361</p>
              <p className="text-foreground/80 mb-2">Indonesia</p>
              <p className="text-foreground/80 mb-2">Email: indonesia@mychef.id</p>
              <p className="text-foreground/80">WhatsApp: +62 822-3756-5997</p>
            </div>
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
