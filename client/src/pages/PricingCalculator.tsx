import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, ArrowLeft, Calendar, Users, Clock, 
  Sun, Utensils, Moon, ShoppingCart, ChefHat,
  TrendingDown, Info, Calculator, Sparkles, Leaf, Shield, CheckCircle2,
  ShoppingBag, Flame, Wine, Zap, Copy, Send, HelpCircle, X, Star
} from 'lucide-react';

const CURRENCIES = [
  { code: 'IDR', symbol: 'Rp', rate: 1 },
  { code: 'USD', symbol: '$', rate: 0.000063 },
  { code: 'EUR', symbol: '€', rate: 0.000060 },
  { code: 'AUD', symbol: 'A$', rate: 0.000098 },
  { code: 'SGD', symbol: 'S$', rate: 0.000084 },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Romaldo',
    review: 'Some of the best experiences I ever had. The food was incredible, the service was outstanding, and everything was handled perfectly. I felt like royalty in my own villa. Worth every rupiah and then some!',
    rating: 5
  },
  {
    id: 2,
    name: 'Siti',
    country: 'Indonesia',
    review: 'This was the best investment for our villa vacation. Everything was handled perfectly from start to finish. The customized menu, the fresh ingredients from the market, the presentation — absolutely flawless. We already booked them twice!',
    rating: 5
  },
  {
    id: 3,
    name: 'Guest',
    review: 'The private chef experience exceeded all expectations. Professional, delicious, and completely unforgettable. We got to choose exactly what we wanted, and they made it happen. This is how vacation should be!',
    rating: 5
  }
];

const MASTER_CHEFS = [
  {
    id: 1,
    name: 'Chef Marco',
    country: 'Italy',
    flag: '🇮🇹',
    specialties: ['Italian Cuisine', 'Pasta Making', 'Fine Dining']
  },
  {
    id: 2,
    name: 'Chef Siti',
    country: 'Indonesia',
    flag: '🇮🇩',
    specialties: ['Indonesian Cuisine', 'Traditional Flavors', 'Balinese Dishes']
  },
  {
    id: 3,
    name: 'Chef Sophie',
    country: 'France',
    flag: '🇫🇷',
    specialties: ['French Cuisine', 'Pastry', 'Fine Dining Techniques']
  },
  {
    id: 4,
    name: 'Chef Hassan',
    country: 'Japan',
    flag: '🇯🇵',
    specialties: ['Japanese Cuisine', 'Sushi', 'Precision Knife Work']
  },
  {
    id: 5,
    name: 'Chef Carlos',
    country: 'Spain',
    flag: '🇪🇸',
    specialties: ['Spanish Cuisine', 'Paella', 'Mediterranean Flavors']
  },
  {
    id: 6,
    name: 'Chef Akiko',
    country: 'Thailand',
    flag: '🇹🇭',
    specialties: ['Thai Cuisine', 'Spice Balancing', 'Street Food']
  },
  {
    id: 7,
    name: 'Chef Raj',
    country: 'India',
    flag: '🇮🇳',
    specialties: ['Indian Cuisine', 'Tandoori Cooking', 'Spice Blending']
  },
  {
    id: 8,
    name: 'Chef Maria',
    country: 'Mexico',
    flag: '🇲🇽',
    specialties: ['Mexican Cuisine', 'Traditional Recipes', 'Authentic Flavors']
  },
  {
    id: 9,
    name: 'Chef Pierre',
    country: 'Belgium',
    flag: '🇧🇪',
    specialties: ['Belgian Cuisine', 'Chocolate', 'European Fusion']
  },
  {
    id: 10,
    name: 'Chef Yuki',
    country: 'Korea',
    flag: '🇰🇷',
    specialties: ['Korean Cuisine', 'BBQ Mastery', 'Fermentation']
  }
];

function getNumDaysFromDates(startDateStr: string, endDateStr: string): number {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const diffMs = end.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diffMs / MS_PER_DAY) + 1);
}

function getDailyServiceHours(breakfast: boolean, lunch: boolean, dinner: boolean): number {
  let hours = 0;
  if (breakfast) hours += 2;
  if (lunch) hours += 3;
  if (dinner) hours += 3;
  return hours;
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
  pricingTier: string;
  tierLabel: string;
  chefHourly: number;
  totalCost: number;
}

