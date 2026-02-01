export const SITE = {
  name: "DattaPay",
  company: "DattaPay",
  email: "support@dattapay.com",
  logo: "/logo.png",
  logoDark: "/logo.png",
  year: new Date().getFullYear(),
} as const;

export const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 60 * 60 * 1000, // 1 hour
} as const;

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/dattapay/home", icon: "Linkedin" },
  { name: "Instagram", href: "https://www.instagram.com/dattapay.global/", icon: "Instagram" },
  { name: "X", href: "https://x.com/dattapayglobal", icon: "Twitter" },
] as const;
