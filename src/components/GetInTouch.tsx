import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import Section from './Section';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function GetInTouch() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setMessage('Please provide a valid email address.');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setEmail('');
        setMessage('Thank you for joining the CARD community!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <Section className="text-center mb-14">
          <p className="text-brand-primary uppercase tracking-[0.25em] text-xs font-semibold mb-2">We'd Love to See You</p>
          <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mt-6" />
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MapPin,
              title: 'Visit Us',
              lines: ['Mittapalyam, Ellamarajupalli (Post),', 'G.D. Nellore (Mandal) — 517125,', 'Chittoor District, Andhra Pradesh'],
            },
            {
              icon: Phone,
              title: 'Call Us',
              lines: ['+91 9885429900', 'Mon – Sat, 9:00 AM – 5:00 PM'],
            },
            {
              icon: Mail,
              title: 'Email Us',
              lines: ['cardngo.org@gmail.com', 'We reply within 24 hours'],
            },
            {
              icon: Clock,
              title: 'Service Hours',
              lines: ['Monday – Saturday', '09:00 AM – 05:00 PM'],
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-soft/50 rounded-3xl p-8 text-center border border-brand-light hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mx-auto mb-5">
                <card.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-brand-dark text-lg mb-3">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-brand-muted font-sans text-sm leading-relaxed">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Newsletter + WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-brand-deep to-brand-dark rounded-3xl p-10 text-white"
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">Join the CARD Community</h3>
            <p className="text-brand-light/70 font-sans text-sm mb-6 leading-relaxed">
              Get our latest updates on community projects, success stories, and events. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-brand-primary"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-brand-primary text-white font-bold text-sm uppercase tracking-widest rounded-full px-6 py-3 hover:bg-brand-accent transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-4 text-sm font-sans text-brand-light flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-accent" /> {message}
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm font-sans text-brand-accent/90">{message}</p>
            )}
          </motion.div>

          <motion.a
            href="https://wa.me/919885429900"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block bg-brand-soft/50 rounded-3xl p-10 border border-brand-light hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center mb-5">
              <MessageCircle size={26} />
            </div>
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-3">Chat with Us on WhatsApp</h3>
            <p className="text-brand-muted font-sans leading-relaxed">
              Our team is available during service hours to answer your questions about donations, volunteering, or partnerships.
            </p>
            <span className="inline-flex items-center gap-2 mt-6 font-bold text-brand-primary hover:text-brand-deep transition-colors">
              Start a Conversation <MessageCircle size={16} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}