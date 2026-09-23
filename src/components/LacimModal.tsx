import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LacimModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup every time the website is opened
    // Check if dismissed in this specific browser session to avoid re-triggering on internal route clicks
    const hasSeenInSession = sessionStorage.getItem('card_lacim_popup_seen');
    if (!hasSeenInSession) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('card_lacim_popup_seen', 'true');
    setIsOpen(false);
  };

  const handleDonateClick = () => {
    handleClose();
    navigate('/donate');
  };

  const handleLearnMore = () => {
    handleClose();
    navigate('/lacim');
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dimmed Backdrop without blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container — Matching Reference Image 2 Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lacim-modal-title"
            className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl z-10 my-auto border border-brand-light"
          >
            {/* Top Close Button (Image 2 style) */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-black flex items-center justify-center shadow-md transition-transform hover:scale-105 cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            {/* Top Image: Authentic Underprivileged Tribal Child */}
            <div className="relative w-full h-56 sm:h-64 bg-slate-900 overflow-hidden">
              <img
                src="/images/tribal_child_help.jpg"
                alt="Underprivileged tribal child in need of care and nutrition"
                className="w-full h-full object-cover object-[center_28%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 bg-brand-dark/95 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>Urgent Appeal &bull; Tribal Child Welfare</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 text-center space-y-4">
              <h2
                id="lacim-modal-title"
                className="text-2xl sm:text-3xl font-display font-bold text-brand-dark tracking-tight leading-snug"
              >
                Help Vulnerable Children in Urgent Need
              </h2>

              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                In remote tribal hamlets, underprivileged children battle extreme poverty, hunger, and lack of basic healthcare. Your compassion provides daily nutrition, medical aid, clothing, and education. Every small contribution saves and rebuilds a life.
              </p>

              {/* Primary Action Button */}
              <div className="pt-2">
                <button
                  onClick={handleDonateClick}
                  className="w-full bg-[#0369A1] hover:bg-[#0284C7] text-white font-display font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart size={18} className="fill-white" />
                  <span>DONATE NOW TO HELP A CHILD</span>
                </button>
              </div>

              {/* Secondary Navigation Link */}
              <div className="pt-1">
                <button
                  onClick={handleLearnMore}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary hover:text-brand-deep transition-colors cursor-pointer"
                >
                  <span>Learn how CARD supports vulnerable tribal families</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
