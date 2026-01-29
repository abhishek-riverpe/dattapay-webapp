import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatWidget } from "@/components/chat-widget";
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
    default: "DattaPay: Payoneer Alternative for Freelancers | 0.5% Fees",
    template: "%s | DattaPay",
  },
  description:
    "Get a US bank account in 2 minutes. Pay just 0.5% — not Payoneer's 3-5%. Earn 3-4% APY on idle funds backed by US Treasury Bills. Join 10,000+ freelancers keeping more of what they earn.",
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
    // Yield & inflation protection
    "protect freelance income inflation",
    "inflation hedge freelancers",
    "USDC yield APY",
    "Treasury Bills yield freelancer",
    "stablecoin inflation hedge",
    "earn yield on freelance income",
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
    title: "DattaPay: Payoneer Alternative for Freelancers | 0.5% Fees + 3-4% APY",
    description:
      "Get a US bank account in 2 minutes. Pay 0.5% instead of 3-5%. Earn 3-4% APY on idle funds. Join 10,000+ freelancers.",
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
    title: "DattaPay: Payoneer Alternative for Freelancers | 0.5% Fees + 3-4% APY",
    description:
      "Get a US bank account in 2 minutes. Pay 0.5% instead of 3-5%. Earn 3-4% APY backed by US Treasury Bills.",
    images: ["/og-image.png"],
    site: "@dattapay",
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
    languages: {
      "en-US": siteUrl,
      "en-NG": `${siteUrl}/ng`,
      "pt-BR": `${siteUrl}/br`,
      "es-AR": `${siteUrl}/ar`,
      "en-BD": `${siteUrl}/bn`,
    },
  },
  icons: {
    icon: "/logos/logo.PNG?v=2",
    shortcut: "/logos/logo.PNG?v=2",
    apple: "/logos/logo.PNG?v=2",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const regionCode = headersList.get("x-detected-region");
  
  // Determine language based on region code
  let lang = "en";
  let currentSiteUrl = siteUrl;
  
  if (regionCode === "BR") {
    lang = "pt-BR";
    currentSiteUrl = `${siteUrl}/br`;
  } else if (regionCode === "AR") {
    lang = "es-AR";
    currentSiteUrl = `${siteUrl}/ar`;
  } else if (regionCode === "BD") {
    lang = "en-BD";
    currentSiteUrl = `${siteUrl}/bn`;
  } else if (regionCode === "NG") {
    lang = "en-NG";
    currentSiteUrl = `${siteUrl}/ng`;
  }

  const dynamicJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "DattaPay",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logos/logo.PNG?v=2`,
          "width": 512,
          "height": 512
        },
        "description": "International payment platform for freelancers with 0.5% fees and 3-4% APY yield backed by US Treasury Bills.",
        "email": "support@dattapay.com",
        "foundingDate": "2024",
        "sameAs": [
          "https://twitter.com/dattapay",
          "https://linkedin.com/company/dattapay",
          "https://instagram.com/dattapay.global"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "DattaPay",
        "description": "Get a US bank account in 2 minutes. Pay 0.5% instead of 3-5%. Earn 3-4% APY on idle funds.",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${currentSiteUrl}/#webpage`,
        "url": currentSiteUrl,
        "name": "DattaPay - International Payments for Freelancers",
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#organization`
        },
        "description": "Get a US bank account in 2 minutes. Pay 0.5% instead of 3-5%. Earn 3-4% APY backed by US Treasury Bills.",
        "inLanguage": lang
      }
    ]
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicJsonLd) }}
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
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
