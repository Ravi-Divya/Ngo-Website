import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, HeartPulse, Droplets, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const collageImages = [
  { src: '/images/hero_new_1.jpg', alt: 'Rural Education' },
  { src: '/images/glimpses_health_campaign.jpg', alt: 'Healthcare Camps' },
  { src: '/images/hero_borewell_lacim.jpg', alt: 'Water Infrastructure' },
  { src: '/images/glimpses_children.jpg', alt: 'Child Welfare' },
  { src: '/images/melania_1.jpg', alt: 'Women Livelihoods' },
  { src: '/images/glimpses_meal_service.jpg', alt: 'Nutrition Service' },
  { src: '/images/educational_support_new.jpg', alt: 'Classroom Support' },
  { src: '/images/hero_new_3.jpg', alt: 'Relief Distribution' },
  { src: '/images/water_infrastructure_1.jpg', alt: 'Safe Drinking Water' },
  { src: '/images/nutrition_covid_relief.jpg', alt: 'Crisis Aid' },
  { src: '/images/mgnregs_1.jpg', alt: 'Sustainable Agriculture' },
  { src: '/images/glimpses_relief_kits_row.jpg', alt: 'Essential Aid' },
];

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative pt-8 md:pt-12 pb-16 md:pb-24 overflow-hidden bg-slate-950 text-white min-h-[580px] flex items-center"
    >
      {/* Background Photo Collage Mosaic (Reference Image 5) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 h-full w-full gap-1 opacity-30 sm:opacity-35 scale-105 filter saturate-110">
          {collageImages.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden w-full h-full min-h-[140px] md:min-h-[180px]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
        {/* Sophisticated Dark Gradient Overlays for Crystal Clear Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-sky-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Mission & Impact */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Top Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sky-300 text-xs font-bold tracking-wider uppercase border border-white/15 mb-4"
            >
              <ShieldCheck size={14} className="text-sky-400" />
              <span>30 Years of Grassroots Impact • Est. 1995</span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display font-bold leading-tight mb-3">
              <motion.span variants={itemVariants} className="block text-3xl sm:text-4xl md:text-5xl text-white mb-1">
                Transforming and Building
              </motion.span>
              <motion.span variants={itemVariants} className="block text-3xl sm:text-4xl md:text-5xl text-sky-400 mb-1">
                Stronger Communities
              </motion.span>
              <motion.span variants={itemVariants} className="block text-3xl sm:text-4xl md:text-5xl text-white">
                Together
              </motion.span>
            </h1>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 font-sans max-w-xl mt-2 leading-relaxed"
            >
              CARD works to improve the socio, economic, political and cultural condition of the unorganized and underprivileged people in rural areas, empowering vulnerable communities through education, healthcare, sanitation, and sustainable livelihoods.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }}>
                <Link 
                  to="/donate" 
                  className="bg-brand-primary text-white rounded-full px-8 py-3.5 font-bold text-sm sm:text-base hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition-all inline-flex items-center gap-2"
                >
                  <span>Donate Now</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <Link 
                to="/about" 
                className="border-2 border-white/30 text-white rounded-full px-7 py-3.5 font-semibold text-sm sm:text-base hover:bg-white/10 hover:border-white transition-all inline-block backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Inspiring Mission Strip with Handshake Emoji */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 inline-flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 px-4 sm:px-5 py-2.5 sm:py-3 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="font-display font-medium text-xs sm:text-sm text-slate-200 tracking-tight flex items-center gap-1.5">
                <span>Join hands with us to bring hope, dignity, and brighter smiles</span>
                <span className="text-base sm:text-lg" aria-hidden="true">🤝</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Explore Cards (Styled exactly like Image 5 with circular & split banners) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-4 sm:gap-5"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {/* Card 1: EDUCATION 2025 Banner (matching Reference Image 5) */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900/80 backdrop-blur-md border border-white/15 p-6 shadow-2xl transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-900/90">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Circular Badge styled after Image 5 */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-slate-950 flex flex-col items-center justify-center shadow-xl shrink-0 p-2 border-4 border-sky-400">
                    <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-sky-600">EDUCATION</span>
                    <span className="text-lg sm:text-xl font-display font-black leading-none text-slate-950">2025</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                      Tribal Child Welfare
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      Free education kits, after-school learning centers &amp; nutritious meals for rural children.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                <Link
                  to="/otf"
                  className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-sky-500/25 hover:translate-x-1"
                >
                  <span>Explore Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: HEALTHCARE & NUTRITION Banner (matching Reference Image 5) */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900/80 backdrop-blur-md border border-white/15 p-6 shadow-2xl transition-all duration-300 hover:border-sky-400/50 hover:bg-slate-900/90">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Healthcare Icon Badge */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center shrink-0">
                    <HeartPulse size={36} className="text-sky-300" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-black text-white tracking-wide uppercase">
                      Healthcare &amp; Nutrition
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                      Clean drinking water borewells, health camps, and emergency food grains relief.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                <Link
                  to="/pollination"
                  className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-sky-500/25 hover:translate-x-1"
                >
                  <span>Explore Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
