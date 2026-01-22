import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RegionalHero from "@/components/regional/regional-hero";
import RegionalPainPoints from "@/components/regional/regional-pain-points";
import RegionalSolutions from "@/components/regional/regional-solutions";
import RegionalFAQ, { RegionalFAQItem } from "@/components/regional/regional-faq";
import RegionalCTA from "@/components/regional/regional-cta";

const siteUrl = "https://dattapay.com";

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

const painPoints = [
  {
    icon: "inflation" as const,
    title: "Inflación del 100%+",
    description:
      "Argentina tiene una de las inflaciones más altas del mundo. Mantener pesos significa perder valor cada día.",
    stat: "100%+",
  },
  {
    icon: "restricted" as const,
    title: "Cepo Cambiario",
    description:
      "Las restricciones cambiarias dificultan acceder a dólares oficiales. El dólar blue tiene spreads enormes.",
    stat: "Cepo",
  },
  {
    icon: "fees" as const,
    title: "Comisiones Altas",
    description:
      "Payoneer y otras plataformas cobran hasta 8% en comisiones totales. Eso reduce significativamente tus ingresos.",
    stat: "8%",
  },
  {
    icon: "devaluation" as const,
    title: "Sin Rendimiento",
    description:
      "Las plataformas tradicionales no pagan intereses sobre tu saldo. Tu dinero pierde valor mientras está parado.",
    stat: "0%",
  },
];

const solutions = [
  {
    icon: "wallet" as const,
    title: "Cuenta Americana Real",
    description:
      "Recibe una cuenta bancaria americana con routing y account number. Acepta pagos de cualquier cliente en el mundo.",
    benefits: [
      "Funciona con Upwork, Fiverr, Toptal",
      "Transferencias ACH y wire directas",
      "Sin restricciones cambiarias",
      "Cuenta activa en 5 minutos",
    ],
  },
  {
    icon: "yield" as const,
    title: "4.2% APY de Rendimiento",
    description:
      "Tu saldo en dólares rinde 4.2% anual automáticamente. Gana mientras trabajas.",
    benefits: [
      "Gana $420/año con $10,000 de saldo",
      "Rendimiento diario, interés compuesto",
      "Sin período de bloqueo",
      "Retira cuando quieras",
    ],
  },
  {
    icon: "security" as const,
    title: "Protección con USDC",
    description:
      "Tus fondos están respaldados por USDC stablecoin, manteniendo paridad con el dólar americano.",
    benefits: [
      "Respaldo 1:1 en dólares",
      "Mejor que dólar blue: transparente",
      "Reservas auditadas",
      "Liquidez instantánea",
    ],
  },
  {
    icon: "speed" as const,
    title: "Retiro Flexible",
    description:
      "Retira a tu cuenta bancaria o mantén tus fondos en dólares para protegerte de la inflación.",
    benefits: [
      "Retiro a cuenta argentina",
      "Mantener en USDC/USD",
      "Crypto withdrawals disponibles",
      "Sin comisiones de retiro",
    ],
  },
];

