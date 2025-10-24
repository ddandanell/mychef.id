# myCHEF Indonesia - Landing Website

## Project Overview
Single-page landing website for myCHEF Indonesia, a private chef booking service exclusively serving Bali.

**Website Domain:** mychef.id

## Business Information

### Contact Details
- **WhatsApp:** +62 822-3756-5997
- **Email:** indonesia@mychef.id
- **Address:** Jl. Sunset Road No. 88, Seminyak, Bali 80361
- **Business Hours:** 09:00 - 22:00 WIB (Daily)

### Social Media
- Instagram: https://www.instagram.com/mychefindonesia/
- Facebook: https://www.facebook.com/mychefindonesia/

### Payment Methods
- Online Payment: Visa, MasterCard, and all major credit/debit cards
- Bank Transfers
- Cash: Indonesian Rupiah (IDR) only

## Service Details

### Service Area
Exclusively serving Bali locations:
- Seminyak
- Canggu
- Ubud
- Sanur
- Nusa Dua
- Uluwatu
- Jimbaran

### Pricing Structure
- **Chef Service Fees:** Rp 800,000 - 1,200,000+/hour
- **Minimum Service:** 3-4 hours for most dinners
- **Deposit:** 30-50% to secure booking
- **Payment Policy:** Full payment must be completed before chef arrives at villa
- **Ingredient Sourcing:** 
  - Option 1: We source ingredients - separate bill for groceries (market price + 15-20% fee)
  - Option 2: Customer purchases ingredients themselves using chef's shopping list

### Pricing Examples by Group Size
1. **Intimate Dinner (2 guests):** From Rp 2,500,000
2. **Family Gathering (4-6 guests):** From Rp 3,500,000
3. **Villa Party (8-12 guests):** From Rp 5,500,000
4. **Large Event (15-20 guests):** From Rp 8,000,000

### Cancellation Policy
- 7+ days before service: Full refund minus 10% admin fee
- 3-6 days before: 50% refund
- Less than 3 days: No refund
- Emergency situations handled case-by-case

## Design & Technical Details

### Color Scheme
- **Primary Color (WhatsApp Green):** HSL 142 76% 36%
- Mobile-first design approach
- WhatsApp-green color scheme throughout

### Key Features
1. **WhatsApp Integration:** Section-specific pre-filled messages for each CTA button
2. **Floating WhatsApp Chat Button:** Persistent across all pages with official WhatsApp logo
3. **Cookie Consent Banner:** Matches site design
4. **Trust Signals:**
   - 6 trust badges emphasizing background checks, certifications, insurance
   - Instagram-style testimonial carousel with 50+ verified reviews
   - Reviews include discovery journey (how they found us) and full story
   - 100% Satisfaction Guarantee
   - 4.9/5 average rating display
5. **Testimonial Carousel:**
   - 50+ authentic reviews in horizontal scroll format
   - Story-based format showing occasion, discovery method, full experience
   - Relatable scenarios: parties, family dinners, business meetings, honeymoons
   - Discovery journeys: Google search, Instagram, villa recommendations, friend referrals
   - Reviews dated Aug 2023 - Dec 2024

### Sections (15 Total)
1. Hero Section with image carousel
2. Experience Overview with gallery
3. How It Works (5-step process)
4. Why Choose (animated stats + split cards)
5. Trust & Safety Badges
6. Instagram-Style Testimonial Carousel (50+ reviews with stories)
7. Chef Profiles / Perfect Match
8. Locations (Bali coverage)
9. Occasions Grid
10. Transparent Pricing
11. Sample Menus (10 examples: 6 Indonesian + 4 Asian cuisines)
12. Complete Party Solutions (equipment rentals, services)
13. FAQ Section
14. Booking Tips
15. Footer

### Additional Pages
- Privacy Policy (Bali-specific legal content)
- Terms of Service (Bali-specific legal content)
- Join Our Team (/join-our-team) - Professional careers/recruitment page

### Spacing Standards
- **Section Padding:** py-16 lg:py-24
- **Container Padding:** px-4 sm:px-6 lg:px-8
- **Grid Gaps:** gap-6 lg:gap-8
- **Headlines with subheadline:** mb-4
- **Headlines without subheadline:** mb-12
- **Subheadlines:** mb-12
- **Content before buttons:** mb-12

### Mobile Optimization
- Responsive text sizing
- Touch-friendly buttons with shortened text on mobile
- Proper spacing for mobile viewports
- Image optimization for mobile

## User Preferences

### Important Requirements
- **Location Focus:** Bali ONLY (no Jakarta, Java, or international references)
- **Time Format:** 24-hour format everywhere (09:00 - 22:00 WIB, no AM/PM)
- **WhatsApp CTAs:** Every button opens with section-specific pre-filled messages
- **Mobile-First:** 100% mobile-optimized design
- **Trustworthiness:** Emphasis on safety, background checks, verified reviews, insurance
- **Professional Standards:** Clean, professional, transparent communication
- **Currency:** All pricing in Indonesian Rupiah (IDR)

### Key Messaging
- "Perfect match" concept for chef selection
- Emphasis on villa/home dining experiences
- Background-checked and certified chefs
- Transparent pricing with no hidden fees
- Professional service with full cleanup included

## Tech Stack
- Frontend: React, TypeScript, Vite
- Backend: Express
- Styling: Tailwind CSS + Shadcn UI components
- Icons: Lucide React, React Icons
- Routing: Wouter
- Storage: In-memory (MemStorage)

## SEO Optimization

