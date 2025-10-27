import { useState } from 'react';
import { Cake, Umbrella, CheckCircle2, Home, PartyPopper, Users, Heart, Briefcase, ChefHat, MoreHorizontal, ArrowLeft, MapPin, Wine, Flame, Package, Music, UserCheck, Utensils, Pizza, Fish, Croissant, Leaf, Apple, UtensilsCrossed, Soup, Egg, Calendar as CalendarIcon, Sun, Moon, Send, Check, Globe, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { UN_RECOGNIZED_COUNTRIES } from '@shared/countries';
import { useLocation } from 'wouter';

type ServiceType = 'single' | 'multiple' | null;
type OccasionType = 'birthday' | 'family-reunion' | 'bachelor-bachelorette' | 'friends-gathering' | 'romantic-night' | 'corporate' | 'foodie-adventure' | 'other' | null;
type GuestCountType = '2' | '3-6' | '7-12' | '13+' | 'exact' | null;
type BudgetRangeSingleType = 'under-1m' | '1m-2m' | '2m-3m' | '3m-5m' | 'above-5m' | null;
type NumberOfCoursesType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | null;
type AdditionalServiceType = 'food-only' | 'bartender' | 'grilling' | 'equipment-rental' | 'music-speakers' | 'wait-staff';
type CuisineType = 'indonesian' | 'thai' | 'japanese' | 'chinese' | 'indian' | 'asian' | 'other' | null;
type DateModeType = 'single' | 'multiple';
type TimeOfDayType = 'day' | 'night' | null;

// Multiple service types
type RecurringServiceType = 'meal-prep' | 'weekly-shifts' | 'extended-stay' | 'live-in' | 'other' | null;
type ServiceDurationType = '1-week' | '2-weeks' | '1-month' | '2-3-months' | '6-months' | '1-year' | 'ongoing' | null;
type BudgetRangeType = 'under-5m' | '5m-10m' | '10m-20m' | '20m-30m' | 'above-30m' | null;
type DietaryFocusType = 'fitness' | 'weight-loss' | 'keto' | 'vegan' | 'halal' | 'diabetic' | 'family-meals' | 'other' | null;

interface AddressData {
  venueName: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

// Import 195 UN-recognized countries from centralized source
// Sort countries with Indonesia always at the top
const countries = [
  'Indonesia',
  ...UN_RECOGNIZED_COUNTRIES.filter(country => country !== 'Indonesia')
];

const guestCountOptions = [
  { id: '2', label: '2 people' },
  { id: '3-6', label: '3 to 6 people' },
  { id: '7-12', label: '7 to 12 people' },
  { id: '13+', label: '13+ people' },
  { id: 'exact', label: 'I know the exact number' },
] as const;

const budgetRangeSingleOptions = [
  { id: 'under-1m', label: 'Under 1 million IDR', description: 'Simple home-style meal' },
  { id: '1m-2m', label: '1-2 million IDR', description: 'Quality dining experience' },
  { id: '2m-3m', label: '2-3 million IDR', description: 'Premium chef service' },
  { id: '3m-5m', label: '3-5 million IDR', description: 'Luxury culinary experience' },
  { id: 'above-5m', label: 'Above 5 million IDR', description: 'Exclusive fine dining' },
] as const;

const numberOfCoursesOptions = [
  { id: '1', label: '1 Course', description: 'Main course only' },
  { id: '2', label: '2 Courses', description: 'Starter + Main' },
  { id: '3', label: '3 Courses', description: 'Starter + Main + Dessert' },
  { id: '4', label: '4 Courses', description: 'Full dining experience' },
  { id: '5', label: '5 Courses', description: 'Premium multi-course meal' },
  { id: '6', label: '6 Courses', description: 'Luxury tasting menu' },
  { id: '7', label: '7 Courses', description: 'Ultimate fine dining' },
] as const;

const additionalServices = [
  { id: 'food-only', label: 'Food only (Chef service)', icon: ChefHat, description: 'Professional chef prepares your meal' },
  { id: 'bartender', label: 'Bartender service', icon: Wine, description: 'Professional bartender for drinks' },
  { id: 'grilling', label: 'BBQ & Grilling', icon: Flame, description: 'Live BBQ grilling experience' },
  { id: 'equipment-rental', label: 'Equipment rental', icon: Package, description: 'Tables, chairs, decorations' },
  { id: 'music-speakers', label: 'Music & Sound system', icon: Music, description: 'DJ or sound equipment' },
  { id: 'wait-staff', label: 'Wait staff & Servers', icon: UserCheck, description: 'Professional service staff' },
] as const;

// Top 6 most important cuisines in Asia
const cuisineOptions = [
  { id: 'indonesian', label: 'Indonesian', icon: Utensils },
  { id: 'thai', label: 'Thai', icon: Flame },
  { id: 'japanese', label: 'Japanese', icon: UtensilsCrossed },
  { id: 'chinese', label: 'Chinese', icon: Utensils },
  { id: 'indian', label: 'Indian', icon: Apple },
  { id: 'asian', label: 'Asian Fusion', icon: Soup },
] as const;

const occasions = [
  { id: 'birthday', label: 'Birthday', icon: Cake },
  { id: 'family-reunion', label: 'Family reunion', icon: Home },
  { id: 'bachelor-bachelorette', label: 'Bachelor/Bachelorette', icon: PartyPopper },
  { id: 'friends-gathering', label: 'Friends gathering', icon: Users },
  { id: 'romantic-night', label: 'Romantic night', icon: Heart },
  { id: 'corporate', label: 'Corporate', icon: Briefcase },
  { id: 'foodie-adventure', label: 'Foodie adventure', icon: ChefHat },
  { id: 'other', label: 'Other', icon: MoreHorizontal },
] as const;

// For multiple/recurring services
const recurringServiceOptions = [
  { id: 'meal-prep', label: 'Weekly Meal Prep', description: 'Chef prepares healthy meals for the week' },
  { id: 'weekly-shifts', label: 'Regular Chef Shifts', description: '2-3 days per week cooking service' },
  { id: 'extended-stay', label: 'Extended Stay Chef', description: 'Chef for a week or vacation period' },
  { id: 'live-in', label: 'Live-in Personal Chef', description: 'Full-time chef living on-site' },
  { id: 'other', label: 'Other Arrangement', description: 'Custom recurring service' },
] as const;

const serviceDurationOptions = [
  { id: '1-week', label: '1 Week' },
  { id: '2-weeks', label: '2 Weeks' },
  { id: '1-month', label: '1 Month' },
  { id: '2-3-months', label: '2-3 Months' },
  { id: '6-months', label: '6 Months' },
  { id: '1-year', label: '1 Year' },
  { id: 'ongoing', label: 'Ongoing / Long-term' },
] as const;

const budgetRangeOptions = [
  { id: 'under-5m', label: 'Under 5 million IDR/month' },
  { id: '5m-10m', label: '5-10 million IDR/month' },
  { id: '10m-20m', label: '10-20 million IDR/month' },
  { id: '20m-30m', label: '20-30 million IDR/month' },
  { id: 'above-30m', label: 'Above 30 million IDR/month' },
] as const;

const dietaryFocusOptions = [
  { id: 'fitness', label: 'Fitness & Sports Nutrition', icon: Users },
  { id: 'weight-loss', label: 'Weight Loss / Healthy Eating', icon: Apple },
  { id: 'keto', label: 'Keto / Low-Carb', icon: Utensils },
  { id: 'vegan', label: 'Vegan / Vegetarian', icon: Leaf },
  { id: 'halal', label: 'Halal', icon: ChefHat },
  { id: 'diabetic', label: 'Diabetic-Friendly', icon: Heart },
  { id: 'family-meals', label: 'Family Meals / Home Cooking', icon: Home },
  { id: 'other', label: 'Other', icon: MoreHorizontal },
] as const;

export default function QuoteFunnel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [occasion, setOccasion] = useState<OccasionType>(null);
  const [address, setAddress] = useState<AddressData>({
    venueName: '',
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: 'Indonesia',
  });
  const [addressSkipped, setAddressSkipped] = useState(false);
  const [guestCount, setGuestCount] = useState<GuestCountType>(null);
  const [customGuestCount, setCustomGuestCount] = useState('');
  const [budgetRangeSingle, setBudgetRangeSingle] = useState<BudgetRangeSingleType>(null);
  const [numberOfCourses, setNumberOfCourses] = useState<NumberOfCoursesType>(null);
  const [selectedServices, setSelectedServices] = useState<Set<AdditionalServiceType>>(new Set(['food-only'] as AdditionalServiceType[]));
  const [cuisine, setCuisine] = useState<CuisineType>(null);
  const [otherCuisineText, setOtherCuisineText] = useState('');
  const [dateMode, setDateMode] = useState<DateModeType>('single');
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDayType>(null);
  const [foodPreferences, setFoodPreferences] = useState('');
  const [moodDescription, setMoodDescription] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Multiple service state variables
  const [recurringServiceType, setRecurringServiceType] = useState<RecurringServiceType>(null);
  const [otherRecurringServiceText, setOtherRecurringServiceText] = useState('');
  const [serviceDuration, setServiceDuration] = useState<ServiceDurationType>(null);
  const [peopleCount, setPeopleCount] = useState('');
  const [dietaryFocus, setDietaryFocus] = useState<DietaryFocusType>(null);
  const [otherDietaryText, setOtherDietaryText] = useState('');
  const [chefQualities, setChefQualities] = useState('');
  const [budgetRange, setBudgetRange] = useState<BudgetRangeType>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const submitMutation = useMutation({
    mutationFn: async () => {
      let payload: any = {
        serviceType: serviceType!,
        venueName: addressSkipped ? null : address.venueName,
        street: addressSkipped ? null : address.street,
        city: addressSkipped ? null : address.city,
        region: addressSkipped ? null : address.region,
        postalCode: addressSkipped ? null : (address.postalCode || null),
        country: addressSkipped ? null : address.country,
        addressSkipped,
        additionalNotes: additionalNotes || null,
      };

      if (serviceType === 'single') {
        // Single service flow data
        payload = {
          ...payload,
          occasion: occasion!,
          guestCount: guestCount === 'exact' ? customGuestCount : guestCount!,
          budgetRangeSingle: budgetRangeSingle!,
          numberOfCourses: numberOfCourses!,
          additionalServices: Array.from(selectedServices),
          cuisine: cuisine === 'other' ? otherCuisineText : cuisine!,
          dateMode,
          selectedDates: selectedDates.map(d => d.toISOString()),
          timeOfDay: timeOfDay!,
          foodPreferences: foodPreferences || null,
          moodDescription: moodDescription || null,
        };
      } else if (serviceType === 'multiple') {
        // Multiple service flow data
        payload = {
          ...payload,
          recurringServiceType: recurringServiceType === 'other' ? otherRecurringServiceText : recurringServiceType!,
          serviceDuration: serviceDuration!,
          peopleCount: peopleCount,
          dietaryFocus: dietaryFocus === 'other' ? otherDietaryText : dietaryFocus!,
          chefQualities: chefQualities,
          budgetRange: budgetRange!,
          startDate: startDate!.toISOString(),
        };
      }
      
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit quote');
      }
      
      return await response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Quote submitted successfully!",
        description: "We'll get back to you soon with a personalized offer.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const toggleService = (serviceId: AdditionalServiceType) => {
    setSelectedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        // Don't allow deselecting if it's the last item
        if (newSet.size > 1) {
          newSet.delete(serviceId);
        }
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const getTotalSteps = () => {
    if (serviceType === 'single') return 11; // Added budget and courses steps
    if (serviceType === 'multiple') return 10;
    return 1;
  };

  const handleContinue = () => {
    if (currentStep === 1 && serviceType) {
      setCurrentStep(2);
    } else if (serviceType === 'single') {
      // Single service flow (11-step flow with budget and courses)
      if (currentStep === 2 && occasion) {
        setCurrentStep(3);
      } else if (currentStep === 3 && (isAddressValid() || addressSkipped)) {
        setCurrentStep(4);
      } else if (currentStep === 4 && guestCount && (guestCount !== 'exact' || (customGuestCount && parseInt(customGuestCount) > 0))) {
        setCurrentStep(5);
      } else if (currentStep === 5 && budgetRangeSingle) {
        setCurrentStep(6);
      } else if (currentStep === 6 && numberOfCourses) {
        setCurrentStep(7);
      } else if (currentStep === 7 && selectedServices.size > 0) {
        setCurrentStep(8);
      } else if (currentStep === 8 && cuisine) {
        if (cuisine === 'other' && otherCuisineText.trim() === '') return;
        setCurrentStep(9);
      } else if (currentStep === 9 && selectedDates.length > 0) {
        setCurrentStep(10);
      } else if (currentStep === 10 && timeOfDay) {
        setCurrentStep(11);
      }
    } else if (serviceType === 'multiple') {
      // Multiple service flow (new 10-step flow)
      if (currentStep === 2 && recurringServiceType) {
        if (recurringServiceType === 'other' && otherRecurringServiceText.trim() === '') return;
        setCurrentStep(3);
      } else if (currentStep === 3 && serviceDuration) {
        setCurrentStep(4);
      } else if (currentStep === 4 && (isAddressValid() || addressSkipped)) {
        setCurrentStep(5);
      } else if (currentStep === 5 && peopleCount.trim() !== '') {
        setCurrentStep(6);
      } else if (currentStep === 6 && dietaryFocus) {
        if (dietaryFocus === 'other' && otherDietaryText.trim() === '') return;
        setCurrentStep(7);
      } else if (currentStep === 7 && chefQualities.trim() !== '') {
        setCurrentStep(8);
      } else if (currentStep === 8 && budgetRange) {
        setCurrentStep(9);
      } else if (currentStep === 9 && startDate) {
        setCurrentStep(10);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAddressValid = () => {
    return address.venueName.trim() !== '' &&
           address.street.trim() !== '' && 
           address.city.trim() !== '' && 
           address.region.trim() !== '';
  };

  const canContinue = () => {
    if (currentStep === 1) return !!serviceType;
    
    if (serviceType === 'single') {
      // Single service flow validation (11 steps)
      if (currentStep === 2) return !!occasion;
      if (currentStep === 3) return isAddressValid() || addressSkipped;
      if (currentStep === 4) {
        if (!guestCount) return false;
        if (guestCount === 'exact') return customGuestCount && parseInt(customGuestCount) > 0;
        return true;
      }
      if (currentStep === 5) return !!budgetRangeSingle;
      if (currentStep === 6) return !!numberOfCourses;
      if (currentStep === 7) return selectedServices.size > 0;
      if (currentStep === 8) {
        if (!cuisine) return false;
        if (cuisine === 'other') return otherCuisineText.trim() !== '';
        return true;
      }
      if (currentStep === 9) return selectedDates.length > 0;
      if (currentStep === 10) return !!timeOfDay;
    } else if (serviceType === 'multiple') {
      // Multiple service flow validation
      if (currentStep === 2) {
        if (!recurringServiceType) return false;
        if (recurringServiceType === 'other') return otherRecurringServiceText.trim() !== '';
        return true;
      }
      if (currentStep === 3) return !!serviceDuration;
      if (currentStep === 4) return isAddressValid() || addressSkipped;
      if (currentStep === 5) return peopleCount.trim() !== '';
      if (currentStep === 6) {
        if (!dietaryFocus) return false;
        if (dietaryFocus === 'other') return otherDietaryText.trim() !== '';
        return true;
      }
      if (currentStep === 7) return chefQualities.trim() !== '';
      if (currentStep === 8) return !!budgetRange;
      if (currentStep === 9) return !!startDate;
    }
    
    return false;
  };

  const updateAddress = (field: keyof AddressData, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Trust Signals Banner with Progress */}
      <div className="border-b bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>QUOTES IN 20 MIN</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>NO COMMITMENT</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLocation('/')}
              className="flex-shrink-0"
              data-testid="button-exit-quote"
              aria-label="Exit to home page"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Progress Indicator */}
        {!isSubmitted && serviceType && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Step {currentStep} of {getTotalSteps()}</span>
                <span className="font-medium">{Math.round((currentStep / getTotalSteps()) * 100)}% Complete</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${(currentStep / getTotalSteps()) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-3xl">
          {/* Step 1: Service Type */}
          {currentStep === 1 && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What type of chef service do you need?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Define your event to see chefs, menus and prices. This will take less than 2 minutes!
                </p>
              </div>

              {/* Service Options */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Single Service Option */}
                <Card
                  className={`
                    cursor-pointer transition-all overflow-visible
                    hover-elevate active-elevate-2
                    ${serviceType === 'single' 
                      ? 'border-2 border-primary bg-primary/5' 
                      : 'border-2'
                    }
                  `}
                  onClick={() => setServiceType('single')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setServiceType('single');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  data-testid="option-single-service"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <Cake className="w-8 h-8 flex-shrink-0" />
                      <div 
                        className={`
                          w-6 h-6 flex-shrink-0 rounded-full border-2 transition-all
                          ${serviceType === 'single'
                            ? 'border-primary bg-primary'
                            : 'border-muted-foreground/30'
                          }
                        `}
                      >
                        {serviceType === 'single' && (
                          <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Single service</h3>
                    <p className="text-muted-foreground">
                      A single experience to always remember.
                    </p>
                  </CardContent>
                </Card>

                {/* Multiple Services Option */}
                <Card
                  className={`
                    cursor-pointer transition-all overflow-visible
                    hover-elevate active-elevate-2
                    ${serviceType === 'multiple' 
                      ? 'border-2 border-primary bg-primary/5' 
                      : 'border-2'
                    }
                  `}
                  onClick={() => setServiceType('multiple')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setServiceType('multiple');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  data-testid="option-multiple-services"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <Umbrella className="w-8 h-8 flex-shrink-0" />
                      <div 
                        className={`
                          w-6 h-6 flex-shrink-0 rounded-full border-2 transition-all
                          ${serviceType === 'multiple'
                            ? 'border-primary bg-primary'
                            : 'border-muted-foreground/30'
                          }
                        `}
                      >
                        {serviceType === 'multiple' && (
                          <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Multiple services</h3>
                    <p className="text-muted-foreground">
                      Ideal for holidays or several meals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 2: Occasion */}
          {currentStep === 2 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What's the occasion?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This helps our chefs set the perfect tone and vibe for your event.
                </p>
              </div>

              {/* Occasion Options */}
              <div className="grid sm:grid-cols-2 gap-4">
                {occasions.map((occ) => {
                  const Icon = occ.icon;
                  const isSelected = occasion === occ.id;
                  
                  return (
                    <Card
                      key={occ.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => setOccasion(occ.id as OccasionType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setOccasion(occ.id as OccasionType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-occasion-${occ.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium">{occ.label}</span>
                          </div>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all
                              ${isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground/30'
                              }
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 2: Recurring Service Type */}
          {currentStep === 2 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What type of service do you need?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us about your recurring chef needs
                </p>
              </div>

              <div className="space-y-4">
                {recurringServiceOptions.map((service) => {
                  const isSelected = recurringServiceType === service.id;
                  return (
                    <Card
                      key={service.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setRecurringServiceType(service.id as RecurringServiceType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setRecurringServiceType(service.id as RecurringServiceType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-recurring-service-${service.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{service.label}</h3>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                          </div>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all mt-1
                              ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'}
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {recurringServiceType === 'other' && (
                  <div className="space-y-2">
                    <Label htmlFor="other-recurring-service" className="text-base">
                      Please describe your requirements
                    </Label>
                    <Input
                      id="other-recurring-service"
                      type="text"
                      placeholder="Tell us what you need..."
                      value={otherRecurringServiceText}
                      onChange={(e) => setOtherRecurringServiceText(e.target.value)}
                      className="text-base"
                      data-testid="input-other-recurring-service"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 3: Duration */}
          {currentStep === 3 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How long do you need the service?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the duration that works for you
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {serviceDurationOptions.map((duration) => {
                  const isSelected = serviceDuration === duration.id;
                  return (
                    <Card
                      key={duration.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setServiceDuration(duration.id as ServiceDurationType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setServiceDuration(duration.id as ServiceDurationType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-duration-${duration.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium">{duration.label}</span>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all
                              ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'}
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 3: Event Location */}
          {currentStep === 3 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Where is your event?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We need your full address to match you with the perfect chef in your area.
                </p>
              </div>

              {/* Address Form */}
              <Card className="overflow-visible">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Villa/Hotel Name */}
                    <div className="space-y-2">
                      <Label htmlFor="venueName" className="text-base font-medium">
                        Villa name, Hotel or other
                      </Label>
                      <Input
                        id="venueName"
                        type="text"
                        placeholder="Villa Seminyak, Grand Hyatt Bali..."
                        value={address.venueName}
                        onChange={(e) => updateAddress('venueName', e.target.value)}
                        data-testid="input-venue-name"
                      />
                    </div>

                    {/* Street Address */}
                    <div className="space-y-2">
                      <Label htmlFor="street" className="text-base font-medium">
                        Street Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="street"
                          type="text"
                          placeholder="123 Villa Street"
                          value={address.street}
                          onChange={(e) => updateAddress('street', e.target.value)}
                          className="pl-10"
                          data-testid="input-street"
                        />
                      </div>
                    </div>

                    {/* City and Region */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-base font-medium">
                          City
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder="Seminyak"
                          value={address.city}
                          onChange={(e) => updateAddress('city', e.target.value)}
                          data-testid="input-city"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="region" className="text-base font-medium">
                          Region
                        </Label>
                        <Input
                          id="region"
                          type="text"
                          placeholder="Bali"
                          value={address.region}
                          onChange={(e) => updateAddress('region', e.target.value)}
                          data-testid="input-region"
                        />
                      </div>
                    </div>

                    {/* Postal Code (Optional) */}
                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-base font-medium">
                        Postal Code <span className="text-muted-foreground font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="postalCode"
                        type="text"
                        placeholder="80361"
                        value={address.postalCode}
                        onChange={(e) => updateAddress('postalCode', e.target.value)}
                        data-testid="input-postal-code"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-base font-medium">
                        Country
                      </Label>
                      <Select value={address.country} onValueChange={(value) => updateAddress('country', value)}>
                        <SelectTrigger id="country" data-testid="select-country">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <SelectValue placeholder="Select country" />
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skip Address Option */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 w-full max-w-md">
                  <div className="flex-1 border-t" />
                  <span className="text-sm text-muted-foreground">OR</span>
                  <div className="flex-1 border-t" />
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setAddressSkipped(true);
                    setCurrentStep(4);
                  }}
                  className="gap-2"
                  data-testid="button-skip-address"
                >
                  I don't have the address yet
                </Button>
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 4: Location */}
          {currentStep === 4 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Where will the chef work?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We need your location to match you with the right chef
                </p>
              </div>

              <Card className="overflow-visible">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="venue-name-multiple" className="text-base font-medium">
                        Villa name, Hotel or other
                      </Label>
                      <Input
                        id="venue-name-multiple"
                        type="text"
                        placeholder="Villa Seminyak, Grand Hyatt Bali..."
                        value={address.venueName}
                        onChange={(e) => updateAddress('venueName', e.target.value)}
                        data-testid="input-venue-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="street-multiple" className="text-base font-medium">
                        Street Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="street-multiple"
                          type="text"
                          placeholder="123 Villa Street"
                          value={address.street}
                          onChange={(e) => updateAddress('street', e.target.value)}
                          className="pl-10"
                          data-testid="input-street"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city-multiple" className="text-base font-medium">
                          City
                        </Label>
                        <Input
                          id="city-multiple"
                          type="text"
                          placeholder="Seminyak"
                          value={address.city}
                          onChange={(e) => updateAddress('city', e.target.value)}
                          data-testid="input-city"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="region-multiple" className="text-base font-medium">
                          Region/Province
                        </Label>
                        <Input
                          id="region-multiple"
                          type="text"
                          placeholder="Bali"
                          value={address.region}
                          onChange={(e) => updateAddress('region', e.target.value)}
                          data-testid="input-region"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postal-code-multiple" className="text-base font-medium">
                          Postal Code (optional)
                        </Label>
                        <Input
                          id="postal-code-multiple"
                          type="text"
                          placeholder="80361"
                          value={address.postalCode}
                          onChange={(e) => updateAddress('postalCode', e.target.value)}
                          data-testid="input-postal-code"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country-multiple" className="text-base font-medium">
                          Country
                        </Label>
                        <Select
                          value={address.country}
                          onValueChange={(value) => updateAddress('country', value)}
                        >
                          <SelectTrigger id="country-multiple" data-testid="select-country">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map(country => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 w-full max-w-md">
                  <div className="flex-1 border-t" />
                  <span className="text-sm text-muted-foreground">OR</span>
                  <div className="flex-1 border-t" />
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setAddressSkipped(true);
                    setCurrentStep(5);
                  }}
                  className="gap-2"
                  data-testid="button-skip-address-multiple"
                >
                  I don't have the address yet
                </Button>
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 5: People Count */}
          {currentStep === 5 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many people will you cook for?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This helps us match you with the right chef
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="people-count" className="text-base font-medium">
                    Number of people
                  </Label>
                  <Input
                    id="people-count"
                    type="number"
                    min="1"
                    placeholder="e.g., 2, 4, 6..."
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(e.target.value)}
                    className="text-base"
                    data-testid="input-people-count"
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter the typical number of people the chef will cook for
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 6: Dietary Focus */}
          {currentStep === 6 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What's your dietary focus?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us about your dietary preferences or requirements
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {dietaryFocusOptions.map((dietary) => {
                  const Icon = dietary.icon;
                  const isSelected = dietaryFocus === dietary.id;
                  return (
                    <Card
                      key={dietary.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setDietaryFocus(dietary.id as DietaryFocusType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setDietaryFocus(dietary.id as DietaryFocusType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-dietary-${dietary.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium">{dietary.label}</span>
                          </div>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all
                              ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'}
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {dietaryFocus === 'other' && (
                <div className="max-w-md mx-auto space-y-2">
                  <Label htmlFor="other-dietary" className="text-base">
                    Please describe your dietary needs
                  </Label>
                  <Input
                    id="other-dietary"
                    type="text"
                    placeholder="Tell us about your dietary requirements..."
                    value={otherDietaryText}
                    onChange={(e) => setOtherDietaryText(e.target.value)}
                    className="text-base"
                    data-testid="input-other-dietary"
                  />
                </div>
              )}
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 7: Chef Qualities */}
          {currentStep === 7 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What qualities should your chef have?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us what's important to you in a personal chef
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="chef-qualities" className="text-base font-medium">
                    Chef requirements & preferences
                  </Label>
                  <Textarea
                    id="chef-qualities"
                    placeholder="E.g., speaks English fluently, experienced with Asian cuisine, friendly personality, reliable, has own transport, certifications..."
                    value={chefQualities}
                    onChange={(e) => setChefQualities(e.target.value)}
                    rows={6}
                    className="resize-none text-base"
                    data-testid="textarea-chef-qualities"
                  />
                  <p className="text-sm text-muted-foreground">
                    Include language requirements, cooking specialties, personality traits, or any must-haves
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 8: Budget Range */}
          {currentStep === 8 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What's your monthly budget?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This helps us recommend chefs within your price range
                </p>
              </div>

              <div className="max-w-xl mx-auto space-y-4">
                {budgetRangeOptions.map((budget) => {
                  const isSelected = budgetRange === budget.id;
                  return (
                    <Card
                      key={budget.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setBudgetRange(budget.id as BudgetRangeType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setBudgetRange(budget.id as BudgetRangeType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-budget-${budget.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium">{budget.label}</span>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all
                              ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'}
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 9: Start Date */}
          {currentStep === 9 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  When would you like to start?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select your preferred start date
                </p>
              </div>

              <div className="flex justify-center">
                <div className="bg-card border rounded-lg p-6">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md"
                    data-testid="calendar-start-date"
                  />
                </div>
              </div>

              {startDate && (
                <div className="text-center">
                  <p className="text-lg">
                    Start date: <span className="font-semibold">{startDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 4: Guest Count */}
          {currentStep === 4 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  For how many guests?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The chef's fee is fixed, so the price per person varies with group size.
                </p>
              </div>

              {/* Guest Count Options */}
              <div className="max-w-xl mx-auto space-y-4">
                {guestCountOptions.map((option) => {
                  const isSelected = guestCount === option.id;
                  
                  return (
                    <Card
                      key={option.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => setGuestCount(option.id as GuestCountType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setGuestCount(option.id as GuestCountType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-guest-count-${option.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium text-lg">{option.label}</span>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all
                              ${isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground/30'
                              }
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                {/* Custom Guest Count Input */}
                {guestCount === 'exact' && (
                  <div className="mt-6 max-w-md mx-auto">
                    <Label htmlFor="custom-guest-count" className="text-base font-medium mb-2 block">
                      Enter exact number of guests
                    </Label>
                    <Input
                      id="custom-guest-count"
                      type="number"
                      min="1"
                      max="1000"
                      placeholder="e.g., 8"
                      value={customGuestCount}
                      onChange={(e) => setCustomGuestCount(e.target.value)}
                      className="text-lg"
                      data-testid="input-custom-guest-count"
                    />
                  </div>
                )}

                {/* Helpful Note */}
                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg" data-testid="note-guest-count-flexible">
                  <p className="text-sm text-center">
                    Not sure? You can change it later!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 5: Budget Range */}
          {currentStep === 5 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What's your budget range?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This helps us match you with the right chef and design the perfect menu
                </p>
              </div>

              {/* Budget Options */}
              <div className="max-w-xl mx-auto space-y-4">
                {budgetRangeSingleOptions.map((option) => {
                  const isSelected = budgetRangeSingle === option.id;
                  
                  return (
                    <Card
                      key={option.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => setBudgetRangeSingle(option.id as BudgetRangeSingleType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setBudgetRangeSingle(option.id as BudgetRangeSingleType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-budget-${option.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="font-semibold text-lg">{option.label}</div>
                            <div className="text-sm text-muted-foreground mt-1">{option.description}</div>
                          </div>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all mt-1
                              ${isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground/30'
                              }
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 6: Number of Courses */}
          {currentStep === 6 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many courses?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  From simple main course to an ultimate fine dining experience
                </p>
              </div>

              {/* Courses Options */}
              <div className="max-w-xl mx-auto space-y-4">
                {numberOfCoursesOptions.map((option) => {
                  const isSelected = numberOfCourses === option.id;
                  
                  return (
                    <Card
                      key={option.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => setNumberOfCourses(option.id as NumberOfCoursesType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setNumberOfCourses(option.id as NumberOfCoursesType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-courses-${option.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="font-semibold text-lg">{option.label}</div>
                            <div className="text-sm text-muted-foreground mt-1">{option.description}</div>
                          </div>
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded-full border-2 transition-all mt-1
                              ${isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground/30'
                              }
                            `}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-background scale-[0.4]" />
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 7: Additional Services */}
          {currentStep === 7 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What services do you need?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select all the services you need for your event. You can choose multiple options.
                </p>
              </div>

              {/* Service Options */}
              <div className="max-w-2xl mx-auto space-y-3">
                {additionalServices.map((service) => {
                  const isSelected = selectedServices.has(service.id as AdditionalServiceType);
                  const ServiceIcon = service.icon;
                  
                  return (
                    <Card
                      key={service.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => toggleService(service.id as AdditionalServiceType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleService(service.id as AdditionalServiceType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-service-${service.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center gap-4">
                          {/* Checkbox */}
                          <div 
                            className={`
                              w-5 h-5 flex-shrink-0 rounded border-2 transition-all flex items-center justify-center
                              ${isSelected
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground/30'
                              }
                            `}
                          >
                            {isSelected && (
                              <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                            )}
                          </div>

                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <ServiceIcon className="w-6 h-6 text-primary" />
                          </div>

                          {/* Label and Description */}
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-base">{service.label}</div>
                            <div className="text-sm text-muted-foreground">{service.description}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Helpful Note */}
              <div className="max-w-2xl mx-auto">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg" data-testid="note-services-flexible">
                  <p className="text-sm text-center">
                    Select at least one service. We'll help you customize your perfect event!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 8: Cuisine Selection */}
          {currentStep === 8 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What are you craving?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Top cuisines in Asia. Choose your favorite or tell us what you'd like!
                </p>
              </div>

              {/* Cuisine Options Grid */}
              <div className="max-w-3xl mx-auto space-y-6">
                {/* Top 6 Asian Cuisines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cuisineOptions.map((option) => {
                    const isSelected = cuisine === option.id;
                    const CuisineIcon = option.icon;
                    
                    return (
                      <Card
                        key={option.id}
                        className={`
                          cursor-pointer transition-all overflow-visible
                          hover-elevate active-elevate-2
                          ${isSelected 
                            ? 'border-2 border-primary bg-primary/5' 
                            : 'border-2'
                          }
                        `}
                        onClick={() => {
                          setCuisine(option.id as CuisineType);
                          setOtherCuisineText('');
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setCuisine(option.id as CuisineType);
                            setOtherCuisineText('');
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        data-testid={`option-cuisine-${option.id}`}
                      >
                        <CardContent className="py-4">
                          <div className="flex items-center gap-3">
                            <CuisineIcon className="w-6 h-6 flex-shrink-0" />
                            <span className="font-medium text-base">{option.label}</span>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Other Option */}
                <div className="space-y-3">
                  <Card
                    className={`
                      cursor-pointer transition-all overflow-visible
                      hover-elevate active-elevate-2
                      ${cuisine === 'other' 
                        ? 'border-2 border-primary bg-primary/5' 
                        : 'border-2'
                      }
                    `}
                    onClick={() => setCuisine('other')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setCuisine('other');
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    data-testid="option-cuisine-other"
                  >
                    <CardContent className="py-4">
                      <div className="flex items-center gap-3">
                        <MoreHorizontal className="w-6 h-6 flex-shrink-0" />
                        <span className="font-medium text-base">Other</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Text input for Other cuisine */}
                  {cuisine === 'other' && (
                    <div className="space-y-2">
                      <Label htmlFor="other-cuisine" className="text-base">
                        What type of cuisine would you like?
                      </Label>
                      <Input
                        id="other-cuisine"
                        type="text"
                        placeholder="e.g., Italian, French, Mediterranean, BBQ, Vegan, Chef's Special..."
                        value={otherCuisineText}
                        onChange={(e) => setOtherCuisineText(e.target.value)}
                        className="text-base"
                        data-testid="input-other-cuisine"
                      />
                      <p className="text-sm text-muted-foreground">
                        Tell us what you're looking for and we'll match you with the perfect chef!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 9: Date Selection */}
          {currentStep === 9 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  When?
                </h1>
              </div>

              {/* Date Mode Toggle */}
              <div className="max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-3">
                  <Card
                    className={`
                      cursor-pointer transition-all overflow-visible
                      hover-elevate active-elevate-2
                      ${dateMode === 'single' 
                        ? 'border-2 border-primary bg-primary/5' 
                        : 'border-2'
                      }
                    `}
                    onClick={() => {
                      setDateMode('single');
                      setSelectedDates([]);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setDateMode('single');
                        setSelectedDates([]);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    data-testid="option-date-mode-single"
                  >
                    <CardContent className="py-3">
                      <div className="text-center font-medium">Single day</div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`
                      cursor-pointer transition-all overflow-visible
                      hover-elevate active-elevate-2
                      ${dateMode === 'multiple' 
                        ? 'border-2 border-primary bg-primary/5' 
                        : 'border-2'
                      }
                    `}
                    onClick={() => {
                      setDateMode('multiple');
                      setSelectedDates([]);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setDateMode('multiple');
                        setSelectedDates([]);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    data-testid="option-date-mode-multiple"
                  >
                    <CardContent className="py-3">
                      <div className="text-center font-medium">Multiple days</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Calendar */}
              <div className="flex justify-center">
                <div className="bg-card border rounded-lg p-6">
                  {dateMode === 'single' ? (
                    <Calendar
                      mode="single"
                      selected={selectedDates[0]}
                      onSelect={(date: Date | undefined) => {
                        setSelectedDates(date ? [date] : []);
                      }}
                      numberOfMonths={3}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      className="rounded-md"
                    />
                  ) : (
                    <Calendar
                      mode="multiple"
                      selected={selectedDates}
                      onSelect={(dates: Date[] | undefined) => {
                        setSelectedDates(dates || []);
                      }}
                      numberOfMonths={3}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      className="rounded-md"
                    />
                  )}
                </div>
              </div>

              {/* Helpful Note */}
              <div className="max-w-2xl mx-auto">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg" data-testid="note-dates-flexible">
                  <p className="text-sm text-center">
                    Not sure? You can change it later!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 10: Time of Day and Preferences */}
          {currentStep === 10 && serviceType === 'single' && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Tell us more about your event
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Help us create the perfect experience for you
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                {/* Time of Day Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">
                    What time of day?
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Card
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${timeOfDay === 'day' 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => setTimeOfDay('day')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setTimeOfDay('day');
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid="option-time-day"
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-center gap-3">
                          <Sun className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">Day</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${timeOfDay === 'night' 
                          ? 'border-2 border-primary bg-primary/5' 
                          : 'border-2'
                        }
                      `}
                      onClick={() => setTimeOfDay('night')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setTimeOfDay('night');
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid="option-time-night"
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-center gap-3">
                          <Moon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">Night</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Food Preferences */}
                <div className="space-y-3">
                  <Label htmlFor="food-preferences" className="text-base font-medium">
                    What kind of food are you hoping for? <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Textarea
                    id="food-preferences"
                    placeholder="Tell us about your food preferences, dietary restrictions, favorite dishes, or anything special you'd like..."
                    value={foodPreferences}
                    onChange={(e) => setFoodPreferences(e.target.value)}
                    rows={4}
                    className="resize-none"
                    data-testid="input-food-preferences"
                  />
                  <p className="text-sm text-muted-foreground">
                    Examples: "We love fresh seafood", "Need vegetarian options", "Allergic to peanuts"
                  </p>
                </div>

                {/* Mood/Atmosphere Description */}
                <div className="space-y-3">
                  <Label htmlFor="mood-description" className="text-base font-medium">
                    What kind of mood or atmosphere are you looking for? <span className="text-muted-foreground font-normal">(Optional)</span>
                  </Label>
                  <Textarea
                    id="mood-description"
                    placeholder="Describe the vibe you want: romantic dinner, casual workspace lunch, family celebration, elegant party..."
                    value={moodDescription}
                    onChange={(e) => setMoodDescription(e.target.value)}
                    rows={4}
                    className="resize-none"
                    data-testid="input-mood-description"
                  />
                  <p className="text-sm text-muted-foreground">
                    Examples: "Romantic candlelight setting", "Casual and fun atmosphere", "Professional business lunch"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 11: Review and Submit */}
          {currentStep === 11 && serviceType === 'single' && (
            <div className="space-y-12">
              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                      Thank you!
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We've received your request and are working on it! Our team will get back to you within 20 minutes with a personalized quote and pricing.
                    </p>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                      Check your WhatsApp or email for updates.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                      Review & Confirm
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Please review your details. You can go back to edit any information.
                    </p>
                  </div>

                  {/* Review Summary */}
                  <div className="max-w-3xl mx-auto space-y-6">
                    {/* Event Details Card */}
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <ChefHat className="w-5 h-5" />
                          Event Details
                        </h3>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Service Type</p>
                              <p className="font-medium capitalize">{serviceType}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Occasion</p>
                              <p className="font-medium capitalize">{occasion?.replace(/-/g, ' ')}</p>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Guest Count</p>
                              <p className="font-medium">
                                {guestCount === 'exact' ? `${customGuestCount} ${parseInt(customGuestCount) === 1 ? 'person' : 'people'}` : guestCountOptions.find(o => o.id === guestCount)?.label}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Budget Range</p>
                              <p className="font-medium">{budgetRangeSingleOptions.find(o => o.id === budgetRangeSingle)?.label}</p>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Number of Courses</p>
                              <p className="font-medium">{numberOfCoursesOptions.find(o => o.id === numberOfCourses)?.label}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Cuisine</p>
                              <p className="font-medium capitalize">
                                {cuisine === 'other' ? otherCuisineText : cuisineOptions.find(c => c.id === cuisine)?.label}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Event Date{selectedDates.length > 1 ? 's' : ''}</p>
                            <div className="flex flex-wrap gap-2">
                              {selectedDates.map((date, idx) => (
                                <span key={idx} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-md font-medium">
                                  {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Time of Day</p>
                            <p className="font-medium capitalize">{timeOfDay}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Location Card */}
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          Location
                        </h3>
                        {addressSkipped ? (
                          <p className="text-muted-foreground italic">Address to be provided later</p>
                        ) : (
                          <div className="space-y-2">
                            <p className="font-medium">{address.venueName}</p>
                            <p className="text-sm text-muted-foreground">{address.street}</p>
                            <p className="text-sm text-muted-foreground">{address.city}, {address.region} {address.postalCode}</p>
                            <p className="text-sm font-medium">{address.country}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Services Card */}
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Package className="w-5 h-5" />
                          Additional Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {Array.from(selectedServices).map(serviceId => (
                            <span key={serviceId} className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                              {additionalServices.find(s => s.id === serviceId)?.label}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Preferences Card */}
                    {(foodPreferences || moodDescription) && (
                      <Card>
                        <CardContent className="pt-6">
                          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Utensils className="w-5 h-5" />
                            Preferences
                          </h3>
                          <div className="space-y-4">
                            {foodPreferences && (
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Food Preferences</p>
                                <p className="text-sm">{foodPreferences}</p>
                              </div>
                            )}
                            {moodDescription && (
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Mood & Atmosphere</p>
                                <p className="text-sm">{moodDescription}</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Additional Notes Field */}
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <MessageSquare className="w-5 h-5" />
                          Anything else we should know?
                        </h3>
                        <div className="space-y-2">
                          <Textarea
                            placeholder="Food allergies, dietary restrictions, special requests, accessibility needs, etc..."
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            rows={4}
                            className="resize-none"
                            data-testid="input-additional-notes"
                          />
                          <p className="text-xs text-muted-foreground">
                            Let us know about any food allergies, special dietary needs, or other important details
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Submit Section */}
                    <div className="space-y-4 pt-2">
                      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                        <p className="text-sm text-center font-medium">
                          By submitting, our team will review your request and get back to you with a personalized quote and pricing within 20 minutes.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          size="lg"
                          onClick={() => submitMutation.mutate()}
                          disabled={submitMutation.isPending}
                          className="gap-2 min-w-[240px]"
                          data-testid="button-submit-quote"
                        >
                          {submitMutation.isPending ? (
                            <>Submitting...</>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Submit & Get Quote
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 10: Review and Submit */}
          {currentStep === 10 && serviceType === 'multiple' && (
            <div className="space-y-12">
              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                      Thank you!
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We've received your request and are working on it! Our team will get back to you within 20 minutes with a personalized quote and pricing. Check your WhatsApp or email for updates.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    onClick={() => setLocation('/')}
                    className="gap-2"
                    data-testid="button-return-home"
                  >
                    Return to Home
                  </Button>
                </div>
              ) : (
                <>
                  <div className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                      Review & Confirm
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Please review your details. You can go back to edit any information.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Service Details Card */}
                    <Card className="overflow-visible">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-4">Service Details</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">Service Type:</span>
                            <span className="font-medium text-right">
                              {recurringServiceType === 'other' 
                                ? otherRecurringServiceText 
                                : recurringServiceOptions.find(s => s.id === recurringServiceType)?.label
                              }
                            </span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="font-medium text-right">
                              {serviceDurationOptions.find(d => d.id === serviceDuration)?.label}
                            </span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">People:</span>
                            <span className="font-medium">{peopleCount} people</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span className="text-muted-foreground">Start Date:</span>
                            <span className="font-medium">
                              {startDate?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Location Card */}
                    <Card className="overflow-visible">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-4">Location</h3>
                        <div className="text-sm space-y-1">
                          {addressSkipped ? (
                            <p className="text-muted-foreground italic">Address to be provided later</p>
                          ) : (
                            <>
                              <p className="font-medium">{address.venueName}</p>
                              <p className="text-muted-foreground">{address.street}</p>
                              <p className="text-muted-foreground">
                                {address.city}, {address.region} {address.postalCode}
                              </p>
                              <p className="text-muted-foreground">{address.country}</p>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Dietary & Preferences Card */}
                    <Card className="overflow-visible">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-4">Dietary Preferences & Chef Requirements</h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-muted-foreground">Dietary Focus:</span>
                            <p className="font-medium mt-1">
                              {dietaryFocus === 'other' 
                                ? otherDietaryText 
                                : dietaryFocusOptions.find(d => d.id === dietaryFocus)?.label
                              }
                            </p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Chef Qualities:</span>
                            <p className="font-medium mt-1 whitespace-pre-wrap">{chefQualities}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Budget Card */}
                    <Card className="overflow-visible">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-4">Budget</h3>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Monthly Budget:</span>
                          <p className="font-medium mt-1">
                            {budgetRangeOptions.find(b => b.id === budgetRange)?.label}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Additional Notes Card */}
                    <Card className="overflow-visible">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <Label htmlFor="additional-notes-multiple" className="text-base font-medium">
                            Anything else we should know? (Optional)
                          </Label>
                          <Textarea
                            id="additional-notes-multiple"
                            placeholder="Food allergies, special dietary restrictions, accessibility needs, or any other important details..."
                            value={additionalNotes}
                            onChange={(e) => setAdditionalNotes(e.target.value)}
                            rows={4}
                            className="resize-none"
                            data-testid="input-additional-notes"
                          />
                          <p className="text-xs text-muted-foreground">
                            Let us know about any food allergies, special dietary needs, or other important details
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Submit Section */}
                    <div className="space-y-4 pt-2">
                      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                        <p className="text-sm text-center font-medium">
                          By submitting, our team will review your request and get back to you with a personalized quote and pricing within 20 minutes.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          size="lg"
                          onClick={() => submitMutation.mutate()}
                          disabled={submitMutation.isPending}
                          className="gap-2 min-w-[240px]"
                          data-testid="button-submit-quote-multiple"
                        >
                          {submitMutation.isPending ? (
                            <>Submitting...</>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              Submit & Get Quote
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      {!isSubmitted && (
        <div className="border-t bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={handlePrevious}
                  className="gap-2"
                  data-testid="button-previous"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous step
                </Button>
              ) : (
                <div />
              )}
              <Button
                size="lg"
                onClick={handleContinue}
                disabled={!canContinue()}
                className="min-w-[140px]"
                data-testid="button-continue"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
