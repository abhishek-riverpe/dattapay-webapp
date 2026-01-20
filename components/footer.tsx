import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialIcons = { Linkedin, Instagram, Twitter } as const;

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image
                src={SITE.logo}
                alt={SITE.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-border/20 shadow-sm dark:hidden"
              />
              <Image
                src={SITE.logoDark}
                alt={SITE.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover ring-2 ring-border/20 shadow-sm hidden dark:block"
              />
            </div>
            <span className="text-lg font-bold tracking-tight">{SITE.name}</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {SITE.year} {SITE.company}. All rights reserved.
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
            {FOOTER_LINKS.map((link) => (
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
