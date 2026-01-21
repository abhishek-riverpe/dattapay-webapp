import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://dattapay.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DattaPay | Get Paid in USD - 0.5% Fees | Freelancer Payments",
    template: "%s | DattaPay",
  },
  description:
    "Receive USD payments with just 0.5% fees. Earn 4.2% APY on idle funds. Protect your earnings from inflation. Trusted by 5,000+ freelancers in Africa & LATAM.",
  keywords: [
    "USD payments for freelancers",
    "receive dollars Africa",
    "freelancer payment platform",
    "low fee international payments",
    "stablecoin payments",
    "USDC yield",
    "inflation hedge freelancers",
    "remote work payments",
    "Upwork payments Africa",
    "dollar account freelancer",
    "currency protection",
    "cross-border payments low fees",
    "USD account Nigeria",
    "dollar account Kenya",
    "payoneer alternative low fees",
    "wise alternative Africa",
    "protect earnings from inflation",
    "hedge against currency devaluation",
  ],
  authors: [{ name: "DattaPay" }],
  creator: "DattaPay",
  publisher: "Negentropy LLC",
  openGraph: {
    title: "DattaPay | Get Paid in USD - 0.5% Fees | Freelancer Payments",
    description:
      "Receive USD payments with just 0.5% fees. Earn 4.2% APY on idle funds. Protect your earnings from inflation. Trusted by freelancers in Africa & LATAM.",
    url: siteUrl,
    siteName: "DattaPay",
    type: "website",
    locale: "en_US",
    // TODO: Create og-image.png (1200x630px) and save to /public/og-image.png
    // This image appears when sharing on social media (Twitter, LinkedIn, Facebook)
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaPay - International Payments for Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DattaPay | Get Paid in USD - 0.5% Fees | Freelancer Payments",
    description:
      "Receive USD payments with 0.5% fees. Earn 4.2% APY. Protect earnings from inflation. Trusted by 5,000+ freelancers.",
    images: ["/og-image.png"],
    creator: "@dattapay",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/logos/logo.PNG?v=2",
    shortcut: "/logos/logo.PNG?v=2",
    apple: "/logos/logo.PNG?v=2",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DattaPay",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logos/logo.PNG?v=2`,
        width: 512,
        height: 512,
      },
      description:
        "International payment platform for freelancers with 0.5% fees and 4.2% APY yield.",
      email: "support@dattapay.com",
      foundingDate: "2024",
      sameAs: [
        "https://twitter.com/dattapay",
        "https://linkedin.com/company/dattapay",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DattaPay",
      description:
        "Get paid in USD/EUR with 0.5% flat fee. Earn 4.2% APY on idle funds.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "DattaPay | Get Paid in USD - 0.5% Fees | Freelancer Payments",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Receive USD payments with 0.5% fees. Earn 4.2% APY. Protect earnings from inflation.",
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#product`,
      name: "DattaPay USD Account",
      description:
        "International payment account for freelancers with 0.5% fees and 4.2% APY. Receive USD payments, protect earnings from inflation, and withdraw to local bank accounts.",
      brand: {
        "@type": "Brand",
        name: "DattaPay",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "0.5% flat fee per transaction. No monthly fees.",
        availability: "https://schema.org/PreOrder",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "5000",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
