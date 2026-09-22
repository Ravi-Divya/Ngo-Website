import { Link } from 'react-router-dom';
import { Target, Eye, Heart, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function OurMissionSection() {
  return (
    <section id="mission" className="py-16 md:py-24 bg-white border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Our Purpose &amp; Conviction
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Mission &amp; Vision
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Addressing generational poverty and social exclusion by restoring rights, building permanent homes, and equipping children for a dignified tomorrow.
          </p>
        </div>

        {/* 2-Column Content: Left = Problem & Solution; Right = Founder & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Problem & The Change */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-brand-soft/60 border border-brand-light rounded-2xl p-6 relative shadow-xs hover:border-brand-primary/30 transition-all"
              >
                <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-3.5">
                  <Target size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">The Problem</h3>
                <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                  Remote Yanadi tribal families and rural wage labourers in Andhra Pradesh have faced severe isolation, lack of land titles, unsafe thatch huts prone to fires, seasonal water scarcity, and generational school dropouts.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-brand-soft/60 border border-brand-light rounded-2xl p-6 relative shadow-xs hover:border-brand-primary/30 transition-all"
              >
                <div className="w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-3.5">
                  <Heart size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-brand-dark mb-2">The Change We Create</h3>
                <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                  CARD intervenes with permanent disaster-resilient brick colonies, piped drinking water, comprehensive child educational kits, community nurseries under MGNREGS, and self-help cooperatives that secure lifelong dignity.
                </p>
              </motion.div>
            </div>

            {/* Vision & Mission Statements */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-brand-light/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Eye size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-dark">Our Vision</h4>
                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed mt-0.5">
                    A just society where unorganized, marginalized, and tribal populations enjoy equal access to resources, opportunities, civil rights, and life with dignity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-brand-light/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-brand-deep text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-dark">Our Mission</h4>
                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed mt-0.5">
                    To sustainably elevate women, children, smallholder farmers, and tribal communities through community organization, life skills, drinking water security, and civil rights empowerment.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold rounded-full px-6 py-3 text-sm shadow-md hover:bg-brand-deep transition-all"
              >
                <span>Read Our 30-Year History</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

          {/* Right Column: Founder & Government Felicitation Recognition */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border-2 border-brand-light shadow-xl p-5 w-full max-w-md relative overflow-hidden"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-inner aspect-[4/3] bg-slate-100">
                <img
                  src="/images/card_felicitation_award.jpg"
                  alt="Founder S. Ravi felicitated by Chittoor MP and District Collector"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-brand-dark/80 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 border border-white/10 shadow-xs">
                  <Award size={13} /> Official Felicitation
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                  Distinguished Recognition
                </div>
                <h4 className="font-display font-bold text-base text-brand-dark leading-snug">
                  Founder S. Ravi Honored for 30 Years of Dedicated Rural Development
                </h4>
                <p className="text-brand-muted text-xs leading-relaxed">
                  Felicitated by Chittoor MP <strong>Sri Daggumalla Prasada Rao garu</strong>, District Collector <strong>Sri Sumit Kumar garu, IAS</strong>, and CHUDA Chairperson <strong>Smt. Katari Hemalatha garu</strong>.
                </p>
                <div className="pt-2 border-t border-brand-light/70 text-center">
                  <span className="font-serif italic text-brand-primary font-medium text-xs">
                    "Building resilience and human dignity, one village at a time."
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
