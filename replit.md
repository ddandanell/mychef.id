# myCHEF Indonesia - Landing Website

## Overview
This project is a single-page landing website for myCHEF Indonesia, a premium private chef booking service operating exclusively in Bali. The website, `mychef.id`, aims to provide a seamless booking experience for clients seeking in-villa dining, emphasizing transparency, professionalism, and high-quality service. The business, established in 2012, has delivered over 1000 experiences, focusing on personalized culinary services for various occasions from intimate dinners to large events.

## User Preferences
- **Location Focus:** Bali ONLY (no Jakarta, Java, or international references)
- **Time Format:** 24-hour format everywhere (09:00 - 22:00 WIB, no AM/PM)
- **WhatsApp CTAs:** Every button opens with section-specific pre-filled messages
- **Mobile-First:** 100% mobile-optimized design
- **Trustworthiness:** Emphasis on safety, background checks, verified reviews, insurance
- **Professional Standards:** Clean, professional, transparent communication
- **Currency:** All pricing in Indonesian Rupiah (IDR)

## System Architecture

### UI/UX Decisions
- **Design Approach:** Mobile-first, responsive design with touch-friendly elements.
- **Color Scheme:** Primary use of WhatsApp Green (HSL 142 76% 36%) for brand consistency.
- **Visual Elements:**
    - Instagram-style testimonial carousels with story-based reviews.
    - Glassmorphism effect for trust badges.
    - Dual-row auto-scrolling galleries for testimonials and experience overview to showcase volume and dynamism.
    - Alternating section backgrounds for visual depth and hierarchy.
    - Professional imagery, including AI-generated photos for career pages.
- **Spacing Standards:** Consistent padding (`py-16 lg:py-24` for sections, `px-4 sm:px-6 lg:px-8` for containers), grid gaps (`gap-6 lg:gap-8`), and headline margins (`mb-4`, `mb-12`).

### Technical Implementations
- **Core Features:**
    - **WhatsApp Integration & Conversion Tracking (Unified System):** All CTAs route through `/contact/confirm?source=X` conversion tracking page before opening WhatsApp. This includes all 9 main sections (hero, experience, pricing, faq, howItWorks, testimonials, locations, chefProfiles, whyChoose), 7 city landing pages, floating WhatsApp button, footer button, and quote funnel help button. Each source triggers a Google Analytics `contact_initiation` event with section-specific labels. The confirmation page displays for 2 seconds with the topic, tracks the conversion, then auto-redirects to WhatsApp with pre-filled messages.
    - **Geolocation & Personalization:** Server-side city detection using the visitor's IP address (via ipapi.co) that dynamically personalizes the entire site with their exact Bali location (Seminyak, Canggu, Ubud, etc.). The server extracts the real client IP from request headers (X-Forwarded-For or socket), calls ipapi.co server-side for maximum accuracy, and returns the city name. Results cached for 24 hours in localStorage. Falls back to "Bali" for non-Bali visitors or on detection errors.
    - **Trust Signals:** Prominent display of 6 trust badges (background checks, certifications, insurance), 100% Satisfaction Guarantee, and 4.9/5 average rating.
    - **Testimonial System:** 50+ authentic, detailed story-based reviews with click-to-expand functionality and hover-to-pause auto-scrolling.
    - **Cookie Consent:** GDPR-compliant banner matching site design, controlling Google Analytics activation.
    - **SEO Optimization:** Comprehensive meta tags (title, description, keywords, author, robots, language), geo tags (Bali-specific), Open Graph, Twitter Cards, JSON-LD Structured Data (LocalBusiness schema), `robots.txt`, `sitemap.xml`, canonical URLs, dynamic SEO component, and descriptive alt text for images.
    - **Performance Optimization:** Lazy loading for most images, async decoding, eager loading for hero images, optimized font loading (`display=swap`), and GPU acceleration for animations.
    - **Quote Funnel (Optimized):** Accessible via footer link for post-consultation use. Streamlined multi-step quote form at `/quote` with three improved flows designed for maximum clarity:
        - **Single Event (8 steps):** Service type → Occasion → Guest count → Date selection → Cuisine preference → Pre-meeting option → Location (with skip option) → Professional confirmation page
            - **Pre-meeting feature:** Clients can request chef arrive 2 hours early to discuss menu and personally shop for fresh ingredients - only hourly rate applies, no extra cost
            - Improved question order: asks for most important details (guest count, dates) before secondary preferences (cuisine, pre-meeting)
            - Clear, helpful descriptions prevent users from getting stuck
        - **Recurring Service (7 steps):** Service type → Recurring type → Duration → People count → Start date → Location (with skip option) → Professional confirmation page
            - Reordered for logical flow: what → how long → who → when → where
            - Simplified progression makes it easier to complete
        - **Full-Time or Part-Time Chef (9 or 10 steps):** Service type → Guests per meal → Meal selection (breakfast/lunch/dinner with times) → Work days → Grocery handling (who shops) → Grocery payment method (conditional: only if myCHEF handles) → Location (with skip option) → Dietary restrictions → Professional confirmation page
            - Grocery shopping feature includes professional options for who handles shopping (myCHEF or client)
            - If myCHEF handles shopping, clients choose payment method (upfront or daily cash to chef)
            - Shopping time (1-2 hours) explicitly noted as included in chef's paid working hours
            - Full back/forward navigation with intelligent step skipping for conditional payment step
        - All flows end with a professional confirmation page explaining the WhatsApp submission process, team review, callback, and pricing estimate delivery within 24 hours.
        - Optimized question ordering across all funnels ensures users never get stuck and can easily understand each step.
        - Each service type includes specific examples in descriptions (birthdays for single events, meal prep for recurring, daily household chef for full-time).
