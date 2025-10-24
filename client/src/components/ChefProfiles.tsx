import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Star } from 'lucide-react';
import chef1 from '@assets/generated_images/Asian_male_chef_headshot_c57200a1.png';
import chef2 from '@assets/generated_images/Female_chef_headshot_09b0d1cc.png';
import chef3 from '@assets/generated_images/Caucasian_male_chef_headshot_5d9787fa.png';

const WHATSAPP_NUMBER = '+6282237565997';

const CHEFS = [
  {
    name: 'Chef Earn Khng',
    rating: 4.4,
    services: 146,
    image: chef1,
    bio: 'Bali-based culinary enthusiast specializing in Asian fusion and modern Indonesian cuisine. Known for creative twists on traditional recipes using local Bali ingredients. Can source ingredients from trusted Seminyak suppliers or work with your preferred vendors.',
    specialties: ['Indonesian', 'Thai', 'Modern Asian', 'Fusion'],
    rate: 'Rp 800,000/hour',
  },
  {
    name: 'Chef Idah Gram',
    rating: 4.5,
    services: 153,
    image: chef2,
    bio: 'Executive Chef specializing in Mediterranean and South American with 15 years at top Seminyak restaurants. Perfect for villa seafood BBQs and sunset dinners. Expert at sourcing the freshest seafood from Jimbaran markets.',
    specialties: ['Mediterranean', 'Seafood', 'BBQ', 'South American'],
    rate: 'Rp 900,000/hour',
  },
  {
    name: 'Chef David Low',
    rating: 4.5,
    services: 104,
    image: chef3,
    bio: "'The World is My Claypot!' - Master of traditional Indonesian cooking methods meets modern techniques. Famous for his rijsttafel and authentic Balinese feasts. Has strong relationships with local ingredient suppliers across Bali.",
    specialties: ['Indonesian Traditional', 'Balinese Ceremonial', 'Nusantara'],
    rate: 'Rp 850,000/hour',
  },
  {
    name: 'Chef Thila Samy',
    rating: 4.4,
    services: 39,
    image: chef1,
    bio: 'Chef and Trainer with fusion expertise. Combines Indian, Indonesian, and Western techniques for unique villa dining experiences across Bali and Jakarta. Happy to coordinate ingredient delivery to your location.',
    specialties: ['Fusion', 'Indian', 'Contemporary Asian'],
    rate: 'Rp 800,000/hour',
  },
  {
    name: 'Chef Wocholas Liew',
    rating: 4.9,
    services: 38,
    image: chef2,
    bio: 'Passionate about food and wine pairing. Creates memorable experiences for families and groups in Bali villas with emphasis on local wine and craft cocktail pairings. Can recommend and source wine selections.',
    specialties: ['Fine Dining', 'Wine Pairing', 'European', 'Contemporary'],
    rate: 'Rp 1,100,000/hour',
  },
  {
    name: 'Chef Faruq Anwar',
    rating: 4.2,
    services: 20,
    image: chef3,
    bio: "'Passion displayed through the art of food' - Specialist in modern Indonesian and fusion cuisine. Perfect for contemporary villa dining experiences. Works with organic suppliers in Canggu and Ubud areas.",
    specialties: ['Indonesian Modern', 'Fusion', 'Plated Fine Dining'],
    rate: 'Rp 850,000/hour',
  },
  {
    name: 'Chef Simone Fraternali',
    rating: 4.9,
    services: 9,
    image: chef1,
    bio: 'Modern Italian Chef bringing authentic flavors to Bali. Fresh pasta made in your villa kitchen, risottos with local ingredients, traditional Italian techniques. Can source Italian imports or work with local alternatives.',
    specialties: ['Italian', 'Pasta', 'Mediterranean'],
    rate: 'Rp 1,000,000/hour',
  },
  {
    name: 'Chef Nicolas Reynard',
    rating: null,
    services: null,
    newChef: true,
    image: chef2,
    bio: 'Learn and cook French cuisine in your own kitchen! Interactive cooking experiences and classic French fine dining for Bali villa guests. Expert at adapting French techniques to Indonesian ingredients.',
    specialties: ['French Classic', 'Cooking Classes', 'Interactive Dining'],
    rate: 'Rp 1,200,000/hour',
  },
  {
    name: 'Chef Gaezvin Kaur',
    rating: 4.2,
    services: 6,
    image: chef3,
    bio: "Thrill-seeker in the kitchen, always chasing the next challenge—whether it's exploring uncharted flavors, perfecting a technique, or creating an adventure on a plate. Loves working with exotic ingredients.",
    specialties: ['Experimental', 'Molecular', 'Fusion'],
    rate: 'Rp 900,000/hour',
  },
  {
    name: 'Chef Karyn Aw',
    rating: 4.7,
    services: 4,
    image: chef1,
    bio: 'Self-taught culinary enthusiast with a deep love for creating unforgettable dining experiences. Specializes in intimate dinners and romantic settings in Bali villas.',
    specialties: ['Contemporary', 'Romantic Dining', 'Farm-to-Table'],
    rate: 'Rp 800,000/hour',
  },
  {
    name: 'Chef Anandhu Ambi',
    rating: 3.9,
    services: 4,
    image: chef2,
    bio: 'Culinary storyteller, crafting dishes that harmoniously balance flavor, textures, and presentation to evoke emotions and spark memories. Every plate tells a story.',
    specialties: ['Contemporary', 'Multi-Cultural', 'Storytelling Cuisine'],
    rate: 'Rp 800,000/hour',
  },
  {
    name: 'Chef Mcginn Tan',
    rating: 5.0,
    services: 2,
    image: chef3,
    bio: 'Trained at a 5-star hotel in Singapore with expertise in French, Italian, Japanese, Chinese and Fusion cuisine. Brings international hotel standards to private villa dining.',
    specialties: ['Multi-Cuisine', 'French', 'Italian', 'Japanese', 'Chinese'],
    rate: 'Rp 1,000,000/hour',
  },
  {
    name: 'Chef Lionel Texier',
    rating: 4.8,
    services: 2,
    image: chef1,
    bio: 'Passionate self-taught chef with experience in private dining, specializing in the refined artistry of classic French and Italian cuisine. Perfectionist approach to every dish.',
    specialties: ['French Classic', 'Italian', 'Fine Dining'],
    rate: 'Rp 1,100,000/hour',
  },
];

