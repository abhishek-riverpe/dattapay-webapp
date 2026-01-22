import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RegionalHero from "@/components/regional/regional-hero";
import RegionalPainPoints from "@/components/regional/regional-pain-points";
import RegionalSolutions from "@/components/regional/regional-solutions";
import RegionalFAQ, { RegionalFAQItem } from "@/components/regional/regional-faq";
import RegionalCTA from "@/components/regional/regional-cta";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "DattaPay Nigeria - Receive USD Payments | Dollar Account for Freelancers",
  description:
    "Get a US dollar account in Nigeria. Receive payments from Upwork, Fiverr with 0.5% fees. Earn 4.2% APY. Protect your earnings from Naira devaluation with USDC.",
  keywords: [
    "dollar account Nigeria",
    "receive USD payments Nigeria",
    "USD account Nigerian freelancer",
    "Upwork payments Nigeria",
    "Fiverr withdrawal Nigeria",
    "domiciliary account alternative Nigeria",
    "stablecoin payments Nigeria",
    "protect naira devaluation",
    "USDC Nigeria freelancer",
    "Payoneer alternative Nigeria",
    "Wise alternative Nigeria",
    "Grey alternative Nigeria",
    "best dollar account Nigerian freelancers",
    "receive dollars Africa",
  ],
  alternates: {
    canonical: `${siteUrl}/ng`,
  },
  openGraph: {
    title: "DattaPay Nigeria - USD Payments for Nigerian Freelancers",
    description:
      "Get a US dollar account in Nigeria. 0.5% fees, 4.2% APY, protection from Naira devaluation.",
    url: `${siteUrl}/ng`,
    type: "website",
    locale: "en_NG",
  },
};

const painPoints = [
  {
    icon: "devaluation" as const,
    title: "Naira Devaluation",
    description:
      "The Naira has lost significant value. Keeping earnings in Naira means losing money every day.",
    stat: "30%+",
  },
  {
    icon: "fees" as const,
    title: "High Platform Fees",
    description:
      "Payoneer charges up to 8.5% in total fees. Traditional banks charge high conversion rates.",
    stat: "8.5%",
  },
  {
    icon: "restricted" as const,
    title: "Limited Options",
    description:
      "PayPal is send-only. Wise USD is suspended since 2022. Options for Nigerian freelancers are limited.",
    stat: "2022",
  },
  {
    icon: "inflation" as const,
    title: "No Yield on Savings",
    description:
      "Most platforms pay 0% on your balance. Your idle money loses value to inflation.",
    stat: "0%",
  },
];

const solutions = [
  {
    icon: "wallet" as const,
    title: "US Dollar Account",
    description:
      "Get a real US bank account with routing and account numbers. Receive payments from any client or platform worldwide.",
    benefits: [
      "Works with Upwork, Fiverr, Toptal, Deel",
      "Direct ACH and wire transfers",
      "No domiciliary account needed",
      "Instant account setup",
    ],
  },
  {
    icon: "yield" as const,
    title: "4.2% APY on Your Balance",
    description:
      "Your idle funds automatically earn 4.2% annual yield. Make your money work while you work.",
    benefits: [
      "Earn $420/year on $10,000 balance",
      "Daily accrual, automatic compounding",
      "No lock-up period",
      "Withdraw anytime",
    ],
  },
  {
    icon: "security" as const,
    title: "USDC Stablecoin Protection",
    description:
      "Your funds are backed by USDC stablecoin, keeping them pegged to the US dollar regardless of Naira fluctuations.",
    benefits: [
      "1:1 USD backing",
      "Protection from Naira devaluation",
      "Transparent reserves",
      "Instant liquidity",
    ],
  },
  {
    icon: "speed" as const,
    title: "Fast Naira Withdrawals",
    description:
      "Withdraw to your Nigerian bank account quickly with competitive exchange rates.",
    benefits: [
      "Competitive NGN rates",
      "1-2 business day processing",
      "Multiple bank support",
      "No hidden fees",
    ],
  },
];

