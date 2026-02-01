"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { useRegion } from "@/lib/region-context";
import { DEFAULT_CONTENT } from "@/lib/regional-content";

const socialIcons = { Linkedin, Instagram, Twitter } as const;

const resourceLinks = [
  { name: "Blogs", href: "/blogs" },
  { name: "Learn", href: "/learn" },
  { name: "Compare", href: "/compare" },
];

const platformLinks = [
  { name: "Upwork", href: "/upwork" },
  { name: "Fiverr", href: "/fiverr" },
  { name: "Deel", href: "/deel" },
];

const comparisonLinks = [
  { name: "vs Payoneer", href: "/compare/payoneer" },
  { name: "vs Wise", href: "/compare/wise" },
  { name: "vs Grey", href: "/compare/grey" },
];

export default function Footer() {
  const { regionData } = useRegion();
  const footer = regionData?.footer ?? DEFAULT_CONTENT.footer;

  const legalLinks = [
    { name: footer.privacy, href: "/privacy" },
    { name: footer.contactUs, href: "/contact" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="group flex items-center gap-2.5 mb-4">
              <Image
                src={SITE.logo}
                alt={`${SITE.name} Logo`}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              International payments for freelancers with 0.5% fees and 4.2% APY.
            </p>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Platforms</h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Compare</h3>
            <ul className="space-y-2">
              {comparisonLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center sm:text-left">
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
        </div>
      </div>
    </footer>
  );
}
