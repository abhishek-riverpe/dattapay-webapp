import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ArticleCTAProps {
  title?: string;
  description?: string;
}

export default function ArticleCTA({
  title = "Ready to protect your earnings?",
  description = "Join thousands of freelancers using DattaPay. 0.5% fees, 4.2% APY, and USDC stablecoin protection.",
}: ArticleCTAProps) {
  return (
    <section className="py-12 sm:py-16 bg-primary/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            {description}
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/contact">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
