import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import SearchModal from './SearchModal';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavLinkItem {
  name: string;
  path: string;
  dropdown?: {
    heading: string;
    items: { name: string; path: string }[];
  }[];
}

const navLinks: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Our Work', 
    path: '/our-work',
    dropdown: [
      {
        heading: 'Programs',
        items: [
          { name: 'MGNREGS', path: '/mgnregs' },
          { name: 'LACIM', path: '/lacim' },
          { name: 'OTF/FEP', path: '/otf' },
          { name: 'Melania', path: '/melania' },
          { name: 'Pollination', path: '/pollination' },
        ]
      },
      {
        heading: 'Gallery',
        items: [
          { name: 'View Gallery', path: '/gallery' },
        ]
      },
      {
        heading: 'Impact',
        items: [
          { name: 'Our Impact', path: '/impact' },
        ]
      }
    ]
  },
  { name: 'Case Study', path: '/case-study' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Track scroll position: when scrolling down, announcement bar goes up & hides
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.nav
      id="main-navbar"
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/98 border-b border-brand-light shadow-sm"
    >
      {/* Announcement Bar ABOVE Navbar — In gray color, hides/goes up when scrolling down */}
      <AnimatePresence>
        {showAnnouncement && !scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="bg-[#0F172A] text-slate-200 border-b border-slate-800 overflow-hidden shadow-2xs"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-1.5 sm:py-2 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 overflow-hidden">
                <p className="truncate text-slate-300 font-normal">
                  <strong className="text-white font-bold">Section 80G Tax Exemption:</strong>{' '}
                  <span className="text-slate-300">All donor contributions qualify for a 50% tax deduction under the Indian Income Tax Act.</span>
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/donate"
                  className="hidden sm:inline-flex items-center gap-1 font-bold text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-2 text-xs"
                >
                  <span>Donate Online</span>
                  <ArrowRight size={12} />
                </Link>
                <button
                  onClick={() => setShowAnnouncement(false)}
                  className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Dismiss announcement"
                  title="Dismiss"
                >
                  <X size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Standard Logo & Name — Left */}
        <Link 
          to="/" 
          aria-label="Community Alternative Research and Development — Home"
          className="relative flex items-center transition-transform duration-300 hover:scale-102 z-[60] mr-2 sm:mr-4 md:mr-6"
        >
          <div className="h-10 sm:h-12 md:h-14 w-auto flex-shrink-0">
            <img
              src="/images/card-logo.png"
              alt="Community Alternative Research and Development logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="flex flex-col justify-center ml-2 sm:ml-3">
            <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg text-brand-primary tracking-tight leading-tight block">
              Community Alternative Research
            </span>
            <span className="font-display font-black text-xs sm:text-sm md:text-base lg:text-lg text-brand-primary tracking-tight leading-tight block">
              and Development (CARD)
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links — Right */}

  <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <NavLink
                to={link.path}
                className={({ isActive }) => {
                  const active = isActive || (link.path === '/' && location.pathname === '/home');
                  return cn(
                    "relative flex items-center gap-1 font-display font-medium text-base tracking-wide transition-all duration-300 pb-2",
                    active ? "text-brand-primary" : "text-brand-muted hover:text-brand-primary"
                  );
                }}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />}
                <span className={cn(
                  "absolute bottom-0 left-0 h-[3px] bg-brand-primary transition-all duration-300",
                  (location.pathname === link.path || (link.path === '/' && location.pathname === '/home')) ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </NavLink>

              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl border border-brand-light/50 p-4 min-w-[200px] flex flex-col gap-4">
                    {link.dropdown.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-brand-primary font-bold text-[10px] tracking-widest uppercase mb-2 opacity-70">{section.heading}</h4>
                        <div className="flex flex-col gap-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="text-brand-deep font-semibold text-sm hover:text-brand-primary hover:translate-x-2 transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/donate"
            className="font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-500 bg-brand-primary text-white px-5 py-2 hover:bg-brand-deep shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Right Controls: Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="p-2 text-brand-deep hover:text-brand-primary transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>



        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white/95 backdrop-blur-xl rounded-3xl border border-brand-light shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-8">
                {navLinks.map((link) => {
                  const isHome = link.path === '/' && location.pathname === '/home';
                  return (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) => cn(
                        "text-xl font-display font-medium tracking-wide py-3 transition-colors",
                        (isActive || isHome) ? "text-brand-primary border-l-4 border-brand-primary pl-4" : "text-brand-deep"
                      )}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}

                <Link
                  to="/donate"
                  className="bg-brand-primary text-white text-center font-bold uppercase tracking-widest py-4 rounded-2xl mt-2 shadow-xl"
                >
                  Donate Now
                </Link>

                <div className="flex items-center gap-4 mt-4">
                  <a href="https://www.instagram.com/cardorganization_india/" target="_blank" rel="noopener noreferrer" className="text-brand-deep hover:text-brand-primary">Instagram</a>
                  <a href="https://x.com/Card_India_" target="_blank" rel="noopener noreferrer" className="text-brand-deep hover:text-brand-primary">X</a>
                  <a href="https://www.youtube.com/@cardorganization" target="_blank" rel="noopener noreferrer" className="text-brand-deep hover:text-brand-primary">YouTube</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* Spotlight Command Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </motion.nav>
  );
}
