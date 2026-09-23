import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, FileText, Heart, ShieldCheck, MapPin, HelpCircle, CornerDownLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchItem {
  id: string;
  category: 'PAGES' | 'PROGRAMS' | 'RESOURCES' | 'FAQS & LOCATION';
  title: string;
  path: string;
  description?: string;
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
  { id: 'pr-lacim', category: 'PROGRAMS', title: 'LACIM Children Education & Nutrition', path: '/lacim', description: 'Supplementary schooling, nutrition & learning centers for rural kids' },
  { id: 'pr-mgnregs', category: 'PROGRAMS', title: 'MGNREGS Social Audits & Nurseries', path: '/mgnregs', description: 'Transparency & accountability in rural employment guarantee scheme' },
  { id: 'pr-otf', category: 'PROGRAMS', title: 'OTF / FEP Tribal Brick Colonies', path: '/otf', description: 'Permanent brick housing colonies for Yanadi indigenous tribes' },
  { id: 'pr-melania', category: 'PROGRAMS', title: 'Melania Water & Sanitation', path: '/melania', description: 'Clean borewells, RO plants, and community hygiene in drought zones' },
  { id: 'pr-pollination', category: 'PROGRAMS', title: 'Pollination & Beekeeping', path: '/pollination', description: 'Apiculture, bio-farming, and sustainable rural livelihood training' },

  // Resources & Compliance
  { id: 'r-80g', category: 'RESOURCES', title: '80G Tax Exemption Certificates', path: '/about#governance', description: 'Download Section 80G and 12A certificates under Income Tax Act' },
  { id: 'r-fcra', category: 'RESOURCES', title: 'FCRA Registration Details', path: '/about#governance', description: 'Ministry of Home Affairs FCRA certified compliance documentation' },
  { id: 'r-audit', category: 'RESOURCES', title: 'Audited Financial Statements', path: '/about#governance', description: 'Independent annual audited balance sheets and DARPAN registration' },
  { id: 'r-csr', category: 'RESOURCES', title: 'CSR Section 135 Partnerships', path: '/contact', description: 'Corporate Social Responsibility eligible NGO partnerships' },

  // FAQs & Location
  { id: 'f-location', category: 'FAQS & LOCATION', title: 'Chittoor Field Headquarters & Clusters', path: '/#location-map', description: 'Mittapalyam, Gudipala, Anupu, Puthalapattu, G.D. Nellore clusters' },
  { id: 'f-faqs', category: 'FAQS & LOCATION', title: 'Frequently Asked Questions (FAQ)', path: '/#faqs', description: 'Tax benefits, volunteering, scheduling field visits & transparency' },
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
      setTimeout(() => inputRef.current?.focus(), 60);
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
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-14 sm:pt-20 px-4">
          {/* Backdrop without blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 cursor-pointer"
          />

          {/* Redesigned Modern Light Spotlight Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 flex flex-col max-h-[82vh]"
            onKeyDown={handleKeyDown}
          >
            {/* Top Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-slate-100 gap-3.5 bg-slate-50/70">
              <div className="w-9 h-9 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary shrink-0 shadow-2xs">
                <Search size={19} />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search programs, 80G tax receipts, field work, gallery..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-base md:text-lg font-sans focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-slate-500 bg-white rounded-lg border border-slate-200 shadow-2xs">
                ESC
              </kbd>
            </div>

            {/* Scrollable Results List */}
            <div className="overflow-y-auto p-3 sm:p-4 space-y-4 flex-1 scrollbar-thin scrollbar-thumb-slate-200">
              {filtered.length === 0 ? (
                <div className="text-center py-14 px-4">
                  <div className="w-14 h-14 bg-brand-soft text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-2xs">
                    <HelpCircle size={28} />
                  </div>
                  <p className="text-slate-800 font-bold text-base">No matches found for "{query}"</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Try searching for "Donate", "80G", "LACIM", "Yanadi", "Water", or "Contact"
                  </p>
                </div>
              ) : (
                categories.map((cat) => {
                  const itemsInCat = filtered.filter((item) => item.category === cat);
                  if (itemsInCat.length === 0) return null;

                  return (
                    <div key={cat} className="space-y-1.5">
                      <div className="px-3 py-1 text-[11px] font-bold tracking-wider text-brand-primary uppercase font-mono flex items-center gap-2">
                        <span>{cat}</span>
                        <span className="h-[1px] flex-1 bg-slate-100" />
                      </div>
                      <div className="space-y-1">
                        {itemsInCat.map((item) => {
                          const itemIndex = filtered.indexOf(item);
                          const isSelected = itemIndex === selectedIndex;

                          return (
                            <button
                              key={item.id}
                              onClick={() => handleSelect(item.path)}
                              onMouseEnter={() => setSelectedIndex(itemIndex)}
                              className={`w-full text-left px-3.5 py-2.5 rounded-2xl transition-all flex items-center justify-between group cursor-pointer border ${
                                isSelected
                                  ? 'bg-brand-soft border-brand-primary/40 text-brand-dark shadow-2xs'
                                  : 'border-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                            >
                              <div className="flex items-center gap-3.5 min-w-0 pr-3">
                                <div
                                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-2xs ${
                                    isSelected
                                      ? 'bg-brand-primary text-white'
                                      : 'bg-white border border-slate-200/90 text-brand-primary'
                                  }`}
                                >
                                  {cat === 'PAGES' && <FileText size={17} />}
                                  {cat === 'PROGRAMS' && <Heart size={17} />}
                                  {cat === 'RESOURCES' && <ShieldCheck size={17} />}
                                  {cat === 'FAQS & LOCATION' && <MapPin size={17} />}
                                </div>
                                <div className="truncate">
                                  <div className="text-sm font-semibold truncate flex items-center gap-2">
                                    <span className="text-slate-900">{item.title}</span>
                                    <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-normal">
                                      {item.path}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <div className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="shrink-0 flex items-center gap-1.5">
                                <span
                                  className={`text-[11px] font-semibold text-brand-primary transition-opacity ${
                                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                  }`}
                                >
                                  Jump
                                </span>
                                <ArrowRight
                                  size={15}
                                  className={`transition-all ${
                                    isSelected
                                      ? 'text-brand-primary translate-x-0.5'
                                      : 'text-slate-400 opacity-0 group-hover:opacity-100'
                                  }`}
                                />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Guide & Link */}
            <div className="bg-slate-50 border-t border-slate-200/80 px-5 py-3 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-200 rounded shadow-2xs">↑</kbd>
                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-200 rounded shadow-2xs">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="hidden sm:flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-200 rounded shadow-2xs">
                    <CornerDownLeft size={10} className="inline mr-0.5" />
                    Enter
                  </kbd>
                  <span>Select</span>
                </span>
              </div>

              <button
                onClick={() => handleSelect('/contact')}
                className="text-brand-primary hover:text-brand-deep font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>Direct Contact</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
