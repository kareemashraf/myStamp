"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import PricingCard, { type PricingPlan } from "@/components/PricingCard";

const plans: PricingPlan[] = [
  { name: "Free", description: "Perfect for starting your journey.", price: "$0", period: "/mo", cta: "Get Started", ctaHref: "/register", features: ["Up to 100 coupons", "Basic analytics"], excludedFeatures: ["White-label branding"] },
  { name: "Pro", description: "Scale your marketing efforts effectively.", price: "$49", period: "/mo", cta: "Start 14-day Free Trial", ctaHref: "/register", popular: true, features: ["Unlimited coupons", "Advanced cohort analysis", "White-label branding", "API Access"] },
  { name: "Enterprise", description: "Full control and custom integration.", price: "Custom", period: "", cta: "Contact Sales", ctaHref: "/contact", features: ["Everything in Pro", "Dedicated account manager", "SLA & Priority support", "SSO & Custom security"] },
];

const compareFeatures = [
  { cat: "CORE PLATFORM", rows: [{ label: "Monthly Coupon Limit", vals: ["100", "Unlimited", "Unlimited"] }, { label: "Team Members", vals: ["1", "Up to 10", "Unlimited"] }, { label: "Campaign Tracking", vals: [true, true, true] }] },
  { cat: "ADVANCED TOOLS", rows: [{ label: "Advanced Analytics", vals: [false, true, true] }, { label: "Custom Branding", vals: [false, true, true] }, { label: "Bulk Import/Export", vals: [false, true, true] }, { label: "REST API & Webhooks", vals: [false, true, true] }] },
];

const faqs = [
  { q: "Can I upgrade or downgrade my plan at any time?", a: "Yes, you can change your plan whenever you need. Upgrades take effect immediately, while downgrades will be applied at the start of your next billing cycle." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Wire Transfers for Enterprise customers." },
  { q: "Do you offer a free trial?", a: "Absolutely! The Pro plan comes with a 14-day free trial. No credit card required to start exploring the advanced features." },
  { q: "Is my data secure with myStamp?", a: "We take security seriously. All data is encrypted at rest and in transit using industry-standard protocols. We are SOC2 and GDPR compliant." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="bg-background text-on-background dark:text-white min-h-screen font-body">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 px-5">
        {/* Header */}
        <section className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="font-heading text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] leading-[1.08] text-on-surface dark:text-white mb-4">Pricing Plans</h1>
          <p className="text-on-surface-variant dark:text-white text-[17px] leading-relaxed mb-8">
            Simple, transparent pricing for teams of all sizes. Boost your revenue with powerful coupon management. Choose the plan that fits your growth trajectory.
          </p>
          <div className="inline-flex items-center gap-3 bg-surface-container dark:bg-[#1a1c25] rounded-full p-1">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-on-surface text-surface" : "text-on-surface-variant dark:text-white hover:text-on-surface dark:hover:text-white"}`}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${annual ? "bg-on-surface text-surface" : "text-on-surface-variant dark:text-white hover:text-on-surface dark:hover:text-white"}`}>
              Yearly <span className="text-tertiary-container ml-1">-20%</span>
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-20 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </section>

        {/* Comparison Table */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="font-heading text-2xl font-bold text-on-surface dark:text-white text-center mb-8">Compare all features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="text-left py-3 font-medium text-on-surface-variant dark:text-white">Feature</th>
                  <th className="text-center py-3 font-medium text-on-surface-variant dark:text-white">Free</th>
                  <th className="text-center py-3 font-medium text-on-surface dark:text-white">Pro</th>
                  <th className="text-center py-3 font-medium text-on-surface-variant dark:text-white">Enterprise</th>
                </tr>
              </thead>
              {compareFeatures.map((section) => (
                <tbody key={section.cat}>
                  <tr><td colSpan={4} className="pt-5 pb-2 font-mono text-[11px] tracking-wider text-on-surface-variant dark:text-white uppercase">{section.cat}</td></tr>
                  {section.rows.map((row) => (
                    <tr key={row.label} className="border-b border-outline-variant/50">
                      <td className="py-3.5 text-on-surface-variant dark:text-white">{row.label}</td>
                      {row.vals.map((v, i) => (
                        <td key={i} className="text-center py-3.5">
                          {typeof v === "boolean" ? (
                            <span className={`material-symbols-outlined text-[18px] ${v ? "text-tertiary-container" : "text-error/50"}`}>{v ? "check" : "close"}</span>
                          ) : <span className="text-on-surface dark:text-white">{v}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </section>

        {/* FAQ — using shared component */}
        <section className="max-w-3xl mx-auto mb-20">
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA — using shared component */}
        <CTABanner
          variant="surface"
          title="Ready to boost your conversion rates?"
          subtitle="Join over 5,000 businesses using myStamp to power their discount strategies."
          primaryLabel="Start your 14-day trial"
          primaryHref="/register"
          secondaryLabel="Talk to an expert"
          secondaryHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
