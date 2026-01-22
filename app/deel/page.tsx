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
  title: "Receive Deel Payments with DattaPay - 0.5% Fees | Contractors & EOR",
  description:
    "Receive Deel contractor payments with just 0.5% fees. Better than Deel Card. US bank account, 4.2% APY yield. Works for contractors and EOR employees.",
  keywords: [
    "Deel payment",
    "Deel withdrawal",
    "Deel contractor payments",
    "Deel alternative",
    "Deel Card alternative",
    "Deel payment methods",
    "Deel bank transfer",
    "receive Deel payments",
    "Deel withdrawal fees",
    "Deel payments Africa",
    "Deel EOR payments",
    "Deel US bank account",
  ],
  alternates: {
    canonical: `${siteUrl}/deel`,
  },
  openGraph: {
    title: "Receive Deel Payments with DattaPay - 0.5% Fees",
    description:
      "Receive Deel payments with just 0.5% fees. US bank account, 4.2% APY yield.",
    url: `${siteUrl}/deel`,
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
    title: "Add to Deel",
    description:
      "Go to Deel > Payment Methods > Add Bank Account. Enter your DattaPay US bank details.",
  },
  {
    number: 4,
    title: "Get Paid & Earn Yield",
    description:
      "Receive your Deel payments with 0.5% fee. Your balance earns 4.2% APY automatically.",
  },
];

const fees = [
  {
    label: "Deel Platform Fee",
    platform: "Paid by employer",
    dattapay: "Paid by employer",
    isBetter: false,
  },
  {
    label: "Deel Card Fees",
    platform: "1-2% + ATM fees",
    dattapay: "N/A",
    isBetter: true,
  },
  {
    label: "Bank Transfer Fee",
    platform: "$5-$20",
    dattapay: "0.5% flat",
    isBetter: true,
  },
  {
    label: "Currency Conversion",
    platform: "2-3%",
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
    question: "How do I receive Deel payments with DattaPay?",
    answer:
      "Log into Deel > Go to Payment Methods > Add a new bank account > Select US Bank (ACH). Enter your DattaPay routing and account number. Your next payment will be deposited to DattaPay.",
  },
  {
    question: "Is DattaPay better than Deel Card?",
    answer:
      "For most contractors, yes. The Deel Card charges 1-2% on transactions plus ATM fees. With DattaPay, you pay 0.5% flat, earn 4.2% APY on your balance, and have full control over when to convert currencies.",
  },
  {
    question: "Does DattaPay work with Deel EOR?",
    answer:
      "Yes! Whether you're a Deel contractor or employed through Deel EOR (Employer of Record), you can receive your salary to a DattaPay US bank account. The setup process is the same.",
  },
  {
    question: "Can I use DattaPay for Deel in Nigeria?",
    answer:
      "Yes! DattaPay fully supports Deel contractors and EOR employees in Nigeria. You get a US bank account that works with Deel's bank transfer option, and you can withdraw to your Nigerian bank.",
  },
  {
    question: "How long does Deel take to pay to DattaPay?",
    answer:
      "Deel processes US bank (ACH) payments within 3-5 business days after your payment is approved. This is Deel's standard timeline for US bank transfers. Once received, funds are immediately available in DattaPay.",
  },
  {
    question: "What's better: DattaPay, Deel Crypto, or Deel Card?",
    answer:
      "DattaPay offers the best combination: 0.5% flat fee (lower than Deel Card), 4.2% APY yield (Deel pays 0%), and USDC stablecoin backing (similar to crypto but more stable). You get crypto-level protection with bank-level convenience.",
  },
  {
    question: "Does DattaPay work with Deel Advance?",
    answer:
      "Yes! If you use Deel Advance to access your earnings early, those payments can be sent to your DattaPay US bank account. The same low fees apply.",
  },
  {
    question: "How does the 4.2% APY work with Deel payments?",
    answer:
      "Once your Deel payment arrives in DattaPay, it immediately starts earning 4.2% APY. Interest compounds daily. If you keep $5,000 in your account between payments, you'd earn about $210/year in passive income.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/deel`,
      url: `${siteUrl}/deel`,
      name: "Receive Deel Payments with DattaPay - 0.5% Fees",
      description:
        "Receive Deel payments with just 0.5% fees. US bank account, 4.2% APY yield.",
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
      name: "How to Receive Deel Payments with DattaPay",
      description:
        "Step-by-step guide to receiving Deel contractor payments through DattaPay with 0.5% fees",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
  ],
};

export default function DeelPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <PlatformHero
          platformName="Deel"
          platformColor="#4338ca"
          headline="Receive Deel Payments with 0.5% Fees"
          subheadline="Better than Deel Card for contractors and EOR employees. Use DattaPay's US bank account to receive payments with just 0.5% flat fee."
          benefits={[
            "US bank account accepted by Deel",
            "0.5% flat fee vs Deel Card's 1-2%",
            "Earn 4.2% APY on your balance",
            "Works for contractors and EOR employees",
          ]}
          savings="$300+"
        />

        <PlatformSteps platformName="Deel" steps={steps} />

        <PlatformFeeComparison
          platformName="Deel"
          fees={fees}
          annualSavings="$300+"
        />

        {/* Use Cases Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Works for All Deel Users
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                DattaPay supports all types of Deel payments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-border/50 bg-card p-6 text-center">
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Contractors
                </h3>
                <p className="text-sm text-muted-foreground">
                  Receive contractor payments from clients worldwide with 0.5%
                  fees.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold text-foreground mb-2">
                  EOR Employees
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get your salary through Deel EOR with lower fees than Deel
                  Card.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Global Freelancers
                </h3>
                <p className="text-sm text-muted-foreground">
                  Work with Deel clients globally and keep more of your
                  earnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Switch Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Why Deel Users Switch to DattaPay
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  $300+
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Annual Savings
                </h3>
                <p className="text-sm text-muted-foreground">
                  On $6,000/year in Deel payments, you save over $300 compared
                  to Deel Card fees.
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
                  Your Deel payments earn 4.2% APY automatically. Deel Card pays
                  0%.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  USDC
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Stablecoin Protection
                </h3>
                <p className="text-sm text-muted-foreground">
                  Like Deel Crypto but more stable. Your funds are backed by
                  USDC stablecoin.
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
                Popular with Deel Users In
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Nigeria", flag: "🇳🇬" },
                { name: "Kenya", flag: "🇰🇪" },
                { name: "Brazil", flag: "🇧🇷" },
                { name: "Argentina", flag: "🇦🇷" },
                { name: "Colombia", flag: "🇨🇴" },
                { name: "Mexico", flag: "🇲🇽" },
                { name: "India", flag: "🇮🇳" },
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

        <PlatformFAQ platformName="Deel" faqs={faqs} />

        <PlatformCTA platformName="Deel" savings="$300+" />
      </main>

      <Footer />
    </div>
  );
}
