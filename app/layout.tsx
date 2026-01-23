import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { RegionProvider } from "@/lib/region-context";
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
    default: "DattaPay - International Payments for Freelancers",
    template: "%s | DattaPay",
  },
  description:
    "Get paid in USD/EUR with just 0.5% flat fee. Earn 4.2% APY on idle funds. Bank-grade security & compliance. Join 5,000+ freelancers saving $847/year on fees.",
  keywords: [
    // Core value propositions
    "USD payments for freelancers",
    "low fee international payments",
    "0.5% flat fee payments",
    "earn yield on freelance income",
    "4.2% APY freelancer savings",
    // Regional targeting - Africa
    "receive dollars Africa",
    "dollar account Nigerian freelancer",
    "USD payments Nigeria",
    "receive USD Kenya M-Pesa",
    "stablecoin payments Africa",
    // Regional targeting - LATAM
    "freelancer em dólar",
    "receber dólar como freelancer",
    "cobrar en dólares Argentina",
    "recibir dólares México freelancer",
    // Inflation protection
    "protect freelance income inflation",
    "inflation hedge freelancers",
    "USDC yield",
    "stablecoin inflation hedge",
    "currency protection",
    // Competitor alternatives
    "Payoneer alternative low fees",
    "Wise alternative Nigeria",
    "PayPal alternative Africa",
    "Grey alternative freelancer",
    // Platform integrations
    "Upwork payments Africa low fees",
    "Fiverr withdrawal Africa",
    "Deel payment alternative",
    // General
    "freelancer payment platform",
    "cross-border payments low fees",
    "remote work payments",
    "stablecoin payments freelancers",
  ],
  authors: [{ name: "DattaPay" }],
  creator: "DattaPay",
  publisher: "Negentropy LLC",
  openGraph: {
    title: "DattaPay - International Payments for Freelancers",
    description:
      "Get paid in USD/EUR with 0.5% flat fee. Earn 4.2% APY on idle funds. Bank-grade security. Join 5,000+ freelancers.",
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
    title: "DattaPay - International Payments for Freelancers",
    description:
      "Get paid in USD/EUR with 0.5% flat fee. Earn 4.2% APY on idle funds. Join 5,000+ freelancers.",
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
        "https://instagram.com/dattapay.global",
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
      name: "DattaPay - International Payments for Freelancers",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Get paid in USD/EUR with 0.5% flat fee. Earn 4.2% APY on idle funds. Bank-grade security.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#application`,
      name: "DattaPay",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Receive USD payments with 0.5% fees. Earn 4.2% APY on idle funds. Protect earnings from inflation with stablecoin backing.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free to join, 0.5% flat fee per transaction",
      },
      featureList: [
        "0.5% flat transaction fee",
        "4.2% APY on idle funds",
        "USDC stablecoin backing",
        "US bank account details",
        "Multi-currency support",
        "Bank-grade security",
      ],
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I receive USD payments as a freelancer in Africa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sign up for DattaPay to get a US bank account with routing and account numbers. Share your account details with clients on Upwork, Fiverr, or any platform. Receive payments in USD with only 0.5% fees. Your funds automatically earn 4.2% APY while idle.",
          },
        },
        {
          "@type": "Question",
          name: "How does DattaPay protect my earnings from inflation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to US dollars regardless of local currency fluctuations. You also earn 4.2% APY on idle funds, helping you outpace inflation in countries like Nigeria, Argentina, and Brazil.",
          },
        },
        {
          "@type": "Question",
          name: "What are DattaPay's fees compared to Payoneer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DattaPay charges a flat 0.5% fee with no hidden costs. Payoneer charges 2-3% receiving fee plus 2-4% currency conversion, plus a $29.95 annual fee. On average, freelancers save $847/year by switching to DattaPay.",
          },
        },
        {
          "@type": "Question",
          name: "Is DattaPay available in Nigeria?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, DattaPay is fully available in Nigeria. Unlike PayPal (send-only until 2026) and Wise (USD suspended since November 2022), DattaPay fully supports Nigerian freelancers with USD accounts and local withdrawals.",
          },
        },
        {
          "@type": "Question",
          name: "How is DattaPay different from Grey or Raenest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DattaPay offers the lowest fees at 0.5% flat, compared to Grey and Raenest's higher rates. Plus, DattaPay pays 4.2% APY yield on idle funds and uses USDC stablecoin backing for inflation protection - features not offered by competitors.",
          },
        },
        {
          "@type": "Question",
          name: "Can I receive payments from Upwork, Fiverr, and Deel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, DattaPay works with all major freelance platforms including Upwork, Fiverr, Deel, Toptal, and Freelancer.com. Simply add your DattaPay US bank details as a payment method on any platform.",
          },
        },
        {
          "@type": "Question",
          name: "What is the 4.2% APY yield and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your idle funds in DattaPay automatically earn 4.2% Annual Percentage Yield. This means if you keep $10,000 in your account for a year, you'd earn approximately $420 in passive income. Interest accrues daily and compounds automatically.",
          },
        },
        {
          "@type": "Question",
          name: "How long do withdrawals take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Withdrawals to local bank accounts typically complete within 1-2 business days. Crypto withdrawals (USDC) are instant. There are no withdrawal fees - you only pay the 0.5% flat fee when receiving funds.",
          },
        },
      ],
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get region code from middleware headers
  const headersList = await headers();
  const regionCode = headersList.get("x-detected-region");

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
          <RegionProvider regionCode={regionCode}>
            {children}
          </RegionProvider>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
