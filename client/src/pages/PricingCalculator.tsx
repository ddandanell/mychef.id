import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MessageCircle, Calculator, TrendingUp } from 'lucide-react';

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [guests, setGuests] = useState(4);
  const [duration, setDuration] = useState(3);
  const [chefLevel, setChefLevel] = useState('standard'); // standard, premium, luxury
  const [addWaiter, setAddWaiter] = useState(false);
  const [addBartender, setAddBartender] = useState(false);
  const [addSommelier, setAddSommelier] = useState(false);

  // Pricing structure
  const chefRates = {
    standard: 800000,
    premium: 1000000,
    luxury: 1200000,
  };

  const waiterRate = 300000;
  const bartenderRate = 400000;
  const sommelierRate = 500000;

  // Calculate total
  const chefCost = chefRates[chefLevel as keyof typeof chefRates] * duration;
  const waiterCost = addWaiter ? waiterRate * duration : 0;
  const bartenderCost = addBartender ? bartenderRate * duration : 0;
  const sommelierCost = addSommelier ? sommelierRate * duration : 0;

  const totalServiceCost = chefCost + waiterCost + bartenderCost + sommelierCost;
  const estimatedIngredients = guests * 150000; // Estimate per guest
  const totalEstimate = totalServiceCost + estimatedIngredients;

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 mb-4">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4" data-testid="text-calculator-headline">
            Price Calculator
          </h1>
          <p className="text-lg text-foreground/70">
            Get an instant estimate for your private chef service in Bali
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Customize Your Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Number of Guests */}
                <div>
                  <div className="flex justify-between mb-3">
                    <Label className="text-base font-semibold">Number of Guests</Label>
                    <span className="text-lg font-bold text-primary">{guests}</span>
                  </div>
                  <Slider
                    value={[guests]}
                    onValueChange={(val) => setGuests(val[0])}
                    min={1}
                    max={30}
                    step={1}
                    className="w-full"
                    data-testid="slider-guests"
                  />
                  <p className="text-sm text-foreground/60 mt-2">1-30 guests</p>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex justify-between mb-3">
                    <Label className="text-base font-semibold">Service Duration</Label>
                    <span className="text-lg font-bold text-primary">{duration} hours</span>
                  </div>
                  <Slider
                    value={[duration]}
                    onValueChange={(val) => setDuration(val[0])}
                    min={2}
                    max={8}
                    step={0.5}
                    className="w-full"
                    data-testid="slider-duration"
                  />
                  <p className="text-sm text-foreground/60 mt-2">2-8 hours (recommended: 3-4 hours)</p>
                </div>

                {/* Chef Level */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Chef Expertise Level</Label>
                  <div className="space-y-3">
                    {[
                      { id: 'standard', label: 'Standard Chef', rate: 'Rp 800,000/hour' },
                      { id: 'premium', label: 'Premium Chef', rate: 'Rp 1,000,000/hour' },
                      { id: 'luxury', label: 'Luxury Chef', rate: 'Rp 1,200,000/hour' },
                    ].map((level) => (
                      <label key={level.id} className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/5 transition-colors">
                        <input
                          type="radio"
                          name="chefLevel"
                          value={level.id}
                          checked={chefLevel === level.id}
                          onChange={(e) => setChefLevel(e.target.value)}
                          className="w-4 h-4"
                          data-testid={`radio-chef-${level.id}`}
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{level.label}</p>
                          <p className="text-sm text-primary">{level.rate}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Add-on Services */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Add-on Services</Label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/5 transition-colors">
                      <Checkbox
                        checked={addWaiter}
                        onCheckedChange={(checked) => setAddWaiter(checked as boolean)}
                        data-testid="checkbox-waiter"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">Professional Waiter</p>
                        <p className="text-sm text-foreground/70">Rp 300,000/hour</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/5 transition-colors">
                      <Checkbox
                        checked={addBartender}
                        onCheckedChange={(checked) => setAddBartender(checked as boolean)}
                        data-testid="checkbox-bartender"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">Bartender</p>
                        <p className="text-sm text-foreground/70">Rp 400,000/hour</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 cursor-pointer hover:bg-primary/5 transition-colors">
                      <Checkbox
                        checked={addSommelier}
                        onCheckedChange={(checked) => setAddSommelier(checked as boolean)}
                        data-testid="checkbox-sommelier"
                      />
                      <div className="flex-1">
                        <p className="font-semibold">Sommelier / Wine Expert</p>
                        <p className="text-sm text-foreground/70">Rp 500,000/hour</p>
                      </div>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary Panel */}
          <div>
            <Card className="border-2 border-primary sticky top-4">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <CardTitle>Price Estimate</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {/* Breakdown */}
                <div className="space-y-3 pb-4 border-b border-primary/10">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Chef Service ({duration}h)</span>
                    <span className="font-semibold text-right">{formatPrice(chefCost)}</span>
                  </div>
                  {addWaiter && (
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Waiter ({duration}h)</span>
                      <span className="font-semibold text-right">{formatPrice(waiterCost)}</span>
                    </div>
                  )}
                  {addBartender && (
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Bartender ({duration}h)</span>
                      <span className="font-semibold text-right">{formatPrice(bartenderCost)}</span>
                    </div>
                  )}
                  {addSommelier && (
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/70">Sommelier ({duration}h)</span>
                      <span className="font-semibold text-right">{formatPrice(sommelierCost)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Ingredients (~{guests} guests)</span>
                    <span className="font-semibold text-right">{formatPrice(estimatedIngredients)}</span>
                  </div>
                </div>

                {/* Total */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-foreground">Total Estimate</span>
                    <span className="text-2xl font-bold text-primary" data-testid="text-total-price">
                      {formatPrice(totalEstimate)}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/60">
                    50% deposit required, 50% day before event
                  </p>
                </div>

                {/* CTA */}
                <div className="space-y-3 pt-4">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="w-full bg-primary hover:bg-primary text-primary-foreground font-semibold hover-elevate active-elevate-2"
                    data-testid="button-calculator-whatsapp"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Exact Quote
                  </Button>
                  <p className="text-xs text-foreground/60 text-center">
                    This is an estimate. Final pricing may vary based on menu complexity and location.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <Card className="mt-8 border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">How the pricing works:</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• <strong>Chef Service:</strong> Includes meal preparation, cooking, plating, and cleanup</li>
              <li>• <strong>Ingredients:</strong> Estimated at Rp 150,000 per guest. Chef arrives 2 hours early to shop at local markets for quality control</li>
              <li>• <strong>Add-on Services:</strong> Professional waiter, bartender, or sommelier for enhanced experience</li>
              <li>• <strong>Travel Fees:</strong> May apply depending on your location in Bali</li>
              <li>• <strong>Payment:</strong> 50% deposit when booking, 50% the day before your event</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
