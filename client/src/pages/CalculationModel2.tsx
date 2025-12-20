import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  ArrowLeft, ArrowRight, Calendar, Clock, Users, User, Baby,
  Cake, Heart, Home, Briefcase, Palmtree, UtensilsCrossed,
  Wine, Sparkles, AlertTriangle, CheckCircle2, Info, ChefHat,
  Leaf, Flame, Crown, Star, Copy, Send, MapPin, Phone, Mail,
  ChevronDown
} from 'lucide-react';
import heroImage from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';

const TOTAL_STEPS = 6;

const TIME_OPTIONS = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
];

const EVENT_TYPES = [
  { id: 'birthday', icon: Cake, label: 'Birthday', description: 'Celebrate a special day' },
  { id: 'anniversary', icon: Heart, label: 'Anniversary/Engagement', description: 'Romantic evening for two or more' },
  { id: 'family', icon: Home, label: 'Family Gathering', description: 'Cozy time with those you love' },
  { id: 'corporate', icon: Briefcase, label: 'Corporate Event', description: 'Impress colleagues or clients' },
  { id: 'vacation', icon: Palmtree, label: 'Villa Vacation Experience', description: 'Make your vacation extra special' },
  { id: 'dining', icon: UtensilsCrossed, label: 'Just Good Food', description: 'No special occasion – just delicious food' },
];

const CUISINES = [
  { 
    id: 'indonesian', 
    label: 'Indonesian / Balinese Cuisine',
    description: 'Experience the authentic flavors of Indonesia – from spicy curries to fresh satay skewers. Our local chefs master traditional recipes.',
    dishes: 'Rendang, Nasi Goreng, Sate Lilit, Gado-Gado',
    badge: 'Most popular',
    badgeColor: 'bg-amber-500'
  },
  { 
    id: 'western', 
    label: 'Western / European Cuisine',
    description: 'Classic European dishes prepared by chefs trained in French, Italian, or Nordic cooking.',
    dishes: 'Pasta Carbonara, Grilled Steak, Risotto, Salmon Fillet',
    badge: 'Premium experience',
    badgeColor: 'bg-orange-500'
  },
  { 
    id: 'asian', 
    label: 'Asian Fusion',
    description: 'A modern blend of Thai, Japanese, and Chinese inspiration – fresh, colorful, and full of flavor.',
    dishes: 'Sushi, Pad Thai, Dim Sum, Peking Duck',
    badge: null,
    badgeColor: null
  },
  { 
    id: 'other', 
    label: 'Other / Special Request',
    description: 'Do you have a specific type of food in mind? Mexican, Middle Eastern, or something completely different? Contact us!',
    dishes: 'Custom request',
    badge: null,
    badgeColor: null
  },
];

const COURSE_OPTIONS = [
  {
    id: 3,
    label: '3 Courses',
    structure: 'Appetizer → Main Course → Dessert',
    hours: 3,
    recommendation: 'Perfect for a relaxed evening with the family',
    badge: 'Fastest',
    badgeIcon: Flame,
    color: 'text-emerald-600'
  },
  {
    id: 4,
    label: '4 Courses',
    structure: 'Appetizer → Soup/Light Course → Main Course → Dessert',
    hours: 4,
    recommendation: 'The classic experience – balance between variety and time',
    badge: 'Most popular',
    badgeIcon: Star,
    color: 'text-amber-600'
  },
  {
    id: 5,
    label: '5 Courses',
    structure: 'Amuse-bouche → Appetizer → Intermediate Course → Main Course → Dessert',
    hours: 5,
    recommendation: 'The full restaurant experience at home – for special occasions',
    badge: 'Premium',
    badgeIcon: Crown,
    color: 'text-rose-600'
  },
];

