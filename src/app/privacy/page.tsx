import PolicyLayout from "@/components/PolicyLayout";
import MaterialIcon from "@/components/MaterialIcon";

const tocLinks = [
  { id: "introduction", label: "Introduction" },
  { id: "data-collection", label: "Data Collection" },
  { id: "gdpr", label: "GDPR Compliance" },
  { id: "user-rights", label: "User Rights" },
  { id: "cookie-policy", label: "Cookie Policy" },
  { id: "security", label: "Data Security" },
];

const userRights = [
  { right: "Access", desc: "Request a copy of all personal data we hold about you." },
  { right: "Rectification", desc: "Correct inaccurate or incomplete information." },
  { right: "Erasure", desc: "Request the permanent deletion of your account and data." },
  { right: "Portability", desc: "Transfer your data to another service in a structured format." },
];

const cookieTypes = [
  { icon: "lock", title: "Essential", desc: "Necessary for the site to function.", bg: "bg-tertiary-container/10", text: "text-tertiary-container" },
  { icon: "settings", title: "Preference", desc: "Remembering your site settings.", bg: "bg-secondary-container", text: "text-on-secondary-container" },
  { icon: "trending_up", title: "Analytics", desc: "Improving our service based on usage.", bg: "bg-primary-container/10", text: "text-primary-container" },
];

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="At myStamp, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data when you use our platform."
      updatedAt="January 24, 2024"
      tocLinks={tocLinks}
      contact={{
        email: "privacy@mystamp.app",
        address: "123 Savings Way, Suite 500\nSan Francisco, CA 94103",
      }}
    >
      {/* Introduction */}
      <section className="policy-section" id="introduction">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">1. Introduction</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>This Privacy Policy applies to all services provided by myStamp Inc. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing our platform, you consent to the practices described in this document.</p>
          <p>We believe in transparency and want to empower our users with clear information about their digital footprint. Our data practices are designed to provide the best possible coupon-matching experience while respecting your individual rights.</p>
        </div>
      </section>

      {/* Data Collection */}
      <section className="policy-section" id="data-collection">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">2. Data Collection</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-surface-container-low dark:bg-[#22293e] p-6 rounded-xl border border-outline-variant">
            <MaterialIcon name="person" className="text-primary mb-2 block" />
            <h3 className="font-heading text-[24px] leading-[32px] font-semibold mb-2">Direct Information</h3>
            <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white">Information you provide when creating an account, including name, email address, and payment details.</p>
          </div>
          <div className="bg-surface-container-low dark:bg-[#22293e] p-6 rounded-xl border border-outline-variant">
            <MaterialIcon name="analytics" className="text-primary mb-2 block" />
            <h3 className="font-heading text-[24px] leading-[32px] font-semibold mb-2">Usage Data</h3>
            <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white">Log files, IP addresses, browser types, and interactions with specific coupons or store pages.</p>
          </div>
        </div>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white leading-relaxed">
          <p>We collect this information to personalize your experience, provide customer support, and improve our algorithm&apos;s ability to find relevant deals for you.</p>
        </div>
      </section>

      {/* GDPR */}
      <section className="policy-section" id="gdpr">
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4 flex items-center gap-3">
            <MaterialIcon name="verified_user" className="text-primary" filled />
            3. GDPR Compliance
          </h2>
          <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4">
            <p>For users in the European Economic Area (EEA), we process your data in accordance with the General Data Protection Regulation (GDPR). Our legal bases for processing include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Performance of a contract (providing you with our services).</li>
              <li>Legitimate interests in improving our platform and security.</li>
              <li>Your explicit consent for marketing communications.</li>
              <li>Compliance with legal obligations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="policy-section" id="user-rights">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">4. User Rights</h2>
        <div className="space-y-6">
          <p className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white">You have full control over your data. At any time, you may exercise the following rights through your account settings or by contacting us:</p>
          <div className="overflow-hidden rounded-xl border border-outline-variant">
            <table className="w-full text-left bg-surface-container-lowest dark:bg-[#181f33]">
              <thead className="bg-surface-container-high dark:bg-[#22293e] font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-outline">
                <tr>
                  <th className="px-6 py-4">Right</th>
                  <th className="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-[16px] leading-[24px]">
                {userRights.map((r) => (
                  <tr key={r.right}>
                    <td className="px-6 py-4 font-semibold text-primary">{r.right}</td>
                    <td className="px-6 py-4 text-on-surface-variant dark:text-white">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="policy-section" id="cookie-policy">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">5. Cookie Policy</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-6 leading-relaxed">
          <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are small files placed on your device to help analyze web traffic or let you know when you visit a particular site.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {cookieTypes.map((c) => (
              <div key={c.title} className="text-center p-4">
                <div className={`w-12 h-12 ${c.bg} ${c.text} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <MaterialIcon name={c.icon} />
                </div>
                <h4 className="font-bold mb-1">{c.title}</h4>
                <p className="text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="policy-section" id="security">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">6. Data Security</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white leading-relaxed">
          <p>The security of your data is important to us. We implement industry-standard AES-256 encryption for all data at rest and TLS for data in transit. We regularly conduct third-party security audits to identify and mitigate potential vulnerabilities.</p>
        </div>
      </section>
    </PolicyLayout>
  );
}
