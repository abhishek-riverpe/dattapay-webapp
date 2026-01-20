import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Early Access",
  description:
    "Join DattaPay and start receiving international payments with just 0.5% fee. Request early access today and save up to $847/year on payment fees.",
  openGraph: {
    title: "Request Early Access | DattaPay",
    description:
      "Join DattaPay and start receiving international payments with just 0.5% fee. Request early access today.",
    url: "https://dattapay.com/contact",
  },
  twitter: {
    title: "Request Early Access | DattaPay",
    description:
      "Join DattaPay and start receiving international payments with just 0.5% fee.",
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
