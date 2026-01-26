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
    "Fiverr USDT USDC",
    "Fiverr Binance P2P",
    "Fiverr withdrawal 2026",
    "Fiverr skip Payoneer fees",
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
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Withdraw Fiverr Earnings with DattaPay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Withdraw Fiverr Earnings with DattaPay - Save $400+/Year",
    description:
      "Withdraw Fiverr earnings with just 0.5% fees. US bank account, 4.2% APY yield.",
    images: ["/og-image.png"],
    site: "@dattapay",
    creator: "@dattapay",
  },
};

const steps = [
  {
    number: 1,
    title: "Sign Up in 2 Minutes",
    description:
      "Get your instant funding account + crypto wallet. No paperwork, instant approval.",
  },
  {
    number: 2,
    title: "Add to Fiverr",
    description:
      "Go to Fiverr > Earnings > Withdraw > Bank Transfer. Add your DattaPay funding account details.",
  },
  {
    number: 3,
    title: "Auto-Convert to USDT/USDC",
    description:
      "When Fiverr payments arrive, they automatically convert to USDT/USDC stablecoin.",
  },
  {
    number: 4,
    title: "Sell on Binance P2P",
    description:
      "Transfer to Binance/Bybit/Bitget and sell at premium P2P rates (3-5% higher than banks).",
  },
];

const fees = [
  {
    label: "Annual Fee",
    platform: "$35/year (Payoneer)",
    dattapay: "$0",
    isBetter: true,
  },
  {
    label: "Per-Withdrawal Fee",
    platform: "$3 (Payoneer)",
    dattapay: "~0.5%",
    isBetter: true,
  },
  {
    label: "Fiverr Service Fee",
    platform: "20%",
    dattapay: "20% (unchanged)",
    isBetter: false,
  },
  {
    label: "Auto USDT/USDC Conversion",
    platform: "No",
    dattapay: "Yes",
    isBetter: true,
  },
  {
    label: "Binance P2P Selling",
    platform: "No",
    dattapay: "Yes (3-5% premium)",
    isBetter: true,
  },
  {
    label: "Minimum Annual Savings",
    platform: "-",
    dattapay: "$71+ vs Payoneer",
    isBetter: true,
  },
];

const faqs: PlatformFAQItem[] = [
  {
    question: "How do I withdraw Fiverr earnings to DattaPay?",
    answer:
      "Sign up in 2 minutes to get your instant funding account. Go to Fiverr > Earnings > Withdraw > Bank Transfer. Add your funding account details. Payments auto-convert to USDT/USDC, then sell on Binance P2P at premium rates.",
  },
  {
    question: "Is DattaPay better than Fiverr Revenue Card (Payoneer)?",
    answer:
      "Yes! Payoneer charges $35/year + $3 per withdrawal = $71+/year minimum. DattaPay has zero annual fees. Plus, your payments auto-convert to USDT/USDC so you can sell on Binance P2P at 3-5% higher rates than banks.",
  },
  {
    question: "How does the auto-conversion to USDT/USDC work?",
    answer:
      "When Fiverr payments arrive in your DattaPay funding account, they automatically convert to USDT or USDC stablecoin. This protects your earnings from local currency devaluation and lets you sell at premium rates on Binance/Bybit/Bitget.",
  },
  {
    question: "How do I sell on Binance P2P?",
    answer:
      "After your payment converts to USDT/USDC, transfer to your Binance/Bybit/Bitget wallet. Use their P2P marketplace to sell at premium rates - often 3-5% higher than official bank exchange rates. Cash out in your local currency.",
  },
  {
    question: "Can I use DattaPay for Fiverr in Africa?",
    answer:
      "Yes! DattaPay fully supports Fiverr freelancers in Nigeria, Kenya, Ghana, and other African countries. Sign up in 2 minutes, add your funding account to Fiverr, and start selling on Binance P2P at premium rates.",
  },
  {
    question: "How much can I save vs Payoneer?",
    answer:
      "At minimum: $35/year annual fee + $3×12 withdrawals = $71/year. But the real savings come from Binance P2P - you can often get 3-5% higher rates than Payoneer's bank transfer. On $10,000/year, that's $300-500 extra.",
  },
  {
    question: "Does DattaPay work for remittances too?",
    answer:
      "Yes! The same benefits apply to receiving money from family abroad. Payments auto-convert to USDT/USDC, and you can sell on Binance P2P at premium rates. Zero annual fees and much better rates than traditional services.",
  },
  {
    question: "What's the setup process?",
    answer:
      "1. Sign up in 2 minutes to get instant funding account + crypto wallet. 2. Add funding account to Fiverr as withdrawal method. 3. Payments auto-convert to USDT/USDC. 4. Sell on Binance/Bybit P2P at 3-5% premium rates.",
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
          name: "Fiverr",
          item: `${siteUrl}/fiverr`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/fiverr`,
      url: `${siteUrl}/fiverr`,
      name: "Withdraw Fiverr Earnings with DattaPay - 0.5% Fees",
      description:
        "Withdraw Fiverr earnings with just 0.5% fees. US bank account, 4.2% APY yield.",
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
          headline="Stop Paying Payoneer's $35/Year + $3 Per Withdrawal"
          subheadline="Get an instant funding account + crypto wallet in 2 minutes. Fiverr payments auto-convert to USDT/USDC. Sell on Binance/Bybit at premium P2P rates (3-5% higher than banks)."
          benefits={[
            "Instant funding account in 2 minutes",
            "Zero annual fees (Payoneer: $35/year)",
            "Auto-convert to USDT/USDC stablecoin",
            "Sell on Binance P2P at 3-5% premium rates",
          ]}
          savings="$71+"
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
                  $71+
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Minimum Annual Savings
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stop paying Payoneer&apos;s $35/year + $3×12 withdrawals.
                  DattaPay has zero annual fees.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  3-5%
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Binance P2P Premium
                </h3>
                <p className="text-sm text-muted-foreground">
                  Auto-convert to USDT/USDC, then sell on Binance P2P at rates
                  3-5% higher than bank transfers.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  2 min
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Instant Setup
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get your funding account + crypto wallet in 2 minutes. Add to
                  Fiverr and start receiving payments.
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

        <PlatformCTA platformName="Fiverr" savings="$71+" />
      </main>

      <Footer />
    </div>
  );
}
