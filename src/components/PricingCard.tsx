import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  excludedFeatures?: string[];
  cta: string;
  ctaHref?: string;
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export default function PricingCard({ plan, className = "" }: PricingCardProps) {
  const p = plan.popular;

  return (
    <div
      className={`rounded-[24px] p-7 relative transition-all ${
        p
          ? "bg-[#004ac6] dark:bg-blue-500 text-white md:scale-[1.05] md:z-10 border-2 border-white/20 shadow-2xl shadow-[#004ac6]/20 dark:shadow-blue-500/20"
          : "bg-white dark:bg-[#181f33] border border-[#e1e2ed] dark:border-white/[0.08] hover:border-[#c3c6d7] dark:hover:border-white/15"
      } ${className}`}
    >
      {p && (
        <span className="inline-block bg-white/15 text-white text-[10px] font-mono px-3 py-1 rounded-full mb-4 tracking-wider font-medium">
          MOST POPULAR
        </span>
      )}

      <h3 className={`font-heading text-lg font-bold mb-1 ${p ? "text-white" : "text-[#191b23] dark:text-white"}`}>
        {plan.name}
      </h3>

      {plan.description && (
        <p className={`text-sm mb-6 ${p ? "text-white/70" : "text-[#434655] dark:text-white"}`}>
          {plan.description}
        </p>
      )}

      <div className={`font-heading text-[44px] font-bold mb-6 leading-none ${p ? "text-white" : "text-[#191b23] dark:text-white"}`}>
        {plan.price}
        {plan.period && (
          <span className={`text-lg font-normal ${p ? "text-white/60" : "text-[#434655] dark:text-white"}`}>
            {plan.period}
          </span>
        )}
      </div>

      <Link
        href={plan.ctaHref ?? "/register"}
        className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-all mb-6 font-heading ${
          p
            ? "border border-white/30 text-white hover:bg-white/10"
            : "border border-[#c3c6d7] dark:border-white/15 text-[#191b23] dark:text-white hover:bg-[#f3f3fe] dark:hover:bg-white/5"
        }`}
      >
        {plan.cta}
      </Link>

      <ul className="space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-center gap-2.5 text-sm ${p ? "text-white" : "text-[#434655] dark:text-white"}`}>
            <MaterialIcon name="check_circle" className={`text-[18px] ${p ? "text-white" : "text-[#007e37] dark:text-emerald-400"}`} />
            {f}
          </li>
        ))}
        {plan.excludedFeatures?.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[#434655]/50 dark:text-white/50">
            <MaterialIcon name="cancel" className="text-[18px] text-[#ba1a1a]/50" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
