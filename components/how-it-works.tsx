"use client";

import { FileText, Banknote, Wallet } from "lucide-react";
import { useRegion } from "@/lib/region-context";
import { DEFAULT_CONTENT } from "@/lib/regional-content";

export default function HowItWorks() {
  const { regionData } = useRegion();
  const content = regionData?.howItWorks ?? DEFAULT_CONTENT.howItWorks;

  const steps = [
    {
      number: 1,
      title: content.steps.step1.title,
      description: content.steps.step1.description,
      icon: FileText,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      numberStyle: "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400",
    },
    {
      number: 2,
      title: content.steps.step2.title,
      description: content.steps.step2.description,
      icon: Banknote,
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      numberStyle: "border-green-600 text-green-600 dark:border-green-400 dark:text-green-400",
    },
    {
      number: 3,
      title: content.steps.step3.title,
      description: content.steps.step3.description,
      icon: Wallet,
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      numberStyle:
        "border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pt-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center"
              >
                {/* Card */}
                <div className="relative w-full rounded-2xl border border-border/50 bg-card p-6 pt-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Step Number - Overlapping */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-card font-bold text-lg ${step.numberStyle}`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${step.iconBg}`}
                  >
                    <step.icon className={`h-7 w-7 ${step.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
