import { Search, Coins, Handshake, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface Step {
  step: string;
  title: string;
  description: string;
  icon: typeof Search;
  tag: string;
}

const steps: Step[] = [
  {
    step: '01',
    title: 'Grassroots Need Assessment',
    description: 'Our field teams work directly inside remote Yanadi ST settlements to identify pressing survival priorities—acute water shortages, school dropouts, or hazardous thatch huts.',
    icon: Search,
    tag: 'Field Survey',
  },
  {
    step: '02',
    title: 'Transparent Direct Allocation',
    description: 'Every rupee or grant is assigned directly to tangible materials—school kits, deep borewell drilling, brick construction materials, or emergency food provisions.',
    icon: Coins,
    tag: 'Zero Leakage',
  },
  {
    step: '03',
    title: 'Community-Led Execution',
    description: 'Projects are implemented hand-in-hand with local village Panchayats, women’s self-help sanghas, and youth committees, ensuring complete local ownership.',
    icon: Handshake,
    tag: 'Active Ownership',
  },
  {
    step: '04',
    title: 'Audited Impact & 80G Receipts',
    description: 'We complete comprehensive photographic documentation, social audits, and impact reports. Donors promptly receive their official 80G tax deduction receipts.',
    icon: FileCheck,
    tag: 'Full Transparency',
  },
];

export default function HowWeHelp() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/50 border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            From Donor to Community
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            How We Help
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            A clear, 4-step transparent pathway converting your generosity into lasting, grassroots empowerment.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-3xl p-6 border border-brand-light shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-black text-3xl text-brand-primary/20 group-hover:text-brand-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-brand-light/60 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all shadow-2xs">
                      <Icon size={20} />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-brand-deep bg-brand-soft px-2.5 py-0.5 rounded-md border border-brand-light mb-2.5">
                    {item.tag}
                  </span>

                  <h3 className="font-display font-bold text-base md:text-lg text-brand-dark mb-2.5 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Verified Field Process</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
