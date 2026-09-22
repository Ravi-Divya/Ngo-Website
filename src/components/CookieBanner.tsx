import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'card-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[80] bg-white rounded-2xl shadow-2xl border border-brand-light p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-brand-light/50 text-brand-primary rounded-full flex items-center justify-center shrink-0">
              <Cookie size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-brand-dark mb-1.5">We value your privacy</h3>
              <p className="text-brand-muted font-sans text-xs leading-relaxed">
                We use cookies to analyze site traffic and enhance your experience. Read our{' '}
                <a href="/cookie-policy" className="text-brand-primary font-semibold hover:underline">
                  Cookie Policy
                </a>{' '}
                and{' '}
                <a href="/privacy-policy" className="text-brand-primary font-semibold hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <button
              onClick={accept}
              className="flex-1 bg-brand-primary text-white font-bold rounded-full py-2.5 hover:bg-brand-deep transition-colors"
            >
              Accept
            </button>
            <button
              onClick={accept}
              className="flex-1 border border-brand-light text-brand-deep font-bold rounded-full py-2.5 hover:bg-brand-soft transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}