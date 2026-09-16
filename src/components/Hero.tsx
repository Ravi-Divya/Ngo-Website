import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export default function Hero() {
  return (
    <section 
      id="hero"
      className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden bg-gradient-to-br from-[#F0F9FF] to-white"
    >
      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[10%] w-56 h-56 bg-brand-light/30 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-[5%] w-28 h-28 bg-brand-light/20 rounded-2xl blur-2xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-10 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
        
        {/* Left Side (55%) */}
        <motion.div 
          className="w-full lg:w-[55%] flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Heading */}
          <h1 className="font-display font-bold leading-tight mb-3">
            <motion.span variants={itemVariants} className="block text-3xl md:text-4xl lg:text-5xl text-brand-dark mb-1">
              Transforming and Building
            </motion.span>
            <motion.span variants={itemVariants} className="block text-3xl md:text-4xl lg:text-5xl text-brand-primary mb-1">
              Stronger Communities
            </motion.span>
            <motion.span variants={itemVariants} className="block text-3xl md:text-4xl lg:text-5xl text-brand-dark">
              Together
            </motion.span>
          </h1>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-brand-deep font-sans max-w-lg mt-2 leading-relaxed"
          >
            CARD works to improve the socio, economic, political and cultural condition of the unorganized and underprivileged people in rural areas, empowering vulnerable communities through education, healthcare, sanitation, and sustainable livelihoods.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }}>
              <Link 
                to="/donate" 
                className="bg-brand-primary text-white rounded-full px-7 py-3.5 font-semibold text-base hover:bg-brand-deep shadow-md hover:shadow-lg transition-all inline-block"
              >
                Donate Now
              </Link>
            </motion.div>
            <Link 
              to="/about" 
              className="border-2 border-brand-accent text-brand-dark rounded-full px-7 py-3.5 font-semibold text-base hover:bg-brand-soft hover:shadow-sm transition-all inline-block"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side (45%) */}
        <motion.div 
          className="w-full lg:w-[45%] relative h-[340px] md:h-[400px] flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Image Collage */}
          <div className="relative z-10 w-full max-w-[460px] h-[320px] md:h-[380px] lg:ml-auto">
            {/* Primary Image (Top Centered) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="absolute top-0 left-[10%] w-[80%] h-[58%] rounded-2xl shadow-xl overflow-hidden border-[6px] border-white z-10"
            >
              <img 
                src="/images/hero_new_2.jpg" 
                alt="CARD Community Infrastructure" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none" />
            </motion.div>

            {/* Secondary Image (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              className="absolute bottom-[2%] left-[2%] w-[48%] aspect-[4/3] rounded-2xl shadow-xl overflow-hidden border-[6px] border-white z-20"
            >
              <img 
                src="/images/hero_new_1.jpg" 
                alt="CARD Educational Support" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Tertiary Image (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
              className="absolute bottom-[2%] right-[2%] w-[48%] aspect-[4/3] rounded-2xl shadow-xl overflow-hidden border-[6px] border-white z-30"
            >
              <img 
                src="/images/hero_new_3.jpg" 
                alt="CARD Relief Distribution" 
                className="w-full h-full object-cover object-left hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
