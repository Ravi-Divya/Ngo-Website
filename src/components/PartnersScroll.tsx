import { motion } from 'motion/react';

interface PartnersScrollProps {
  logos?: string[];
  speed?: number;
}

const defaultLogos = [
  '/images/partner_lacim.jpg',
  '/images/partner_abilis.png',
  '/images/partner_mgnrega.png',
  '/images/partner_melania.jpg',
  '/images/partner_pollination.png',
  '/images/partner-gcc.png',
  '/images/partner-otf.jpg',
];

export default function PartnersScroll({ logos = defaultLogos, speed = 40 }: PartnersScrollProps) {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2">
          Our Partners
        </h2>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
      </div>
      
      <div className="relative flex whitespace-nowrap min-w-full items-center">
        {/* Left and Right faded edges for a smooth scrolling effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 md:gap-20 min-w-full items-center px-10"
        >
          {[...logos, ...logos].map((src, i) => (
            <img 
              key={i} 
              src={src} 
              loading="lazy"
              className="h-16 md:h-20 w-auto object-contain transition-all duration-300 hover:scale-110" 
              alt={`Partner ${i}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
