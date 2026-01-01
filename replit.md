# myCHEF Indonesia - Landing Website

## Overview
This project is a single-page landing website for myCHEF Indonesia, a premium private chef booking service in Bali and Jakarta. The website, `mychef.id`, aims to provide a seamless booking experience for clients seeking in-villa dining, emphasizing transparency, professionalism, and high-quality service. Established in 2012, the business has delivered over 1000 personalized culinary experiences for various occasions.

## User Preferences
- **Location Focus:** Primary focus on Bali with SEO expansion to Jakarta for catering services
- **Time Format:** 24-hour format everywhere (09:00 - 22:00 WIB, no AM/PM)
- **WhatsApp CTAs:** Every button opens with section-specific pre-filled messages
- **Mobile-First:** 100% mobile-optimized design
- **Trustworthiness:** Emphasis on safety, background checks, verified reviews, insurance
- **Professional Standards:** Clean, professional, transparent communication
- **Currency:** All pricing in Indonesian Rupiah (IDR)

## System Architecture

### UI/UX Decisions
- **Design Approach:** Mobile-first, responsive design with touch-friendly elements.
- **Color Scheme:** Primary use of WhatsApp Green (HSL 142 76% 36%).
- **Visual Elements:** Instagram-style testimonial carousels, Glassmorphism for trust badges, dual-row auto-scrolling galleries, alternating section backgrounds, professional imagery.
- **Spacing Standards:** Consistent padding and grid gaps across sections and containers.

### Technical Implementations
- **Core Features:**
    - **Global Header:** Fixed/sticky header on all pages with myCHEF logo. Site is English-only with simplified URL structure (no language prefixes).
    - **WhatsApp Integration & Conversion Tracking:** All CTAs route through a `/contact/confirm` tracking page for Google Analytics event `contact_initiation` before redirecting to WhatsApp.
    - **Geolocation & Personalization:** Server-side city detection using IP address (via ipapi.co) to dynamically personalize the site for Bali locations.
    - **Trust Signals:** Prominent display of 6 trust badges, a 100% Satisfaction Guarantee, and 4.9/5 average rating.
    - **Testimonial System:** 50+ authentic, detailed story-based reviews with expand functionality and auto-scrolling.
    - **Cookie Consent:** GDPR-compliant banner controlling Google Analytics activation.
    - **SEO Optimization:** Comprehensive meta tags, geo tags, Open Graph, Twitter Cards, JSON-LD Structured Data (LocalBusiness), `robots.txt`, `sitemap.xml`, canonical URLs, dynamic SEO, and descriptive alt text.
    - **Performance Optimization:** Lazy loading for most images, async decoding, eager loading for hero images, optimized font loading, and GPU acceleration.
    - **Quote Funnel:** Streamlined multi-step form at `/quote` with three flows: Single Event (8 steps), Recurring Service (7 steps), and Full-Time/Part-Time Chef (9-10 steps), including features like pre-meeting options and grocery handling.
- **Key Sections:** Hero, Experience Overview, How It Works, Why Choose, Trust & Safety Badges, Testimonial Carousel, Chef Profiles, Locations, Occasions Grid, Transparent Pricing, Ingredient Shopping, Sample Menus, Complete Party Solutions, FAQ, Booking Tips, Footer.
- **Additional Pages:** Privacy Policy, Terms of Service, Payment Terms, `Join Our Team` recruitment page, Admin panel at `/admin/quotes`, Price Calculator at `/calculator2` (6-step wizard), and Recommended Services at `/recommended-services` (SEO partner links).
- **URL Structure:** All pages use clean, simplified URLs without language prefixes (e.g., /quote, /seminyak, /jakarta). Site content is English-only.
- **City Landing Pages:** SEO-optimized landing pages for 25 major Bali areas (e.g., `/seminyak`, `/kuta`) with dynamic content, plus Jakarta landing page (`/jakarta`) targeting "catering jakarta" keyword (3,600 monthly searches).
- **Service Landing Pages:** Professional SEO-optimized service pages for 8 key services (e.g., `/services/villa-parties`), each with 1000+ word content.
- **SEO Strategy:** High-volume keyword targeting including "catering jakarta" (3,600 searches), "private chef bali" (170 searches), "private chef jakarta" (90 searches), "private chef indonesia" (10 searches). Comprehensive structured data (JSON-LD) for LocalBusiness and Service schemas.

### System Design Choices
- **Messaging:** Emphasis on "perfect match" chef selection, villa/home dining, background-checked chefs, transparent pricing, and professional service with cleanup.
- **Ingredient Shopping:** Chef arrives 2 hours early to plan menu, receive cash, and shop at local markets for quality control and transparency.
- **Payment & Cancellation:** 50% deposit on booking, 50% day before event, tiered refund policy.
- **Service Area:** Bali (primary) and Jakarta (SEO expansion for catering services).
- **Recruitment:** Careers page accepts all nationalities, minimum 1 year experience, no salary examples.

### Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS + Shadcn UI components
- **Icons:** Lucide React, React Icons
- **Routing:** Wouter
- **Storage:** In-memory (MemStorage)
- **Data Standards:** Centralized UN-recognized country list (`shared/countries.ts`).

## External Dependencies
- **WhatsApp:** For direct customer communication and booking inquiries.
- **Google Analytics (G-W0PQH8ZKTF):** For website traffic analysis and sales funnel tracking.
- **Payment Gateways:** Visa, MasterCard, and other major credit/debit card processors.
- **Geolocation API:** ipapi.co for server-side city detection.
