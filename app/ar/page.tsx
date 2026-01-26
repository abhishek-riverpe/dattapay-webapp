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
  title: "DattaPay Argentina - Dejá de Pagar $35/Año a Payoneer | Cuenta de Cobro + Cotización Blue",
  description:
    "Freelancer argentino: Cuenta de cobro + billetera crypto en 2 minutos. Cobrá de Fiverr, Upwork — conversión instantánea a USDT. Vendé en Binance a cotización blue. Sin cepo. Sin cuota anual.",
  keywords: [
    "Payoneer alternativa Argentina",
    "Fiverr cobrar Argentina sin cepo",
    "Upwork pago Argentina USDT",
    "cobrar dólares freelancer Argentina",
    "Binance P2P Argentina freelancer",
    "USDT freelancer Argentina",
    "cuenta americana Argentina instantánea",
    "dólar blue vs USDT",
    "stablecoin Argentina",
    "billetera crypto freelancer Argentina",
    "mejor forma cobrar dólares Argentina",
    "cuenta de cobro Argentina",
    "remesa Argentina bajas comisiones",
    "Workana cobrar Argentina",
    "cotización MEP freelancer",
  ],
  alternates: {
    canonical: `${siteUrl}/ar`,
  },
  openGraph: {
    title: "Dejá de Pagar $35/Año a Payoneer - DattaPay Argentina",
    description:
      "Cuenta de cobro + billetera crypto instantánea. Conversión automática a USDT. Vendé en Binance a cotización libre. Sin cepo, sin cuota anual para freelancers argentinos.",
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
      name: "DattaPay Argentina - Cuenta de Cobro y Billetera Crypto Instantánea",
      description:
        "Dejá de pagar $35/año a Payoneer. Cuenta de cobro instantánea, conversión automática a USDT, vendé en Binance a cotización blue/MEP.",
      inLanguage: "es-AR",
      datePublished: "2026-01-01",
      dateModified: "2026-01-26",
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
        "Cuenta de cobro y billetera crypto instantánea para freelancers argentinos. Conversión automática a USDT/USDC, vendé en Binance P2P a cotización libre. Sin cepo, sin cuota anual.",
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
