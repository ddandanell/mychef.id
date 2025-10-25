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
    - **WhatsApp Integration:** Section-specific pre-filled messages for all CTA buttons and a persistent floating WhatsApp button.
    - **Trust Signals:** Prominent display of 6 trust badges (background checks, certifications, insurance), 100% Satisfaction Guarantee, and 4.9/5 average rating.
    - **Testimonial System:** 50+ authentic, detailed story-based reviews with click-to-expand functionality and hover-to-pause auto-scrolling.
    - **Cookie Consent:** GDPR-compliant banner matching site design, controlling Google Analytics activation.
    - **SEO Optimization:** Comprehensive meta tags (title, description, keywords, author, robots, language), geo tags (Bali-specific), Open Graph, Twitter Cards, JSON-LD Structured Data (LocalBusiness schema), `robots.txt`, `sitemap.xml`, canonical URLs, dynamic SEO component, and descriptive alt text for images.
    - **Performance Optimization:** Lazy loading for most images, async decoding, eager loading for hero images, optimized font loading (`display=swap`), and GPU acceleration for animations.
    - **Conversion Tracking:** Custom Google Analytics events fired via an interstitial confirmation page for all WhatsApp CTAs.
- **Key Sections:** Hero, Experience Overview, How It Works, Why Choose, Trust & Safety Badges, Testimonial Carousel, Chef Profiles, Locations, Occasions Grid, Transparent Pricing, Sample Menus (Indonesian & Asian), Complete Party Solutions, FAQ, Booking Tips, Footer.
- **Additional Pages:** Privacy Policy, Terms of Service (both Bali-specific legal content), and a professional `Join Our Team` recruitment page with a dynamic conditional application form.

### System Design Choices
- **Messaging:** Emphasis on "perfect match" for chef selection, villa/home dining, background-checked chefs, transparent pricing, and professional service with cleanup included.
- **Payment & Cancellation:** Clear policies for deposits, full payment before arrival, and a tiered refund system for cancellations.
- **Service Area:** Strictly Bali locations.
- **Recruitment:** Careers page accepting all nationalities, minimum 1 year experience, no salary examples displayed.

### Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS + Shadcn UI components
- **Icons:** Lucide React, React Icons
- **Routing:** Wouter
- **Storage:** In-memory (MemStorage)

## External Dependencies
- **WhatsApp:** For direct customer communication and booking inquiries.
- **Google Analytics (G-W0PQH8ZKTF):** For website traffic analysis and user interaction tracking (GDPR-compliant).
- **Payment Gateways:** Visa, MasterCard, and other major credit/debit card processors for online payments.