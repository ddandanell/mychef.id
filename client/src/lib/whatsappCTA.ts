/**
 * Single source of truth for all WhatsApp CTAs.
 * Every "WhatsApp" button on the site MUST go through openWhatsApp() / getWhatsAppURL().
 * The "Get Quote" button is a separate intake — it goes to /contact/confirm.
 */

export const WHATSAPP_NUMBER = '+6282237565997';

export interface WhatsAppCTA {
  message: string;
  label?: string;
}

/**
 * Per-source preset messages.
 * Use {{city}} as a placeholder for city name; replaced when buildOpts.city is provided.
 */
export const WHATSAPP_CTAS: Record<string, WhatsAppCTA> = {
  hero: {
    message: "Hi myCHEF — I'd like to chat about booking a private chef in Bali.",
    label: 'Custom Quote Request',
  },
  experience: {
    message: 'Hi myCHEF — I want to know more about the private chef experience.',
    label: 'General Inquiry',
  },
  howItWorks: {
    message: 'Hi myCHEF — quick question about how booking works.',
    label: 'Planning My Experience',
  },
  whyChoose: {
    message: 'Hi myCHEF — interested in booking a private chef in Bali.',
    label: 'Learn More',
  },
  chefProfiles: {
    message: "Hi myCHEF — I'd like a chef recommendation for my dates.",
    label: 'Chef Matching',
  },
  locations: {
    message: 'Hi myCHEF — do you serve my location in Bali?',
    label: 'Location Service',
  },
  testimonials: {
    message: "Hi myCHEF — I'd like to book a similar experience to your reviews.",
    label: 'Booking After Reviews',
  },
  pricing: {
    message: 'Hi myCHEF — can you confirm pricing for [date / guests / area]?',
    label: 'Pricing Inquiry',
  },
  faq: {
    message: 'Hi myCHEF — I have a question that wasn\'t covered in your FAQ.',
    label: 'FAQ Inquiry',
  },
  partyAddons: {
    message: "Hi myCHEF — I'm planning an event and want to discuss add-ons (waiter, bartender, sommelier).",
    label: 'Party Solutions',
  },
  villaPartners: {
    message: 'Hi myCHEF — I run a villa / villa management company and want to explore a chef partnership.',
    label: 'Villa Partnership',
  },
  footer: {
    message: "Hi myCHEF — I'd like to chat.",
    label: 'General Contact',
  },
  floatingButton: {
    message: 'Hi myCHEF — I have a question.',
    label: 'Floating WhatsApp Button',
  },
  careers: {
    message: 'Hi myCHEF — I would like to inquire about job opportunities.',
    label: 'Career Inquiry',
  },
  support: {
    message: 'Hi myCHEF — I need a hand with my booking.',
    label: 'Support',
  },
  // City-page presets — use {{city}} placeholder
  cityHero: {
    message: "Hi myCHEF — I'd like a private chef in {{city}}, Bali.",
    label: 'City Hero',
  },
  cityExtended: {
    message: 'Hi myCHEF — interested in the private chef service in {{city}}.',
    label: 'City Extended',
  },
  cityBooking: {
    message: 'Hi myCHEF — ready to book a chef in {{city}}.',
    label: 'City Booking',
  },
  cityFaq: {
    message: 'Hi myCHEF — quick question about chef bookings in {{city}}.',
    label: 'City FAQ',
  },
  cityElevate: {
    message: 'Hi myCHEF — want to book a chef for our trip in {{city}}.',
    label: 'City Elevate',
  },
  cityHowItWorks: {
    message: 'Hi myCHEF — booking a private chef in {{city}}, can you help?',
    label: 'City How It Works',
  },
  default: {
    message: 'Hi myCHEF — I would like to inquire about booking a private chef in Bali.',
    label: 'General Inquiry',
  },
};

export interface BuildOptions {
  /** City name for templated presets (replaces {{city}} placeholder). */
  city?: string;
  /** Override the default preset entirely. */
  message?: string;
}

/**
 * Build a wa.me URL for the given source key.
 */
export function getWhatsAppURL(source: string = 'default', opts: BuildOptions = {}): string {
  const cta = WHATSAPP_CTAS[source] || WHATSAPP_CTAS.default;
  const baseMessage = opts.message ?? cta.message;
  const text = opts.city ? baseMessage.replace(/\{\{city\}\}/g, opts.city) : baseMessage;
  const phoneNumber = WHATSAPP_NUMBER.replace(/\+/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Open WhatsApp in a new tab. Safe in browser; no-op during SSR.
 */
export function openWhatsApp(source: string = 'default', opts: BuildOptions = {}): void {
  const url = getWhatsAppURL(source, opts);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export function getWhatsAppCTA(source: string = 'default'): WhatsAppCTA {
  return WHATSAPP_CTAS[source] || WHATSAPP_CTAS.default;
}
