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
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Receive Deel Payments with DattaPay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Receive Deel Payments with DattaPay - 0.5% Fees",
    description:
      "Receive Deel payments with just 0.5% fees. US bank account, 4.2% APY yield.",
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
    title: "Add to Deel",
    description:
      "Go to Deel > Payment Methods > Add Bank Account. Enter your DattaPay funding account details.",
  },
  {
    number: 3,
    title: "Auto-Convert to USDT/USDC",
    description:
      "When Deel payments arrive, they automatically convert to USDT/USDC stablecoin.",
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
    platform: "$0",
    dattapay: "$0",
    isBetter: false,
  },
  {
    label: "Per-Transaction Fee",
    platform: "1-2% (Deel Card)",
    dattapay: "~0.5%",
    isBetter: true,
  },
  {
    label: "Deel Platform Fee",
    platform: "Paid by employer",
    dattapay: "Paid by employer",
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
    label: "Setup Time",
    platform: "Days to weeks",
    dattapay: "2 minutes",
    isBetter: true,
  },
];

const faqs: PlatformFAQItem[] = [
  {
    question: "How do I receive Deel payments with DattaPay?",
    answer:
      "Sign up in 2 minutes to get your instant funding account. Go to Deel > Payment Methods > Add Bank Account. Enter your funding account details. Payments auto-convert to USDT/USDC, then sell on Binance P2P at premium rates.",
  },
  {
    question: "Is DattaPay better than Deel Card?",
    answer:
      "Yes! Deel Card charges 1-2% on transactions. DattaPay has lower fees, plus your payments auto-convert to USDT/USDC so you can sell on Binance P2P at 3-5% higher rates than bank transfers.",
  },
  {
    question: "How does the auto-conversion to USDT/USDC work?",
    answer:
      "When Deel payments arrive in your DattaPay funding account, they automatically convert to USDT or USDC stablecoin. This protects your earnings from local currency devaluation and lets you sell at premium rates on Binance/Bybit/Bitget.",
  },
  {
    question: "How do I sell on Binance P2P?",
    answer:
      "After your payment converts to USDT/USDC, transfer to your Binance/Bybit/Bitget wallet. Use their P2P marketplace to sell at premium rates - often 3-5% higher than official bank exchange rates. Cash out in your local currency.",
  },
  {
    question: "Does DattaPay work with Deel EOR?",
    answer:
      "Yes! Whether you're a Deel contractor or employed through Deel EOR (Employer of Record), you can receive your salary to DattaPay. Payments auto-convert to stablecoin for Binance P2P selling.",
  },
  {
    question: "Can I use DattaPay for Deel in Nigeria?",
    answer:
      "Yes! DattaPay fully supports Deel contractors and EOR employees in Nigeria. Sign up in 2 minutes, add your funding account to Deel, and start selling on Binance P2P at premium rates.",
  },
  {
    question: "Does DattaPay work for remittances too?",
    answer:
      "Yes! The same benefits apply to receiving money from family abroad. Payments auto-convert to USDT/USDC, and you can sell on Binance P2P at premium rates. Zero annual fees and much better rates than traditional services.",
  },
  {
    question: "What's the setup process?",
    answer:
      "1. Sign up in 2 minutes to get instant funding account + crypto wallet. 2. Add funding account to Deel as withdrawal method. 3. Payments auto-convert to USDT/USDC. 4. Sell on Binance/Bybit P2P at 3-5% premium rates.",
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
          name: "Deel",
          item: `${siteUrl}/deel`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/deel`,
      url: `${siteUrl}/deel`,
      name: "Receive Deel Payments with DattaPay - 0.5% Fees",
      description:
        "Receive Deel payments with just 0.5% fees. US bank account, 4.2% APY yield.",
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
          headline="Better Than Deel Card: Auto-Convert to USDT/USDC"
          subheadline="Get an instant funding account + crypto wallet in 2 minutes. Deel payments auto-convert to USDT/USDC. Sell on Binance/Bybit at premium P2P rates (3-5% higher than banks)."
          benefits={[
            "Instant funding account in 2 minutes",
            "Zero annual fees",
            "Auto-convert to USDT/USDC stablecoin",
            "Sell on Binance P2P at 3-5% premium rates",
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
                  2 min
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Instant Setup
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get your funding account + crypto wallet in 2 minutes. Add to
                  Deel and start receiving payments.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  Auto
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  USDT/USDC Conversion
                </h3>
                <p className="text-sm text-muted-foreground">
                  Payments automatically convert to stablecoin. Protection
                  against local currency devaluation.
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
                  Sell USDT/USDC on Binance/Bybit P2P at rates 3-5% higher than
                  bank transfers.
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
