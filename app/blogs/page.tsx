import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import {
  ALL_CONTENT,
  ContentItem,
  ContentType,
  typeConfig,
  getContentByType,
} from "@/lib/content-registry";

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  title: "Blogs - Freelancer Payment Guides & Resources",
  description:
    "Explore platform comparisons, payment guides, regional resources, and educational content for international freelancers.",
  keywords: [
    "freelancer payment guides",
    "payment platform comparison",
    "freelancer resources",
    "international payments guide",
    "stablecoin education",
  ],
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  openGraph: {
    title: "DattaPay Blogs - Freelancer Resources",
    description:
      "Guides, comparisons, and resources for international freelancers.",
    url: `${siteUrl}/blogs`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/blogs`,
  url: `${siteUrl}/blogs`,
  name: "DattaPay Blogs - Freelancer Resources",
  description:
    "Guides, comparisons, and resources for international freelancers.",
  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: ALL_CONTENT.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}${item.href}`,
      name: item.title,
    })),
  },
};

function ContentCard({ item }: { item: ContentItem }) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <Link
      href={item.href}
      className="group rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="p-6 bg-primary/5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.colorClass}`}
          >
            {config.label}
          </span>
          {item.flag && <span className="text-base">{item.flag}</span>}
          {item.readTime && (
            <span className="text-xs text-muted-foreground">
              {item.readTime}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center text-sm font-medium text-primary">
          Read more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function ContentSection({
  type,
  items,
}: {
  type: ContentType;
  items: ContentItem[];
}) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${config.colorClass}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {type === "comparison"
            ? "Comparisons"
            : type === "platform"
              ? "Platform Guides"
              : type === "learning"
                ? "Learning Resources"
                : "Regional Guides"}
        </h2>
        <span className="text-sm text-muted-foreground">({items.length})</span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ContentCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function BlogsPage() {
  const comparisons = getContentByType("comparison");
  const platforms = getContentByType("platform");
  const learning = getContentByType("learning");
  const regions = getContentByType("regional");

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
              <span>Resources & Guides</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Everything You Need to Know About Freelancer Payments
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground">
              Explore comparisons, platform guides, educational content, and
              regional resources to optimize your international freelancing.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {comparisons.length > 0 && (
            <ContentSection type="comparison" items={comparisons} />
          )}
          {platforms.length > 0 && (
            <ContentSection type="platform" items={platforms} />
          )}
          {learning.length > 0 && (
            <ContentSection type="learning" items={learning} />
          )}
          {regions.length > 0 && (
            <ContentSection type="regional" items={regions} />
          )}
        </div>
      </section>
    </>
  );
}
