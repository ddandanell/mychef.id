import { useState } from 'react';
import { Cake, Umbrella, CheckCircle2, Home, PartyPopper, Users, Heart, Briefcase, ChefHat, MoreHorizontal, ArrowLeft, MapPin, Wine, Flame, Package, Music, UserCheck, Utensils, Pizza, Fish, Croissant, Leaf, Apple, UtensilsCrossed, Soup, Egg } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type ServiceType = 'single' | 'multiple' | null;
type OccasionType = 'birthday' | 'family-reunion' | 'bachelor-bachelorette' | 'friends-gathering' | 'romantic-night' | 'corporate' | 'foodie-adventure' | 'other' | null;
type GuestCountType = '2' | '3-6' | '7-12' | '13+' | null;
type AdditionalServiceType = 'food-only' | 'bartender' | 'grilling' | 'equipment-rental' | 'music-speakers' | 'wait-staff';
type CuisineType = 'indonesian' | 'italian' | 'mediterranean' | 'seafood' | 'french' | 'japanese' | 'asian' | 'thai' | 'chinese' | 'indian' | 'mexican' | 'bbq' | 'fusion' | 'vegan-vegetarian' | 'chef-special' | null;

interface AddressData {
  street: string;
  city: string;
  region: string;
  postalCode: string;
}

const guestCountOptions = [
  { id: '2', label: '2 people' },
  { id: '3-6', label: '3 to 6 people' },
  { id: '7-12', label: '7 to 12 people' },
  { id: '13+', label: '13+ people' },
] as const;

const additionalServices = [
  { id: 'food-only', label: 'Food only (Chef service)', icon: ChefHat, description: 'Professional chef prepares your meal' },
  { id: 'bartender', label: 'Bartender service', icon: Wine, description: 'Professional bartender for drinks' },
  { id: 'grilling', label: 'BBQ & Grilling', icon: Flame, description: 'Live BBQ grilling experience' },
  { id: 'equipment-rental', label: 'Equipment rental', icon: Package, description: 'Tables, chairs, decorations' },
  { id: 'music-speakers', label: 'Music & Sound system', icon: Music, description: 'DJ or sound equipment' },
  { id: 'wait-staff', label: 'Wait staff & Servers', icon: UserCheck, description: 'Professional service staff' },
] as const;

const cuisineOptions = [
  { id: 'indonesian', label: 'Indonesian', icon: Utensils },
  { id: 'italian', label: 'Italian', icon: Pizza },
  { id: 'mediterranean', label: 'Mediterranean', icon: Leaf },
  { id: 'seafood', label: 'Seafood/Fish', icon: Fish },
  { id: 'french', label: 'French', icon: Croissant },
  { id: 'japanese', label: 'Japanese', icon: UtensilsCrossed },
  { id: 'asian', label: 'Asian Fusion', icon: Soup },
  { id: 'thai', label: 'Thai', icon: Flame },
  { id: 'chinese', label: 'Chinese', icon: Utensils },
  { id: 'indian', label: 'Indian', icon: Apple },
  { id: 'mexican', label: 'Mexican', icon: Egg },
  { id: 'bbq', label: 'BBQ & Grilling', icon: Flame },
  { id: 'fusion', label: 'Fusion', icon: ChefHat },
  { id: 'vegan-vegetarian', label: 'Vegan/Vegetarian', icon: Leaf },
  { id: 'chef-special', label: "Chef's special", icon: ChefHat },
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

export default function QuoteFunnel() {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [occasion, setOccasion] = useState<OccasionType>(null);
  const [address, setAddress] = useState<AddressData>({
    street: '',
    city: '',
    region: '',
    postalCode: '',
  });
  const [guestCount, setGuestCount] = useState<GuestCountType>(null);
  const [selectedServices, setSelectedServices] = useState<Set<AdditionalServiceType>>(new Set(['food-only']));
  const [cuisine, setCuisine] = useState<CuisineType>(null);

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

  const handleContinue = () => {
    if (currentStep === 1 && serviceType) {
      setCurrentStep(2);
    } else if (currentStep === 2 && occasion) {
      setCurrentStep(3);
    } else if (currentStep === 3 && isAddressValid()) {
      setCurrentStep(4);
    } else if (currentStep === 4 && guestCount) {
      setCurrentStep(5);
    } else if (currentStep === 5 && selectedServices.size > 0) {
      setCurrentStep(6);
    } else if (currentStep === 6 && cuisine) {
      setCurrentStep(7);
      // More steps will be added as user provides screenshots
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isAddressValid = () => {
    return address.street.trim() !== '' && 
           address.city.trim() !== '' && 
           address.region.trim() !== '';
  };

  const canContinue = () => {
    if (currentStep === 1) return !!serviceType;
    if (currentStep === 2) return !!occasion;
    if (currentStep === 3) return isAddressValid();
    if (currentStep === 4) return !!guestCount;
    if (currentStep === 5) return selectedServices.size > 0;
    if (currentStep === 6) return !!cuisine;
    return false;
  };

  const updateAddress = (field: keyof AddressData, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Trust Signals Banner */}
      <div className="border-b bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>QUOTES IN 20 MIN</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>NO COMMITMENT</span>
            </div>
          </div>
        </div>
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

          {/* Step 2: Occasion */}
          {currentStep === 2 && (
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

          {/* Step 3: Event Location */}
          {currentStep === 3 && (
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
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Guest Count */}
          {currentStep === 4 && (
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

                {/* Helpful Note */}
                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg" data-testid="note-guest-count-flexible">
                  <p className="text-sm text-center">
                    Not sure? You can change it later!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Additional Services */}
          {currentStep === 5 && (
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

          {/* Step 6: Cuisine Selection */}
          {currentStep === 6 && (
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  What are you craving?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  If you need more inspiration, try the Chef's Special.
                </p>
              </div>

              {/* Cuisine Options Grid */}
              <div className="max-w-3xl mx-auto">
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
                        onClick={() => setCuisine(option.id as CuisineType)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setCuisine(option.id as CuisineType);
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
              </div>
            </div>
          )}

          {/* Placeholder for future steps */}
          {currentStep === 7 && (
            <div className="text-center">
              <p className="text-muted-foreground">Step 7 will be added next...</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
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
    </div>
  );
}
