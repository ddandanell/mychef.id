# myCHEF Indonesia - Design Guidelines

## Design Approach

**Framework**: Reference-based approach inspired by **Airbnb** (hospitality marketplace) + **fine dining establishments** (culinary excellence) + **Instagram** (visual storytelling). This landing page requires a sophisticated yet approachable aesthetic that builds trust while showcasing culinary artistry.

**Core Principles**:
- **Visual-first storytelling**: Every section leads with compelling imagery
- **Frictionless conversion**: WhatsApp CTAs are prominent, consistent, and unmissable
- **Credibility through detail**: Rich chef profiles, transparent pricing, extensive testimonials
- **Mobile-optimized**: Villa guests browsing on phones must have seamless experience

---

## Typography System

**Primary Font**: Inter or Outfit (Google Fonts) - clean, modern, excellent readability
**Accent Font**: Playfair Display or Cormorant Garamond - elegant serif for headlines

**Hierarchy**:
- **Hero Headline**: text-5xl lg:text-7xl, accent font, font-bold
- **Section Headlines**: text-3xl lg:text-5xl, accent font, font-semibold  
- **Subsection Titles**: text-xl lg:text-2xl, primary font, font-semibold
- **Body Copy**: text-base lg:text-lg, primary font, leading-relaxed
- **Captions/Metadata**: text-sm, primary font, opacity-80
- **CTAs**: text-base lg:text-lg, primary font, font-semibold

---

## Layout & Spacing System

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Text-heavy content: `max-w-4xl mx-auto` for optimal readability
- Testimonials/cards: `max-w-6xl mx-auto`

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24, 32**
- Section padding: `py-16 lg:py-24` (standard), `py-20 lg:py-32` (hero/major sections)
- Card/component spacing: `p-6 lg:p-8`
- Element gaps: `gap-6 lg:gap-8` (grids), `gap-4` (inline elements)
- Vertical rhythm: `space-y-8 lg:space-y-12` (section internals)

**Responsive Breakpoints**:
- Mobile-first: Stack everything at base
- md: (768px) - 2-column layouts begin
- lg: (1024px) - 3-4 column layouts, expanded spacing

---

## Component Library

### Hero Section
- **Height**: `min-h-screen` with content-based expansion
- **Image Carousel**: Full-width background with 3 stunning images (chef preparing satay, beachside dining, family gathering) - implement smooth fade transitions every 5s
- **Content Overlay**: Centered with semi-transparent backdrop-blur-sm background for text readability
- **Trust Badge**: Inline with subheadline, small icons + text
- **Primary CTA**: Extra large button (px-8 py-4) with WhatsApp icon, positioned prominently below headline

### Experience Overview (Section 2)
- **Layout**: Single column intro text (`max-w-3xl mx-auto text-center`) followed by 3-column grid (lg:grid-cols-3) of 6 images
- **Images**: Aspect ratio 4:3, rounded-xl, with subtle hover scale effect
- **CTA Placement**: Centered below image grid

### How It Works (Section 3)
- **Layout**: 5 steps in vertical timeline on mobile, horizontal on desktop (lg:grid-cols-5)
- **Step Cards**: Each step has icon/number (text-4xl accent color), title (text-xl font-semibold), description (text-base)
- **Visual Connection**: Subtle connecting line or arrow between steps on desktop
- **CTA**: Full-width prominent button with WhatsApp number visible

### Why Choose myCHEF (Section 4)
- **Three Pillars Layout**: Grid of 3 cards (lg:grid-cols-3)
- **Each Pillar Card**: 
  - Main image (aspect-ratio 3:2)
  - Title (text-2xl font-semibold)
  - Bulleted feature list (text-base)
  - Grid of 3-4 supporting images below (grid-cols-2, rounded-lg)
- **Spacing**: Generous gap-8 between cards

### Real Stories Testimonials (Section 5)
- **Layout**: 2-column grid on desktop (lg:grid-cols-2), stack on mobile
- **Testimonial Cards**: 
  - 5-star rating at top
  - Name + location (font-semibold)
  - Quote text (text-base, italic, leading-relaxed)
  - Generous padding (p-8), subtle border or background treatment
- **Supporting Images**: 3-column grid below testimonials (lg:grid-cols-3) showing real dinner setups

### Meet Your Chefs (Section 6)
- **Carousel/Grid Hybrid**: Horizontal scroll on mobile, 3-column grid on desktop (lg:grid-cols-3)
- **Chef Cards** (13 total):
  - Professional headshot (aspect-square, rounded-xl or rounded-full)
  - Star rating + services count (small, metadata style)
  - Name (text-xl font-semibold)
  - Bio (text-sm, 3-4 lines, leading-relaxed)
  - Specialty tags (inline pills/badges, text-xs)
  - Starting rate (text-lg font-semibold)
  - WhatsApp CTA button (full-width within card)
