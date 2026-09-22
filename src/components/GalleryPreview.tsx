import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

const previewImages: GalleryItem[] = [
  {
    src: '/images/clothing_distribution_kids.jpg',
    title: 'School Learning Kits & Uniform Distribution',
    category: 'Child Education',
  },
  {
    src: '/images/water_infrastructure_1.jpg',
    title: 'Community Borewell & Safe Water Network',
    category: 'Water Security',
  },
  {
    src: '/images/melania_1.jpg',
    title: 'Yanadi Women Broom Making Collective',
    category: 'Livelihoods',
  },
  {
    src: '/images/mgnregs_1.jpg',
    title: 'MGNREGS Community Tree Nursery Raising',
    category: 'Environment',
  },
  {
    src: '/images/glimpses_meal_service.jpg',
    title: 'Daily Meal & Nutrition Support for Destitute',
    category: 'Nutrition Relief',
  },
  {
    src: '/images/glimpses_covid_relief_hall.jpg',
    title: 'Emergency Grain & Grocery Kit Distribution',
    category: 'Emergency Relief',
  },
];

export default function GalleryPreview() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + previewImages.length) % previewImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % previewImages.length);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
              Field Realities
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
              Photo &amp; Video Gallery
            </h2>
            <div className="w-16 h-1 bg-brand-primary mt-3.5 rounded-full" />
            <p className="text-brand-deep text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
              Unfiltered, genuine photographs documenting 30 years of field activities, community programs, and direct relief distributions.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-brand-soft hover:bg-brand-light text-brand-primary font-bold px-6 py-3 rounded-full text-sm border border-brand-light transition-all shrink-0 self-start md:self-auto"
          >
            <Camera size={16} />
            <span>Explore All 70+ Photos</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {previewImages.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-xs hover:shadow-xl border border-slate-200/80 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-brand-primary px-2 py-0.5 rounded-md mb-1.5">
                  {img.category}
                </span>
                <h3 className="font-display font-bold text-xs sm:text-sm text-white/95 line-clamp-1">
                  {img.title}
                </h3>
              </div>

              {/* Zoom hover indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-11 h-11 rounded-full bg-white/95 text-brand-dark flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn size={20} className="text-brand-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 text-white/70 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              {selectedIdx + 1} / {previewImages.length}
            </div>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all z-50 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/25 transition-all z-50 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Active Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={previewImages[selectedIdx].src}
                alt={previewImages[selectedIdx].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="text-white/90 text-sm font-semibold mt-3 text-center">
                {previewImages[selectedIdx].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
