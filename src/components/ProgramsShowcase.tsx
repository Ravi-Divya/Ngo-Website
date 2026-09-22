import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
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
  highlights: string[];
  icon: typeof TreePine;
  link: string;
  image: string;
}

const programs: Program[] = [
  {
    id: 'mgnregs',
    title: 'MGNREGS SSS Group Formation',
    tagline: 'Awareness programs, community nursery raising & rural wage employment in Gudipala Gram Panchayats.',
    highlights: [
      '5,000+ timber & fruit saplings raised in community nurseries',
      'Direct wage employment under Mahatma Gandhi NREGS scheme',
      'Soil conservation & groundwater recharge check-dams',
    ],
    icon: TreePine,
    link: '/mgnregs',
    image: '/images/mgnregs_1.jpg',
  },
  {
    id: 'lacim',
    title: 'LACIM Tribal Rehabilitation & Housing',
    tagline: 'Constructing disaster-resilient brick colonies, sanitation, and child bridge education in Yanadi ST settlements.',
    highlights: [
      'Permanent brick housing with legal government land titles (Pattas)',
      'Individual household sanitation units to prevent open defecation',
      'Solar street lighting and paved village community pathways',
    ],
    icon: Users,
    link: '/lacim',
    image: '/images/lacim_1.jpg',
  },
  {
    id: 'otf',
    title: 'OTF Girl Child Education Support',
    tagline: 'Supplying annual learning kits, backpacks, uniforms, and evening academic tutoring in Dasarapalli ST Colony.',
    highlights: [
      'Free school backpacks, notebooks, geometries, and uniforms',
      'Evening tutorial centers in remote settlements to prevent dropouts',
      'Girl child retention incentives and anti-child-marriage campaigns',
    ],
    icon: BookOpen,
    link: '/otf',
    image: '/images/otf_1.jpg',
  },
  {
    id: 'melania',
    title: 'Melania Livelihoods — Broom Makers',
    tagline: 'Empowering tribal women broom makers of Puthalapattu with working capital, tools, and collective marketing.',
    highlights: [
      'Organized into self-sustaining women’s producer collectives',
      'Direct market access eliminating exploitative middlemen',
      'Fair daily wages & micro-savings accounts in Canara Bank',
    ],
    icon: HeartHandshake,
    link: '/melania',
    image: '/images/melania_1.jpg',
  },
  {
    id: 'water',
    title: 'Drinking Water & Sanitation Infrastructure',
    tagline: 'Deep borewells, overhead storage tanks, and safe piped drinking water directly to Yanadi households.',
    highlights: [
      '450-ft solar-powered deep borewells in drought-prone areas',
      '5,000-liter overhead storage tanks with community taps',
      'Eradicating waterborne illnesses among tribal children',
    ],
    icon: Droplets,
    link: '/our-work',
    image: '/images/water_infrastructure_1.jpg',
  },
  {
    id: 'pollination',
    title: 'The Pollination — Food Grains Relief',
    tagline: 'Emergency dry grocery kits and food grain security for daily wage families during seasonal crises.',
    highlights: [
      'Essential dry ration packets (rice, lentils, cooking oil, spices)',
      'Immediate crisis assistance during floods and lockdowns',
      'Nutritional supplements for pregnant mothers & elderly',
    ],
    icon: Utensils,
    link: '/pollination',
    image: '/images/pollination_1.jpg',
  },
];

const AUTOPLAY_INTERVAL = 3000; // Automatically scrolls every 3 seconds

export default function ProgramsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  // Automatically scroll every 3 seconds, pause when hovered
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentIndex]);

  return (
    <section id="our-programs" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-soft/40 to-white border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-6xl">
        
        {/* Section Header - Clean Heading without subtitle/badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
        </div>

        {/* Screen-Like Box Frame */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-white rounded-3xl border-2 border-brand-light/90 shadow-xl overflow-hidden relative"
        >
          {/* Top Window Screen Bar (Clean Light Mode) */}
          <div className="bg-slate-50 border-b border-brand-light/80 px-4 sm:px-6 py-3.5 flex items-center justify-between">
            {/* Left 3 Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] shadow-xs inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-xs inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-xs inline-block" />
            </div>

            {/* Slide Index Counter */}
            <span className="text-xs font-mono font-bold text-brand-muted">
              {currentIndex + 1} / {programs.length}
            </span>
          </div>

          {/* Animated 3-second Progress Line */}
          {!isHovered && (
            <div className="w-full h-1 bg-brand-light/60 overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                className="h-full bg-brand-primary"
              />
            </div>
          )}

          {/* Side-by-Side Horizontal Sliding Carousel Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {programs.map((prog) => {
                const Icon = prog.icon;
                return (
                  <div
                    key={prog.id}
                    className="w-full shrink-0 p-6 sm:p-8 md:p-10 flex items-center"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
                      {/* Left: Program Image (Clean, No Overlay Pills / Icons) */}
                      <div className="md:col-span-5 relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md border-2 border-white">
                          <img
                            src={prog.image}
                            alt={prog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Right: Program Information & CTAs */}
                      <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                            <Icon size={16} />
                            <span>Community Initiative</span>
                          </div>

                          <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark leading-tight mb-2.5">
                            {prog.title}
                          </h3>

                          <p className="text-brand-deep text-sm sm:text-base leading-relaxed mb-4 font-sans">
                            {prog.tagline}
                          </p>

                          {/* Key Highlights with Green Checkmarks */}
                          <div className="space-y-2 pt-2 border-t border-brand-light/70">
                            {prog.highlights.map((point, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-deep">
                                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Dual Action CTAs */}
                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <Link
                            to={prog.link}
                            className="bg-brand-primary hover:bg-brand-deep text-white font-bold py-3 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group cursor-pointer"
                          >
                            <span>Explore Program Details</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </Link>

                          <Link
                            to="/donate"
                            className="bg-brand-soft hover:bg-brand-light text-brand-primary font-bold py-3 px-6 rounded-full text-sm border border-brand-light transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            <Heart size={16} />
                            <span>Support This Program</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Pagination Dots */}
          <div className="bg-slate-50 border-t border-brand-light/80 px-6 py-4 flex items-center justify-center gap-2">
            {programs.map((prog, idx) => (
              <button
                key={prog.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-brand-primary shadow-xs'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-brand-primary/50'
                }`}
                aria-label={`Jump to ${prog.title}`}
                title={prog.title}
              />
            ))}
          </div>
        </div>

        {/* Global Bottom Banner CTA */}
        <div className="mt-10 bg-gradient-to-r from-brand-soft via-white to-brand-soft rounded-3xl p-6 sm:p-8 border border-brand-light shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-display font-bold text-lg sm:text-xl text-brand-dark mb-1">
              Want to support or adopt one of our grassroots programs?
            </h4>
            <p className="text-brand-muted text-xs sm:text-sm max-w-xl">
              All contributions directly purchase school kits, construct permanent tribal homes, or establish community borewells. 100% tax deductible under Section 80G.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/donate"
              className="bg-brand-primary hover:bg-brand-deep text-white font-bold py-3 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <Heart size={15} />
              <span>Donate Now</span>
            </Link>

            <Link
              to="/contact"
              className="border-2 border-brand-light hover:border-brand-primary text-brand-dark font-bold py-2.5 px-5 rounded-full text-sm bg-white hover:bg-brand-soft transition-all"
            >
              <span>Partner With Us</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
