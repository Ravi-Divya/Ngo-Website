import React from 'react';
import { Cookie, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-brand-dark py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        {/* Header */}
        <div className="border-b border-brand-light pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/60 text-brand-deep text-xs font-bold tracking-widest uppercase mb-3">
            <Cookie size={14} className="text-brand-primary" />
            Website Policy
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-brand-muted text-sm md:text-base mt-3">
            Last Updated: September 2026 • Community Alternative Research and Development (CARD)
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-brand-deep text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small data files placed on your device (computer, tablet, or mobile) when you visit our website. They help us remember your navigation preferences, ensure smooth transaction processing for donations, and analyze how visitors interact with our content to continuously improve user engagement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              2. Categories of Cookies We Use
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light">
                <h3 className="font-bold text-brand-dark text-sm sm:text-base mb-1">
                  A. Strictly Necessary &amp; Security Cookies
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted">
                  These cookies are essential for the operation of the website, enabling security protections, seamless CSRF verification, and remembering cookie consent settings.
                </p>
              </div>

              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light">
                <h3 className="font-bold text-brand-dark text-sm sm:text-base mb-1">
                  B. Performance &amp; Analytics Cookies
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted">
                  We use aggregated, anonymized analytical tools to understand how visitors navigate our pages (e.g. which programs are most viewed, average time on page, and geographic reach across Andhra Pradesh, India, and abroad). This directly helps us improve website speed, relevance, and reduce bounce rate.
                </p>
              </div>

              <div className="p-4 bg-brand-soft rounded-2xl border border-brand-light">
                <h3 className="font-bold text-brand-dark text-sm sm:text-base mb-1">
                  C. Functional Cookies
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted">
                  These allow our website to remember your selections (such as preferred donation frequency or search modal query filters) for a tailored browsing experience.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              3. Managing &amp; Disabling Cookies
            </h2>
            <p>
              You can adjust or withdraw your cookie consent at any time through your browser settings. Most browsers allow you to block cookies or notify you before a cookie is stored. Please note that disabling essential cookies may impact certain site capabilities, such as secure donation checkout forms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:cardngo1992@gmail.com" className="text-brand-primary font-bold hover:underline">
                cardngo1992@gmail.com
              </a>.
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
