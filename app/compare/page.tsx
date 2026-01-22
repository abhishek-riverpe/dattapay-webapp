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
    "Wise alternative",
    "Grey alternative",
    "PayPal alternative Africa",
    "freelancer payment comparison",
    "best payment platform freelancers",
  ],
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
};

const comparisons = [
  {
    name: "Payoneer",
    slug: "payoneer",
    tagline: "Save $847/year vs 8.5% total fees",
    painPoint: "High fees eating your earnings",
    highlight: "Most Popular",
  },
  {
    name: "Grey",
    slug: "grey",
    tagline: "Same markets, better yield (4.2% APY)",
    painPoint: "No yield on your balance",
    highlight: "Africa Focused",
  },
  {
    name: "Wise",
    slug: "wise",
    tagline: "Full USD support (unlike Wise in Nigeria)",
    painPoint: "USD suspended since 2022",
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
            Compare DattaPay with Alternatives
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how DattaPay stacks up against other payment platforms. Lower
            fees, higher yield, and built for freelancers in Africa and LATAM.
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
              <div className="text-3xl font-bold text-primary mb-2">0.5%</div>
              <div className="text-sm text-muted-foreground">
                Flat transaction fee
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.2%</div>
              <div className="text-sm text-muted-foreground">
                APY on idle funds
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$847</div>
              <div className="text-sm text-muted-foreground">
                Average annual savings
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                USDC-backed funds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
