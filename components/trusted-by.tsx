import { Star } from "lucide-react";

const testimonials = [
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

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="w-87.5 shrink-0 rounded-xl border border-border/50 bg-card p-6">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 dark:fill-amber-300 dark:text-amber-300" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground font-medium leading-relaxed mb-6">
        "{testimonial.quote}"
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
}

export default function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
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
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex gap-6 animate-marquee hover:paused">
          {/* First set */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={`${testimonial.name}-duplicate`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