const INGREDIENT_LEVELS = [
  {
    id: 'standard',
    label: 'Standard Ingredients',
    description: 'Fresh, local ingredients of good quality. Perfect balance between price and taste.',
    examples: 'Local chicken, local vegetables, standard oil',
    prices: { 3: 250000, 4: 325000, 5: 400000 },
    icon: '🥉'
  },
  {
    id: 'premium',
    label: 'Premium Ingredients',
    description: 'Selected ingredients – import options, better meat quality, special spices.',
    examples: 'Imported beef, premium fish, special cheeses, extra virgin olive oil',
    prices: { 3: 375000, 4: 475000, 5: 600000 },
    icon: '🥈'
  },
  {
    id: 'luxury',
    label: 'Luxury Ingredients',
    description: 'The best of the best – Wagyu, lobster, truffle, imported specialties.',
    examples: 'Wagyu beef, fresh lobster, truffle oil, imported delicacies',
    prices: { 3: 550000, 4: 700000, 5: 900000 },
    icon: '🥇'
  },
];

const CHEF_HOURLY_RATE = 200000;

interface FormData {
  date: string;
  time: string;
  adults: number;
  children: number;
  toddlers: number;
  eventType: string;
  wantAlcohol: boolean;
  alcoholType: string;
  wantAtmosphere: boolean;
  atmosphereOptions: string[];
  dietaryNotes: string;
  cuisine: string;
  courses: number;
  ingredientLevel: string;
  villaName: string;
  villaAddress: string;
  googleMapsLink: string;
  kitchenType: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  whatsappSame: boolean;
  whatsappNumber: string;
  preferredContact: string;
  specialNotes: string;
}

