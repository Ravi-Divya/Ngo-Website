import { Package, Wrench, Stethoscope, Scale } from 'lucide-react';
import { motion } from 'motion/react';

interface Activity {
  title: string;
  category: string;
  description: string;
  image: string;
  points: string[];
  icon: typeof Package;
}

const activities: Activity[] = [
  {
    title: 'Direct Relief Drives & Material Distribution',
    category: 'Essential Aid',
    description: 'Delivering direct physical aid to remote tribal colonies without intermediaries, ensuring supplies reach the most marginalized doorsteps.',
    image: '/images/glimpses_supply_distribution.jpg',
    points: [
      'School bags, notebooks, and uniforms for kids',
      'Dry ration grocery kits for destitute families',
      'Emergency tarpaulins and disaster relief materials',
    ],
    icon: Package,
  },
  {
    title: 'Vocational Training & Skill Workshops',
    category: 'Economic Independence',
    description: 'Empowering tribal women and youths through hands-on skills in artisanal production, agricultural nursery raising, and enterprise management.',
    image: '/images/melania_2.jpg',
    points: [
      'Broom-making and fiber processing techniques',
      'Tree nursery propagation & organic composting',
      'SHG financial literacy and micro-credit operations',
    ],
    icon: Wrench,
  },
  {
    title: 'Health, Hygiene & Sanitation Camps',
    category: 'Preventive Healthcare',
    description: 'Conducting community health screenings, safe drinking water chlorination demonstrations, and clean sanitation education.',
    image: '/images/glimpses_health_campaign.jpg',
    points: [
      'Doctor consultations and vital medicine distribution',
      'Adolescent girl health and hygiene education',
      'Safe water storage & domestic sanitation practices',
    ],
    icon: Stethoscope,
  },
  {
    title: 'Gram Sabha & Tribal Rights Advocacy',
    category: 'Civil Rights',
    description: 'Mobilizing Yanadi communities to actively engage in local governance, claim rightful land titles (Pattas), and monitor MGNREGS rural wage employment.',
    image: '/images/mgnregs_2.jpg',
    points: [
      'MGNREGS Shrama Shakthi Sangha social audits',
      'Securing government land pattas for families',
      'Fostering youth and women leadership in Gram Sabhas',
    ],
    icon: Scale,
  },
];

export default function WorkInAction() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/40 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            Ground Realities
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Work in Action
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Continuous, hands-on field engagements building resilience, dignity, and active self-governance across rural Andhra Pradesh.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-brand-light overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-dark shadow-2xs">
                    {act.category}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="w-9 h-9 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-xs">
                      <Icon size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                      {act.title}
                    </h3>
                    <p className="text-brand-deep text-xs md:text-sm leading-relaxed mb-4">
                      {act.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-brand-light/70">
                      {act.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-brand-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
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
