import PolicyLayout from "@/components/PolicyLayout";
import MaterialIcon from "@/components/MaterialIcon";

const tocLinks = [
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "how-we-use", label: "How We Use Cookies" },
  { id: "cookie-types", label: "Types of Cookies" },
  { id: "cookies-we-use", label: "Cookies We Use" },
  { id: "third-party", label: "Third-Party Cookies" },
  { id: "managing-cookies", label: "Managing Cookies" },
  { id: "gdpr-rights", label: "Your GDPR Rights" },
  { id: "retention", label: "Cookie Retention" },
  { id: "changes", label: "Changes to This Policy" },
];

const essentialCookies = [
  { name: "session_id", purpose: "Maintains your authenticated session across pages", duration: "Session", type: "Strictly Necessary" },
  { name: "csrf_token", purpose: "Protects against cross-site request forgery attacks", duration: "Session", type: "Strictly Necessary" },
  { name: "cookie_consent", purpose: "Stores your cookie consent preferences", duration: "12 months", type: "Strictly Necessary" },
  { name: "__stripe_mid", purpose: "Fraud prevention and payment processing", duration: "12 months", type: "Strictly Necessary" },
];

const functionalCookies = [
  { name: "theme_preference", purpose: "Remembers your light/dark mode preference", duration: "12 months", type: "Functional" },
  { name: "language", purpose: "Stores your preferred language setting", duration: "12 months", type: "Functional" },
  { name: "currency", purpose: "Remembers your preferred currency display", duration: "12 months", type: "Functional" },
];

const analyticsCookies = [
  { name: "_ga", purpose: "Google Analytics - Distinguishes unique users", duration: "24 months", type: "Analytics" },
  { name: "_ga_*", purpose: "Google Analytics - Maintains session state", duration: "24 months", type: "Analytics" },
  { name: "_gid", purpose: "Google Analytics - Distinguishes users", duration: "24 hours", type: "Analytics" },
  { name: "plausible_*", purpose: "Plausible Analytics - Aggregated usage statistics", duration: "Session", type: "Analytics" },
];

