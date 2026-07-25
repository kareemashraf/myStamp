import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "blue" | "surface";
  className?: string;
}

export default function CTABanner({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "blue",
  className = "",
}: CTABannerProps) {
  if (variant === "surface") {
    return (
      <section className={`text-center py-20 space-y-8 ${className}`}>
        <h2 className="font-heading text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#191b23] dark:text-white">
          {title}
        </h2>
        <p className="text-[18px] leading-[28px] text-[#434655] dark:text-white max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="w-full sm:w-auto bg-[#004ac6] dark:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-[#004ac6]/20 dark:hover:shadow-blue-500/20 active:scale-95 transition-all text-center"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="w-full sm:w-auto bg-[#e7e7f3] dark:bg-white/5 text-[#191b23] dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#e1e2ed] dark:hover:bg-white/10 transition-all text-center"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`px-5 py-20 ${className}`}>
      <div className="max-w-[1280px] mx-auto rounded-[2rem] bg-gradient-to-br from-[#004ac6] via-[#2563eb] to-[#7c3aed] p-8 md:p-12 lg:p-24 text-center text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10">
          <h2 className="font-heading text-[28px] sm:text-[40px] md:text-[48px] leading-[1.15] tracking-[-0.02em] font-bold mb-8">
            {title}
          </h2>
          <p className="text-[18px] leading-[28px] mb-12 max-w-2xl mx-auto opacity-90">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryHref}
              className="bg-white text-[#004ac6] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-transform"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
