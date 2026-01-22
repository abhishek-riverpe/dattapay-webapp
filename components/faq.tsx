"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I receive USD payments as a freelancer in Africa?",
    answer:
      "Sign up for DattaPay to get a US bank account with routing and account numbers. Share your account details with clients on Upwork, Fiverr, or any platform. Receive payments in USD with only 0.5% fees. Your funds automatically earn 4.2% APY while idle.",
  },
  {
    question: "How does DattaPay protect my earnings from inflation?",
    answer:
      "DattaPay converts your payments to USDC stablecoin, keeping your earnings pegged to US dollars regardless of local currency fluctuations. You also earn 4.2% APY on idle funds, helping you outpace inflation in countries like Nigeria, Argentina, and Brazil.",
  },
  {
    question: "What are DattaPay's fees compared to Payoneer?",
    answer:
      "DattaPay charges a flat 0.5% fee with no hidden costs. Payoneer charges 2-3% receiving fee plus 2-4% currency conversion, plus a $29.95 annual fee. On average, freelancers save $847/year by switching to DattaPay.",
  },
  {
    question: "Is DattaPay available in Nigeria?",
    answer:
      "Yes, DattaPay is fully available in Nigeria. Unlike PayPal (send-only until 2026) and Wise (USD suspended since November 2022), DattaPay fully supports Nigerian freelancers with USD accounts and local withdrawals.",
  },
  {
    question: "How is DattaPay different from Grey or Raenest?",
    answer:
      "DattaPay offers the lowest fees at 0.5% flat, compared to Grey and Raenest's higher rates. Plus, DattaPay pays 4.2% APY yield on idle funds and uses USDC stablecoin backing for inflation protection - features not offered by competitors.",
  },
  {
    question: "Can I receive payments from Upwork, Fiverr, and Deel?",
    answer:
      "Yes, DattaPay works with all major freelance platforms including Upwork, Fiverr, Deel, Toptal, and Freelancer.com. Simply add your DattaPay US bank details as a payment method on any platform.",
  },
  {
    question: "What is the 4.2% APY yield and how does it work?",
    answer:
      "Your idle funds in DattaPay automatically earn 4.2% Annual Percentage Yield. This means if you keep $10,000 in your account for a year, you'd earn approximately $420 in passive income. Interest accrues daily and compounds automatically.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Withdrawals to local bank accounts typically complete within 1-2 business days. Crypto withdrawals (USDC) are instant. There are no withdrawal fees - you only pay the 0.5% flat fee when receiving funds.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about receiving payments with DattaPay.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/50 bg-card overflow-hidden transition-all duration-300 hover:border-border"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
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
