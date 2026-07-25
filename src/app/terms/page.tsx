import PolicyLayout from "@/components/PolicyLayout";
import MaterialIcon from "@/components/MaterialIcon";

const tocLinks = [
  { id: "terms-acceptance", label: "Terms of Acceptance" },
  { id: "user-accounts", label: "User Accounts" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "payment-terms", label: "Payment Terms" },
  { id: "termination", label: "Termination" },
  { id: "liability", label: "Limitation of Liability" },
];

const accountObligations = [
  "You must provide accurate and complete information when creating an account.",
  "You are responsible for maintaining the security of your account credentials.",
  "You must notify us immediately of any unauthorized use of your account.",
  "You may not share your account access with third parties without our consent.",
];

const acceptableUse = [
  "Use the platform for any unlawful purpose or in violation of any applicable regulations.",
  "Attempt to gain unauthorized access to other user accounts or our internal systems.",
  "Reproduce, distribute, or create derivative works based on our platform content.",
  "Use automated tools, bots, or scrapers to interact with the platform without written permission.",
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms of Service"
      description="These Terms of Service govern your use of myStamp&apos;s platform and services. By accessing or using our platform, you agree to be bound by these terms."
      updatedAt="January 24, 2024"
      tocLinks={tocLinks}
      contact={{
        email: "legal@mystamp.app",
        address: "123 Savings Way, Suite 500\nSan Francisco, CA 94103",
      }}
    >
      {/* Terms of Acceptance */}
      <section className="policy-section" id="terms-acceptance">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">1. Terms of Acceptance</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>By creating an account or using any part of the myStamp platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</p>
          <p>If you are using the platform on behalf of an organization, you represent that you have the authority to bind that organization to these terms. If you do not agree to these terms, you may not access or use our services.</p>
        </div>
      </section>

      {/* User Accounts */}
      <section className="policy-section" id="user-accounts">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">2. User Accounts</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>To access certain features, you must create a user account. When registering, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            {accountObligations.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>We reserve the right to suspend or terminate accounts that violate these terms or engage in suspicious activity.</p>
        </div>
      </section>

      {/* Acceptable Use */}
      <section className="policy-section" id="acceptable-use">
        <div className="bg-error/5 rounded-2xl p-8 border border-error/10">
          <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4 flex items-center gap-3">
            <MaterialIcon name="gpp_maybe" className="text-error" filled />
            3. Acceptable Use
          </h2>
          <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              {acceptableUse.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>Violation of these rules may result in immediate account suspension and potential legal action.</p>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="policy-section" id="intellectual-property">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">4. Intellectual Property</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4 leading-relaxed">
          <p>All content, trademarks, logos, and intellectual property on the myStamp platform are owned by or licensed to myStamp Inc. You are granted a limited, non-exclusive license to use the platform for its intended purpose.</p>
          <p>You retain ownership of any content you upload to the platform (such as business logos and descriptions). By uploading content, you grant us a worldwide, non-exclusive license to use, display, and distribute that content in connection with our services.</p>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="policy-section" id="payment-terms">
        <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4 flex items-center gap-3">
            <MaterialIcon name="receipt_long" className="text-primary" filled />
            5. Payment Terms
          </h2>
          <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white space-y-4">
            <p>Paid plans are billed in advance on a monthly or annual basis. By selecting a paid plan, you authorize us to charge your payment method at the start of each billing period.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are non-refundable except as required by applicable law.</li>
              <li>We reserve the right to modify pricing with 30 days&apos; advance notice.</li>
              <li>Downgrades take effect at the start of the next billing cycle.</li>
              <li>Overdue payments may result in service suspension after a 7-day grace period.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="policy-section" id="termination">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">6. Termination</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white leading-relaxed space-y-4">
          <p>Either party may terminate this agreement at any time. You may delete your account through your account settings or by contacting our support team.</p>
          <p>Upon termination, your right to use the platform ceases immediately. We will retain your data for up to 30 days to allow for data export, after which it will be permanently deleted in accordance with our Privacy Policy.</p>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="policy-section" id="liability">
        <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-semibold font-heading text-on-background dark:text-white mb-4">7. Limitation of Liability</h2>
        <div className="text-[16px] leading-[24px] text-on-surface-variant dark:text-white leading-relaxed space-y-4">
          <p>To the maximum extent permitted by law, myStamp Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform.</p>
          <p>Our total liability for any claims arising from these terms or your use of the platform shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.</p>
        </div>
      </section>
    </PolicyLayout>
  );
}
