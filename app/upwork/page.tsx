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
  title: "Get Paid from Upwork with DattaPay - 0.5% Fees | Save $500+/Year",
  description:
    "Receive Upwork payments with just 0.5% fees. Bypass Upwork's high withdrawal fees. Get a US bank account, earn 4.2% APY. Works in Nigeria, Kenya, Brazil.",
  keywords: [
    "Upwork payments",
    "Upwork withdrawal fees",
    "best way withdraw Upwork",
    "Upwork payments Africa",
    "Upwork withdrawal Nigeria",
    "Upwork low fees",
    "Upwork bank transfer",
    "Upwork payment method",
    "receive Upwork payments",
    "Upwork Payoneer alternative",
    "Upwork direct deposit",
    "Upwork US bank account",
  ],
  alternates: {
    canonical: `${siteUrl}/upwork`,
  },
  openGraph: {
    title: "Get Paid from Upwork with DattaPay - Save $500+/Year",
    description:
      "Receive Upwork payments with just 0.5% fees. US bank account, 4.2% APY yield.",
    url: `${siteUrl}/upwork`,
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
    title: "Add to Upwork",
    description:
      "Go to Upwork Settings > Get Paid > Add Method > US Bank Account. Enter your DattaPay details.",
  },
  {
    number: 4,
    title: "Get Paid & Earn Yield",
    description:
      "Receive payments with 0.5% fee. Your balance automatically earns 4.2% APY.",
  },
];

const fees = [
  {
    label: "Upwork Service Fee",
    platform: "10-20%",
    dattapay: "10-20% (unchanged)",
    isBetter: false,
  },
  {
    label: "Withdrawal to Payoneer",
    platform: "2-3% + conversion",
    dattapay: "N/A",
    isBetter: true,
  },
  {
    label: "Withdrawal to Bank",
    platform: "$0.99-$30",
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
    label: "Monthly Fee",
    platform: "$0",
    dattapay: "$0",
    isBetter: false,
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
    question: "How do I add DattaPay as a payment method on Upwork?",
    answer:
      "Go to Upwork Settings > Get Paid > Add a method > Select 'Direct to U.S. Bank (ACH)'. Enter your DattaPay routing number and account number. Upwork will verify your account with two small deposits.",
  },
  {
    question: "Is DattaPay better than Payoneer for Upwork?",
    answer:
      "Yes, for most freelancers. Payoneer charges 2-3% receiving fee plus 2-4% currency conversion. DattaPay charges 0.5% flat fee with no conversion costs. Plus, DattaPay pays 4.2% APY on your balance - Payoneer pays 0%.",
  },
  {
    question: "Can I use DattaPay for Upwork in Nigeria?",
    answer:
      "Yes! DattaPay fully supports Nigerian freelancers. You get a US bank account that works with Upwork, and you can withdraw to your Nigerian bank account with competitive exchange rates.",
  },
  {
    question: "How long does Upwork take to deposit to DattaPay?",
    answer:
      "Upwork processes US bank (ACH) withdrawals within 2-5 business days. This is the same as their standard US bank transfer timeline. Once in your DattaPay account, funds are immediately available.",
  },
  {
    question: "Does Upwork charge fees for withdrawing to DattaPay?",
    answer:
      "Upwork charges $0.99 for US bank transfers under certain thresholds. However, you avoid the 2-4% currency conversion fees that platforms like Payoneer charge. DattaPay's 0.5% flat fee is typically much lower than alternatives.",
  },
  {
    question: "What if my Upwork earnings are in different currencies?",
    answer:
      "DattaPay receives USD directly from Upwork. If your clients pay in other currencies, Upwork converts to USD before sending to your US bank account. You receive clean USD with no additional conversion fees from DattaPay.",
  },
  {
    question: "Can I still use Upwork Direct Contracts with DattaPay?",
    answer:
      "Yes! DattaPay works with all Upwork payment types including direct contracts, hourly contracts, and fixed-price projects. Any payment Upwork can send to a US bank account works with DattaPay.",
  },
  {
    question: "How does the 4.2% APY work with Upwork earnings?",
    answer:
      "Once your Upwork payment arrives in DattaPay, it immediately starts earning 4.2% APY. Interest accrues daily and compounds automatically. You can withdraw anytime - there's no lock-up period.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/upwork`,
      url: `${siteUrl}/upwork`,
      name: "Get Paid from Upwork with DattaPay - 0.5% Fees",
      description:
        "Receive Upwork payments with just 0.5% fees. US bank account, 4.2% APY yield.",
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
      name: "How to Get Paid from Upwork with DattaPay",
      description:
        "Step-by-step guide to receiving Upwork payments through DattaPay with 0.5% fees",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
  ],
};

export default function UpworkPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <PlatformHero
          platformName="Upwork"
          platformColor="#14a800"
          headline="Get Paid from Upwork with 0.5% Fees"
          subheadline="Stop paying 3-5% in withdrawal fees. Use DattaPay's US bank account to receive Upwork payments directly with just 0.5% flat fee."
          benefits={[
            "US bank account accepted by Upwork",
            "0.5% flat fee vs 3-5% with Payoneer",
            "Earn 4.2% APY on your balance",
            "Works in Nigeria, Kenya, Brazil & 100+ countries",
          ]}
          savings="$500+"
        />

        <PlatformSteps platformName="Upwork" steps={steps} />

        <PlatformFeeComparison
          platformName="Upwork"
          fees={fees}
          annualSavings="$500+"
        />

        {/* Countries Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Works for Upwork Freelancers Worldwide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                DattaPay supports Upwork freelancers in over 100 countries.
                Popular with freelancers in:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Nigeria", flag: "🇳🇬" },
                { name: "Kenya", flag: "🇰🇪" },
                { name: "Brazil", flag: "🇧🇷" },
                { name: "Argentina", flag: "🇦🇷" },
                { name: "India", flag: "🇮🇳" },
                { name: "Philippines", flag: "🇵🇭" },
                { name: "Pakistan", flag: "🇵🇰" },
                { name: "Mexico", flag: "🇲🇽" },
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

        {/* Why Switch Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Why Upwork Freelancers Switch to DattaPay
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  $500+
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Annual Savings
                </h3>
                <p className="text-sm text-muted-foreground">
                  On $10,000/year in Upwork earnings, you save over $500
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
                  Your idle Upwork earnings earn 4.2% APY automatically.
                  Payoneer and Upwork pay 0%.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  USDC
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Inflation Protection
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your funds are backed by USDC stablecoin. Protect your
                  earnings from local currency devaluation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PlatformFAQ platformName="Upwork" faqs={faqs} />

        <PlatformCTA platformName="Upwork" savings="$500+" />
      </main>

      <Footer />
    </div>
  );
}
