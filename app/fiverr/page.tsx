import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PlatformHero from "@/components/platform/platform-hero";
import PlatformSteps from "@/components/platform/platform-steps";
import PlatformFeeComparison from "@/components/platform/platform-fee-comparison";
import PlatformFAQ, { PlatformFAQItem } from "@/components/platform/platform-faq";
import PlatformCTA from "@/components/platform/platform-cta";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "Withdraw Fiverr Earnings with DattaPay - 0.5% Fees | Save $400+/Year",
  description:
    "Withdraw Fiverr earnings with just 0.5% fees. Skip Payoneer's high fees. US bank account, 4.2% APY yield. Works in Nigeria, Kenya, Brazil, Argentina.",
  keywords: [
    "Fiverr withdrawal",
    "Fiverr payout",
    "Fiverr Payoneer alternative",
    "Fiverr bank transfer",
    "Fiverr payments Africa",
    "Fiverr withdrawal Nigeria",
    "Fiverr low fees",
    "Fiverr revenue card alternative",
    "withdraw Fiverr earnings",
    "Fiverr payment methods",
    "Fiverr ganhar em dólar",
    "Fiverr US bank account",
  ],
  alternates: {
    canonical: `${siteUrl}/fiverr`,
  },
  openGraph: {
    title: "Withdraw Fiverr Earnings with DattaPay - Save $400+/Year",
    description:
      "Withdraw Fiverr earnings with just 0.5% fees. US bank account, 4.2% APY yield.",
    url: `${siteUrl}/fiverr`,
    type: "website",
  },
};

const steps = [
  {
    number: 1,
    title: "Sign Up for DattaPay",
    description:
      "Create your free account in 5 minutes. No paperwork, instant approval.",
  },
  {
    number: 2,
    title: "Get Your US Bank Details",
    description:
      "Receive your US bank account with routing number and account number.",
  },
  {
    number: 3,
    title: "Link to Fiverr",
    description:
      "Go to Fiverr > Earnings > Withdraw > Bank Transfer. Add your DattaPay US bank details.",
  },
  {
    number: 4,
    title: "Withdraw & Earn Yield",
    description:
      "Withdraw your Fiverr earnings with 0.5% fee. Balance earns 4.2% APY automatically.",
  },
];

const fees = [
  {
    label: "Fiverr Service Fee",
    platform: "20%",
    dattapay: "20% (unchanged)",
    isBetter: false,
  },
  {
    label: "Fiverr Withdrawal Fee",
    platform: "$1-$3",
    dattapay: "$0",
    isBetter: true,
  },
  {
    label: "Payoneer Fee",
    platform: "2-3%",
    dattapay: "N/A",
    isBetter: true,
  },
  {
    label: "DattaPay Fee",
    platform: "N/A",
    dattapay: "0.5% flat",
    isBetter: true,
  },
  {
    label: "Currency Conversion",
    platform: "2-4%",
    dattapay: "0%",
    isBetter: true,
  },
  {
    label: "Yield on Balance",
    platform: "0%",
    dattapay: "4.2% APY",
    isBetter: true,
  },
];

