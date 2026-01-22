import { Check, X } from "lucide-react";

interface FeeRow {
  label: string;
  platform: string;
  dattapay: string;
  isBetter: boolean;
}

interface PlatformFeeComparisonProps {
  platformName: string;
  fees: FeeRow[];
  annualSavings: string;
}

export default function PlatformFeeComparison({
  platformName,
  fees,
  annualSavings,
}: PlatformFeeComparisonProps) {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            {platformName} Default vs DattaPay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much you can save by switching to DattaPay for your{" "}
            {platformName} payments.
          </p>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-4 px-6 font-semibold text-foreground bg-muted/50">
                  Fee Type
                </th>
                <th className="text-center py-4 px-6 font-semibold text-muted-foreground bg-muted/50">
                  {platformName} Default
                </th>
                <th className="text-center py-4 px-6 font-semibold text-primary bg-primary/10">
                  With DattaPay
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, index) => (
                <tr
                  key={index}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="py-4 px-6 text-sm text-foreground">
                    {fee.label}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-red-500 font-medium">
                        {fee.platform}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      {fee.isBetter && (
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      )}
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {fee.dattapay}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/10">
                <td className="py-4 px-6 font-semibold text-foreground">
                  Annual Savings
                </td>
                <td className="py-4 px-6 text-center text-muted-foreground">
                  -
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="text-xl font-bold text-primary">
                    {annualSavings}
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
