import { Users, GraduationCap, Sparkles, HeartPulse, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface BeneficiaryGroup {
  title: string;
  subtitle: string;
  description: string;
  impactPoints: string[];
  icon: typeof Users;
  badge: string;
  image: string;
}

const groups: BeneficiaryGroup[] = [
  {
    title: 'Yanadi & Indigenous Tribal Families',
    subtitle: 'Scheduled Tribe Colonies',
    description: 'Indigenous families historically living in vulnerable thatch dwellings, receiving secure land rights, permanent disaster-resilient housing, and piped water.',
    impactPoints: [
      '450+ Permanent brick houses constructed',
      'Community drinking water borewells',
      'Legal land titles (Pattas) secured',
      'Sanitation & solar lighting infrastructure',
    ],
    icon: Users,
    badge: 'Tribal Upliftment',
    image: '/images/hero_village_outreach.jpg',
  },
  {
    title: 'Underprivileged Rural Children',
    subtitle: 'Primary & High School Students',
    description: 'First-generation learners in forest settlements supported with comprehensive educational kits, bridge schooling, nutrition, and girl-child scholarships.',
    impactPoints: [
      '1,200+ Annual school learning kits',
      'Evening tutorial centers in remote hamlets',
      'Girl-child retention & anti-child-marriage campaigns',
      'Nutritional breakfasts & hygiene kits',
    ],
    icon: GraduationCap,
    badge: 'Education & Child Rights',
    image: '/images/clothing_distribution_kids.jpg',
  },
  {
    title: 'Women Artisans & Smallholder Farmers',
    subtitle: 'Self-Help Groups & Producers',
    description: 'Empowering rural women through collective broom-making enterprises, community plant nurseries under MGNREGS, and sustainable micro-entrepreneurship.',
    impactPoints: [
      '300+ Women organized into broom cooperatives',
      'MGNREGS community tree nurseries raising saplings',
      'Direct market linkages and fair wage negotiations',
      'Financial literacy & bank account access',
    ],
    icon: Sparkles,
    badge: 'Women Empowerment',
    image: '/images/melania_1.jpg',
  },
  {
    title: 'Elderly Destitute & Differently-Abled',
    subtitle: 'Community Care & Rehabilitation',
    description: 'Ensuring social security, physical rehabilitation, daily nutrition, and dignified healthcare for vulnerable individuals without family support.',
    impactPoints: [
      'Abilis Foundation mobility aid distributions',
      'Monthly emergency dry ration grocery kits',
      'Access to government pensions and health cards',
      'Community health checkup camps',
    ],
    icon: HeartPulse,
    badge: 'Dignity & Care',
    image: '/images/glimpses_elderly_interaction.jpg',
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/40 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            Grassroots Focus
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Who We Help
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            CARD focuses directly on the most vulnerable, unorganized, and marginalized sections of rural society across Andhra Pradesh.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-brand-light shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* Image on left for sm+, top for mobile */}
                <div className="sm:w-2/5 relative overflow-hidden aspect-[4/3] sm:aspect-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-dark shadow-xs border border-brand-light">
                    {item.badge}
                  </div>
                </div>

                {/* Content on right */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-brand-primary">
                      <Icon size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">{item.subtitle}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-deep text-xs md:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <ul className="space-y-1.5 border-t border-brand-light/70 pt-3">
                      {item.impactPoints.map((point, i) => (
                        <li key={i} className="text-xs text-brand-muted flex items-center gap-1.5 font-sans">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-2">
                    <Link
                      to="/our-work"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-deep transition-colors"
                    >
                      <span>Explore Initiatives</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
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
