import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages: string[] = [
  "/images/clothing_distribution_kids.jpg",
  "/images/card_leadership.jpg",
  "/images/clothing_formal_donation.jpg",
  "/images/clothing_support_2.jpg",
  "/images/gallery_new_1.jpg",
  "/images/gallery_new_2.jpg",
  "/images/gallery_new_3.jpg",
  "/images/gallery_new_4.jpg",
  "/images/glimpses_1.jpg",
  "/images/glimpses_3.jpg",
  "/images/glimpses_4.jpg",
  "/images/glimpses_5.jpg",
  "/images/glimpses_children.jpg",
  "/images/glimpses_children_celebration.jpg",
  "/images/glimpses_classroom_donation.jpg",
  "/images/glimpses_community_feast.jpg",
  "/images/glimpses_covid_relief_hall.jpg",
  "/images/glimpses_elderly_interaction.jpg",
  "/images/glimpses_formal_donation.jpg",
  "/images/glimpses_grocery_distribution.jpg",
  "/images/glimpses_health_campaign.jpg",
  "/images/glimpses_large_relief_drive.jpg",
  "/images/glimpses_latest_1.jpg",
  "/images/glimpses_latest_2.jpg",
  "/images/glimpses_latest_3.jpg",
  "/images/glimpses_latest_4.jpg",
  "/images/glimpses_latest_5.jpg",
  "/images/glimpses_meal_service.jpg",
  "/images/glimpses_new_1.jpg",
  "/images/glimpses_new_2.jpg",
  "/images/glimpses_new_4.jpg",
  "/images/glimpses_new_5.jpg",
  "/images/glimpses_relief_kits_row.jpg",
  "/images/glimpses_student_support.jpg",
  "/images/glimpses_supply_distribution.jpg",
  "/images/glimpses_tribal_livelihood.jpg",
  "/images/hero_community_support.jpg",
  "/images/hero_meal_service.jpg",
  "/images/hero_new_1.jpg",
  "/images/hero_new_2.jpg",
  "/images/hero_school_kids.jpg",
  "/images/hero_supply_distribution.jpg",
  "/images/hero_village_outreach.jpg",
  "/images/impact_hero_bg.jpg",
  "/images/lacim_2.jpg",
  "/images/melania_1.jpg",
  "/images/melania_2.jpg",
  "/images/mgnregs_1.jpg",
  "/images/mgnregs_2.jpg",
  "/images/new_gallery_add_1.jpg",
  "/images/new_gallery_add_10.jpg",
  "/images/new_gallery_add_11.jpg",
  "/images/new_gallery_add_13.jpg",
  "/images/new_gallery_add_14.jpg",
  "/images/new_gallery_add_16.jpg",
  "/images/new_gallery_add_18.jpg",
  "/images/new_gallery_add_2.jpg",
  "/images/new_gallery_add_3.jpg",
  "/images/new_gallery_add_4.jpg",
  "/images/new_gallery_add_5.jpg",
  "/images/new_gallery_add_6.jpg",
  "/images/new_gallery_add_7.jpg",
  "/images/new_gallery_add_8.jpg",
  "/images/new_gallery_add_9.jpg",
  "/images/new_upload_10.jpg",
  "/images/new_upload_11.jpg",
  "/images/new_upload_12.jpg",
  "/images/new_upload_13.jpg",
  "/images/new_upload_15.jpg",
  "/images/new_upload_16.jpg",
  "/images/new_upload_17.jpg",
  "/images/new_upload_18.jpg",
  "/images/new_upload_3.jpg",
  "/images/new_upload_4.jpg",
  "/images/new_upload_5.jpg",
  "/images/new_upload_7.jpg",
  "/images/new_upload_8.jpg",
  "/images/nutrition_covid_relief.jpg",
  "/images/nutrition_food_support_1.jpg",
  "/images/nutrition_food_support_2.jpg",
  "/images/nutrition_grocery_kits.jpg",
  "/images/our_history.jpg",
  "/images/pollination_1.jpg",
  "/images/pollination_2.jpg",
  "/images/uploaded_gallery_1.jpg",
  "/images/uploaded_gallery_2.jpg",
  "/images/uploaded_gallery_3.jpg",
  "/images/uploaded_gallery_5.jpg",
  "/images/water_infrastructure_1.jpg",
  "/images/water_infrastructure_2.jpg",
  "/images/water_infrastructure_3.jpg"
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
      }
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader
        title="Photo Gallery"
        breadcrumb="Gallery"
      />

      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-10 max-w-7xl">
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={src + index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.03 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 border border-slate-200/80"
              >
                <img
                  src={src}
                  alt={`CARD Field Initiative ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn size={20} className="text-brand-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 text-white/70 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full border border-white/10">
              {selectedIndex + 1} / {galleryImages.length}
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
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={galleryImages[selectedIndex]}
                alt={`CARD Full View ${selectedIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}