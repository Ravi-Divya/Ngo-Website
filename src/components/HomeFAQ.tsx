import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

interface FAQ {
  category: 'donations' | 'field' | 'partner';
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    category: 'donations',
    question: 'Are donations to CARD tax-exempt under Section 80G?',
    answer: 'Yes, absolutely. All monetary donations to CARD are eligible for a 50% tax deduction under Section 80G of the Income Tax Act. After transferring via bank transfer or online, email your transaction details, Full Name, and PAN to cardngo.org@gmail.com to receive your official 80G certificate within 48 to 72 hours.',
  },
  {
    category: 'donations',
    question: 'How are donor funds utilized and how is transparency maintained?',
    answer: 'CARD operates with strict fiscal integrity. Over 90% of contributed resources go directly to tangible field deliverables—such as cement and bricks for permanent tribal homes, educational kits for school kids, and deep borewell equipment. We maintain annual statutory audits filed with the Income Tax Department and the Ministry of Home Affairs (FCRA).',
  },
  {
    category: 'field',
    question: 'Where are your primary field projects located and can I visit?',
    answer: 'Our grassroots operations are based across Chittoor District, Andhra Pradesh, with dedicated initiatives in Gudipala, GD Nellore, Puthalapattu, Anupu, and Dasarapalli. Donors, volunteers, and partners are always welcome to visit our registered office or schedule a guided field visit to witness our impact firsthand.',
  },
  {
    category: 'partner',
    question: 'Can corporate foundations collaborate with CARD for CSR initiatives?',
    answer: 'Yes. CARD is registered under CSR-1 with the Ministry of Corporate Affairs, and holds valid 12AB, 80G, and NITI Aayog NGO Darpan registrations. We partner with corporate institutions to execute high-impact turnkey projects including drinking water borewells, solar community lighting, and school development.',
  },
  {
    category: 'partner',
    question: 'How can I volunteer or intern with CARD on the ground or remotely?',
    answer: 'We welcome passionate students, educators, medical workers, photographers, and advocates! Volunteer opportunities range from weekend tutoring sessions in tribal colonies to remote grant writing and digital communications. You can submit an enquiry using the form below.',
  },
  {
    category: 'field',
    question: 'Can I sponsor an individual tribal child or a drinking water tap point?',
    answer: 'Yes. We offer targeted sponsorship programs that allow you to support a specific girl child’s annual educational kit and coaching, or fund an overhead water storage tank for an entire tribal colony, complete with photographic progress updates.',
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'donations' | 'field' | 'partner'>('all');

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faqs" className="py-16 md:py-24 bg-brand-soft/40 border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-light shadow-2xs mb-3">
            <HelpCircle size={13} />
            <span>Clear &amp; Transparent Answers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our field operations, 80G tax exemptions, volunteering, and project sponsorships.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Inquiries' },
            { id: 'donations', label: 'Donations & 80G' },
            { id: 'field', label: 'Field Projects & Visits' },
            { id: 'partner', label: 'Volunteering & CSR' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveCategory(tab.id as typeof activeCategory);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                activeCategory === tab.id
                  ? 'bg-brand-primary text-white border-brand-primary shadow-xs'
                  : 'bg-white text-brand-muted hover:text-brand-primary border-brand-light hover:border-brand-primary/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Cards */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-brand-primary/40 shadow-md'
                    : 'bg-white/80 hover:bg-white border-brand-light shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? 'text-brand-primary' : 'text-brand-dark'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-primary text-white' : 'bg-brand-soft text-brand-muted'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-brand-deep text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-sans">
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
    </section>
  );
}
