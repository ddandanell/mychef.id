import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Sparkles, Copy, Check, ChefHat } from 'lucide-react';
import { useState as useStateHook } from 'react';

const CHEF_TYPES = [
  { id: 'sushi', name: 'Sushi Chef', specialty: '🍣' },
  { id: 'french', name: 'French Chef', specialty: '🇫🇷' },
  { id: 'italian', name: 'Italian Chef', specialty: '🇮🇹' },
  { id: 'indonesian', name: 'Indonesian Chef', specialty: '🇮🇩' },
  { id: 'thai', name: 'Thai Chef', specialty: '🇹🇭' },
  { id: 'spanish', name: 'Spanish Chef', specialty: '🇪🇸' },
  { id: 'mediterranean', name: 'Mediterranean Chef', specialty: '🌊' },
  { id: 'fusion', name: 'Fusion Chef', specialty: '🍽️' },
];

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [guests, setGuests] = useState(4);
  const [days, setDays] = useState(1);
  const [chefType, setChefType] = useState('indonesian');
  const [includeHelper, setIncludeHelper] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useStateHook(false);

  const helperRate = 400000;

  let chefDailyRate = 3000000;
  if (days >= 21) chefDailyRate = 1200000;
  else if (days >= 7) chefDailyRate = 1700000;
  else if (days >= 3) chefDailyRate = 2300000;

  let chefLabor = chefDailyRate * days;
  if (days >= 30) chefLabor = 29000000;

  const helperHoursTotal = includeHelper ? 8 * days : 0;
  const helperLabor = helperHoursTotal * helperRate;
  const totalEstimate = chefLabor + helperLabor;

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
  };

  const getSummaryText = () => {
    const chefName = CHEF_TYPES.find(c => c.id === chefType)?.name || 'Chef';
    const summary = `myCHEF PRICE QUOTE

Chef: ${chefName}
Guests: ${guests}
Duration: ${days} day${days !== 1 ? 's' : ''}
Helper: ${includeHelper ? 'Yes' : 'No'}

Chef Service: ${formatIDR(chefLabor)}
${includeHelper ? `Helper Service: ${formatIDR(helperLabor)}\n` : ''}
TOTAL: ${formatIDR(totalEstimate)}

Includes: Professional cooking, complete cleanup, shopping
Contact us on WhatsApp to confirm!`;
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

  let priceTier = '';
  let pricePerDay = '';
  if (days >= 30) {
    priceTier = 'Full Month';
    pricePerDay = 'Rp 29,000,000 total';
  } else if (days >= 21) {
    priceTier = 'Extended Stay';
    pricePerDay = 'Rp 1.2M/day';
  } else if (days >= 7) {
    priceTier = 'Weekly Rate';
    pricePerDay = 'Rp 1.7M/day';
  } else if (days >= 3) {
    priceTier = 'Multi-Day';
    pricePerDay = 'Rp 2.3M/day';
  } else {
    priceTier = 'Daily Rate';
    pricePerDay = 'Rp 3M/day';
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-primary/3 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Chef Pricing Calculator</h1>
          </div>
          <p className="text-foreground/60">Get your instant quote</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <Card className="border border-primary/20 shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">How many guests?</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={guests}
                  onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-lg"
                  data-testid="input-guests"
                />
                <p className="text-xs text-foreground/50 mt-2">Perfect for groups of {guests}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">How many days?</label>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={days}
                  onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary outline-none transition-colors text-lg"
                  data-testid="input-days"
                />
                <p className="text-xs text-foreground/50 mt-2">Rate: {pricePerDay}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">Choose your chef</label>
                <div className="grid grid-cols-2 gap-2">
                  {CHEF_TYPES.map((chef) => (
                    <button
                      key={chef.id}
                      onClick={() => setChefType(chef.id)}
                      className={`p-3 rounded-lg border transition-all text-center ${
                        chefType === chef.id
                          ? 'border-primary bg-primary/10 font-semibold'
                          : 'border-primary/20 hover:border-primary/40'
                      }`}
                      data-testid={`button-chef-${chef.id}`}
                    >
                      <div className="text-lg">{chef.specialty}</div>
                      <div className="text-xs mt-1">{chef.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-primary/10 pt-6">
                <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition-colors">
                  <Checkbox
                    checked={includeHelper}
                    onCheckedChange={(checked) => setIncludeHelper(checked as boolean)}
                    className="mt-1"
                    data-testid="checkbox-helper"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Add Professional Helper</p>
                    <p className="text-xs text-foreground/60 mt-1">Rp 400k/hour (great for large groups)</p>
                  </div>
                </label>
              </div>

              <Button
                onClick={() => setShowResults(true)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 hover-elevate active-elevate-2"
                data-testid="button-calculate"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                See Your Price
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <div className="space-y-4">
            {showResults ? (
              <>
                <Card className="border border-primary/20 shadow-sm">
                  <CardContent className="p-6">
                    <p className="text-xs font-semibold text-foreground/60 mb-4">YOUR ESTIMATE</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-xs text-foreground/60">{CHEF_TYPES.find(c => c.id === chefType)?.name}</p>
                        <p className="text-2xl font-bold text-primary mt-1" data-testid="text-total-estimate">
                          {formatIDR(chefLabor)}
                        </p>
                        <p className="text-xs text-foreground/60 mt-2">{days} day{days !== 1 ? 's' : ''} • {guests} guests</p>
                      </div>

                      {includeHelper && (
                        <div className="pt-3 border-t border-primary/10">
                          <p className="text-xs text-foreground/60">Helper Service</p>
                          <p className="font-semibold text-primary mt-1">{formatIDR(helperLabor)}</p>
                        </div>
                      )}
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4 mb-6">
                      <p className="text-xs text-foreground/60 mb-1">TOTAL PRICE</p>
                      <p className="text-3xl font-bold text-primary">{formatIDR(totalEstimate)}</p>
                      <p className="text-xs text-foreground/60 mt-2">{priceTier} Rate</p>
                    </div>

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

                <Card className="border border-primary/20 shadow-sm bg-primary/5">
                  <CardContent className="p-4">
                    <p className="text-xs text-foreground/70">
                      ✓ Includes: Professional cooking, complete cleanup, shopping<br/>
                      ✓ Minimum 48 hours notice required<br/>
                      ✓ All-inclusive pricing • No hidden fees
                    </p>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border border-primary/20 shadow-sm bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="p-8 text-center">
                  <Sparkles className="w-8 h-8 text-primary/40 mx-auto mb-3" />
                  <p className="text-foreground/60">Fill in your details and click<br/>"See Your Price"</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Info Bar */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <p className="font-semibold text-primary">Daily</p>
            <p className="text-xs text-foreground/60 mt-1">Rp 3M/day</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <p className="font-semibold text-primary">Weekly</p>
            <p className="text-xs text-foreground/60 mt-1">Rp 1.7M/day</p>
          </div>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <p className="font-semibold text-primary">Monthly</p>
            <p className="text-xs text-foreground/60 mt-1">Rp 29M flat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
