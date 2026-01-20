"use client";

import { useEffect, useRef, useState, memo } from "react";
import { Star } from "lucide-react";
import SimpleMarquee from "../common/simple-marquee";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  platform: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "DattaPay saved me over $800 this year. The instant settlements are a game-changer.",
    name: "Sarah Chen",
    role: "UX Designer",
    platform: "Upwork",
    initials: "SC",
  },
  {
    quote:
      "Finally, a payment solution that doesn't eat into my margins. The 4.2% APY is a bonus!",
    name: "Marcus Johnson",
    role: "Full-Stack Developer",
    platform: "Toptal",
    initials: "MJ",
  },
  {
    quote:
      "I get paid in USD, convert to EUR instantly, and earn yield. It's exactly what I needed.",
    name: "Elena Rodriguez",
    role: "Content Strategist",
    platform: "Fiverr",
    initials: "ER",
  },
  {
    quote:
      "Switched from PayPal and never looked back. The fees are unbeatable.",
    name: "David Park",
    role: "Mobile Developer",
    platform: "Freelancer",
    initials: "DP",
  },
  {
    quote:
      "The yield feature alone pays for my subscriptions. Smart money management.",
    name: "Aisha Patel",
    role: "Product Designer",
    platform: "Deel",
    initials: "AP",
  },
  {
    quote:
      "Getting paid from US clients is now seamless. No more bank transfer delays.",
    name: "Thomas Weber",
    role: "Data Analyst",
    platform: "Upwork",
    initials: "TW",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = memo(({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="w-80 shrink-0 rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg cursor-default">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400 dark:fill-amber-300 dark:text-amber-300"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground font-medium leading-relaxed mb-6 text-sm">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role} · {testimonial.platform}
          </p>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";

interface MarqueeRowProps {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  speed?: number;
}

const MarqueeRow = memo(
  ({ testimonials, direction = "left", speed = 3 }: MarqueeRowProps) => {
    return (
      <div className="py-2">
        <SimpleMarquee
          direction={direction}
          baseVelocity={speed}
          slowdownOnHover={true}
          slowDownFactor={0.15}
          repeat={4}
          draggable={false}
          className="overflow-hidden"
        >
          <div className="flex gap-5 mr-5" style={{ pointerEvents: "auto" }}>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </SimpleMarquee>
      </div>
    );
  }
);

MarqueeRow.displayName = "MarqueeRow";

const Testimonials = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const row1Testimonials = testimonials.slice(0, 3);
  const row2Testimonials = testimonials.slice(3, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            What freelancers are saying
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join 5,000+ freelancers who trust DattaPay
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Rows */}
        <div className="space-y-4">
          <MarqueeRow
            testimonials={row1Testimonials}
            direction="left"
            speed={2}
          />
          <MarqueeRow
            testimonials={row2Testimonials}
            direction="right"
            speed={1.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
