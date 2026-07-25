"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Wallet", href: "/wallet" },
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-white dark:bg-[#0a0c14] border-t border-[#c3c6d7] dark:border-white/[0.06] rounded-t-xl transition-colors">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5 md:px-10 py-8 max-w-[1280px] mx-auto">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={150} height={36} />
            {/* <span className="text-2xl font-bold text-[#004ac6] dark:text-blue-400 font-[family-name:var(--font-heading)]">
              myStamp
            </span> */}
          </div>
          <p className="text-[#434655] dark:text-white text-xs mb-6">
            Empowering local businesses with enterprise-grade loyalty tech. x
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#e1e2ed] dark:bg-white/[0.06] flex items-center justify-center hover:text-[#004ac6] dark:hover:text-blue-400 transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: 20 }}>public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#e1e2ed] dark:bg-white/[0.06] flex items-center justify-center hover:text-[#004ac6] dark:hover:text-blue-400 transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: 20 }}>alternate_email</span>
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-4">
            <div className="text-[#004ac6] dark:text-blue-400 font-bold mb-4">{category}</div>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[#434655] dark:text-white hover:text-[#004ac6] dark:hover:text-blue-400 underline transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="px-5 md:px-10 py-8 border-t border-[#c3c6d7]/30 dark:border-white/[0.04] max-w-[1280px] mx-auto text-center md:text-left">
        <span className="text-[#434655] dark:text-white text-xs font-[family-name:var(--font-mono)]">
          &copy; {new Date().getFullYear()} myStamp Inc. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
