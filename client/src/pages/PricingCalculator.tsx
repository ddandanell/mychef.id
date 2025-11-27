import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Sparkles, Copy, Check, ChefHat, Calendar, Users, Check as CheckIcon, ArrowLeft, Award, ShieldCheck, Lightbulb, Flame, Leaf, Wine, Utensils, Clock, TrendingUp, Home, Utensils as UtensilsIcon, Shield, DollarSign, MapPin } from 'lucide-react';
import { useState as useStateHook } from 'react';
import SupportTeam from '@/components/SupportTeam';
import GuestTestimonials from '@/components/GuestTestimonials';
import LiveOrders from '@/components/LiveOrders';
import kitchenChefImage from '@assets/generated_images/chef_cooking_in_luxury_kitchen.png';

const CHEF_TYPES = [
  { id: 'sushi', name: 'Sushi Chef', icon: '🍣', description: 'Japanese precision & artistry', hint: 'Fresh seafood, authentic techniques' },
  { id: 'french', name: 'French Chef', icon: '🇫🇷', description: 'Fine dining classics', hint: 'Refined sauces & elegant plating' },
  { id: 'italian', name: 'Italian Chef', icon: '🍝', description: 'Authentic & passionate', hint: 'Fresh pasta, heritage recipes' },
  { id: 'indonesian', name: 'Indonesian Chef', icon: '🌶️', description: 'Local Bali expertise', hint: 'Spices, tradition & island flavors' },
  { id: 'thai', name: 'Thai Chef', icon: '🌴', description: 'Balance of flavors', hint: 'Sweet, sour, salty, spicy harmony' },
  { id: 'spanish', name: 'Spanish Chef', icon: '🥘', description: 'Mediterranean passion', hint: 'Tapas, paella & seafood' },
  { id: 'mediterranean', name: 'Mediterranean Chef', icon: '🫒', description: 'Healthy & vibrant', hint: 'Olive oil, fresh herbs & vegetables' },
  { id: 'fusion', name: 'Fusion Chef', icon: '⚡', description: 'Creative innovation', hint: 'Best of multiple cuisines' },
  { id: 'indian', name: 'Indian Chef', icon: '🍛', description: 'Spiced perfection', hint: 'Rich curries, tandoori & breads' },
];

