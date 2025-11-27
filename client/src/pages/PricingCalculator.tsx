import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Calculator, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';
import { useState as useStateHook } from 'react';

const CHEF_TYPES = [
  { id: 'sushi', name: 'Professional Sushi Chef', specialty: '🍣 Japanese' },
  { id: 'french', name: 'French Culinary Master', specialty: '🇫🇷 French' },
  { id: 'italian', name: 'Italian Chef', specialty: '🇮🇹 Italian' },
  { id: 'indonesian', name: 'Master Chef Indonesian', specialty: '🇮🇩 Indonesian' },
  { id: 'thai', name: 'Thai Culinary Expert', specialty: '🇹🇭 Thai' },
  { id: 'spanish', name: 'Spanish Chef', specialty: '🇪🇸 Spanish' },
  { id: 'mediterranean', name: 'Mediterranean Chef', specialty: '🌊 Mediterranean' },
  { id: 'fusion', name: 'Fusion Master Chef', specialty: '🍽️ Asian Fusion' },
];

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [guests, setGuests] = useState(4);
  const [mealsPerDay, setMealsPerDay] = useState(1);
  const [days, setDays] = useState(1);
  const [chefType, setChefType] = useState('indonesian');
  const [includeHelper, setIncludeHelper] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useStateHook(false);

  const helperRate = 400000;

  // Calculate chef labor based on tiered pricing (scales to 29M for 30 days full-time)
  let chefDailyRate = 3000000; // 1-2 days: 3M/day
  if (days >= 21) chefDailyRate = 1200000; // 21+ days: 1.2M/day
  else if (days >= 7) chefDailyRate = 1700000; // 7-20 days: 1.7M/day
  else if (days >= 3) chefDailyRate = 2300000; // 3-6 days: 2.3M/day

  // Cap at 29M for 30+ days
  let chefLabor = chefDailyRate * days;
  if (days >= 30) chefLabor = 29000000;

  // Helper labor (optional) - always at 400k/hour, 8 hours/day for full-time
  const helperHoursTotal = includeHelper ? 8 * days : 0;
  const helperLabor = helperHoursTotal * helperRate;

  // Labor total
  const laborTotal = chefLabor + helperLabor;
  
  // For display purposes
  const chefHoursTotal = 8 * days;
  const totalEstimate = laborTotal;

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
  };

  const getSummaryText = () => {
    const chefName = CHEF_TYPES.find(c => c.id === chefType)?.name || 'Chef';
    const mealsLabel = mealsPerDay === 1 ? '1 Meal' : mealsPerDay === 2 ? '2 Meals' : '3 Meals';
    let pricingNote = '';
    if (days >= 30) pricingNote = '✅ Full-Time Monthly Rate';
    else if (days >= 21) pricingNote = '✅ Extended Stay Rate (1.2M/day)';
    else if (days >= 7) pricingNote = '✅ Weekly Rate (1.7M/day)';
    else if (days >= 3) pricingNote = '✅ Multi-Day Rate (2.3M/day)';
    else pricingNote = '✅ Daily Rate (3M/day)';

    const summary = `
📋 MYCHEF PRICE QUOTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👨‍🍳 Chef: ${chefName}
👥 Guests: ${guests}
🍽️ Meals per Day: ${mealsLabel}
📅 Days: ${days}
⏰ Total Hours: ${chefHoursTotal}h
${includeHelper ? `🤝 Helper: Yes (+Rp ${formatIDR(helperLabor)})\n` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💰 Chef Service: ${formatIDR(chefLabor)}
${includeHelper ? `💼 Helper Service: ${formatIDR(helperLabor)}\n` : ''}${pricingNote}

💵 TOTAL ESTIMATE: ${formatIDR(totalEstimate)}

Note: Final pricing includes all services (cooking, cleanup, shopping).
Contact us on WhatsApp to confirm your booking!
    `.trim();
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
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-primary/5 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-4" data-testid="text-calculator-headline">
            Chef Pricing Calculator
          </h1>
          <p className="text-lg text-foreground/70 mb-2">
            Get an instant estimate for your private chef service in Bali
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">✓ Complete Service</Badge>
            <Badge variant="secondary" className="text-xs">✓ Cleaning Included</Badge>
            <Badge variant="secondary" className="text-xs">✓ Professional Chefs</Badge>
          </div>
        </div>

        {/* Services Include */}
        <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/3">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-center">What's Included in Our Service</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Professional Cooking</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Complete Cleanup</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Food Shopping</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Beautiful Presentation</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Expert Chefs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">Worldwide Cuisine</span>
              </div>
            </div>
            <p className="text-xs text-foreground/60 mt-4 text-center">
              Our chefs are the top professionals trained in world-class restaurants and have expertise across all cuisines
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle>Customize Your Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                
                {/* Number of Guests */}
                <div>
                  <label className="font-semibold mb-3 block">Number of Guests</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={guests}
                      onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 px-4 py-2 rounded-lg border-2 border-primary/20 focus:border-primary outline-none transition-colors"
                      data-testid="input-guests"
                    />
                    <span className="px-4 py-2 rounded-lg bg-primary/10 border-2 border-primary/20 font-semibold">
                      {guests}
                    </span>
                  </div>
                </div>

                {/* Meals per Day */}
                <div>
                  <label className="font-semibold mb-3 block">Meals Per Day</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 1, label: '1 Meal', hours: '4 hours' },
                      { value: 2, label: '2 Meals', hours: '6 hours' },
                      { value: 3, label: '3 Meals', hours: '8 hours' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setMealsPerDay(option.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          mealsPerDay === option.value
                            ? 'border-primary bg-primary/10 font-semibold'
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid={`button-meals-${option.value}`}
                      >
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-xs text-foreground/60">{option.hours}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add a Chef */}
                <div>
                  <label className="font-semibold mb-3 block">Add a Chef</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {CHEF_TYPES.map((chef) => (
                      <button
                        key={chef.id}
                        onClick={() => setChefType(chef.id)}
                        className={`p-3 rounded-lg border-2 transition-all text-left ${
                          chefType === chef.id
                            ? 'border-primary bg-primary/10 font-semibold'
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid={`button-chef-${chef.id}`}
                      >
                        <div className="font-semibold text-sm">{chef.name}</div>
                        <div className="text-xs text-foreground/60">{chef.specialty}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of Days */}
                <div>
                  <label className="font-semibold mb-3 block">Number of Days</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="number"
                      min="1"
                      max="365"
                      value={days}
                      onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 px-4 py-2 rounded-lg border-2 border-primary/20 focus:border-primary outline-none transition-colors"
                      data-testid="input-days"
                    />
                    <span className="px-4 py-2 rounded-lg bg-primary/10 border-2 border-primary/20 font-semibold">
                      {days}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/60">
                    1-2 days: Rp 3M/day | 3-6 days: Rp 2.3M/day | 7-20 days: Rp 1.7M/day | 21+ days: Rp 1.2M/day
                  </p>
                </div>

                {/* Add Helper */}
                <div className="p-4 rounded-lg border-2 border-primary/20 bg-primary/5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      checked={includeHelper}
                      onCheckedChange={(checked) => setIncludeHelper(checked as boolean)}
                      className="mt-1"
                      data-testid="checkbox-helper"
                    />
                    <div className="flex-1">
                      <p className="font-semibold">Add Professional Helper</p>
                      <p className="text-xs text-foreground/70 mt-1">
                        Rp 400,000/hour - Great for groups 10+ or to enhance service quality
                      </p>
                    </div>
                  </label>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={() => setShowResults(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-semibold transition-all hover-elevate active-elevate-2"
                  data-testid="button-calculate"
                >
                  <Calculator className="w-5 h-5 inline mr-2" />
                  Calculate Pricing
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div>
            <Card className="border-2 border-primary sticky top-4">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {showResults && (
                  <>
                    {/* Chef Selection Display */}
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                      <p className="text-xs text-foreground/70 mb-3 font-semibold">📋 Your Selected Chef</p>
                      <div className="bg-background rounded p-3 border border-primary/10">
                        <p className="text-sm font-bold text-primary mb-1">
                          {CHEF_TYPES.find(c => c.id === chefType)?.name}
                        </p>
                        <p className="text-xs text-foreground/70">
                          {CHEF_TYPES.find(c => c.id === chefType)?.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs text-foreground/70 mb-1">Working Hours</p>
                      <p className="text-sm font-semibold">
                        8h/day × {days} day{days !== 1 ? 's' : ''} = {chefHoursTotal}h
                      </p>
                    </div>

                    {/* Chef Labor */}
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs text-foreground/70 mb-1">Chef Service</p>
                      <p className="text-sm font-semibold">{formatIDR(chefLabor)}</p>
                    </div>

                    {/* Helper Labor */}
                    {includeHelper && (
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-xs text-foreground/70 mb-1">Helper Service ({helperHoursTotal}h)</p>
                        <p className="text-sm font-semibold">{formatIDR(helperLabor)}</p>
                      </div>
                    )}

                    {/* Pricing Tier Info */}
                    {days >= 30 && (
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs text-foreground/70 mb-1">Full-Time Monthly Rate</p>
                        <p className="text-sm font-semibold text-green-700">Rp 29,000,000 (Full-Time)</p>
                      </div>
                    )}
                    {days >= 21 && days < 30 && (
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs text-foreground/70 mb-1">Extended Stay Rate</p>
                        <p className="text-sm font-semibold text-green-700">Rp 1,200,000/day</p>
                      </div>
                    )}
                    {days >= 7 && days < 21 && (
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs text-foreground/70 mb-1">Weekly Rate</p>
                        <p className="text-sm font-semibold text-green-700">Rp 1,700,000/day</p>
                      </div>
                    )}
                    {days >= 3 && days < 7 && (
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs text-foreground/70 mb-1">Multi-Day Rate</p>
                        <p className="text-sm font-semibold text-green-700">Rp 2,300,000/day</p>
                      </div>
                    )}
                    {days < 3 && (
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs text-foreground/70 mb-1">Daily Rate</p>
                        <p className="text-sm font-semibold text-green-700">Rp 3,000,000/day</p>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="border-t-2 border-primary/10 pt-4">

                      {/* Total Estimate */}
                      <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary mb-4">
                        <p className="text-xs text-foreground/70 mb-2">Total Estimated Cost</p>
                        <p className="text-3xl font-bold text-primary mb-3" data-testid="text-total-estimate">
                          {formatIDR(totalEstimate)}
                        </p>
                      </div>

                      {/* Summary Section */}
                      <div className="p-4 rounded-lg bg-background border-2 border-primary/20 mb-4">
                        <p className="text-xs text-foreground/70 mb-3 font-semibold">Your Quote Summary</p>
                        <div className="bg-primary/5 p-3 rounded text-xs font-mono text-foreground/80 mb-3 whitespace-pre-wrap break-words max-h-48 overflow-y-auto">
                          {getSummaryText()}
                        </div>
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
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <Button
                          onClick={handleWhatsAppClick}
                          className="w-full bg-primary hover:bg-primary text-primary-foreground font-semibold hover-elevate active-elevate-2"
                          data-testid="button-whatsapp-calculator"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Send Quote on WhatsApp
                        </Button>
                      </div>
                    </div>

                    {/* Notes */}
                    <p className="text-xs text-foreground/60 bg-background/50 p-3 rounded-lg border border-foreground/10">
                      <strong>Note:</strong> This is an estimate. Final pricing depends on menu, ingredients, and location in Bali.
                    </p>
                  </>
                )}

                {!showResults && (
                  <div className="py-8 text-center">
                    <p className="text-foreground/60 text-sm">Fill in your details and click "Calculate" to see your estimate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Info Footer */}
        <Card className="mt-8 border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Chef Rates</h4>
                <ul className="text-foreground/70 space-y-1">
                  <li>• Chef Service: Rp 800,000/hour</li>
                  <li>• Helper Service: Rp 400,000/hour</li>
                  <li>• Same discounts apply to all services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Automatic Discounts</h4>
                <ul className="text-foreground/70 space-y-1">
                  <li>• 7+ days = 20% weekly discount</li>
                  <li>• 30+ days = 40% monthly discount</li>
                  <li>• All services included in pricing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