const cookieTypeCards = [
  { icon: "lock", title: "Strictly Necessary", desc: "Essential for the website to function. These cannot be disabled as the site would not work without them. They are set in response to actions you take, such as setting privacy preferences or filling in forms.", color: "text-tertiary", bg: "bg-tertiary/10" },
  { icon: "settings", title: "Functional", desc: "Enable enhanced functionality and personalisation. If you do not allow these cookies, some or all of these services may not function properly.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: "analytics", title: "Performance & Analytics", desc: "Allow us to count visits and traffic sources so we can measure and improve site performance. They help us understand which pages are most and least popular.", color: "text-primary", bg: "bg-primary/10" },
  { icon: "campaign", title: "Marketing & Advertising", desc: "May be set through our site by our advertising partners. They may be used to build a profile of your interests and show relevant adverts on other sites. They do not directly store personal information.", color: "text-error", bg: "bg-error/10" },
];

const gdprRights = [
  { right: "Right to Withdraw Consent", desc: "You may withdraw your consent to non-essential cookies at any time through our cookie preference centre or your browser settings." },
  { right: "Right of Access", desc: "You can request information about what personal data is collected through cookies and how it is processed." },
  { right: "Right to Erasure", desc: "You can request the deletion of cookie data associated with your device." },
  { right: "Right to Object", desc: "You have the right to object to the processing of your data through cookies based on legitimate interests." },
  { right: "Right to Restrict Processing", desc: "You can request that we restrict the processing of your data through cookies in certain circumstances." },
];

export default function CookiePolicyPage() {
  return (
    <PolicyLayout
      title="Cookie Policy"
      description="This Cookie Policy explains how myStamp uses cookies and similar tracking technologies when you visit our website and use our services. We are committed to transparency about the technologies we use in compliance with the EU General Data Protection Regulation (GDPR)."
      updatedAt="July 24, 2026"
      tocLinks={tocLinks}
      contact={{
        email: "privacy@mystamp.app",
        address: "123 Savings Way, Suite 500\nSan Francisco, CA 94103",
      }}
    >
      {/* What Are Cookies */}
      <section className="policy-section" id="what-are-cookies">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">1. What Are Cookies</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
          <p>Cookies serve various purposes, such as remembering your preferences, understanding how you interact with our website, and improving your overall experience. They cannot be used to run programs or deliver viruses to your device.</p>
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 mt-6">
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-2 flex items-center gap-2">
              <MaterialIcon name="info" className="text-primary" filled />
              Important Note
            </h3>
            <p className="text-[16px] leading-[24px]">Under the GDPR and the ePrivacy Directive, we are required to obtain your consent before placing non-essential cookies on your device. Strictly necessary cookies are exempt from consent requirements as they are essential for the service you have requested.</p>
          </div>
        </div>
      </section>

      {/* How We Use Cookies */}
      <section className="policy-section" id="how-we-use">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">2. How We Use Cookies</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>We use cookies for the following purposes:</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant flex gap-4">
              <MaterialIcon name="shield" className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Security & Authentication</h4>
                <p className="text-[15px] text-on-surface-variant dark:text-white/80">Keeping you signed in and protecting your account from unauthorised access.</p>
              </div>
            </div>
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant flex gap-4">
              <MaterialIcon name="tune" className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Functionality & Preferences</h4>
                <p className="text-[15px] text-on-surface-variant dark:text-white/80">Remembering your settings, language, and display preferences.</p>
              </div>
            </div>
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant flex gap-4">
              <MaterialIcon name="bar_chart" className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Analytics & Performance</h4>
                <p className="text-[15px] text-on-surface-variant dark:text-white/80">Understanding how visitors interact with our website to improve it.</p>
              </div>
            </div>
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant flex gap-4">
              <MaterialIcon name="campaign" className="text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Marketing & Targeting</h4>
                <p className="text-[15px] text-on-surface-variant dark:text-white/80">Delivering relevant advertisements and measuring campaign effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="policy-section" id="cookie-types">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">3. Types of Cookies</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>We categorise cookies into the following types based on their purpose and duration:</p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {cookieTypeCards.map((card) => (
              <div key={card.title} className="bg-surface-container-low dark:bg-[#1a1c25] p-6 rounded-xl border border-outline-variant">
                <div className={`w-10 h-10 ${card.bg} ${card.color} rounded-full flex items-center justify-center mb-3`}>
                  <MaterialIcon name={card.icon} />
                </div>
                <h4 className="font-heading font-semibold text-[18px] mb-2">{card.title}</h4>
                <p className="text-[15px] leading-[22px]">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-3">By Duration</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MaterialIcon name="schedule" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold">Session Cookies</span>
                  <span className="text-on-surface-variant dark:text-white/80"> — Temporary cookies that are deleted from your device when you close your browser.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <MaterialIcon name="event" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold">Persistent Cookies</span>
                  <span className="text-on-surface-variant dark:text-white/80"> — Remain on your device for a set period or until you delete them manually.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies We Use */}
      <section className="policy-section" id="cookies-we-use">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">4. Cookies We Use</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-8 leading-relaxed">
          <p>Below is a detailed list of the specific cookies we use on our website, grouped by category:</p>

          {/* Essential Cookies */}
          <div>
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-4 flex items-center gap-2">
              <MaterialIcon name="lock" className="text-tertiary" />
              Strictly Necessary Cookies
            </h3>
            <div className="overflow-hidden rounded-xl border border-outline-variant">
              <table className="w-full text-left bg-surface-container-lowest dark:bg-[#14161f]">
                <thead className="bg-surface-container-high dark:bg-[#252730] font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-outline">
                  <tr>
                    <th className="px-5 py-3">Cookie</th>
                    <th className="px-5 py-3">Purpose</th>
                    <th className="px-5 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-[15px] leading-[22px]">
                  {essentialCookies.map((c) => (
                    <tr key={c.name}>
                      <td className="px-5 py-3 font-mono text-[13px] font-medium text-primary">{c.name}</td>
                      <td className="px-5 py-3 text-on-surface-variant dark:text-white">{c.purpose}</td>
                      <td className="px-5 py-3 whitespace-nowrap">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Functional Cookies */}
          <div>
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-4 flex items-center gap-2">
              <MaterialIcon name="settings" className="text-secondary" />
              Functional Cookies
            </h3>
            <div className="overflow-hidden rounded-xl border border-outline-variant">
              <table className="w-full text-left bg-surface-container-lowest dark:bg-[#14161f]">
                <thead className="bg-surface-container-high dark:bg-[#252730] font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-outline">
                  <tr>
                    <th className="px-5 py-3">Cookie</th>
                    <th className="px-5 py-3">Purpose</th>
                    <th className="px-5 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-[15px] leading-[22px]">
                  {functionalCookies.map((c) => (
                    <tr key={c.name}>
                      <td className="px-5 py-3 font-mono text-[13px] font-medium text-primary">{c.name}</td>
                      <td className="px-5 py-3 text-on-surface-variant dark:text-white">{c.purpose}</td>
                      <td className="px-5 py-3 whitespace-nowrap">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div>
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-4 flex items-center gap-2">
              <MaterialIcon name="analytics" className="text-primary" />
              Analytics Cookies
            </h3>
            <div className="overflow-hidden rounded-xl border border-outline-variant">
              <table className="w-full text-left bg-surface-container-lowest dark:bg-[#14161f]">
                <thead className="bg-surface-container-high dark:bg-[#252730] font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-outline">
                  <tr>
                    <th className="px-5 py-3">Cookie</th>
                    <th className="px-5 py-3">Purpose</th>
                    <th className="px-5 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-[15px] leading-[22px]">
                  {analyticsCookies.map((c) => (
                    <tr key={c.name}>
                      <td className="px-5 py-3 font-mono text-[13px] font-medium text-primary">{c.name}</td>
                      <td className="px-5 py-3 text-on-surface-variant dark:text-white">{c.purpose}</td>
                      <td className="px-5 py-3 whitespace-nowrap">{c.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="policy-section" id="third-party">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">5. Third-Party Cookies</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>Some cookies are placed by third-party services that appear on our pages. We do not control these third-party cookies. You should check the relevant third-party&apos;s privacy policy for more information:</p>
          <div className="overflow-hidden rounded-xl border border-outline-variant">
            <table className="w-full text-left bg-surface-container-lowest dark:bg-[#14161f]">
              <thead className="bg-surface-container-high dark:bg-[#252730] font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-outline">
                <tr>
                  <th className="px-5 py-3">Provider</th>
                  <th className="px-5 py-3">Purpose</th>
                  <th className="px-5 py-3">Privacy Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 text-[15px] leading-[22px]">
                <tr>
                  <td className="px-5 py-3 font-semibold">Google Analytics</td>
                  <td className="px-5 py-3 text-on-surface-variant dark:text-white">Website usage analytics</td>
                  <td className="px-5 py-3"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold">Stripe</td>
                  <td className="px-5 py-3 text-on-surface-variant dark:text-white">Payment processing and fraud prevention</td>
                  <td className="px-5 py-3"><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe Privacy Policy</a></td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold">Plausible Analytics</td>
                  <td className="px-5 py-3 text-on-surface-variant dark:text-white">Privacy-focused analytics (no personal data collected)</td>
                  <td className="px-5 py-3"><a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Plausible Privacy Policy</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="policy-section" id="managing-cookies">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">6. Managing Your Cookie Preferences</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>You have several options for managing cookies:</p>

          <div className="bg-surface-container dark:bg-[#1a1c25] rounded-2xl p-6 border border-outline-variant">
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-4 flex items-center gap-2">
              <MaterialIcon name="tune" className="text-primary" />
              Our Cookie Preference Centre
            </h3>
            <p>When you first visit our website, you will be presented with a cookie consent banner. You can change your preferences at any time by clicking the &quot;Cookie Settings&quot; link in the footer of any page. This allows you to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Accept or reject non-essential cookie categories</li>
              <li>View detailed information about each cookie</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div className="bg-surface-container dark:bg-[#1a1c25] rounded-2xl p-6 border border-outline-variant">
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-4 flex items-center gap-2">
              <MaterialIcon name="language" className="text-primary" />
              Browser Settings
            </h3>
            <p>Most web browsers allow you to control cookies through their settings. You can typically:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from a specific site</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mt-3 text-[15px] text-on-surface-variant dark:text-white/80">For instructions, please visit your browser&apos;s help page. Common browsers:</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[14px] bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">Chrome</a>
              <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[14px] bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">Firefox</a>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[14px] bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">Safari</a>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[14px] bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">Edge</a>
            </div>
          </div>

          <div className="bg-tertiary/5 rounded-2xl p-6 border border-tertiary/10">
            <h3 className="font-heading text-[20px] leading-[28px] font-semibold mb-2 flex items-center gap-2">
              <MaterialIcon name="warning" className="text-tertiary" filled />
              Impact of Disabling Cookies
            </h3>
            <p className="text-[15px]">Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. For example, you may not be able to log in, add items to your wallet, or use any services that require you to sign in.</p>
          </div>
        </div>
      </section>

      {/* GDPR Rights */}
      <section className="policy-section" id="gdpr-rights">
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4 flex items-center gap-3">
            <MaterialIcon name="verified_user" className="text-primary" filled />
            7. Your GDPR Rights
          </h2>
          <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4">
            <p>Under the General Data Protection Regulation (GDPR), you have the following rights in relation to cookies and personal data collected through them:</p>
            <div className="overflow-hidden rounded-xl border border-outline-variant">
              <table className="w-full text-left bg-surface-container-lowest dark:bg-[#14161f]">
                <thead className="bg-surface-container-high dark:bg-[#252730] font-mono text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-outline">
                  <tr>
                    <th className="px-5 py-3">Right</th>
                    <th className="px-5 py-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-[15px] leading-[22px]">
                  {gdprRights.map((r) => (
                    <tr key={r.right}>
                      <td className="px-5 py-3 font-semibold text-primary whitespace-nowrap">{r.right}</td>
                      <td className="px-5 py-3 text-on-surface-variant dark:text-white">{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>To exercise any of these rights, please contact our Data Protection Officer at <a href="mailto:privacy@mystamp.app" className="text-primary font-semibold hover:underline">privacy@mystamp.app</a>. We will respond to your request within 30 days.</p>
          </div>
        </div>
      </section>

      {/* Cookie Retention */}
      <section className="policy-section" id="retention">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">8. Cookie Retention</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>The length of time a cookie remains on your device depends on its type:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant text-center">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <MaterialIcon name="schedule" />
              </div>
              <h4 className="font-semibold mb-1">Session Cookies</h4>
              <p className="text-[14px] text-on-surface-variant dark:text-white/80">Deleted automatically when you close your browser</p>
            </div>
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant text-center">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <MaterialIcon name="date_range" />
              </div>
              <h4 className="font-semibold mb-1">Short-Term Persistent</h4>
              <p className="text-[14px] text-on-surface-variant dark:text-white/80">24 hours — used for analytics and fraud detection</p>
            </div>
            <div className="bg-surface-container-low dark:bg-[#1a1c25] p-5 rounded-xl border border-outline-variant text-center">
              <div className="w-12 h-12 bg-tertiary/10 text-tertiary rounded-full flex items-center justify-center mx-auto mb-3">
                <MaterialIcon name="event_repeat" />
              </div>
              <h4 className="font-semibold mb-1">Long-Term Persistent</h4>
              <p className="text-[14px] text-on-surface-variant dark:text-white/80">Up to 24 months — used for preferences and recognition</p>
            </div>
          </div>
          <p className="mt-4">When a cookie is no longer needed for the purpose it was collected, it is automatically deleted. You may also delete cookies manually through your browser settings at any time.</p>
        </div>
      </section>

      {/* Changes */}
      <section className="policy-section" id="changes">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">9. Changes to This Policy</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. When we make material changes, we will:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
            <li>Display a prominent notice on our website</li>
            <li>Request renewed consent for any new non-essential cookies</li>
          </ul>
          <p>We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies and related technologies.</p>
        </div>
      </section>
    </PolicyLayout>
  );
}
