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
      className="relative pt-10 md:pt-16 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-white to-[#F0F9FF] border-b border-brand-light"
    >
      {/* Background Photo Collage Mosaic from Gallery (Clean Light Theme) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 h-full w-full gap-1.5 opacity-20 sm:opacity-25 scale-105 filter saturate-110">
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
        {/* Soft Clean Light Gradient Overlay for Pure Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F9FF]/85 via-white/80 to-white/95" />
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Heading */}
          <h1 className="font-display font-bold leading-tight mb-4">
            <motion.span variants={itemVariants} className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-1">
              Transforming and Building
            </motion.span>
            <motion.span variants={itemVariants} className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-primary mb-1">
              Stronger Communities
            </motion.span>
            <motion.span variants={itemVariants} className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-dark">
              Together
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-brand-deep font-sans max-w-2xl mt-2 leading-relaxed"
          >
            CARD works to improve the socio, economic, political and cultural condition of the unorganized and underprivileged people in rural areas, empowering vulnerable communities through education, healthcare, sanitation, and sustainable livelihoods.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }}>
              <Link 
                to="/donate" 
                className="bg-brand-primary text-white rounded-full px-8 py-3.5 font-bold text-sm sm:text-base hover:bg-brand-deep shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
              >
                <span>Donate Now</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <Link 
              to="/about" 
              className="border-2 border-brand-accent text-brand-dark rounded-full px-8 py-3.5 font-semibold text-sm sm:text-base hover:bg-brand-soft hover:shadow-sm transition-all inline-block bg-white/80 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Inspiring Mission Strip with Handshake Emoji */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 inline-flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-md rounded-2xl border border-sky-200/90 px-5 py-3 shadow-xs hover:shadow-sm transition-all"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shrink-0" />
            <p className="font-display font-bold text-xs sm:text-sm md:text-base text-brand-dark whitespace-nowrap tracking-tight flex items-center gap-1.5">
              <span>Join hands with us to bring hope, dignity, and brighter smiles</span>
              <span className="text-base sm:text-lg" aria-hidden="true">🤝</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
