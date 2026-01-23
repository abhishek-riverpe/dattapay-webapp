"use client";

import { memo } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRegion } from "@/lib/region-context";
import { DEFAULT_CONTENT } from "@/lib/regional-content";

interface FeeRow {
  label: string;
  traditional: string;
  dattapay: string;
  isHighlight?: boolean;
}

interface ComparisonCardProps {
  type: "traditional" | "dattapay";
}

const ComparisonCard = memo(function ComparisonCard({ type }: ComparisonCardProps) {
  const isRecommended = type === "dattapay";
  const { regionData } = useRegion();
  
  const comp = regionData?.keepMore.comparison ?? DEFAULT_CONTENT.keepMore.comparison;

  const feeData: FeeRow[] = [
    { label: comp.labels.receiveInternational, traditional: "3-5%", dattapay: "0.5%" },
    { label: comp.labels.currencyConversion, traditional: "2-4%", dattapay: "0%" },
    { label: comp.labels.monthlyFee, traditional: "$0-30", dattapay: comp.free },
    { label: comp.labels.withdrawalFee, traditional: "$1-5", dattapay: comp.free },
    {
      label: comp.labels.annualSavings,
      traditional: "-",
      dattapay: "~$847",
      isHighlight: true,
    },
  ];

  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 sm:p-8 transition-all duration-300",
        isRecommended
          ? "border-primary/50 bg-linear-to-b from-primary/5 to-transparent shadow-lg shadow-primary/10"
          : "border-border bg-card hover:shadow-md"
      )}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-semibold uppercase px-3 py-1 rounded-full">
          {comp.recommended}
        </div>
      )}

      {/* Card Header */}
      <div className="mb-6">
        <h3
          className={cn(
            "text-lg font-semibold",
            isRecommended ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {isRecommended ? "DattaPay" : comp.othersTitle}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {isRecommended
            ? comp.dattapaySubtitle
            : comp.othersSubtitle}
        </p>
      </div>

      {/* Fee Rows */}
      <div className="space-y-4">
        {feeData.map((row) => (
          <div
            key={row.label}
            className={cn(
              "flex items-center justify-between py-3 border-b border-border/50 last:border-0",
              row.isHighlight && "pt-4 mt-2 border-t-2 border-dashed"
            )}
          >
            <span className="text-sm text-muted-foreground">{row.label}</span>
            <div className="flex items-center gap-2">
              {isRecommended ? (
                <>
                  {row.dattapay === comp.free || row.dattapay === "0%" ? (
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : null}
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      row.isHighlight
                        ? "text-green-600 dark:text-green-400 text-base"
                        : row.dattapay === comp.free || row.dattapay === "0%"
                        ? "text-green-600 dark:text-green-400"
                        : "text-foreground"
                    )}
                  >
                    {row.dattapay}
                  </span>
                </>
              ) : (
                <>
                  {row.traditional !== "-" && (
                    <X className="h-4 w-4 text-red-500 dark:text-red-400" />
                  )}
                  <span
                    className={cn(
                      "text-sm font-medium",
                      row.traditional === "-"
                        ? "text-muted-foreground"
                        : "text-red-500 dark:text-red-400"
                    )}
                  >
                    {row.traditional}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ComparisonCard;
