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
  },
};

const features: ComparisonFeature[] = [
  {
    feature: "Transaction Fee",
    dattapay: "0.5% flat",
    competitor: "1-2%",
  },
  {
    feature: "Currency Conversion",
    dattapay: "Competitive rates",
    competitor: "Variable markup",
  },
  {
    feature: "Monthly Fee",
    dattapay: "Free",
    competitor: "Free",
  },
  {
    feature: "Withdrawal Fee",
    dattapay: "Free",
    competitor: "Varies by method",
  },
  {
    feature: "Yield on Balance",
    dattapay: "4.2% APY",
    competitor: "0%",
    highlight: true,
  },
  {
    feature: "Stablecoin (USDC) Support",
    dattapay: true,
    competitor: false,
  },
  {
    feature: "Inflation Protection",
    dattapay: true,
    competitor: false,
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
    feature: "US Bank Account",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Virtual USD Card",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Naira Withdrawals",
    dattapay: true,
    competitor: true,
  },
];

const faqs: FAQItem[] = [
  {
    question: "What's the main difference between DattaPay and Grey?",
    answer:
      "Both offer USD accounts for African freelancers, but DattaPay has key advantages: lower fees (0.5% flat vs Grey's higher rates), 4.2% APY yield on your balance (Grey pays 0%), and USDC stablecoin backing for inflation protection.",
  },
  {
    question: "Does DattaPay work in Nigeria like Grey?",
    answer:
      "Yes! DattaPay fully supports Nigerian freelancers with USD accounts, competitive Naira withdrawals, and local bank transfers. You can receive payments from Upwork, Fiverr, and any international client.",
  },
  {
    question: "Why does the 4.2% APY matter?",
    answer:
      "Grey doesn't pay interest on your balance. With DattaPay's 4.2% APY, if you keep $5,000 in your account, you'd earn about $210/year in passive income. That's money you'd otherwise leave on the table with Grey.",
  },
  {
    question: "How does DattaPay protect against Naira devaluation?",
    answer:
      "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to the US dollar. When the Naira fluctuates (like the 30%+ inflation Nigeria has experienced), your USD-denominated funds retain their value.",
  },
  {
    question: "Can I switch from Grey to DattaPay easily?",
    answer:
      "Yes! Sign up for DattaPay in 5 minutes, get your US bank account details, and update your payment method on Upwork/Fiverr. Your next payment will come to DattaPay. No need to close your Grey account immediately.",
  },
  {
    question: "Which platforms work with DattaPay in Nigeria?",
    answer:
      "DattaPay works with all major freelance platforms: Upwork, Fiverr, Toptal, Deel, Freelancer.com, and any platform that supports US bank transfers. It's the same as Grey in terms of platform compatibility.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/compare/grey`,
      url: `${siteUrl}/compare/grey`,
      name: "DattaPay vs Grey 2026 - Compare Fees & Features for Africa",
      description:
        "Compare DattaPay vs Grey for African freelancers. Get 0.5% fees + 4.2% APY yield.",
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

export default function GreyComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ComparisonHero
        competitorName="Grey"
        headline="DattaPay vs Grey: The Better Choice for African Freelancers"
        subheadline="Both offer USD accounts for Africa, but only DattaPay pays 4.2% APY on your balance and offers USDC stablecoin protection against inflation."
        highlightStats={[
          { value: "0.5%", label: "DattaPay Fee" },
          { value: "4.2%", label: "APY (Grey: 0%)" },
          { value: "$0", label: "Hidden Fees" },
          { value: "100%", label: "USD-Backed" },
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
              <div className="text-3xl font-bold text-primary mb-2">4.2%</div>
              <h3 className="font-semibold text-foreground mb-2">
                APY on Your Balance
              </h3>
              <p className="text-sm text-muted-foreground">
                Your idle funds earn 4.2% annually. Grey pays 0%. On $5,000,
                that&apos;s $210/year in passive income.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">USDC</div>
              <h3 className="font-semibold text-foreground mb-2">
                Stablecoin Protection
              </h3>
              <p className="text-sm text-muted-foreground">
                Your funds are backed by USDC stablecoin. When the Naira drops,
                your USD value stays the same.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">0.5%</div>
              <h3 className="font-semibold text-foreground mb-2">
                Lowest Fees in Africa
              </h3>
              <p className="text-sm text-muted-foreground">
                Flat 0.5% transaction fee. No hidden charges, no monthly fees,
                no withdrawal fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nigeria Focus Section */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
            Built for Nigerian Freelancers
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nigeria&apos;s $22 billion stablecoin market shows freelancers need
            USD protection. With 30%+ inflation, keeping earnings in Naira means
            losing money. DattaPay keeps your funds in USD-backed USDC while
            earning 4.2% APY.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Upwork Payments
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Fiverr Withdrawals
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              Naira Bank Transfers
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border/50">
              USD Virtual Card
            </span>
          </div>
        </div>
      </section>

      <ComparisonFAQ competitorName="Grey" faqs={faqs} />

      <ComparisonCTA competitorName="Grey" savings="$200+" />
    </>
  );
}
