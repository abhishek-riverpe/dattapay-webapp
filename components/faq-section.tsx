"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is this different from just using PayPal or Payoneer?",
    answer:
      "PayPal and Payoneer charge 3-5% on every transaction plus annual fees. DattaPay charges just 0.5% flat — no annual fees, no hidden charges. Plus, your earnings are stored as USDC (digital dollars) that earn 3-4% APY while they sit. In many countries you get better exchange rates when you withdraw.",
  },
  {
    question: "Do I need to know anything about crypto?",
    answer:
      "No. DattaPay handles everything automatically. Your payments come in as dollars and you can withdraw to your local bank account — no crypto knowledge required. We use stablecoins (digital dollars) behind the scenes to get you better rates and earn yield, but you never have to touch them directly.",
  },
  {
    question: "Is DattaPay safe and compliant?",
    answer:
      "DattaPay is a registered Money Service Business (MSB) with FinCEN, the US financial regulator. We use bank-grade security and your funds are stored in regulated, audited stablecoins backed 1:1 by real US dollars. Thousands of freelancers from 50+ countries trust us with their payments.",
  },
  {
    question: "How do I earn yield on my USDC?",
    answer:
      "You don't have to do anything. If you hold USDC on DattaPay, you automatically earn 3-4% APY. We invest pooled funds in US Treasury Bills and pass the yield to you daily. There's no lockup — withdraw anytime with no penalty.",
  },
  {
    question: "Which countries does DattaPay support?",
    answer:
      "DattaPay supports freelancers in 50+ countries including Nigeria, Kenya, Ghana, South Africa, Brazil, Mexico, Argentina, Bangladesh, and more. We're focused on serving regions with high inflation or limited banking access.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "Transfer your USDC to your personal wallet or sell on your preferred exchange. In some emerging markets, freelancers who sell USDC on P2P exchanges can get rates above the mid-market rate. Or simply hold and earn 3-4% APY backed by US Treasury Bills.",
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
