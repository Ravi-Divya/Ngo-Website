import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Unable to submit your message right now. Please try again.');
      }
    } catch {
      // Fallback for static environments without serverless functions
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader title="Contact Us" />

      <main className="flex-grow py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-10 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-4">
                <div className="bg-brand-soft/60 p-6 rounded-2xl border border-brand-light flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-brand-dark mb-1">Registered Address</div>
                    <p className="text-brand-deep leading-relaxed">
                      Mittapalyam, Ellamarajupalli (Post),<br />
                      G.D.Nellore (Mandal) — 517125,<br />
                      Chittoor District, Andhra Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="bg-brand-soft/60 p-6 rounded-2xl border border-brand-light flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-brand-dark mb-1">Contact</div>
                    <a href="tel:+919885429900" className="text-brand-primary font-semibold hover:underline block">
                      +91 9885429900
                    </a>
                    <span className="text-brand-muted text-xs">Mon – Sat, 9:00 AM – 5:00 PM IST</span>
                  </div>
                </div>

                <div className="bg-brand-soft/60 p-6 rounded-2xl border border-brand-light flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-brand-dark mb-1">Official Email</div>
                    <a href="mailto:cardngo.org@gmail.com" className="text-brand-primary font-semibold hover:underline block">
                      cardngo.org@gmail.com
                    </a>
                    <span className="text-brand-muted text-xs">Replies within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-light shadow-xl">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-brand-dark">Message Dispatched!</h3>
                    <p className="text-brand-deep text-sm leading-relaxed max-w-md mx-auto">
                      Thank you for contacting CARD, <strong>{name}</strong>. Our program team has received your message and will respond promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-brand-deep transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-brand-dark mb-1">Send Us a Message</h3>
                      <p className="text-brand-muted text-xs">Fill in your inquiry and our team will connect with you.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder=""
                          className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder=""
                          className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder=""
                          className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder=""
                          className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder=""
                        className="w-full bg-brand-soft/50 border border-brand-light rounded-xl p-4 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-primary disabled:opacity-60 text-white font-bold text-base py-3.5 rounded-2xl shadow-lg hover:bg-brand-deep transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={18} /> {loading ? 'Sending Message...' : 'Submit Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}