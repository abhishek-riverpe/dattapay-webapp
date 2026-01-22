import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join DattaPay Waitlist | Start Earning in USD Today",
  description:
    "Get early access to DattaPay. Receive USD payments at 0.5% fees, earn 4.2% APY, and protect your income from currency fluctuations. Join 5,000+ freelancers.",
  openGraph: {
    title: "Join DattaPay Waitlist | Start Earning in USD Today",
    description:
      "Get early access to DattaPay. Receive USD payments at 0.5% fees, earn 4.2% APY, and protect your income from currency fluctuations.",
    url: "https://dattapay.com/contact",
  },
  twitter: {
    title: "Join DattaPay Waitlist | Start Earning in USD Today",
    description:
      "Get early access to DattaPay. Receive USD payments at 0.5% fees, earn 4.2% APY. Join 5,000+ freelancers.",
  },
  alternates: {
    canonical: "https://dattapay.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
