import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

// Curated authentic field action photos directly from Gallery
const galleryCollageImages = [
  "/images/clothing_distribution_kids.jpg",
  "/images/glimpses_children.jpg",
  "/images/clothing_formal_donation.jpg",
  "/images/glimpses_classroom_donation.jpg",
  "/images/glimpses_health_campaign.jpg",
  "/images/glimpses_community_feast.jpg",
  "/images/water_infrastructure_1.jpg",
  "/images/glimpses_student_support.jpg",
  "/images/glimpses_meal_service.jpg",
  "/images/clothing_support_2.jpg",
  "/images/glimpses_elderly_interaction.jpg",
  "/images/glimpses_relief_kits_row.jpg",
  "/images/melania_1.jpg",
  "/images/glimpses_children_celebration.jpg",
  "/images/glimpses_grocery_distribution.jpg",
  "/images/card_leadership.jpg",
  "/images/nutrition_covid_relief.jpg",
  "/images/glimpses_large_relief_drive.jpg",
  "/images/gallery_new_1.jpg",
  "/images/gallery_new_2.jpg",
  "/images/glimpses_tribal_livelihood.jpg",
  "/images/mgnregs_1.jpg",
  "/images/hero_community_support.jpg",
  "/images/water_infrastructure_2.jpg",
];

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative py-8 sm:py-12 md:py-16 overflow-hidden bg-slate-100 border-b border-brand-light flex items-center"
    >
      {/* Background Photo Collage from Gallery - High Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-full w-full gap-1.5 opacity-80 sm:opacity-85 scale-105 filter saturate-120 contrast-105">
          {galleryCollageImages.map((src, idx) => (
            <div key={idx} className="relative overflow-hidden w-full h-full min-h-[120px] md:min-h-[150px]">
              <img
                src={src}
                alt={`CARD Gallery Community Action ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          ))}
        </div>
        {/* Transparent Glass Frosted Layer */}
        <div className="absolute inset-0 backdrop-blur-[1.5px] bg-white/60" />
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Main Content - Letters rendered directly over transparent glass collage */}
        <motion.div 
          className="max-w-3xl mx-auto flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Heading */}
          <h1 className="font-display font-bold leading-tight mb-3">
            <motion.span variants={itemVariants} className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-1">
              Transforming and Building
            </motion.span>
            <motion.span variants={itemVariants} className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-primary mb-1">
              Stronger Communities
            </motion.span>
            <motion.span variants={itemVariants} className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-dark">
              Together
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-800 font-medium font-sans max-w-xl mt-1 leading-relaxed"
          >
            CARD works to improve the socio, economic, political and cultural condition of the unorganized and underprivileged people in rural areas, empowering vulnerable communities through education, healthcare, sanitation, and sustainable livelihoods.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex flex-wrap justify-center gap-3.5"
          >
            <motion.div whileHover={{ scale: 1.04 }}>
              <Link 
                to="/donate" 
                className="bg-brand-primary text-white rounded-full px-7 py-3 font-bold text-sm sm:text-base hover:bg-brand-deep shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Donate Now</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <Link 
              to="/about" 
              className="border-2 border-brand-accent text-brand-dark rounded-full px-7 py-3 font-semibold text-sm sm:text-base hover:bg-brand-soft hover:shadow-sm transition-all inline-block bg-white/90 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Inspiring Mission Strip with Handshake Emoji */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 inline-flex items-center gap-2.5 sm:gap-3 bg-white/80 backdrop-blur-md rounded-full border border-sky-200/90 px-5 py-2 shadow-xs hover:shadow-sm transition-all"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shrink-0" />
            <p className="font-display font-bold text-xs sm:text-sm text-brand-dark whitespace-nowrap tracking-tight flex items-center gap-1.5">
              <span>Join hands with us to bring hope, dignity, and brighter smiles</span>
              <span className="text-sm sm:text-base" aria-hidden="true">🤝</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
