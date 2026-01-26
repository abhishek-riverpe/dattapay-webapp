import type { Metadata } from "next";
import ComparisonHero from "@/components/comparison/comparison-hero";
import ComparisonTable, {
  ComparisonFeature,
} from "@/components/comparison/comparison-table";
import ComparisonFAQ, { FAQItem } from "@/components/comparison/comparison-faq";
import ComparisonCTA from "@/components/comparison/comparison-cta";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "DattaPay vs Payoneer 2026 - Compare Fees & Features",
  description:
    "Compare DattaPay vs Payoneer for freelancer payments. Save up to $847/year with 0.5% flat fees vs Payoneer's 8.5% total fees. See the full comparison.",
  keywords: [
    "DattaPay vs Payoneer",
    "Payoneer alternative",
    "Payoneer alternative 2026",
    "Payoneer $35 annual fee",
    "Payoneer $3 withdrawal fee",
    "Payoneer alternative Nigeria",
    "Payoneer alternative Africa",
    "freelancer payment platform",
    "USDT USDC auto convert",
    "Binance P2P premium rates",
    "stop paying Payoneer fees",
    "Payoneer vs DattaPay comparison",
    "cheaper than Payoneer",
    "Upwork Payoneer alternative",
    "Fiverr Payoneer alternative",
  ],
  alternates: {
    canonical: `${siteUrl}/compare/payoneer`,
  },
  openGraph: {
    title: "DattaPay vs Payoneer 2026 - Compare Fees & Features",
    description:
      "Compare DattaPay vs Payoneer for freelancer payments. Save up to $847/year with 0.5% flat fees.",
    url: `${siteUrl}/compare/payoneer`,
    type: "website",
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay vs Payoneer Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DattaPay vs Payoneer 2026 - Compare Fees & Features",
    description:
      "Save up to $847/year with 0.5% flat fees vs Payoneer's 8.5% total fees.",
    images: ["/og-image.png"],
    site: "@dattapay",
    creator: "@dattapay",
  },
};

const features: ComparisonFeature[] = [
  {
    feature: "Annual Fee",
    dattapay: "$0",
    competitor: "$35/year",
    highlight: true,
  },
  {
    feature: "Per-Withdrawal Fee",
    dattapay: "~0.5%",
    competitor: "$3 per withdrawal",
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
    feature: "Nigeria Support",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Upwork/Fiverr Compatible",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Minimum Annual Cost",
    dattapay: "$0",
    competitor: "$71+ ($35 + $3×12)",
    highlight: true,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Why is DattaPay better than Payoneer?",
    answer:
      "DattaPay has zero annual fees (Payoneer charges $35/year) and much lower per-transaction fees (vs Payoneer's $3 per withdrawal). Plus, your payments auto-convert to USDT/USDC stablecoin, which you can sell on Binance/Bybit/Bitget P2P at premium rates (often 3-5% higher than bank rates).",
  },
  {
    question: "How do I receive Upwork/Fiverr payments with DattaPay?",
    answer:
      "Sign up in 2 minutes to get an instant funding account + crypto wallet. Add your funding account details to Upwork/Fiverr/Freelancer as a withdrawal method. When payments arrive, they auto-convert to USDT/USDC. Sell on Binance P2P at premium rates.",
  },
  {
    question: "How do I switch from Payoneer to DattaPay?",
    answer:
      "It takes 2 minutes: 1) Sign up for DattaPay and get your instant funding account, 2) Add it to Upwork/Fiverr as a new withdrawal method, 3) Your next payment auto-converts to USDT/USDC, 4) Sell on Binance/Bybit at premium P2P rates.",
  },
  {
    question: "How much can I save by switching from Payoneer?",
    answer:
      "At minimum, you save $71+/year ($35 annual fee + $3×12 monthly withdrawals). But the real savings come from Binance P2P - you can often get 3-5% higher rates than bank transfers. On $10,000/year, that's $300-500 extra.",
  },
  {
    question: "What is auto-conversion to USDT/USDC?",
    answer:
      "When payments arrive in your DattaPay funding account, they automatically convert to USDT or USDC stablecoin. This protects your earnings from local currency devaluation and lets you sell at premium rates on crypto exchanges.",
  },
  {
    question: "How do I sell on Binance/Bybit/Bitget P2P?",
    answer:
      "After your payment converts to USDT/USDC in DattaPay, transfer to your Binance/Bybit/Bitget wallet. Use their P2P marketplace to sell at premium rates - often 3-5% higher than official bank exchange rates. Cash out in your local currency.",
  },
  {
    question: "Does DattaPay work for remittances too?",
    answer:
      "Yes! The same benefits apply to remittance users. Receive money from family abroad, auto-convert to USDT/USDC, and sell on Binance P2P at premium rates. Zero annual fees and much lower transaction costs than traditional services.",
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
          name: "Payoneer",
          item: `${siteUrl}/compare/payoneer`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/compare/payoneer`,
      url: `${siteUrl}/compare/payoneer`,
      name: "DattaPay vs Payoneer 2026 - Compare Fees & Features",
      description:
        "Compare DattaPay vs Payoneer for freelancer payments. Save up to $847/year.",
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
    {
      "@type": "ItemList",
      name: "DattaPay vs Payoneer Comparison",
      itemListElement: [
        {
          "@type": "Product",
          name: "DattaPay",
          description: "0.5% flat fee, 4.2% APY yield, stablecoin backing",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
        {
          "@type": "Product",
          name: "Payoneer",
          description: "2-3% receiving fee + currency conversion + annual fee",
        },
      ],
    },
  ],
};

export default function PayoneerComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ComparisonHero
        competitorName="Payoneer"
        headline="Stop Paying Payoneer's $35/Year + $3 Per Withdrawal"
        subheadline="Get an instant funding account + crypto wallet in 2 minutes. Payments auto-convert to USDT/USDC. Sell on Binance/Bybit/Bitget at premium P2P rates (3-5% higher than banks)."
        highlightStats={[
          { value: "$0", label: "Annual Fee" },
          { value: "2 min", label: "Setup Time" },
          { value: "Auto", label: "USDT/USDC Convert" },
          { value: "3-5%", label: "P2P Premium" },
        ]}
      />

      {/* Comparison Section */}
      <section id="comparison" className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly how DattaPay compares to Payoneer on fees, features,
              and functionality.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
            <ComparisonTable competitorName="Payoneer" features={features} />
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why Freelancers Switch from Payoneer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">$35+$36</div>
              <h3 className="font-semibold text-foreground mb-2">
                Payoneer&apos;s Annual Cost
              </h3>
              <p className="text-sm text-muted-foreground">
                $35/year annual fee + $3×12 withdrawals = $71+/year minimum.
                DattaPay: $0 annual fees.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">2 min</div>
              <h3 className="font-semibold text-foreground mb-2">
                Instant Funding Account
              </h3>
              <p className="text-sm text-muted-foreground">
                Get a funding account + crypto wallet instantly. Add to
                Fiverr/Upwork as withdrawal method.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">3-5%</div>
              <h3 className="font-semibold text-foreground mb-2">
                Binance P2P Premium
              </h3>
              <p className="text-sm text-muted-foreground">
                Auto-convert to USDT/USDC, then sell on Binance/Bybit P2P at
                rates 3-5% higher than banks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonFAQ competitorName="Payoneer" faqs={faqs} />

      <ComparisonCTA competitorName="Payoneer" savings="$71+" />
    </>
  );
}