const CURRENCIES = [
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', rate: 1 },
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 0.000063 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.000060 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 0.000098 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 0.000084 },
];

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [guests, setGuests] = useState(0);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [chefType, setChefType] = useState('');
  const [includeHelper, setIncludeHelper] = useState(false);
  const [copied, setCopied] = useStateHook(false);
  const [currency, setCurrency] = useState('IDR');

  const fromDate = dateFrom ? new Date(dateFrom) : null;
  const toDate = dateTo ? new Date(dateTo) : null;
  const days = fromDate && toDate ? Math.max(1, Math.floor((toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24)) + 1) : 0;

  const DAILY_RATE = 4000000;
  const WEEKLY_RATE = 8000000;
  const MONTHLY_RATE = 29000000;

  let chefPrice = 0;
  let tier = '';
  
  if (days >= 30) {
    chefPrice = MONTHLY_RATE;
    tier = `Monthly (${days} days)`;
  } else if (days >= 7) {
    chefPrice = WEEKLY_RATE * Math.ceil(days / 7);
    tier = `Weekly (${days} days)`;
  } else {
    chefPrice = DAILY_RATE * days;
    tier = `Daily (${days} day${days !== 1 ? 's' : ''})`;
  }

  const helperPrice = includeHelper ? chefPrice / 2 : 0;
  const totalPrice = chefPrice + helperPrice;

  const chefName = CHEF_TYPES.find(c => c.id === chefType)?.name || 'Chef';

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
  };

  const getSummaryText = () => {
    const summary = `╔════════════════════════════════════════╗
║        MYCHEF INDONESIA BOOKING        ║
║           PRICE QUOTATION              ║
║                                        ║
║    ✨ HERE IS YOUR OFFER ✨             ║
║  Valid after 50% deposit is paid       ║
╚════════════════════════════════════════╝

📋 BOOKING DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Chef Type:          ${chefName}
Number of Guests:   ${guests} guests
Check-in Date:      ${dateFrom}
Check-out Date:     ${dateTo}
Duration:           ${days} day${days !== 1 ? 's' : ''}

💼 SERVICES INCLUDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Professional Cooking
✓ All Food Shopping at Local Markets
✓ Complete Kitchen Preparation
✓ Beautiful Presentation
✓ Full Cleanup (Kitchen Spotless)
✓ All Equipment & Tools
${includeHelper ? '✓ Professional Helper Service\n' : ''}

💰 PRICING BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Chef Service:       ${formatPrice(chefPrice)}
${includeHelper ? `Helper Service:     ${formatPrice(helperPrice)}\n` : ''}
TOTAL PRICE:        ${formatPrice(totalPrice)}

Rate Type:          ${tier}

💳 PAYMENT TERMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
50% Deposit:        ${formatPrice(totalPrice / 2)}
  (When you confirm booking)

50% Balance:        ${formatPrice(totalPrice / 2)}
  (On the day chef arrives)

🛒 FOOD COST & SHOPPING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Our preferred model:
• Chef talks with you about menu
• Chef arrives 2 hours early
• You provide cash or budget
• Chef shops at local Bali markets
• Returns with fresh ingredients
• YOU PAY NOTHING EXTRA for shopping
• Complete transparency with receipts

Alternative if you prefer:
• You can provide ingredients
• Or chef can shop ahead (by arrangement)

📌 IMPORTANT INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 48-hour cancellation notice for refunds
• Background checked & verified chef
• All equipment included
• Professional cleanup included
• 13+ years serving Bali families`;
    return summary;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatPrice = (value: number) => {
    const convertedValue = value * (CURRENCIES.find(c => c.code === currency)?.rate || 1);
    
    if (currency === 'IDR') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(value);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
      }).format(convertedValue);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Background with Chef Image */}
      <div
        className="absolute inset-0 h-96 md:h-[500px] bg-cover bg-center opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url(${kitchenChefImage})`,
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative py-6 md:py-8 px-3 md:px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Floating WhatsApp Help Button */}
          <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover-elevate z-40 flex items-center gap-2 group"
            data-testid="button-floating-whatsapp"
            title="Need help? Message us!"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-semibold">Help</span>
          </button>

          {/* Back Button */}
          <button
            onClick={() => setLocation('/')}
            className="mb-6 md:mb-8 flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors text-sm md:text-base"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary whitespace-nowrap">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span>South Bali Premium Area</span>
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Price Calculator</h1>
            <p className="text-sm md:text-base text-foreground/60 flex items-center justify-center gap-1 md:gap-2 flex-wrap">
              <Clock className="w-4 h-4" />
              <span>Short & Long-term Pricing</span>
              <TrendingUp className="w-4 h-4" />
            </p>
          </div>

          {/* Trust Banner with Background */}
          <Card className="mb-8 border-primary/30 bg-gradient-to-r from-primary/15 to-primary/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">13+ Years Experience</p>
                    <p className="text-xs text-foreground/70">Trusted by 1000+ families in Bali</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Background Checked Chefs</p>
                    <p className="text-xs text-foreground/70">Professional & verified</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">100% Transparent Pricing</p>
                    <p className="text-xs text-foreground/70">No hidden fees, ever</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Calculator - Two Column Layout */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* LEFT COLUMN - All Inputs */}
              <div className="lg:col-span-2 space-y-4">
                {/* Chef Type */}
                <Card className="border border-primary/20 shadow-sm">
                  <CardContent className="p-4 md:p-5 space-y-3">
                    <label className="block text-sm font-semibold">Choose Chef Type</label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {CHEF_TYPES.map((chef) => (
                        <button
                          key={chef.id}
                          onClick={() => setChefType(chef.id)}
                          className={`p-2 md:p-3 rounded-lg border transition-all duration-200 hover-elevate ${
                            chefType === chef.id
                              ? 'border-primary bg-primary/15 font-semibold shadow-sm'
                              : 'border-primary/20 hover:border-primary/50 bg-background'
                          }`}
                          data-testid={`button-chef-${chef.id}`}
                          title={chef.hint}
                        >
                          <div className="text-xl md:text-2xl mb-1">{chef.icon}</div>
                          <p className="text-xs font-semibold line-clamp-1">{chef.name}</p>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Guests & Dates */}
                <Card className="border border-primary/20 shadow-sm">
                  <CardContent className="p-4 md:p-5 space-y-3">
                    <div>
                      <label className="block text-xs md:text-sm font-semibold mb-2">Guests</label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={guests}
                        onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full px-3 py-2 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors font-semibold text-sm"
                        data-testid="input-guests"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs md:text-sm font-semibold mb-2">From</label>
                        <input
                          type="date"
                          value={dateFrom}
                          onChange={(e) => setDateFrom(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-xs md:text-sm"
                          data-testid="input-date-from"
                        />
                      </div>
                      <div>
                        <label className="block text-xs md:text-sm font-semibold mb-2">To</label>
                        <input
                          type="date"
                          value={dateTo}
                          onChange={(e) => setDateTo(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-xs md:text-sm"
                          data-testid="input-date-to"
                        />
                      </div>
                    </div>
                    {days > 0 && (
                      <div className="bg-primary/5 p-2 rounded-lg text-center">
                        <p className="text-xs md:text-sm font-semibold text-primary">{days} day{days !== 1 ? 's' : ''}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Pricing Tiers */}
                <Card className="border border-primary/20 shadow-sm">
                  <CardContent className="p-4 md:p-5 space-y-2">
                    <label className="block text-sm font-semibold mb-3">Pricing Tiers</label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                        <p className="text-xs font-semibold text-primary mb-1">Daily</p>
                        <p className="text-sm md:text-base font-bold text-primary">{formatPrice(DAILY_RATE)}</p>
                        <p className="text-xs text-foreground/60">per day</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-center ring-2 ring-primary/30">
                        <p className="text-xs font-semibold text-primary mb-1">Weekly</p>
                        <p className="text-sm md:text-base font-bold text-primary">{formatPrice(WEEKLY_RATE)}</p>
                        <p className="text-xs text-foreground/60">7+ days</p>
                      </div>
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                        <p className="text-xs font-semibold text-primary mb-1">Monthly</p>
                        <p className="text-sm md:text-base font-bold text-primary">{formatPrice(MONTHLY_RATE)}</p>
                        <p className="text-xs text-foreground/60">30+ days</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Helper Option */}
                {guests >= 10 && (
                  <Card className="border border-primary/20 shadow-sm">
                    <CardContent className="p-4 md:p-5">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <Checkbox
                          checked={includeHelper}
                          onCheckedChange={(checked) => setIncludeHelper(checked as boolean)}
                          className="mt-1"
                          data-testid="checkbox-helper"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold">Add Professional Helper</p>
                          <p className="text-xs text-foreground/60 mt-1">Half chef rate • For groups 10+</p>
                        </div>
                      </label>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* RIGHT COLUMN - Quote Display & Actions */}
              <div className="space-y-4">
                {/* Live Orders */}
                <LiveOrders />

                <Card className="border border-primary/20 shadow-sm h-fit sticky top-4">
                  <CardContent className="p-4 md:p-5 space-y-4">
                    <h3 className="text-sm md:text-base font-bold">Your Quote</h3>

                    {/* Currency Selector */}
                    <div className="grid grid-cols-3 gap-2">
                      {CURRENCIES.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => setCurrency(curr.code)}
                          className={`px-2 py-2 rounded text-xs font-semibold transition-all ${
                            currency === curr.code
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-primary/10 text-primary hover:bg-primary/20'
                          }`}
                          data-testid={`button-currency-${curr.code}`}
                        >
                          {curr.code}
                        </button>
                      ))}
                    </div>

                    {/* Price Display */}
                    <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-lg p-4 text-center border border-primary/20">
                      <p className="text-xs text-foreground/60 mb-1">Total Price</p>
                      <p className="text-3xl md:text-4xl font-bold text-primary" data-testid="text-total-estimate">
                        {days > 0 ? formatPrice(totalPrice) : '—'}
                      </p>
                      {days > 0 && (
                        <>
                          <p className="text-xs text-foreground/60 mt-2">{tier}</p>
                          {includeHelper && (
                            <p className="text-xs text-foreground/60 mt-1">+ Helper: {formatPrice(helperPrice)}</p>
                          )}
                        </>
                      )}
                    </div>

                    {/* Trust Badges */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <span className="text-primary font-bold">✓</span>
                        <span>100% Transparent Pricing</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <span className="text-primary font-bold">✓</span>
                        <span>Background Checked Chef</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <span className="text-primary font-bold">✓</span>
                        <span>No Hidden Fees</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 pt-2 border-t border-primary/10">
                      <button
                        onClick={handleCopy}
                        className={`w-full py-2 px-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                          copied
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                        }`}
                        data-testid="button-copy-summary"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Quote
                          </>
                        )}
                      </button>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-elevate active-elevate-2 text-sm"
                        data-testid="button-whatsapp-calculator"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Guest Testimonials */}
          <div className="mb-12 md:mb-16">
            <GuestTestimonials />
          </div>

          {/* Support Team */}
          <div className="mb-12 md:mb-16">
            <SupportTeam />
          </div>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">How the Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Fill Details</p>
                  <p className="text-xs text-foreground/70">Select chef type, guests, and dates</p>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Get Price</p>
                  <p className="text-xs text-foreground/70">Instant calculation</p>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Copy Quote</p>
                  <p className="text-xs text-foreground/70">Professional format</p>
                </div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Book Now</p>
                  <p className="text-xs text-foreground/70">Confirm on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Food Shopping Model */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <UtensilsIcon className="w-6 h-6 text-primary" />
              How Food Shopping Works
            </h2>
            <Card className="border border-primary/20">
              <CardContent className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/10">
                  <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Our Preferred Model (No Extra Cost!)
                  </p>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span>Chef talks with you about your preferred menu and dietary preferences</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span>Chef arrives 2 hours early to your home or villa</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span>Chef discusses budget and menu finalization with you</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <span>You provide cash or credit for ingredients</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">5.</span>
                      <span>Chef shops at the best local Bali markets for the freshest ingredients</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">6.</span>
                      <span>Chef returns with all receipts and prepares your meal</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span className="font-semibold text-primary">YOU PAY NOTHING EXTRA - No markup on ingredients!</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <p className="font-semibold mb-3">Why This Model is Better:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex gap-3">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Freshest Ingredients</p>
                        <p className="text-xs text-foreground/70">Chef selects fresh items from local markets</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Complete Transparency</p>
                        <p className="text-xs text-foreground/70">You see all receipts, no hidden markups</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Best Prices</p>
                        <p className="text-xs text-foreground/70">Chef knows local suppliers and market prices</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">No Extra Charges</p>
                        <p className="text-xs text-foreground/70">You pay exactly what was spent, nothing more</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 p-4 rounded-lg">
                  <p className="font-semibold text-sm mb-2">Alternative Options Available:</p>
                  <p className="text-xs text-foreground/70">If you prefer, we can also handle pre-shopping or use ingredients you provide. Just let us know!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Payment Terms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border border-primary/20">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Payment Structure
                  </h4>
                  <ul className="text-sm text-foreground/70 space-y-2">
                    <li>• 50% deposit to confirm booking</li>
                    <li>• 50% balance on day chef arrives</li>
                    <li>• Food costs paid separately</li>
                    <li>• No payment until confirmed</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border border-primary/20">
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Cancellation Policy
                  </h4>
                  <ul className="text-sm text-foreground/70 space-y-2">
                    <li>• 48+ hours notice = full refund</li>
                    <li>• Chef gets sick = free replacement</li>
                    <li>• Emergencies accepted</li>
                    <li>• Flexible rescheduling available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
