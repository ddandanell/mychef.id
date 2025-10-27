import { useState } from 'react';
import { Cake, CheckCircle2, Home, PartyPopper, Users, Heart, Briefcase, ChefHat, MoreHorizontal, ArrowLeft, MapPin, Utensils, Flame, UtensilsCrossed, Apple, Soup, Calendar as CalendarIcon, Send, Check, Globe, Minus, Plus } from 'lucide-react';
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
type CuisineType = 'indonesian' | 'thai' | 'japanese' | 'chinese' | 'indian' | 'asian' | null;
type RecurringServiceType = 'meal-prep' | 'weekly-shifts' | 'extended-stay' | 'live-in' | 'other' | null;
type ServiceDurationType = '1-week' | '2-weeks' | '1-month' | '2-3-months' | '6-months' | '1-year' | 'ongoing' | null;
type WorkDaysType = 'monday-friday' | 'all-week' | null;

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

function formatQuoteForWhatsApp(data: any): string {
  let message = '🍽️ *myCHEF Quote Request*\n\n';
  
  if (data.serviceType === 'single') {
    message += '*Service Type:* Single Event\n';
    message += `*Occasion:* ${data.occasion?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    message += `*Guest Count:* ${data.guestCount} guests\n`;
    message += `*Cuisine:* ${data.cuisine?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    
    if (data.selectedDates && data.selectedDates.length > 0) {
      const dates = data.selectedDates.map((d: string) => new Date(d).toLocaleDateString('en-GB')).join(', ');
      message += `*Date(s):* ${dates}\n`;
    }
  } else if (data.serviceType === 'multiple') {
    message += '*Service Type:* Recurring Service\n';
    message += `*Service:* ${data.recurringServiceType?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    message += `*Duration:* ${data.serviceDuration?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    message += `*Number of People:* ${data.peopleCount} people\n`;
    
    if (data.startDate) {
      message += `*Start Date:* ${new Date(data.startDate).toLocaleDateString('en-GB')}\n`;
    }
  } else if (data.serviceType === 'fulltime') {
    message += '*Service Type:* Full-time Chef\n';
    message += `*Guests per Meal:* ${data.guestsPerMeal} people\n`;
    
    if (data.mealsNeeded && data.mealsNeeded.length > 0) {
      message += '*Meals Needed:*\n';
      data.mealsNeeded.forEach((meal: string) => {
        const time = data.mealTimes?.[meal] || 'Time TBD';
        message += `  • ${meal.charAt(0).toUpperCase() + meal.slice(1)}: ${time} WIB\n`;
      });
    }
    
    message += `*Work Days:* ${data.workDays?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A'}\n`;
    
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
] as const;

export default function QuoteFunnel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  
  // Single service state
  const [occasion, setOccasion] = useState<OccasionType>(null);
  const [guestCount, setGuestCount] = useState<number>(2);
  const [cuisine, setCuisine] = useState<CuisineType>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  
  // Multiple service state
  const [recurringServiceType, setRecurringServiceType] = useState<RecurringServiceType>(null);
  const [serviceDuration, setServiceDuration] = useState<ServiceDurationType>(null);
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  
  // Full-time chef state
  const [guestsPerMeal, setGuestsPerMeal] = useState<number>(2);
  const [mealsNeeded, setMealsNeeded] = useState<Set<string>>(new Set());
  const [mealTimes, setMealTimes] = useState<{breakfast?: string, lunch?: string, dinner?: string}>({});
  const [workDays, setWorkDays] = useState<WorkDaysType>(null);
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
          guestCount: guestCount.toString(),
          cuisine: cuisine!,
          selectedDates: selectedDates.map(d => d.toISOString()),
        };
      } else if (serviceType === 'multiple') {
        payload = {
          ...payload,
          recurringServiceType: recurringServiceType!,
          serviceDuration: serviceDuration!,
          peopleCount: peopleCount.toString(),
          startDate: startDate!.toISOString(),
        };
      } else if (serviceType === 'fulltime') {
        payload = {
          ...payload,
          guestsPerMeal: guestsPerMeal.toString(),
          mealsNeeded: Array.from(mealsNeeded),
          mealTimes: mealTimes,
          dietaryRestrictions: dietaryRestrictions || null,
          workDays: workDays!,
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
    if (serviceType === 'single') return 7;
    if (serviceType === 'multiple') return 7;
    if (serviceType === 'fulltime') return 7;
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
      if (currentStep === 2) return occasion !== null;
      if (currentStep === 3) return isAddressValid() || addressSkipped;
      if (currentStep === 4) return guestCount >= 1;
      if (currentStep === 5) return cuisine !== null;
      if (currentStep === 6) return selectedDates.length > 0;
      if (currentStep === 7) return true;
    }
    
    if (serviceType === 'multiple') {
      if (currentStep === 2) return recurringServiceType !== null;
      if (currentStep === 3) return serviceDuration !== null;
      if (currentStep === 4) return isAddressValid() || addressSkipped;
      if (currentStep === 5) return peopleCount >= 1;
      if (currentStep === 6) return startDate !== undefined;
      if (currentStep === 7) return true;
    }
    
    if (serviceType === 'fulltime') {
      if (currentStep === 2) return guestsPerMeal >= 1;
      if (currentStep === 3) return mealsNeeded.size > 0 && Array.from(mealsNeeded).every(meal => mealTimes[meal as 'breakfast' | 'lunch' | 'dinner']?.trim());
      if (currentStep === 4) return workDays !== null;
      if (currentStep === 5) return isAddressValid() || addressSkipped;
      if (currentStep === 6) return true;
      if (currentStep === 7) return true;
    }
    
    return false;
  };

  const handleContinue = () => {
    if (!canContinue()) return;
    
    if (currentStep < getTotalSteps()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setLocation('/');
    }
  };

  const handleSubmit = async () => {
    submitMutation.mutate();
  };

  const isFinalStep = () => {
    if (serviceType === 'single') return currentStep === 7;
    if (serviceType === 'multiple') return currentStep === 7;
    if (serviceType === 'fulltime') return currentStep === 7;
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
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { id: 'single', label: 'Single Event', description: 'One-time chef service for a special occasion', icon: ChefHat },
                  { id: 'multiple', label: 'Recurring Service', description: 'Regular chef service for multiple days', icon: Users },
                  { id: 'fulltime', label: 'Full-time Chef', description: 'Dedicated personal chef', icon: Home },
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
                            <p className="text-sm text-muted-foreground">{service.description}</p>
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
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 3: Location */}
          {currentStep === 3 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Where is your event?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We need your address to match you with the perfect chef
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

          {/* SINGLE SERVICE FLOW - Step 4: Guest Count */}
          {currentStep === 4 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many guests?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Number of people to be served
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
              </div>
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 5: Cuisine */}
          {currentStep === 5 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What type of cuisine?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose your preferred culinary style
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
            </div>
          )}

          {/* SINGLE SERVICE FLOW - Step 6: Date Selection */}
          {currentStep === 6 && serviceType === 'single' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  When do you need the chef?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select one or multiple dates
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

          {/* MULTIPLE SERVICE FLOW - Step 5: People Count */}
          {currentStep === 5 && serviceType === 'multiple' && (
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  How many people will the chef cook for?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Typical number of people per meal
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
              </div>
            </div>
          )}

          {/* MULTIPLE SERVICE FLOW - Step 6: Start Date */}
          {currentStep === 6 && serviceType === 'multiple' && (
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
                                Approximate time
                              </Label>
                              <Input
                                id={`time-${meal.id}`}
                                type="time"
                                placeholder={meal.placeholder}
                                value={mealTimes[meal.id as 'breakfast' | 'lunch' | 'dinner'] || ''}
                                onChange={(e) => updateMealTime(meal.id as 'breakfast' | 'lunch' | 'dinner', e.target.value)}
                                className="max-w-xs"
                                data-testid={`input-time-${meal.id}`}
                              />
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
            </div>
          )}

          {/* FULLTIME CHEF FLOW - Step 5: Location */}
          {currentStep === 5 && serviceType === 'fulltime' && (
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

          {/* FULLTIME CHEF FLOW - Step 6: Dietary Restrictions */}
          {currentStep === 6 && serviceType === 'fulltime' && (
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
                          <span className="font-medium">Full-time Chef</span>
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
          )}
        </div>
      </div>
    </div>
  );
}