- **Pricing Disclaimer**: Prominent callout box below chef grid with backdrop, text-sm
- **Card Design**: Equal height cards with subtle shadow/border, p-6

### Serving All of Bali & Indonesia (Section 7)
- **Layout**: Text intro centered, followed by location grid
- **Location Display**: 4-column grid on desktop (lg:grid-cols-4), 2-column on tablet, showing location names with subtle icon
- **Groupings**: Clear visual separation between Bali, Java, Other Islands, International
- **Alternative**: Animated marquee scrolling location names continuously

### Perfect for Every Occasion (Section 8)
- **Grid**: 4-column on desktop (lg:grid-cols-4), 2-column on tablet, single on mobile
- **Occasion Cards**:
  - Icon (text-5xl or image)
  - Title (text-lg font-semibold)
  - Brief description (text-sm)
  - Background image with overlay for visual interest

### Pricing Transparency (Section 9)
- **Layout**: 2-column split (lg:grid-cols-2) - Chef Fees on left, Additional Services on right
- **Pricing Cards**: Clear breakdown with text-2xl for prices, text-base for descriptions
- **Visual Treatment**: Use subtle background differentiation, clear hierarchy

### Sample Menus (Section 10)
- **Layout**: 2-column grid (lg:grid-cols-2) for 6 menus
- **Menu Cards**:
  - Menu name (text-xl font-semibold)
  - Guest count + total price at top (prominent)
  - Course-by-course breakdown (text-sm, structured list)
  - Visual divider between price components
  - Generous padding (p-8)

### FAQ Section
- **Layout**: Single column, max-w-4xl centered
- **Accordion Style**: 15 questions, expandable panels
- **Question**: text-lg font-semibold with expand icon
- **Answer**: text-base, revealed with smooth transition

### Booking Tips
- **Grid**: 2-column on desktop (lg:grid-cols-2)
- **Tip Cards**: Icon + title + description, compact design

### Footer
- **Layout**: Multi-column grid (lg:grid-cols-4)
- **Sections**: Brand + description, Contact info, Quick links, Service areas
- **Bottom Bar**: Copyright, legal links, payment methods
- **WhatsApp CTA**: Sticky button at bottom-right on mobile (fixed position)

---

## Image Strategy

**Hero Section**: 
- **Large carousel**: 3 high-impact images (1920x1080 recommended) - chef preparing satay in villa kitchen, beachside dining setup in Seminyak, family gathering in Ubud home
- Overlay gradient for text readability

**Throughout Page**:
- Experience Overview: 6 images (villa terrace dining, chef grilling seafood, dinner party, fresh ingredients, plated dessert, happy guests)
- Why Choose: 11 supporting images total (chef at work, plating, various cuisines)
- Testimonials: 6 real dinner setup photos
- Chef profiles: 13 professional headshots
- Occasions: 8 occasion-themed images
- Sample menus: Consider food photography for each menu type

**Image Treatment**: 
- Rounded corners (rounded-xl) for modern feel
- Consistent aspect ratios within sections
- Lazy loading for performance
- Subtle hover effects (scale-105 transition)

---

## Mobile Optimization

**Critical Elements**:
- Sticky WhatsApp CTA button (fixed bottom-right, always visible)
- Touch-friendly buttons (minimum 44px height)
- Horizontal scroll chef carousel with snap points
- Collapsed accordion FAQ by default
- Single-column stacking for all multi-column layouts
- Larger tap targets for all interactive elements
- Optimized image sizes (responsive srcset)

**Navigation**: Simple sticky header with logo + WhatsApp CTA, hamburger menu for additional links

---

## Conversion-Focused Details

**WhatsApp Integration**:
- Every major section ends with WhatsApp CTA
- Consistent button styling throughout (px-6 py-3 lg:px-8 lg:py-4)
- Include phone number visibly (+62 822-3756-5997)
- Icon + text on larger screens, icon-only acceptable on mobile if space constrained

**Trust Building**:
- Star ratings prominent and consistent
- Service counts visible on chef cards
- Testimonial author locations specified
- "1000+ Happy Guests" and "Serving since 2012" badges visible
- Real pricing transparency throughout

**Scannability**:
- Generous whitespace between sections
- Clear visual hierarchy in every component
- Bulleted lists over paragraphs where appropriate
- Numbers and statistics highlighted
- Section headlines immediately communicate value