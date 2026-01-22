import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface PlatformHeroProps {
  platformName: string;
  platformColor: string;
  headline: string;
  subheadline: string;
  benefits: string[];
  savings: string;
}

export default function PlatformHero({
  platformName,
  platformColor,
  headline,
  subheadline,
  benefits,
  savings,
}: PlatformHeroProps) {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{platformName}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Platform Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${platformColor}20`, color: platformColor }}
            >
              <span>For {platformName} Freelancers</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              {subheadline}
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative">
            <div className="rounded-3xl border border-border/50 bg-card p-8 sm:p-10 shadow-xl">
              <div className="text-center mb-8">
                <div className="text-sm text-muted-foreground mb-2">
                  Average Annual Savings
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-primary">
                  {savings}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  vs {platformName}&apos;s default payment methods
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-primary/5 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">0.5%</div>
                  <div className="text-xs text-muted-foreground">
                    DattaPay Fee
                  </div>
                </div>
                <div className="rounded-xl bg-primary/5 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">4.2%</div>
                  <div className="text-xs text-muted-foreground">APY Yield</div>
                </div>
                <div className="rounded-xl bg-primary/5 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">$0</div>
                  <div className="text-xs text-muted-foreground">
                    Monthly Fee
                  </div>
                </div>
                <div className="rounded-xl bg-primary/5 p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">5 min</div>
                  <div className="text-xs text-muted-foreground">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
