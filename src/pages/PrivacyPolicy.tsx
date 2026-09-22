import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-brand-dark py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        {/* Header */}
        <div className="border-b border-brand-light pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/60 text-brand-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Shield size={14} className="text-brand-primary" />
            Legal &amp; Data Protection
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Privacy Policy &amp; Donor Data Protection
          </h1>
          <p className="text-brand-muted text-sm md:text-base mt-3">
            Last Updated: September 2026 • Community Alternative Research and Development (CARD)
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-brand-deep text-sm md:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              Community Alternative Research and Development (CARD), registered under the Andhra Pradesh Societies Registration Act (Reg No. 468/1995), is committed to safeguarding the privacy and confidentiality of our donors, volunteers, institutional partners, and site visitors.
            </p>
            <p>
              We do not sell, rent, trade, or commercialize donor personal data under any circumstances.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              2. Information We Collect
            </h2>
            <p>
              When you interact with CARD via our website, contribute donations, or submit inquiries, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-muted">
              <li><strong>Contact Information:</strong> Full name, telephone number, email address, and postal address.</li>
              <li><strong>Tax &amp; Compliance Details:</strong> Permanent Account Number (PAN) as mandated by the Income Tax Department of India for issuing official Section 80G tax receipts and filing Form 10BD.</li>
              <li><strong>Transaction Records:</strong> Contribution amount, chosen initiative, transaction reference ID, and date. Note: We do NOT store credit card numbers, CVVs, or banking passwords; all payments are processed via RBI-compliant payment gateways.</li>
              <li><strong>Inquiry Details:</strong> Specific messages, partnership briefs, and field visit requests submitted through our contact forms.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              3. Purpose of Processing &amp; Section 80G Compliance
            </h2>
            <p>We process collected donor information strictly for:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">Issuing signed 80G tax exemption certificates and annual Form 10BE filing.</span>
              </div>
              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">Sharing verifiable project impact reports and photo documentation of community work.</span>
              </div>
              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">Facilitating scheduled visits to tribal colonies and child education centers in Chittoor.</span>
              </div>
              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light flex items-start gap-3">
                <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">Complying with statutory audits under the Societies Act, Income Tax Act, and FCRA.</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              4. Data Retention &amp; Security Standards
            </h2>
            <p>
              CARD implements industry-standard 256-bit SSL encryption, firewalls, and restricted administrative credentials to protect all collected data. Statutory donation receipts and tax filings are archived in accordance with Indian statutory retention guidelines (currently 8 financial years).
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              5. Grievance Officer &amp; Contact Coordinates
            </h2>
            <p>
              In accordance with the Information Technology Act 2000 and rules made thereunder, any queries or grievances regarding data privacy may be directed to our designated Grievance Officer:
            </p>
            <div className="bg-brand-soft p-5 rounded-2xl border border-brand-light space-y-2 text-xs md:text-sm">
              <div><strong>Grievance Officer:</strong> S. Ravi (Executive Director)</div>
              <div><strong>Organization:</strong> Community Alternative Research and Development (CARD)</div>
              <div><strong>Address:</strong> Mittapalyam Post, Gudipala Mandal, Chittoor District, Andhra Pradesh — 517125</div>
              <div><strong>Email:</strong> cardngo1992@gmail.com / cardngo.org@gmail.com</div>
              <div><strong>Phone:</strong> +91 94402 70876 / +91 98854 29900</div>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-light flex items-center justify-between text-xs text-brand-muted">
          <Link to="/" className="text-brand-primary font-bold hover:underline">
            ← Return to Home
          </Link>
          <Link to="/cookie-policy" className="text-brand-deep font-semibold hover:underline">
            Read Cookie Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
