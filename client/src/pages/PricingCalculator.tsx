import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Sparkles, Copy, Check, ChefHat, Calendar, Users, Check as CheckIcon, ArrowLeft, Award, ShieldCheck, Lightbulb, Flame, Leaf, Wine, Utensils, Clock, TrendingUp, Home, Utensils as UtensilsIcon, Shield, DollarSign, MapPin } from 'lucide-react';
import { useState as useStateHook } from 'react';

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
  const [showChatBubble, setShowChatBubble] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

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

🛒 FOOD COST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Separate & Transparent:
Your chef shops at the best local markets
in Bali. You reimburse based on receipts
for actual ingredients purchased.

📌 IMPORTANT INFO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 48-hour cancellation notice for refunds
• If chef gets sick = free replacement
• Chef arrives with all equipment
• Complete cleanup included
• No hidden fees
• Offer valid ONLY after 50% deposit paid

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ready to book? Contact us on WhatsApp!
We'll confirm availability and send payment details.
This offer is valid once you confirm with 50% deposit.`;
    return summary;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const formatPrice = (value: number) => {
    const currencyData = CURRENCIES.find(c => c.code === currency);
    const convertedValue = value * currencyData!.rate;
    
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
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-primary/3 py-6 md:py-8 px-3 md:px-4 pb-24">
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

        {/* Header with Service Area Badge */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary whitespace-nowrap overflow-x-auto">
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
          <p className="text-xs md:text-sm text-foreground/50 mt-2">Instant quote for Bali</p>
        </div>

        {/* Trust Banner */}
        <Card className="mb-8 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5">
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

        {/* Introduction Section */}
        <div className="mb-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose myCHEF?</h2>
          <div className="space-y-3 text-foreground/80">
            <p>
              We provide the <strong>most professional private chef service in Bali</strong>. Every chef is carefully selected, background-checked, and trained in fine dining restaurants worldwide.
            </p>
            <p>
              <strong>Complete transparency</strong> is our promise. You pay for the chef's service above. Food costs are separate and you only pay for ingredients actually purchased at local markets - with receipts.
            </p>
            <p>
              Your chef arrives with <strong>all equipment</strong>, handles everything from shopping to cooking to complete cleanup, and leaves your kitchen spotless. You only need to relax and enjoy amazing food.
            </p>
          </div>
        </div>

        {/* How It Works Section - TOP */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">1️⃣</div>
              <p className="font-semibold mb-2">Fill Details</p>
              <p className="text-xs text-foreground/70">Chef type, guests, dates</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">2️⃣</div>
              <p className="font-semibold mb-2">See Price</p>
              <p className="text-xs text-foreground/70">Instant calculation</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">3️⃣</div>
              <p className="font-semibold mb-2">Copy Quote</p>
              <p className="text-xs text-foreground/70">Professional format</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">4️⃣</div>
              <p className="font-semibold mb-2">Send WhatsApp</p>
              <p className="text-xs text-foreground/70">We'll confirm & book</p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Input Section */}
          <Card className="border border-primary/20 shadow-sm">
            <CardContent className="p-4 md:p-6 space-y-4 md:space-y-5">
              <h3 className="font-semibold text-lg">Your Details</h3>

              {/* Change Chef */}
              <div>
                <label className="block text-sm font-semibold mb-2 md:mb-3 flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-primary" />
                  Chef Type
                </label>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
                  {CHEF_TYPES.map((chef) => (
                    <div key={chef.id} className="group relative">
                      <button
                        onClick={() => setChefType(chef.id)}
                        className={`w-full p-3 rounded-lg border transition-all duration-200 hover-elevate ${
                          chefType === chef.id
                            ? 'border-primary bg-primary/15 font-semibold shadow-sm'
                            : 'border-primary/20 hover:border-primary/50 bg-background'
                        }`}
                        data-testid={`button-chef-${chef.id}`}
                        title={chef.hint}
                      >
                        <div className="text-2xl mb-1">{chef.icon}</div>
                        <p className="text-xs font-semibold line-clamp-1">{chef.name}</p>
                      </button>
                      {/* Hover Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-medium">
                        {chef.hint}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Chef Description */}
                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs font-semibold text-primary mb-1">
                    {CHEF_TYPES.find(c => c.id === chefType)?.icon} {CHEF_TYPES.find(c => c.id === chefType)?.name}
                  </p>
                  <p className="text-xs text-foreground/70">
                    {CHEF_TYPES.find(c => c.id === chefType)?.description}
                  </p>
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-semibold mb-2 md:mb-3">👥 Guests</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-lg font-semibold"
                  data-testid="input-guests"
                />
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                <div>
                  <label className="block text-sm font-semibold mb-2">📅 From</label>
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-sm"
                    data-testid="input-date-from"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">📅 To</label>
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-sm"
                    data-testid="input-date-to"
                  />
                </div>
              </div>

              <div className="bg-primary/5 p-3 rounded-lg text-center">
                <p className="text-sm font-semibold text-primary">{days} day{days !== 1 ? 's' : ''}</p>
              </div>

              {/* Helper Option */}
              {guests >= 10 && (
                <div className="border-t border-primary/10 pt-5">
                  <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <Checkbox
                      checked={includeHelper}
                      onCheckedChange={(checked) => setIncludeHelper(checked as boolean)}
                      className="mt-1"
                      data-testid="checkbox-helper"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Add Professional Helper</p>
                      <p className="text-xs text-foreground/60 mt-1">Half the chef rate • Enhances service</p>
                    </div>
                  </label>
                </div>
              )}

              {guests < 10 && (
                <p className="text-xs text-foreground/50 p-3 bg-primary/5 rounded-lg">
                  Professional helper available for groups 10+
                </p>
              )}
            </CardContent>
          </Card>

          {/* Price & Quote Section */}
          <div className="space-y-4 md:space-y-4">
            <Card className="border border-primary/20 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <p className="text-xs font-semibold text-foreground/60 mb-6">YOUR QUOTE</p>

                {/* Currency Selector */}
                <div className="mb-4 flex gap-2 flex-wrap">
                  {CURRENCIES.map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => setCurrency(curr.code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        currency === curr.code
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                      data-testid={`button-currency-${curr.code}`}
                      title={curr.name}
                    >
                      {curr.code}
                    </button>
                  ))}
                </div>

                {/* Chef Price */}
                <div className="mb-6">
                  <p className="text-xs text-foreground/60 mb-2">Chef Service</p>
                  <p className="text-3xl font-bold text-primary" data-testid="text-chef-price">
                    {formatPrice(chefPrice)}
                  </p>
                  <p className="text-xs text-foreground/60 mt-2">{tier}</p>
                </div>

                {/* Helper Price */}
                {includeHelper && (
                  <div className="mb-6 pb-6 border-b border-primary/10">
                    <p className="text-xs text-foreground/60 mb-2">Helper Service</p>
                    <p className="text-lg font-semibold text-primary">{formatPrice(helperPrice)}</p>
                  </div>
                )}

                {/* Total */}
                <div className="bg-primary/15 rounded-lg p-4 mb-6">
                  <p className="text-xs text-foreground/70 mb-2">TOTAL PRICE</p>
                  <p className="text-4xl font-bold text-primary" data-testid="text-total-estimate">
                    {formatPrice(totalPrice)}
                  </p>
                </div>

                {/* Action Options */}
                <div className="bg-primary/5 p-3 rounded-lg mb-4 text-xs text-foreground/70">
                  <p className="font-semibold text-foreground mb-2">What would you like to do?</p>
                  <ul className="space-y-1">
                    <li>📋 <span className="font-semibold">Copy Quote</span> - Share with friends or colleagues</li>
                    <li>💬 <span className="font-semibold">Send WhatsApp</span> - Book directly or ask questions</li>
                  </ul>
                </div>

                {/* Copy & Send */}
                <button
                  onClick={handleCopy}
                  className={`w-full py-2 px-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 mb-3 ${
                    copied
                      ? 'bg-green-100 text-green-700 border border-green-300'
                      : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20'
                  }`}
                  data-testid="button-copy-summary"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Full Quote
                    </>
                  )}
                </button>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-elevate active-elevate-2"
                  data-testid="button-whatsapp-calculator"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* What's Included Card */}
            <Card className="border border-primary/20 shadow-sm">
              <CardContent className="p-3 md:p-4">
                <p className="text-xs font-semibold text-foreground/70 mb-3">WHAT'S INCLUDED</p>
                <div className="space-y-2 text-xs text-foreground/70">
                  <div className="flex items-start gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Professional cooking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>All food shopping</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete cleanup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckIcon className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span>All equipment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Tiers Reference with Icons */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg font-semibold mb-4 text-center">Pricing Tiers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-center hover-elevate transition-all">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm text-primary">Short-Term</p>
              <p className="text-xs text-foreground/60 mt-1">Daily Booking</p>
              <p className="text-2xl font-bold mt-3 text-primary">{formatPrice(DAILY_RATE)}</p>
              <p className="text-xs text-foreground/60 mt-1">per day</p>
            </div>
            <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-center hover-elevate transition-all">
              <Home className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm text-primary">Mid-Term</p>
              <p className="text-xs text-foreground/60 mt-1">Weekly Booking</p>
              <p className="text-2xl font-bold mt-3 text-primary">{formatPrice(WEEKLY_RATE)}</p>
              <p className="text-xs text-foreground/60 mt-1">7+ days</p>
            </div>
            <div className="p-6 rounded-lg bg-primary/5 border border-primary/10 text-center hover-elevate transition-all">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm text-primary">Long-Term</p>
              <p className="text-xs text-foreground/60 mt-1">Monthly Booking</p>
              <p className="text-2xl font-bold mt-3 text-primary">{formatPrice(MONTHLY_RATE)}</p>
              <p className="text-xs text-foreground/60 mt-1">30+ days</p>
            </div>
          </div>
        </div>

        {/* Food & Shopping Explanation */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
            <UtensilsIcon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            Food Costs
          </h2>
          <Card className="border border-primary/20">
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Complete Transparency
                </p>
                <p className="text-sm text-foreground/70">
                  Your chef price is completely separate from food costs. The chef service price above covers all their professional time, preparation, cooking, and cleanup.
                </p>
              </div>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold mb-2">How Food Shopping Works:</p>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>✓ Your chef shops at the best local markets in Bali</li>
                  <li>✓ They know which markets have quality ingredients at fair prices</li>
                  <li>✓ You provide cash or they keep receipts for reimbursement</li>
                  <li>✓ Complete transparency - you see exactly what was bought</li>
                  <li>✓ Chef has freedom to find the best ingredients for your menu</li>
                </ul>
              </div>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold mb-2">Example:</p>
                <p className="text-sm text-foreground/70">
                  If you book for Rp 8M (weekly), that's what you pay for the chef. Food might cost Rp 2-3M depending on your menu, which you pay separately. No surprises, no hidden fees.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Terms & Conditions */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              Terms
            </h2>
            <a
              href="/terms-of-service"
              className="text-xs md:text-sm text-primary hover:underline flex items-center gap-1"
              data-testid="link-full-terms"
            >
              Full Terms →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <Card className="border border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Payment
                </h4>
                <ul className="text-xs md:text-sm text-foreground/70 space-y-1 md:space-y-2">
                  <li>• 50% deposit to confirm booking</li>
                  <li>• 50% balance on day chef arrives</li>
                  <li>• Food costs paid separately</li>
                  <li>• No payment until confirmed</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Clock className="w-4 h-4 text-primary" />
                  Cancellation
                </h4>
                <ul className="text-xs md:text-sm text-foreground/70 space-y-1 md:space-y-2">
                  <li>• 48+ hours notice = full refund</li>
                  <li>• Chef gets sick = free replacement</li>
                  <li>• Emergencies accepted</li>
                  <li>• Flexible rescheduling available</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                  <ChefHat className="w-4 h-4 text-primary" />
                  Chef Service
                </h4>
                <ul className="text-xs md:text-sm text-foreground/70 space-y-1 md:space-y-2">
                  <li>• Background checked & verified</li>
                  <li>• 48-hour minimum booking</li>
                  <li>• All equipment included</li>
                  <li>• Professional cleanup included</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Award className="w-4 h-4 text-primary" />
                  Commitment
                </h4>
                <ul className="text-xs md:text-sm text-foreground/70 space-y-1 md:space-y-2">
                  <li>• 100% transparent pricing</li>
                  <li>• No hidden fees ever</li>
                  <li>• Professional service always</li>
                  <li>• Your satisfaction guaranteed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer CTA & Links */}
        <div className="text-center py-6 md:py-8 space-y-4">
          <p className="text-sm md:text-base text-foreground/70">
            Have questions? 
            <Button variant="link" onClick={handleWhatsAppClick} className="text-primary ml-1 h-auto p-0">
              Message us on WhatsApp
            </Button>
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-xs md:text-sm">
            <a href="/terms-of-service" className="text-primary hover:underline" data-testid="link-footer-terms">Terms</a>
            <span className="text-foreground/30">•</span>
            <a href="/privacy-policy" className="text-primary hover:underline" data-testid="link-footer-privacy">Privacy</a>
            <span className="text-foreground/30">•</span>
            <a href="/payment-terms" className="text-primary hover:underline" data-testid="link-footer-payment">Payment Info</a>
            <span className="text-foreground/30">•</span>
            <button onClick={() => setLocation('/')} className="text-primary hover:underline" data-testid="link-footer-home">Home</button>
          </div>
        </div>
      </div>
    </div>
  );
}