export default function ChefProfiles() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl lg:text-5xl font-semibold text-center mb-4" data-testid="text-chefs-headline">
          Indonesia's Finest Private Chefs
        </h2>
        <p className="text-lg text-center text-foreground/70 mb-12" data-testid="text-chefs-subheadline">
          From traditional Indonesian masters to international culinary experts - all based in Bali and ready to cook in your home
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {CHEFS.map((chef, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-chef-${index}`}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-24 h-24 rounded-full object-cover mb-3"
                    data-testid={`img-chef-${index}`}
                  />
                  {chef.newChef ? (
                    <Badge variant="secondary" className="text-xs mb-2">New to myCHEF</Badge>
                  ) : (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-semibold" data-testid={`text-chef-${index}-rating`}>{chef.rating}</span>
                      </div>
                      <span className="text-sm text-foreground/60">•</span>
                      <span className="text-sm text-foreground/60" data-testid={`text-chef-${index}-services`}>
                        {chef.services} services
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3" data-testid={`text-chef-${index}-name`}>
                  {chef.name}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 text-center" data-testid={`text-chef-${index}-bio`}>
                  {chef.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {chef.specialties.map((specialty, i) => (
                    <Badge key={i} variant="secondary" className="text-xs" data-testid={`badge-chef-${index}-specialty-${i}`}>
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <p className="text-lg font-semibold text-center text-primary mb-4" data-testid={`text-chef-${index}-rate`}>
                  Starting from: {chef.rate}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary hover:bg-primary text-primary-foreground hover-elevate active-elevate-2"
                  data-testid={`button-chef-${index}-whatsapp`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-accent/30 border-accent mb-8">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-foreground/80 leading-relaxed" data-testid="text-pricing-disclaimer">
              <strong>Important note:</strong> Rates shown are starting prices for chef service only and do not include ingredients. Most dinners are 3-4 hours of service. Final pricing depends on menu complexity, number of guests, and service duration. Contact us on WhatsApp for exact quotes.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-4 text-base lg:text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-chefs-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Find Your Perfect Chef - WhatsApp Us Now
          </Button>
        </div>
      </div>
    </section>
  );
}
