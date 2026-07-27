interface SocialButton {
  label: string;
  icon?: string;
  svg?: React.ReactNode;
}

interface SocialLoginButtonsProps {
  buttons: SocialButton[];
  className?: string;
}

export default function SocialLoginButtons({ buttons, className = "" }: SocialLoginButtonsProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      {buttons.map((btn) => (
        <button
          key={btn.label}
          className="flex items-center justify-center gap-2 h-[44px] border border-outline-variant rounded-lg bg-surface-container-lowest dark:bg-[#181f33] hover:bg-surface-container-low dark:hover:bg-[#22293e] transition-colors"
        >
          {btn.svg ? (
            btn.svg
          ) : btn.icon ? (
            <span className="material-symbols-outlined text-[20px]">{btn.icon}</span>
          ) : null}
          <span className="text-[16px] leading-[24px] text-sm dark:text-white">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}
