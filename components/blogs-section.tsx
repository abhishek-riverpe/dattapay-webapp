"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  ALL_CONTENT,
  ContentItem,
  typeConfig,
  getFeaturedContent,
} from "@/lib/content-registry";

function BlogCard({ item }: { item: ContentItem }) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <Link
      href={item.href}
      className="group w-[calc(50%-12px)] min-w-[300px] flex-shrink-0 snap-start rounded-2xl border border-border/50 bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
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
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.colorClass}`}
          >
            {config.label}
          </span>
          {item.readTime && (
            <span className="text-xs text-muted-foreground">
              {item.readTime} read
            </span>
          )}
          {item.flag && <span className="text-base">{item.flag}</span>}
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

export default function BlogsSection() {
  const displayItems = getFeaturedContent(8);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.clientWidth / 2;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Resources & Guides
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Learn how to get paid smarter as a freelancer
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-foreground disabled:hover:border-border"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-foreground disabled:hover:border-border"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Left Scroll Button (Mobile) */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/95 shadow-lg backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide scroll-smooth"
          >
            {displayItems.map((item) => (
              <BlogCard key={item.slug} item={item} />
            ))}

            {/* "More" CTA Card */}
            <Link
              href="/blogs"
              className="group w-[calc(50%-12px)] min-w-[300px] flex-shrink-0 snap-start rounded-2xl border-2 border-dashed border-border/50 bg-card/50 overflow-hidden transition-all hover:border-primary/50 flex flex-col items-center justify-center p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <ArrowRight className="h-8 w-8 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                View All Resources
              </span>
              <span className="text-sm text-muted-foreground mt-1">
                {ALL_CONTENT.length}+ articles
              </span>
            </Link>
          </div>

          {/* Right Scroll Button (Mobile) */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/95 shadow-lg backdrop-blur transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-0 disabled:pointer-events-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