const faqs: RegionalFAQItem[] = [
  {
    question: "How do I receive USD payments in Nigeria with DattaPay?",
    answer:
      "Sign up for DattaPay to get a US bank account with routing and account numbers. Share these details with your clients on Upwork, Fiverr, or any platform. When they pay, the funds arrive in your DattaPay account in USD.",
  },
  {
    question: "Is DattaPay legal in Nigeria?",
    answer:
      "Yes, DattaPay operates legally and is compliant with international financial regulations. We provide legitimate USD account services for freelancers receiving international payments.",
  },
  {
    question: "How does DattaPay compare to a domiciliary account?",
    answer:
      "DattaPay is faster to set up (5 minutes vs weeks), has lower fees (0.5% vs 2-5%), and pays 4.2% APY on your balance. Unlike dom accounts, you also get USDC stablecoin backing for inflation protection.",
  },
  {
    question: "Why is DattaPay better than Payoneer for Nigeria?",
    answer:
      "DattaPay charges 0.5% flat fee vs Payoneer's 8.5% total fees (receiving + currency conversion + annual fee). Plus, DattaPay pays 4.2% APY on your balance - Payoneer pays 0%.",
  },
  {
    question: "Can I receive Upwork payments with DattaPay in Nigeria?",
    answer:
      "Yes! Simply add your DattaPay US bank account details (routing and account number) as a payment method on Upwork. Your earnings will be deposited directly to your DattaPay account with only 0.5% fees.",
  },
  {
    question: "How does DattaPay protect against Naira devaluation?",
    answer:
      "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to the US dollar. When the Naira drops, your USD-denominated funds maintain their value. You can convert to Naira only when you need to spend.",
  },
  {
    question: "What happened to Wise USD in Nigeria?",
    answer:
      "Wise suspended USD transfers to Nigeria in November 2022 and hasn't restored the service. DattaPay offers full USD support for Nigerian freelancers with no restrictions.",
  },
  {
    question: "How long do withdrawals to Nigerian banks take?",
    answer:
      "Withdrawals to Nigerian bank accounts typically complete within 1-2 business days. We support all major Nigerian banks including GTBank, Access Bank, First Bank, UBA, and others.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/ng`,
      url: `${siteUrl}/ng`,
      name: "DattaPay Nigeria - USD Payments for Nigerian Freelancers",
      description:
        "Get a US dollar account in Nigeria. Receive payments with 0.5% fees, earn 4.2% APY.",
      inLanguage: "en-NG",
      datePublished: "2026-01-01",
      dateModified: "2026-01-22",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "Country",
        name: "Nigeria",
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
      "@type": "Service",
      name: "DattaPay Nigeria",
      description:
        "USD payment platform for Nigerian freelancers with 0.5% fees and 4.2% APY",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
      serviceType: "Financial Services",
    },
  ],
};

export default function NigeriaPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <RegionalHero
          country="Nigeria"
          flag="🇳🇬"
          headline="Receive USD Payments in Nigeria with 0.5% Fees"
          subheadline="Join thousands of Nigerian freelancers using DattaPay. Get a US dollar account, earn 4.2% APY, and protect your earnings from Naira devaluation."
          stats={[
            { value: "0.5%", label: "Flat Fee" },
            { value: "4.2%", label: "APY Yield" },
            { value: "$22B", label: "NG Stablecoin Market" },
            { value: "5 min", label: "Setup Time" },
          ]}
          ctaText="Get Your USD Account"
        />

        <RegionalPainPoints country="Nigeria" painPoints={painPoints} />

        <RegionalSolutions country="Nigerian" solutions={solutions} />

        {/* Platforms Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Works with All Your Favorite Platforms
              </h2>
              <p className="text-lg text-muted-foreground">
                Receive payments from any platform that supports US bank
                transfers.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Upwork",
                "Fiverr",
                "Toptal",
                "Deel",
                "Freelancer.com",
                "Remote.com",
                "Turing",
                "Andela",
              ].map((platform) => (
                <span
                  key={platform}
                  className="px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats Section */}
        <section className="py-16 sm:py-24 bg-primary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
              Nigeria&apos;s $22 Billion Stablecoin Market
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nigerian freelancers processed $22 billion in stablecoin
              transactions between July 2023 and June 2024. This isn&apos;t
              speculation - it&apos;s necessity. With 30%+ inflation and Naira
              devaluation, keeping earnings in USD is the smart choice.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">43%</div>
                <div className="text-sm text-muted-foreground">
                  of Africa crypto volume is stablecoins
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">$22B</div>
                <div className="text-sm text-muted-foreground">
                  Nigeria stablecoin volume (2023-2024)
                </div>
              </div>
              <div className="rounded-2xl border border-border/50 bg-card p-6">
                <div className="text-3xl font-bold text-primary mb-2">30%+</div>
                <div className="text-sm text-muted-foreground">
                  Nigeria inflation rate
                </div>
              </div>
            </div>
          </div>
        </section>

        <RegionalFAQ country="Nigeria" faqs={faqs} />

        <RegionalCTA
          country="Nigeria"
          flag="🇳🇬"
          headline="Start Receiving USD in Nigeria Today"
          subheadline="Set up your DattaPay account in 5 minutes. No paperwork, no waiting. Just a US bank account ready to receive payments."
          ctaText="Get Your USD Account"
        />
      </main>

      <Footer />
    </div>
  );
}
