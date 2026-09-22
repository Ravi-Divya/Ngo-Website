import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface FAQ {
  id: string;
  category: 'Tax & 80G' | 'Programs & Geo' | 'Visits & CSR';
  question: string;
  answer: string;
  keywords: string[];
}

const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Tax & 80G',
    question: 'Are donations to CARD eligible for 80G tax exemption in India?',
    answer: 'Yes. Donations made to CARD (Community Alternative Research and Development) qualify for a 50% tax deduction under Section 80G of the Indian Income Tax Act. Upon making a donation, an official 80G tax receipt is issued with our 12A registration credentials for seamless e-filing with the Income Tax Department.',
    keywords: ['80G tax exemption', 'income tax rebate', '12A registration', 'charity tax deduction India', 'official receipt']
  },
  {
    id: 'faq-2',
    category: 'Programs & Geo',
    question: 'Where does CARD operate in Chittoor District, Andhra Pradesh?',
    answer: 'CARD is based out of Mittapalyam, Chittoor District, Andhra Pradesh (PIN 517125). We actively operate across 5+ Mandals including Gudipala, Anupu / Dasarapalli, Puthalapattu, G.D. Nellore, and Singagarapeta, covering more than 150 rural and tribal habitations.',
    keywords: ['Chittoor NGO', 'Andhra Pradesh rural development', 'Mittapalyam', 'Gudipala', 'Yanadi tribal villages', 'South India NGO']
  },
  {
    id: 'faq-3',
    category: 'Programs & Geo',
    question: 'What are CARD’s primary grassroots development initiatives?',
    answer: 'Our core focus areas include: (1) Permanent brick housing colonies for Yanadi indigenous tribes, (2) Supplementary quality education and nutrition through LACIM child centers, (3) Clean drinking water and RO filtration plants in fluoride-affected villages, (4) Sustainable rural livelihoods via beekeeping and pollination farming, and (5) Social audits under MGNREGS.',
    keywords: ['Yanadi tribe housing', 'child education NGO', 'rural drinking water', 'sustainable livelihoods', 'MGNREGS social audit']
  },
  {
    id: 'faq-4',
    category: 'Visits & CSR',
    question: 'Can individual donors and corporate partners visit project sites in Chittoor?',
    answer: 'Absolutely. CARD maintains a 100% open-door policy. We actively encourage donors, institutional partners, and corporate representatives to visit our community learning centers, tribal housing colonies, and RO water stations in Chittoor. Please reach out to our team in advance to coordinate local field transport and guided village walkthroughs.',
    keywords: ['field visit Chittoor', 'grassroots transparency', 'volunteer visit', 'NGO community tour', 'ground verification']
  },
  {
    id: 'faq-5',
    category: 'Visits & CSR',
    question: 'How can corporate companies partner with CARD for Section 135 CSR projects?',
    answer: 'CARD is registered with the Ministry of Corporate Affairs (MCA) under CSR-1 and is eligible to execute Corporate Social Responsibility (CSR) projects under Section 135 of the Companies Act, 2013. We provide end-to-end baseline surveys, impact metrics reporting, third-party audits, and compliance documentation for corporate CSR foundations.',
    keywords: ['CSR Section 135', 'MCA CSR-1 registered', 'corporate social responsibility Chittoor', 'corporate charity partnership']
  },
  {
    id: 'faq-6',
    category: 'Tax & 80G',
    question: 'Is CARD registered under FCRA to accept international contributions?',
    answer: 'Yes. CARD holds valid registration under the Foreign Contribution (Regulation) Act (FCRA) administered by the Ministry of Home Affairs, Government of India, along with registration on the NITI Aayog NGO-DARPAN portal (ID: AP/2017/0158245).',
    keywords: ['FCRA approved NGO', 'NITI Aayog NGO Darpan', 'international charity donation', 'Ministry of Home Affairs compliance']
  }
];

export default function HomeFAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white border-b border-brand-light relative">
      {/* Schema.org FAQPage JSON-LD for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="container mx-auto px-4 md:px-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light/60 text-brand-deep text-xs font-bold tracking-widest uppercase mb-3">
            <HelpCircle size={14} className="text-brand-primary" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark tracking-tight">
            Everything You Need to Know About CARD
          </h2>
          <p className="text-brand-muted text-base md:text-lg mt-3 leading-relaxed">
            Transparent answers on our 80G tax certifications, Chittoor field operations, corporate CSR partnerships, and open community visits.
          </p>
        </div>

        {/* Live Search & Filter Bar to maximize user engagement and reduce bounce rate */}
        <div className="bg-brand-soft/60 rounded-2xl p-4 border border-brand-light mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Tax & 80G', 'Programs & Geo', 'Visits & CSR'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'bg-white text-brand-deep border border-brand-light hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Keyword Search */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. 80G, Chittoor)..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-full border border-brand-light text-xs text-brand-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
            />
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-brand-soft/30 rounded-2xl border border-brand-light p-6">
              <p className="text-brand-deep font-semibold">No questions matched "{searchQuery}"</p>
              <p className="text-xs text-brand-muted mt-1">Try keywords like "80G", "Chittoor", "Housing", or "CSR".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs font-bold text-brand-primary hover:underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-primary/40 bg-white shadow-md'
                      : 'border-brand-light bg-brand-soft/30 hover:bg-white hover:border-brand-light'
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0 opacity-80 group-hover:scale-125 transition-transform" />
                      <span className="font-display font-bold text-base md:text-lg text-brand-dark group-hover:text-brand-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-primary text-white' : 'bg-white border border-brand-light text-slate-500'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 md:px-6 pb-5 pt-1 border-t border-brand-light/50">
                          <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          {/* Keyword Tags for Visual Relevance & SEO Context */}
                          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-dashed border-brand-light/60">
                            {faq.keywords.map((k) => (
                              <span
                                key={k}
                                className="px-2 py-0.5 rounded-md bg-brand-soft text-slate-500 text-[10px] font-mono"
                              >
                                #{k}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Small reassurance strip below FAQs */}
        <div className="mt-8 text-center bg-brand-soft/40 rounded-2xl p-4 border border-brand-light flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-brand-deep">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-primary" />
            <span>Have a specific legal or project inquiry not covered here?</span>
          </div>
          <Link
            to="/contact"
            className="font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
          >
            Directly Contact Our Director’s Desk →
          </Link>
        </div>
      </div>
    </section>
  );
}
