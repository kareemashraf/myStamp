"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import FormField from "@/components/FormField";

const contactCards = [
  { icon: "mail", title: "Email Us", lines: ["General: hello@mystamp.app", "Support: support@mystamp.app"] },
  { icon: "call", title: "Call Us", lines: ["+1 (555) 234-5678", "Mon-Fri: 9am — 6pm PST"] },
  { icon: "location_on", title: "Visit Us", lines: ["101 Innovation Way, Suite 400", "San Francisco, CA 94103"] },
];

const faqs = [
  { q: "How long does integration take?", a: "Most enterprise teams are up and running within 48 hours. Our RESTful API is designed for rapid deployment with extensive documentation and SDKs for all major languages." },
  { q: "Do you offer customized pricing?", a: "Yes! For high-volume users and global retailers, we offer custom tiers that include dedicated account managers, SLA guarantees, and priority support channels." },
  { q: "Is my data secure?", a: "Absolutely. myStamp is SOC 2 Type II compliant and uses AES-256 encryption at rest. We never sell your customer data and provide granular role-based access controls." },
];

export default function ContactPage() {
  return (
    <div className="bg-background text-on-background dark:text-white min-h-screen font-body">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 px-5">
        {/* Header */}
        <section className="max-w-3xl mx-auto mb-14">
          <h1 className="font-heading text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] leading-[1.08] text-on-surface dark:text-white mb-4">
            Let&apos;s start a conversation
          </h1>
          <p className="text-on-surface-variant dark:text-white text-[17px] leading-relaxed">
            Have a question about our enterprise features or need technical assistance? Our team is here to help you maximize your savings engine.
          </p>
        </section>

        {/* Form + Cards */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mb-16 md:mb-20">
          {/* Form */}
          <div className="lg:col-span-3 bg-surface-container-lowest dark:bg-[#181f33] border border-outline-variant/40 rounded-[24px] p-8">
            <h2 className="font-heading text-[22px] font-bold text-on-surface dark:text-white mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="contact-name" label="Full Name" type="text" />
                <FormField id="contact-email" label="Work Email" type="email" />
              </div>
              <div className="space-y-1">
                <label className="block font-mono text-[11px] tracking-wider text-on-surface-variant dark:text-white mb-1.5 uppercase">Subject</label>
                <select className="w-full bg-surface-container dark:bg-[#22293e] border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary-container appearance-none">
                  <option>General Inquiry</option>
                  <option>Enterprise Sales</option>
                  <option>Technical Support</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="block font-mono text-[11px] tracking-wider text-on-surface-variant dark:text-white mb-1.5 uppercase">Message</label>
                <textarea rows={5} className="w-full bg-surface-container dark:bg-[#22293e] border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface dark:text-white focus:outline-none focus:border-primary-container resize-none" />
              </div>
              <button type="submit" className="bg-primary-container text-on-primary px-7 py-3 rounded-full font-medium text-[15px] hover:opacity-90 transition-opacity font-heading">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card) => (
              <div key={card.title} className="bg-surface-container-low dark:bg-[#22293e] rounded-[20px] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-[22px] text-primary-container">{card.icon}</span>
                  <h3 className="font-heading text-[15px] font-bold text-on-surface dark:text-white">{card.title}</h3>
                </div>
                {card.lines.map((l) => (
                  <p key={l} className="text-on-surface-variant dark:text-white text-sm leading-relaxed">{l}</p>
                ))}
              </div>
            ))}
            {/* Live Status */}
            <div className="bg-surface-container-low dark:bg-[#22293e] rounded-[20px] p-6">
              <h3 className="font-heading text-[15px] font-bold text-on-surface dark:text-white mb-3">Live Office Status</h3>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-tertiary-container rounded-full animate-pulse" />
                <span className="text-sm text-on-surface-variant dark:text-white">All systems operational</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <h2 className="font-heading text-[22px] font-bold text-on-surface dark:text-white">Common Questions</h2>
            <Link href="#" className="text-primary-container text-sm font-medium hover:underline flex items-center gap-1">
              Visit Help Center <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <FAQAccordion items={faqs} title="" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
