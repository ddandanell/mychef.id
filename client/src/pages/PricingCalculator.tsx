import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Calculator, HelpCircle, TrendingUp, ChefHat, Clock, Users } from 'lucide-react';

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [guests, setGuests] = useState(4);
  const [mealsPerDay, setMealsPerDay] = useState(1);
  const [days, setDays] = useState(1);
  const [serviceType, setServiceType] = useState('day');
  const [cuisineType, setCuisineType] = useState('indonesian');
  const [showResults, setShowResults] = useState(false);

  const chefRate = 800000;
  const helperRate = 400000;

  const cuisinePercentage: Record<string, number> = {
    indonesian: 0.15,
    greek: 0.30,
    italian: 0.35,
    american: 0.40,
  };

  // Calculate hours per day based on meals
  const getHoursPerDay = () => {
    if (mealsPerDay === 1) return 4;
    if (mealsPerDay === 2) return 6;
    return 8;
  };

  const hoursPerDay = getHoursPerDay();
  const effectiveHoursPerDay = serviceType === 'month' ? 8 : hoursPerDay;

  // Chef labor
  const chefHoursTotal = effectiveHoursPerDay * days;
  const chefLabor = chefHoursTotal * chefRate;

  // Helper (only if >10 guests, 50% of chef hours)
  const helperHoursTotal = guests > 10 ? effectiveHoursPerDay * 0.5 * days : 0;
  const helperLabor = helperHoursTotal * helperRate;

  // Labor total
  const laborTotal = chefLabor + helperLabor;

  // Discount
  let discountRate = 0;
  if (serviceType === 'week') discountRate = 0.2;
  else if (serviceType === 'month') discountRate = 0.4;

  const laborAfterDiscount = laborTotal * (1 - discountRate);

  // Shopping estimate
  const shoppingPercentage = cuisinePercentage[cuisineType] ?? cuisinePercentage.indonesian;
  const suggestedShopping = laborAfterDiscount * shoppingPercentage;
  const totalEstimate = laborAfterDiscount + suggestedShopping;

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
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
          <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-3" data-testid="text-calculator-headline">
            Chef Pricing Calculator
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-2">
            Get an instant estimate for your private chef service in Bali
          </p>
          <p className="text-sm text-foreground/60">
            Whether it's a single event, weekly meal prep, or monthly recurring service
          </p>
        </div>

        {/* Info Section */}
        <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <ChefHat className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Chef Labor</h3>
                  <p className="text-sm text-foreground/70">Rp 800,000/hour for experienced private chef</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Helper Service</h3>
                  <p className="text-sm text-foreground/70">Added automatically for groups 10+</p>
                </div>
              </div>
              <div className="flex gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Bulk Discounts</h3>
                  <p className="text-sm text-foreground/70">20% for weekly, 40% for monthly service</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle>Calculate Your Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                
                {/* Number of Guests */}
                <div>
                  <label className="flex items-center gap-2 font-semibold mb-3">
                    <Users className="w-4 h-4 text-primary" />
                    Number of Guests
                  </label>
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
                      {guests} {guests === 1 ? 'guest' : 'guests'}
                    </span>
                  </div>
                  {guests > 10 && (
                    <p className="text-xs text-primary mt-2 flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" />
                      Helper will be automatically added to your service
                    </p>
                  )}
                </div>

                {/* Meals per Day */}
                <div>
                  <label className="font-semibold mb-3 block">Meals Per Day</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 1, label: '1 Meal', hours: '4h' },
                      { value: 2, label: '2 Meals', hours: '6h' },
                      { value: 3, label: '3 Meals', hours: '8h' },
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

                {/* Number of Days */}
                <div>
                  <label className="flex items-center gap-2 font-semibold mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    Number of Days
                  </label>
                  <div className="flex gap-2">
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
                      {days} {days === 1 ? 'day' : 'days'}
                    </span>
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="font-semibold mb-3 block">Service Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'day', label: 'Day', discount: 'No discount', color: 'bg-blue-50 border-blue-200' },
                      { value: 'week', label: 'Week', discount: '20% off labor', color: 'bg-green-50 border-green-200' },
                      { value: 'month', label: 'Month', discount: '40% off labor', color: 'bg-purple-50 border-purple-200' },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setServiceType(type.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          serviceType === type.value
                            ? `${type.color} border-2 border-primary font-semibold`
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid={`button-service-${type.value}`}
                      >
                        <div className="font-semibold">{type.label}</div>
                        <div className="text-xs text-foreground/60">{type.discount}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cuisine Type */}
                <div>
                  <label className="font-semibold mb-3 block">Cuisine Type (affects food budget)</label>
                  <select
                    value={cuisineType}
                    onChange={(e) => setCuisineType(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border-2 border-primary/20 focus:border-primary outline-none transition-colors"
                    data-testid="select-cuisine"
                  >
                    <option value="indonesian">Indonesian (15% for groceries)</option>
                    <option value="greek">Greek (30% for groceries)</option>
                    <option value="italian">Italian (35% for groceries)</option>
                    <option value="american">American (40% for groceries)</option>
                  </select>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={() => setShowResults(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-semibold transition-all hover-elevate active-elevate-2 flex items-center justify-center gap-2"
                  data-testid="button-calculate"
                >
                  <Calculator className="w-5 h-5" />
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
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {showResults && (
                  <>
                    {/* Working Hours */}
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs text-foreground/70 mb-1">Working Hours</p>
                      <p className="text-sm font-semibold">{effectiveHoursPerDay}h/day × {days} day{days !== 1 ? 's' : ''} = {chefHoursTotal}h total</p>
                    </div>

                    {/* Chef Labor */}
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs text-foreground/70 mb-1">Chef Labor</p>
                      <p className="text-sm font-semibold">{formatIDR(chefLabor)}</p>
                    </div>

                    {/* Helper Labor */}
                    {helperLabor > 0 && (
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <p className="text-xs text-foreground/70 mb-1">Helper Labor ({helperHoursTotal}h)</p>
                        <p className="text-sm font-semibold">{formatIDR(helperLabor)}</p>
                      </div>
                    )}

                    {/* Discount Badge */}
                    {discountRate > 0 && (
                      <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                        <p className="text-xs text-foreground/70 mb-1">Service Discount</p>
                        <p className="text-sm font-semibold text-green-700">{Math.round(discountRate * 100)}% off labor</p>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="border-t-2 border-primary/10 pt-4">
                      
                      {/* Labor Total */}
                      <div className="mb-4">
                        <p className="text-xs text-foreground/70 mb-1">Labor (after discount)</p>
                        <p className="text-2xl font-bold text-primary">{formatIDR(laborAfterDiscount)}</p>
                      </div>

                      {/* Food Budget */}
                      <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 mb-4">
                        <p className="text-xs text-foreground/70 mb-1">Food Budget Estimate</p>
                        <p className="text-sm font-semibold text-amber-900">{formatIDR(suggestedShopping)}</p>
                        <p className="text-xs text-amber-700 mt-1">Paid by actual receipt</p>
                      </div>

                      {/* Total Estimate */}
                      <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary">
                        <p className="text-xs text-foreground/70 mb-2">Total Estimated Cost</p>
                        <p className="text-3xl font-bold text-primary mb-3" data-testid="text-total-estimate">
                          {formatIDR(totalEstimate)}
                        </p>
                        <Button
                          onClick={handleWhatsAppClick}
                          className="w-full bg-primary hover:bg-primary text-primary-foreground font-semibold hover-elevate active-elevate-2"
                          data-testid="button-whatsapp-calculator"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Get Exact Quote
                        </Button>
                      </div>
                    </div>

                    {/* Notes */}
                    <p className="text-xs text-foreground/60 bg-background/50 p-3 rounded-lg border border-foreground/10">
                      <strong>Note:</strong> Food cost is only an estimate. You pay the actual supermarket receipt. You earn on labor only.
                    </p>
                  </>
                )}

                {!showResults && (
                  <div className="py-8 text-center">
                    <p className="text-foreground/60 text-sm">Enter your details and click "Calculate" to see your estimate</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <Card className="mt-8 border-2 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              How This Calculator Works
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">1</span>
                  Select Your Needs
                </h4>
                <p className="text-sm text-foreground/70">
                  Tell us how many guests, how many meals per day, and for how many days you need our chef service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">2</span>
                  We Calculate Hours
                </h4>
                <p className="text-sm text-foreground/70">
                  1 meal = 4 hours, 2 meals = 6 hours, 3 meals = 8 hours. For monthly service, always 8 hours/day.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">3</span>
                  Apply Discounts
                </h4>
                <p className="text-sm text-foreground/70">
                  Weekly bookings get 20% off labor. Monthly bookings get 40% off labor. Perfect for ongoing meal prep!
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">4</span>
                  Estimate Food Cost
                </h4>
                <p className="text-sm text-foreground/70">
                  Different cuisines have different ingredient costs (Indonesian: 15%, Italian: 35%). You pay the actual receipt.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4 mt-6">
              <h4 className="font-semibold mb-2">Key Points</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>✓ Chef rate: Rp 800,000/hour</li>
                <li>✓ Helper added automatically for groups 10+ (at 50% of chef hours)</li>
                <li>✓ Food costs based on cuisine type and actual supermarket prices</li>
                <li>✓ This estimate is for labor only. Get a custom quote for your specific menu!</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