### Comprehensive SEO Implementation
- **Meta Tags:** Complete primary meta tags including title, description, keywords, author, robots, language
- **Geo Tags:** Location-specific tags for Bali targeting (ID-BA region, coordinates)
- **Open Graph:** Full OG tags for Facebook and social media sharing
- **Twitter Cards:** Complete Twitter Card metadata for enhanced social sharing
- **JSON-LD Structured Data:** LocalBusiness schema with:
  - Business information (name, description, contact)
  - Address and geo-coordinates
  - Opening hours (09:00 - 22:00 WIB daily)
  - Price range and payment methods
  - Aggregate rating (4.9/5)
  - Service catalog
- **robots.txt:** Configured for optimal crawling
- **sitemap.xml:** All pages indexed (Home, Privacy Policy, Terms of Service)
- **Canonical URLs:** Proper canonical links on all pages
- **Dynamic SEO Component:** React component for page-specific meta tag management
- **Alt Text:** All images have descriptive alt attributes for accessibility and SEO
- **Page-Specific Optimization:**
  - Home: "Hire a Private Chef at Home in Bali & Indonesia"
  - Privacy Policy: Privacy practices and data handling
  - Terms of Service: Booking policies and service agreements

## Recent Updates (December 2024)

### Phase 1: Content & Performance (Early December)
- **Testimonial Carousel:** Created Instagram-style horizontal scroll with 50+ authentic story-based reviews
- **Sample Menus Expansion:** Added 4 new Asian cuisine menus (Thai, Japanese, Chinese, Padang) - now 10 total examples
- **International Cuisine Section:** Expanded from 9 to 18 cuisines with signature dishes:
  - Japanese: Omakase, Wagyu, sushi & ramen
  - Italian: Fresh pasta, risotto, tiramisu
  - French: Coq au vin, crème brûlée
  - Thai, Indian, Chinese, Korean, Spanish, Greek
  - Vietnamese, Lebanese, American BBQ
  - Mexican, Peruvian, Brazilian
  - Moroccan, Turkish, Modern Fusion
  - 4-column grid layout on large screens
  - Each cuisine shows specific signature dishes
- **Complete Party Solutions:** Added equipment rental and additional services section
- **Image Performance Optimization:** Implemented comprehensive image loading optimizations:
  - Lazy loading for all images except critical above-the-fold hero image
  - Async decoding on all images for non-blocking rendering
  - First hero image loads eagerly with high priority
  - Remaining images (gallery, carousel) load progressively as user scrolls
  - Optimized font loading with display=swap (reduced to Inter + Playfair Display only)
  - GPU acceleration for smooth animations
  - Mobile horizontal scroll fix: Added overflow-x-hidden globally and flex-row to testimonial carousel

### Phase 2: Trust & Professionalism Enhancements (Late December)
- **Hero Section Trust Signals:**
  - Added prominent 4.9/5 star rating display with "1000+ Reviews"
  - Redesigned trust badges with glassmorphism effect (backdrop blur, white overlay)
  - Added "1000+ Experiences", "100% Insured", "Since 2012" badges
  - Added "We reply within 10 minutes • 09:00-22:00 WIB Daily" promise
  - Enhanced CTA button with shadow for prominence

- **Trust Badges Section Enhancement:**
  - Added professional certification badges (Police-Verified, HACCP Certified, Health Certified)
  - Enhanced with "Trusted by 1000+ Guests Since 2012" badge header
  - Added Health & Hygiene Standards and Villa Partner Network points
  - Redesigned guarantee section with 3 prominent badges (100% Satisfaction, 24/7 Support, Secure Data)
  - Changed background to muted/30 for better visual hierarchy

- **FAQ Section Improvements:**
  - Reordered questions to prioritize most important (booking, pricing, safety first)
  - Added safety/insurance FAQ as 3rd question
  - Enhanced visual design with border-2, hover effects
  - Changed background to bg-background for alternating sections

- **Chef Profiles Professional Credentials:**
  - Added professional credential badges (5+ Years Experience, Background Checked, HACCP Certified)
  - Enhanced Expert Matching and Diverse Specialties cards with mini badges (AI-Powered, 50+ Chefs)
  - Improved border styling for visual hierarchy

- **Testimonial Carousel Redesign (Dual-Row Auto-Scroll):**
  - Completely redesigned with TWO rows of reviews scrolling in opposite directions
  - Auto-scrolling animation (top row scrolls left, bottom row scrolls right)
  - Infinite loop effect showing volume of 1000+ reviews
  - Verified checkmark icons and badges on every review
  - More authentic, trustworthy review language
  - Updated dates to include 2025 reviews
  - Smooth continuous motion showcasing testimonial volume

- **Visual Hierarchy Improvements:**
  - Implemented alternating section backgrounds for depth
  - Improved typography contrast across all sections
  - Enhanced card styling with consistent borders and hover effects

### Phase 3: Careers Page Development (January 2025)
- **Join Our Team Page Created:**
  - Professional hero section with AI-generated hospitality team photo
  - Interactive role selection cards (Chef, Bartender, Server, Event Staff, Multiple Roles)
  - Dynamic conditional form that shows only relevant fields based on selected role
  - Comprehensive 4-section numbered application form
  - All nationalities welcome - accepts applicants from any country
  - Minimum 1 year experience requirement, preferring 2+ years
  - Salary expectations field for applicants to provide their rate expectations
  - NO salary examples or ranges shown (discussed during interview)
  - NO social media or portfolio fields (discussed during interview if needed)
  - NO remote work references (focus on in-person positions in Indonesia)
  - FAQ section with 8 questions covering requirements, international applicants, compensation, hiring process
  - Link added to footer only (not in main navigation)
  - Mobile-responsive with smooth animations and professional "big company" feel

## Project History
- Started: 2024
- Business established: 2012
- Total experiences delivered: 1000+
- Current status: Active landing page development with full SEO optimization
