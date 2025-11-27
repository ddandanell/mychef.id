import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  MessageCircle, ArrowLeft, Calendar, Users, Clock, 
  Sun, Utensils, Moon, ShoppingCart, ChefHat, UserPlus,
  TrendingDown, Info, Calculator, Sparkles
} from 'lucide-react';

const CURRENCIES = [
  { code: 'IDR', symbol: 'Rp', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.000063 },
  { code: 'EUR', symbol: '€', rate: 0.000060 },
  { code: 'AUD', symbol: 'A$', rate: 0.000098 },
  { code: 'SGD', symbol: 'S$', rate: 0.000084 },
];

function getNumDaysFromDates(startDateStr: string, endDateStr: string): number {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const diffMs = end.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diffMs / MS_PER_DAY) + 1);
}

function getDailyServiceHours(morning: boolean, midday: boolean, night: boolean): number {
  const count = [morning, midday, night].filter(Boolean).length;
  if (night) {
    return 8;
  } else if (morning && midday) {
    return 5;
  } else if (count === 1) {
    return 3;
  } else {
    return 0;
  }
}

function getChefRateByHours(totalHours: number): { hourly: number; tier: string; tierLabel: string } {
  if (totalHours > 140) {
    return { hourly: 250000, tier: "monthly", tierLabel: "Monthly Rate" };
  } else if (totalHours > 24) {
    return { hourly: 350000, tier: "weekly", tierLabel: "Weekly Rate" };
  } else {
    return { hourly: 800000, tier: "daily", tierLabel: "Standard Rate" };
  }
}

interface BookingResult {
  numDays: number;
  guestCount: number;
  dailyServiceHours: number;
  serviceHours: number;
  shoppingBlocks: number;
  shoppingHours: number;
  totalChefHours: number;
  helperHours: number;
  pricingTier: string;
  tierLabel: string;
  chefHourly: number;
  helperHourly: number;
  chefCost: number;
  helperCost: number;
  totalCost: number;
  needsHelper: boolean;
}

