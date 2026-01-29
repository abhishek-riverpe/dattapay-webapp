import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, TrendingUp, ShieldCheck } from "lucide-react";
import { RegionalContentData, DEFAULT_CONTENT } from "@/lib/regional-content";

const focusPoints = [
  { icon: TrendingDown, label: "Save 3-5% vs Payoneer/PayPal" },
  { icon: TrendingUp, label: "Earn 3-4% APY on Idle Funds" },
  { icon: ShieldCheck, label: "US Government Licensed (FinCEN MSB)" },
];

interface HeroProps {
  regionData?: RegionalContentData;
}

export default function Hero({ regionData }: HeroProps) {
  // Use regional content if provided, otherwise use default
  const content = regionData?.hero ?? DEFAULT_CONTENT.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Info Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            {regionData ? (
              <>
                {regionData.flag} {content.badge}
              </>
            ) : (
              content.badge
            )}
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-snug sm:text-5xl lg:text-6xl">
            {regionData ? (
              content.headline
            ) : (
              <>
                Keep more. Earn more.{" "}
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent whitespace-nowrap">
                  Stress less.
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {content.subheadline}
          </p>

          {/* Focus Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {focusPoints.map((point) => (
              <div
                key={point.label}
                className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background px-4 py-2 text-sm font-medium shadow-sm"
              >
                <point.icon className="h-4 w-4 text-primary" />
                {point.label}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link href="/contact">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust Section */}
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              Powered by industry leaders
            </p>
            <div className="flex items-center gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <Image
                src="/logos/visa.png"
                alt="Visa Official Partner - Global Payment Network"
                width={80}
                height={26}
                className="h-8 w-auto"
                priority
              />
              <Image
                src="/logos/stripe.png"
                alt="Stripe Official Partner - Secure Infrastructure"
                width={80}
                height={33}
                className="h-10 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-100 w-100 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
}
