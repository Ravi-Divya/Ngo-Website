import { GraduationCap, Home, Droplets, HeartHandshake, PackageCheck, TreePine } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Metric {
  value: string;
  label: string;
  description: string;
  icon: typeof GraduationCap;
}

const metrics: Metric[] = [
  {
    value: '1,200+',
    label: 'Children Educated',
    description: 'Supplied with annual learning kits, school uniforms, and evening tutorial sessions.',
    icon: GraduationCap,
  },
  {
    value: '450+',
    label: 'Permanent Homes Built',
    description: 'Disaster-resilient brick dwellings with land titles (Pattas) for Yanadi tribal families.',
    icon: Home,
  },
  {
    value: '25+',
    label: 'Safe Water Borewells',
    description: 'Overhead tanks and piped drinking water networks eliminating seasonal scarcity.',
    icon: Droplets,
  },
  {
    value: '800+',
    label: 'Women Empowered',
    description: 'Organized into sustainable broom-making collectives and micro-savings sanghas.',
    icon: HeartHandshake,
  },
  {
    value: '15,000+',
    label: 'Emergency Grocery Kits',
    description: 'Direct dry ration relief packages provided during floods, droughts, and lockdowns.',
    icon: PackageCheck,
  },
  {
    value: '5,000+',
    label: 'Trees & Nurseries Raised',
    description: 'Community fruit and timber plantations under MGNREGS social forestry.',
    icon: TreePine,
  },
];

export default function ImpactAtAGlance() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Measurable Change
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Impact at a Glance
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Real figures reflecting 30 years of direct, verified grassroots service across 150+ Andhra Pradesh villages.
          </p>
        </div>

        {/* 6 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                className="bg-brand-soft/40 rounded-3xl p-6 md:p-7 border border-brand-light shadow-2xs hover:shadow-lg hover:border-brand-primary/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-brand-primary shadow-xs border border-brand-light flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <Icon size={24} />
                    </div>
                    <span className="font-display font-black text-2xl md:text-3xl text-brand-primary group-hover:text-brand-deep transition-colors">
                      {m.value}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-brand-dark mb-2">
                    {m.label}
                  </h3>
                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-light/60 flex items-center gap-1.5 text-[11px] font-bold text-brand-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  <span>Verified Field Benchmark</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Read Impact Report */}
        <div className="mt-12 text-center">
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold px-7 py-3 rounded-full text-sm hover:bg-brand-deep transition-all shadow-md"
          >
            <span>Read Complete Impact Documentation</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