function calculateBooking(
  startDate: string,
  endDate: string,
  guestCount: number,
  morning: boolean,
  midday: boolean,
  night: boolean
): BookingResult | null {
  if (!startDate || !endDate) return null;

  const numDays = getNumDaysFromDates(startDate, endDate);
  if (numDays <= 0) return null;

  const dailyServiceHours = getDailyServiceHours(morning, midday, night);
  if (dailyServiceHours === 0) return null;

  const serviceHours = dailyServiceHours * numDays;
  const shoppingBlocks = Math.ceil(numDays / 7);
  const shoppingHours = shoppingBlocks * 2;
  const totalChefHours = serviceHours + shoppingHours;

  const { hourly: chefHourly, tier: pricingTier, tierLabel } = getChefRateByHours(totalChefHours);

  const helperHourly = 400000;
  const needsHelper = guestCount > 10;
  const helperHours = needsHelper ? totalChefHours : 0;

  const chefCost = totalChefHours * chefHourly;
  const helperCost = helperHours * helperHourly;
  const totalCost = chefCost + helperCost;

  return {
    numDays,
    guestCount,
    dailyServiceHours,
    serviceHours,
    shoppingBlocks,
    shoppingHours,
    totalChefHours,
    helperHours,
    pricingTier,
    tierLabel,
    chefHourly,
    helperHourly,
    chefCost,
    helperCost,
    totalCost,
    needsHelper,
  };
}

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestCount, setGuestCount] = useState(4);
  const [morning, setMorning] = useState(false);
  const [midday, setMidday] = useState(false);
  const [night, setNight] = useState(true);
  const [currency, setCurrency] = useState('IDR');
  const [showRules, setShowRules] = useState(false);

  const result = useMemo(() => {
    return calculateBooking(startDate, endDate, guestCount, morning, midday, night);
  }, [startDate, endDate, guestCount, morning, midday, night]);

  const formatPrice = (value: number) => {
    if (currency === 'IDR') {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    } else {
      const currencyRate = CURRENCIES.find(c => c.code === currency)?.rate || 1;
      const convertedValue = value * currencyRate;
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(convertedValue);
    }
  };

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=calculator');
  };

  const getMealDescription = () => {
    if (night) return "Full day service (includes dinner)";
    if (morning && midday) return "Morning + Lunch service";
    if (morning) return "Breakfast service only";
    if (midday) return "Lunch service only";
    return "Select at least one meal";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="py-6 md:py-8 px-3 md:px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.button
            onClick={() => setLocation('/')}
            className="mb-6 flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors text-sm"
            data-testid="button-back-home"
            whileHover={{ x: -3 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>

          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Instant Quote</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Private Chef Calculator</h1>
            <p className="text-sm md:text-base text-foreground/60">
              Get your personalized quote in seconds
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">When do you need a chef?</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-foreground/70 mb-1.5">Start Date</label>
                        <input
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm bg-background"
                          data-testid="input-start-date"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-foreground/70 mb-1.5">End Date</label>
                        <input
                          type="date"
                          value={endDate}
                          min={startDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all text-sm bg-background"
                          data-testid="input-end-date"
                        />
                      </div>
                    </div>
                    {result && (
                      <motion.div 
                        className="mt-3 p-2 rounded-lg bg-primary/5 border border-primary/10 text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <span className="text-sm font-semibold text-primary">{result.numDays} day{result.numDays !== 1 ? 's' : ''}</span>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Utensils className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Which meals do you need?</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setMorning(!morning)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                          morning 
                            ? 'border-primary bg-primary/10' 
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid="button-morning"
                      >
                        <Sun className={`w-5 h-5 mx-auto mb-1.5 ${morning ? 'text-primary' : 'text-foreground/50'}`} />
                        <p className={`text-xs font-semibold ${morning ? 'text-primary' : 'text-foreground/70'}`}>Breakfast</p>
                        <p className="text-[10px] text-foreground/50 mt-0.5">3 hrs</p>
                      </button>
                      <button
                        onClick={() => setMidday(!midday)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                          midday 
                            ? 'border-primary bg-primary/10' 
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid="button-midday"
                      >
                        <Utensils className={`w-5 h-5 mx-auto mb-1.5 ${midday ? 'text-primary' : 'text-foreground/50'}`} />
                        <p className={`text-xs font-semibold ${midday ? 'text-primary' : 'text-foreground/70'}`}>Lunch</p>
                        <p className="text-[10px] text-foreground/50 mt-0.5">3 hrs</p>
                      </button>
                      <button
                        onClick={() => setNight(!night)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                          night 
                            ? 'border-primary bg-primary/10' 
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid="button-night"
                      >
                        <Moon className={`w-5 h-5 mx-auto mb-1.5 ${night ? 'text-primary' : 'text-foreground/50'}`} />
                        <p className={`text-xs font-semibold ${night ? 'text-primary' : 'text-foreground/70'}`}>Dinner</p>
                        <p className="text-[10px] text-foreground/50 mt-0.5">8 hrs</p>
                      </button>
                    </div>
                    <p className="text-xs text-foreground/60 mt-3 text-center">{getMealDescription()}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">How many guests?</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                        className="w-10 h-10 rounded-lg border border-primary/20 flex items-center justify-center text-lg font-bold hover:bg-primary/10 transition-colors"
                        data-testid="button-guests-minus"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="flex-1 text-center px-3 py-2.5 rounded-lg border border-primary/20 focus:border-primary outline-none font-bold text-lg"
                        data-testid="input-guests"
                      />
                      <button
                        onClick={() => setGuestCount(Math.min(100, guestCount + 1))}
                        className="w-10 h-10 rounded-lg border border-primary/20 flex items-center justify-center text-lg font-bold hover:bg-primary/10 transition-colors"
                        data-testid="button-guests-plus"
                      >
                        +
                      </button>
                    </div>
                    {guestCount > 10 && (
                      <motion.div 
                        className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center gap-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <UserPlus className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <p className="text-xs text-amber-700">Helper automatically added for 10+ guests</p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => setShowRules(!showRules)}
                  className="w-full flex items-center justify-between p-4 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                  data-testid="button-show-rules"
                >
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">How pricing works</span>
                  </div>
                  <span className="text-xs text-primary">{showRules ? 'Hide' : 'Show'}</span>
                </button>
                
                {showRules && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-2"
                  >
                    <Card className="border-primary/20 bg-primary/5">
                      <CardContent className="p-4 space-y-4 text-sm">
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <ChefHat className="w-4 h-4 text-primary" />
                            Chef & Helper Rates
                          </h4>
                          <ul className="space-y-1 text-foreground/70 text-xs">
                            <li>• <strong>Standard:</strong> Rp 800,000/hour (≤24 total hours)</li>
                            <li>• <strong>Weekly:</strong> Rp 350,000/hour (25-140 hours)</li>
                            <li>• <strong>Monthly:</strong> Rp 250,000/hour (140+ hours)</li>
                            <li>• <strong>Helper:</strong> Rp 400,000/hour (auto-added for 10+ guests)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-primary" />
                            Hours Per Day
                          </h4>
                          <ul className="space-y-1 text-foreground/70 text-xs">
                            <li>• <strong>1 meal</strong> (breakfast/lunch only): 3 hours</li>
                            <li>• <strong>Breakfast + Lunch:</strong> 5 hours</li>
                            <li>• <strong>Any option with dinner:</strong> 8 hours (full day)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <ShoppingCart className="w-4 h-4 text-primary" />
                            Shopping Time
                          </h4>
                          <ul className="space-y-1 text-foreground/70 text-xs">
                            <li>• 2 hours shopping per started week</li>
                            <li>• Billed at same hourly rate</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <TrendingDown className="w-4 h-4 text-primary" />
                            Volume Discounts
                          </h4>
                          <p className="text-foreground/70 text-xs">
                            Once weekly or monthly tier is reached, <strong>all hours</strong> in your booking use the lower rate!
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-4"
              >
                <Card className="border-primary/20 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Your Quote
                    </h3>
                  </div>
                  <CardContent className="p-4 space-y-4">
                    <div className="flex gap-1">
                      {CURRENCIES.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => setCurrency(curr.code)}
                          className={`flex-1 px-2 py-1.5 rounded text-xs font-semibold transition-all ${
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

                    {result ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <div className="bg-gradient-to-br from-primary/15 to-primary/5 rounded-xl p-4 text-center border border-primary/20">
                          <p className="text-xs text-foreground/60 mb-1">Total Estimate</p>
                          <motion.p 
                            className="text-3xl font-bold text-primary"
                            key={result.totalCost}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            data-testid="text-total-price"
                          >
                            {formatPrice(result.totalCost)}
                          </motion.p>
                          <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-xs font-semibold text-primary">
                            <TrendingDown className="w-3 h-3" />
                            {result.tierLabel}
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center py-2 border-b border-primary/10">
                            <span className="text-foreground/70 flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Service Hours
                            </span>
                            <span className="font-semibold">{result.serviceHours}h</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-primary/10">
                            <span className="text-foreground/70 flex items-center gap-2">
                              <ShoppingCart className="w-4 h-4" />
                              Shopping Hours
                            </span>
                            <span className="font-semibold">{result.shoppingHours}h</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-primary/10">
                            <span className="text-foreground/70 flex items-center gap-2">
                              <ChefHat className="w-4 h-4" />
                              Total Chef Hours
                            </span>
                            <span className="font-bold text-primary">{result.totalChefHours}h</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-primary/10">
                            <span className="text-foreground/70">Chef Cost</span>
                            <span className="font-semibold">{formatPrice(result.chefCost)}</span>
                          </div>
                          {result.needsHelper && (
                            <div className="flex justify-between items-center py-2 border-b border-primary/10">
                              <span className="text-foreground/70 flex items-center gap-2">
                                <UserPlus className="w-4 h-4" />
                                Helper Cost
                              </span>
                              <span className="font-semibold">{formatPrice(result.helperCost)}</span>
                            </div>
                          )}
                          <div className="flex justify-between items-center py-2 text-xs text-foreground/50">
                            <span>Rate per hour</span>
                            <span>{formatPrice(result.chefHourly)}/hr</span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              size="sm"
                              onClick={handleWhatsAppClick}
                              className="w-full bg-primary hover:bg-primary text-primary-foreground font-semibold hover-elevate active-elevate-2"
                              data-testid="button-book-whatsapp"
                            >
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Book via WhatsApp
                            </Button>
                          </motion.div>
                          <p className="text-[10px] text-center text-foreground/50">
                            Final price confirmed after consultation
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Calculator className="w-8 h-8 text-primary/50" />
                        </div>
                        <p className="text-sm text-foreground/50">
                          Select dates and meals<br />to see your quote
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-foreground/70">
                      <p className="font-semibold text-foreground mb-1">What's included:</p>
                      <ul className="space-y-0.5">
                        <li>✓ Professional private chef</li>
                        <li>✓ Market shopping & ingredients</li>
                        <li>✓ Cooking & beautiful plating</li>
                        <li>✓ Full kitchen cleanup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-lg z-40 flex items-center gap-2"
        data-testid="button-floating-whatsapp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-semibold">Help</span>
      </motion.button>
    </div>
  );
}
