import type { Metadata } from "next";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "Join DattaPay Waitlist | Start Earning in USD Today",
  description:
    "Get early access to DattaPay. Receive USD payments at 0.5% fees, earn 4.2% APY, and protect your income from currency fluctuations. Join 5,000+ freelancers.",
  keywords: [
    "DattaPay waitlist",
    "join DattaPay",
    "freelancer payment signup",
    "USD payments signup",
    "early access DattaPay",
    "contact DattaPay",
    "freelancer account registration",
    "international payments signup",
  ],
  openGraph: {
    title: "Join DattaPay Waitlist | Start Earning in USD Today",
    description:
      "Get early access to DattaPay. Receive USD payments at 0.5% fees, earn 4.2% APY, and protect your income from currency fluctuations.",
    url: `${siteUrl}/contact`,
    type: "website",
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Join DattaPay - International Payments for Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join DattaPay Waitlist | Start Earning in USD Today",
    description:
      "Get early access to DattaPay. Receive USD payments at 0.5% fees, earn 4.2% APY. Join 5,000+ freelancers.",
    images: ["/og-image.png"],
    site: "@dattapay",
    creator: "@dattapay",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
