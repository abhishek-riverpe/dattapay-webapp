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
  title: "DattaPay Nigeria - Receive USD Payments | Dollar Account for Freelancers",
  description:
    "Get a US dollar account in Nigeria. Receive payments from Upwork, Fiverr with 0.5% fees. Earn 4.2% APY. Protect your earnings from Naira devaluation with USDC.",
  keywords: [
    "dollar account Nigeria",
    "receive USD payments Nigeria",
    "USD account Nigerian freelancer",
    "Upwork payments Nigeria",
    "Fiverr withdrawal Nigeria",
    "domiciliary account alternative Nigeria",
    "stablecoin payments Nigeria",
    "protect naira devaluation",
    "USDC Nigeria freelancer",
    "Payoneer alternative Nigeria",
    "Wise alternative Nigeria",
    "Grey alternative Nigeria",
    "best dollar account Nigerian freelancers",
    "receive dollars Africa",
  ],
  alternates: {
    canonical: `${siteUrl}/ng`,
  },
  openGraph: {
    title: "DattaPay Nigeria - USD Payments for Nigerian Freelancers",
    description:
      "Get a US dollar account in Nigeria. 0.5% fees, 4.2% APY, protection from Naira devaluation.",
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
      name: "DattaPay Nigeria - USD Payments for Nigerian Freelancers",
      description:
        "Get a US dollar account in Nigeria. Receive payments with 0.5% fees, earn 4.2% APY.",
      inLanguage: "en-NG",
      datePublished: "2026-01-01",
      dateModified: "2026-01-23",
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
        "USD payment platform for Nigerian freelancers with 0.5% fees and 4.2% APY",
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
