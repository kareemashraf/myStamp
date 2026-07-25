"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function check() {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setVisible(y > 300);
    }
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[60] w-12 h-12 rounded-full bg-[#004ac6] dark:bg-blue-500 text-white shadow-lg shadow-[#004ac6]/30 dark:shadow-blue-500/30 flex items-center justify-center transition-opacity duration-300 hover:scale-110 hover:shadow-xl animate-fade-in-up"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
