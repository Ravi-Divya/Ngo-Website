/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface ImageScrollStripProps {
  images: string[];
  speed?: number;
  reverse?: boolean;
}

export default function ImageScrollStrip({ images, speed = 30, reverse = false }: ImageScrollStripProps) {
  return (
    <div className="relative overflow-hidden w-full h-48 py-4 bg-brand-soft/30">
      <motion.div
        animate={{
          x: reverse ? [ '-50%', '0%' ] : [ '0%', '-50%' ],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-6 whitespace-nowrap min-w-full items-center"
      >
        {[...images, ...images].map((src, i) => (
          <img 
            key={i} 
            src={src} 
            loading="lazy"
            className="w-[280px] h-40 object-cover rounded-2xl shadow-lg border-4 border-white grayscale hover:grayscale-0 transition-all duration-500 ease-out" 
            alt={`Scroll moment ${i}`}
          />
        ))}
      </motion.div>
    </div>
  );
}
