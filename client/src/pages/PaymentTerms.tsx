import { Link } from 'wouter';
import { ArrowLeft, Calendar, CreditCard, Edit3, XCircle, RefreshCw, DollarSign, FileText, Scale, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import { WHATSAPP_NUMBER } from '@/lib/whatsappCTA';

export default function PaymentTerms() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Payment & Booking Terms | myCHEF Indonesia"
        description="Understand our payment schedules, booking policies, cancellation terms, and refund policies for private chef services in Bali."
        canonical="https://mychef.id/payment-terms"
        ogType="article"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Payment & Booking Terms</h1>
        <p className="text-foreground/70 mb-2">Effective: January 2025</p>
        <p className="text-foreground/70 mb-8">
          <strong>Company:</strong> MyChef<br />
          <strong>NPWP:</strong> 1000000005064323<br />
          Registered and operating in Indonesia
        </p>

        <div className="space-y-8">
          {/* Bookings and Deposits */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">1. Bookings and Deposits</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    When you receive an offer from MyChef, the following rules apply:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>You have <strong>7 calendar days</strong> to pay the deposit in order to confirm and secure your booking.</li>
                    <li>If your booking is scheduled for the same week, payment must be made <strong>immediately</strong>, and proof of payment must be sent to us before we lock the chef to your booking.</li>
                    <li>If payment is not received within the stated time, MyChef reserves the right to cancel or reassign the chef without further notice.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Schedule */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">2. Payment Schedule</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-3">
                    <li><strong>Deposit:</strong> 50% of the total amount is required to confirm and hold the booking.</li>
                    <li><strong>Final Payment:</strong> The remaining 50% must be paid no later than 3 days (72 hours) before the start of the booking.</li>
                    <li>Payment is considered valid only once MyChef confirms receipt.</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed">
                    If the balance is not received by the deadline, MyChef may cancel the booking and apply the cancellation policy below.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">3. Payment Methods</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Payments can be made through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-3">
                    <li>Online payment link (sent directly by MyChef)</li>
                    <li>Bank transfer</li>
                    <li>Credit/Debit cards (Visa, MasterCard, and all major cards)</li>
                  </ul>
                  <p className="text-foreground/80 leading-relaxed bg-muted p-4 rounded-lg">
                    <strong>Important:</strong> Proof of payment (transfer slip or screenshot) must be sent directly to our WhatsApp or email contact listed below.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Bookings */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Edit3 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">4. Changes to Bookings</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    All change requests must be made directly to MyChef, and no later than <strong>3 days (72 hours)</strong> before the shift or booking starts.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-2 mt-4">Changing the date, time, or location:</h3>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    Must be requested at least 3 days in advance. Later changes cannot be guaranteed and may be treated as a cancellation.
                  </p>

                  <h3 className="text-lg font-semibold mb-2 mt-4">Changing the menu:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-3">
                    <li>If MyChef is creating the menu for you (without a pre-meeting), changes must be requested at least <strong>24 hours</strong> in advance.</li>
                    <li>If you already agreed on a specific menu with the chef, any changes must be requested at least <strong>3 days (72 hours)</strong> before the booking.</li>
                  </ul>

                  <p className="text-foreground/80 leading-relaxed bg-muted p-4 rounded-lg">
                    All changes are subject to chef availability and must be confirmed in writing by MyChef.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellations and Refunds (Client) */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">5. Cancellations and Refunds (Client)</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    The following refund policy applies to all confirmed bookings:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                      <p className="font-semibold text-green-700 dark:text-green-400 mb-1">14 days or more before the event</p>
                      <p className="text-foreground/80">100% refund of all payments made</p>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                      <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1">7–13 days before the event</p>
                      <p className="text-foreground/80">50% refund of the total amount</p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                      <p className="font-semibold text-red-700 dark:text-red-400 mb-1">Less than 7 days or same-day cancellation</p>
                      <p className="text-foreground/80">No refund</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 mt-4">Additional Deductions:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li><strong>Pre-purchased groceries or special items:</strong> If ingredients or supplies have already been purchased for your booking, those costs (with receipts) may be deducted from any refund.</li>
                    <li><strong>Payment processing or bank fees:</strong> Non-refundable if already incurred.</li>
                  </ul>

                  <p className="text-foreground/80 leading-relaxed mt-4 bg-muted p-4 rounded-lg">
                    If the final payment is not received by the deadline, the booking may be treated as a client cancellation and the above policy will apply.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancellations and Refunds (MyChef) */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">6. Cancellations and Refunds (MyChef or Chef)</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    If MyChef or the assigned chef cancels or fails to deliver the service as agreed, you will receive a <strong>full refund</strong> of all payments made.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    If the service begins but cannot be completed for reasons caused by MyChef or the chef, a fair refund will be issued based on time worked and service delivered.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">7. Pricing</h2>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                    <li>All prices are stated in your offer and include everything listed in the service description (chef service hours, preparation, cooking, and cleaning).</li>
                    <li>Groceries, rentals, or special requests are only included if clearly stated in writing.</li>
                    <li>All prices are final and include applicable Indonesian taxes.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Invoices */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">8. Invoices and Proof of Payment</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    MyChef issues all official invoices and receipts for your payments.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    If ingredients or groceries are purchased separately, MyChef or the chef will provide receipts for those items.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Terms */}
          <Card>
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold mb-3">9. Legal Terms</h2>
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    These terms are governed by Indonesian law. A Bahasa Indonesia version is also available upon request, and both versions are equal in meaning.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Company Details:</strong><br />
                      MyChef<br />
                      NPWP: 1000000005064323<br />
                      Registered and operating in Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-2 border-primary">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-semibold mb-3">10. Contact</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    All confirmations, payments, or booking changes must be sent directly to:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`} className="text-primary hover:underline">
                          {WHATSAPP_NUMBER}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:indonesia@mychef.id" className="text-primary hover:underline">
                          indonesia@mychef.id
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-foreground/80">09:00 – 22:00 WIB (Monday – Sunday)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-8">
            <Link href="/">
              <Button size="lg" className="hover-elevate active-elevate-2" data-testid="button-return-home">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
