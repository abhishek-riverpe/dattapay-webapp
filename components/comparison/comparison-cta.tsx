import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";

interface ComparisonCTAProps {
  competitorName: string;
  savings: string;
}

export default function ComparisonCTA({
  competitorName,
  savings,
}: ComparisonCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 sm:p-12 lg:p-16 text-center">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Ready to save {savings}/year?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers who switched from {competitorName} to
            DattaPay. Start receiving payments with 0.5% flat fees and earn 4.2%
            APY on your balance.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-primary" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>4.2% APY on idle funds</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button asChild size="lg" className="rounded-full px-10 text-lg">
            <Link href="/contact">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* Trust text */}
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Free to join.
          </p>
        </div>
      </div>
    </section>
  );
}
