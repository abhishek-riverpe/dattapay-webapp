"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I receive USD payments as a freelancer in Africa?",
    answer:
      "Sign up for DattaPay to get a US bank account. Share your account details with clients, and receive payments in USD with only 0.5% fees. No complex paperwork required.",
  },
  {
    question: "How does DattaPay protect my earnings from inflation?",
    answer:
      "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to US dollars. This protects you from local currency devaluation. You also earn 4.2% APY on idle funds.",
  },
  {
    question: "What are DattaPay's fees compared to Payoneer or Wise?",
    answer:
      "DattaPay charges just 0.5% flat fee vs Payoneer's 2-3% + currency conversion fees. No monthly fees, no withdrawal fees. You could save up to $847/year on a typical $10,000 annual income.",
  },
  {
    question: "Which countries does DattaPay support?",
    answer:
      "DattaPay supports freelancers in 50+ countries including Nigeria, Kenya, Ghana, South Africa, Brazil, Mexico, Argentina, and more. We're focused on serving regions with high inflation or limited banking access.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "You can withdraw to your local bank account at competitive exchange rates, or keep your funds in USDC to earn 4.2% APY. We support multiple withdrawal methods including bank transfer and mobile money.",
  },
  {
    question: "Is DattaPay safe and compliant?",
    answer:
      "Yes. DattaPay uses bank-grade security with 256-bit encryption. We're fully compliant with US financial regulations and partner with licensed financial institutions. Your funds are protected.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Everything you need to know about receiving USD payments with DattaPay
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
