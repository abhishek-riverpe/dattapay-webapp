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
  title: "DattaPay Bangladesh - Receive USD Payments | Dollar Account for Freelancers",
  description:
    "Get a US dollar account in Bangladesh. Receive payments from Upwork, Fiverr with 0.5% fees. Earn 4.2% APY. Protect your earnings from Taka devaluation with USDC.",
  keywords: [
    "dollar account Bangladesh",
    "receive USD payments Bangladesh",
    "USD account Bangladeshi freelancer",
    "Upwork payments Bangladesh",
    "Fiverr withdrawal Bangladesh",
    "stablecoin payments Bangladesh",
    "protect taka devaluation",
    "USDC Bangladesh freelancer",
    "Payoneer alternative Bangladesh",
    "best dollar account Bangladeshi freelancers",
    "receive dollars Bangladesh",
    "freelancer payment Bangladesh",
  ],
  alternates: {
    canonical: `${siteUrl}/bn`,
  },
  openGraph: {
    title: "DattaPay Bangladesh - USD Payments for Bangladeshi Freelancers",
    description:
      "Get a US dollar account in Bangladesh. 0.5% fees, 4.2% APY, protection from Taka devaluation.",
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
      name: "DattaPay Bangladesh - USD Payments for Bangladeshi Freelancers",
      description:
        "Get a US dollar account in Bangladesh. Receive payments with 0.5% fees, earn 4.2% APY.",
      inLanguage: "en-BD",
      datePublished: "2026-01-01",
      dateModified: "2026-01-23",
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
        "USD payment platform for Bangladeshi freelancers with 0.5% fees and 4.2% APY",
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
