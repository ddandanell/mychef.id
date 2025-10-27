import { useState } from 'react';
import { Cake, CheckCircle2, Home, PartyPopper, Users, Heart, Briefcase, ChefHat, MoreHorizontal, ArrowLeft, MapPin, Utensils, Flame, UtensilsCrossed, Apple, Soup, Calendar as CalendarIcon, Send, Check, Globe, Minus, Plus, Shield } from 'lucide-react';
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
import { WHATSAPP_NUMBER } from '@/lib/whatsappCTA';

type ServiceType = 'single' | 'multiple' | 'fulltime' | null;
type OccasionType = 'birthday' | 'family-reunion' | 'bachelor-bachelorette' | 'friends-gathering' | 'romantic-night' | 'corporate' | 'foodie-adventure' | 'other' | null;
type CuisineType = 'indonesian' | 'thai' | 'japanese' | 'chinese' | 'indian' | 'western' | 'asian' | 'not-sure' | null;
type RecurringServiceType = 'meal-prep' | 'weekly-shifts' | 'extended-stay' | 'live-in' | 'other' | null;
type ServiceDurationType = '1-week' | '2-weeks' | '1-month' | '2-3-months' | '6-months' | '1-year' | 'ongoing' | null;
type WorkDaysType = 'monday-friday' | 'all-week' | 'flexible' | null;

