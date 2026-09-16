/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { HandHeart } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="w-64 h-64 md:w-72 md:h-72 mb-4 overflow-hidden flex items-center justify-center">
          <img 
            src="/images/card-logo.png" 
            alt="CARD Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-6xl md:text-7xl font-display font-bold text-brand-dark tracking-tighter mb-2">CARD</h1>
        <p className="text-brand-accent font-sans font-bold tracking-widest uppercase text-sm md:text-base">COMMUNITY ALTERNATIVE RESEARCH AND DEVELOPMENT</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-brand-soft">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "linear" }}
          className="h-full bg-brand-primary"
        />
      </div>
    </motion.div>
  );
}
