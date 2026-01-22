import { Check, Shield, TrendingUp, Wallet, Zap } from "lucide-react";

interface Solution {
  icon: "yield" | "security" | "speed" | "wallet";
  title: string;
  description: string;
  benefits: string[];
}

interface RegionalSolutionsProps {
  country: string;
  solutions: Solution[];
}

const iconMap = {
  yield: TrendingUp,
  security: Shield,
  speed: Zap,
  wallet: Wallet,
};

const colorMap = {
  yield: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
  },
  security: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
  },
  speed: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  wallet: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
  },
};

export default function RegionalSolutions({
  country,
  solutions,
}: RegionalSolutionsProps) {
  return (
    <section id="features" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            How DattaPay Helps {country} Freelancers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built solutions for the challenges you face every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            const colors = colorMap[solution.icon];
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} mb-6`}
                >
                  <Icon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
