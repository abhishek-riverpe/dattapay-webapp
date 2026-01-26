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
      "Stop paying $35/year + $3 per withdrawal. Auto-convert to USDT/USDC and sell on Binance P2P at 3-5% premium rates.",
    href: "/compare/payoneer",
    type: "comparison",
    category: "Comparison",
    highlight: "Most Popular",
  },
  {
    slug: "grey",
    title: "DattaPay vs Grey",
    description:
      "Auto-convert to USDT/USDC and sell on Binance P2P at 3-5% premium rates. Grey doesn't offer crypto P2P access.",
    href: "/compare/grey",
    type: "comparison",
    category: "Comparison",
    highlight: "Africa Focused",
  },
  {
    slug: "wise",
    title: "DattaPay vs Wise",
    description:
      "Wise suspended USD in Nigeria. DattaPay: instant funding account + auto-convert to USDT/USDC + Binance P2P selling.",
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
      "Stop paying Payoneer's $35/year + $3 per withdrawal. Auto-convert to USDT/USDC & sell on Binance P2P at premium rates.",
    href: "/upwork",
    type: "platform",
    category: "Platform Guide",
  },
  {
    slug: "fiverr",
    title: "Get Paid from Fiverr",
    description:
      "Skip Payoneer's fees. Fiverr payments auto-convert to USDT/USDC. Sell on Binance P2P at 3-5% premium rates.",
    href: "/fiverr",
    type: "platform",
    category: "Platform Guide",
  },
  {
    slug: "deel",
    title: "Get Paid from Deel",
    description:
      "Better than Deel Card. Payments auto-convert to USDT/USDC. Sell on Binance/Bybit P2P at 3-5% premium rates.",
    href: "/deel",
    type: "platform",
    category: "Platform Guide",
  },
];

// Learning/educational content
export const LEARNING: ContentItem[] = [
  {
    slug: "usdc",
    title: "What is USDT/USDC? Auto-Convert & Binance P2P",
    description:
      "Learn how DattaPay auto-converts payments to USDT/USDC and how to sell on Binance P2P at 3-5% premium rates.",
    href: "/learn/usdc",
    type: "learning",
    category: "Stablecoins",
    readTime: "8 min",
  },
  {
    slug: "stablecoin-guide",
    title: "Stablecoin vs Local Currency: Why Binance P2P Wins",
    description:
      "Why auto-converting to USDT/USDC and selling on Binance P2P gives you 3-5% better rates than local currency.",
    href: "/learn/stablecoin-guide",
    type: "learning",
    category: "Guide",
    readTime: "10 min",
  },
  {
    slug: "inflation-hedge",
    title: "Protect Income: Auto-Convert & Binance P2P",
    description:
      "How instant auto-conversion to USDT/USDC protects earnings + sell on Binance P2P at 3-5% premium rates.",
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
