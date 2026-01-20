export const SITE = {
  name: "DattaPay",
  company: "Negentropy LLC",
  email: "support@dattapay.com",
  logo: "/logos/dattapay-logo1.png",
  logoDark: "/logos/dattapay-logo.png",
  year: new Date().getFullYear(),
} as const;

export const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 60 * 60 * 1000, // 1 hour
} as const;

export const NAV_LINKS = [
  { name: "Features", href: "/#features" },
  { name: "How it Works", href: "/#how-it-works" },
  { name: "Pricing", href: "/#pricing" },
] as const;

export const FOOTER_LINKS = [
  { name: "Privacy", href: "/privacy" },
  { name: "Contact Us", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/dattapay/home", icon: "Linkedin" },
  { name: "Instagram", href: "https://www.instagram.com/dattapay.global/", icon: "Instagram" },
  { name: "X", href: "https://x.com/dattapayglobal", icon: "Twitter" },
] as const;
