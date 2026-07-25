"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TocLink {
  id: string;
  label: string;
}

interface PolicyContact {
  email: string;
  address: string;
  description?: string;
}

interface PolicyLayoutProps {
  title: string;
  description: string;
  updatedAt: string;
  tocLinks: TocLink[];
  contact: PolicyContact;
  children: React.ReactNode;
}

export default function PolicyLayout({
  title,
  description,
  updatedAt,
  tocLinks,
  contact,
  children,
}: PolicyLayoutProps) {
  const [activeId, setActiveId] = useState(tocLinks[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );
    document.querySelectorAll(".policy-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-surface dark:text-white min-h-screen font-body selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 space-y-4">
              <p className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-outline uppercase tracking-widest mb-4">
                On this page
              </p>
              <nav className="flex flex-col gap-4">
                {tocLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`text-[16px] leading-[24px] transition-all border-l-2 pl-4 ${
                      activeId === link.id
                        ? "text-primary font-semibold border-primary"
                        : "text-on-surface-variant dark:text-white border-transparent hover:border-outline-variant"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="flex-1 max-w-3xl">
            <div className="mb-16">
              <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium mb-4">
                Updated {updatedAt}
              </span>
              <h1 className="font-heading text-[28px] sm:text-[40px] md:text-[48px] leading-[1.15] tracking-[-0.02em] font-bold text-on-background dark:text-white mb-4">
                {title}
              </h1>
              <p className="text-[18px] leading-[28px] text-on-surface-variant dark:text-white leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-12 md:space-y-24">
              {children}

              <section className="policy-section" id="contact">
                <h2 className="text-[24px] sm:text-[32px] leading-[1.25] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">
                  {tocLinks.length}. Contact Us
                </h2>
                <div className="bg-surface-container dark:bg-[#1a1c25] rounded-2xl p-8 border border-outline-variant">
                  <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white mb-6">
                    {contact.description ?? `If you have any questions about this ${title}, please reach out to our dedicated team.`}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-8">
                    <div>
                      <p className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-outline uppercase mb-2">
                        Email
                      </p>
                      <a
                        className="font-heading text-[24px] leading-[32px] font-semibold text-primary hover:underline"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <p className="font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium text-outline uppercase mb-2">
                        Address
                      </p>
                      <p className="text-[16px] leading-[24px]">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
