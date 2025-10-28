export const WHATSAPP_NUMBER = '+6282237565997';

export interface WhatsAppCTA {
  message: string;
  label?: string;
}

export const WHATSAPP_CTAS: Record<string, WhatsAppCTA> = {
  hero: {
    message: 'Hi! I would like to get a custom quote for a private chef in Bali.',
    label: 'Custom Quote Request',
  },
  experience: {
    message: 'Hi! I would like to inquire about booking a private chef in Bali.',
    label: 'General Inquiry',
  },
  howItWorks: {
    message: 'Hi! I would like to start planning my private chef experience in Bali.',
    label: 'Planning My Experience',
  },
  whyChoose: {
    message: 'Hi! I would like to learn more about your private chef services in Bali.',
    label: 'Learn More',
  },
  chefProfiles: {
    message: 'Hi! I would like to get matched with the perfect chef for my event in Bali.',
    label: 'Chef Matching',
  },
  locations: {
    message: 'Hi! I would like to know if you serve my location in Bali.',
    label: 'Location Service',
  },
  testimonials: {
    message: 'Hi! I saw your great reviews and would like to book a private chef in Bali.',
    label: 'Booking After Reviews',
  },
  pricing: {
    message: 'Hi! I would like to discuss pricing and get a custom quote for a private chef in Bali.',
    label: 'Pricing Inquiry',
  },
  faq: {
    message: 'Hi! I have some questions about booking a private chef in Bali.',
    label: 'FAQ Inquiry',
  },
  partyAddons: {
    message: 'Hi! I would like to inquire about complete party solutions and additional services in Bali.',
    label: 'Party Solutions',
  },
  villaPartners: {
    message: 'Hi! I would like to learn about your villa partnership services in Bali.',
    label: 'Villa Partnership',
  },
  footer: {
    message: 'Hi! I would like to inquire about booking a private chef in Bali.',
    label: 'General Contact',
  },
  floatingButton: {
    message: 'Hi! I would like to inquire about booking a private chef in Bali.',
    label: 'Floating WhatsApp Button',
  },
  careers: {
    message: 'Hi! I would like to inquire about job opportunities with myCHEF Indonesia.',
    label: 'Career Inquiry',
  },
  default: {
    message: 'Hi! I would like to inquire about booking a private chef in Bali.',
    label: 'General Inquiry',
  },
};

export function getWhatsAppURL(source: string = 'default'): string {
  const cta = WHATSAPP_CTAS[source] || WHATSAPP_CTAS.default;
  const phoneNumber = WHATSAPP_NUMBER.replace(/\+/g, '');
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(cta.message)}`;
}

export function getWhatsAppCTA(source: string = 'default'): WhatsAppCTA {
  return WHATSAPP_CTAS[source] || WHATSAPP_CTAS.default;
}
