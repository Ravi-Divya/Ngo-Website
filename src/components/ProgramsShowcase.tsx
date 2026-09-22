import { useState, useEffect, useRef } from 'react';
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
  Pause,
  Play,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Program {
  id: string;
  title: string;
  tagline: string;
  category: string;
  metric: string;
  pillar: string;
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
    category: 'Ecology & Livelihoods',
    metric: '300+ Wage Workers',
    pillar: 'Sustainable Environment',
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
    category: 'Rehabilitation & Housing',
    metric: '450+ Homes Built',
    pillar: 'Tribal Upliftment',
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
    category: 'Child Education',
    metric: '500+ Girl Students',
    highlights: [
      'Free school backpacks, notebooks, geometries, and uniforms',
      'Evening tutorial centers in remote settlements to prevent dropouts',
      'Girl child retention incentives and anti-child-marriage campaigns',
    ],
    pillar: 'Quality Education',
    icon: BookOpen,
    link: '/otf',
    image: '/images/otf_1.jpg',
  },
  {
    id: 'melania',
    title: 'Melania Livelihoods — Broom Makers',
    tagline: 'Empowering tribal women broom makers of Puthalapattu with working capital, tools, and collective marketing.',
    category: 'Women Empowerment',
    metric: '150+ Women Artisans',
    pillar: 'Economic Independence',
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
    category: 'Water Security',
    metric: '25+ Borewells Installed',
    pillar: 'Basic Infrastructure',
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
    category: 'Emergency Relief',
    metric: '15,000+ Ration Kits',
    pillar: 'Nutrition Security',
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

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide

export default function ProgramsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, currentIndex]);

  const current = programs[currentIndex];
  const Icon = current.icon;

  return (
    <section id="our-programs" className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-soft/40 to-white border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/70 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-light mb-3">
            <Sparkles size={13} />
            <span>CARD Community Showcase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-sm md:text-base mt-3 leading-relaxed">
            Witness how our grassroots initiatives transform lives across Andhra Pradesh—auto-presented one by one.
          </p>
        </div>

        {/* Screen-Like Box Frame (Light Theme) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-white rounded-3xl border-2 border-brand-light/90 shadow-xl overflow-hidden relative"
        >
          {/* Top Window Screen Bar (Light Mode macOS Style) */}
          <div className="bg-slate-50 border-b border-brand-light/80 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            
            {/* Left 3 Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#EF4444] shadow-xs inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-xs inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-xs inline-block" />
              <span className="hidden sm:inline-block text-xs font-mono font-semibold text-brand-muted ml-3">
                CARD Program Screen &bull; {currentIndex + 1} of {programs.length}
              </span>
            </div>

            {/* Center Pill Tab */}
            <div className="hidden md:flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-brand-light shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[11px] font-bold text-brand-dark uppercase tracking-wider">
                {current.pillar}
              </span>
            </div>

            {/* Right Auto-play Status & Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-deep hover:text-brand-primary bg-white hover:bg-brand-soft px-2.5 py-1 rounded-lg border border-brand-light transition-colors cursor-pointer"
                title={isPlaying ? 'Pause Auto-play' : 'Resume Auto-play'}
              >
                {isPlaying && !isHovered ? (
                  <>
                    <Pause size={12} className="text-brand-primary" />
                    <span>Auto-Playing</span>
                  </>
                ) : (
                  <>
                    <Play size={12} className="text-emerald-600" />
                    <span>{isHovered ? 'Paused' : 'Play'}</span>
                  </>
                )}
              </button>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-7 h-7 rounded-lg bg-white hover:bg-brand-primary hover:text-white text-brand-dark flex items-center justify-center border border-brand-light transition-colors shadow-2xs cursor-pointer"
                  aria-label="Previous Program"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-7 h-7 rounded-lg bg-white hover:bg-brand-primary hover:text-white text-brand-dark flex items-center justify-center border border-brand-light transition-colors shadow-2xs cursor-pointer"
                  aria-label="Next Program"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Animated 4.5s Timer Progress Bar below window header */}
          {isPlaying && !isHovered && (
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

          {/* Single Program Screen Box (One by One) */}
          <div className="p-6 sm:p-8 md:p-10 min-h-[460px] md:min-h-[440px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center w-full"
              >
                {/* Left: Program Image & Tags (5 Columns) */}
                <div className="md:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md border-2 border-white">
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />

                    {/* Category Chip */}
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-xs border border-brand-light">
                      {current.category}
                    </div>

                    {/* Metric Tag on Bottom */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <div className="bg-brand-primary text-white px-3 py-1 rounded-lg text-xs font-bold shadow-xs">
                        {current.metric}
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Program Information & CTAs (7 Columns) */}
                <div className="md:col-span-7 space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">
                      <Icon size={16} />
                      <span>{current.pillar}</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-dark leading-tight mb-2.5">
                      {current.title}
                    </h3>

                    <p className="text-brand-deep text-sm sm:text-base leading-relaxed mb-4 font-sans">
                      {current.tagline}
                    </p>

                    {/* Key Highlights with Green Checkmarks */}
                    <div className="space-y-2 pt-2 border-t border-brand-light/70">
                      {current.highlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-deep">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    {/* Primary CTA: Explore Program */}
                    <Link
                      to={current.link}
                      className="bg-brand-primary hover:bg-brand-deep text-white font-bold py-3 px-6 rounded-full text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group cursor-pointer"
                    >
                      <span>Explore Program Details</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Secondary CTA: Donate to This Program */}
                    <Link
                      to="/donate"
                      className="bg-brand-soft hover:bg-brand-light text-brand-primary font-bold py-3 px-6 rounded-full text-sm border border-brand-light transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <Heart size={16} />
                      <span>Support This Program</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Screen Pagination Dots (Clickable to switch slides) */}
          <div className="bg-slate-50 border-t border-brand-light/80 px-6 py-4 flex items-center justify-between">
            <span className="text-xs text-brand-muted font-medium hidden sm:inline">
              Automatically rotating every 4.5s &bull; Hover to pause
            </span>

            {/* Dots */}
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
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

            <Link
              to="/our-work"
              className="text-xs font-bold text-brand-primary hover:text-brand-deep transition-colors hidden sm:inline-flex items-center gap-1"
            >
              <span>View All Sectors</span>
              <ArrowRight size={13} />
            </Link>
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
