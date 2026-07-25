"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  title?: string;
  items: FaqItem[];
  className?: string;
}

export default function FAQAccordion({ title = "Frequently Asked Questions", items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={className}>
      {title && (
        <h2 className="font-heading text-[28px] leading-[36px] font-bold text-[#191b23] dark:text-white text-center mb-8">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((faq, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#14161f] border border-[#e1e2ed] dark:border-white/[0.08] rounded-2xl overflow-hidden transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-heading text-[15px] font-bold text-[#191b23] dark:text-white pr-4">
                {faq.q}
              </span>
              <span
                className={`material-symbols-outlined text-[20px] text-[#434655] dark:text-white transition-transform duration-300 shrink-0 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-[16px] leading-[24px] text-[#434655] dark:text-white">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
