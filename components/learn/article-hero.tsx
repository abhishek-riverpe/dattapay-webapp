import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface ArticleHeroProps {
  category: string;
  title: string;
  description: string;
  readTime: string;
  lastUpdated: string;
}

export default function ArticleHero({
  category,
  title,
  description,
  readTime,
  lastUpdated,
}: ArticleHeroProps) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/learn"
                className="hover:text-foreground transition-colors"
              >
                Learn
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{category}</li>
          </ol>
        </nav>

        {/* Category Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {category}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime} read</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Updated {lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
