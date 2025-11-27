import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Sparkles, Copy, Check, ChefHat } from 'lucide-react';
import { useState as useStateHook } from 'react';

const CHEF_TYPES = [
  { id: 'sushi', name: 'Sushi Chef' },
  { id: 'french', name: 'French Chef' },
  { id: 'italian', name: 'Italian Chef' },
  { id: 'indonesian', name: 'Indonesian Chef' },
  { id: 'thai', name: 'Thai Chef' },
  { id: 'spanish', name: 'Spanish Chef' },
  { id: 'mediterranean', name: 'Mediterranean Chef' },
  { id: 'fusion', name: 'Fusion Chef' },
];

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [guests, setGuests] = useState(4);
  const [dateFrom, setDateFrom] = useState('2024-12-20');
  const [dateTo, setDateTo] = useState('2024-12-21');
  const [chefType, setChefType] = useState('indonesian');
  const [includeHelper, setIncludeHelper] = useState(false);
  const [copied, setCopied] = useStateHook(false);

  // Calculate days
  const fromDate = new Date(dateFrom);
  const toDate = new Date(dateTo);
  const days = Math.max(1, Math.floor((toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24)) + 1);

  // Pricing tiers
  const DAILY_RATE = 4000000;
  const WEEKLY_RATE = 8000000;
  const MONTHLY_RATE = 29000000;

  // Calculate chef price
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

  // Helper price (half of chef)
  const helperPrice = includeHelper ? chefPrice / 2 : 0;
  const totalPrice = chefPrice + helperPrice;

  const chefName = CHEF_TYPES.find(c => c.id === chefType)?.name || 'Chef';

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
  };

  const getSummaryText = () => {
    const summary = `myCHEF BOOKING QUOTE

CHEF: ${chefName}
GUESTS: ${guests}
DATES: ${dateFrom} to ${dateTo}
DURATION: ${days} day${days !== 1 ? 's' : ''}
${includeHelper ? `HELPER: Yes\n` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━
PRICING BREAKDOWN:

Chef Service: ${formatIDR(chefPrice)}
${includeHelper ? `Helper Service: ${formatIDR(helperPrice)}\n` : ''}
TOTAL: ${formatIDR(totalPrice)}

Rate: ${tier}

━━━━━━━━━━━━━━━━━━━━━━━━
✓ Professional Cooking
✓ Complete Cleanup
✓ Food Shopping
✓ All Inclusive

Contact us on WhatsApp to confirm your booking!`;
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

  const formatIDR = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-primary/3 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Selected Chef Display */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <ChefHat className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">{chefName}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="border border-primary/20 shadow-sm">
            <CardContent className="p-6 space-y-5">
              <h2 className="font-semibold text-lg">Your Details</h2>

              {/* Change Chef */}
              <div>
                <label className="block text-sm font-semibold mb-3">Chef Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {CHEF_TYPES.map((chef) => (
                    <button
                      key={chef.id}
                      onClick={() => setChefType(chef.id)}
                      className={`p-2 rounded-lg border text-xs transition-all ${
                        chefType === chef.id
                          ? 'border-primary bg-primary/10 font-semibold'
                          : 'border-primary/20 hover:border-primary/40'
                      }`}
                      data-testid={`button-chef-${chef.id}`}
                    >
                      {chef.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-semibold mb-3">Number of Guests</label>
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
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold mb-2">From</label>
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-sm"
                    data-testid="input-date-from"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">To</label>
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
          <div className="space-y-4">
            <Card className="border border-primary/20 shadow-sm">
              <CardContent className="p-6">
                <p className="text-xs font-semibold text-foreground/60 mb-6">YOUR QUOTE</p>

                {/* Chef Price */}
                <div className="mb-6">
                  <p className="text-xs text-foreground/60 mb-2">Chef Service</p>
                  <p className="text-3xl font-bold text-primary" data-testid="text-chef-price">
                    {formatIDR(chefPrice)}
                  </p>
                  <p className="text-xs text-foreground/60 mt-2">{tier}</p>
                </div>

                {/* Helper Price */}
                {includeHelper && (
                  <div className="mb-6 pb-6 border-b border-primary/10">
                    <p className="text-xs text-foreground/60 mb-2">Helper Service</p>
                    <p className="text-lg font-semibold text-primary">{formatIDR(helperPrice)}</p>
                  </div>
                )}

                {/* Total */}
                <div className="bg-primary/15 rounded-lg p-4 mb-6">
                  <p className="text-xs text-foreground/70 mb-2">TOTAL PRICE</p>
                  <p className="text-4xl font-bold text-primary" data-testid="text-total-estimate">
                    {formatIDR(totalPrice)}
                  </p>
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-elevate active-elevate-2"
                  data-testid="button-whatsapp-calculator"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="border border-primary/20 shadow-sm bg-primary/5">
              <CardContent className="p-4">
                <p className="text-xs text-foreground/70 space-y-1">
                  <span className="block">✓ All-inclusive pricing</span>
                  <span className="block">✓ Cooking, cleanup, shopping</span>
                  <span className="block">✓ No hidden fees</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Tiers Reference */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
            <p className="font-semibold text-sm text-primary">Daily</p>
            <p className="text-lg font-bold mt-2">{formatIDR(DAILY_RATE)}</p>
            <p className="text-xs text-foreground/60 mt-1">per day</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
            <p className="font-semibold text-sm text-primary">Weekly</p>
            <p className="text-lg font-bold mt-2">{formatIDR(WEEKLY_RATE)}</p>
            <p className="text-xs text-foreground/60 mt-1">7+ days</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
            <p className="font-semibold text-sm text-primary">Monthly</p>
            <p className="text-lg font-bold mt-2">{formatIDR(MONTHLY_RATE)}</p>
            <p className="text-xs text-foreground/60 mt-1">30+ days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
