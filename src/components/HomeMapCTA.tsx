import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const clusters = [
  { name: 'Gudipala Mandal', focus: 'Education & Community RO Plants' },
  { name: 'Anupu / Dasarapalli', focus: 'Yanadi Tribal Housing Colonies' },
  { name: 'Puthalapattu', focus: 'Women SHGs & Livelihoods' },
  { name: 'G.D. Nellore', focus: 'Social Audits & MGNREGS Support' },
  { name: 'Singagarapeta', focus: 'Bio-Farming & Beekeeping' },
];

export default function HomeMapCTA() {
  return (
    <section id="location-map" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-soft/30 to-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-10 mb-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Grid: Map on Left, CTA Card on Right (No full form, just high-converting CTA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Map & Field Centers */}
          <div className="lg:col-span-7 flex flex-col bg-white rounded-3xl border border-brand-light shadow-md overflow-hidden">
            {/* Google Map Embedded Frame */}
            <div className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-100">
              <iframe
                title="CARD Headquarters Location - Chittoor, Andhra Pradesh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124374.88729571343!2d79.03055964999999!3d13.2171922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38bf6ee8d207%3A0xe5a3c26b7617c5b!2sChittoor%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Clusters Strip Below Map */}
            <div className="p-5 md:p-6 bg-brand-soft/40 border-t border-brand-light flex-1 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-brand-primary uppercase tracking-widest mb-3 block">
                Primary Field Action Clusters in Chittoor:
              </span>
              <div className="flex flex-wrap gap-2">
                {clusters.map((cluster) => (
                  <div
                    key={cluster.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl border border-brand-light text-xs shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-semibold text-brand-deep">{cluster.name}</span>
                    <span className="text-slate-400 text-[10px]">({cluster.focus})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Powerful CTA Card (NOT an entire enquiry form, just a CTA!) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-brand-deep via-[#0A2540] to-brand-dark text-white rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {/* Subtle decorative circles */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-300 text-xs font-bold tracking-wider uppercase border border-white/10">
                <ShieldCheck size={14} className="text-sky-400" />
                Trusted NGO Partner Since 1995
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                  Partner With CARD For Grassroots Transformation
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Whether you are planning a corporate CSR project, seeking verified 80G tax exemptions, or wanting to visit our tribal development colonies in Chittoor, our field team is ready to assist you.
                </p>
              </div>

              {/* Key Trust Highlights */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span><strong>150+ Villages</strong> under direct community intervention</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span><strong>100% Tax Deductible</strong> with 80G &amp; 12A Certification</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span><strong>Open Field Access:</strong> Visit our community schools &amp; housing</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold rounded-full py-3.5 px-6 border border-white/20 transition-all text-sm"
                >
                  Connect With Us
                </Link>
                <Link
                  to="/donate"
                  className="flex-1 inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold rounded-full py-3.5 px-6 border border-white/20 transition-all text-sm"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            {/* Direct Instant Channels at Bottom */}
            <div className="relative z-10 pt-8 mt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <a
                href="tel:+919440270876"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sky-400 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Direct Field Call</div>
                  <div className="font-semibold text-white">+91 94402 70876</div>
                </div>
              </a>

              <a
                href="https://wa.me/919440270876?text=Hello%20CARD%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20community%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <MessageSquare size={14} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">WhatsApp Query</div>
                  <div className="font-semibold text-emerald-300">Instant Chat →</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
