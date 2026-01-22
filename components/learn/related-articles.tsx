import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
  title: string;
  description: string;
  href: string;
  category: string;
}

interface RelatedArticlesProps {
  currentSlug: string;
  articles?: Article[];
}

const allArticles: Article[] = [
  {
    title: "What is USDC?",
    description:
      "Learn about USDC stablecoin and how it protects your freelance earnings.",
    href: "/learn/usdc",
    category: "Stablecoins",
  },
  {
    title: "Stablecoin vs Local Currency",
    description:
      "Why freelancers in emerging markets choose stablecoins over local currencies.",
    href: "/learn/stablecoin-guide",
    category: "Guide",
  },
  {
    title: "Inflation Protection for Freelancers",
    description:
      "How to protect your freelance income from inflation and currency devaluation.",
    href: "/learn/inflation-hedge",
    category: "Strategy",
  },
];

export default function RelatedArticles({
  currentSlug,
  articles,
}: RelatedArticlesProps) {
  const displayArticles = (articles || allArticles).filter(
    (article) => !article.href.includes(currentSlug)
  );

  if (displayArticles.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-secondary/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
          Related Articles
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {displayArticles.slice(0, 2).map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="text-xs font-medium text-primary mb-2">
                {article.category}
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {article.description}
              </p>
              <div className="flex items-center text-sm font-medium text-primary">
                Read more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
