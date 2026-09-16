/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import Impact from './pages/Impact';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import MGNREGS from './pages/MGNREGS';
import LACIM from './pages/LACIM';
import Melania from './pages/Melania';
import Pollination from './pages/Pollination';
import OTF from './pages/OTF';
import CaseStudy from './pages/CaseStudy';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-brand-primary text-white rounded-full shadow-lg hover:bg-brand-deep hover:shadow-xl transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-brand-dark font-sans selection:bg-brand-primary selection:text-white">
        <Navbar />
        <main className="flex-grow pt-16 md:pt-20">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/our-work" element={<PageWrapper><OurWork /></PageWrapper>} />
              <Route path="/impact" element={<PageWrapper><Impact /></PageWrapper>} />
              <Route path="/mgnregs" element={<PageWrapper><MGNREGS /></PageWrapper>} />
              <Route path="/our-work/mgnregs" element={<PageWrapper><MGNREGS /></PageWrapper>} />
              <Route path="/lacim" element={<PageWrapper><LACIM /></PageWrapper>} />
              <Route path="/our-work/lacim" element={<PageWrapper><LACIM /></PageWrapper>} />
              <Route path="/melania" element={<PageWrapper><Melania /></PageWrapper>} />
              <Route path="/our-work/melania" element={<PageWrapper><Melania /></PageWrapper>} />
              <Route path="/pollination" element={<PageWrapper><Pollination /></PageWrapper>} />
              <Route path="/our-work/pollination" element={<PageWrapper><Pollination /></PageWrapper>} />
              <Route path="/otf" element={<PageWrapper><OTF /></PageWrapper>} />
              <Route path="/our-work/otf" element={<PageWrapper><OTF /></PageWrapper>} />
              <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
              <Route path="/case-study" element={<PageWrapper><CaseStudy /></PageWrapper>} />
              <Route path="/donate" element={<PageWrapper><Donate /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <BackToTop />
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