interface AddressData {
  venueName: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

const countries = [
  'Indonesia',
  ...UN_RECOGNIZED_COUNTRIES.filter(country => country !== 'Indonesia')
];

// Generate time options in 24-hour format (HH:mm)
const timeOptions = [
  '05:00', '05:30', '06:00', '06:30', '07:00', '07:30',
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
];

function formatQuoteForWhatsApp(data: any): string {
  let message = '🍽️ *myCHEF Quote Request*\n\n';
  
  if (data.serviceType === 'single') {
    message += '*Service Type:* Single Event\n';
    message += `*Occasion:* ${data.occasion?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    if (data.occasionCustom && data.occasionCustom.trim() !== '') {
      message += `  ↳ _${data.occasionCustom}_\n`;
    }
    
    if (data.guestCountUnsure && data.guestCountCustom) {
      message += `*Guest Count:* Flexible - ${data.guestCountCustom}\n`;
    } else {
      message += `*Guest Count:* ${data.guestCount} guests\n`;
    }
    
    if (data.datesFlexible && data.datesNote) {
      message += `*Date(s):* Flexible - ${data.datesNote}\n`;
    } else if (data.selectedDates && data.selectedDates.length > 0) {
      const dates = data.selectedDates.map((d: string) => new Date(d).toLocaleDateString('en-GB')).join(', ');
      message += `*Date(s):* ${dates}\n`;
    }
    
    message += `*Cuisine:* ${data.cuisine?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    if (data.cuisineCustom && data.cuisineCustom.trim() !== '') {
      message += `  ↳ _${data.cuisineCustom}_\n`;
    }
    
    message += `*Pre-Meeting with Chef:* ${data.preMeetingRequested ? 'Yes - Chef arrives 2 hours early for menu planning & grocery shopping' : 'No - Chef arrives at cooking time'}\n`;
    
    if (data.additionalServices && data.additionalServices.length > 0) {
      message += '\n*Additional Services Requested:*\n';
      data.additionalServices.forEach((service: string) => {
        const serviceName = service.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
        message += `  • ${serviceName}\n`;
      });
      if (data.additionalServicesOther && data.additionalServicesOther.trim() !== '') {
        message += `  ↳ _${data.additionalServicesOther}_\n`;
      }
    }
  } else if (data.serviceType === 'multiple') {
    message += '*Service Type:* Recurring Service\n';
    message += `*Service:* ${data.recurringServiceType?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    if (data.recurringServiceCustom && data.recurringServiceCustom.trim() !== '') {
      message += `  ↳ _${data.recurringServiceCustom}_\n`;
    }
    
    if (data.durationFlexible && data.durationNote) {
      message += `*Duration:* Flexible - ${data.durationNote}\n`;
    } else {
      message += `*Duration:* ${data.serviceDuration?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    }
    
    if (data.peopleCountUnsure && data.peopleCountCustom) {
      message += `*Number of People:* Flexible - ${data.peopleCountCustom}\n`;
    } else {
      message += `*Number of People:* ${data.peopleCount} people\n`;
    }
    
    if (data.startDateFlexible && data.startDateNote) {
      message += `*Start Date:* Flexible - ${data.startDateNote}\n`;
    } else if (data.startDate) {
      message += `*Start Date:* ${new Date(data.startDate).toLocaleDateString('en-GB')}\n`;
    }
  } else if (data.serviceType === 'fulltime') {
    message += '*Service Type:* Full-time or Part-time Chef\n';
    
    if (data.guestsPerMealVaries && data.guestsPerMealCustom) {
      message += `*Guests per Meal:* Varies - ${data.guestsPerMealCustom}\n`;
    } else {
      message += `*Guests per Meal:* ${data.guestsPerMeal} people\n`;
    }
    
    if (data.mealsNeeded && data.mealsNeeded.length > 0) {
      message += '*Meals Needed:*\n';
      data.mealsNeeded.forEach((meal: string) => {
        const time = data.mealTimes?.[meal] || 'Time TBD';
        message += `  • ${meal.charAt(0).toUpperCase() + meal.slice(1)}: ${time} WIB\n`;
      });
    }
    
    message += `*Work Days:* ${data.workDays?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    if (data.workDaysCustom && data.workDaysCustom.trim() !== '') {
      message += `  ↳ _${data.workDaysCustom}_\n`;
    }
    
    // Grocery shopping details
    if (data.groceryHandling === 'mychef-handles') {
      message += '*Grocery Shopping:* myCHEF handles (included in working hours)\n';
      if (data.groceryPaymentMethod === 'upfront-payment') {
        message += '*Grocery Payment:* Client pays upfront, myCHEF handles purchases\n';
      } else if (data.groceryPaymentMethod === 'daily-money') {
        message += '*Grocery Payment:* Client provides daily/regular money for chef to purchase\n';
      }
    } else if (data.groceryHandling === 'client-handles') {
      message += '*Grocery Shopping:* Client handles their own grocery shopping\n';
    }
    
    if (data.dietaryRestrictions && data.dietaryRestrictions.trim() !== '') {
      message += `*Dietary Restrictions:* ${data.dietaryRestrictions}\n`;
    } else {
      message += '*Dietary Restrictions:* None specified\n';
    }
  }
  
  message += '\n*📍 Location:*\n';
  if (!data.addressSkipped && data.venueName) {
    message += `${data.venueName}\n`;
    if (data.street) message += `${data.street}\n`;
    if (data.city) message += `${data.city}`;
    if (data.region) message += `, ${data.region}`;
    if (data.postalCode) message += ` ${data.postalCode}`;
    message += `\n${data.country}\n`;
  } else {
    message += 'Address TBD\n';
  }
  
  message += '\n_Please send me a personalized quote with pricing!_';
  
  return message;
}

const cuisineOptions = [
  { id: 'indonesian', label: 'Indonesian', icon: Utensils },
  { id: 'thai', label: 'Thai', icon: Flame },
  { id: 'japanese', label: 'Japanese', icon: UtensilsCrossed },
  { id: 'chinese', label: 'Chinese', icon: Utensils },
  { id: 'indian', label: 'Indian', icon: Apple },
  { id: 'western', label: 'Western', icon: UtensilsCrossed },
  { id: 'asian', label: 'Asian Fusion', icon: Soup },
  { id: 'not-sure', label: "Not sure yet - Chef's recommendation", icon: ChefHat },
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

const workDaysOptions = [
  { id: 'monday-friday', label: 'Monday to Friday only', description: 'Weekday service' },
  { id: 'all-week', label: 'All seven days', description: 'Every day of the week' },
  { id: 'flexible', label: 'Flexible / To be discussed', description: 'Custom schedule based on your needs' },
] as const;

export default function QuoteFunnel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  
  // Single service state
  const [occasion, setOccasion] = useState<OccasionType>(null);
  const [occasionCustom, setOccasionCustom] = useState('');
  const [guestCount, setGuestCount] = useState<number>(2);
  const [guestCountUnsure, setGuestCountUnsure] = useState(false);
  const [guestCountCustom, setGuestCountCustom] = useState('');
  const [cuisine, setCuisine] = useState<CuisineType>(null);
  const [cuisineCustom, setCuisineCustom] = useState('');
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [datesFlexible, setDatesFlexible] = useState(false);
  const [datesNote, setDatesNote] = useState('');
  const [preMeetingRequested, setPreMeetingRequested] = useState<boolean | null>(null);
  const [additionalServices, setAdditionalServices] = useState<Set<string>>(new Set());
  const [additionalServicesOther, setAdditionalServicesOther] = useState('');
  
  // Multiple service state
  const [recurringServiceType, setRecurringServiceType] = useState<RecurringServiceType>(null);
  const [recurringServiceCustom, setRecurringServiceCustom] = useState('');
  const [serviceDuration, setServiceDuration] = useState<ServiceDurationType>(null);
  const [durationFlexible, setDurationFlexible] = useState(false);
  const [durationNote, setDurationNote] = useState('');
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [peopleCountUnsure, setPeopleCountUnsure] = useState(false);
  const [peopleCountCustom, setPeopleCountCustom] = useState('');
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [startDateFlexible, setStartDateFlexible] = useState(false);
  const [startDateNote, setStartDateNote] = useState('');
  
  // Full-time chef state
  const [guestsPerMeal, setGuestsPerMeal] = useState<number>(2);
  const [guestsPerMealVaries, setGuestsPerMealVaries] = useState(false);
  const [guestsPerMealCustom, setGuestsPerMealCustom] = useState('');
  const [mealsNeeded, setMealsNeeded] = useState<Set<string>>(new Set());
  const [mealTimes, setMealTimes] = useState<{breakfast?: string, lunch?: string, dinner?: string}>({});
  const [workDays, setWorkDays] = useState<WorkDaysType>(null);
  const [workDaysCustom, setWorkDaysCustom] = useState('');
  const [groceryHandling, setGroceryHandling] = useState<'mychef-handles' | 'client-handles' | null>(null);
  const [groceryPaymentMethod, setGroceryPaymentMethod] = useState<'upfront-payment' | 'daily-money' | null>(null);
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  
  // Common state
  const [address, setAddress] = useState<AddressData>({
    venueName: '',
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: 'Indonesia',
  });
  const [addressSkipped, setAddressSkipped] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const toggleMeal = (meal: 'breakfast' | 'lunch' | 'dinner') => {
    const newMeals = new Set(mealsNeeded);
    if (newMeals.has(meal)) {
      newMeals.delete(meal);
      // Remove time when deselecting meal
      const newTimes = {...mealTimes};
      delete newTimes[meal];
      setMealTimes(newTimes);
    } else {
      newMeals.add(meal);
    }
    setMealsNeeded(newMeals);
  };

  const updateMealTime = (meal: 'breakfast' | 'lunch' | 'dinner', time: string) => {
    setMealTimes({...mealTimes, [meal]: time});
  };

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
      };

      if (serviceType === 'single') {
        payload = {
          ...payload,
          occasion: occasion!,
          occasionCustom: occasion === 'other' ? occasionCustom : null,
          guestCount: guestCountUnsure ? 'not-sure' : guestCount.toString(),
          guestCountCustom: guestCountUnsure ? guestCountCustom : null,
          cuisine: cuisine!,
          cuisineCustom: cuisine === 'not-sure' ? cuisineCustom : null,
          selectedDates: datesFlexible ? [] : selectedDates.map(d => d.toISOString()),
          datesFlexible,
          datesNote: datesFlexible ? datesNote : null,
          preMeetingRequested: preMeetingRequested!,
          additionalServices: Array.from(additionalServices),
          additionalServicesOther: additionalServices.has('other') ? additionalServicesOther : null,
        };
      } else if (serviceType === 'multiple') {
        payload = {
          ...payload,
          recurringServiceType: recurringServiceType!,
          recurringServiceCustom: recurringServiceType === 'other' ? recurringServiceCustom : null,
          serviceDuration: durationFlexible ? 'flexible' : serviceDuration!,
          durationFlexible,
          durationNote: durationFlexible ? durationNote : null,
          peopleCount: peopleCountUnsure ? 'varies' : peopleCount.toString(),
          peopleCountCustom: peopleCountUnsure ? peopleCountCustom : null,
          startDate: startDateFlexible ? null : startDate!.toISOString(),
          startDateFlexible,
          startDateNote: startDateFlexible ? startDateNote : null,
        };
      } else if (serviceType === 'fulltime') {
        payload = {
          ...payload,
          guestsPerMeal: guestsPerMealVaries ? 'varies' : guestsPerMeal.toString(),
          guestsPerMealCustom: guestsPerMealVaries ? guestsPerMealCustom : null,
          mealsNeeded: Array.from(mealsNeeded),
          mealTimes: mealTimes,
          workDays: workDays === 'flexible' ? 'flexible' : workDays!,
          workDaysCustom: workDays === 'flexible' ? workDaysCustom : null,
          groceryHandling: groceryHandling!,
          groceryPaymentMethod: groceryHandling === 'mychef-handles' ? groceryPaymentMethod! : null,
          dietaryRestrictions: dietaryRestrictions || null,
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
      
      const result = await response.json();
      return { result, payload };
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      
      const { payload } = data;
      const message = formatQuoteForWhatsApp(payload);
      const phoneNumber = WHATSAPP_NUMBER.replace(/\+/g, '');
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappURL, '_blank');
      
      toast({
        title: "Opening WhatsApp...",
        description: "Your quote details are ready to send!",
      });
      
      setTimeout(() => {
        setLocation('/');
      }, 2000);
    },
    onError: (error: any) => {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const getTotalSteps = () => {
    if (serviceType === 'single') return 9; // Added additional services step
    if (serviceType === 'multiple') return 7;
    if (serviceType === 'fulltime') {
      // Base steps + conditional grocery payment step
      return groceryHandling === 'mychef-handles' ? 9 : 8;
    }
    return 1;
  };

  const isAddressValid = () => {
    return address.venueName.trim() !== '' && 
           address.street.trim() !== '' && 
           address.city.trim() !== '' && 
           address.region.trim() !== '';
  };

  const updateAddress = (field: keyof AddressData, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }));
    if (addressSkipped) setAddressSkipped(false);
  };

  const canContinue = () => {
    if (currentStep === 1) return serviceType !== null;
    
    if (serviceType === 'single') {
      if (currentStep === 2) {
        // Occasion is valid if selected, and if "other", custom text must be provided
        return occasion !== null && (occasion !== 'other' || occasionCustom.trim() !== '');
      }
      if (currentStep === 3) {
        // Guest count is valid if number >= 1, or if unsure and custom text provided
        return !guestCountUnsure ? guestCount >= 1 : guestCountCustom.trim() !== '';
      }
      if (currentStep === 4) {
        // Dates valid if selected, or if flexible and note provided
        return !datesFlexible ? selectedDates.length > 0 : datesNote.trim() !== '';
      }
      if (currentStep === 5) {
        // Cuisine valid if selected, and if "not-sure", custom text must be provided
        return cuisine !== null && (cuisine !== 'not-sure' || cuisineCustom.trim() !== '');
      }
      if (currentStep === 6) return preMeetingRequested !== null;
      if (currentStep === 7) return true; // Additional services - optional, always can continue
      if (currentStep === 8) return isAddressValid() || addressSkipped;
      if (currentStep === 9) return true; // Final confirmation
    }
    
    if (serviceType === 'multiple') {
      if (currentStep === 2) {
        // Recurring type valid if selected, and if "other", custom text provided
        return recurringServiceType !== null && (recurringServiceType !== 'other' || recurringServiceCustom.trim() !== '');
      }
      if (currentStep === 3) {
        // Duration valid if selected, or if flexible and note provided
        return !durationFlexible ? serviceDuration !== null : durationNote.trim() !== '';
      }
      if (currentStep === 4) {
        // People count valid if number >= 1, or if unsure and custom text provided
        return !peopleCountUnsure ? peopleCount >= 1 : peopleCountCustom.trim() !== '';
      }
      if (currentStep === 5) {
        // Start date valid if selected, or if flexible and note provided
        return !startDateFlexible ? startDate !== undefined : startDateNote.trim() !== '';
      }
      if (currentStep === 6) return isAddressValid() || addressSkipped;
      if (currentStep === 7) return true;
    }
    
    if (serviceType === 'fulltime') {
      if (currentStep === 2) {
        // Guests per meal valid if number >= 1, or if varies and custom text provided
        return !guestsPerMealVaries ? guestsPerMeal >= 1 : guestsPerMealCustom.trim() !== '';
      }
      if (currentStep === 3) return mealsNeeded.size > 0 && Array.from(mealsNeeded).every(meal => mealTimes[meal as 'breakfast' | 'lunch' | 'dinner']?.trim());
      if (currentStep === 4) {
        // Work days valid if selected, and if "flexible", custom text provided
        return workDays !== null && (workDays !== 'flexible' || workDaysCustom.trim() !== '');
      }
      if (currentStep === 5) return groceryHandling !== null;
      
      // Step 6 is conditional: only shown if groceryHandling === 'mychef-handles'
      if (groceryHandling === 'mychef-handles') {
        if (currentStep === 6) return groceryPaymentMethod !== null;
        if (currentStep === 7) return isAddressValid() || addressSkipped;
        if (currentStep === 8) return true; // dietary restrictions
        if (currentStep === 9) return true; // final confirmation
      } else {
        // Skip payment step if client handles groceries
        if (currentStep === 6) return isAddressValid() || addressSkipped;
        if (currentStep === 7) return true; // dietary restrictions
        if (currentStep === 8) return true; // final confirmation
      }
    }
    
    return false;
  };

  const handleContinue = () => {
    if (!canContinue()) return;
    
    if (currentStep < getTotalSteps()) {
      // Special handling for fulltime flow: skip step 6 (payment) if client handles groceries
      if (serviceType === 'fulltime' && currentStep === 5 && groceryHandling === 'client-handles') {
        setCurrentStep(currentStep + 2); // Skip step 6, go to step 7 (location)
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      // Special handling for fulltime flow: skip step 6 (payment) when going back if client handles groceries
      if (serviceType === 'fulltime' && currentStep === 7 && groceryHandling === 'client-handles') {
        setCurrentStep(currentStep - 2); // Skip step 6, go back to step 5 (grocery handling)
      } else {
        setCurrentStep(currentStep - 1);
      }
    } else {
      setLocation('/');
    }
  };

  const handleSubmit = async () => {
    submitMutation.mutate();
  };

  const isFinalStep = () => {
    if (serviceType === 'single') return currentStep === 9; // Updated for additional services step
    if (serviceType === 'multiple') return currentStep === 7;
    if (serviceType === 'fulltime') {
      // Final step is 9 if mychef handles groceries, 8 if client handles
      return currentStep === (groceryHandling === 'mychef-handles' ? 9 : 8);
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="gap-2"
              data-testid="button-back"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {getTotalSteps()}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-muted">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep / getTotalSteps()) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12">
          {/* Step 1: Service Type Selection */}
          {currentStep === 1 && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What type of service do you need?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the service that best fits your needs
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Background-checked chefs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>1000+ successful events</span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
                {[
                  { 
                    id: 'single', 
                    label: 'Single Event', 
                    description: 'Perfect for one-time celebrations',
                    details: ['Birthdays & anniversaries', 'Dinner parties', 'Special occasions', 'Corporate events'],
                    icon: ChefHat 
                  },
                  { 
                    id: 'multiple', 
                    label: 'Recurring Service', 
                    description: 'Regular chef visits over time',
                    details: ['Weekly meal prep', '2-3 days per week', 'Extended vacation stays', 'Live-in arrangements'],
                    icon: Users 
                  },
                  { 
                    id: 'fulltime', 
                    label: 'Full-time/Part-time Chef', 
                    description: 'Personal household chef employment',
                    details: ['Daily meal preparation', 'Breakfast, lunch & dinner', 'Custom work schedules', 'Long-term arrangements'],
                    icon: Home 
                  },
                ].map((service) => {
                  const Icon = service.icon;
                  const isSelected = serviceType === service.id;
                  return (
                    <Card
                      key={service.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setServiceType(service.id as ServiceType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setServiceType(service.id as ServiceType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-service-${service.id}`}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <Icon className="w-8 h-8 text-primary" />
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
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{service.label}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                            <ul className="space-y-1.5">
                              {service.details.map((detail, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 2: Occasion */}
          {currentStep === 2 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What's the occasion?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us what you're celebrating
                </p>
              </div>

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
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
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

              {occasion === 'other' && (
                <Card className="max-w-xl mx-auto overflow-visible">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="occasion-custom" className="text-base font-medium">
                        Please describe your occasion
                      </Label>
                      <Textarea
                        id="occasion-custom"
                        placeholder="e.g., Anniversary dinner, graduation party, business meeting..."
                        value={occasionCustom}
                        onChange={(e) => setOccasionCustom(e.target.value)}
                        rows={3}
                        data-testid="input-occasion-custom"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 3: Guest Count */}
          {currentStep === 3 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many guests will you have?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us the number of people who will be dining
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center gap-8">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-primary mb-2" data-testid="text-guest-count">
                      {guestCount}
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {guestCount === 1 ? 'Guest' : 'Guests'}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                      disabled={guestCount <= 1}
                      className="h-16 w-16 rounded-full"
                      data-testid="button-decrease-guest-count"
                      aria-label="Decrease guest count"
                    >
                      <Minus className="w-6 h-6" />
                    </Button>
                    
                    <Button
                      size="lg"
                      onClick={() => setGuestCount(guestCount + 1)}
                      className="h-16 w-16 rounded-full"
                      data-testid="button-increase-guest-count"
                      aria-label="Increase guest count"
                    >
                      <Plus className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    variant={guestCountUnsure ? "default" : "outline"}
                    onClick={() => {
                      setGuestCountUnsure(!guestCountUnsure);
                      if (!guestCountUnsure) {
                        setGuestCountCustom('');
                      }
                    }}
                    data-testid="button-guest-count-unsure"
                  >
                    {guestCountUnsure ? 'Number is set' : 'Not sure / Varies'}
                  </Button>
                </div>

                {guestCountUnsure && (
                  <Card className="max-w-xl mx-auto overflow-visible mt-6">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="guest-count-custom" className="text-base font-medium">
                          Please provide details about the guest count
                        </Label>
                        <Textarea
                          id="guest-count-custom"
                          placeholder="e.g., Between 8-12 people, approximately 20 guests, depends on final RSVPs..."
                          value={guestCountCustom}
                          onChange={(e) => setGuestCountCustom(e.target.value)}
                          rows={3}
                          data-testid="input-guest-count-custom"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 4: Date Selection */}
          {currentStep === 4 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  When do you need the chef?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select one or multiple dates for your event
                </p>
              </div>

              <div className="flex justify-center">
                <div className="inline-block">
                  <Calendar
                    mode="multiple"
                    selected={selectedDates}
                    onSelect={(dates) => setSelectedDates(dates || [])}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    className="rounded-md border"
                    data-testid="calendar-dates"
                  />
                </div>
              </div>

              {selectedDates.length > 0 && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Selected dates:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedDates.map((date, idx) => (
                      <div key={idx} className="px-3 py-1 bg-primary/10 rounded-md text-sm">
                        {date.toLocaleDateString('en-GB')}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <Button
                  variant={datesFlexible ? "default" : "outline"}
                  onClick={() => {
                    setDatesFlexible(!datesFlexible);
                    if (!datesFlexible) {
                      setDatesNote('');
                      setSelectedDates([]);
                    }
                  }}
                  data-testid="button-dates-flexible"
                >
                  {datesFlexible ? 'Specific dates selected' : 'Dates are flexible'}
                </Button>
              </div>

              {datesFlexible && (
                <Card className="max-w-xl mx-auto overflow-visible">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="dates-note" className="text-base font-medium">
                        Please provide details about your preferred timing
                      </Label>
                      <Textarea
                        id="dates-note"
                        placeholder="e.g., Sometime in March, any weekend in April, flexible within the next 2 weeks..."
                        value={datesNote}
                        onChange={(e) => setDatesNote(e.target.value)}
                        rows={3}
                        data-testid="input-dates-note"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 5: Cuisine */}
          {currentStep === 5 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What type of cuisine would you like?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select your preferred culinary style - you can discuss menu details with your chef later
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {cuisineOptions.map((cuis) => {
                  const Icon = cuis.icon;
                  const isSelected = cuisine === cuis.id;
                  return (
                    <Card
                      key={cuis.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setCuisine(cuis.id as CuisineType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setCuisine(cuis.id as CuisineType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-cuisine-${cuis.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium">{cuis.label}</span>
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

              {cuisine === 'not-sure' && (
                <Card className="max-w-xl mx-auto overflow-visible">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="cuisine-custom" className="text-base font-medium">
                        Any preferences or ideas? (Optional)
                      </Label>
                      <Textarea
                        id="cuisine-custom"
                        placeholder="e.g., Mix of Asian cuisines, vegetarian-friendly, spicy food, local Balinese ingredients..."
                        value={cuisineCustom}
                        onChange={(e) => setCuisineCustom(e.target.value)}
                        rows={3}
                        data-testid="input-cuisine-custom"
                      />
                      <p className="text-sm text-muted-foreground">
                        Your chef will create a personalized menu based on your preferences
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 6: Pre-Meeting Option */}
          {currentStep === 6 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Would you like a pre-meeting with your chef?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your chef can arrive 2 hours early to discuss the menu and shop for ingredients
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {[
                  {
                    id: true,
                    label: 'Yes, I want a pre-meeting',
                    description: 'Chef arrives 2 hours early to plan menu and buy fresh ingredients - only hourly rate applies, no extra cost'
                  },
                  {
                    id: false,
                    label: 'No pre-meeting needed',
                    description: 'Chef arrives at the scheduled cooking time with ingredients ready to prepare your meal'
                  },
                ].map((option) => {
                  const isSelected = preMeetingRequested === option.id;
                  return (
                    <Card
                      key={option.id.toString()}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setPreMeetingRequested(option.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setPreMeetingRequested(option.id);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-premeeting-${option.id}`}
                    >
                      <CardContent className="py-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-lg mb-2">{option.label}</p>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
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

              <div className="max-w-2xl mx-auto">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="space-y-3 text-sm">
                      <p className="font-medium">What happens during the pre-meeting:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Discuss your preferences, dietary needs, and finalize the menu together</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Chef personally selects and purchases fresh, high-quality ingredients</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>Shopping time (1-2 hours) is included in the chef's paid working hours</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>You only pay the chef's hourly rate - no additional fees</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 7: Additional Services */}
          {currentStep === 7 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Need any additional services?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We can help coordinate your entire event (optional)
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { id: 'dj-music', label: 'DJ / Music Services', description: 'Professional DJ or live music' },
                  { id: 'decorations', label: 'Event Decorations', description: 'Table settings, flowers, themed decor' },
                  { id: 'photography', label: 'Photography / Videography', description: 'Capture your special moments' },
                  { id: 'coordination', label: 'Event Coordination', description: 'Full event planning and management' },
                  { id: 'other', label: 'Other Services', description: 'Tell us what else you need' },
                ].map((service) => {
                  const isSelected = additionalServices.has(service.id);
                  return (
                    <Card
                      key={service.id}
                      className={`
                        transition-all overflow-visible
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      data-testid={`card-additional-service-${service.id}`}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => {
                              const newServices = new Set(additionalServices);
                              if (newServices.has(service.id)) {
                                newServices.delete(service.id);
                                if (service.id === 'other') setAdditionalServicesOther('');
                              } else {
                                newServices.add(service.id);
                              }
                              setAdditionalServices(newServices);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                const newServices = new Set(additionalServices);
                                if (newServices.has(service.id)) {
                                  newServices.delete(service.id);
                                  if (service.id === 'other') setAdditionalServicesOther('');
                                } else {
                                  newServices.add(service.id);
                                }
                                setAdditionalServices(newServices);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                          >
                            <div className="flex items-center gap-3">
                              <div 
                                className={`
                                  w-5 h-5 flex-shrink-0 rounded border-2 transition-all flex items-center justify-center
                                  ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'}
                                `}
                              >
                                {isSelected && (
                                  <Check className="w-3 h-3 text-primary-foreground" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-lg">{service.label}</p>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                              </div>
                            </div>
                          </div>
                          
                          {isSelected && service.id === 'other' && (
                            <div className="space-y-2 pl-8">
                              <Label htmlFor="additional-services-other" className="text-sm font-medium">
                                Please specify what you need
                              </Label>
                              <Textarea
                                id="additional-services-other"
                                placeholder="E.g., bartender, valet parking, security..."
                                value={additionalServicesOther}
                                onChange={(e) => setAdditionalServicesOther(e.target.value)}
                                rows={3}
                                data-testid="textarea-additional-services-other"
                              />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                  myCHEF can help coordinate these services with trusted partners in Bali.
                  We'll include recommendations and pricing in your quote.
                </p>
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 8: Location */}
          {currentStep === 8 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Where is your event taking place?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Help us match you with a chef in your area
                </p>
              </div>

              <Card className="overflow-visible">
                <CardContent className="pt-6">
                  <div className="space-y-6">
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
                    handleContinue();
                  }}
                  className="gap-2"
                  data-testid="button-skip-address"
                >
                  I don't have the address yet
                </Button>
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 2: Recurring Service Type */}
          {currentStep === 2 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What type of recurring service?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the arrangement that works for you
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
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
                      data-testid={`option-recurring-${service.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-lg mb-1">{service.label}</p>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
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

              {recurringServiceType === 'other' && (
                <Card className="max-w-xl mx-auto overflow-visible">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="recurring-service-custom" className="text-base font-medium">
                        Please describe your recurring service needs
                      </Label>
                      <Textarea
                        id="recurring-service-custom"
                        placeholder="e.g., Monthly dinner parties, weekly cooking classes, seasonal meal service..."
                        value={recurringServiceCustom}
                        onChange={(e) => setRecurringServiceCustom(e.target.value)}
                        rows={3}
                        data-testid="input-recurring-service-custom"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 3: Service Duration */}
          {currentStep === 3 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How long do you need the service?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select the duration
                </p>
              </div>

              <div className="max-w-xl mx-auto space-y-4">
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

          {/* MULTIPLE SERVICE FLOW - Step 4: People Count */}
          {currentStep === 4 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many people will the chef cook for?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Average number of people per meal
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center gap-8">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-primary mb-2" data-testid="text-people-count">
                      {peopleCount}
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {peopleCount === 1 ? 'Person' : 'People'}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                      disabled={peopleCount <= 1}
                      className="h-16 w-16 rounded-full"
                      data-testid="button-decrease-people-count"
                      aria-label="Decrease people count"
                    >
                      <Minus className="w-6 h-6" />
                    </Button>
                    
                    <Button
                      size="lg"
                      onClick={() => setPeopleCount(peopleCount + 1)}
                      className="h-16 w-16 rounded-full"
                      data-testid="button-increase-people-count"
                      aria-label="Increase people count"
                    >
                      <Plus className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    variant={peopleCountUnsure ? "default" : "outline"}
                    onClick={() => {
                      setPeopleCountUnsure(!peopleCountUnsure);
                      if (!peopleCountUnsure) {
                        setPeopleCountCustom('');
                      }
                    }}
                    data-testid="button-people-count-unsure"
                  >
                    {peopleCountUnsure ? 'Number is set' : 'Not sure / Varies'}
                  </Button>
                </div>

                {peopleCountUnsure && (
                  <Card className="max-w-xl mx-auto overflow-visible mt-6">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="people-count-custom" className="text-base font-medium">
                          Please provide details about the people count
                        </Label>
                        <Textarea
                          id="people-count-custom"
                          placeholder="e.g., Typically 4-6 people, varies by day, depends on household guests..."
                          value={peopleCountCustom}
                          onChange={(e) => setPeopleCountCustom(e.target.value)}
                          rows={3}
                          data-testid="input-people-count-custom"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 5: Start Date */}
          {currentStep === 5 && serviceType === 'multiple' && (
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
                <div className="inline-block">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    className="rounded-md border"
                    data-testid="calendar-start-date"
                  />
                </div>
              </div>

              {startDate && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Selected start date:</p>
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-md">
                    {startDate.toLocaleDateString('en-GB')}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 6: Location */}
          {currentStep === 6 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Where will the chef work?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Help us match you with a chef in your area
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
                          Region
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
                          Postal Code <span className="text-muted-foreground font-normal">(Optional)</span>
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
                    handleContinue();
                  }}
                  className="gap-2"
                  data-testid="button-skip-address"
                >
                  I don't have the address yet
                </Button>
              </div>
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 2: Guests Per Meal */}
          {currentStep === 2 && serviceType === 'fulltime' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many guests per meal?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Typical number of people the chef will cook for
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center gap-8">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-primary mb-2" data-testid="text-guests-per-meal">
                      {guestsPerMeal}
                    </div>
                    <p className="text-xl text-muted-foreground">
                      {guestsPerMeal === 1 ? 'Person' : 'People'}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setGuestsPerMeal(Math.max(1, guestsPerMeal - 1))}
                      disabled={guestsPerMeal <= 1}
                      className="h-16 w-16 rounded-full"
                      data-testid="button-decrease-guests-per-meal"
                      aria-label="Decrease guests per meal"
                    >
                      <Minus className="w-6 h-6" />
                    </Button>
                    
                    <Button
                      size="lg"
                      onClick={() => setGuestsPerMeal(guestsPerMeal + 1)}
                      className="h-16 w-16 rounded-full"
                      data-testid="button-increase-guests-per-meal"
                      aria-label="Increase guests per meal"
                    >
                      <Plus className="w-6 h-6" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <Button
                    variant={guestsPerMealVaries ? "default" : "outline"}
                    onClick={() => {
                      setGuestsPerMealVaries(!guestsPerMealVaries);
                      if (!guestsPerMealVaries) {
                        setGuestsPerMealCustom('');
                      }
                    }}
                    data-testid="button-guests-per-meal-varies"
                  >
                    {guestsPerMealVaries ? 'Number is set' : 'Number varies'}
                  </Button>
                </div>

                {guestsPerMealVaries && (
                  <Card className="max-w-xl mx-auto overflow-visible mt-6">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="guests-per-meal-custom" className="text-base font-medium">
                          Please provide details about the varying guest count
                        </Label>
                        <Textarea
                          id="guests-per-meal-custom"
                          placeholder="e.g., Usually 4 people but sometimes 6, varies between 2-8 guests, depends on household visitors..."
                          value={guestsPerMealCustom}
                          onChange={(e) => setGuestsPerMealCustom(e.target.value)}
                          rows={3}
                          data-testid="input-guests-per-meal-custom"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 3: Meal Selection */}
          {currentStep === 3 && serviceType === 'fulltime' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Which meals do you need prepared?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select all meals you'd like your chef to prepare
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { id: 'breakfast', label: 'Breakfast', placeholder: '08:00' },
                  { id: 'lunch', label: 'Lunch', placeholder: '12:00' },
                  { id: 'dinner', label: 'Dinner', placeholder: '19:00' },
                ].map((meal) => {
                  const isSelected = mealsNeeded.has(meal.id);
                  return (
                    <Card
                      key={meal.id}
                      className={`
                        transition-all overflow-visible
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      data-testid={`card-meal-${meal.id}`}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleMeal(meal.id as 'breakfast' | 'lunch' | 'dinner')}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleMeal(meal.id as 'breakfast' | 'lunch' | 'dinner');
                              }
                            }}
                            role="button"
                            tabIndex={0}
                          >
                            <div className="flex items-center gap-3">
                              <div 
                                className={`
                                  w-5 h-5 flex-shrink-0 rounded border-2 transition-all flex items-center justify-center
                                  ${isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'}
                                `}
                              >
                                {isSelected && (
                                  <Check className="w-3 h-3 text-primary-foreground" />
                                )}
                              </div>
                              <span className="font-medium text-lg">{meal.label}</span>
                            </div>
                          </div>
                          
                          {isSelected && (
                            <div className="space-y-2 pl-8">
                              <Label htmlFor={`time-${meal.id}`} className="text-sm font-medium">
                                Approximate time (24-hour format)
                              </Label>
                              <Select
                                value={mealTimes[meal.id as 'breakfast' | 'lunch' | 'dinner'] || ''}
                                onValueChange={(value) => updateMealTime(meal.id as 'breakfast' | 'lunch' | 'dinner', value)}
                              >
                                <SelectTrigger 
                                  id={`time-${meal.id}`}
                                  className="max-w-xs"
                                  data-testid={`select-time-${meal.id}`}
                                >
                                  <SelectValue placeholder={meal.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeOptions.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 4: Work Days */}
          {currentStep === 4 && serviceType === 'fulltime' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many days per week?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose your chef's work schedule
                </p>
              </div>

              <div className="max-w-xl mx-auto space-y-4">
                {workDaysOptions.map((option) => {
                  const isSelected = workDays === option.id;
                  return (
                    <Card
                      key={option.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setWorkDays(option.id as WorkDaysType)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setWorkDays(option.id as WorkDaysType);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-workdays-${option.id}`}
                    >
                      <CardContent className="py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-lg mb-1">{option.label}</p>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
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

              {workDays === 'flexible' && (
                <Card className="max-w-xl mx-auto overflow-visible">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <Label htmlFor="work-days-custom" className="text-base font-medium">
                        Please describe your schedule preferences
                      </Label>
                      <Textarea
                        id="work-days-custom"
                        placeholder="e.g., 3 days per week, weekends only, rotating schedule, specific days like Tuesday/Thursday/Saturday..."
                        value={workDaysCustom}
                        onChange={(e) => setWorkDaysCustom(e.target.value)}
                        rows={3}
                        data-testid="input-work-days-custom"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 5: Grocery Shopping */}
          {currentStep === 5 && serviceType === 'fulltime' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Who handles grocery shopping?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose how you would like the grocery shopping to be managed
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { 
                    id: 'mychef-handles', 
                    label: 'myCHEF handles shopping', 
                    description: 'Our chef will do the grocery shopping (1-2 hours included in working hours)' 
                  },
                  { 
                    id: 'client-handles', 
                    label: 'I handle my own shopping', 
                    description: 'You will provide all groceries and ingredients yourself' 
                  },
                ].map((option) => {
                  const isSelected = groceryHandling === option.id;
                  return (
                    <Card
                      key={option.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => {
                        setGroceryHandling(option.id as 'mychef-handles' | 'client-handles');
                        if (option.id === 'client-handles') {
                          setGroceryPaymentMethod(null);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setGroceryHandling(option.id as 'mychef-handles' | 'client-handles');
                          if (option.id === 'client-handles') {
                            setGroceryPaymentMethod(null);
                          }
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-grocery-${option.id}`}
                    >
                      <CardContent className="py-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-lg mb-2">{option.label}</p>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
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
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 6: Grocery Payment Method (Conditional) */}
          {currentStep === 6 && serviceType === 'fulltime' && groceryHandling === 'mychef-handles' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How will you handle grocery payments?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose your preferred payment method for groceries
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { 
                    id: 'upfront-payment', 
                    label: 'I pay upfront', 
                    description: 'You transfer grocery money to myCHEF, and we handle all purchases' 
                  },
                  { 
                    id: 'daily-money', 
                    label: 'Daily/regular cash to chef', 
                    description: 'You provide money to the chef daily or regularly for grocery shopping' 
                  },
                ].map((option) => {
                  const isSelected = groceryPaymentMethod === option.id;
                  return (
                    <Card
                      key={option.id}
                      className={`
                        cursor-pointer transition-all overflow-visible
                        hover-elevate active-elevate-2
                        ${isSelected ? 'border-2 border-primary bg-primary/5' : 'border-2'}
                      `}
                      onClick={() => setGroceryPaymentMethod(option.id as 'upfront-payment' | 'daily-money')}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setGroceryPaymentMethod(option.id as 'upfront-payment' | 'daily-money');
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      data-testid={`option-payment-${option.id}`}
                    >
                      <CardContent className="py-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="font-medium text-lg mb-2">{option.label}</p>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
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

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Shopping time (1-2 hours) is included in the chef's working hours
                </p>
              </div>
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 7 (or 6): Location */}
          {((currentStep === 7 && groceryHandling === 'mychef-handles') || 
            (currentStep === 6 && groceryHandling === 'client-handles')) && 
           serviceType === 'fulltime' && (
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
                      <Label htmlFor="venue-name-fulltime" className="text-base font-medium">
                        Villa name, Hotel or other
                      </Label>
                      <Input
                        id="venue-name-fulltime"
                        type="text"
                        placeholder="Villa Seminyak, Grand Hyatt Bali..."
                        value={address.venueName}
                        onChange={(e) => updateAddress('venueName', e.target.value)}
                        data-testid="input-venue-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="street-fulltime" className="text-base font-medium">
                        Street Address
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="street-fulltime"
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
                        <Label htmlFor="city-fulltime" className="text-base font-medium">
                          City
                        </Label>
                        <Input
                          id="city-fulltime"
                          type="text"
                          placeholder="Seminyak"
                          value={address.city}
                          onChange={(e) => updateAddress('city', e.target.value)}
                          data-testid="input-city"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="region-fulltime" className="text-base font-medium">
                          Region
                        </Label>
                        <Input
                          id="region-fulltime"
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
                        <Label htmlFor="postal-code-fulltime" className="text-base font-medium">
                          Postal Code <span className="text-muted-foreground font-normal">(Optional)</span>
                        </Label>
                        <Input
                          id="postal-code-fulltime"
                          type="text"
                          placeholder="80361"
                          value={address.postalCode}
                          onChange={(e) => updateAddress('postalCode', e.target.value)}
                          data-testid="input-postal-code"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country-fulltime" className="text-base font-medium">
                          Country
                        </Label>
                        <Select
                          value={address.country}
                          onValueChange={(value) => updateAddress('country', value)}
                        >
                          <SelectTrigger id="country-fulltime" data-testid="select-country">
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
                    handleContinue();
                  }}
                  className="gap-2"
                  data-testid="button-skip-address"
                >
                  I don't have the address yet
                </Button>
              </div>
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 8 (or 7): Dietary Restrictions */}
          {((currentStep === 8 && groceryHandling === 'mychef-handles') || 
            (currentStep === 7 && groceryHandling === 'client-handles')) && 
           serviceType === 'fulltime' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Any dietary restrictions?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tell us about any dietary requirements or preferences (optional)
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="dietary-restrictions" className="text-base font-medium">
                    Dietary restrictions & preferences
                  </Label>
                  <Textarea
                    id="dietary-restrictions"
                    placeholder="E.g., vegetarian, gluten-free, nut allergies, halal, kosher, low-carb..."
                    value={dietaryRestrictions}
                    onChange={(e) => setDietaryRestrictions(e.target.value)}
                    rows={6}
                    className="resize-none text-base"
                    data-testid="textarea-dietary-restrictions"
                  />
                  <p className="text-sm text-muted-foreground">
                    Include any allergies, health requirements, or food preferences
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleContinue}
                  className="gap-2"
                  data-testid="button-skip-dietary"
                >
                  Skip - No restrictions
                </Button>
              </div>
            </div>
          )}

          {/* FINAL CONFIRMATION PAGE - All service types */}
          {isFinalStep() && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Submit Your Request
                </h1>
                <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
                  <p>
                    We've optimized our quote system to make it faster and easier for you.
                  </p>
                  <p>
                    Your request details will be sent securely via WhatsApp.
                  </p>
                  <p>
                    Our team will review your information and call you to confirm all details.
                  </p>
                  <p>
                    Within 24 hours, we'll provide you with a complete price estimate including chef fees, ingredients, and any additional services.
                  </p>
                  <p className="font-medium">
                    All you need to do is confirm, and we'll handle everything else!
                  </p>
                </div>
              </div>

              {/* Summary Card */}
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-6">Your Request Summary</h2>
                  
                  <div className="space-y-4">
                    {serviceType === 'single' && (
                      <>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Service Type:</span>
                          <span className="font-medium">Single Event</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Occasion:</span>
                          <span className="font-medium capitalize">{occasion?.replace(/-/g, ' ')}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Guest Count:</span>
                          <span className="font-medium">{guestCount} {guestCount === 1 ? 'guest' : 'guests'}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Cuisine:</span>
                          <span className="font-medium capitalize">{cuisine}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Date(s):</span>
                          <span className="font-medium">{selectedDates.length} {selectedDates.length === 1 ? 'date' : 'dates'} selected</span>
                        </div>
                      </>
                    )}

                    {serviceType === 'multiple' && (
                      <>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Service Type:</span>
                          <span className="font-medium">Recurring Service</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Service:</span>
                          <span className="font-medium capitalize">{recurringServiceType?.replace(/-/g, ' ')}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium capitalize">{serviceDuration?.replace(/-/g, ' ')}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">People Count:</span>
                          <span className="font-medium">{peopleCount} {peopleCount === 1 ? 'person' : 'people'}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Start Date:</span>
                          <span className="font-medium">{startDate?.toLocaleDateString('en-GB')}</span>
                        </div>
                      </>
                    )}

                    {serviceType === 'fulltime' && (
                      <>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Service Type:</span>
                          <span className="font-medium">Full-time or Part-time Chef</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Guests per Meal:</span>
                          <span className="font-medium">{guestsPerMeal} {guestsPerMeal === 1 ? 'person' : 'people'}</span>
                        </div>
                        {mealsNeeded.size > 0 && (
                          <div className="flex justify-between gap-4 py-2 border-b">
                            <span className="text-muted-foreground">Meals:</span>
                            <span className="font-medium text-right">
                              {Array.from(mealsNeeded).map(meal => 
                                `${meal.charAt(0).toUpperCase() + meal.slice(1)} (${mealTimes[meal as 'breakfast' | 'lunch' | 'dinner'] || '--:--'})`
                              ).join(', ')}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Work Days:</span>
                          <span className="font-medium capitalize">{workDays?.replace(/-/g, ' ')}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Dietary Restrictions:</span>
                          <span className="font-medium">{dietaryRestrictions || 'None specified'}</span>
                        </div>
                      </>
                    )}

                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium text-right">
                        {addressSkipped ? 'Address TBD' : `${address.city}, ${address.region}`}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-center">
                {!isSubmitted ? (
                  <Button
                    size="lg"
                    onClick={handleSubmit}
                    disabled={submitMutation.isPending}
                    className="gap-2 px-8 py-6 text-lg"
                    data-testid="button-submit-whatsapp"
                  >
                    <Send className="w-5 h-5" />
                    {submitMutation.isPending ? 'Sending...' : 'Send Request via WhatsApp'}
                  </Button>
                ) : (
                  <div className="flex items-center gap-3 text-lg text-primary">
                    <Check className="w-6 h-6" />
                    <span>Opening WhatsApp...</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Continue Button (for non-final steps) */}
          {!isFinalStep() && (
            <div className="space-y-6">
              <div className="flex justify-center pt-8">
                <Button
                  size="lg"
                  onClick={handleContinue}
                  disabled={!canContinue()}
                  className="px-8"
                  data-testid="button-continue"
                >
                  Continue
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground max-w-md mx-auto">
                <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                <p>Your information is secure and will only be used to prepare your personalized quote. We never spam or share your data.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
