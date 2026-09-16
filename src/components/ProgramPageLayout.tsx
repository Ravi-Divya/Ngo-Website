import { motion } from 'motion/react';
import { Landmark, Tag, MapPin } from 'lucide-react';

interface ProgramPageLayoutProps {
  title: string;
  fundedBy: string;
  sector: string;
  place: string;
  images: { src: string; alt: string; caption?: string }[];
  paragraphs: string[];
  backLink?: string;
}

export default function ProgramPageLayout({
  title,
  fundedBy,
  sector,
  place,
  images,
  paragraphs,
}: ProgramPageLayoutProps) {
  // Ensure exactly 2 images are taken
  const displayImages = images.slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-white py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Clean Box Card Container */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-slate-200/90 rounded-2xl shadow-lg overflow-hidden p-6 md:p-10 font-sans"
        >
          {/* Program Title */}
          <div className="text-center pb-5 mb-6 border-b border-slate-100">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-brand-dark leading-snug">
              {title}
            </h1>
            {/* Small Blue Line Under Heading */}
            <div className="w-14 h-1 bg-brand-primary mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Meta Details Box: Only Aided By, Sector, Place */}
          <div className="border border-brand-light rounded-xl overflow-hidden mb-7 text-xs md:text-sm divide-y divide-brand-light/60">
            <div className="flex flex-col sm:flex-row bg-brand-soft/40 p-3 sm:px-5 items-start sm:items-center">
              <span className="font-bold text-brand-dark w-full sm:w-36 shrink-0 flex items-center gap-2">
                <Landmark size={15} className="text-brand-primary" /> Aided By :
              </span>
              <span className="font-bold text-brand-deep uppercase">{fundedBy}</span>
            </div>
            <div className="flex flex-col sm:flex-row bg-white p-3 sm:px-5 items-start sm:items-center">
              <span className="font-bold text-brand-dark w-full sm:w-36 shrink-0 flex items-center gap-2">
                <Tag size={15} className="text-brand-primary" /> Sector :
              </span>
              <span className="font-medium text-slate-700">{sector}</span>
            </div>
            <div className="flex flex-col sm:flex-row bg-brand-soft/40 p-3 sm:px-5 items-start sm:items-center">
              <span className="font-bold text-brand-dark w-full sm:w-36 shrink-0 flex items-center gap-2">
                <MapPin size={15} className="text-brand-primary" /> Place :
              </span>
              <span className="font-medium text-slate-700">{place}</span>
            </div>
          </div>

          {/* Exactly 2 Images Side-by-Side */}
          {displayImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {displayImages.map((img, i) => (
                <div key={img.src + i} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-52 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {img.caption && (
                    <div className="p-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-50 border-t border-slate-200">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Concise Content */}
          <div className="space-y-3.5 text-slate-700 text-sm md:text-base leading-relaxed">
            {paragraphs.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

        </motion.article>

      </div>
    </div>
  );
}