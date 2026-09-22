import { useState, FormEvent } from 'react';
import { Mail, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!EMAIL_RE.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubscribed(true);
        setEmail('');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-brand-soft/50 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-light shadow-md text-center relative overflow-hidden">
          <div className="w-14 h-14 bg-brand-light text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xs">
            <Mail size={26} />
          </div>

          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-soft px-3 py-1 rounded-full inline-block mb-3 border border-brand-light">
            Stay Connected
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-dark mb-3">
            Subscribe to Field Updates &amp; Impact News
          </h2>

          <p className="text-brand-deep text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Receive our quarterly grassroots newsletter with direct updates from tribal settlements, project completions, and audited financial summaries.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-2xl flex items-center justify-center gap-2.5 max-w-md mx-auto text-sm font-semibold"
            >
              <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
              <span>Thank you for subscribing! You will receive our next community dispatch.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-3.5 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-brand-primary hover:bg-brand-deep text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
                >
                  <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
                  <Send size={15} />
                </button>
              </div>

              {error && <p className="text-red-500 text-xs font-semibold text-left sm:text-center">{error}</p>}

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-muted pt-2">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Zero spam. You can unsubscribe anytime with one click.</span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
