import { Globe, Zap, TrendingUp } from "lucide-react";
import ComparisonCard from "./comparison-card";
import FeatureCard from "./feature-card";

const features = [
  {
    icon: Globe,
    title: "Global Accounts",
    description:
      "Get US & EU local banking details for seamless international payments without borders.",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description:
      "Mid-market exchange rates with instant conversion. No waiting, no hidden markups.",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Automated Yield",
    description:
      "Earn 4.2% APY automatically on idle funds with instant withdrawal anytime.",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
];

export default function KeepMore() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Keep more of what you earn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional payment processors take up to 5% of your hard-earned money.
            DattaPay charges a flat 0.5% — saving you thousands every year.
          </p>
        </div>

        {/* Comparison Cards */}
        <div
          id="pricing"
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          <ComparisonCard type="traditional" />
          <ComparisonCard type="dattapay" />
        </div>

        {/* Features Section */}
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
            Built for the modern freelancer
          </h3>
          <p className="mt-2 text-muted-foreground">
            Everything you need to get paid globally and grow your wealth
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBg={feature.iconBg}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