const faqs: RegionalFAQItem[] = [
  {
    question: "¿Cómo puedo cobrar en dólares siendo freelancer en Argentina?",
    answer:
      "Registrate en DattaPay para obtener una cuenta americana con routing y account number. Agregá estos datos como método de pago en Upwork, Fiverr o cualquier plataforma. Tus clientes pagan en dólares y vos recibís con solo 0.5% de comisión.",
  },
  {
    question: "¿Es legal tener una cuenta DattaPay en Argentina?",
    answer:
      "Sí, es completamente legal tener cuentas en el exterior para recibir pagos por trabajo remoto. DattaPay opera en cumplimiento con regulaciones financieras internacionales.",
  },
  {
    question: "¿Cómo me protege DattaPay de la inflación argentina?",
    answer:
      "DattaPay mantiene tus fondos en USDC stablecoin, respaldado 1:1 por dólares americanos. A diferencia de los pesos que pierden valor con la inflación del 100%+, tus dólares mantienen su poder de compra. Además, ganás 4.2% APY de rendimiento.",
  },
  {
    question: "¿DattaPay es mejor que el dólar blue?",
    answer:
      "Sí, por varias razones: 1) DattaPay usa USDC respaldado 1:1 en dólares reales - transparente y auditable. 2) Ganás 4.2% APY de rendimiento. 3) No hay riesgos de billetes falsos. 4) Tus fondos están asegurados digitalmente.",
  },
  {
    question: "¿Puedo recibir pagos de Upwork con DattaPay en Argentina?",
    answer:
      "¡Sí! Agregá tu cuenta americana DattaPay (routing y account number) como método de pago en Upwork. Tus ganancias se depositan directamente con solo 0.5% de comisión - mucho menos que el 3-5% de otras opciones.",
  },
  {
    question: "¿Cómo funciona el rendimiento de 4.2% APY?",
    answer:
      "Tu saldo en DattaPay rinde 4.2% anual automáticamente. Si mantenés $10,000 en la cuenta, ganarías aproximadamente $420/año en ingresos pasivos. Los intereses se calculan diariamente y se componen automáticamente.",
  },
  {
    question: "¿Qué ventaja tiene DattaPay sobre Payoneer para argentinos?",
    answer:
      "DattaPay cobra 0.5% fijo vs el 8% total de Payoneer (comisión de recepción + conversión + cuota anual). Además, DattaPay paga 4.2% APY en tu saldo - Payoneer paga 0%.",
  },
  {
    question: "¿Cómo retiro mis fondos a Argentina?",
    answer:
      "Podés retirar a tu cuenta bancaria argentina, mantener tus fondos en USDC para protección contra inflación, o hacer retiros en crypto. Los retiros a bancos argentinos se procesan en 1-3 días hábiles.",
  },
];

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
      dateModified: "2026-01-22",
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
      mainEntity: faqs.map((faq) => ({
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
        <RegionalHero
          country="Argentina"
          flag="🇦🇷"
          headline="Cobra en Dólares sin Cepo en Argentina"
          subheadline="Cuenta americana con 0.5% de comisión. Gana 4.2% APY. Protege tus ingresos de la inflación del 100%+ con USDC stablecoin."
          stats={[
            { value: "0.5%", label: "Comisión Fija" },
            { value: "4.2%", label: "APY Rendimiento" },
            { value: "100%", label: "USD Respaldado" },
            { value: "5 min", label: "Para Empezar" },
          ]}
          ctaText="Crear Cuenta Gratis"
        />

        <RegionalPainPoints country="Argentina" painPoints={painPoints} />

        <RegionalSolutions country="Argentinian" solutions={solutions} />

        {/* Platforms Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Funciona con Todas las Plataformas
              </h2>
              <p className="text-lg text-muted-foreground">
                Recibe pagos de cualquier plataforma que acepte transferencia
                bancaria americana.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Upwork",
                "Fiverr",
                "Toptal",
                "Freelancer.com",
                "Workana",
                "Deel",
                "Remote.com",
                "Turing",
              ].map((platform) => (
                <span
                  key={platform}
                  className="px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Inflation Protection Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              Protege tus Ingresos de la Inflación Argentina
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Con inflación del 100%+ anual, mantener pesos significa perder la
              mitad de tu poder de compra cada año. DattaPay mantiene tus fondos
              en USDC - dólares digitales respaldados 1:1 - mientras ganás 4.2%
              APY de rendimiento.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  100%+
                </div>
                <div className="text-sm text-muted-foreground">
                  Inflación anual argentina
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.2%</div>
                <div className="text-sm text-muted-foreground">
                  APY que ganás en DattaPay
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  1:1
                </div>
                <div className="text-sm text-muted-foreground">
                  Respaldo USD de USDC
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USDC vs Blue Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                USDC vs Dólar Blue: ¿Por qué elegir DattaPay?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-primary/50 bg-primary/5 p-6">
                <h3 className="font-semibold text-foreground mb-4 text-lg">
                  DattaPay (USDC)
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Respaldo 1:1 auditable y transparente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>4.2% APY de rendimiento anual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Sin riesgo de billetes falsos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Seguridad bancaria digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Transferencias instantáneas 24/7</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <h3 className="font-semibold text-muted-foreground mb-4 text-lg">
                  Dólar Blue
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Sin respaldo formal ni transparencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>0% rendimiento - pierde valor con inflación USD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Riesgo de billetes falsos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Riesgo físico de robo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span>
                    <span>Solo disponible en horarios limitados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <RegionalFAQ country="Argentina" faqs={faqs} />

        <RegionalCTA
          country="Argentina"
          flag="🇦🇷"
          headline="Empezá a Cobrar en Dólares Hoy"
          subheadline="Creá tu cuenta DattaPay en 5 minutos. Sin burocracia, sin espera. Tu cuenta americana lista para recibir pagos."
          ctaText="Crear Cuenta Gratis"
        />
      </main>

      <Footer />
    </div>
  );
}
