import { Link } from 'react-router-dom';
import { BookOpen, Users, HeartHandshake, TreePine, Utensils, Droplets, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramCard {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
  icon: typeof BookOpen;
}

const programs: ProgramCard[] = [
  {
    id: 'mgnregs',
    title: 'MGNREGS Social Forestry & Employment',
    category: 'Environment & Livelihood',
    description: 'Empowering wage labourers through Shrama Shakthi Sangha (SSS) groups, raising community tree nurseries, and groundwater recharging in Gudipala GPs.',
    icon: TreePine,
    link: '/mgnregs',
    image: '/images/mgnregs_1.jpg',
  },
  {
    id: 'lacim',
    title: 'LACIM Tribal Rehabilitation & Housing',
    category: 'Rehabilitation & Housing',
    description: 'Constructing disaster-resilient brick colonies with secure land rights, sanitation, and child bridge education in remote Yanadi ST settlements.',
    icon: Users,
    link: '/lacim',
    image: '/images/lacim_1.jpg',
  },
  {
    id: 'otf',
    title: 'OTF Girl Child Education Support',
    category: 'Quality Education',
    description: 'Supplying annual learning kits, uniforms, and evening academic tutoring for underprivileged tribal girls in Dasarapalli ST Colony.',
    icon: BookOpen,
    link: '/otf',
    image: '/images/otf_1.jpg',
  },
  {
    id: 'melania',
    title: 'Melania Livelihoods — Broom Makers',
    category: 'Women Empowerment',
    description: 'Organizing marginalized tribal women broom makers of Puthalapattu into self-sustaining collectives with fair wage access and working capital.',
    icon: HeartHandshake,
    link: '/melania',
    image: '/images/melania_1.jpg',
  },
  {
    id: 'pollination',
    title: 'The Pollination Project — Food Relief',
    category: 'Nutrition & Crisis Support',
    description: 'Emergency grocery kits and food grain security for landless daily wage families in Buchanna Kandiga and Singagarapeta.',
    icon: Utensils,
    link: '/pollination',
    image: '/images/pollination_1.jpg',
  },
  {
    id: 'water',
    title: 'Drinking Water & Sanitation Infrastructure',
    category: 'Water Security',
    description: 'Installing deep borewells, overhead tanks, household sanitation units, and safe water pipelines to eliminate waterborne diseases.',
    icon: Droplets,
    link: '/our-work',
    image: '/images/water_infrastructure_1.jpg',
  },
];

export default function OurProgramsSection() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Core Action Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Six comprehensive grassroots programs delivering sustainable transformation in rural Andhra Pradesh.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-light shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col"
              >
                <div className="relative h-48 md:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-dark shadow-2xs">
                    {prog.category}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <div className="w-9 h-9 bg-brand-primary/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-xs">
                      <Icon size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-dark mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {prog.title}
                  </h3>
                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                    {prog.description}
                  </p>
                  <Link
                    to={prog.link}
                    className="inline-flex items-center gap-2 font-bold text-xs md:text-sm text-brand-primary hover:text-brand-deep transition-colors pt-3 border-t border-brand-light/70"
                  >
                    <span>Read Program Details</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-brand-soft hover:bg-brand-light text-brand-primary font-bold px-7 py-3 rounded-full text-sm border border-brand-light transition-all shadow-2xs"
          >
            <span>View All Operational Sectors &amp; Reports</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
