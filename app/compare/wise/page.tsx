import type { Metadata } from "next";
import ComparisonHero from "@/components/comparison/comparison-hero";
import ComparisonTable, {
  ComparisonFeature,
} from "@/components/comparison/comparison-table";
import ComparisonFAQ, { FAQItem } from "@/components/comparison/comparison-faq";
import ComparisonCTA from "@/components/comparison/comparison-cta";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "DattaPay vs Wise 2026 - Best Alternative After USD Suspension",
  description:
    "Wise suspended USD in Nigeria since 2022. DattaPay is the best Wise alternative with 0.5% fees, full USD support, and 4.2% APY. Compare features.",
  keywords: [
    "DattaPay vs Wise",
    "Wise alternative",
    "Wise alternative Nigeria",
    "Wise USD suspended Nigeria",
    "TransferWise alternative Africa",
    "Wise not working Nigeria",
    "best Wise alternative 2026",
    "Wise USD suspended alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/wise`,
  },
  openGraph: {
    title: "DattaPay vs Wise 2026 - Best Alternative After USD Suspension",
    description:
      "Wise suspended USD in Nigeria since 2022. DattaPay offers full USD support with 0.5% fees.",
    url: `${siteUrl}/compare/wise`,
    type: "website",
  },
};

const features: ComparisonFeature[] = [
  {
    feature: "USD Support in Nigeria",
    dattapay: true,
    competitor: false,
    highlight: true,
  },
  {
    feature: "Transaction Fee",
    dattapay: "0.5% flat",
    competitor: "0.5-2%",
  },
  {
    feature: "Currency Conversion",
    dattapay: "Competitive rates",
    competitor: "Mid-market rate",
  },
  {
    feature: "Monthly Fee",
    dattapay: "Free",
    competitor: "Free",
  },
  {
    feature: "Yield on Balance",
    dattapay: "4.2% APY",
    competitor: "Up to 4.36% (UK only)",
  },
  {
    feature: "Stablecoin Support",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "Inflation Protection",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "Nigeria Full Support",
    dattapay: true,
    competitor: false,
    highlight: true,
  },
  {
    feature: "Kenya Support",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Brazil Support",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "US Bank Account",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Upwork Integration",
    dattapay: true,
    competitor: true,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Why did Wise suspend USD in Nigeria?",
    answer:
      "Wise suspended USD transfers to Nigeria in November 2022 due to regulatory and operational challenges. As of 2026, this suspension remains in effect, leaving Nigerian freelancers without access to Wise's USD services.",
  },
  {
    question: "Is DattaPay a good Wise alternative for Nigeria?",
    answer:
      "Yes! DattaPay fully supports Nigerian freelancers with USD accounts, competitive exchange rates, and local withdrawals. Unlike Wise, there are no restrictions on USD services in Nigeria.",
  },
  {
    question: "How do DattaPay fees compare to Wise?",
    answer:
      "DattaPay charges a flat 0.5% fee on all transactions. Wise fees vary from 0.5-2% depending on the currency and transfer type. The key difference: DattaPay works in Nigeria, Wise doesn't for USD.",
  },
  {
    question: "Does DattaPay offer the same multi-currency features as Wise?",
    answer:
      "DattaPay focuses on USD/USDC for freelancers, with a US bank account and multi-currency support. While Wise offers 50+ currencies, DattaPay offers what freelancers need most: reliable USD access with 4.2% APY yield.",
  },
  {
    question: "Can I receive Upwork payments with DattaPay like I could with Wise?",
    answer:
      "Yes! DattaPay provides US bank account details (routing and account number) that work with Upwork, Fiverr, Deel, Toptal, and any platform supporting US bank transfers.",
  },
  {
    question: "What's the advantage of DattaPay's stablecoin backing?",
    answer:
      "DattaPay converts your funds to USDC stablecoin, providing transparency and protection against local currency devaluation. Wise doesn't offer stablecoin backing, and their USD service is suspended in Nigeria.",
  },
  {
    question: "Is DattaPay available in other African countries?",
    answer:
      "Yes! DattaPay supports freelancers across Africa including Nigeria, Kenya, Ghana, and more. Unlike Wise which has various restrictions in African countries, DattaPay is built specifically for emerging markets.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/compare/wise`,
      url: `${siteUrl}/compare/wise`,
      name: "DattaPay vs Wise 2026 - Best Alternative After USD Suspension",
      description:
        "Wise suspended USD in Nigeria since 2022. DattaPay is the best alternative.",
      datePublished: "2026-01-01",
      dateModified: "2026-01-22",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
  ],
};

export default function WiseComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ComparisonHero
        competitorName="Wise"
        headline="Wise Suspended USD in Nigeria. DattaPay Didn't."
        subheadline="Since November 2022, Wise has suspended USD transfers to Nigeria. DattaPay offers full USD support, 0.5% fees, and 4.2% APY for Nigerian freelancers."
        highlightStats={[
          { value: "100%", label: "USD Support" },
          { value: "Nov 2022", label: "Wise Suspended" },
          { value: "0.5%", label: "DattaPay Fee" },
          { value: "4.2%", label: "APY on Balance" },
        ]}
      />

      {/* Alert Section */}
      <section className="py-8 bg-amber-500/10 border-y border-amber-500/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-2xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Wise USD Suspended in Nigeria Since November 2022
              </h3>
              <p className="text-sm text-muted-foreground">
                Wise has not restored USD transfer services to Nigeria as of
                January 2026. Nigerian freelancers need an alternative that
                actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              DattaPay vs Wise: Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See why DattaPay is the best Wise alternative for Nigerian and
              African freelancers.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
            <ComparisonTable competitorName="Wise" features={features} />
          </div>
        </div>
      </section>

      {/* Why DattaPay Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              What Wise Users Get with DattaPay
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                ✓
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Full USD Support
              </h3>
              <p className="text-sm text-muted-foreground">
                Unlike Wise, DattaPay has no restrictions on USD in Nigeria.
                Receive and hold USD without limitations.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">4.2%</div>
              <h3 className="font-semibold text-foreground mb-2">
                APY on Your Balance
              </h3>
              <p className="text-sm text-muted-foreground">
                Wise&apos;s interest feature is UK-only. DattaPay pays 4.2% APY
                globally on all idle funds.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">USDC</div>
              <h3 className="font-semibold text-foreground mb-2">
                Stablecoin Protection
              </h3>
              <p className="text-sm text-muted-foreground">
                Your funds are backed by USDC stablecoin. Protection against
                Naira devaluation that Wise doesn&apos;t offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
              Wise Nigeria USD Suspension Timeline
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">
                Nov 2022
              </div>
              <div className="flex-1 rounded-lg border border-border/50 bg-card p-4">
                <p className="text-sm text-foreground">
                  Wise suspends USD transfers to Nigeria citing operational
                  challenges
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-medium text-muted-foreground">
                2023-2025
              </div>
              <div className="flex-1 rounded-lg border border-border/50 bg-card p-4">
                <p className="text-sm text-foreground">
                  Suspension continues with no timeline for restoration
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-medium text-green-600 dark:text-green-400">
                Today
              </div>
              <div className="flex-1 rounded-lg border border-primary/50 bg-primary/5 p-4">
                <p className="text-sm text-foreground">
                  DattaPay offers full USD support for Nigerian freelancers with
                  0.5% fees and 4.2% APY
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonFAQ competitorName="Wise" faqs={faqs} />

      <ComparisonCTA competitorName="Wise" savings="$500+" />
    </>
  );
}
