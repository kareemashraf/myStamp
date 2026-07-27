"use client";

import { useState } from "react";

interface FormFieldProps {
  id: string;
  name?: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: string;
  required?: boolean;
  rightElement?: React.ReactNode;
  className?: string;
}

export default function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon,
  required = false,
  rightElement,
  className = "",
}: FormFieldProps) {
  const [showPw, setShowPw] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPw ? "text" : type;

  return (
    <div className={`space-y-1 ${className}`}>
      <label
        className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-on-surface-variant dark:text-white uppercase"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
            style={{ fontSize: 20 }}
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          name={name ?? id}
          type={inputType}
          placeholder={placeholder}
          required={required}
          className={`w-full h-[44px] ${icon ? "pl-11" : "pl-4"} pr-12 bg-surface-container-lowest dark:bg-[#181f33] border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-on-surface dark:text-white placeholder:text-outline/60`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPw(!showPw)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant dark:text-white transition-colors"
          >
            <span className="material-symbols-outlined">
              {showPw ? "visibility_off" : "visibility"}
            </span>
          </button>
        )}
        {rightElement && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}
