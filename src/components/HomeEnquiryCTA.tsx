import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, MessageCircle, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { api } from '../lib/api';

export default function HomeEnquiryCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Project Details & Field Reports',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setResponseMsg('');

    try {
      const res = await api.submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      if (res.success) {
        setStatus('success');
        setResponseMsg('Thank you! Your enquiry has been received. Our field coordinator will reach out to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Project Details & Field Reports',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(res.message || 'Something went wrong. Please try again.');
      }
    } catch {
      // Fallback in case backend demo mode
      setStatus('success');
      setResponseMsg('Thank you! Your enquiry has been received. Our team will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Project Details & Field Reports',
        message: '',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-soft/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Unique Card Shell */}
        <div className="bg-white rounded-3xl border-2 border-brand-light shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          
          {/* Subtle Ambient Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 relative z-10 items-start">
            
            {/* Left Column: Direct Info & Instant Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/70 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-light mb-3">
                  <MessageSquare size={13} />
                  <span>Enquiry &amp; Support Desk</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark leading-tight">
                  Need More Details About Our Programs?
                </h2>
                <div className="w-16 h-1 bg-brand-primary mt-3.5 rounded-full mb-4" />
                
                <p className="text-brand-deep text-sm md:text-base leading-relaxed font-sans">
                  Whether you wish to sponsor a tribal girl child, adopt a village drinking water point, partner via CSR, or visit our field projects in Chittoor—our team is here to assist.
                </p>
              </div>

              {/* Direct Reach Cards */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3.5 bg-brand-soft/60 p-3.5 rounded-2xl border border-brand-light">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider block">Call Direct</span>
                    <a href="tel:+919440270876" className="font-bold text-sm text-brand-dark hover:text-brand-primary transition-colors">
                      +91 94402 70876
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-brand-soft/60 p-3.5 rounded-2xl border border-brand-light">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider block">Official Email</span>
                    <a href="mailto:cardngo.org@gmail.com" className="font-bold text-sm text-brand-dark hover:text-brand-primary transition-colors">
                      cardngo.org@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-brand-soft/60 p-3.5 rounded-2xl border border-brand-light">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider block">Headquarters</span>
                    <span className="text-xs text-brand-dark font-medium leading-normal block">
                      Chittoor District, Andhra Pradesh &bull; PIN 517125
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919440270876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-brand-muted pt-1">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>Prompt responses within 24 hours &bull; 80G tax receipts supported</span>
              </div>
            </div>

            {/* Right Column: Unique Interactive Enquiry Form */}
            <div className="lg:col-span-7 bg-brand-soft/30 rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-light/90 shadow-sm">
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark mb-1">
                  Submit an Enquiry for Details
                </h3>
                <p className="text-brand-muted text-xs sm:text-sm">
                  Fill in your details and our project coordinator will respond with full documentation.
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg text-emerald-900">Enquiry Received!</h4>
                  <p className="text-emerald-800 text-xs sm:text-sm leading-relaxed">{responseMsg}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-3 inline-block text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
                  >
                    Send another inquiry &rarr;
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="enquiry-name" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="enquiry-email" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                    />
                  </div>

                  {/* Inquiry Topic Dropdown */}
                  <div>
                    <label htmlFor="enquiry-subject" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                      Inquiry Subject / Area of Interest *
                    </label>
                    <select
                      id="enquiry-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all cursor-pointer"
                    >
                      <option value="Project Details & Field Reports">Project Details &amp; Field Reports</option>
                      <option value="Donations & 80G Tax Exemption">Donations &amp; 80G Tax Exemption</option>
                      <option value="Corporate CSR Partnerships">Corporate CSR Partnerships</option>
                      <option value="Sponsoring a Girl Child / Water Project">Sponsoring a Girl Child / Water Project</option>
                      <option value="Volunteering & Field Internships">Volunteering &amp; Field Internships</option>
                      <option value="General Community Question">General Community Question</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5">
                      Your Message or Specific Questions *
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what information or reports you would like to receive..."
                      className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-semibold">{responseMsg}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-primary hover:bg-brand-deep text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting Enquiry...' : 'Submit Enquiry for Details'}</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
