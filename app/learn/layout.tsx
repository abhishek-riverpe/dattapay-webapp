import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: {
    template: "%s | DattaPay Learn",
    default: "Learn - DattaPay Education Hub",
  },
  description:
    "Learn about stablecoins, USDC, inflation protection, and international payments for freelancers. Educational guides from DattaPay.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "DattaPay Learn",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay Learn - Freelancer Education Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dattapay",
    creator: "@dattapay",
  },
};

export default function LearnLayout({
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
