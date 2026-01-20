import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DattaPay Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy and data security are our top priorities.",
  openGraph: {
    title: "Privacy Policy | DattaPay",
    description:
      "DattaPay Privacy Policy - Learn how we collect, use, and protect your personal information.",
    url: "https://dattapay.com/privacy",
  },
  twitter: {
    title: "Privacy Policy | DattaPay",
    description:
      "DattaPay Privacy Policy - Learn how we protect your personal information.",
  },
  alternates: {
    canonical: "https://dattapay.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
