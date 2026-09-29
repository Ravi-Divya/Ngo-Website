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
            <div
              className="w-16 h-1.5 bg-[#0284C7] mx-auto mt-3 rounded-full shadow-xs"
              style={{ backgroundColor: '#0284C7', height: '6px', width: '64px' }}
              aria-hidden="true"
            />
          </div>

          {/* Meta Details Box: Only Aided By, Sector, Place */}
          <div className="border-2 border-slate-900 rounded-2xl overflow-hidden mb-7 text-xs md:text-sm divide-y-2 divide-slate-900 shadow-xs">
            <div className="flex flex-col sm:flex-row bg-[#EBF5FB] p-3.5 sm:px-5 items-start sm:items-center">
              <span className="font-bold text-slate-900 w-full sm:w-36 shrink-0 flex items-center gap-2">
                <Landmark size={16} className="text-[#0284C7] shrink-0" /> Aided By :
              </span>
              <span className="font-bold text-sky-950 uppercase tracking-tight">{fundedBy}</span>
            </div>
            <div className="flex flex-col sm:flex-row bg-white p-3.5 sm:px-5 items-start sm:items-center">
              <span className="font-bold text-slate-900 w-full sm:w-36 shrink-0 flex items-center gap-2">
                <Tag size={16} className="text-[#0284C7] shrink-0" /> Sector :
              </span>
              <span className="font-semibold text-slate-800">{sector}</span>
            </div>
            <div className="flex flex-col sm:flex-row bg-[#EBF5FB] p-3.5 sm:px-5 items-start sm:items-center">
              <span className="font-bold text-slate-900 w-full sm:w-36 shrink-0 flex items-center gap-2">
                <MapPin size={16} className="text-[#0284C7] shrink-0" /> Place :
              </span>
              <span className="font-semibold text-slate-800">{place}</span>
            </div>
          </div>

          {/* Exactly 2 Images Side-by-Side */}
          {displayImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {displayImages.map((img, i) => (
                <div key={img.src + i} className="rounded-2xl overflow-hidden border-2 border-slate-900 shadow-sm bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-52 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {img.caption && (
                    <div className="p-2.5 text-center text-xs font-bold text-slate-900 bg-slate-100 border-t-2 border-slate-900">
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