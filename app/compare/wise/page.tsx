import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DattaPay vs Wise (TransferWise) - Compare Fees & Features",
  description:
    "Compare DattaPay vs Wise for freelancer payments in Africa & LATAM. DattaPay offers 0.5% fees + 4.2% APY. See the full feature comparison.",
  keywords: [
    "wise alternative",
    "wise alternative Africa",
    "transferwise alternative",
    "wise vs dattapay",
    "wise fees Africa",
    "cheaper than wise",
    "freelancer payment comparison",
  ],
  openGraph: {
    title: "DattaPay vs Wise (TransferWise) - Compare Fees & Features",
    description:
      "Compare DattaPay vs Wise for Africa & LATAM freelancers. DattaPay offers 0.5% fees + 4.2% APY on your balance.",
    url: "https://dattapay.com/compare/wise",
  },
  twitter: {
    title: "DattaPay vs Wise - Compare Fees & Features",
    description:
      "Compare DattaPay vs Wise. Get 0.5% fees + 4.2% APY for freelancers in Africa & LATAM.",
  },
  alternates: {
    canonical: "https://dattapay.com/compare/wise",
  },
};

const comparisonData = [
  {
    feature: "Transaction Fee",
    dattapay: "0.5% flat",
    wise: "0.5-2% (varies)",
    winner: "dattapay",
  },
  {
    feature: "Monthly Fee",
    dattapay: "$0",
    wise: "$0",
    winner: "tie",
  },
  {
    feature: "Currency Conversion",
    dattapay: "No markup",
    wise: "0.5-1.5% markup",
    winner: "dattapay",
  },
  {
    feature: "Earn Interest on Balance",
    dattapay: "4.2% APY",
    wise: "2-4% (limited countries)",
    winner: "dattapay",
  },
  {
    feature: "Inflation Protection",
    dattapay: "USDC stablecoin",
    wise: "No",
    winner: "dattapay",
  },
  {
    feature: "Africa Support",
    dattapay: "Full - optimized",
    wise: "Limited countries",
    winner: "dattapay",
  },
  {
    feature: "LATAM Support",
    dattapay: "Full - optimized",
    wise: "Limited features",
    winner: "dattapay",
  },
  {
    feature: "US Bank Account",
    dattapay: "Yes",
    wise: "Yes",
    winner: "tie",
  },
  {
    feature: "Nigerian Naira Support",
    dattapay: "Yes",
    wise: "Suspended",
    winner: "dattapay",
  },
];

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "DattaPay vs Wise Comparison",
  description:
    "Compare DattaPay vs Wise for freelancer payments in Africa & LATAM.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: comparisonData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.feature,
      description: `DattaPay: ${item.dattapay}, Wise: ${item.wise}`,
    })),
  },
};

export default function WiseComparison() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              DattaPay vs Wise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The better alternative to Wise for freelancers in Africa & Latin
              America
            </p>
          </div>

          {/* Key Benefit */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 mb-12 text-white text-center">
            <p className="text-lg opacity-90 mb-2">Unlike Wise, DattaPay gives you</p>
            <p className="text-4xl font-bold mb-2">
              4.2% APY + Full Africa Support
            </p>
            <p className="text-sm opacity-80">
              Earn yield on every dollar while getting full regional support
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-3 bg-gray-50 dark:bg-gray-700 font-semibold">
              <div className="p-4 text-gray-900 dark:text-white">Feature</div>
              <div className="p-4 text-center text-green-600 dark:text-green-400">
                DattaPay
              </div>
              <div className="p-4 text-center text-gray-600 dark:text-gray-400">
                Wise
              </div>
            </div>
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="p-4 text-gray-900 dark:text-white font-medium">
                  {row.feature}
                </div>
                <div
                  className={`p-4 text-center flex items-center justify-center gap-2 ${
                    row.winner === "dattapay"
                      ? "text-green-600 dark:text-green-400 font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {row.winner === "dattapay" && (
                    <Check className="w-4 h-4 flex-shrink-0" />
                  )}
                  {row.dattapay}
                </div>
                <div
                  className={`p-4 text-center flex items-center justify-center gap-2 ${
                    row.winner === "wise"
                      ? "text-green-600 dark:text-green-400 font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {row.winner === "dattapay" &&
                    row.wise !== "No" &&
                    row.wise !== "Limited" && (
                      <X className="w-4 h-4 flex-shrink-0 text-red-500" />
                    )}
                  {row.wise}
                </div>
              </div>
            ))}
          </div>

          {/* Key Differences */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">
                Why Choose DattaPay Over Wise
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Full Africa support</strong> - Nigeria, Kenya, Ghana
                    & more
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>4.2% APY guaranteed</strong> - not limited by country
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>USDC stablecoin protection</strong> against inflation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Consistent 0.5% fee</strong> - no variable rates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Built specifically</strong> for emerging market
                    freelancers
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                Wise Limitations for Africa/LATAM
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Nigerian Naira transfers suspended
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Interest feature not available in most African countries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Variable fees make costs unpredictable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Limited support for local withdrawal methods
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No inflation protection for your earnings
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Case */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Perfect For Freelancers Who:
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  Work with US/EU clients on Upwork, Fiverr, or direct contracts
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  Live in countries with high inflation (Nigeria, Argentina, etc.)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  Want to earn yield on their idle balance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  Need reliable USD access in underserved regions
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get full Africa & LATAM support
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join 5,000+ freelancers who chose DattaPay for reliable USD
              payments
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
