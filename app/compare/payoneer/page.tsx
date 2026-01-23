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
    "Payoneer alternative Africa",
    "Payoneer fees too high",
    "Payoneer alternative low fees",
    "freelancer payment platform comparison",
    "Payoneer alternative Nigeria",
    "cheaper than Payoneer",
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
    feature: "Receiving Fee",
    dattapay: "0.5% flat",
    competitor: "2-3%",
  },
  {
    feature: "Currency Conversion",
    dattapay: "0%",
    competitor: "2-4%",
  },
  {
    feature: "Annual Fee",
    dattapay: "Free",
    competitor: "$29.95",
  },
  {
    feature: "Withdrawal Fee",
    dattapay: "Free",
    competitor: "$1.50-$3",
  },
  {
    feature: "Yield on Balance",
    dattapay: "4.2% APY",
    competitor: "0%",
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
    feature: "Nigeria Support",
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
  {
    feature: "Fiverr Integration",
    dattapay: true,
    competitor: true,
  },
  {
    feature: "Total Fees (on $10k)",
    dattapay: "$50",
    competitor: "$850+",
    highlight: true,
  },
  {
    feature: "Annual Savings",
    dattapay: "$847",
    competitor: "-",
    highlight: true,
  },
];

const faqs: FAQItem[] = [
  {
    question: "Why is DattaPay cheaper than Payoneer?",
    answer:
      "DattaPay uses blockchain technology and stablecoin infrastructure to reduce costs. We charge a flat 0.5% fee with no hidden charges, while Payoneer's total fees (receiving + currency conversion + annual fee) can reach 8.5% or more.",
  },
  {
    question: "Can I receive Upwork payments with DattaPay like Payoneer?",
    answer:
      "Yes! DattaPay provides you with a US bank account (routing and account number) that works with Upwork, Fiverr, Deel, Toptal, and any platform that supports US bank transfers. Simply add your DattaPay account as a payment method.",
  },
  {
    question: "How do I switch from Payoneer to DattaPay?",
    answer:
      "Switching is simple: 1) Sign up for DattaPay (takes 5 minutes), 2) Get your US bank account details, 3) Update your payment method on Upwork/Fiverr/other platforms. Your next payment will come to DattaPay.",
  },
  {
    question: "Is DattaPay safe compared to Payoneer?",
    answer:
      "Yes, DattaPay uses bank-grade security with 256-bit encryption, multi-factor authentication, and is fully compliant with financial regulations. Your funds are backed by USDC stablecoin, providing additional security and transparency.",
  },
  {
    question: "Does DattaPay work in Nigeria like Payoneer?",
    answer:
      "Yes, DattaPay fully supports Nigerian freelancers. Unlike some competitors, we offer complete functionality in Nigeria including USD account, local withdrawals, and competitive exchange rates.",
  },
  {
    question: "What is the 4.2% APY that Payoneer doesn't offer?",
    answer:
      "DattaPay pays 4.2% Annual Percentage Yield on your idle balance. If you keep $10,000 in your account, you'd earn approximately $420/year in passive income. Payoneer pays 0% on your balance.",
  },
  {
    question: "How does DattaPay protect against inflation unlike Payoneer?",
    answer:
      "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to US dollars. This protects freelancers in countries like Nigeria, Argentina, and Brazil from local currency devaluation.",
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
        headline="DattaPay vs Payoneer: Save $847/Year"
        subheadline="Payoneer charges up to 8.5% in total fees. DattaPay charges 0.5% flat. Plus, earn 4.2% APY on your balance - something Payoneer doesn't offer."
        highlightStats={[
          { value: "0.5%", label: "DattaPay Fee" },
          { value: "8.5%", label: "Payoneer Total Fees" },
          { value: "$847", label: "Annual Savings" },
          { value: "4.2%", label: "APY on Balance" },
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
              <div className="text-3xl font-bold text-primary mb-2">$29.95</div>
              <h3 className="font-semibold text-foreground mb-2">
                Annual Fee You Won&apos;t Pay
              </h3>
              <p className="text-sm text-muted-foreground">
                Payoneer charges $29.95/year just to have an account. DattaPay
                is free forever.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">2-4%</div>
              <h3 className="font-semibold text-foreground mb-2">
                Hidden Currency Fees
              </h3>
              <p className="text-sm text-muted-foreground">
                Payoneer&apos;s currency conversion adds 2-4% on top of their
                receiving fees. DattaPay: 0%.
              </p>
            </div>

            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="text-3xl font-bold text-primary mb-2">0%</div>
              <h3 className="font-semibold text-foreground mb-2">
                No Yield on Balance
              </h3>
              <p className="text-sm text-muted-foreground">
                Payoneer pays nothing on your balance. DattaPay pays 4.2% APY
                automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonFAQ competitorName="Payoneer" faqs={faqs} />

      <ComparisonCTA competitorName="Payoneer" savings="$847" />
    </>
  );
}
