/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="relative inline-block mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 bg-brand-light rounded-full flex items-center justify-center text-brand-primary mx-auto"
          >
            <Search size={64} />
          </motion.div>
          <div className="absolute -top-2 -right-2 bg-brand-primary text-white font-display font-bold px-4 py-1 rounded-full shadow-lg">
            404
          </div>
        </div>
        
        <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Page Not Found</h1>
        <p className="text-brand-muted font-sans mb-10 leading-relaxed">
          The page you are looking for might have been moved or doesn't exist. Let's get you back on track.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-brand-light hover:bg-brand-muted transition-all hover:scale-105"
        >
          <Home size={20} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
