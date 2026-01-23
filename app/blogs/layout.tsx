import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: {
    template: "%s | DattaPay Blogs",
    default: "Blogs - DattaPay Resources & Guides",
  },
  description:
    "Explore guides, comparisons, and resources for freelancers. Learn about payments, platforms, and strategies for international freelancing.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "DattaPay Blogs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay Blog - Resources for Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dattapay",
    creator: "@dattapay",
  },
};

export default function BlogsLayout({
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
