import type { Metadata } from "next";
import ComparisonHero from "@/components/comparison/comparison-hero";
import ComparisonTable, {
  ComparisonFeature,
} from "@/components/comparison/comparison-table";
import ComparisonFAQ, { FAQItem } from "@/components/comparison/comparison-faq";
import ComparisonCTA from "@/components/comparison/comparison-cta";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "DattaPay vs Grey 2026 - Compare Fees & Features for Africa",
  description:
    "Compare DattaPay vs Grey for African freelancers. Get 0.5% fees + 4.2% APY yield. See why freelancers in Nigeria and Kenya are switching to DattaPay.",
  keywords: [
    "DattaPay vs Grey",
    "Grey alternative",
    "Grey alternative Nigeria",
    "Grey vs Raenest",
    "dollar account Nigeria comparison",
    "Grey fees comparison",
    "best dollar account Nigerian freelancer",
    "Grey alternative Kenya",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/grey`,
  },
  openGraph: {
    title: "DattaPay vs Grey 2026 - Compare Fees & Features for Africa",
    description:
      "Compare DattaPay vs Grey for African freelancers. Get 0.5% fees + 4.2% APY yield.",
    url: `${siteUrl}/compare/grey`,
    type: "website",
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay vs Grey Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DattaPay vs Grey 2026 - Compare Fees & Features for Africa",
    description:
      "Compare DattaPay vs Grey. Get 0.5% fees + 4.2% APY yield for African freelancers.",
    images: ["/og-image.png"],
    site: "@dattapay",
    creator: "@dattapay",
  },
};

const features: ComparisonFeature[] = [
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
    highlight: true,
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
    feature: "Nigeria Support",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Kenya Support",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Upwork/Fiverr Compatible",
    dattapay: true,
    competitor: true,
  },
];

const faqs: FAQItem[] = [
  {
    question: "What's the main difference between DattaPay and Grey?",
    answer:
      "DattaPay gives you an instant funding account + crypto wallet. Payments auto-convert to USDT/USDC. You can then sell on Binance/Bybit/Bitget P2P at premium rates (often 3-5% higher than bank rates). Grey doesn't offer crypto conversion or P2P access.",
  },
  {
    question: "How do I sell on Binance P2P with DattaPay?",
    answer:
      "When payments arrive in your DattaPay funding account, they auto-convert to USDT/USDC. Transfer to your Binance/Bybit/Bitget wallet and sell on their P2P marketplace. Rates are often 3-5% higher than official bank exchange rates.",
  },
  {
    question: "What's the advantage of auto-conversion to USDT/USDC?",
    answer:
      "Auto-conversion protects your earnings from Naira devaluation by keeping them pegged to USD. Plus, USDT/USDC can be sold on Binance P2P at premium rates - often 3-5% higher than what Grey or banks offer for Naira conversion.",
  },
  {
    question: "Does DattaPay work in Nigeria like Grey?",
    answer:
      "Yes! DattaPay fully supports Nigerian freelancers. Sign up in 2 minutes, get your instant funding account, and add it to Upwork/Fiverr. Payments auto-convert to stablecoin for Binance P2P selling.",
  },
  {
    question: "Can I switch from Grey to DattaPay easily?",
    answer:
      "Yes! Sign up in 2 minutes to get your instant funding account + crypto wallet. Add it to Upwork/Fiverr as a new withdrawal method. Your next payment will auto-convert to USDT/USDC for Binance P2P selling.",
  },
  {
    question: "Does DattaPay work for remittances too?",
    answer:
      "Yes! The same benefits apply to receiving money from family abroad. Payments auto-convert to USDT/USDC, and you can sell on Binance P2P at premium rates. Zero annual fees and much better rates than traditional services.",
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
          name: "Grey",
          item: `${siteUrl}/compare/grey`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/compare/grey`,
      url: `${siteUrl}/compare/grey`,
      name: "DattaPay vs Grey 2026 - Compare Fees & Features for Africa",
      description:
        "Compare DattaPay vs Grey for African freelancers. Get 0.5% fees + 4.2% APY yield.",
      datePublished: "2026-01-01",
      dateModified: "2026-01-23",
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

export default function GreyComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ComparisonHero
        competitorName="Grey"
        headline="DattaPay vs Grey: Sell on Binance P2P at Premium Rates"
        subheadline="Get an instant funding account + crypto wallet in 2 minutes. Payments auto-convert to USDT/USDC. Sell on Binance/Bybit/Bitget at premium P2P rates (3-5% higher than banks). Grey doesn't offer this."
        highlightStats={[
          { value: "2 min", label: "Setup Time" },
          { value: "Auto", label: "USDT/USDC Convert" },
          { value: "3-5%", label: "P2P Premium" },
          { value: "$0", label: "Annual Fee" },
        ]}
      />

      {/* Comparison Section */}
      <section id="comparison" className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              DattaPay vs Grey: Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how DattaPay compares to Grey for Nigerian and Kenyan
              freelancers.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
            <ComparisonTable competitorName="Grey" features={features} />
          </div>
        </div>
      </section>

      {/* Why DattaPay Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why African Freelancers Choose DattaPay
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
                Payments automatically convert to USDT/USDC stablecoin. Grey
                doesn&apos;t offer this crypto integration.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">3-5%</div>
              <h3 className="font-semibold text-foreground mb-2">
                Binance P2P Premium
              </h3>
              <p className="text-sm text-muted-foreground">
                Sell USDT/USDC on Binance/Bybit/Bitget P2P at rates often 3-5%
                higher than bank rates. Grey can&apos;t do this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DattaPay Flow Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
            The DattaPay Flow for African Freelancers
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            1. Sign up in 2 minutes → Get instant funding account + crypto wallet.
            2. Add funding account to Fiverr/Upwork as withdrawal method.
            3. Payments arrive → Auto-convert to USDT/USDC.
            4. Sell on Binance/Bybit/Bitget P2P at 3-5% premium rates.
            5. Cash out in Naira at better rates than banks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Upwork Payments
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Fiverr Withdrawals
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Binance P2P Selling
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Family Remittances
            </span>
          </div>
        </div>
      </section>

      <ComparisonFAQ competitorName="Grey" faqs={faqs} />

      <ComparisonCTA competitorName="Grey" savings="$200+" />
    </>
  );
}
