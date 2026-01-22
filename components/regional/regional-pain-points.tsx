import { AlertTriangle, TrendingDown, Ban, DollarSign } from "lucide-react";

interface PainPoint {
  icon: "inflation" | "fees" | "restricted" | "devaluation";
  title: string;
  description: string;
  stat?: string;
}

interface RegionalPainPointsProps {
  country: string;
  painPoints: PainPoint[];
}

const iconMap = {
  inflation: TrendingDown,
  fees: DollarSign,
  restricted: Ban,
  devaluation: AlertTriangle,
};

export default function RegionalPainPoints({
  country,
  painPoints,
}: RegionalPainPointsProps) {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            Challenges Freelancers Face in {country}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the real problems DattaPay solves for {country} freelancers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/50 bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30 mb-4">
                  <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                {point.stat && (
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">
                    {point.stat}
                  </div>
                )}
                <h3 className="font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
