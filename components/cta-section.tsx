import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          Ready to get paid like a local?
        </h2>

        {/* Subheadline */}
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Join 5,000+ freelancers saving on fees and earning yield on their
          hard-earned money.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link href="/contact">
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Note */}
        <p className="mt-4 text-sm text-muted-foreground">
          No credit card required. Tailored for non-US residents.
        </p>
      </div>
    </section>
  );
}