export default function CalculationModel2() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    date: '',
    time: '',
    adults: 2,
    children: 0,
    toddlers: 0,
    eventType: '',
    wantAlcohol: false,
    alcoholType: '',
    wantAtmosphere: false,
    atmosphereOptions: [],
    dietaryNotes: '',
    cuisine: '',
    courses: 0,
    ingredientLevel: '',
    villaName: '',
    villaAddress: '',
    googleMapsLink: '',
    kitchenType: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    whatsappSame: true,
    whatsappNumber: '',
    preferredContact: 'whatsapp',
    specialNotes: '',
  });

  const updateForm = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const calculatePrice = useMemo(() => {
    if (!formData.courses || !formData.ingredientLevel) return null;

    const ingredientData = INGREDIENT_LEVELS.find(i => i.id === formData.ingredientLevel);
    if (!ingredientData) return null;

    const courseData = COURSE_OPTIONS.find(c => c.id === formData.courses);
    if (!courseData) return null;

    const pricePerAdult = ingredientData.prices[formData.courses as 3 | 4 | 5];
    const pricePerChild = pricePerAdult * 0.5;

    const ingredientTotal = (pricePerAdult * formData.adults) + (pricePerChild * formData.children);
    const chefTime = courseData.hours * CHEF_HOURLY_RATE;
    const total = ingredientTotal + chefTime;

    return {
      pricePerAdult,
      pricePerChild,
      ingredientTotal,
      chefHours: courseData.hours,
      chefTime,
      total,
      deposit: total * 0.5,
      remaining: total * 0.5,
    };
  }, [formData.courses, formData.ingredientLevel, formData.adults, formData.children]);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getDateWarning = () => {
    if (!formData.date) return null;
    const selectedDate = new Date(formData.date);
    const now = new Date();
    const diffDays = Math.ceil((selectedDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { type: 'error', message: 'Cannot select past dates' };
    if (diffDays <= 7) return { type: 'warning', message: 'Note: Bookings within 7 days may have limited chef availability' };
    return null;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return true;
      case 2: return formData.date && formData.time && formData.adults >= 1;
      case 3: return formData.eventType !== '';
      case 4: return formData.cuisine !== '';
      case 5: return formData.courses > 0 && formData.ingredientLevel !== '';
      case 6: return formData.villaName && formData.contactName && formData.contactEmail && formData.contactPhone;
      default: return false;
    }
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS && canProceed()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getChefArrivalTime = () => {
    if (!formData.time) return null;
    const [hours, minutes] = formData.time.split(':').map(Number);
    let arrivalHours = hours - 1;
    let arrivalMinutes = minutes + 30;
    if (arrivalMinutes >= 60) {
      arrivalMinutes -= 60;
      arrivalHours += 1;
    }
    if (arrivalHours < 0) arrivalHours = 0;
    return `${arrivalHours.toString().padStart(2, '0')}:${arrivalMinutes.toString().padStart(2, '0')}`;
  };

  const dateWarning = getDateWarning();

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <button 
              onClick={() => setLocation('/')}
              className="text-sm text-foreground/60 hover:text-primary flex items-center gap-1"
              data-testid="button-back-home"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <span className="text-sm font-medium">Step {step} of {TOTAL_STEPS}</span>
          </div>
          <Progress value={(step / TOTAL_STEPS) * 100} className="h-2" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center space-y-8 -mt-8"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                <div className="relative z-10 px-6 py-16 md:py-24 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <ChefHat className="w-5 h-5 text-white" />
                    <span className="text-sm font-semibold text-white">Price Calculator</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold font-serif text-white" data-testid="text-welcome-headline">
                    Calculate your perfect chef experience
                  </h1>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto">
                    Get an accurate price estimate in under 2 minutes
                  </p>
                  
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="pt-4"
                  >
                    <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
                  </motion.div>
                </div>
              </div>

              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6 md:p-8 text-left">
                  <p className="text-foreground/80 leading-relaxed">
                    With MyChef you get a professional chef to your villa. Our price calculator gives you an 
                    accurate price estimate immediately, so you know exactly what to expect – no surprises, 
                    only transparency and quality.
                  </p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="space-y-1">
                      <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      <p className="text-xs font-medium">Transparent</p>
                    </div>
                    <div className="space-y-1">
                      <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      <p className="text-xs font-medium">Flexible</p>
                    </div>
                    <div className="space-y-1">
                      <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      <p className="text-xs font-medium">Simple</p>
                    </div>
                    <div className="space-y-1">
                      <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                      <p className="text-xs font-medium">Precise</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                size="lg"
                onClick={nextStep}
                className="px-8 py-6 text-lg"
                data-testid="button-start-calculator"
              >
                Start your price calculation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">When and Time</h2>
                <p className="text-foreground/60">Tell us when you need your chef</p>
              </div>

              <Card>
                <CardContent className="p-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Choose Date</h3>
                    </div>
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => updateForm({ date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none bg-background"
                      data-testid="input-date"
                    />
                    {dateWarning && (
                      <div className={`mt-2 p-3 rounded-lg flex items-center gap-2 text-sm ${
                        dateWarning.type === 'error' 
                          ? 'bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300' 
                          : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300'
                      }`}>
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        {dateWarning.message}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">When should the food be ready?</h3>
                    </div>
                    <Select value={formData.time} onValueChange={(value) => updateForm({ time: value })}>
                      <SelectTrigger className="w-full" data-testid="select-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_OPTIONS.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="mt-2 text-sm text-foreground/60">
                      This is the time when you and your guests will eat the first course.
                    </p>
                    {formData.time && (
                      <p className="mt-1 text-sm text-primary font-medium">
                        The chef arrives at approximately {getChefArrivalTime()} to prepare
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">How many guests?</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-foreground/60" />
                          <div>
                            <p className="font-medium">Adults</p>
                            <p className="text-xs text-foreground/60">11+ years</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateForm({ adults: Math.max(1, formData.adults - 1) })}
                            disabled={formData.adults <= 1}
                            data-testid="button-adults-minus"
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-semibold" data-testid="text-adults-count">{formData.adults}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateForm({ adults: Math.min(20, formData.adults + 1) })}
                            disabled={formData.adults >= 20}
                            data-testid="button-adults-plus"
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-foreground/60" />
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">Children</p>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-foreground/40" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Children 5-10 years: Half price</p>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                            <p className="text-xs text-foreground/60">5-10 years (half price)</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateForm({ children: Math.max(0, formData.children - 1) })}
                            disabled={formData.children <= 0}
                            data-testid="button-children-minus"
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-semibold" data-testid="text-children-count">{formData.children}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateForm({ children: Math.min(10, formData.children + 1) })}
                            disabled={formData.children >= 10}
                            data-testid="button-children-plus"
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Baby className="w-5 h-5 text-foreground/60" />
                          <div>
                            <p className="font-medium">Toddlers</p>
                            <p className="text-xs text-emerald-600 font-medium">0-4 years - FREE</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateForm({ toddlers: Math.max(0, formData.toddlers - 1) })}
                            disabled={formData.toddlers <= 0}
                            data-testid="button-toddlers-minus"
                          >
                            -
                          </Button>
                          <span className="w-8 text-center font-semibold" data-testid="text-toddlers-count">{formData.toddlers}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateForm({ toddlers: Math.min(10, formData.toddlers + 1) })}
                            disabled={formData.toddlers >= 10}
                            data-testid="button-toddlers-plus"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>

                    {(formData.adults + formData.children) > 15 && (
                      <div className="mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 flex items-center gap-2 text-sm">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                        For large groups we recommend contacting us directly for the best experience
                      </div>
                    )}

                    <div className="mt-4 flex items-center gap-2 justify-center">
                      {[...Array(Math.min(formData.adults, 10))].map((_, i) => (
                        <User key={`adult-${i}`} className="w-5 h-5 text-primary" />
                      ))}
                      {formData.adults > 10 && <span className="text-sm text-primary">+{formData.adults - 10}</span>}
                      {[...Array(Math.min(formData.children, 5))].map((_, i) => (
                        <User key={`child-${i}`} className="w-4 h-4 text-primary/70" />
                      ))}
                      {formData.children > 5 && <span className="text-sm text-primary/70">+{formData.children - 5}</span>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">About the Event</h2>
                <p className="text-foreground/60">Help us understand your occasion</p>
              </div>

              <Card>
                <CardContent className="p-5 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">What type of event?</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {EVENT_TYPES.map((event) => (
                        <button
                          key={event.id}
                          onClick={() => updateForm({ eventType: event.id })}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            formData.eventType === event.id
                              ? 'border-primary bg-primary/10'
                              : 'border-primary/20 hover:border-primary/40'
                          }`}
                          data-testid={`button-event-${event.id}`}
                        >
                          <event.icon className={`w-6 h-6 mb-2 ${formData.eventType === event.id ? 'text-primary' : 'text-foreground/60'}`} />
                          <p className="font-medium text-sm">{event.label}</p>
                          <p className="text-xs text-foreground/60 mt-1">{event.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Extra Wishes (Optional)</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="alcohol"
                            checked={formData.wantAlcohol}
                            onCheckedChange={(checked) => updateForm({ wantAlcohol: !!checked })}
                            data-testid="checkbox-alcohol"
                          />
                          <label htmlFor="alcohol" className="flex items-center gap-2 cursor-pointer">
                            <Wine className="w-5 h-5 text-foreground/60" />
                            <span className="font-medium">Yes, help us with wine or beer pairing</span>
                          </label>
                        </div>
                        {formData.wantAlcohol && (
                          <div className="mt-3 ml-8">
                            <Select value={formData.alcoholType} onValueChange={(value) => updateForm({ alcoholType: value })}>
                              <SelectTrigger data-testid="select-alcohol-type">
                                <SelectValue placeholder="Select pairing type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="wine">Wine pairing</SelectItem>
                                <SelectItem value="beer">Beer pairing</SelectItem>
                                <SelectItem value="mixed">Mixed pairing</SelectItem>
                              </SelectContent>
                            </Select>
                            <p className="text-xs text-foreground/60 mt-2">
                              Alcohol prices are added on top – we purchase at cost price + 10% service fee
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="p-4 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="atmosphere"
                            checked={formData.wantAtmosphere}
                            onCheckedChange={(checked) => updateForm({ wantAtmosphere: !!checked })}
                            data-testid="checkbox-atmosphere"
                          />
                          <label htmlFor="atmosphere" className="flex items-center gap-2 cursor-pointer">
                            <Sparkles className="w-5 h-5 text-foreground/60" />
                            <span className="font-medium">Yes, we would like help with atmosphere</span>
                          </label>
                        </div>
                        {formData.wantAtmosphere && (
                          <div className="mt-3 ml-8 space-y-2">
                            {['Candles and table decorations', 'Music recommendations', 'Flower arrangements'].map((opt) => (
                              <div key={opt} className="flex items-center gap-2">
                                <Checkbox
                                  id={opt}
                                  checked={formData.atmosphereOptions.includes(opt)}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      updateForm({ atmosphereOptions: [...formData.atmosphereOptions, opt] });
                                    } else {
                                      updateForm({ atmosphereOptions: formData.atmosphereOptions.filter(o => o !== opt) });
                                    }
                                  }}
                                />
                                <label htmlFor={opt} className="text-sm cursor-pointer">{opt}</label>
                              </div>
                            ))}
                            <p className="text-xs text-foreground/60 mt-2">
                              These elements can be purchased separately. Prices are estimated separately.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Dietary Restrictions or Allergies?</h3>
                    <Textarea
                      value={formData.dietaryNotes}
                      onChange={(e) => updateForm({ dietaryNotes: e.target.value })}
                      placeholder="E.g.: 'One guest is vegetarian', 'Nut allergy', 'No pork', etc."
                      className="min-h-[100px]"
                      data-testid="textarea-dietary"
                    />
                    <p className="text-xs text-foreground/60 mt-2">
                      The chef will take full account of this and adapt the menu.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">Which cuisine speaks to you?</h2>
                <p className="text-foreground/60">Choose your preferred style of cooking</p>
              </div>

              <div className="grid gap-4">
                {CUISINES.map((cuisine) => (
                  <Card
                    key={cuisine.id}
                    className={`cursor-pointer transition-all ${
                      formData.cuisine === cuisine.id
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'hover:border-primary/40'
                    }`}
                    onClick={() => updateForm({ cuisine: cuisine.id })}
                    data-testid={`card-cuisine-${cuisine.id}`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{cuisine.label}</h3>
                            {cuisine.badge && (
                              <span className={`px-2 py-0.5 text-xs text-white rounded-full ${cuisine.badgeColor}`}>
                                {cuisine.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-foreground/70 mb-2">{cuisine.description}</p>
                          <p className="text-xs text-foreground/50">
                            Popular: {cuisine.dishes}
                          </p>
                        </div>
                        {formData.cuisine === cuisine.id && (
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">How many courses do you want?</h2>
                <p className="text-foreground/60 max-w-xl mx-auto">
                  The more courses, the longer the chef needs to be with you, and the more food is included.
                </p>
              </div>

              <div className="grid gap-4">
                {COURSE_OPTIONS.map((course) => (
                  <Card
                    key={course.id}
                    className={`cursor-pointer transition-all ${
                      formData.courses === course.id
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'hover:border-primary/40'
                    }`}
                    onClick={() => updateForm({ courses: course.id })}
                    data-testid={`card-course-${course.id}`}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className={`font-bold text-xl ${course.color}`}>{course.label}</h3>
                            <span className="px-2 py-0.5 text-xs bg-muted rounded-full flex items-center gap-1">
                              <course.badgeIcon className="w-3 h-3" />
                              {course.badge}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/70 mb-1">{course.structure}</p>
                          <p className="text-xs text-foreground/50 mb-2">Chef time: Approx. {course.hours} hours</p>
                          <p className="text-sm italic text-foreground/60">{course.recommendation}</p>
                        </div>
                        {formData.courses === course.id && (
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {formData.courses > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-center">Now choose the quality of ingredients:</h3>
                  
                  <div className="grid gap-4">
                    {INGREDIENT_LEVELS.map((level) => (
                      <Card
                        key={level.id}
                        className={`cursor-pointer transition-all ${
                          formData.ingredientLevel === level.id
                            ? 'border-primary ring-2 ring-primary/20'
                            : 'hover:border-primary/40'
                        }`}
                        onClick={() => updateForm({ ingredientLevel: level.id })}
                        data-testid={`card-ingredient-${level.id}`}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">{level.icon}</span>
                                <h3 className="font-semibold">{level.label}</h3>
                              </div>
                              <p className="text-sm text-foreground/70 mb-1">{level.description}</p>
                              <p className="text-xs text-foreground/50 mb-2">Examples: {level.examples}</p>
                              <p className="text-lg font-bold text-primary">
                                {formatPrice(level.prices[formData.courses as 3 | 4 | 5])} per adult
                              </p>
                            </div>
                            {formData.ingredientLevel === level.id && (
                              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {calculatePrice && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      Your Current Calculation
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ingredients ({formData.adults} adults × {formatPrice(calculatePrice.pricePerAdult)})</span>
                        <span>{formatPrice(calculatePrice.pricePerAdult * formData.adults)}</span>
                      </div>
                      {formData.children > 0 && (
                        <div className="flex justify-between">
                          <span>Children ({formData.children} × {formatPrice(calculatePrice.pricePerChild)})</span>
                          <span>{formatPrice(calculatePrice.pricePerChild * formData.children)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Chef time ({calculatePrice.chefHours} hours × {formatPrice(CHEF_HOURLY_RATE)})</span>
                        <span>{formatPrice(calculatePrice.chefTime)}</span>
                      </div>
                      <div className="flex justify-between text-foreground/60">
                        <span>Consultation + shopping</span>
                        <span>Included</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
                        <span>Total Estimate</span>
                        <span className="text-primary">{formatPrice(calculatePrice.total)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">Almost done!</h2>
                <p className="text-foreground/60">Now we just need to know where we're going</p>
              </div>

              <Card>
                <CardContent className="p-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Villa / Location Information</h3>
                    </div>
                    <div className="space-y-4">
                      <Input
                        value={formData.villaName}
                        onChange={(e) => updateForm({ villaName: e.target.value })}
                        placeholder="Villa name (e.g. Villa Sunset, Canggu)"
                        data-testid="input-villa-name"
                      />
                      <Textarea
                        value={formData.villaAddress}
                        onChange={(e) => updateForm({ villaAddress: e.target.value })}
                        placeholder="Full address (incl. area, landmarks, street and number)"
                        data-testid="textarea-villa-address"
                      />
                      <Input
                        value={formData.googleMapsLink}
                        onChange={(e) => updateForm({ googleMapsLink: e.target.value })}
                        placeholder="Google Maps link (optional)"
                        data-testid="input-google-maps"
                      />
                      <Select value={formData.kitchenType} onValueChange={(value) => updateForm({ kitchenType: value })}>
                        <SelectTrigger data-testid="select-kitchen-type">
                          <SelectValue placeholder="Kitchen type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="modern">Modern kitchen with all facilities</SelectItem>
                          <SelectItem value="basic">Basic kitchen (gas stove, basic equipment)</SelectItem>
                          <SelectItem value="limited">Limited kitchen (may require brought equipment)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">Contact Person</h3>
                    </div>
                    <div className="space-y-4">
                      <Input
                        value={formData.contactName}
                        onChange={(e) => updateForm({ contactName: e.target.value })}
                        placeholder="Full name"
                        data-testid="input-contact-name"
                      />
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-foreground/40" />
                        <Input
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) => updateForm({ contactEmail: e.target.value })}
                          placeholder="Email"
                          className="flex-1"
                          data-testid="input-contact-email"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-foreground/40" />
                        <Input
                          type="tel"
                          value={formData.contactPhone}
                          onChange={(e) => updateForm({ contactPhone: e.target.value })}
                          placeholder="Phone (with country code)"
                          className="flex-1"
                          data-testid="input-contact-phone"
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id="whatsapp-same"
                          checked={formData.whatsappSame}
                          onCheckedChange={(checked) => updateForm({ whatsappSame: !!checked })}
                        />
                        <label htmlFor="whatsapp-same" className="text-sm cursor-pointer">
                          WhatsApp number is the same as phone
                        </label>
                      </div>
                      {!formData.whatsappSame && (
                        <Input
                          type="tel"
                          value={formData.whatsappNumber}
                          onChange={(e) => updateForm({ whatsappNumber: e.target.value })}
                          placeholder="WhatsApp number"
                          data-testid="input-whatsapp"
                        />
                      )}
                      <Select value={formData.preferredContact} onValueChange={(value) => updateForm({ preferredContact: value })}>
                        <SelectTrigger data-testid="select-preferred-contact">
                          <SelectValue placeholder="Preferred contact method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Phone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-3">Special Notes (Optional)</h3>
                    <Textarea
                      value={formData.specialNotes}
                      onChange={(e) => updateForm({ specialNotes: e.target.value })}
                      placeholder="Anything the chef should know? Parking, access code, special wishes, etc."
                      data-testid="textarea-special-notes"
                    />
                  </div>
                </CardContent>
              </Card>

              {calculatePrice && (
                <Card className="border-primary">
                  <CardContent className="p-5 space-y-4">
                    <h3 className="font-bold text-xl text-center">Your Total Price</h3>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">Guests:</p>
                        <div className="flex justify-between text-foreground/80">
                          <span>{formData.adults} adults × {formatPrice(calculatePrice.pricePerAdult)}</span>
                          <span>{formatPrice(calculatePrice.pricePerAdult * formData.adults)}</span>
                        </div>
                        {formData.children > 0 && (
                          <div className="flex justify-between text-foreground/80">
                            <span>{formData.children} children (5-10 years) × {formatPrice(calculatePrice.pricePerChild)}</span>
                            <span>{formatPrice(calculatePrice.pricePerChild * formData.children)}</span>
                          </div>
                        )}
                        {formData.toddlers > 0 && (
                          <div className="flex justify-between text-foreground/60">
                            <span>{formData.toddlers} toddlers (0-4 years)</span>
                            <span>FREE</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="font-semibold mb-1">Chef Service:</p>
                        <div className="flex justify-between text-foreground/80">
                          <span>{calculatePrice.chefHours} hours preparation</span>
                          <span>{formatPrice(calculatePrice.chefTime)}</span>
                        </div>
                        <div className="flex justify-between text-foreground/60">
                          <span>Consultation + shopping</span>
                          <span>Included</span>
                        </div>
                        <div className="flex justify-between text-foreground/60">
                          <span>Cleanup</span>
                          <span>Included</span>
                        </div>
                      </div>

                      <div className="border-t pt-3 space-y-2">
                        <div className="flex justify-between font-bold text-lg">
                          <span>SUBTOTAL</span>
                          <span>{formatPrice(calculatePrice.total)}</span>
                        </div>
                        <div className="flex justify-between text-primary font-semibold">
                          <span>Deposit (50%)</span>
                          <span>{formatPrice(calculatePrice.deposit)}</span>
                        </div>
                        <p className="text-xs text-foreground/60">Pay now to confirm booking</p>
                        <div className="flex justify-between">
                          <span>Remaining Balance</span>
                          <span>{formatPrice(calculatePrice.remaining)}</span>
                        </div>
                        <p className="text-xs text-foreground/60">Pay to the chef after the event</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium">Included in the Price:</span>
                      </div>
                      <ul className="text-xs text-foreground/70 space-y-1 ml-6">
                        <li>All ingredients ({formData.ingredientLevel} level)</li>
                        <li>Professional chef for {calculatePrice.chefHours} hours</li>
                        <li>Consultation and menu customization</li>
                        <li>Purchase of all raw materials</li>
                        <li>Serving and presentation</li>
                        <li>Cleanup and dishwashing</li>
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="w-full py-6"
                      onClick={() => setLocation('/contact/confirm?source=calculator2')}
                      data-testid="button-confirm-booking"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Confirm Booking & Pay Deposit ({formatPrice(calculatePrice.deposit)})
                    </Button>

                    <p className="text-xs text-center text-foreground/60">
                      You will receive a confirmation email within 24 hours. 
                      The chef will contact you 48 hours before to confirm all details.
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t p-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep} data-testid="button-prev-step">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            ) : (
              <div />
            )}
            
            {step < TOTAL_STEPS && (
              <Button 
                onClick={nextStep} 
                disabled={!canProceed()}
                data-testid="button-next-step"
              >
                {step === 1 ? 'Start' : 'Next'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
