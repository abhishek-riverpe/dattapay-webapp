import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DattaPay vs Payoneer - Compare Fees & Features",
  description:
    "Compare DattaPay vs Payoneer for freelancer payments. DattaPay offers 0.5% fees vs Payoneer's 2-3%. Save up to $847/year. See the full comparison.",
  keywords: [
    "payoneer alternative",
    "payoneer vs dattapay",
    "payoneer fees",
    "cheaper than payoneer",
    "payoneer alternative Africa",
    "freelancer payment comparison",
  ],
  openGraph: {
    title: "DattaPay vs Payoneer - Compare Fees & Features",
    description:
      "Compare DattaPay vs Payoneer. DattaPay offers 0.5% fees vs Payoneer's 2-3%. Save up to $847/year on freelancer payments.",
    url: "https://dattapay.com/compare/payoneer",
  },
  twitter: {
    title: "DattaPay vs Payoneer - Compare Fees & Features",
    description:
      "Compare DattaPay vs Payoneer. Save up to $847/year with 0.5% fees.",
  },
  alternates: {
    canonical: "https://dattapay.com/compare/payoneer",
  },
};

const comparisonData = [
  {
    feature: "Transaction Fee",
    dattapay: "0.5% flat",
    payoneer: "2-3%",
    winner: "dattapay",
  },
  {
    feature: "Monthly Fee",
    dattapay: "$0",
    payoneer: "$0",
    winner: "tie",
  },
  {
    feature: "Currency Conversion",
    dattapay: "No hidden markup",
    payoneer: "2-3.5% markup",
    winner: "dattapay",
  },
  {
    feature: "Withdrawal Fee",
    dattapay: "$0",
    payoneer: "$1.50-3.00",
    winner: "dattapay",
  },
  {
    feature: "Earn Interest on Balance",
    dattapay: "4.2% APY",
    payoneer: "No",
    winner: "dattapay",
  },
  {
    feature: "Inflation Protection",
    dattapay: "USDC stablecoin",
    payoneer: "No",
    winner: "dattapay",
  },
  {
    feature: "Africa/LATAM Focus",
    dattapay: "Yes - optimized",
    payoneer: "Limited support",
    winner: "dattapay",
  },
  {
    feature: "US Bank Account",
    dattapay: "Yes",
    payoneer: "Yes",
    winner: "tie",
  },
];

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "DattaPay vs Payoneer Comparison",
  description:
    "Compare DattaPay vs Payoneer for freelancer payments. See fees, features, and savings.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: comparisonData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.feature,
      description: `DattaPay: ${item.dattapay}, Payoneer: ${item.payoneer}`,
    })),
  },
};

export default function PayoneerComparison() {
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
              DattaPay vs Payoneer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              See how much you could save by switching from Payoneer to DattaPay
            </p>
          </div>

          {/* Savings Calculator */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-12 text-white text-center">
            <p className="text-lg opacity-90 mb-2">
              On $10,000 annual freelance income, you save
            </p>
            <p className="text-5xl font-bold mb-2">$847/year</p>
            <p className="text-sm opacity-80">
              Based on average Payoneer fees of 3% vs DattaPay&apos;s 0.5%
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
                Payoneer
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
                    row.winner === "payoneer"
                      ? "text-green-600 dark:text-green-400 font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {row.winner === "dattapay" && row.payoneer !== "No" && (
                    <X className="w-4 h-4 flex-shrink-0 text-red-500" />
                  )}
                  {row.payoneer}
                </div>
              </div>
            ))}
          </div>

          {/* Key Differences */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">
                Why Choose DattaPay
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Save 80%+ on fees</strong> - 0.5% vs Payoneer&apos;s
                    2-3%
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Earn 4.2% APY</strong> on your idle funds
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Inflation protection</strong> with USDC stablecoin
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>No hidden currency conversion</strong> markup
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Built for Africa & LATAM</strong> freelancers
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                Payoneer Limitations
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    High fees eat into your earnings (2-3%+)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Hidden currency conversion markup (2-3.5%)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No yield on idle funds - your money sits doing nothing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No protection against local currency inflation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Not optimized for emerging market freelancers
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-900 dark:bg-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to save $847/year?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join 5,000+ freelancers who switched from Payoneer to DattaPay
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
