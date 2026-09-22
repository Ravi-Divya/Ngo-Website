import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
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
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
      className="fixed top-0 left-0 w-full z-50 bg-brand-soft/95 backdrop-blur-md border-b border-brand-light shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Standard Logo & Name — Left */}
        <Link 
          to="/" 
          aria-label="CARD — Home"
          className="relative flex items-center transition-transform duration-300 hover:scale-105 z-[60] mr-4 md:mr-8"
        >
          <div className="h-11 md:h-14 w-auto flex-shrink-0">
            <img
              src="/images/card-logo.png"
              alt="CARD logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <span className="font-display font-extrabold text-2xl md:text-3xl text-brand-deep tracking-tight ml-3">
            CARD
          </span>
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

          {/* Search Trigger Button (Desktop) */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft hover:bg-brand-light/70 text-brand-deep hover:text-brand-primary border border-brand-light transition-all text-xs font-medium shadow-sm group"
            aria-label="Open search dialog"
            title="Search website (Ctrl + K)"
          >
            <Search size={15} className="text-brand-primary group-hover:scale-110 transition-transform" />
            <span className="hidden xl:inline text-brand-muted">Search...</span>
            <kbd className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-mono text-brand-muted bg-white rounded border border-brand-light">
              ⌘K
            </kbd>
          </button>

          <Link
            to="/donate"
            className="font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-500 bg-brand-primary text-white px-5 py-2 hover:bg-brand-deep shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Right Controls: Search + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 text-brand-deep hover:text-brand-primary transition-colors rounded-full hover:bg-brand-soft"
            aria-label="Open search"
          >
            <Search size={20} className="text-brand-primary" />
          </button>
          <button
            className="p-2 text-brand-deep hover:text-brand-primary transition-colors"
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

                {/* Mobile Search Link */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex items-center gap-3 text-left py-2 text-brand-deep hover:text-brand-primary font-display font-medium text-lg border-b border-brand-light/60 pb-3"
                >
                  <Search size={20} className="text-brand-primary" />
                  <span>Search Entire Site (Programs, FAQs, 80G)...</span>
                </button>

                <Link
                  to="/donate"
                  className="bg-brand-primary text-white text-center font-bold uppercase tracking-widest py-5 rounded-2xl mt-4 shadow-xl"
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
