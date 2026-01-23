import { Scale, Laptop, BookOpen, Globe, LucideIcon } from "lucide-react";

export type ContentType = "comparison" | "platform" | "learning" | "regional";

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  type: ContentType;
  category: string;
  readTime?: string;
  flag?: string;
  highlight?: string;
}

// Type configuration for display
export const typeConfig: Record<
  ContentType,
  { icon: LucideIcon; label: string; colorClass: string }
> = {
  comparison: {
    icon: Scale,
    label: "Comparison",
    colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  platform: {
    icon: Laptop,
    label: "Platform",
    colorClass: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  learning: {
    icon: BookOpen,
    label: "Guide",
    colorClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  regional: {
    icon: Globe,
    label: "Regional",
    colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
};

// Comparison pages
export const COMPARISONS: ContentItem[] = [
  {
    slug: "payoneer",
    title: "DattaPay vs Payoneer",
    description:
      "Save $847/year vs 8.5% total fees. Compare features, pricing, and supported countries for freelancers.",
    href: "/compare/payoneer",
    type: "comparison",
    category: "Comparison",
    highlight: "Most Popular",
  },
  {
    slug: "grey",
    title: "DattaPay vs Grey",
    description:
      "Same markets, better yield (4.2% APY). Compare DattaPay with Grey for African freelancers.",
    href: "/compare/grey",
    type: "comparison",
    category: "Comparison",
    highlight: "Africa Focused",
  },
  {
    slug: "wise",
    title: "DattaPay vs Wise",
    description:
      "Full USD support (unlike Wise in Nigeria). Compare features for international freelancers.",
    href: "/compare/wise",
    type: "comparison",
    category: "Comparison",
    highlight: "Nigeria Alternative",
  },
];

// Platform integration pages
export const PLATFORMS: ContentItem[] = [
  {
    slug: "upwork",
    title: "Get Paid from Upwork",
    description:
      "Receive Upwork payments with just 0.5% fees. Save $500+/year vs Payoneer withdrawals.",
    href: "/upwork",
    type: "platform",
    category: "Platform Guide",
  },
  {
    slug: "fiverr",
    title: "Get Paid from Fiverr",
    description:
      "Withdraw Fiverr earnings with 0.5% flat fee. No more $3 PayPal fees or high Payoneer rates.",
    href: "/fiverr",
    type: "platform",
    category: "Platform Guide",
  },
  {
    slug: "deel",
    title: "Get Paid from Deel",
    description:
      "Receive Deel contractor payments directly to your US account. Earn 4.2% APY on your balance.",
    href: "/deel",
    type: "platform",
    category: "Platform Guide",
  },
];

// Learning/educational content
export const LEARNING: ContentItem[] = [
  {
    slug: "usdc",
    title: "What is USDC? A Guide for Freelancers",
    description:
      "Learn what USDC stablecoin is, how it works, and why freelancers use it to protect their earnings.",
    href: "/learn/usdc",
    type: "learning",
    category: "Stablecoins",
    readTime: "8 min",
  },
  {
    slug: "stablecoin-guide",
    title: "Stablecoin vs Local Currency: Which is Better?",
    description:
      "Compare keeping your freelance earnings in stablecoins vs local currencies like Naira, Real, or Peso.",
    href: "/learn/stablecoin-guide",
    type: "learning",
    category: "Guide",
    readTime: "10 min",
  },
  {
    slug: "inflation-hedge",
    title: "How to Protect Your Freelance Income from Inflation",
    description:
      "Practical strategies for freelancers in high-inflation countries to preserve the value of their earnings.",
    href: "/learn/inflation-hedge",
    type: "learning",
    category: "Strategy",
    readTime: "7 min",
  },
];

// Regional/country pages
export const REGIONS: ContentItem[] = [
  {
    slug: "ng",
    title: "DattaPay for Nigeria",
    description:
      "Receive USD payments in Nigeria with 0.5% fees. Protect your earnings from Naira devaluation with USDC.",
    href: "/ng",
    type: "regional",
    category: "Nigeria",
    flag: "\u{1F1F3}\u{1F1EC}",
  },
  {
    slug: "br",
    title: "DattaPay for Brazil",
    description:
      "Get paid in USD as a Brazilian freelancer. Avoid IOF taxes and Real devaluation with stablecoins.",
    href: "/br",
    type: "regional",
    category: "Brazil",
    flag: "\u{1F1E7}\u{1F1F7}",
  },
  {
    slug: "ar",
    title: "DattaPay for Argentina",
    description:
      "Receive dollars in Argentina legally. Protect your earnings from 100%+ inflation with USDC.",
    href: "/ar",
    type: "regional",
    category: "Argentina",
    flag: "\u{1F1E6}\u{1F1F7}",
  },
];

// All content aggregated
export const ALL_CONTENT: ContentItem[] = [
  ...COMPARISONS,
  ...PLATFORMS,
  ...LEARNING,
  ...REGIONS,
];

// Helper functions
export function getContentByType(type: ContentType): ContentItem[] {
  return ALL_CONTENT.filter((item) => item.type === type);
}

export function getFeaturedContent(count: number = 8): ContentItem[] {
  // Return a mix of content types for the landing page section
  // Regional content is excluded as it's served via IP-based routing
  const featured: ContentItem[] = [];

  // Add some from each category (excluding regional)
  featured.push(...COMPARISONS.slice(0, 3));
  featured.push(...PLATFORMS.slice(0, 3));
  featured.push(...LEARNING.slice(0, 2));

  return featured.slice(0, count);
}