- **Key Sections:** Hero, Experience Overview, How It Works, Why Choose, Trust & Safety Badges, Testimonial Carousel, Chef Profiles, Locations, Occasions Grid, Transparent Pricing, Ingredient Shopping (dedicated section), Sample Menus (Indonesian & Asian), Complete Party Solutions, FAQ, Booking Tips, Footer.
- **Additional Pages:** Privacy Policy, Terms of Service (both Bali-specific legal content), professional `Join Our Team` recruitment page with a dynamic conditional application form, and Admin panel at `/admin/quotes` for viewing and managing quote submissions.

### System Design Choices
- **Messaging:** Emphasis on "perfect match" for chef selection, villa/home dining, background-checked chefs, transparent pricing, and professional service with cleanup included.
- **Ingredient Shopping (Preferred Method):** Most customers prefer the transparent shopping model where the chef arrives 2 hours before the event, spends 30 minutes planning the menu with the client, receives cash, then shops at the best local markets for exactly what's needed. This provides complete quality control, budget transparency, and flexibility for multiple meals.
- **Payment & Cancellation:** Clear policies: 50% deposit when booking, 50% the day before event starts, with tiered refund system for cancellations.
- **Service Area:** Strictly Bali locations.
- **Recruitment:** Careers page accepting all nationalities, minimum 1 year experience, no salary examples displayed.

### Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS + Shadcn UI components
- **Icons:** Lucide React, React Icons
- **Routing:** Wouter
- **Storage:** In-memory (MemStorage)
- **Data Standards:** Centralized UN-recognized country list (`shared/countries.ts`) with all 195 official UN short names for consistent global address handling

## Google Analytics Tracking (Sales Funnel)
Comprehensive event tracking automatically integrated with Google Analytics without requiring any special setup:

### Cookie Consent & GDPR Compliance
- Cookie banner controls Google Analytics activation
- Tracking only enabled after user accepts cookies
- Consent stored in localStorage, respects user choice across sessions

### Tracked Events

#### 1. Contact Initiation (`contact_initiation`)
- **Triggered:** When user visits `/contact/confirm` conversion tracking page from any CTA
- **Event Category:** Contact
- **Event Label:** Source location with 18 distinct identifiers: `hero`, `experience`, `pricing`, `faq`, `howItWorks`, `testimonials`, `locations`, `chefProfiles`, `whyChoose`, `floatingButton`, `footer`, `quoteFunnel`, `city-seminyak`, `city-canggu`, `city-ubud`, `city-sanur`, `city-nusa-dua`, `city-uluwatu`, `city-jimbaran`
- **Value:** 1
- **Purpose:** Track which sections and pages generate the most contact interest
- **Flow:** User clicks CTA → Redirects to `/contact/confirm?source=X` → GA event fires → Shows confirmation page for 2 seconds → Auto-redirects to WhatsApp with pre-filled message

#### 2. Quote Funnel Submission (`generate_lead`)
- **Triggered:** When user successfully submits quote form
- **Event Category:** Quote Funnel
- **Event Label:** Service type (single, multiple, fulltime)
- **Value:** 1
- **Purpose:** Track lead generation and conversion from quote funnel

#### 3. Quote Funnel Step Progression (`quote_funnel_progress`)
- **Triggered:** On each step advancement in quote funnel (step 2+)
- **Event Category:** Quote Funnel
- **Event Label:** `{service_type}_step_{step_number}`
- **Parameters:**
  - `step`: Current step number
  - `service_type`: Type of service (single, multiple, fulltime)
- **Purpose:** Identify drop-off points and optimize funnel flow

### Sales Funnel Visualization in Google Analytics
The tracking creates a complete sales funnel:
1. **Awareness:** Page views, section scrolls
2. **Interest:** Contact initiation events from various sections
3. **Consideration:** Quote funnel entry (step 1)
4. **Intent:** Quote funnel progression (steps 2-9)
5. **Conversion:** Quote submission (generate_lead event) → WhatsApp contact

### Performance Optimizations & Architecture Changes (October 2025)
- Updated browserslist database to latest version
- Optimized context providers with useCallback and useMemo
- All images use lazy loading with proper alt attributes
- Font loading optimized with display=swap
- Browser cache warnings eliminated
- **Unified Conversion Tracking (October 28, 2025):** Removed ContactChoiceDialog and ContactDialogContext in favor of single `/contact/confirm` conversion page. All CTAs (18+ sources) now route through unified tracking system for cleaner analytics and improved conversion measurement. Quote funnel remains accessible via footer for manual use after consultation.

## External Dependencies
- **WhatsApp:** For direct customer communication and booking inquiries.
- **Google Analytics (G-W0PQH8ZKTF):** For website traffic analysis and comprehensive sales funnel tracking (GDPR-compliant).
- **Payment Gateways:** Visa, MasterCard, and other major credit/debit card processors for online payments.
- **Geolocation API:** ipapi.co for server-side city detection using visitor's real IP address (free tier, no API key required).