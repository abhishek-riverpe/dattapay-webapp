import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Shield, TrendingUp, Coins } from "lucide-react";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "Learn - Freelancer Payment Education Hub",
  description:
    "Learn about stablecoins, USDC, inflation protection, and international payments. Educational guides for freelancers in Africa, LATAM, and emerging markets.",
  keywords: [
    "what is USDC",
    "stablecoin guide",
    "inflation protection freelancers",
    "freelancer finance education",
    "cryptocurrency for freelancers",
    "protect earnings inflation",
    "stablecoin vs local currency",
    "USDC vs USDT",
    "freelancer financial literacy",
  ],
  alternates: {
    canonical: `${siteUrl}/learn`,
  },
  openGraph: {
    title: "Learn - DattaPay Education Hub",
    description:
      "Educational guides about stablecoins, inflation protection, and international payments for freelancers.",
    url: `${siteUrl}/learn`,
    type: "website",
  },
};

const articles = [
  {
    title: "What is USDC? A Guide for Freelancers",
    description:
      "Learn what USDC stablecoin is, how it works, and why freelancers use it to protect their earnings from currency volatility.",
    href: "/learn/usdc",
    category: "Stablecoins",
    icon: Coins,
    readTime: "8 min",
    featured: true,
  },
  {
    title: "Stablecoin vs Local Currency: Which is Better?",
    description:
      "Compare keeping your freelance earnings in stablecoins vs local currencies like Naira, Real, or Peso. Learn the pros and cons.",
    href: "/learn/stablecoin-guide",
    category: "Guide",
    icon: BookOpen,
    readTime: "10 min",
    featured: true,
  },
  {
    title: "How to Protect Your Freelance Income from Inflation",
    description:
      "Practical strategies for freelancers in high-inflation countries to preserve the value of their earnings.",
    href: "/learn/inflation-hedge",
    category: "Strategy",
    icon: Shield,
    readTime: "7 min",
    featured: true,
  },
];

const topics = [
  {
    name: "Stablecoins",
    description: "Understanding digital dollars",
    count: 2,
  },
  {
    name: "Inflation Protection",
    description: "Preserve your earning power",
    count: 1,
  },
  {
    name: "International Payments",
    description: "Get paid globally",
    count: 3,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/learn`,
  url: `${siteUrl}/learn`,
  name: "DattaPay Learn - Freelancer Payment Education",
  description:
    "Educational guides about stablecoins, inflation protection, and international payments for freelancers.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${article.href}`,
      name: article.title,
    })),
  },
};

export default function LearnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Education Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Learn About Freelancer Payments
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground">
              Educational guides to help you understand stablecoins, protect
              your earnings from inflation, and optimize your international
              payments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Featured Guides
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles
              .filter((a) => a.featured)
              .map((article) => {
                const Icon = article.icon;
                return (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Icon Header */}
                    <div className="p-6 bg-primary/5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-medium text-primary">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime} read
                        </span>
                      </div>

                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {article.description}
                      </p>

                      <div className="flex items-center text-sm font-medium text-primary">
                        Read guide
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 sm:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
              Browse by Topic
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore guides organized by subject.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.name}
                className="rounded-2xl border border-border/50 bg-card p-6 text-center"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {topic.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {topic.description}
                </p>
                <span className="text-xs text-primary font-medium">
                  {topic.count} {topic.count === 1 ? "article" : "articles"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
                Why Financial Literacy Matters for Freelancers
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                As a freelancer earning internationally, understanding how money
                works across borders can save you thousands of dollars and
                protect your hard-earned income from currency volatility.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Learn how stablecoins can protect your earnings from 30%+
                    inflation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Understand the difference between USDC, USDT, and local
                    currencies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Coins className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Discover strategies to maximize your freelance income
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">$22B</div>
                <p className="text-muted-foreground mb-6">
                  Stablecoin transactions in Nigeria (2023-2024)
                </p>
                <p className="text-sm text-muted-foreground">
                  Freelancers in emerging markets are already using stablecoins
                  to protect their earnings. Learn how you can too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
