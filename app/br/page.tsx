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

const painPoints = [
  {
    icon: "fees" as const,
    title: "Taxas Altas de Câmbio",
    description:
      "Bancos brasileiros cobram spreads de 5-8% na conversão de dólar para real. Isso come seus lucros.",
    stat: "5-8%",
  },
  {
    icon: "devaluation" as const,
    title: "Desvalorização do Real",
    description:
      "O real perde valor em relação ao dólar. Manter ganhos em reais significa perder poder de compra.",
    stat: "R$5+",
  },
  {
    icon: "restricted" as const,
    title: "IOF e Impostos",
    description:
      "Transferências internacionais sofrem IOF de 0.38-1.1%. Cada transação tem custos adicionais.",
    stat: "1.1%",
  },
  {
    icon: "inflation" as const,
    title: "Sem Rendimento no Saldo",
    description:
      "Plataformas tradicionais não pagam juros sobre seu saldo. Seu dinheiro parado perde valor.",
    stat: "0%",
  },
];

const solutions = [
  {
    icon: "wallet" as const,
    title: "Conta Americana Real",
    description:
      "Receba uma conta bancária americana com routing e account number. Aceita pagamentos de qualquer cliente no mundo.",
    benefits: [
      "Funciona com Upwork, Fiverr, Toptal",
      "Transferências ACH e wire diretas",
      "Sem burocracia brasileira",
      "Conta ativa em 5 minutos",
    ],
  },
  {
    icon: "yield" as const,
    title: "4.2% APY de Rendimento",
    description:
      "Seu saldo em dólar rende 4.2% ao ano automaticamente. Ganhe enquanto trabalha.",
    benefits: [
      "Ganhe $420/ano em $10,000 de saldo",
      "Rendimento diário, juros compostos",
      "Sem período de carência",
      "Saque quando quiser",
    ],
  },
  {
    icon: "security" as const,
    title: "Proteção com USDC",
    description:
      "Seus fundos são lastreados em USDC stablecoin, mantendo paridade com o dólar americano.",
    benefits: [
      "Lastro 1:1 em dólar",
      "Proteção contra desvalorização",
      "Reservas transparentes",
      "Liquidez instantânea",
    ],
  },
  {
    icon: "speed" as const,
    title: "Saque Rápido em Reais",
    description:
      "Transfira para sua conta brasileira com taxas competitivas quando precisar.",
    benefits: [
      "Taxas de câmbio competitivas",
      "Processamento em 1-2 dias úteis",
      "PIX disponível",
      "Sem taxas escondidas",
    ],
  },
];

const faqs: RegionalFAQItem[] = [
  {
    question: "Como receber em dólar sendo freelancer no Brasil?",
    answer:
      "Cadastre-se no DattaPay para receber uma conta americana com routing e account number. Adicione esses dados como método de pagamento no Upwork, Fiverr ou qualquer plataforma. Seus clientes pagam em dólar e você recebe com apenas 0.5% de taxa.",
  },
  {
    question: "O DattaPay é legal para brasileiros?",
    answer:
      "Sim, o DattaPay opera legalmente e está em conformidade com regulamentações financeiras internacionais. Brasileiros podem ter contas em dólar no exterior para receber pagamentos de trabalho remoto.",
  },
  {
    question: "Como funciona o rendimento de 4.2% APY?",
    answer:
      "Seu saldo em dólar no DattaPay rende 4.2% ao ano automaticamente. Se você mantiver $10,000 na conta, ganhará aproximadamente $420/ano em renda passiva. Os juros são calculados diariamente e compostos automaticamente.",
  },
  {
    question: "Posso receber pagamentos do Upwork com DattaPay?",
    answer:
      "Sim! Adicione sua conta DattaPay americana (routing e account number) como método de pagamento no Upwork. Seus ganhos serão depositados diretamente com apenas 0.5% de taxa - muito menos que os 3-5% de outras opções.",
  },
  {
    question: "Como o DattaPay protege contra a desvalorização do real?",
    answer:
      "O DattaPay mantém seus fundos em USDC stablecoin, lastreado 1:1 em dólar americano. Quando o real desvaloriza, seus dólares mantêm o valor. Você só converte para reais quando precisar gastar.",
  },
  {
    question: "Quanto tempo demora o saque para conta brasileira?",
    answer:
      "Saques para contas brasileiras são processados em 1-2 dias úteis. Aceitamos PIX e transferência bancária para todos os principais bancos brasileiros.",
  },
  {
    question: "Qual a diferença entre DattaPay e Payoneer para brasileiros?",
    answer:
      "DattaPay cobra 0.5% de taxa fixa vs 3-5% do Payoneer (taxa de recebimento + conversão). Além disso, DattaPay paga 4.2% APY no seu saldo - Payoneer paga 0%.",
  },
  {
    question: "Preciso declarar minha conta DattaPay no imposto de renda?",
    answer:
      "Como qualquer conta no exterior, você deve declarar sua conta DattaPay na declaração de imposto de renda anual se o saldo ultrapassar US$100. Consulte um contador para orientação específica sobre sua situação.",
  },
];

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
      dateModified: "2026-01-22",
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
        <RegionalHero
          country="Brasil"
          flag="🇧🇷"
          headline="Receba em Dólar como Freelancer no Brasil"
          subheadline="Conta americana com taxa de apenas 0.5%. Ganhe 4.2% APY no seu saldo. Proteja seus ganhos da desvalorização do real."
          stats={[
            { value: "0.5%", label: "Taxa Fixa" },
            { value: "4.2%", label: "APY Rendimento" },
            { value: "$0", label: "Taxa Mensal" },
            { value: "5 min", label: "Para Começar" },
          ]}
          ctaText="Criar Conta Grátis"
        />

        <RegionalPainPoints country="Brasil" painPoints={painPoints} />

        <RegionalSolutions country="Brazilian" solutions={solutions} />

        {/* Platforms Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Funciona com Todas as Plataformas
              </h2>
              <p className="text-lg text-muted-foreground">
                Receba pagamentos de qualquer plataforma que aceite transferência
                bancária americana.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Upwork",
                "Fiverr",
                "Toptal",
                "Workana",
                "99designs",
                "Freelancer.com",
                "Deel",
                "Remote.com",
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

        {/* Why USD Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              Por Que Receber em Dólar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              O real tem perdido valor em relação ao dólar consistentemente.
              Freelancers que mantêm seus ganhos em dólar preservam seu poder de
              compra e ainda ganham rendimento de 4.2% APY.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">R$5+</div>
                <div className="text-sm text-muted-foreground">
                  Cotação do dólar hoje
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.2%</div>
                <div className="text-sm text-muted-foreground">
                  APY no seu saldo em dólar
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">0.5%</div>
                <div className="text-sm text-muted-foreground">
                  Taxa única para receber
                </div>
              </div>
            </div>
          </div>
        </section>

        <RegionalFAQ country="Brasil" faqs={faqs} />

        <RegionalCTA
          country="Brazil"
          flag="🇧🇷"
          headline="Comece a Receber em Dólar Hoje"
          subheadline="Crie sua conta DattaPay em 5 minutos. Sem burocracia, sem espera. Sua conta americana pronta para receber pagamentos."
          ctaText="Criar Conta Grátis"
        />
      </main>

      <Footer />
    </div>
  );
}
