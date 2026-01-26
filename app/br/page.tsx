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
  title: "DattaPay Brasil - Pare de Pagar R$200/Ano do Payoneer | Conta de Recebimento Instantânea",
  description:
    "Freelancer brasileiro: Conta de recebimento + carteira crypto em 2 minutos. Receba do Fiverr, Upwork — conversão automática para USDT. Venda na Binance P2P a R$6,10+/$. Zero taxa anual.",
  keywords: [
    "Payoneer alternativa Brasil",
    "Fiverr saque Brasil sem taxas",
    "Upwork pagamento Brasil USDT",
    "receber dólar freelancer Brasil",
    "Binance P2P freelancer Brasil",
    "USDT freelancer Brasil",
    "conta americana Brasil instantânea",
    "real desvalorização proteção",
    "stablecoin Brasil",
    "carteira crypto freelancer Brasil",
    "melhor forma receber dólar Brasil",
    "conta de recebimento Brasil",
    "remessa Brasil baixas taxas",
    "Workana saque",
    "99designs pagamento Brasil",
  ],
  alternates: {
    canonical: `${siteUrl}/br`,
  },
  openGraph: {
    title: "Pare de Pagar R$200/Ano do Payoneer - DattaPay Brasil",
    description:
      "Conta de recebimento + carteira crypto instantânea. Conversão automática para USDT. Venda na Binance com cotação premium. Zero taxa anual para freelancers brasileiros.",
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
      name: "DattaPay Brasil - Conta de Recebimento e Carteira Crypto Instantânea",
      description:
        "Pare de pagar R$200/ano do Payoneer. Conta de recebimento instantânea, conversão automática para USDT, venda na Binance com cotação premium.",
      inLanguage: "pt-BR",
      datePublished: "2026-01-01",
      dateModified: "2026-01-26",
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
        "Conta de recebimento e carteira crypto instantânea para freelancers brasileiros. Conversão automática para USDT/USDC, venda na Binance P2P. Zero taxa anual, menores custos de transação.",
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
