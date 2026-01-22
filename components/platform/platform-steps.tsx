import { UserPlus, CreditCard, Wallet, TrendingUp } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

interface PlatformStepsProps {
  platformName: string;
  steps: Step[];
}

const icons = [UserPlus, CreditCard, Wallet, TrendingUp];

export default function PlatformSteps({
  platformName,
  steps,
}: PlatformStepsProps) {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
            How to Get Paid from {platformName} with DattaPay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Set up in minutes, save money on every payment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = icons[index] || icons[0];
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-border/50 bg-card p-6"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mt-4 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
