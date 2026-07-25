interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ badge, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      {badge && (
        <span className="inline-block font-mono text-[12px] tracking-[0.05em] uppercase text-[#004ac6] dark:text-blue-400 bg-[#dbe1ff] dark:bg-blue-500/15 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold text-[#191b23] dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[18px] leading-[28px] text-[#434655] dark:text-white max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
