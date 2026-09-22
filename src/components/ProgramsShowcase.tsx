import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Heart,
  Sparkles,
  TreePine,
  Users,
  BookOpen,
  HeartHandshake,
  Utensils,
  Droplets,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

interface Program {
  id: string;
  title: string;
  tagline: string;
  category: string;
  metric: string;
  impactHighlight: string;
  icon: typeof TreePine;
  link: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 'mgnregs',
    title: 'MGNREGS SSS Group Formation',
    tagline: 'Awareness programs, community nursery raising & rural wage employment in Gudipala Gram Panchayats.',
    category: 'Ecology & Livelihood',
    metric: '300+ Wage Workers',
    impactHighlight: '5,000+ saplings cultivated in community nurseries',
    icon: TreePine,
    link: '/mgnregs',
    image: '/images/mgnregs_1.jpg',
  },
  {
    id: 'lacim',
    title: 'LACIM Tribal Rehabilitation',
    tagline: 'Permanent disaster-resilient brick colonies, sanitation, and child education in Yanadi ST settlements.',
    category: 'Rehabilitation & Housing',
    metric: '450+ Homes Built',
    impactHighlight: 'Land titles (Pattas) & permanent shelter for families',
    icon: Users,
    link: '/lacim',
    image: '/images/lacim_1.jpg',
  },
  {
    id: 'otf',
    title: 'OTF Girl Child Education Support',
    tagline: 'Supply of learning materials, backpacks, uniforms, and evening academic tutoring in Dasarapalli ST Colony.',
    category: 'Child Education',
    metric: '500+ Girl Students',
    impactHighlight: 'Zero dropouts through evening tutorial centers',
    icon: BookOpen,
    link: '/otf',
    image: '/images/otf_1.jpg',
  },
  {
    id: 'melania',
    title: 'Melania Livelihoods — Broom Makers',
    tagline: 'Empowering tribal women broom makers of Puthalapattu with livelihood support & enterprise.',
    category: 'Women Empowerment',
    metric: '150+ Women Artisans',
    impactHighlight: 'Direct market linkages and collective fair wages',
    icon: HeartHandshake,
    link: '/melania',
    image: '/images/melania_1.jpg',
  },
  {
    id: 'water',
    title: 'Drinking Water & Sanitation Infrastructure',
    tagline: 'Deep borewells, overhead tanks, and safe piped drinking water to eliminate seasonal water scarcity.',
    category: 'Water Security',
    metric: '25+ Borewells Installed',
    impactHighlight: 'Safe drinking water piped directly to households',
    icon: Droplets,
    link: '/our-work',
    image: '/images/water_infrastructure_1.jpg',
  },
  {
    id: 'pollination',
    title: 'The Pollination — Food Grains Relief',
    tagline: 'Emergency dry grocery kits and food grain security for daily wage families in Buchanna Kandiga & Singagara Peta.',
    category: 'Emergency Relief',
    metric: '15,000+ Ration Kits',
    impactHighlight: 'Direct nutritional support during seasonal hardship',
    icon: Utensils,
    link: '/pollination',
    image: '/images/pollination_1.jpg',
  },
];

export default function ProgramsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Approximate active card index based on scroll position
    const cardWidth = 380;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), programs.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (ref) ref.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 390;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 390;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section id="our-programs" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-soft/40 to-white border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Section Header with Left Content & Right Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/70 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-light mb-3">
              <Sparkles size={13} />
              <span>Flagship Field Initiatives</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
              Our Programs
            </h2>
            <div className="w-16 h-1 bg-brand-primary mt-3.5 rounded-full" />
            <p className="text-brand-deep text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Explore CARD’s active grassroots programs driving sustainable livelihoods, child education, permanent housing, and water security across 150+ villages.
            </p>
          </div>

          {/* Side-by-Side Scroll Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-brand-light bg-white text-brand-dark flex items-center justify-center shadow-xs hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-brand-light bg-white text-brand-dark flex items-center justify-center shadow-xs hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Side-by-Side Horizontal Scrollable Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="w-[310px] sm:w-[360px] md:w-[390px] shrink-0 snap-start bg-white rounded-3xl border border-brand-light shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-xs border border-brand-light">
                      {prog.category}
                    </div>

                    {/* Metric Tag on Image Bottom */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <div className="bg-brand-primary/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold shadow-xs">
                        {prog.metric}
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-brand-dark group-hover:text-brand-primary transition-colors mb-2.5 line-clamp-1">
                      {prog.title}
                    </h3>

                    <p className="text-brand-deep text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {prog.tagline}
                    </p>

                    {/* Impact highlight pill */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-2 rounded-xl">
                      <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                      <span className="line-clamp-1">{prog.impactHighlight}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action CTAs (Side by side buttons inside each card) */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-brand-light flex items-center gap-3">
                    {/* Primary CTA: Explore Details */}
                    <Link
                      to={prog.link}
                      className="flex-1 bg-brand-primary hover:bg-brand-deep text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-xs flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Explore</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {/* Secondary CTA: Support / Donate */}
                    <Link
                      to="/donate"
                      className="bg-brand-soft hover:bg-brand-light text-brand-primary font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm border border-brand-light transition-all flex items-center justify-center gap-1.5"
                      title={`Support ${prog.title}`}
                    >
                      <Heart size={14} />
                      <span>Support</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Progress Dot Indicators */}
        <div className="flex items-center justify-center gap-2 pt-2 pb-6">
          {programs.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToCard(idx)}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                activeIndex === idx
                  ? 'w-7 h-2.5 bg-brand-primary shadow-xs'
                  : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to program slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Section CTA Banner */}
        <div className="mt-8 bg-gradient-to-r from-brand-soft via-white to-brand-soft rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-light shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">
              Direct Grassroots Partnership
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-dark">
              Want to support or adopt a specific program in Chittoor?
            </h3>
            <p className="text-brand-muted text-xs sm:text-sm max-w-xl">
              All contributions directly purchase school kits, construct permanent tribal homes, or establish community borewells. 100% tax deductible under Section 80G.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/donate"
              className="bg-brand-primary hover:bg-brand-deep text-white font-bold py-3.5 px-7 rounded-full text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Heart size={16} />
              <span>Donate to a Program</span>
            </Link>

            <Link
              to="/contact"
              className="border-2 border-brand-light hover:border-brand-primary text-brand-dark font-bold py-3 px-6 rounded-full text-sm bg-white hover:bg-brand-soft transition-all inline-flex items-center gap-2"
            >
              <span>CSR &bull; Partner With Us</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
