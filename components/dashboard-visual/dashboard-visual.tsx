import { CreditCard, Shield, TrendingUp, Wallet, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { BalanceCard } from "./balance-card";
import { YieldChart } from "./yield-chart";

export default function DashboardVisual() {
  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-0 mb-40">
      <div className="rounded-lg sm:rounded-xl border border-border bg-background shadow-xl overflow-hidden">
        {/* Browser Bar */}
        <div className="h-8 sm:h-10 border-b bg-gray-50/50 dark:bg-gray-800/50 flex items-center px-3 sm:px-4 gap-2">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-200" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-200" />
          </div>
          <div className="ml-2 sm:ml-4 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground bg-background px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border shadow-sm overflow-hidden">
            <Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0" />
            <span className="truncate">dattapay.com/dashboard</span>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 md:p-8 grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 bg-background">
          {/* Left Column: Balance & Actions */}
          <div className="md:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Overview</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Welcome back
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-8 text-xs w-full sm:w-auto"
              >
                <CreditCard className="mr-2 h-3 w-3" /> Manage Cards
              </Button>
            </div>

            <BalanceCard />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors">
                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">Yield</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                  +$423.15
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  +12% vs last month
                </div>
              </div>
              <div className="p-3 sm:p-4 rounded-xl border bg-card/50 hover:bg-card transition-colors">
                <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                  <Wallet className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">
                    Next Payout
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold">Tomorrow</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Est. $1,250.00
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Yield */}
          <div className="md:col-span-1 space-y-4 sm:space-y-6">
            <YieldChart />

            <div className="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-3">
                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-background shadow-sm flex items-center justify-center text-primary border shrink-0">
                  <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-xs sm:text-sm">
                    Auto-Staking
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    4.2% APY Active
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Principal</span>
                  <span className="font-medium">$12,500.00</span>
                </div>
                <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-black/5">
                  <div className="bg-primary h-full rounded-full w-[85%]" />
                </div>
                <div className="flex justify-between text-xs pt-1">
                  <span className="text-muted-foreground">Projected (1y)</span>
                  <span className="font-bold text-primary">+$525.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
