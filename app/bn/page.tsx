import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PlatformLogos from "@/components/platform-logos";
import DashboardVisual from "@/components/dashboard-visual/dashboard-visual";
import Testimonials from "@/components/landing/testimonial";
import KeepMore from "@/components/keep-more";
import BlogsSection from "@/components/blogs-section";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import { REGIONAL_CONTENT } from "@/lib/regional-content";

const siteUrl = "https://dattapay.com";
const regionData = REGIONAL_CONTENT.BD;

export const metadata: Metadata = {
  title: "DattaPay Bangladesh - Stop Paying Payoneer's ৳4,000/Year Fees | Instant Funding Account",
  description:
    "Bangladeshi freelancers: Get instant funding account + crypto wallet. Receive from Fiverr, Upwork — auto-convert to USDT. Sell on Binance P2P at ৳117+/$. Zero annual fees. No ৳350 per withdrawal like Payoneer.",
  keywords: [
    "Payoneer alternative Bangladesh",
    "Fiverr withdrawal Bangladesh no fees",
    "Upwork payment Bangladesh USDT",
    "receive USD Bangladesh freelancer",
    "Binance P2P Bangladesh freelancer",
    "USDT freelancer Bangladesh",
    "dollar account Bangladesh instant",
    "taka devaluation protection",
    "stablecoin Bangladesh",
    "crypto wallet Bangladesh freelancer",
    "best payment method Bangladeshi freelancers",
    "funding account Bangladesh",
    "remittance Bangladesh low fees",
    "freelancer payment solution Bangladesh",
  ],
  alternates: {
    canonical: `${siteUrl}/bn`,
  },
  openGraph: {
    title: "Stop Paying Payoneer ৳4,000/Year - DattaPay Bangladesh",
    description:
      "Instant funding account + crypto wallet. Auto USDT conversion. Sell on Binance at premium rates. Zero annual fees for Bangladeshi freelancers.",
    url: `${siteUrl}/bn`,
    type: "website",
    locale: "en_BD",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/bn`,
      url: `${siteUrl}/bn`,
      name: "DattaPay Bangladesh - Instant Funding Account & Crypto Wallet for Freelancers",
      description:
        "Stop paying Payoneer's ৳4,000/year fees. Get instant funding account, auto USDT conversion, sell on Binance at premium rates.",
      inLanguage: "en-BD",
      datePublished: "2026-01-01",
      dateModified: "2026-01-26",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Country",
        name: "Bangladesh",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: regionData.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "Service",
      name: "DattaPay Bangladesh",
      description:
        "Instant funding account and crypto wallet for Bangladeshi freelancers. Auto USDT/USDC conversion, sell on Binance P2P. Zero annual fees, lowest transaction costs.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Bangladesh",
      },
      serviceType: "Financial Services",
    },
  ],
};

export default function BangladeshPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <Hero regionData={regionData} />
        <DashboardVisual />
        <PlatformLogos />
        <KeepMore regionData={regionData} />
        <Testimonials />
        <BlogsSection />
        <HowItWorks />
        <FAQ regionData={regionData} />
        <CTASection regionData={regionData} />
      </main>

      <Footer />
    </div>
  );
}