const faqs: PlatformFAQItem[] = [
  {
    question: "How do I withdraw Fiverr earnings to DattaPay?",
    answer:
      "Go to Fiverr > Earnings > Withdraw > Select Bank Transfer. Enter your DattaPay US bank account details (routing and account number). Fiverr will process the withdrawal within 5-7 business days.",
  },
  {
    question: "Is DattaPay better than Fiverr Revenue Card?",
    answer:
      "For most freelancers, yes. The Fiverr Revenue Card (Payoneer) charges 2-3% on withdrawals plus currency conversion fees. DattaPay charges 0.5% flat with no conversion costs, and pays 4.2% APY on your balance.",
  },
  {
    question: "Can I use DattaPay for Fiverr in Africa?",
    answer:
      "Yes! DattaPay fully supports Fiverr freelancers in Nigeria, Kenya, Ghana, South Africa, and other African countries. You get a US bank account that works with Fiverr's bank transfer option.",
  },
  {
    question: "How long does Fiverr take to send money to DattaPay?",
    answer:
      "Fiverr processes bank transfer withdrawals within 5-7 business days. This is their standard timeline for US bank transfers. Once in your DattaPay account, funds are immediately available.",
  },
  {
    question: "What's the minimum Fiverr withdrawal to DattaPay?",
    answer:
      "Fiverr's minimum withdrawal for bank transfer is $100. There's no maximum limit. DattaPay has no minimum balance requirements.",
  },
  {
    question: "Does DattaPay work with Fiverr Business?",
    answer:
      "Yes! DattaPay works with regular Fiverr and Fiverr Business. Any earnings you can withdraw via bank transfer can be sent to your DattaPay US bank account.",
  },
  {
    question: "How do I avoid Fiverr's currency conversion fees?",
    answer:
      "By using DattaPay, your Fiverr earnings stay in USD. You only convert to local currency when you need to spend. This avoids Payoneer's 2-4% conversion fees and lets you time your conversion for better rates.",
  },
  {
    question: "Can I earn interest on my Fiverr earnings?",
    answer:
      "Yes! Once your Fiverr withdrawal arrives in DattaPay, it immediately starts earning 4.2% APY. Unlike Payoneer or bank accounts that pay 0%, your idle earnings work for you.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/fiverr`,
      url: `${siteUrl}/fiverr`,
      name: "Withdraw Fiverr Earnings with DattaPay - 0.5% Fees",
      description:
        "Withdraw Fiverr earnings with just 0.5% fees. US bank account, 4.2% APY yield.",
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
    {
      "@type": "HowTo",
      name: "How to Withdraw Fiverr Earnings with DattaPay",
      description:
        "Step-by-step guide to withdrawing Fiverr earnings through DattaPay with 0.5% fees",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
  ],
};

export default function FiverrPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <PlatformHero
          platformName="Fiverr"
          platformColor="#1dbf73"
          headline="Withdraw Fiverr Earnings with 0.5% Fees"
          subheadline="Skip Payoneer's 3-5% fees. Use DattaPay's US bank account to withdraw your Fiverr earnings with just 0.5% flat fee."
          benefits={[
            "US bank account for Fiverr withdrawals",
            "0.5% flat fee vs 3-5% with Payoneer",
            "Earn 4.2% APY on your balance",
            "Works in Nigeria, Kenya, Brazil & 100+ countries",
          ]}
          savings="$400+"
        />

        <PlatformSteps platformName="Fiverr" steps={steps} />

        <PlatformFeeComparison
          platformName="Fiverr"
          fees={fees}
          annualSavings="$400+"
        />

        {/* Gig Categories Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Popular with Fiverr Sellers in All Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                DattaPay works for all types of Fiverr freelancers.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Graphic Design",
                "Web Development",
                "Writing & Translation",
                "Video & Animation",
                "Music & Audio",
                "Programming & Tech",
                "Digital Marketing",
                "Virtual Assistant",
              ].map((category) => (
                <span
                  key={category}
                  className="px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Switch Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Why Fiverr Sellers Switch to DattaPay
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  $400+
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Annual Savings
                </h3>
                <p className="text-sm text-muted-foreground">
                  On $8,000/year in Fiverr earnings, you save over $400
                  compared to Payoneer&apos;s fees.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  4.2%
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  APY on Balance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your Fiverr earnings automatically earn 4.2% APY while waiting
                  for your next withdrawal.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  100+
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Countries Supported
                </h3>
                <p className="text-sm text-muted-foreground">
                  DattaPay works for Fiverr sellers worldwide, including
                  Nigeria, Kenya, Brazil, and Argentina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Popular with Fiverr Sellers In
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Nigeria", flag: "🇳🇬" },
                { name: "Kenya", flag: "🇰🇪" },
                { name: "Brazil", flag: "🇧🇷" },
                { name: "Argentina", flag: "🇦🇷" },
                { name: "India", flag: "🇮🇳" },
                { name: "Pakistan", flag: "🇵🇰" },
                { name: "Bangladesh", flag: "🇧🇩" },
                { name: "Philippines", flag: "🇵🇭" },
              ].map((country) => (
                <span
                  key={country.name}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <PlatformFAQ platformName="Fiverr" faqs={faqs} />

        <PlatformCTA platformName="Fiverr" savings="$400+" />
      </main>

      <Footer />
    </div>
  );
}
