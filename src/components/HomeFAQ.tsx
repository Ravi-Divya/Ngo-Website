import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
  {
    id: 'faq-5',
    question: 'How does CARD ensure financial transparency and reporting?',
    answer: 'CARD undergoes independent annual statutory audits, submits yearly filings to the Ministry of Corporate Affairs, maintains active NGO DARPAN accreditation (AP/2017/0158245), and provides detailed utilization reports directly to all institutional and individual donors.',
  },
];

export default function HomeFAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white text-brand-dark relative overflow-hidden border-b border-brand-light">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft/60 rounded-full blur-3xl pointer-events-none" />

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

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Section Header matching Contact Us */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2">
            FAQ's
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-brand-dark tracking-tight leading-tight">
              Questions we get asked
            </h3>

            <p className="text-brand-muted text-sm md:text-base leading-relaxed pt-1 max-w-md font-sans">
              Everything you need to know about our grassroots field work, Section 80G tax deductions, and visiting community projects across Chittoor.
            </p>

            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-deep font-bold text-sm transition-colors group"
              >
                <span>Have a question not listed here? Contact us</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Minimalist divider rows on White Background */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5 transition-colors">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full text-left flex items-start justify-between gap-6 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-display text-base sm:text-lg transition-colors font-medium ${
                        isOpen ? 'text-brand-primary' : 'text-slate-900 group-hover:text-brand-primary'
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="shrink-0 mt-1">
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand-primary' : 'group-hover:text-brand-primary'
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pr-6 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
