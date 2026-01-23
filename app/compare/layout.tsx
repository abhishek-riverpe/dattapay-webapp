import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: {
    template: "%s | DattaPay Comparison",
    default: "Compare DattaPay | Payment Platform Comparisons",
  },
  description:
    "Compare DattaPay with other payment platforms. See how we stack up against Payoneer, Wise, Grey, and PayPal for freelancer payments.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "DattaPay",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay vs Competitors - Payment Platform Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dattapay",
    creator: "@dattapay",
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
