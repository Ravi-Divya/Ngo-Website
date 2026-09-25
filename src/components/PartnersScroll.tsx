import React, { useState } from 'react';

export interface PartnerItem {
  src: string;
  name: string;
}

interface PartnersScrollProps {
  logos?: (string | PartnerItem)[];
  speed?: number;
}

const defaultPartners: PartnerItem[] = [
  { src: '/images/partner_lacim.jpg', name: 'LACIM' },
  { src: '/images/partner_abilis.jpg', name: 'Abilis Foundation sr' },
  { src: '/images/partner_mgnrega.png', name: 'MGNREGS' },
  { src: '/images/partner_melania.jpg', name: 'Melania Development Foundation' },
  { src: '/images/partner_pollination.png', name: 'The Pollination Project' },
  { src: '/images/partner-gcc.png', name: 'Global Conscience Circle' },
  { src: '/images/partner-otf.jpg', name: 'One Tree Foundation' },
];

export default function PartnersScroll({ logos, speed }: PartnersScrollProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

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
    setIsPaused((prev) => !prev);
  };

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden select-none">
      <div className="container mx-auto px-4 md:px-10 mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2">
          Our Partners
        </h2>
        <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
      </div>

      <div
        className="relative flex whitespace-nowrap min-w-full items-center cursor-pointer"
        onClick={togglePause}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
        onTouchCancel={() => setIsTouching(false)}
        role="region"
        aria-label="Our Partners - touch or click to pause"
      >
        {/* Left and Right faded edges for smooth scroll blend */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <div
          className={`animate-marquee ${isFrozen ? 'is-paused' : ''} flex gap-10 sm:gap-14 md:gap-20 items-center px-6`}
          style={speed ? { animationDuration: `${speed}s` } : undefined}
        >
          {displayItems.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="shrink-0 flex items-center justify-center p-2 rounded-xl transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              <img
                src={partner.src}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
