import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RegionalCTAProps {
  country: string;
  flag: string;
  headline: string;
  subheadline: string;
  ctaText?: string;
}

export default function RegionalCTA({
  country,
  flag,
  headline,
  subheadline,
  ctaText = "Get Started Free",
}: RegionalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 sm:p-12 lg:p-16 text-center">
          {/* Flag */}
          <div className="text-5xl mb-6">{flag}</div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            {headline}
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subheadline}
          </p>

          {/* CTA Button */}
          <Button asChild size="lg" className="rounded-full px-10 text-lg">
            <Link href="/contact">
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Trust text */}
          <p className="mt-6 text-sm text-muted-foreground">
            Join thousands of {country} freelancers already using DattaPay
          </p>
        </div>
      </div>
    </section>
  );
}
