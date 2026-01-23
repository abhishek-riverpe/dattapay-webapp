import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RegionalContentData, DEFAULT_CONTENT } from "@/lib/regional-content";

interface CTASectionProps {
  regionData?: RegionalContentData;
}

export default function CTASection({ regionData }: CTASectionProps) {
  // Use regional content if provided, otherwise use default
  const content = regionData?.cta ?? DEFAULT_CONTENT.cta;

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {content.headline}
        </h2>

        {/* Subheadline */}
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {content.subheadline}
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link href="/contact">
              {content.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Note */}
        <p className="mt-4 text-sm text-muted-foreground">
          {content.note}
        </p>
      </div>
    </section>
  );
}
