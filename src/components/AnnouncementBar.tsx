import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Announcement" className="bg-gradient-to-r from-brand-dark via-brand-deep to-brand-primary text-white text-xs md:text-sm py-2 px-4 relative z-50 border-b border-white/10 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase border border-amber-400/30">
            <Sparkles size={12} className="shrink-0" /> Urgent Appeal
          </span>
          <span className="font-medium text-white/95">
            Support Clean Drinking Water &amp; School Kits for 350+ Yanadi Tribal Children in Chittoor.
          </span>
          <span className="hidden sm:inline text-white/70">• All donations 80G Tax Exempt</span>
          <Link
            to="/donate"
            className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white underline underline-offset-2 ml-1 transition-colors"
          >
            <span>Contribute Now</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <button
          onClick={() => setDismissed(true)}
          className="text-white/70 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
          aria-label="Dismiss announcement"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
}
