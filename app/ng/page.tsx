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
const regionData = REGIONAL_CONTENT.NG;

export const metadata: Metadata = {
  title: "DattaPay Nigeria - Stop Paying Payoneer's ₦50,000/Year Fees | Instant Funding Account",
  description:
    "Nigerian freelancers: Get instant funding account + crypto wallet. Receive from Fiverr, Upwork — auto-convert to USDT. Sell on Binance P2P at ₦1,550+/$. Zero annual fees. No ₦4,500 per withdrawal like Payoneer.",
  keywords: [
    "Payoneer alternative Nigeria",
    "Fiverr withdrawal Nigeria no fees",
    "Upwork payment Nigeria USDT",
    "receive USD Nigeria freelancer",
    "Binance P2P Nigeria freelancer",
    "USDT freelancer Nigeria",
    "dollar account Nigeria instant",
    "domiciliary account alternative",
    "naira devaluation protection",
    "stablecoin Nigeria",
    "crypto wallet Nigeria freelancer",
    "Wise alternative Nigeria",
    "Grey alternative Nigeria",
    "best payment method Nigerian freelancers",
    "funding account Nigeria",
    "remittance Nigeria low fees",
  ],
  alternates: {
    canonical: `${siteUrl}/ng`,
  },
  openGraph: {
    title: "Stop Paying Payoneer ₦50,000/Year - DattaPay Nigeria",
    description:
      "Instant funding account + crypto wallet. Auto USDT conversion. Sell on Binance at premium rates. Zero annual fees for Nigerian freelancers.",
    url: `${siteUrl}/ng`,
    type: "website",
    locale: "en_NG",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/ng`,
      url: `${siteUrl}/ng`,
      name: "DattaPay Nigeria - Instant Funding Account & Crypto Wallet for Freelancers",
      description:
        "Stop paying Payoneer's ₦50,000/year fees. Get instant funding account, auto USDT conversion, sell on Binance at premium rates.",
      inLanguage: "en-NG",
      datePublished: "2026-01-01",
      dateModified: "2026-01-26",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Country",
        name: "Nigeria",
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
      name: "DattaPay Nigeria",
      description:
        "Instant funding account and crypto wallet for Nigerian freelancers. Auto USDT/USDC conversion, sell on Binance P2P. Zero annual fees, lowest transaction costs.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
      serviceType: "Financial Services",
    },
  ],
};

export default function NigeriaPage() {
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
