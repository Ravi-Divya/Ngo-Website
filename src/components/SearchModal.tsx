import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, FileText, Heart, Globe, BookOpen, ShieldCheck, HelpCircle, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchItem {
  id: string;
  category: 'PAGES' | 'PROGRAMS' | 'RESOURCES' | 'FAQS & LOCATION';
  title: string;
  path: string;
  description?: string;
  keywords?: string[];
  icon?: React.ReactNode;
}

const SEARCH_ITEMS: SearchItem[] = [
  // Pages
  { id: 'p-home', category: 'PAGES', title: 'Home', path: '/', description: 'CARD grassroots overview, mission, and live impact in Chittoor' },
  { id: 'p-about', category: 'PAGES', title: 'About Us', path: '/about', description: 'Founded in 1995 by S. Ravi, 30 years of community development' },
  { id: 'p-work', category: 'PAGES', title: 'Our Work', path: '/our-work', description: 'Grassroots projects across 150+ villages in Andhra Pradesh' },
  { id: 'p-impact', category: 'PAGES', title: 'Our Impact', path: '/impact', description: '50,000+ lives touched, housing, water, and schooling' },
  { id: 'p-case', category: 'PAGES', title: 'Case Studies', path: '/case-study', description: 'In-depth transformation stories of rural families and self-help groups' },
  { id: 'p-gallery', category: 'PAGES', title: 'Gallery', path: '/gallery', description: 'Photographic documentation of our field interventions' },
  { id: 'p-donate', category: 'PAGES', title: 'Donate Now (80G Tax Deductible)', path: '/donate', description: '100% transparent donations eligible for 50% Indian tax rebate' },
  { id: 'p-contact', category: 'PAGES', title: 'Contact Us', path: '/contact', description: 'Chittoor head office, field centers, phone & email' },
  { id: 'p-privacy', category: 'PAGES', title: 'Privacy Policy', path: '/privacy-policy', description: 'Donor data security, PAN compliance & IT Act governance' },
  { id: 'p-cookie', category: 'PAGES', title: 'Cookie Policy', path: '/cookie-policy', description: 'How cookies enhance your site experience' },

  // Programs
  { id: 'pr-mgnregs', category: 'PROGRAMS', title: 'MGNREGS Social Audits', path: '/mgnregs', description: 'Transparency & accountability in rural employment guarantee scheme' },
  { id: 'pr-lacim', category: 'PROGRAMS', title: 'LACIM Children Education', path: '/lacim', description: 'Supplementary schooling, nutrition & learning centers for rural kids' },
  { id: 'pr-otf', category: 'PROGRAMS', title: 'OTF / FEP Tribal Development', path: '/otf', description: 'Permanent brick housing colonies for Yanadi indigenous tribes' },
  { id: 'pr-melania', category: 'PROGRAMS', title: 'Melania Water & Sanitation', path: '/melania', description: 'Clean borewells, RO plants, and community hygiene in drought zones' },
  { id: 'pr-pollination', category: 'PROGRAMS', title: 'Pollination & Livelihoods', path: '/pollination', description: 'Apiculture, bio-farming, and sustainable rural livelihood training' },

  // Resources & Compliance
  { id: 'r-80g', category: 'RESOURCES', title: '80G Tax Exemption Certificates', path: '/about#governance', description: 'Download Section 80G and 12A certificates under Income Tax Act' },
  { id: 'r-fcra', category: 'RESOURCES', title: 'FCRA Registration Details', path: '/about#governance', description: 'Ministry of Home Affairs FCRA certified compliance documentation' },
  { id: 'r-audit', category: 'RESOURCES', title: 'Audited Financial Statements', path: '/about#governance', description: 'Independent annual audited balance sheets and DARPAN registration' },
  { id: 'r-csr', category: 'RESOURCES', title: 'CSR Section 135 Partnerships', path: '/contact', description: 'Corporate Social Responsibility eligible NGO partnerships' },

  // FAQs & Location
  { id: 'f-location', category: 'FAQS & LOCATION', title: 'Chittoor Field Headquarters & Clusters', path: '/#location-map', description: 'Mittapalyam, Gudipala, Anupu, Puthalapattu, G.D. Nellore clusters' },
  { id: 'f-faqs', category: 'FAQS & LOCATION', title: 'Frequently Asked Questions', path: '/#faqs', description: 'Tax benefits, volunteering, scheduling field visits & transparency' },
  { id: 'f-visit', category: 'FAQS & LOCATION', title: 'Schedule a Community Field Visit', path: '/contact', description: 'Experience grassroots development directly in Chittoor villages' },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Filter items based on query
  const filtered = SEARCH_ITEMS.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.path.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Group by category
  const categories = ['PAGES', 'PROGRAMS', 'RESOURCES', 'FAQS & LOCATION'] as const;

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex].path);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container — Styled after Image 2 reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#1E232A] text-slate-100 rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden z-10 flex flex-col max-h-[82vh]"
            onKeyDown={handleKeyDown}
          >
            {/* Top Search Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-700/80 gap-3 bg-[#181C22]">
              <Search size={20} className="text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search programs, initiatives, locations, FAQs, 80G..."
                className="w-full bg-transparent text-white placeholder-slate-400 text-base md:text-lg font-sans focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
                ESC
              </kbd>
            </div>

            {/* Scrollable Results List */}
            <div className="overflow-y-auto p-3 space-y-4 flex-1 scrollbar-thin scrollbar-thumb-slate-700">
              {filtered.length === 0 ? (
                <div className="text-center py-12 px-4">
                  <HelpCircle size={36} className="mx-auto text-slate-500 mb-2" />
                  <p className="text-slate-300 font-medium">No results found for "{query}"</p>
                  <p className="text-xs text-slate-500 mt-1">Try searching for "Donate", "80G", "Chittoor", "Education", or "MGNREGS"</p>
                </div>
              ) : (
                categories.map((cat) => {
                  const itemsInCat = filtered.filter((item) => item.category === cat);
                  if (itemsInCat.length === 0) return null;

                  return (
                    <div key={cat} className="space-y-1">
                      <div className="px-3 py-1 text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                        {cat}
                      </div>
                      <div className="space-y-0.5">
                        {itemsInCat.map((item) => {
                          const itemIndex = filtered.indexOf(item);
                          const isSelected = itemIndex === selectedIndex;

                          return (
                            <button
                              key={item.id}
                              onClick={() => handleSelect(item.path)}
                              onMouseEnter={() => setSelectedIndex(itemIndex)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all flex items-center justify-between group ${
                                isSelected
                                  ? 'bg-[#2A323D] text-white shadow-sm'
                                  : 'text-slate-300 hover:bg-[#252C36] hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0 pr-3">
                                <div
                                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                    isSelected ? 'bg-brand-primary text-white' : 'bg-slate-800 text-slate-400'
                                  }`}
                                >
                                  {cat === 'PAGES' && <FileText size={16} />}
                                  {cat === 'PROGRAMS' && <Heart size={16} />}
                                  {cat === 'RESOURCES' && <ShieldCheck size={16} />}
                                  {cat === 'FAQS & LOCATION' && <MapPin size={16} />}
                                </div>
                                <div className="truncate">
                                  <div className="text-sm font-semibold truncate flex items-center gap-2">
                                    <span>{item.title}</span>
                                    <span className="text-[11px] font-mono text-slate-500 font-normal">
                                      {item.path}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <div className="text-xs text-slate-400 truncate mt-0.5">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <ArrowRight
                                size={15}
                                className={`shrink-0 transition-transform ${
                                  isSelected ? 'text-brand-primary translate-x-0.5' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Bottom Footer — Styled strictly like Image 2 */}
            <div className="px-4 py-3 bg-[#15191F] border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-400">Navigate the whole site from here</span>
              <button
                onClick={() => handleSelect('/contact')}
                className="font-semibold text-brand-primary hover:text-white transition-colors underline-offset-2 hover:underline"
              >
                Talk to us →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
