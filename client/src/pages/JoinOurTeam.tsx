import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChefHat, Users, Wine, Sparkles, Globe2, CheckCircle, MessageCircle, Mail, MapPin, DollarSign, TrendingUp, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { WHATSAPP_NUMBER } from '@/lib/whatsappCTA';
import heroImage from '@assets/generated_images/Professional_hospitality_team_photo_ae49b5f5.png';

type RoleType = 'chef' | 'bartender' | 'server' | 'event' | 'multiple' | '';

export default function JoinOurTeam() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RoleType>('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    locationOther: '',
    country: '',
    countryOther: '',
    positions: [] as string[],
    experienceYears: '',
    experienceDetails: '',
    cuisines: [] as string[],
    dishesSpecialty: '',
    bartenderSpecialties: [] as string[],
    serviceExperience: '',
    eventExperience: '',
    englishLevel: '',
    otherLanguages: '',
    availability: [] as string[],
    transport: '',
    salaryExpectations: '',
    whyJoin: '',
    additionalInfo: '',
    agreement: false,
  });

  const handleRoleSelection = (role: RoleType) => {
    setSelectedRole(role);
    window.scrollTo({ 
      top: document.getElementById('application-form')?.offsetTop! - 100, 
      behavior: 'smooth' 
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: 'Agreement Required',
        description: 'Please confirm that your information is accurate.',
        variant: 'destructive',
      });
      return;
    }

    console.log('Form submitted:', { ...formData, selectedRole });
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Card className="text-center p-8 border-2 border-primary/20 hover-elevate">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-in fade-in zoom-in duration-500">
                <CheckCircle className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
              Thank You for Your Application!
            </h1>
            <p className="text-lg text-foreground/80 mb-6">
              We've received your information and will review it within 2-3 business days.
            </p>
            <div className="bg-muted/30 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-lg mb-3">What Happens Next?</h3>
              <ul className="text-left space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Our recruitment team will review your qualifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>If selected, we'll contact you via WhatsApp to schedule an interview</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Successful candidates will undergo a trial session</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>We'll discuss rates, scheduling, and onboarding details</span>
                </li>
              </ul>
            </div>
            <p className="text-foreground/70 mb-6">
              <strong>Questions about your application?</strong> Contact us anytime:
            </p>
            <Button
              size="lg"
              onClick={() => setLocation('/contact/confirm?source=careers')}
              className="mb-4"
              data-testid="button-whatsapp-contact"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: {WHATSAPP_NUMBER}
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-br from-muted via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/95 z-10"></div>
        <img 
          src={heroImage} 
          alt="Professional hospitality team" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <Award className="w-3 h-3 mr-1" />
              Join a Growing Team - 1000+ Events Delivered Since 2012
            </Badge>
            <h1 className="font-serif text-4xl lg:text-6xl font-semibold mb-6" data-testid="text-hero-headline">
              Build Your Career with myCHEF Indonesia
            </h1>
            <p className="text-lg lg:text-2xl text-foreground/70 max-w-4xl mx-auto mb-8">
              We're seeking exceptional chefs, bartenders, servers, and event professionals from around the world
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="gap-2 py-2 px-4 bg-background/50 backdrop-blur-sm">
                <Globe2 className="w-4 h-4" />
                All Nationalities Welcome
              </Badge>
              <Badge variant="outline" className="gap-2 py-2 px-4 bg-background/50 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4" />
                Competitive Opportunities
              </Badge>
              <Badge variant="outline" className="gap-2 py-2 px-4 bg-background/50 backdrop-blur-sm">
                <Users className="w-4 h-4" />
                Flexible Schedules
              </Badge>
            </div>

            <p className="text-sm text-foreground/60 mb-8">
              Based in Bali • Expanding across Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Role - Interactive Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4">
              What Role Interests You?
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Select your area of expertise to see customized application requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card 
              className={`cursor-pointer transition-all duration-300 hover-elevate active-elevate-2 ${selectedRole === 'chef' ? 'ring-2 ring-primary border-primary bg-primary/5' : ''}`}
              onClick={() => handleRoleSelection('chef')}
              data-testid="card-role-chef"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${selectedRole === 'chef' ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                  <ChefHat className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Chef / Cook</h3>
                <p className="text-sm text-foreground/70">All cuisines & specialties</p>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 hover-elevate active-elevate-2 ${selectedRole === 'bartender' ? 'ring-2 ring-primary border-primary bg-primary/5' : ''}`}
              onClick={() => handleRoleSelection('bartender')}
              data-testid="card-role-bartender"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${selectedRole === 'bartender' ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                  <Wine className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Bartender</h3>
                <p className="text-sm text-foreground/70">Cocktails & beverages</p>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 hover-elevate active-elevate-2 ${selectedRole === 'server' ? 'ring-2 ring-primary border-primary bg-primary/5' : ''}`}
              onClick={() => handleRoleSelection('server')}
              data-testid="card-role-server"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${selectedRole === 'server' ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Service Staff</h3>
                <p className="text-sm text-foreground/70">Waiters & servers</p>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 hover-elevate active-elevate-2 ${selectedRole === 'event' ? 'ring-2 ring-primary border-primary bg-primary/5' : ''}`}
              onClick={() => handleRoleSelection('event')}
              data-testid="card-role-event"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${selectedRole === 'event' ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Event Staff</h3>
                <p className="text-sm text-foreground/70">Coordinators & support</p>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 hover-elevate active-elevate-2 ${selectedRole === 'multiple' ? 'ring-2 ring-primary border-primary bg-primary/5' : ''}`}
              onClick={() => handleRoleSelection('multiple')}
              data-testid="card-role-multiple"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${selectedRole === 'multiple' ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                  <Globe2 className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Multiple Roles</h3>
                <p className="text-sm text-foreground/70">Multi-talented</p>
              </CardContent>
            </Card>
          </div>

          {!selectedRole && (
            <div className="text-center mt-8 text-foreground/60">
              <p>👆 Select a role above to begin your application</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form - Conditional Based on Role */}
      {selectedRole && (
        <section id="application-form" className="py-16 lg:py-24 bg-background animate-in fade-in slide-in-from-bottom duration-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Application for: {selectedRole === 'chef' ? 'Chef / Cook' : selectedRole === 'bartender' ? 'Bartender' : selectedRole === 'server' ? 'Service Staff' : selectedRole === 'event' ? 'Event Staff' : 'Multiple Roles'}
              </Badge>
              <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4">
                Professional Application Form
              </h2>
              <p className="text-lg text-foreground/70">
                Provide comprehensive information about your background and skills
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">1</span>
                      </div>
                      <h3 className="text-2xl font-semibold">Personal Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          data-testid="input-full-name"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">WhatsApp Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+62"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          data-testid="input-phone"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          data-testid="input-email"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="country">Country / Nationality *</Label>
                        <Input
                          id="country"
                          required
                          placeholder="e.g., Indonesia, Australia, Japan, USA"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          data-testid="input-country"
                          className="mt-1"
                        />
                        <p className="text-xs text-foreground/60 mt-1">All nationalities welcome</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="location">Current Location *</Label>
                        <Select
                          required
                          value={formData.location}
                          onValueChange={(value) => setFormData({ ...formData, location: value })}
                        >
                          <SelectTrigger id="location" data-testid="select-location" className="mt-1">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bali-seminyak">Bali - Seminyak</SelectItem>
                            <SelectItem value="bali-canggu">Bali - Canggu</SelectItem>
                            <SelectItem value="bali-ubud">Bali - Ubud</SelectItem>
                            <SelectItem value="bali-sanur">Bali - Sanur</SelectItem>
                            <SelectItem value="bali-nusa-dua">Bali - Nusa Dua</SelectItem>
                            <SelectItem value="bali-uluwatu">Bali - Uluwatu</SelectItem>
                            <SelectItem value="bali-jimbaran">Bali - Jimbaran</SelectItem>
                            <SelectItem value="bali-other">Bali - Other Area</SelectItem>
                            <SelectItem value="jakarta">Jakarta</SelectItem>
                            <SelectItem value="surabaya">Surabaya</SelectItem>
                            <SelectItem value="bandung">Bandung</SelectItem>
                            <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                            <SelectItem value="medan">Medan</SelectItem>
                            <SelectItem value="semarang">Semarang</SelectItem>
                            <SelectItem value="lombok">Lombok</SelectItem>
                            <SelectItem value="other-indonesia">Other Indonesian City</SelectItem>
                            <SelectItem value="other-international">International / Other Country</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {(formData.location === 'other-indonesia' || formData.location === 'other-international' || formData.location === 'bali-other') && (
                        <div>
                          <Label htmlFor="locationOther">Please Specify Location *</Label>
                          <Input
                            id="locationOther"
                            required
                            placeholder="Enter your specific location"
                            value={formData.locationOther}
                            onChange={(e) => setFormData({ ...formData, locationOther: e.target.value })}
                            className="mt-1"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                      <h3 className="text-2xl font-semibold">Professional Experience</h3>
                    </div>

                    <div>
                      <Label htmlFor="experienceYears">Years of Professional Experience *</Label>
                      <Select
                        required
                        value={formData.experienceYears}
                        onValueChange={(value) => setFormData({ ...formData, experienceYears: value })}
                      >
                        <SelectTrigger id="experienceYears" data-testid="select-experience-years" className="mt-1">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 years (Minimum accepted)</SelectItem>
                          <SelectItem value="2-5">2-5 years (Preferred)</SelectItem>
                          <SelectItem value="5-10">5-10 years (Highly valued)</SelectItem>
                          <SelectItem value="10-plus">10+ years (Expert level)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-foreground/60 mt-1">
                        We prefer experienced professionals. Minimum 1 year required.
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="experienceDetails">Detailed Work History *</Label>
                      <p className="text-sm text-foreground/60 mb-2">
                        List previous employers, positions held, responsibilities, and achievements
                      </p>
                      <Textarea
                        id="experienceDetails"
                        required
                        rows={6}
                        placeholder={`Example:\n• Head Chef at Mozaic Restaurant Ubud (2020-2024)\n  - Led team of 8 chefs, created seasonal menus\n  - Specialized in French-Indonesian fusion\n• Sous Chef at Four Seasons Resort (2018-2020)\n  - Managed kitchen operations for 200+ guests daily`}
                        value={formData.experienceDetails}
                        onChange={(e) => setFormData({ ...formData, experienceDetails: e.target.value })}
                        data-testid="textarea-experience-details"
                        className="mt-1 font-mono text-sm"
                      />
                    </div>
                  </div>

                  {/* Role-Specific Sections */}
                  {(selectedRole === 'chef' || selectedRole === 'multiple') && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-4 border-b-2">
                        <ChefHat className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-semibold">Chef / Cook Expertise</h3>
                      </div>

                      <div>
                        <Label className="text-base mb-3 block">Cuisine Specialties * (Select all that apply)</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {[
                            'Indonesian Traditional', 'Balinese', 'Javanese', 'Padang',
                            'Japanese / Sushi', 'Italian', 'French', 'Chinese', 'Thai', 
                            'Indian', 'Mexican', 'Mediterranean', 'Korean', 'Vietnamese', 
                            'Middle Eastern', 'Spanish', 'Greek', 'American BBQ',
                            'Pastry & Desserts', 'Vegetarian / Vegan', 'Fusion / Modern',
                            'Molecular Gastronomy', 'Raw / Healthy', 'Other'
                          ].map((cuisine) => (
                            <div key={cuisine} className="flex items-start space-x-2">
                              <Checkbox
                                id={`cuisine-${cuisine}`}
                                checked={formData.cuisines.includes(cuisine)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setFormData({ ...formData, cuisines: [...formData.cuisines, cuisine] });
                                  } else {
                                    setFormData({ ...formData, cuisines: formData.cuisines.filter(c => c !== cuisine) });
                                  }
                                }}
                              />
                              <Label htmlFor={`cuisine-${cuisine}`} className="font-normal text-sm cursor-pointer leading-tight">
                                {cuisine}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="dishesSpecialty">Signature Dishes & Specialties *</Label>
                        <p className="text-sm text-foreground/60 mb-2">
                          What dishes are you known for? What makes you exceptional?
                        </p>
                        <Textarea
                          id="dishesSpecialty"
                          required={selectedRole === 'chef'}
                          rows={4}
                          placeholder='e.g., "Handmade fresh pasta, expert in risotto, traditional wood-fired Neapolitan pizza, 8 years sushi training in Tokyo"'
                          value={formData.dishesSpecialty}
                          onChange={(e) => setFormData({ ...formData, dishesSpecialty: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}

                  {(selectedRole === 'bartender' || selectedRole === 'multiple') && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-4 border-b-2">
                        <Wine className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-semibold">Bartender Expertise</h3>
                      </div>

                      <div>
                        <Label className="text-base mb-3 block">Specialties * (Select all that apply)</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'Classic Cocktails', 'Modern Mixology', 'Molecular Mixology',
                            'Wine Service & Sommelier', 'Beer Specialist', 'Non-alcoholic Cocktails',
                            'Flair Bartending', 'Event Bar Setup', 'Tropical Cocktails',
                            'Craft Cocktails', 'Bar Management', 'Other'
                          ].map((specialty) => (
                            <div key={specialty} className="flex items-start space-x-2">
                              <Checkbox
                                id={`bartender-${specialty}`}
                                checked={formData.bartenderSpecialties.includes(specialty)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setFormData({ ...formData, bartenderSpecialties: [...formData.bartenderSpecialties, specialty] });
                                  } else {
                                    setFormData({ ...formData, bartenderSpecialties: formData.bartenderSpecialties.filter(s => s !== specialty) });
                                  }
                                }}
                              />
                              <Label htmlFor={`bartender-${specialty}`} className="font-normal text-sm cursor-pointer leading-tight">
                                {specialty}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {(selectedRole === 'server' || selectedRole === 'multiple') && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-4 border-b-2">
                        <Users className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-semibold">Service Experience</h3>
                      </div>

                      <div>
                        <Label htmlFor="serviceExperience">Service Background & Skills *</Label>
                        <Textarea
                          id="serviceExperience"
                          required={selectedRole === 'server'}
                          rows={4}
                          placeholder="Describe your service experience: table service, fine dining, event serving, villa service, hospitality training, customer service skills..."
                          value={formData.serviceExperience}
                          onChange={(e) => setFormData({ ...formData, serviceExperience: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}

                  {(selectedRole === 'event' || selectedRole === 'multiple') && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 pb-4 border-b-2">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-semibold">Event Experience</h3>
                      </div>

                      <div>
                        <Label htmlFor="eventExperience">Event Coordination & Support Skills *</Label>
                        <Textarea
                          id="eventExperience"
                          required={selectedRole === 'event'}
                          rows={4}
                          placeholder="Describe your event experience: coordination, setup, logistics, team management, equipment handling, problem-solving..."
                          value={formData.eventExperience}
                          onChange={(e) => setFormData({ ...formData, eventExperience: e.target.value })}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}

                  {/* Languages & Availability */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">3</span>
                      </div>
                      <h3 className="text-2xl font-semibold">Languages & Availability</h3>
                    </div>

                    <div>
                      <Label>English Proficiency * (Required for client communication)</Label>
                      <RadioGroup
                        required
                        value={formData.englishLevel}
                        onValueChange={(value) => setFormData({ ...formData, englishLevel: value })}
                        className="mt-3 space-y-3"
                      >
                        <div className="flex items-start space-x-2 p-3 rounded-lg border hover-elevate">
                          <RadioGroupItem value="fluent" id="english-fluent" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="english-fluent" className="font-medium cursor-pointer">
                              Fluent / Native
                            </Label>
                            <p className="text-xs text-foreground/60">Excellent communication, can handle complex conversations</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-3 rounded-lg border hover-elevate">
                          <RadioGroupItem value="good" id="english-good" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="english-good" className="font-medium cursor-pointer">
                              Good / Conversational
                            </Label>
                            <p className="text-xs text-foreground/60">Can communicate clearly with clients and team</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 p-3 rounded-lg border hover-elevate">
                          <RadioGroupItem value="basic" id="english-basic" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="english-basic" className="font-medium cursor-pointer">
                              Basic / Intermediate
                            </Label>
                            <p className="text-xs text-foreground/60">Can handle simple communications, working to improve</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label htmlFor="otherLanguages">Additional Languages</Label>
                      <Input
                        id="otherLanguages"
                        placeholder="e.g., Bahasa Indonesia, Mandarin, Japanese, French, Spanish"
                        value={formData.otherLanguages}
                        onChange={(e) => setFormData({ ...formData, otherLanguages: e.target.value })}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label className="text-base mb-3 block">Availability * (Select all that apply)</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekend Days', 'Weekend Evenings', 'Holidays', 'Fully Flexible - Anytime'].map((time) => (
                          <div key={time} className="flex items-center space-x-2">
                            <Checkbox
                              id={`availability-${time}`}
                              checked={formData.availability.includes(time)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setFormData({ ...formData, availability: [...formData.availability, time] });
                                } else {
                                  setFormData({ ...formData, availability: formData.availability.filter(a => a !== time) });
                                }
                              }}
                            />
                            <Label htmlFor={`availability-${time}`} className="font-normal cursor-pointer">
                              {time}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Transportation *</Label>
                      <RadioGroup
                        required
                        value={formData.transport}
                        onValueChange={(value) => setFormData({ ...formData, transport: value })}
                        className="mt-3 space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="motorbike" id="transport-motorbike" />
                          <Label htmlFor="transport-motorbike" className="font-normal cursor-pointer">
                            Own motorbike
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="car" id="transport-car" />
                          <Label htmlFor="transport-car" className="font-normal cursor-pointer">
                            Own car
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="can-arrange" id="transport-arrange" />
                          <Label htmlFor="transport-arrange" className="font-normal cursor-pointer">
                            Can arrange transportation
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="transport-no" />
                          <Label htmlFor="transport-no" className="font-normal cursor-pointer">
                            Need transportation assistance
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Compensation Expectations */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b-2">
                      <DollarSign className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-semibold">Compensation Expectations</h3>
                    </div>

                    <div>
                      <Label htmlFor="salaryExpectations">Your Rate Expectations *</Label>
                      <p className="text-sm text-foreground/60 mb-2">
                        What is your desired hourly or event rate? (in IDR)
                      </p>
                      <Input
                        id="salaryExpectations"
                        required
                        placeholder="Enter your desired rate (hourly or per event)"
                        value={formData.salaryExpectations}
                        onChange={(e) => setFormData({ ...formData, salaryExpectations: e.target.value })}
                        className="mt-1"
                      />
                      <p className="text-xs text-foreground/60 mt-1">
                        We'll discuss final rates during the interview process
                      </p>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">4</span>
                      </div>
                      <h3 className="text-2xl font-semibold">About You</h3>
                    </div>

                    <div>
                      <Label htmlFor="whyJoin">Why do you want to join myCHEF Indonesia? *</Label>
                      <Textarea
                        id="whyJoin"
                        required
                        rows={4}
                        placeholder="Tell us about your career goals, what attracts you to this opportunity, and what you can bring to our team..."
                        value={formData.whyJoin}
                        onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                        data-testid="textarea-why-join"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        rows={3}
                        placeholder="Certifications, awards, special skills, references, or anything else we should know..."
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Agreement */}
                  <div className="bg-muted/50 p-6 rounded-lg border-2">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreement"
                        required
                        checked={formData.agreement}
                        onCheckedChange={(checked) => setFormData({ ...formData, agreement: checked as boolean })}
                        data-testid="checkbox-agreement"
                        className="mt-1"
                      />
                      <Label htmlFor="agreement" className="cursor-pointer leading-relaxed">
                        I confirm that all information provided is accurate and complete. I understand that myCHEF Indonesia will review my application and contact me via WhatsApp if selected for an interview. I authorize myCHEF Indonesia to contact my references and verify my work history. *
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 shadow-xl"
                    data-testid="button-submit-application"
                  >
                    Submit Professional Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="requirements" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                What are the minimum requirements to apply?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p className="mb-2">While we prefer experienced professionals with 2+ years of experience, we consider candidates with:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Minimum 1 year of professional experience</li>
                  <li>Basic English communication skills</li>
                  <li>Professional attitude and passion for hospitality</li>
                  <li>Legal right to work in Indonesia (for on-site positions)</li>
                  <li>Exceptional talent may be considered even with less experience</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="foreigners" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                Do you accept international applicants?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p className="mb-2">Yes! We welcome applicants from all countries and backgrounds:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Indonesian nationals</li>
                  <li>Foreign residents already in Indonesia</li>
                  <li>International professionals willing to relocate to Indonesia</li>
                  <li>You must have or be able to obtain proper work authorization</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compensation" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                How does compensation work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <p className="mb-2">We offer competitive, flexible compensation:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hourly rates based on your role, experience, and specialty</li>
                  <li>Event-based rates for larger bookings</li>
                  <li>Rates negotiated individually based on your qualifications</li>
                  <li>Payment per event/booking (not salaried)</li>
                  <li>Flexible schedule - work as much or as little as you want</li>
                  <li>Opportunity to build a full-time income or supplement existing work</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="process" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                What is the hiring process?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Application Review:</strong> We review all applications within 2-3 business days</li>
                  <li><strong>Initial Contact:</strong> Selected candidates receive a WhatsApp message to schedule an interview</li>
                  <li><strong>Interview:</strong> Casual conversation about your experience, skills, and goals</li>
                  <li><strong>Trial Session:</strong> Successful candidates complete a paid trial event</li>
                  <li><strong>Onboarding:</strong> If approved, we discuss rates, scheduling, and add you to our roster</li>
                  <li><strong>First Booking:</strong> Start receiving booking opportunities based on your availability</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certificates" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                Do I need formal certifications or culinary school diplomas?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                No! While formal training is valued, we prioritize skills and experience over paperwork. Many of our best professionals are self-taught or trained through apprenticeships. What matters is your ability to deliver exceptional results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="locations" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                Where do you operate? Only Bali?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We're based in Bali but expanding across Indonesia! Current and planned locations: Bali (all areas), Jakarta, Surabaya, Bandung, Yogyakarta, Lombok, and other major Indonesian cities. We're also exploring international opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="schedule" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                Is this full-time or part-time work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                Completely flexible! You choose your availability. Some professionals work with us full-time and build substantial income, others use it as supplemental income alongside other commitments. You control your schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="response" className="bg-card border-2 rounded-lg px-6 hover-elevate">
              <AccordionTrigger className="hover:no-underline">
                When will I hear back about my application?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                We review all applications within 2-3 business days. Qualified candidates will receive a WhatsApp message to schedule an interview. If you don't hear from us within a week, feel free to follow up via WhatsApp or email.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Join a Growing Team?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            {selectedRole ? 'Complete the application form above to get started' : 'Select your role above to begin your professional application'}
          </p>

          <div className="mt-12 pt-8 border-t">
            <p className="text-lg font-semibold mb-4">Have questions before applying?</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setLocation('/contact/confirm?source=careers')}
                data-testid="button-whatsapp-footer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: {WHATSAPP_NUMBER}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'mailto:hello@mychef.id'}
                data-testid="button-email-footer"
              >
                <Mail className="w-5 h-5 mr-2" />
                hello@mychef.id
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-card border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-semibold text-lg mb-2">myCHEF Indonesia</h3>
          <div className="space-y-1 text-sm text-foreground/70 mb-4">
            <p className="flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp: {WHATSAPP_NUMBER}
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Email: hello@mychef.id
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Based in Seminyak, Bali • Serving All Indonesia
            </p>
          </div>
          <p className="text-xs text-foreground/60">© 2024 myCHEF Indonesia • Since 2012</p>
        </div>
      </footer>
    </div>
  );
}
