import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BadgePercent, Building2 } from "lucide-react";

const focusPoints = [
  { icon: BadgePercent, label: "Flat 0.5% Fee" },
  { icon: Shield, label: "Bank-grade Security" },
  { icon: Building2, label: "Registered MSB with FinCEN" },
];

export default function Hero() {
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
            Founded by former Visa employees
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight leading-snug sm:text-5xl lg:text-6xl">
            Empowering freelancers & creators.{" "}
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Receive, grow, spend.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Get paid in USD/EUR with instant settlement. Save up to{" "}
            <span className="font-semibold text-foreground">$847/year</span> in
            fees and earn{" "}
            <span className="font-semibold text-foreground">4.2% APY</span> on
            idle funds.
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
                Get Started Free
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
                alt="Visa"
                width={80}
                height={26}
                className="h-8 w-auto"
              />
              <Image
                src="/logos/stripe.png"
                alt="Stripe"
                width={80}
                height={33}
                className="h-10 w-auto"
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
