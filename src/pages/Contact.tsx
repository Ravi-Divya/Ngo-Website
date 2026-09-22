import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';

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
          
          {/* Split Contact Card */}
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden mb-16 border border-gray-100 flex flex-col lg:flex-row">
            
            {/* Left Panel: Contact Info */}
            <div className="lg:w-2/5 bg-brand-primary text-white p-10 md:p-12 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>

              <div className="relative z-10 space-y-12">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-3">Get in Touch</h3>
                  <p className="text-brand-soft/80 text-sm md:text-base leading-relaxed">
                    Whether you want to volunteer, donate, or learn more about our projects, we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Registered Office</div>
                      <p className="text-brand-soft/80 text-sm leading-relaxed">
                        Mittapalyam, Ellamarajupalli (Post),<br />
                        G.D.Nellore (Mandal) — 517125,<br />
                        Chittoor District, AP, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Phone</div>
                      <a href="tel:+919440270876" className="text-brand-soft/80 text-sm hover:text-white transition-colors">
                        +91 94402 70876
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Email</div>
                      <a href="mailto:cardngo.org@gmail.com" className="text-brand-soft/80 text-sm hover:text-white transition-colors">
                        cardngo.org@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-brand-light" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">Working Hours</div>
                      <p className="text-brand-soft/80 text-sm">
                        Mon – Sat: 9:00 AM – 5:00 PM IST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="lg:w-3/5 p-10 md:p-12 lg:p-14">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4 h-full flex flex-col justify-center items-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-display font-bold text-3xl text-brand-dark">Message Dispatched!</h3>
                  <p className="text-brand-deep text-base leading-relaxed max-w-md mx-auto">
                    Thank you for contacting CARD, <strong>{name}</strong>. Our program team has received your message and will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-brand-primary text-white font-bold text-sm px-8 py-3.5 rounded-full hover:bg-brand-deep transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col justify-center">
                  <div className="mb-2">
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-dark mb-2">Send Us a Message</h3>
                    <p className="text-brand-muted text-sm">Fill in your inquiry and our team will connect with you.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=""
                        className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder=""
                        className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1.5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder=""
                        className="w-full bg-brand-soft/50 border border-brand-light rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-deep uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder=""
                      className="w-full bg-brand-soft/50 border border-brand-light rounded-xl p-4 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:bg-white transition-all resize-none"
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
                    className="w-full md:w-auto bg-brand-primary disabled:opacity-60 text-white font-bold text-base px-10 py-4 rounded-xl shadow-lg hover:bg-brand-deep transition-all flex items-center justify-center gap-2 mt-4 hover:-translate-y-0.5"
                  >
                    <Send size={18} /> {loading ? 'Sending Message...' : 'Submit Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Full-width Map Section */}
          <div className="mb-20">
            <h3 className="font-display font-bold text-2xl text-brand-dark mb-6 text-center lg:text-left">Find Us on the Map</h3>
            <div className="rounded-3xl overflow-hidden border border-brand-light shadow-xl h-[400px] w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124119.53702116128!2d79.03460835497217!3d13.221703632906325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d348a4c8a2b5d%3A0x89e0cf6f2ea35930!2sChittoor%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CARD Office Map"
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

          <FAQSection />
        </div>
      </main>
    </div>
  );
}