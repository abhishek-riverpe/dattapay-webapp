import { memo } from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const FeatureCard = memo(function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBg,
  iconColor,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-border">
      {/* Icon */}
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
          iconBg
        )}
      >
        <Icon className={cn("h-6 w-6", iconColor)} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
});

export default FeatureCard;
