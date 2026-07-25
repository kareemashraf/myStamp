"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-on-background dark:text-white flex flex-col">
      {/* Minimal Nav */}
      <nav className="flex items-center justify-between px-6 py-5">
        <Link href="/" className="font-heading text-xl font-bold text-on-surface dark:text-white">myStamp</Link>
        <div className="hidden sm:flex items-center gap-6 text-sm text-on-surface-variant dark:text-white">
          <Link href="/features" className="hover:text-on-surface dark:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-on-surface dark:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-on-surface dark:text-white transition-colors">Solutions</Link>
          <Link href="/contact" className="hover:text-on-surface dark:text-white transition-colors">Resources</Link>
        </div>
        <Link href="/register" className="bg-primary-container text-on-primary px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Get Started
        </Link>
      </nav>

      {/* Floating Coupon Icons */}
      <div className="relative flex-1 flex items-center justify-center px-5">
        {/* Floating icons */}
        <div className="absolute top-20 left-[10%] text-primary-container/20">
          <span className="material-symbols-outlined text-[48px]">confirmation_number</span>
        </div>
        <div className="absolute top-32 right-[15%] text-tertiary-container/20">
          <span className="material-symbols-outlined text-[48px]">sell</span>
        </div>
        <div className="absolute bottom-40 left-[20%] text-primary-container/20">
          <span className="material-symbols-outlined text-[48px]">savings</span>
        </div>
        <div className="absolute bottom-32 right-[10%] text-primary-container/20">
          <span className="material-symbols-outlined text-[48px]">account_balance_wallet</span>
        </div>
        <div className="absolute top-48 left-[5%] text-primary-container/15">
          <span className="material-symbols-outlined text-[36px]">priority_high</span>
        </div>

        <div className="text-center relative z-10">
          <div className="inline-block bg-surface-container dark:bg-[#1a1c25] rounded-full px-4 py-2 mb-6">
            <span className="font-mono text-xs text-on-surface-variant dark:text-white tracking-wider">0 ACTIVE COUPONS FOUND</span>
          </div>
          <h1 className="font-heading text-[100px] sm:text-[140px] font-bold text-on-surface dark:text-white leading-none tracking-tight mb-6">
            404
          </h1>
          <h2 className="font-heading text-2xl font-bold text-on-surface dark:text-white mb-3">Lost in the discount aisle</h2>
          <p className="text-on-surface-variant dark:text-white text-[15px] leading-relaxed max-w-md mx-auto mb-2">
            Oops! We can&apos;t find that page.
          </p>
          <p className="text-on-surface-variant dark:text-white/70 text-sm leading-relaxed max-w-md mx-auto mb-10">
            Even the best deal hunters lose their way sometimes. The page you&apos;re looking for might have expired, been moved, or never existed in this timeline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Link href="/" className="bg-primary-container text-on-primary px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">home</span> Go back Home
            </Link>
            <button onClick={() => typeof window !== "undefined" && window.history.back()} className="border border-outline text-on-surface dark:text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-surface-container dark:hover:bg-[#1a1c25] transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span> Previous Page
            </button>
          </div>
          <p className="text-on-surface-variant dark:text-white text-sm mb-4">Try one of these instead:</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/pricing" className="bg-surface-container-lowest dark:bg-[#14161f] border border-outline-variant/40 text-on-surface dark:text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-container dark:hover:bg-[#1a1c25] transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary-container">local_fire_department</span> Hot Deals
            </Link>
            <Link href="/features" className="bg-surface-container-lowest dark:bg-[#14161f] border border-outline-variant/40 text-on-surface dark:text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-surface-container dark:hover:bg-[#1a1c25] transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary-container">search</span> Search Coupons
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface-container-lowest dark:bg-[#14161f] border-t border-outline-variant/30 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-base font-bold text-on-surface dark:text-white mb-1">myStamp</p>
            <p className="text-on-surface-variant dark:text-white text-sm">Savings made simple, digital, and seamless.</p>
          </div>
          <div className="flex gap-10 text-sm text-on-surface-variant dark:text-white">
            <div>
              <p className="font-medium text-on-surface dark:text-white mb-2">Product</p>
              <ul className="space-y-1.5">
                <li><Link href="/features" className="hover:text-on-surface dark:text-white underline">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-on-surface dark:text-white underline">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-on-surface dark:text-white mb-2">Company</p>
              <ul className="space-y-1.5">
                <li><Link href="/about" className="hover:text-on-surface dark:text-white underline">About</Link></li>
                <li><Link href="/contact" className="hover:text-on-surface dark:text-white underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-on-surface dark:text-white mb-2">Support</p>
              <ul className="space-y-1.5">
                <li><Link href="/privacy" className="hover:text-on-surface dark:text-white underline">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-on-surface dark:text-white underline">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-outline-variant/30 text-center text-sm text-on-surface-variant dark:text-white">
          &copy; {new Date().getFullYear()} myStamp Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
