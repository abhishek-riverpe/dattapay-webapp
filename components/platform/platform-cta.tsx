import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PlatformCTAProps {
  platformName: string;
  savings: string;
}

export default function PlatformCTA({
  platformName,
  savings,
}: PlatformCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 sm:p-12 lg:p-16 text-center">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Start Saving {savings}/Year on {platformName}
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of {platformName} freelancers who switched to DattaPay.
            Set up in 5 minutes, start saving immediately.
          </p>

          {/* Steps */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                1
              </span>
              <span className="text-sm text-foreground">Sign up free</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                2
              </span>
              <span className="text-sm text-foreground">Get bank details</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                3
              </span>
              <span className="text-sm text-foreground">
                Add to {platformName}
              </span>
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
