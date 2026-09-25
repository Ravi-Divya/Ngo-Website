import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';

export interface PartnerItem {
  src: string;
  name: string;
  description?: string;
}

interface PartnersScrollProps {
  logos?: (string | PartnerItem)[];
  speed?: number;
}

const defaultPartners: PartnerItem[] = [
  { src: '/images/partner_lacim.jpg', name: 'LACIM', description: 'Les Amis Du C.I.M. - France' },
  { src: '/images/partner_abilis.png', name: 'Abilis Foundation sr', description: 'Abilis Foundation - Finland' },
  { src: '/images/partner_mgnrega.png', name: 'MGNREGS', description: 'Govt. of India Rural Employment Scheme' },
  { src: '/images/partner_melania.jpg', name: 'Melania Development Foundation', description: 'Women & Community Empowerment' },
  { src: '/images/partner_pollination.png', name: 'The Pollination Project', description: 'Global Grassroots Grants' },
  { src: '/images/partner-gcc.png', name: 'Global Conscience Circle', description: 'Social Justice & Peace' },
  { src: '/images/partner-otf.jpg', name: 'One Tree Foundation', description: 'Environmental Sustainability' },
];

export default function PartnersScroll({ logos, speed }: PartnersScrollProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [activePartner, setActivePartner] = useState<PartnerItem | null>(null);

  const partnerList: PartnerItem[] = (logos || defaultPartners).map((item) => {
    if (typeof item === 'string') {
      const match = defaultPartners.find((p) => p.src === item);
      return match || { src: item, name: 'Partner Organization' };
    }
    return item;
  });

  // Quadruple items to guarantee a seamless infinite scroll loop on all screen widths
  const displayItems = [
    ...partnerList,
    ...partnerList,
    ...partnerList,
    ...partnerList,
  ];

  const isFrozen = isPaused || isTouching;

  const togglePause = () => {
    setIsPaused((prev) => {
      const next = !prev;
      if (!next) setActivePartner(null);
      return next;
    });
  };

  const handlePartnerTap = (partner: PartnerItem, e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (activePartner?.name === partner.name && isPaused) {
      // Resume on tapping the same active partner
      setIsPaused(false);
      setActivePartner(null);
    } else {
      // Pause and focus on this partner so user can see the logo clearly
      setIsPaused(true);
      setActivePartner(partner);
    }
  };

  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden select-none border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-10 mb-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2">
          Our Partners
        </h2>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-4"></div>
        <p className="text-sm md:text-base text-brand-muted max-w-xl mx-auto">
          Collaborating with visionary national and international organizations to create lasting grassroots impact.
        </p>

        {/* Interactive status & control pill */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={togglePause}
            aria-label={isFrozen ? 'Resume scrolling' : 'Pause scrolling'}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border shadow-sm bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 cursor-pointer active:scale-95"
          >
            {isFrozen ? (
              <>
                <Play className="w-3.5 h-3.5 text-brand-primary fill-brand-primary" />
                <span>
                  {activePartner
                    ? `Viewing: ${activePartner.name} (Tap to resume)`
                    : 'Paused (Tap to resume)'}
                </span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-600">Touch or hover any logo to pause</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        className="relative flex whitespace-nowrap min-w-full items-center py-4 cursor-pointer"
        onClick={togglePause}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
        onTouchCancel={() => setIsTouching(false)}
        title="Touch or click to pause/resume"
      >
        {/* Left and Right faded gradient edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div
          className={`animate-marquee ${isFrozen ? 'is-paused' : ''} flex gap-8 sm:gap-12 md:gap-20 items-center px-6`}
          style={speed ? { animationDuration: `${speed}s` } : undefined}
        >
          {displayItems.map((partner, i) => {
            const isSelected = activePartner?.name === partner.name;
            return (
              <div
                key={`${partner.name}-${i}`}
                onClick={(e) => handlePartnerTap(partner, e)}
                className={`relative flex items-center justify-center p-3 rounded-2xl transition-all duration-300 ${
                  isSelected
                    ? 'scale-110 bg-brand-soft ring-2 ring-brand-primary shadow-lg z-20'
                    : 'hover:scale-105 hover:bg-slate-50'
                }`}
              >
                <img
                  src={partner.src}
                  loading="lazy"
                  className="h-12 sm:h-16 md:h-20 w-auto max-w-[130px] sm:max-w-[170px] md:max-w-[210px] object-contain transition-transform duration-300"
                  alt={partner.name}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Partner banner when touched/paused */}
      {activePartner && (
        <div className="mt-3 text-center px-4 transition-all duration-300">
          <span className="inline-block bg-brand-light/60 text-brand-deep border border-brand-primary/20 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
            ✨ {activePartner.name} {activePartner.description ? `• ${activePartner.description}` : ''}
          </span>
        </div>
      )}
    </section>
  );
}
