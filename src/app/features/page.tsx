"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaterialIcon from "@/components/MaterialIcon";

export default function FeaturesPage() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = sectionsRef.current?.querySelectorAll("section");
    sections?.forEach((s) => {
      s.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-8");
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className="bg-background text-on-surface dark:text-white min-h-screen font-body">
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-5 md:px-10 py-8 space-y-16 md:space-y-32">
        {/* Hero Section */}
        <header className="text-center space-y-6 pt-16">
          <span className="font-mono text-[12px] tracking-[0.05em] uppercase text-primary bg-primary-fixed px-3 py-1 rounded-full">
            The Complete Platform
          </span>
          <h1 className="font-heading text-[28px] sm:text-[40px] md:text-[48px] leading-[1.15] tracking-[-0.02em] font-bold text-on-surface dark:text-white max-w-4xl mx-auto">
            One platform, every growth tool your business needs.
          </h1>
          <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white max-w-2xl mx-auto">
            From digital stamp cards to enterprise-grade analytics, myStamp centralizes your entire customer retention ecosystem.
          </p>
        </header>

        {/* Digital Loyalty & Coupons (Asymmetric Layout) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-white">
              <MaterialIcon name="loyalty" />
            </div>
            <h2 className="text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-heading">Digital Loyalty &amp; Coupons</h2>
            <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white">
              Replace physical punch cards with an elegant digital experience. Create high-conversion coupons that customers actually want to use, all trackable in real-time.
            </p>
            <ul className="space-y-3">
              {["Infinite customization for stamp logic", "Single-use and recurring coupon codes", "Apple and Google Wallet integration"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant dark:text-white">
                  <MaterialIcon name="check_circle" className="text-primary" filled />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-white/70 dark:bg-[#1a1c25]/70 backdrop-blur-[12px] border border-[#E2E8F0]/80 dark:border-white/[0.08] p-4">
              <img
                className="rounded-2xl w-full object-cover aspect-video"
                src="https://cdn.dribbble.com/userupload/44452345/file/c6b561a767fee04366e3b273ca325276.png?resize=752x&vertical=center"
                alt="Digital loyalty card mockup"
              />
            </div>
          </div>
        </section>

        {/* Rewards & Gift Cards (Bento Style) */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-heading">Value Beyond Transactions</h2>
            <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white max-w-2xl mx-auto">
              Build lasting emotional connections with structured rewards and flexible gift card options.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-7 bg-white/70 dark:bg-[#1a1c25]/70 backdrop-blur-[12px] border border-[#E2E8F0]/80 dark:border-white/[0.08] p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-tertiary-container rounded-lg flex items-center justify-center text-white mb-6">
                  <MaterialIcon name="card_giftcard" />
                </div>
                <h3 className="text-[24px] leading-[32px] font-semibold font-heading mb-4">Branded Gift Cards</h3>
                <p className="text-on-surface-variant dark:text-white mb-8">
                  Launch your own digital gift card store in minutes. Allow customers to send personalized value to friends and family, increasing your brand&apos;s reach organically.
                </p>
              </div>
              <img
                className="rounded-xl w-full h-64 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zG5tEi9ypoH_4joAqBUyMn-K8xb0DGFKus9Xrg7zRa3dbZBSby5xnm1aJ3DlDqx4S2oj6oag64AyLrQfljSicoqsQVmY5EoY24ThDyiW_Umj6DEhkNvov68zOwU6X-NfdDKmxNmc9TrRFVQR0WOk8s6rvP_lNE4DqaBUXcShw--gSbGd77vzcd_3rKeieRIvga_XFa6P2lW0L_q8zVLblXlI5O0jhbIJNoVwR36NFFQgnF25iouh"
                alt="Digital gift cards"
              />
            </div>
            <div className="col-span-12 lg:col-span-5 bg-white/70 dark:bg-[#1a1c25]/70 backdrop-blur-[12px] border border-[#E2E8F0]/80 dark:border-white/[0.08] p-8 rounded-3xl space-y-6">
              <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container mb-2">
                <MaterialIcon name="stars" />
              </div>
              <h3 className="text-[24px] leading-[32px] font-semibold font-heading">Dynamic Rewards</h3>
              <p className="text-on-surface-variant dark:text-white">
                Tiered membership systems that reward your most loyal fans. Automatically upgrade customers as they spend more, unlocking exclusive perks and early access.
              </p>
              <div className="space-y-4 mt-8">
                <div className="h-2 w-full bg-surface-container dark:bg-[#1a1c25] rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 rounded-full"></div>
                </div>
                <div className="flex justify-between font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium">
                  <span>PLATINUM TIER</span>
                  <span>75% to next level</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics & CRM */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="p-8 bg-inverse-surface rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-white font-heading text-[24px] leading-[32px] font-semibold">Revenue Insights</span>
                  <MaterialIcon name="trending_up" className="text-tertiary-fixed" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-md">
                    <p className="text-white/60 font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium">CLV</p>
                    <p className="text-white font-heading text-[24px] leading-[32px] font-semibold">$1,240</p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-xl backdrop-blur-md">
                    <p className="text-white/60 font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium">Retention</p>
                    <p className="text-white font-heading text-[24px] leading-[32px] font-semibold">84.2%</p>
                  </div>
                </div>
                <div className="h-48 flex items-end justify-between gap-2 px-2">
                  <div className="w-full bg-primary/40 h-1/2 rounded-t-sm group-hover:h-3/4 transition-all duration-500"></div>
                  <div className="w-full bg-primary/40 h-2/3 rounded-t-sm group-hover:h-5/6 transition-all duration-500 delay-75"></div>
                  <div className="w-full bg-primary h-full rounded-t-sm group-hover:h-1/2 transition-all duration-500 delay-150"></div>
                  <div className="w-full bg-primary/40 h-3/4 rounded-t-sm group-hover:h-full transition-all duration-500 delay-200"></div>
                  <div className="w-full bg-primary h-5/6 rounded-t-sm group-hover:h-2/3 transition-all duration-500 delay-300"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-surface-container-highest dark:bg-[#30323c] flex items-center justify-center text-primary">
              <MaterialIcon name="insights" />
            </div>
            <h2 className="text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-heading">Actionable Analytics &amp; CRM</h2>
            <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white">
              Stop guessing and start knowing. Our deep-dive CRM tracks every interaction, from the first QR scan to the tenth purchase, giving you a 360-degree view of your customer lifetime value.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold">RFM Segmentation</h4>
                <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white">Auto-categorize customers by Recency, Frequency, and Monetary value.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold">Churn Prediction</h4>
                <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white">Identify at-risk customers before they leave with AI-driven alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing & Customer Profiles (Split section) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-white/70 dark:bg-[#1a1c25]/70 backdrop-blur-[12px] border border-[#E2E8F0]/80 dark:border-white/[0.08] p-6 md:p-10 rounded-[2rem] space-y-6">
            <MaterialIcon name="campaign" className="text-4xl text-primary" />
            <h3 className="text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-heading">Automated Marketing</h3>
            <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white">
              Set up drip campaigns that trigger on autopilot. Send a &quot;We Miss You&quot; coupon after 30 days of inactivity or a birthday reward without lifting a finger.
            </p>
            <img
              className="w-full rounded-2xl border border-outline-variant shadow-sm mt-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWm_O8S_6jz5M8Z6i3NitQJ0jm-z_X2how43iH8ZkNEHWXbLHknvyW6QtaqDJNbvmk8mr1LcXbxspuYFA9mRgSLOaiI1Yrb4tFFOwJJImRsaOxrrnvB7UjG-ZHlu61yAZiU2KqICbAk_zEtfnpZgpJZV0Oa5Ktstr_lNiIz_2nEOtR6bKg8wXrP3Q-6RBKRmJWpADLPifBwCiKInxW2b8Us4bWz66IVmQmQDg1M16fGyeCy3ot9INK"
              alt="Marketing automation workflow"
            />
          </div>
          <div className="lg:col-span-6 bg-white/70 dark:bg-[#1a1c25]/70 backdrop-blur-[12px] border border-[#E2E8F0]/80 p-6 md:p-10 rounded-[2rem] space-y-6 bg-surface-container-low">
            <MaterialIcon name="person_search" className="text-4xl text-tertiary" />
            <h3 className="text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-heading">Rich Customer Profiles</h3>
            <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white">
              Every customer has a story. View individual history, preferences, and feedback in a centralized profile that empowers your staff to provide personalized service.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-[#1a1c25] rounded-xl shadow-sm border border-outline-variant/30">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-fixed">JD</div>
                <div className="flex-1">
                  <p className="font-bold">Jane Doe</p>
                  <p className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-on-surface-variant dark:text-white">VIP Member &bull; 12 Visits</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-tertiary-fixed-dim/30 text-on-tertiary-fixed-variant font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium rounded">ACTIVE</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-[#1a1c25] rounded-xl shadow-sm border border-outline-variant/30 opacity-60">
                <div className="w-12 h-12 rounded-full bg-surface-dim flex items-center justify-center font-bold text-on-surface-variant dark:text-white">SM</div>
                <div className="flex-1">
                  <p className="font-bold">Sam Miller</p>
                  <p className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-on-surface-variant dark:text-white">New &bull; 1 Visit</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-surface-variant text-on-surface-variant dark:text-white font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium rounded">PENDING</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Check-in (Atmospheric Focus) */}
        <section className="relative rounded-3xl md:rounded-[3rem] overflow-hidden bg-primary py-16 md:py-24 px-5 md:px-10 text-white">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20">
                <MaterialIcon name="qr_code_scanner" className="text-white" filled />
                <span className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium">INSTANT REDEMPTION</span>
              </div>
              <h2 className="text-[32px] md:text-[48px] leading-[56px] tracking-[-0.02em] font-semibold font-heading">Seamless QR Check-in</h2>
              <p className="text-[18px] leading-[28px] text-primary-fixed">
                The fastest way to verify loyalty. A simple scan from your customer&apos;s phone handles point accrual, coupon redemption, and profile updates instantly. No hardware required.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all flex items-center gap-2">
                  See the demo <MaterialIcon name="play_circle" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-surface-container dark:bg-[#1a1c25] rounded-2xl flex items-center justify-center border-4 border-dashed border-primary/20">
                  <MaterialIcon name="qr_code_2" className="text-primary !text-9xl " />
                </div>
                <p className="text-on-background dark:text-white text-center mt-6 font-bold">Scan to Earn Points</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-20 space-y-6 md:space-y-8">
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.01em] font-semibold font-heading">Ready to grow your business?</h2>
          <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white max-w-xl mx-auto">
            Join 5,000+ businesses using myStamp to turn one-time shoppers into lifelong customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register" className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 active:scale-95 transition-all text-center">
              Start Free Trial
            </Link>
            <Link href="/contact" className="w-full sm:w-auto bg-surface-container-high dark:bg-[#252730] text-on-surface dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-container-highest transition-all text-center">
              Book a Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
