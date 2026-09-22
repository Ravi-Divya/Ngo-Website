import React from 'react';
import { FileText, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-brand-dark py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        <div className="border-b border-brand-light pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/60 text-brand-deep text-xs font-bold tracking-widest uppercase mb-3">
            <FileText size={14} className="text-brand-primary" />
            Terms &amp; Disclosures
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Terms of Service &amp; Donation Disclosures
          </h1>
          <p className="text-brand-muted text-sm md:text-base mt-3">
            Last Updated: September 2026 • Community Alternative Research and Development (CARD)
          </p>
        </div>

        <div className="space-y-8 text-brand-deep text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              1. General Terms of Use
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. All content, images, photographic documentation of community colonies, and published research are the intellectual property of CARD.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              2. Donations &amp; Tax Exemption Receipts
            </h2>
            <p>
              All financial donations made to CARD are voluntary and non-refundable, except in the case of verified duplicate or fraudulent transactions reported within 7 days. Donations made by Indian citizens/entities qualify for 50% deduction under Section 80G of the Income Tax Act, 1961.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              3. Regulatory Compliance &amp; Accountability
            </h2>
            <p>
              CARD operates in full accordance with the Andhra Pradesh Societies Registration Act (Reg No. 468/1995), the Ministry of Home Affairs FCRA regulations, and the Ministry of Corporate Affairs CSR rules.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-light flex items-center justify-between text-xs text-brand-muted">
          <Link to="/" className="text-brand-primary font-bold hover:underline">
            ← Return to Home
          </Link>
          <Link to="/privacy-policy" className="text-brand-deep font-semibold hover:underline">
            Read Privacy Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
