"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { RegionalContentData, DEFAULT_CONTENT } from "@/lib/regional-content";

interface FAQProps {
  regionData?: RegionalContentData;
}

export default function FAQ({ regionData }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Use regional FAQs if provided, otherwise use default
  const faqs = regionData?.faqs ?? DEFAULT_CONTENT.faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {regionData ? (regionData.language === "pt" ? "Perguntas frequentes" : regionData.language === "es" ? "Preguntas frecuentes" : "Frequently asked questions") : "Frequently asked questions"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {regionData ? (regionData.language === "pt" ? "Tudo o que você precisa saber sobre receber pagamentos com DattaPay." : regionData.language === "es" ? "Todo lo que necesitas saber sobre recibir pagos con DattaPay." : "Everything you need to know about receiving payments with DattaPay.") : "Everything you need to know about receiving payments with DattaPay."}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index: number) => (
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
