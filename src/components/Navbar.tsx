"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Wallet", href: "/wallet" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const { data: session } = useSession();

  return (
    <>
    <nav className="bg-white/80 dark:bg-[#0b1326]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-[#c3c6d7]/50 dark:border-white/[0.06]">
      <div className="flex justify-between items-center w-full px-5 md:px-10 max-w-[1280px] mx-auto h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={150} height={32} priority />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-[#004ac6] dark:text-blue-400 font-semibold border-b-2 border-[#004ac6] dark:border-blue-400"
                    : "text-[#434655] dark:text-white hover:text-[#004ac6] dark:hover:text-blue-400"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={toggle}
            className="p-2.5 rounded-full text-[#434655] dark:text-white hover:bg-[#f3f3fe] dark:hover:bg-white/10 transition-all"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {session ? (
            <>
              <Link
                href="/profile/dashboard"
                className="flex items-center gap-3 px-3 py-1.5 rounded-full hover:bg-[#f3f3fe] dark:hover:bg-white/10 transition-all group"
              >
                {session.user?.image ? (
                  <img
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#004ac6] dark:group-hover:ring-blue-400 transition-all"
                    src={session.user.image}
                    alt={session.user.name || "User"}
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#004ac6]/15 dark:bg-blue-400/20 flex items-center justify-center text-[#004ac6] dark:text-blue-400 font-bold text-xs ring-2 ring-transparent group-hover:ring-[#004ac6] dark:group-hover:ring-blue-400 transition-all">
                    {session.user?.name?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-[#434655] dark:text-white text-sm font-medium group-hover:text-[#004ac6] dark:group-hover:text-blue-400 transition-colors">
                  {session.user?.name || session.user?.email}
                </span>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-[#434655] dark:text-white font-medium hover:text-[#004ac6] dark:hover:text-blue-400 transition-colors duration-200 px-3 cursor-pointer"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[#434655] dark:text-white font-medium hover:text-[#004ac6] dark:hover:text-blue-400 transition-colors duration-200 px-3">
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-[#004ac6] dark:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#003da8] dark:hover:bg-blue-600 active:scale-95 transition-all shadow-md shadow-[#004ac6]/20 dark:shadow-blue-500/20"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="p-2.5 rounded-full text-[#434655] dark:text-white hover:bg-[#f3f3fe] dark:hover:bg-white/10 transition-all"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            className="p-2 text-[#191b23] dark:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>

    {mobileOpen && (
      <div className="md:hidden fixed inset-0 bg-white dark:bg-[#0b1326] z-[100] flex flex-col px-8 py-6 transition-colors">
        <div className="flex justify-between items-center h-20 mb-2">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image src={theme === "dark" ? "/logo-horiz-dark.svg" : "/logo-horiz.svg"} alt="myStamp" width={150} height={32} priority />
          
          </Link>
          <button className="p-2 text-[#191b23] dark:text-white" onClick={() => setMobileOpen(false)}>
            <X className="w-7 h-7" />
          </button>
        </div>
        <div className="flex flex-col gap-1 flex-1 pt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block text-[32px] leading-[44px] font-bold tracking-[-0.01em] transition-colors py-2 ${
                  isActive ? "text-[#004ac6] dark:text-blue-400" : "text-[#191b23] dark:text-white hover:text-[#004ac6] dark:hover:text-blue-400"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="pt-6 border-t border-[#c3c6d7] dark:border-white/10 flex flex-col gap-3 pb-10">
          {session ? (
            <>
              <Link
                href="/profile/dashboard"
                className="flex items-center justify-center gap-3 py-3 text-center group"
                onClick={() => setMobileOpen(false)}
              >
                {session.user?.image ? (
                  <img
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-[#004ac6] dark:group-hover:ring-blue-400 transition-all"
                    src={session.user.image}
                    alt={session.user.name || "User"}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#004ac6]/15 dark:bg-blue-400/20 flex items-center justify-center text-[#004ac6] dark:text-blue-400 font-bold text-sm ring-2 ring-transparent group-hover:ring-[#004ac6] dark:group-hover:ring-blue-400 transition-all">
                    {session.user?.name?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-[20px] leading-[28px] font-semibold text-[#434655] dark:text-white group-hover:text-[#004ac6] dark:group-hover:text-blue-400 transition-colors">
                  {session.user?.name || session.user?.email}
                </span>
              </Link>
              <button
                onClick={() => { setMobileOpen(false); signOut({ callbackUrl: "/" }); }}
                className="bg-[#004ac6] dark:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-[18px] text-center hover:bg-[#003da8] dark:hover:bg-blue-600 active:scale-95 transition-all cursor-pointer"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[20px] leading-[28px] font-semibold text-[#434655] dark:text-white py-3 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-[#004ac6] dark:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-[18px] text-center hover:bg-[#003da8] dark:hover:bg-blue-600 active:scale-95 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    )}
    </>
  );
}
