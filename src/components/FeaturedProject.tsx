import { Link } from 'react-router-dom';
import { MapPin, Users, Droplets, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeaturedProject() {
  const goal = 500000;
  const raised = 360000;
  const percent = Math.round((raised / goal) * 100);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-soft/30 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-700 bg-amber-100 font-bold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3 border border-amber-200">
            Current Appeal &bull; High Priority
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Featured Active Campaign
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Our most urgent field initiative requiring immediate community and donor intervention.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-3xl border-2 border-brand-light shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image Side */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full overflow-hidden bg-slate-900">
              <img
                src="/images/water_infrastructure_1.jpg"
                alt="Clean Drinking Water Infrastructure for Yanadi Tribal Colony"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-brand-primary text-white font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Droplets size={14} /> Priority Water Mission
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-200 mb-1">
                  <MapPin size={14} /> Anupu ST Colony, Chittoor District, AP
                </div>
                <div className="text-sm font-medium text-white/90">
                  Target: 180 Tribal Households &bull; 60 Schoolchildren
                </div>
              </div>
            </div>

            {/* Right Details Side */}
            <div className="lg:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-wider">
                  <Users size={16} />
                  <span>Yanadi Tribal Rehabilitation</span>
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-dark leading-tight">
                  Clean Drinking Water &amp; Sanitation Pipeline for Anupu Tribal Colony
                </h3>

                <p className="text-brand-deep text-sm md:text-base leading-relaxed font-sans">
                  The indigenous Yanadi families in Anupu walk over 2.5 kilometers each day across rocky terrain to fetch untreated stream water, causing chronic waterborne illnesses among young children. CARD is drilling a 450-ft solar borewell, installing a 5,000-liter overhead storage system, and connecting filtered pipeline taps directly to homes.
                </p>

                {/* Key Benefits Pills */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <div className="bg-brand-soft p-2.5 rounded-xl border border-brand-light text-xs font-semibold text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>Solar-Powered Borewell</span>
                  </div>
                  <div className="bg-brand-soft p-2.5 rounded-xl border border-brand-light text-xs font-semibold text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>5,000L Overhead Tank</span>
                  </div>
                  <div className="bg-brand-soft p-2.5 rounded-xl border border-brand-light text-xs font-semibold text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>Household Water Taps</span>
                  </div>
                  <div className="bg-brand-soft p-2.5 rounded-xl border border-brand-light text-xs font-semibold text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    <span>Individual Toilets</span>
                  </div>
                </div>
              </div>

              {/* Progress & CTA Area */}
              <div className="space-y-4 pt-4 border-t border-brand-light">
                {/* Progress Numbers */}
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-2xl font-display font-black text-brand-dark">₹3,60,000</span>
                    <span className="text-xs text-brand-muted ml-1">raised of ₹5,00,000 goal</span>
                  </div>
                  <span className="font-display font-bold text-lg text-brand-primary">{percent}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-brand-primary to-sky-400 h-full rounded-full"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <span>80G Tax-Deductible Contribution</span>
                  <span className="font-semibold text-amber-700">72% Completed &bull; Phase 2</span>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/donate"
                    className="flex-1 min-w-[200px] bg-brand-primary hover:bg-brand-deep text-white font-bold py-3.5 px-6 rounded-full text-center text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Heart size={16} />
                    <span>Support This Project Now</span>
                  </Link>

                  <Link
                    to="/contact"
                    className="border-2 border-brand-light hover:border-brand-primary text-brand-deep font-bold py-3 px-6 rounded-full text-center text-sm transition-all"
                  >
                    <span>CSR Inquiries</span>
                  </Link>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-brand-muted justify-center">
                  <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
                  <span>Verified by CARD Field Team &bull; Regular Video &amp; Photo Progress Updates</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
