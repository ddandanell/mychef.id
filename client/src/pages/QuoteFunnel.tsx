import { useState } from 'react';
import { Cake, Umbrella, CheckCircle2, Home, PartyPopper, Users, Heart, Briefcase, ChefHat, MoreHorizontal, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type ServiceType = 'single' | 'multiple' | null;
type OccasionType = 'birthday' | 'family-reunion' | 'bachelor-bachelorette' | 'friends-gathering' | 'romantic-night' | 'corporate' | 'foodie-adventure' | 'other' | null;

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

  const handleContinue = () => {
    if (currentStep === 1 && serviceType) {
      setCurrentStep(2);
    } else if (currentStep === 2 && occasion) {
      setCurrentStep(3);
      // More steps will be added as user provides screenshots
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canContinue = () => {
    if (currentStep === 1) return !!serviceType;
    if (currentStep === 2) return !!occasion;
    return false;
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

          {/* Placeholder for future steps */}
          {currentStep === 3 && (
            <div className="text-center">
              <p className="text-muted-foreground">Step 3 will be added next...</p>
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
