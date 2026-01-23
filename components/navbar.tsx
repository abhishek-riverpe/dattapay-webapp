"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { RegionSwitcher } from "./region-switcher";
import { useRegion } from "@/lib/region-context";
import { DEFAULT_CONTENT } from "@/lib/regional-content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { regionData } = useRegion();

  const nav = regionData?.nav ?? DEFAULT_CONTENT.nav;

  const navLinks = [
    { name: nav.features, href: "/#features" },
    { name: nav.howItWorks, href: "/#how-it-works" },
    { name: nav.pricing, href: "/#pricing" },
    { name: nav.blogs, href: "/blogs" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-10 w-10">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/60 to-primary/20 opacity-75 blur-sm transition-all group-hover:opacity-100 group-hover:blur-md" />
            <Image
              src={SITE.logo}
              alt={`${SITE.name} - Official Logo (Light Mode)`}
              width={40}
              height={40}
              className="relative h-10 w-10 rounded-xl object-cover shadow-lg ring-1 ring-white/20 transition-transform group-hover:scale-105 dark:hidden"
              priority
            />
            <Image
              src={SITE.logoDark}
              alt={`${SITE.name} - Official Logo (Dark Mode)`}
              width={40}
              height={40}
              className="relative h-10 w-10 rounded-xl object-cover shadow-lg ring-1 ring-white/20 transition-transform group-hover:scale-105 hidden dark:block"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{SITE.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <RegionSwitcher />
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="/contact">{nav.getStarted}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:bg-accent focus-visible:text-foreground focus-visible:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between px-3">
                <span className="text-sm font-medium text-muted-foreground">Region</span>
                <RegionSwitcher />
              </div>
              <Button asChild size="lg" className="w-full rounded-full">
                <Link href="/contact">{nav.getStarted}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
