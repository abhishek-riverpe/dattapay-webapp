"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { useRegion } from "@/lib/region-context";
import { DEFAULT_CONTENT } from "@/lib/regional-content";

const socialIcons = { Linkedin, Instagram, Twitter } as const;

export default function Footer() {
  const { regionData } = useRegion();
  const footer = regionData?.footer ?? DEFAULT_CONTENT.footer;

  const footerLinks = [
    { name: footer.privacy, href: "/privacy" },
    { name: footer.contactUs, href: "/contact" },
  ];

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative h-9 w-9">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-primary/50 to-primary/10 opacity-60 blur-sm transition-opacity group-hover:opacity-80" />
              <Image
                src={SITE.logo}
                alt={`${SITE.name} - Payment platform for freelancers and creators`}
                width={36}
                height={36}
                className="relative h-9 w-9 rounded-lg object-cover shadow-md ring-1 ring-white/20 transition-transform group-hover:scale-105 dark:hidden"
              />
              <Image
                src={SITE.logoDark}
                alt={`${SITE.name} - Payment platform for freelancers and creators`}
                width={36}
                height={36}
                className="relative h-9 w-9 rounded-lg object-cover shadow-md ring-1 ring-white/20 transition-transform group-hover:scale-105 hidden dark:block"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {SITE.year} {SITE.company}. {footer.rights}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.icon as keyof typeof socialIcons];
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link.name}`}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
