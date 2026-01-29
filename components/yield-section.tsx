"use client";

import { TrendingUp, DollarSign, Clock, Unlock } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "3-4%", label: "Annual yield" },
  { icon: DollarSign, value: "$0", label: "Minimum to earn" },
  { icon: Clock, value: "Daily", label: "Interest accrual" },
  { icon: Unlock, value: "Anytime", label: "Withdraw with no penalty" },
];

export default function YieldSection() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Your money should work as hard as you do.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Most freelancers leave their earnings sitting idle — losing value to
            inflation. With DattaPay, your USDC earns 3-4% APY automatically,
            backed by US Treasury Bills.
          </p>
        </div>

        {/* Explanation */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="text-muted-foreground leading-relaxed">
            We pool the stablecoins held on our platform and invest in
            short-term US government debt — the safest yield-bearing asset in
            the world. You get the returns. No staking. No lockups. No action
            required.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
