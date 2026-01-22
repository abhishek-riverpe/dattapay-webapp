import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComparisonFeature {
  feature: string;
  dattapay: string | boolean;
  competitor: string | boolean;
  highlight?: boolean;
}

interface ComparisonTableProps {
  competitorName: string;
  competitorLogo?: string;
  features: ComparisonFeature[];
}

function FeatureValue({
  value,
  isPositive,
}: {
  value: string | boolean;
  isPositive: boolean;
}) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
    ) : (
      <X className="h-5 w-5 text-red-500 dark:text-red-400" />
    );
  }

  if (value === "-" || value === "N/A") {
    return <Minus className="h-5 w-5 text-muted-foreground" />;
  }

  return (
    <span
      className={cn(
        "text-sm font-medium",
        isPositive
          ? "text-green-600 dark:text-green-400"
          : "text-red-500 dark:text-red-400"
      )}
    >
      {value}
    </span>
  );
}

export default function ComparisonTable({
  competitorName,
  features,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-4 sm:px-6 bg-muted/50 rounded-tl-xl font-semibold text-foreground">
              Feature
            </th>
            <th className="text-center py-4 px-4 sm:px-6 bg-primary/10 font-semibold text-primary">
              DattaPay
            </th>
            <th className="text-center py-4 px-4 sm:px-6 bg-muted/50 rounded-tr-xl font-semibold text-muted-foreground">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, index) => (
            <tr
              key={row.feature}
              className={cn(
                "border-b border-border/50 transition-colors hover:bg-muted/30",
                row.highlight && "bg-primary/5"
              )}
            >
              <td
                className={cn(
                  "py-4 px-4 sm:px-6 text-sm text-foreground",
                  row.highlight && "font-semibold"
                )}
              >
                {row.feature}
              </td>
              <td className="py-4 px-4 sm:px-6 text-center bg-primary/5">
                <div className="flex items-center justify-center">
                  <FeatureValue value={row.dattapay} isPositive={true} />
                </div>
              </td>
              <td className="py-4 px-4 sm:px-6 text-center">
                <div className="flex items-center justify-center">
                  <FeatureValue value={row.competitor} isPositive={false} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
