import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, TrendingUp, ShieldCheck } from "lucide-react";
import { RegionalContentData, DEFAULT_CONTENT } from "@/lib/regional-content";

const focusPoints = [
  { icon: TrendingDown, label: "0.5% fees vs 3-5%" },
  { icon: TrendingUp, label: "3-4% APY" },
  { icon: ShieldCheck, label: "FinCEN Licensed" },
];

interface HeroProps {
  regionData?: RegionalContentData;
}

export default function Hero({ regionData }: HeroProps) {
  const content = regionData?.hero ?? DEFAULT_CONTENT.hero;
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
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
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {regionData ? (
              content.headline
            ) : (
              <>
                Keep more. Earn more.{" "}
                <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Stress less.
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            {content.subheadline}
          </p>

          {/* Focus Points */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {focusPoints.map((point) => (
              <div
                key={point.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-background px-3 py-1.5 text-xs font-medium sm:text-sm"
              >
                <point.icon className="h-3.5 w-3.5 text-primary" />
                {point.label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link href="/contact">
                {content.ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Trust */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Powered by
            </p>
            <div className="flex items-center gap-8 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
              <Image
                src="/logos/visa.png"
                alt="Visa"
                width={80}
                height={26}
                className="h-7 w-auto"
                priority
              />
              <Image
                src="/logos/stripe.png"
                alt="Stripe"
                width={80}
                height={33}
                className="h-8 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>
    </section>
  );
}
