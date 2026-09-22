import { Calendar, MapPin, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface TrustStat {
  value: string;
  label: string;
  sublabel: string;
  icon: typeof Calendar;
}

const trustStats: TrustStat[] = [
  {
    value: '30+',
    label: 'Years of Service',
    sublabel: 'Dedicated field action since 1995',
    icon: Calendar,
  },
  {
    value: '150+',
    label: 'Villages & Settlements',
    sublabel: 'Across Chittoor District, AP',
    icon: MapPin,
  },
  {
    value: '50,000+',
    label: 'Lives Empowered',
    sublabel: 'Tribal families, women & youth',
    icon: Users,
  },
  {
    value: '80G & 12A',
    label: 'Certified Non-Profit',
    sublabel: 'Tax-exempt donations & FCRA',
    icon: ShieldCheck,
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-gradient-to-r from-[#0F2847] via-[#0A1E36] to-[#081729] text-white py-8 border-y border-[#1E4570]/70 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3.5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-sky-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="font-bold text-white/90 text-sm mt-1">
                    {stat.label}
                  </div>
                  <div className="text-white/60 text-xs hidden sm:block mt-0.5 font-sans">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
