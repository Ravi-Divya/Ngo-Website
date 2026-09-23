import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cookie, ShieldCheck, Check, X, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);

  // Cookie preference states
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);

  useEffect(() => {
    // Show on every website visit / opening after a gentle 1.2s delay
    const timer = setTimeout(() => {
      const dismissedInSession = sessionStorage.getItem('card-session-cookie-dismissed');
      if (!dismissedInSession) {
        setVisible(true);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleAllowAll = () => {
    sessionStorage.setItem('card-session-cookie-dismissed', 'allowed_all');
    localStorage.setItem('card-cookie-preferences', JSON.stringify({ necessary: true, analytics: true, functional: true }));
    setVisible(false);
  };

  const handleRejectAll = () => {
    sessionStorage.setItem('card-session-cookie-dismissed', 'rejected_all');
    localStorage.setItem('card-cookie-preferences', JSON.stringify({ necessary: true, analytics: false, functional: false }));
    setVisible(false);
  };

  const handleSavePreferences = () => {
    sessionStorage.setItem('card-session-cookie-dismissed', 'custom');
    localStorage.setItem('card-cookie-preferences', JSON.stringify({ necessary: true, analytics, functional }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie Policy & Privacy Preferences"
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[80] bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-5 md:p-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-light text-brand-primary rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
                <Cookie size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-brand-dark text-base">We value your privacy</h3>
                <span className="text-[11px] text-slate-500 font-medium">Cookie Consent & Data Protection</span>
              </div>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Dismiss cookie banner"
            >
              <X size={16} />
            </button>
          </div>

          {!showManage ? (
            /* Simple 3-Button View: Allow, Reject, Manage */
            <>
              <p className="text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed mt-3.5">
                We use cookies to ensure core website functionality and to measure anonymous traffic. Learn more in our{' '}
                <Link to="/cookie-policy" className="text-brand-primary font-semibold hover:underline">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-brand-primary font-semibold hover:underline">
                  Privacy Policy
                </Link>.
              </p>

              {/* 3 Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 mt-5">
                <button
                  onClick={handleAllowAll}
                  className="bg-brand-primary hover:bg-brand-deep text-white font-bold rounded-xl py-2.5 px-4 text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                >
                  Allow All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl py-2.5 px-4 text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Reject All
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  onClick={() => setShowManage(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:text-brand-deep font-semibold underline underline-offset-4 transition-colors cursor-pointer"
                >
                  <SlidersHorizontal size={13} />
                  <span>Manage Preferences</span>
                </button>
              </div>
            </>
          ) : (
            /* Manage Preferences View */
            <div className="mt-4 space-y-3">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-3 text-xs">
                {/* Necessary */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-emerald-600" />
                      Strictly Necessary
                    </div>
                    <div className="text-[11px] text-slate-500">Required for navigation and secure forms.</div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                    Always Active
                  </span>
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200">
                  <div>
                    <div className="font-bold text-slate-800">Analytics Cookies</div>
                    <div className="text-[11px] text-slate-500">Anonymous visitor counts & page performance.</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAnalytics(!analytics)}
                    className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                      analytics ? 'bg-brand-primary' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-transform ${
                        analytics ? 'left-5' : 'left-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Functional */}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200">
                  <div>
                    <div className="font-bold text-slate-800">Functional Cookies</div>
                    <div className="text-[11px] text-slate-500">Remembers search filters and accessibility mode.</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFunctional(!functional)}
                    className={`w-9 h-5 rounded-full transition-colors relative cursor-pointer ${
                      functional ? 'bg-brand-primary' : 'bg-slate-300'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full bg-white absolute top-[3px] transition-transform ${
                        functional ? 'left-5' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Manage Action Buttons */}
              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-brand-primary hover:bg-brand-deep text-white font-bold rounded-xl py-2 px-3 text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Check size={14} /> Save Preferences
                </button>
                <button
                  onClick={() => setShowManage(false)}
                  className="border border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold rounded-xl py-2 px-3 text-xs transition-colors cursor-pointer"
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}