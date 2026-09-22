import { ShieldCheck, HeartHandshake, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface Reason {
  title: string;
  subtitle: string;
  description: string;
  icon: typeof ShieldCheck;
}

const reasons: Reason[] = [
  {
    title: '30 Years of Unbroken Trust',
    subtitle: 'Founded in 1995',
    description: 'Three decades of consistent, uninterrupted grassroots presence. We do not operate from afar—we live and work directly alongside the communities we serve.',
    icon: Award,
  },
  {
    title: 'Direct-to-Community Model',
    subtitle: 'Minimal Administrative Overhead',
    description: 'Every contributed rupee goes directly toward tangible field deliverables: cement and bricks for homes, learning kits for kids, and safe drinking water pipes.',
    icon: Sparkles,
  },
  {
    title: 'Statutory Compliance & FCRA',
    subtitle: 'Full Legal & Audit Integrity',
    description: 'Registered under Section 12AB, 80G, FCRA (Ministry of Home Affairs), and NITI Aayog NGO Darpan with verified annual financial audits.',
    icon: ShieldCheck,
  },
  {
    title: 'Community Ownership & Sustainability',
    subtitle: 'Empowerment, Not Charity',
    description: 'We establish self-help sanghas, village committees, and livelihood cooperatives so that communities become permanently self-reliant.',
    icon: HeartHandshake,
  },
];

export default function WhySupportUs() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/40 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            The CARD Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Why Support Us?
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            When you support CARD, your contribution directly touches the ground, building permanent dignity for generations to come.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-brand-light shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-light/60 text-brand-primary flex items-center justify-center mb-5 group-hover:bg-brand-primary group-hover:text-white transition-all shadow-2xs">
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-muted block mb-1">
                    {r.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-dark mb-2.5 group-hover:text-brand-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                    {r.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Guaranteed 80G Tax Deductible</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
