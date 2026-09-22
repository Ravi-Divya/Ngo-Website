import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Are donations to CARD eligible for 80G tax exemption in India?',
    answer: 'Yes. Donations made to CARD qualify for a 50% tax deduction under Section 80G of the Indian Income Tax Act. Every donor receives an official 80G tax certificate along with our 12A registration details for quick e-filing with the Income Tax Department.',
  },
  {
    id: 'faq-2',
    question: 'Where does CARD operate in Chittoor District, Andhra Pradesh?',
    answer: 'Our registered headquarters is in Mittapalyam, Chittoor District (PIN 517125). We actively operate across 5+ Mandals including Gudipala, Anupu / Dasarapalli, Puthalapattu, G.D. Nellore, and Singagarapeta, covering more than 150 rural habitations.',
  },
  {
    id: 'faq-3',
    question: 'What are CARD’s primary grassroots development programs?',
    answer: 'Our core focus areas include: permanent brick housing colonies for Yanadi indigenous tribes, supplementary education and nutrition via LACIM child centers, safe drinking water RO plants, and sustainable livelihoods through beekeeping and agriculture.',
  },
  {
    id: 'faq-4',
    question: 'Can donors and corporate partners visit project sites in Chittoor?',
    answer: 'Yes, absolutely. CARD maintains a complete open-door policy. Donors and CSR representatives are welcome to visit our community schools, Yanadi tribal settlements, and clean water stations in Chittoor. Contact our team to coordinate local field transport.',
  },
];

export default function HomeFAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

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

      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        {/* Simple & Clean Section Header: Just FAQ's as requested */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light/60 text-brand-deep text-xs font-bold tracking-widest uppercase mb-2">
            <HelpCircle size={13} className="text-brand-primary" />
            Common Inquiries
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark tracking-tight">
            FAQ&apos;s
          </h2>
          <p className="text-brand-muted text-sm md:text-base mt-2">
            Quick answers regarding our field work, 80G tax benefits, and visits.
          </p>
        </div>

        {/* 4 Focused Accordion Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
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
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-5 md:px-6 pb-5 pt-1 border-t border-brand-light/50">
                        <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Small reassurance footer */}
        <div className="mt-8 text-center bg-brand-soft/40 rounded-2xl p-4 border border-brand-light flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-brand-deep">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-primary" />
            <span>Have more questions about our projects or partnerships?</span>
          </div>
          <Link
            to="/contact"
            className="font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
          >
            Reach Out to Our Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