function calculateBooking(
  startDate: string,
  endDate: string,
  guestCount: number,
  breakfast: boolean,
  lunch: boolean,
  dinner: boolean
): BookingResult | null {
  if (!startDate || !endDate) return null;

  const numDays = getNumDaysFromDates(startDate, endDate);
  if (numDays <= 0) return null;

  const dailyServiceHours = getDailyServiceHours(breakfast, lunch, dinner);
  if (dailyServiceHours === 0) return null;

  const serviceHours = dailyServiceHours * numDays;
  const shoppingBlocks = Math.ceil(numDays / 7);
  const shoppingHours = shoppingBlocks * 2;
  const totalChefHours = serviceHours + shoppingHours;

  const { hourly: chefHourly, tier: pricingTier, tierLabel } = getChefRateByHours(totalChefHours);

  const totalCost = totalChefHours * chefHourly;

  return {
    numDays,
    guestCount,
    dailyServiceHours,
    serviceHours,
    shoppingBlocks,
    shoppingHours,
    totalChefHours,
    pricingTier,
    tierLabel,
    chefHourly,
    totalCost,
  };
}

export default function PricingCalculator() {
  const [, setLocation] = useLocation();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestCount, setGuestCount] = useState(4);
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(true);
  const [currency, setCurrency] = useState('IDR');
  const [showRules, setShowRules] = useState(false);
  const [selectedChef, setSelectedChef] = useState(MASTER_CHEFS[0]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const result = useMemo(() => {
    return calculateBooking(startDate, endDate, guestCount, breakfast, lunch, dinner);
  }, [startDate, endDate, guestCount, breakfast, lunch, dinner]);

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
      return new Intl.NumberFormat('de-DE', {
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

  const handleCopyQuote = () => {
    if (!result) return;
    const quoteText = `
myCHEF Indonesia Quote
Chef: ${selectedChef.name} from ${selectedChef.country}
Duration: ${result.numDays} days (${startDate} to ${endDate})
Guests: ${result.guestCount}
Meals: ${breakfast ? 'Breakfast (2h) ' : ''}${lunch ? 'Lunch (3h) ' : ''}${dinner ? 'Dinner (3h) ' : ''}
Total Hours: ${result.totalChefHours}h
Hourly Rate: ${formatPrice(result.chefHourly)}/hr
Total Cost: ${formatPrice(result.totalCost)}
Pricing Tier: ${result.tierLabel}
    `.trim();
    navigator.clipboard.writeText(quoteText);
  };

  const handleAskQuestion = () => {
    if (!questionText.trim() || !result) return;
    const message = `Question about quote:\n\nChef: ${selectedChef.name}\nTotal: ${formatPrice(result.totalCost)}\n\nQuestion: ${questionText}`;
    window.location.href = `https://wa.me/+62?text=${encodeURIComponent(message)}`;
  };

  const handleSendQuote = () => {
    if (!result) return;
    const quoteMessage = `Hello, I'm interested in booking ${selectedChef.name} from ${selectedChef.country}.\n\nQuote Details:\nDuration: ${result.numDays} days\nGuests: ${result.guestCount}\nTotal Hours: ${result.totalChefHours}h\nTotal Cost: ${formatPrice(result.totalCost)}\n\nPlease confirm availability.`;
    setLocation('/contact/confirm?source=calculator&quote=' + encodeURIComponent(quoteMessage));
  };

  const getMealDescription = () => {
    const selected = [];
    if (breakfast) selected.push('Breakfast (2h)');
    if (lunch) selected.push('Lunch (3h)');
    if (dinner) selected.push('Dinner (3h)');
    
    if (selected.length === 0) return "Select at least one meal";
    
    const totalHours = (breakfast ? 2 : 0) + (lunch ? 3 : 0) + (dinner ? 3 : 0);
    return `${selected.join(' + ')} = ${totalHours} hours/day`;
  };

  const getDateValidation = () => {
    if (!startDate) return { valid: true, message: '' };
    
    const now = new Date();
    const start = new Date(startDate);
    const hoursUntilStart = (start.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    // Check if date is in the past
    if (hoursUntilStart < 0) {
      return { valid: false, message: '❌ Cannot select past dates', type: 'error' };
    }
    
    // Check if at least 48 hours in future
    if (hoursUntilStart < 48) {
      return { valid: false, message: '⏰ Booking must be at least 48 hours in advance', type: 'warning' };
    }
    
    return { valid: true, message: '✓ Date is valid', type: 'success' };
  };

  const dateValidation = getDateValidation();
  const isDateValid = dateValidation.valid;

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-semibold text-sm text-foreground mb-1">{TESTIMONIALS[currentTestimonial].name}</p>
                    <p className="text-xs text-foreground/70 italic">{TESTIMONIALS[currentTestimonial].review}</p>
                  </motion.div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-1 mt-3">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentTestimonial ? 'w-4 bg-primary' : 'w-2 bg-primary/30'
                    }`}
                    data-testid={`button-testimonial-${idx}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <ChefHat className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Select Your Master Chef</h3>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {MASTER_CHEFS.map((chef) => (
                        <motion.button
                          key={chef.id}
                          onClick={() => setSelectedChef(chef)}
                          className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                            selectedChef.id === chef.id
                              ? 'border-primary bg-primary/10'
                              : 'border-primary/20 hover:border-primary/40'
                          }`}
                          data-testid={`button-chef-${chef.id}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-semibold flex items-center gap-2">
                                <span className="text-lg">{chef.flag}</span>
                                {chef.name} from {chef.country}
                              </p>
                              <p className="text-xs text-foreground/60 mt-1 line-clamp-1">
                                {chef.specialties.join(' • ')}
                              </p>
                            </div>
                            {selectedChef.id === chef.id && (
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

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
                          className={`w-full px-3 py-2.5 rounded-lg border focus:ring-1 outline-none transition-all text-sm bg-background ${
                            !isDateValid ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30' : 'border-primary/20 focus:border-primary focus:ring-primary/30'
                          }`}
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
                    {startDate && (
                      <motion.div 
                        className={`mt-3 p-2.5 rounded-lg text-center text-xs font-medium border ${
                          isDateValid 
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-200' 
                            : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-700 dark:text-red-200'
                        }`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        data-testid="text-date-validation"
                      >
                        {dateValidation.message}
                      </motion.div>
                    )}
                    {result && isDateValid && (
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
                      <motion.button
                        onClick={() => setBreakfast(!breakfast)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                          breakfast 
                            ? 'border-primary bg-primary/10' 
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid="button-breakfast"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Sun className={`w-5 h-5 mx-auto mb-1.5 ${breakfast ? 'text-primary' : 'text-foreground/50'}`} />
                        <p className={`text-xs font-semibold ${breakfast ? 'text-primary' : 'text-foreground/70'}`}>Breakfast</p>
                        <p className="text-[10px] text-foreground/50 mt-0.5">2 hours</p>
                      </motion.button>
                      <motion.button
                        onClick={() => setLunch(!lunch)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                          lunch 
                            ? 'border-primary bg-primary/10' 
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid="button-lunch"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Utensils className={`w-5 h-5 mx-auto mb-1.5 ${lunch ? 'text-primary' : 'text-foreground/50'}`} />
                        <p className={`text-xs font-semibold ${lunch ? 'text-primary' : 'text-foreground/70'}`}>Lunch</p>
                        <p className="text-[10px] text-foreground/50 mt-0.5">3 hours</p>
                      </motion.button>
                      <motion.button
                        onClick={() => setDinner(!dinner)}
                        className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                          dinner 
                            ? 'border-primary bg-primary/10' 
                            : 'border-primary/20 hover:border-primary/40'
                        }`}
                        data-testid="button-dinner"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Moon className={`w-5 h-5 mx-auto mb-1.5 ${dinner ? 'text-primary' : 'text-foreground/50'}`} />
                        <p className={`text-xs font-semibold ${dinner ? 'text-primary' : 'text-foreground/70'}`}>Dinner</p>
                        <p className="text-[10px] text-foreground/50 mt-0.5">3 hours</p>
                      </motion.button>
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
                      <motion.button
                        onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                        className="w-10 h-10 rounded-lg border border-primary/20 flex items-center justify-center text-lg font-bold hover:bg-primary/10 transition-colors"
                        data-testid="button-guests-minus"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        −
                      </motion.button>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="flex-1 text-center px-3 py-2.5 rounded-lg border border-primary/20 focus:border-primary outline-none font-bold text-lg"
                        data-testid="input-guests"
                      />
                      <motion.button
                        onClick={() => setGuestCount(Math.min(100, guestCount + 1))}
                        className="w-10 h-10 rounded-lg border border-primary/20 flex items-center justify-center text-lg font-bold hover:bg-primary/10 transition-colors"
                        data-testid="button-guests-plus"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        +
                      </motion.button>
                    </div>
                    {guestCount > 10 && (
                      <motion.p 
                        className="mt-3 text-xs text-foreground/60 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Helper available at Rp 190,000/hour for larger groups
                      </motion.p>
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
                            Chef Hourly Rates
                          </h4>
                          <ul className="space-y-1 text-foreground/70 text-xs">
                            <li>• <strong>Standard:</strong> Rp 800,000/hour (up to 24 hours)</li>
                            <li>• <strong>Weekly:</strong> Rp 350,000/hour (25+ hours)</li>
                            <li>• <strong>Monthly:</strong> Rp 250,000/hour (140+ hours)</li>
                          </ul>
                          <p className="text-xs text-foreground/50 mt-2 italic">
                            Once you reach weekly or monthly tier, ALL hours are charged at the lower rate!
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-primary" />
                            Hours Per Meal
                          </h4>
                          <ul className="space-y-1 text-foreground/70 text-xs">
                            <li>• <strong>Breakfast:</strong> 2 hours</li>
                            <li>• <strong>Lunch:</strong> 3 hours</li>
                            <li>• <strong>Dinner:</strong> 3 hours</li>
                            <li className="text-foreground/50 italic">Hours add up when you select multiple meals</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <ShoppingCart className="w-4 h-4 text-primary" />
                            Weekly Shopping (FREE Service)
                          </h4>
                          <ul className="space-y-1 text-foreground/70 text-xs">
                            <li>• Chef visits your villa once per week</li>
                            <li>• Plans the menu together with you</li>
                            <li>• You provide cash for groceries</li>
                            <li>• Chef shops at local Bali markets</li>
                            <li>• Fresh ingredients, your choice</li>
                            <li>• <strong>No markup, no extra fees</strong></li>
                          </ul>
                          <p className="text-xs text-foreground/50 mt-2 italic">
                            2 hours shopping time per week (included in total hours)
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-primary" />
                            Helper (Optional)
                          </h4>
                          <p className="text-foreground/70 text-xs">
                            For groups of 10+ guests, a helper is available at <strong>Rp 190,000/hour</strong>. 
                            Contact us to add this to your booking.
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
                          <p className="text-xs text-foreground/60 mb-1">Chef Service Total</p>
                          <motion.p 
                            className="text-2xl md:text-3xl font-bold text-primary"
                            key={result.totalCost}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            data-testid="text-total-price"
                          >
                            {formatPrice(result.totalCost)}
                          </motion.p>
                          <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-xs font-semibold text-primary">
                            <TrendingDown className="w-3 h-3" />
                            {formatPrice(result.chefHourly)} per hour
                          </div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center py-2 border-b border-primary/10">
                            <span className="text-foreground/70 flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Daily Service
                            </span>
                            <span className="font-semibold">{result.dailyServiceHours}h/day</span>
                          </div>
                          <div className="flex justify-between items-center py-2 border-b border-primary/10">
                            <span className="text-foreground/70 flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
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
                              Total Hours
                            </span>
                            <span className="font-bold text-primary">{result.totalChefHours}h</span>
                          </div>
                          <div className="flex justify-between items-center py-2 text-xs text-foreground/50">
                            <span>Rate per hour</span>
                            <span>{formatPrice(result.chefHourly)}/hr</span>
                          </div>
                        </div>

                        <div className="space-y-4 pt-2 border-t border-primary/10">
                          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                            <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-100 mb-3">ROI Comparison</h4>
                            <div className="space-y-2 text-xs">
                              <div className="flex justify-between items-center">
                                <span className="text-emerald-800 dark:text-emerald-200">Dining Out Cost</span>
                                <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                  {formatPrice(1500000 * guestCount)} (Rp 1.5M × {guestCount} {guestCount === 1 ? 'person' : 'people'})
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-emerald-800 dark:text-emerald-200">Private Chef Cost</span>
                                <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                  {formatPrice(result.totalCost)}
                                </span>
                              </div>
                              <div className="border-t border-emerald-200 dark:border-emerald-800 pt-2 mt-2 flex justify-between items-center">
                                <span className="font-semibold text-emerald-900 dark:text-emerald-100">You Save</span>
                                <span className="font-bold text-lg text-emerald-900 dark:text-emerald-100">
                                  {formatPrice(Math.max(0, (1500000 * guestCount) - result.totalCost))}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                onClick={handleSendQuote}
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                                data-testid="button-book-whatsapp"
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                Book {selectedChef.name} via WhatsApp
                              </Button>
                            </motion.div>
                            <div className="grid grid-cols-3 gap-2">
                              <Button
                                onClick={handleCopyQuote}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                data-testid="button-copy-quote"
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy
                              </Button>
                              <Button
                                onClick={() => setShowQuestion(true)}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                data-testid="button-ask-question"
                              >
                                <HelpCircle className="w-3 h-3 mr-1" />
                                Question
                              </Button>
                              <Button
                                onClick={handleSendQuote}
                                variant="outline"
                                size="sm"
                                className="text-xs"
                                data-testid="button-send-quote"
                              >
                                <Send className="w-3 h-3 mr-1" />
                                Send
                              </Button>
                            </div>
                          </div>
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
                    <Leaf className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-foreground/70">
                      <p className="font-semibold text-foreground mb-1">Fresh & Transparent - Custom Menu Planning</p>
                      <p className="mb-1.5">
                        <strong>Weekly planning with your chef:</strong> Together, you create a custom menu that fits your taste and budget. No boring pre-set menus — your chef adapts to your preferences every week.
                      </p>
                      <p>
                        <strong>Grocery bill is on your account:</strong> Your chef shops at local Bali markets with cash you provide. You only pay for the groceries and the chef's time — no hidden taxes, no restaurant markup, no extra fees. Just transparent pricing like everywhere else.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-background border border-primary/10">
                  <div className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-foreground/70">
                      <p className="font-semibold text-foreground mb-3">Complete Done-For-You Service</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <ShoppingBag className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Buys All Groceries</p>
                            <p className="text-foreground/60">Shops local Bali markets for freshest ingredients with your budget</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Flame className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Prepares All Food</p>
                            <p className="text-foreground/60">Plans menu, cooks every meal, handles all meal prep & cooking</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Wine className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Serves & Presents</p>
                            <p className="text-foreground/60">Beautiful plating and professional food service at your table</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground">Complete Cleanup</p>
                            <p className="text-foreground/60">Full kitchen cleanup, dishes, and all tidying after every service</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-primary font-semibold mt-3 pt-2 border-t border-primary/10">You enjoy vacation — we handle everything.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-900 dark:text-blue-100">
                      <p className="font-semibold mb-1">Chef Insurance</p>
                      <ul className="space-y-0.5">
                        <li>• If chef gets sick → reschedule to another day</li>
                        <li>• If anything happens on our side → full refund or replacement chef</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-900 dark:text-amber-100">
                      <p className="font-semibold mb-2">Weekly Food Planning - Your Advantage</p>
                      <div className="space-y-2">
                        <p>
                          <strong>Why It's So Much Cheaper:</strong> You work directly with your chef to plan the menu each week. There's no middleman, no restaurant markup, no inflated prices. <strong>You only pay for the chef's time</strong> — not bloated food costs.
                        </p>
                        <p>
                          <strong>You Have Complete Control:</strong> Choose premium ingredients for the best quality, or select budget-friendly options — it's entirely your decision. Your private chef adapts to your preferences and budget.
                        </p>
                        <p className="text-amber-900 dark:text-amber-100 font-semibold">
                          That's the real value of having a private chef — customized, transparent, and always working for you.
                        </p>
                      </div>
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
        <span className="hidden sm:inline text-sm font-semibold">
          {result ? (
            <div className="text-left">
              <div className="text-xs opacity-90">{selectedChef.name}</div>
              <div className="font-bold">{formatPrice(result.chefHourly)}/hr</div>
            </div>
          ) : (
            'Help'
          )}
        </span>
      </motion.button>

      {showQuestion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowQuestion(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-lg p-6 max-w-md w-full"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Ask a Question</h3>
              <button
                onClick={() => setShowQuestion(false)}
                className="p-1 hover:bg-foreground/10 rounded transition-colors"
                data-testid="button-close-question"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              About {selectedChef.name} or this quote?
            </p>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Type your question here..."
              className="w-full p-3 border border-primary/20 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none text-sm resize-none h-24 bg-background"
              data-testid="input-question"
            />
            <div className="flex gap-2 mt-4">
              <Button
                onClick={() => setShowQuestion(false)}
                variant="outline"
                className="flex-1"
                data-testid="button-cancel-question"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAskQuestion}
                className="flex-1 bg-primary"
                data-testid="button-send-question"
              >
                <Send className="w-4 h-4 mr-2" />
                Send via WhatsApp
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
