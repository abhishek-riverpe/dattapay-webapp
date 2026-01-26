import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "Compare DattaPay - Payment Platform Comparisons 2026",
  description:
    "Compare DattaPay with Payoneer, Wise, Grey, and PayPal. See how we offer lower fees, higher yield, and better service for freelancers in Africa and LATAM.",
  keywords: [
    "DattaPay comparison",
    "Payoneer alternative",
    "Payoneer alternative 2026",
    "Wise alternative",
    "Grey alternative",
    "PayPal alternative Africa",
    "freelancer payment comparison",
    "best payment platform freelancers",
    "payment platform fees comparison",
    "international payment comparison 2026",
    "Binance P2P payment platform",
    "USDT USDC auto convert",
    "zero annual fee freelancer",
    "compare payment platforms Africa",
  ],
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
  openGraph: {
    title: "Compare DattaPay - Payment Platform Comparisons 2026",
    description:
      "Compare DattaPay with Payoneer, Wise, Grey. See how we offer lower fees, higher yield for freelancers.",
    url: `${siteUrl}/compare`,
    type: "website",
    siteName: "DattaPay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay Payment Platform Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare DattaPay with Alternatives",
    description:
      "See how DattaPay compares to Payoneer, Wise, Grey. Lower fees, higher yield.",
    images: ["/og-image.png"],
    site: "@dattapay",
    creator: "@dattapay",
  },
};

const comparisons = [
  {
    name: "Payoneer",
    slug: "payoneer",
    tagline: "Stop paying $35/year + $3 per withdrawal",
    painPoint: "$35 annual fee + $3 per withdrawal = $71+/year wasted",
    highlight: "Most Popular",
  },
  {
    name: "Grey",
    slug: "grey",
    tagline: "Sell on Binance P2P at premium rates",
    painPoint: "No access to crypto P2P premium rates",
    highlight: "Africa Focused",
  },
  {
    name: "Wise",
    slug: "wise",
    tagline: "Auto-convert to USDT/USDC instantly",
    painPoint: "USD suspended in Nigeria since 2022",
    highlight: "Nigeria Alternative",
  },
];

export default function ComparePage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Stop Paying Payoneer&apos;s $35/Year + $3 Per Withdrawal
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant funding account + crypto wallet in 2 minutes. Payments auto-convert to USDT/USDC.
            Sell on Binance/Bybit/Bitget at premium P2P rates.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Highlight Badge */}
              {comparison.highlight && (
                <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-semibold uppercase px-3 py-1 rounded-full">
                  {comparison.highlight}
                </div>
              )}

              {/* Content */}
              <div className="mb-4">
                <h2 className="text-xl font-bold text-foreground mb-2">
                  DattaPay vs {comparison.name}
                </h2>
                <p className="text-primary font-medium text-sm mb-2">
                  {comparison.tagline}
                </p>
                <p className="text-sm text-muted-foreground">
                  Pain point: {comparison.painPoint}
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                <span>View comparison</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Summary Section */}
        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Why Freelancers Choose DattaPay
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2 min</div>
              <div className="text-sm text-muted-foreground">
                Setup time
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$0</div>
              <div className="text-sm text-muted-foreground">
                Annual fees (Payoneer: $35)
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Auto</div>
              <div className="text-sm text-muted-foreground">
                USDT/USDC conversion
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3-5%</div>
              <div className="text-sm text-muted-foreground">
                Premium on Binance P2P
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
