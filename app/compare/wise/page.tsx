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
    "Wise alternative 2026",
    "Wise alternative Nigeria",
    "Wise USD suspended Nigeria",
    "TransferWise alternative Africa",
    "Wise not working Nigeria",
    "best Wise alternative 2026",
    "Wise USD suspended alternative",
    "Binance P2P Nigeria",
    "USDT USDC auto convert",
    "freelancer payments Nigeria",
    "receive USD Nigeria",
    "Wise replacement Nigeria",
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
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay vs Wise Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DattaPay vs Wise 2026 - Best Alternative After USD Suspension",
    description:
      "Wise suspended USD in Nigeria since 2022. DattaPay offers full USD support with 0.5% fees.",
    images: ["/og-image.png"],
    site: "@dattapay",
    creator: "@dattapay",
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
    feature: "Setup Time",
    dattapay: "2 minutes",
    competitor: "Days to weeks",
  },
  {
    feature: "Instant Funding Account",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "Crypto Wallet",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "Auto USDT/USDC Conversion",
    dattapay: true,
    competitor: false,
    highlight: true,
  },
  {
    feature: "Sell on Binance/Bybit P2P",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "P2P Premium Rates (3-5%)",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "Annual Fee",
    dattapay: "$0",
    competitor: "$0",
  },
  {
    feature: "Nigeria Full Support",
    dattapay: true,
    competitor: false,
    highlight: true,
  },
  {
    feature: "Upwork/Fiverr Compatible",
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
      "Yes! DattaPay gives you an instant funding account + crypto wallet in 2 minutes. Payments auto-convert to USDT/USDC. You can then sell on Binance/Bybit/Bitget P2P at premium rates (often 3-5% higher than banks).",
  },
  {
    question: "How does the auto-conversion to USDT/USDC work?",
    answer:
      "When payments arrive in your DattaPay funding account, they automatically convert to USDT or USDC stablecoin. This protects your earnings from Naira devaluation and lets you sell at premium rates on crypto exchanges.",
  },
  {
    question: "How do I sell on Binance P2P after receiving payments?",
    answer:
      "After your payment auto-converts to USDT/USDC in DattaPay, transfer to your Binance/Bybit/Bitget wallet. Use their P2P marketplace to sell at premium rates - often 3-5% higher than official bank exchange rates.",
  },
  {
    question: "Can I receive Upwork/Fiverr payments with DattaPay?",
    answer:
      "Yes! Add your DattaPay funding account to Upwork/Fiverr as a withdrawal method. When payments arrive, they auto-convert to USDT/USDC. Sell on Binance P2P at premium rates for the best Naira conversion.",
  },
  {
    question: "What's the setup process?",
    answer:
      "Sign up in 2 minutes to get an instant funding account + crypto wallet. Add the funding account to your freelance platforms. When payments arrive, they auto-convert to stablecoin. Sell on Binance/Bybit for premium rates.",
  },
  {
    question: "Does DattaPay work for remittances too?",
    answer:
      "Yes! The same benefits apply to receiving money from family abroad. Payments auto-convert to USDT/USDC, and you can sell on Binance P2P at premium rates. Zero annual fees and much lower costs than traditional services.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Compare",
          item: `${siteUrl}/compare`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wise",
          item: `${siteUrl}/compare/wise`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/compare/wise`,
      url: `${siteUrl}/compare/wise`,
      name: "DattaPay vs Wise 2026 - Best Alternative After USD Suspension",
      description:
        "Wise suspended USD in Nigeria since 2022. DattaPay is the best alternative.",
      datePublished: "2026-01-01",
      dateModified: "2026-01-26",
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
        headline="Wise Suspended USD in Nigeria. DattaPay Has You Covered."
        subheadline="Get an instant funding account + crypto wallet in 2 minutes. Payments auto-convert to USDT/USDC. Sell on Binance/Bybit/Bitget at premium P2P rates (3-5% higher than banks)."
        highlightStats={[
          { value: "2 min", label: "Setup Time" },
          { value: "Auto", label: "USDT/USDC Convert" },
          { value: "3-5%", label: "P2P Premium" },
          { value: "$0", label: "Annual Fee" },
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
              <div className="text-3xl font-bold text-primary mb-2">2 min</div>
              <h3 className="font-semibold text-foreground mb-2">
                Instant Funding Account
              </h3>
              <p className="text-sm text-muted-foreground">
                Get a funding account + crypto wallet in 2 minutes. Add to
                Fiverr/Upwork as withdrawal method.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">Auto</div>
              <h3 className="font-semibold text-foreground mb-2">
                USDT/USDC Conversion
              </h3>
              <p className="text-sm text-muted-foreground">
                Payments automatically convert to USDT/USDC stablecoin.
                Protection against Naira devaluation.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">3-5%</div>
              <h3 className="font-semibold text-foreground mb-2">
                Binance P2P Premium
              </h3>
              <p className="text-sm text-muted-foreground">
                Sell USDT/USDC on Binance/Bybit/Bitget P2P at rates often 3-5%
                higher than official bank rates.
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
