/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Youtube,
  CheckCircle2,
} from 'lucide-react';

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Work', path: '/our-work' },
  { name: 'Impact Stories', path: '/impact' },
  { name: 'Photo Gallery', path: '/gallery' },
  { name: 'Case Study', path: '/case-study' },
  { name: 'Contact Us', path: '/contact' },
];

const programLinks = [
  { name: 'MGNREGS', path: '/mgnregs' },
  { name: 'LACIM', path: '/lacim' },
  { name: 'OTF/FEP', path: '/otf' },
  { name: 'Melania Foundation', path: '/melania' },
  { name: 'The Pollination Project', path: '/pollination' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/card-india', icon: <Linkedin size={18} /> },
  { label: 'Instagram', href: 'https://www.instagram.com/cardorganization_india/', icon: <Instagram size={18} /> },
  { label: 'X (Twitter)', href: 'https://x.com/Card_India_', icon: <XIcon width={18} height={18} /> },
  { label: 'YouTube', href: 'https://www.youtube.com/@cardorganization', icon: <Youtube size={18} /> },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1BYGC4sDZu/?mibextid=wwXIfr', icon: <Facebook size={18} /> },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!EMAIL_RE.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
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
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1E36] to-[#071628] text-white pt-12 pb-6 border-t border-[#16385C]/60 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-radial-gradient(circle,rgba(255,255,255,0.04) 0, rgba(255,255,255,0.00) 1px)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#16385C]/70">
          {/* Col 1: About */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label="CARD — Home">
              <img src="/images/card-logo.png" alt="CARD logo" className="h-11 w-auto object-contain" />
              <span className="font-display font-extrabold text-3xl tracking-tight text-white">CARD</span>
            </Link>
            <p className="text-brand-light/75 leading-relaxed font-sans text-xs max-w-sm">
              Community Alternative Research and Development — empowering rural communities through education, healthcare, water, sanitation, and sustainable livelihoods since 1995.
            </p>
            <div className="flex gap-2.5 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-8 h-8 bg-white/10 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-all group shadow-sm"
                >
                  <span className="text-white group-hover:scale-110 transition-transform">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-display font-bold mb-4 text-white uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5 font-sans text-brand-light/80 text-xs">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-display font-bold mb-4 text-white uppercase tracking-widest">Programs</h4>
            <ul className="space-y-2.5 font-sans text-brand-light/80 text-xs">
              {programLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-white hover:translate-x-1 transition-all inline-block">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Newsletter */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <h4 className="text-xs font-display font-bold mb-3 text-white uppercase tracking-widest">Contact Us</h4>
              <div className="space-y-2 font-sans text-brand-light/80 text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Chittoor, Andhra Pradesh, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={14} className="text-sky-400 shrink-0" />
                  <a href="tel:+919885429900" className="hover:text-white transition-colors">+91 9885429900</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-sky-400 shrink-0" />
                  <a href="mailto:cardngo.org@gmail.com" className="hover:text-white transition-colors">cardngo.org@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Newsletter Dispatch Box */}
            <div className="pt-2 border-t border-white/10">
              {subscribed ? (
                <div className="flex items-center gap-2 bg-white/10 border border-green-400/30 rounded-xl px-4 py-2.5 text-xs text-green-300">
                  <CheckCircle2 size={15} className="shrink-0" />
                  Thank you for subscribing to our updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <p className="text-xs text-brand-light/75 leading-normal">
                    Subscribe to receive our latest stories &amp; community updates.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <input
                      id="footer-newsletter"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="flex-1 min-w-0 bg-[#0F2847] border border-[#1E4570] rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400"
                    />
                    <button
                      type="submit"
                      className="bg-brand-primary hover:bg-[#0369A1] text-white font-bold rounded-xl px-4 py-2 text-xs transition-colors shadow-sm shrink-0"
                    >
                      Subscribe
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-xs">{error}</p>}
                </form>
              )}
            </div>

            <div>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-1.5 border border-sky-400 text-sky-300 hover:bg-sky-400 hover:text-slate-900 transition-all py-1.5 px-5 rounded-full font-bold text-xs shadow-sm"
              >
                <Heart size={14} /> Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-5 text-center text-brand-light/50 text-xs font-sans">
          <p>© {currentYear} CARD — Community Alternative Research and Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}