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
const regionData = REGIONAL_CONTENT.AR;

export const metadata: Metadata = {
  title: "DattaPay Argentina - Cobrar en Dólares | Cuenta USD para Freelancers",
  description:
    "Cobra en dólares en Argentina sin cepo. Cuenta americana con 0.5% de comisión, 4.2% APY. Protege tus ingresos de la inflación con USDC stablecoin.",
  keywords: [
    "cobrar en dólares Argentina",
    "recibir dólares Argentina freelancer",
    "cuenta dólares freelancer Argentina",
    "cobrar en dólares sin cepo",
    "mejor forma cobrar Upwork Argentina",
    "Payoneer alternativa Argentina",
    "stablecoin vs dólar blue Argentina",
    "cuenta en dólares Argentina legal",
    "recibir pagos internacionales Argentina",
    "freelancer Argentina cobrar USD",
    "proteger pesos inflación Argentina",
    "USDC Argentina freelancer",
  ],
  alternates: {
    canonical: `${siteUrl}/ar`,
  },
  openGraph: {
    title: "DattaPay Argentina - Cobra en Dólares como Freelancer",
    description:
      "Cuenta americana para freelancers argentinos. 0.5% comisión, 4.2% APY, sin cepo.",
    url: `${siteUrl}/ar`,
    type: "website",
    locale: "es_AR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/ar`,
      url: `${siteUrl}/ar`,
      name: "DattaPay Argentina - Cobra en Dólares como Freelancer",
      description:
        "Cuenta americana para freelancers argentinos. 0.5% comisión, 4.2% APY, sin cepo.",
      inLanguage: "es-AR",
      datePublished: "2026-01-01",
      dateModified: "2026-01-23",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Country",
        name: "Argentina",
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
      name: "DattaPay Argentina",
      description:
        "Plataforma de pagos en dólares para freelancers argentinos con 0.5% comisión y 4.2% APY",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Argentina",
      },
      serviceType: "Financial Services",
    },
  ],
};

export default function ArgentinaPage() {
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
