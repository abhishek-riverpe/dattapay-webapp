"use client";

import { LogoLoop } from "./LogoLoop";

const platforms = [
  { src: "/logos/upwork.png", alt: "Upwork freelance marketplace logo" },
  { src: "/logos/fiverr.png", alt: "Fiverr freelance services platform logo" },
  { src: "/logos/deel.png", alt: "Deel global payroll and compliance logo" },
  { src: "/logos/toptal.png", alt: "Toptal elite freelancer network logo" },
  { src: "/logos/freelancer.png", alt: "Freelancer.com marketplace logo" },
];

export default function PlatformLogos() {
  return (
    <section className="py-12 border-y border-border/40 bg-secondary/20">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Trusted by global teams at
        </p>
      </div>
      <LogoLoop
        logos={platforms}
        logoHeight={28}
        gap={48}
        speed={50}
        pauseOnHover
        className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 dark:invert"
        ariaLabel="Freelancer platforms that use DattaPay"
      />
    </section>
  );
}
