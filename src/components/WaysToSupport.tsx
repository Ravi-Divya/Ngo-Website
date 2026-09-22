import { Link } from 'react-router-dom';
import { Heart, Users, Building, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SupportOption {
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  icon: typeof Heart;
  highlight?: boolean;
}

const options: SupportOption[] = [
  {
    title: 'Donate Online / Bank Transfer',
    tagline: '80G Tax-Exempt Giving',
    description: 'Every donation directly purchases school kits, construction materials for tribal homes, or clean water pipelines.',
    ctaText: 'Make a Donation',
    ctaLink: '/donate',
    icon: Heart,
    highlight: true,
  },
  {
    title: 'Volunteer Your Time & Skills',
    tagline: 'Field or Remote Engagement',
    description: 'Join our team on the ground for weekend camps, child tutoring, healthcare drives, or assist remotely in grant writing.',
    ctaText: 'Become a Volunteer',
    ctaLink: '/contact#volunteer',
    icon: Users,
  },
  {
    title: 'Corporate CSR Partnerships',
    tagline: 'CSR-1 Registered Entity',
    description: 'Collaborate on sustainable corporate social responsibility initiatives—solar borewells, sanitation, and community tree nurseries.',
    ctaText: 'Explore CSR Synergies',
    ctaLink: '/contact',
    icon: Building,
  },
  {
    title: 'Sponsor a Child or Community Project',
    tagline: 'Targeted Sponsorship',
    description: 'Directly fund a girl child’s annual education or adopt a drinking water point in a remote Yanadi colony.',
    ctaText: 'Sponsor a Project',
    ctaLink: '/donate',
    icon: GraduationCap,
  },
];

export default function WaysToSupport() {
  return (
    <section id="ways-to-support" className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Get Involved
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Ways to Support
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Whether as an individual donor, passionate volunteer, or institutional CSR partner, there is a meaningful way for you to make an impact.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                  opt.highlight
                    ? 'bg-gradient-to-b from-brand-soft to-white border-brand-primary/40 shadow-md hover:shadow-xl'
                    : 'bg-white border-brand-light shadow-xs hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      opt.highlight
                        ? 'bg-brand-primary text-white shadow-xs'
                        : 'bg-brand-light/60 text-brand-primary group-hover:bg-brand-primary group-hover:text-white'
                    }`}>
                      <Icon size={22} />
                    </div>
                    {opt.highlight && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-primary text-white px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider block mb-1">
                    {opt.tagline}
                  </span>

                  <h3 className="font-display font-bold text-lg text-brand-dark mb-2.5 group-hover:text-brand-primary transition-colors">
                    {opt.title}
                  </h3>

                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed mb-6 font-sans">
                    {opt.description}
                  </p>
                </div>

                <Link
                  to={opt.ctaLink}
                  className={`w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    opt.highlight
                      ? 'bg-brand-primary text-white hover:bg-brand-deep shadow-xs'
                      : 'bg-brand-soft text-brand-primary hover:bg-brand-light border border-brand-light'
                  }`}
                >
                  <span>{opt.ctaText}</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
