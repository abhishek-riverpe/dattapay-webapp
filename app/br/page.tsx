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
const regionData = REGIONAL_CONTENT.BR;

export const metadata: Metadata = {
  title: "DattaPay Brasil - Receba em Dólar | Conta USD para Freelancers",
  description:
    "Receba pagamentos em dólar no Brasil. Conta americana com taxa de 0.5%, rendimento de 4.2% APY. Ideal para freelancers que trabalham com Upwork, Fiverr.",
  keywords: [
    "receber dólar como freelancer",
    "freelancer em dólar",
    "conta em dólar Brasil",
    "receber pagamentos internacionais Brasil",
    "Upwork como receber em dólar",
    "Fiverr ganhar em dólar",
    "conta internacional freelancer",
    "sites que pagam em dólar",
    "como ganhar em dólar trabalhando no Brasil",
    "conta americana para brasileiros",
    "receber dólar Upwork Brasil",
    "pagamentos internacionais freelancer",
  ],
  alternates: {
    canonical: `${siteUrl}/br`,
  },
  openGraph: {
    title: "DattaPay Brasil - Receba em Dólar como Freelancer",
    description:
      "Conta americana para freelancers brasileiros. Taxa de 0.5%, rendimento de 4.2% APY.",
    url: `${siteUrl}/br`,
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/br`,
      url: `${siteUrl}/br`,
      name: "DattaPay Brasil - Receba em Dólar como Freelancer",
      description:
        "Conta americana para freelancers brasileiros. Taxa de 0.5%, rendimento de 4.2% APY.",
      inLanguage: "pt-BR",
      datePublished: "2026-01-01",
      dateModified: "2026-01-23",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Country",
        name: "Brazil",
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
      name: "DattaPay Brasil",
      description:
        "Plataforma de pagamentos em dólar para freelancers brasileiros com taxa de 0.5% e 4.2% APY",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Brazil",
      },
      serviceType: "Financial Services",
    },
  ],
};

export default function BrazilPage() {
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
