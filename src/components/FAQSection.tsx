import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How are donations utilized and how transparent is CARD's financial management?",
    answer: "CARD operates under strict fiscal governance with annual audits filed with the Income Tax Department and Ministry of Home Affairs (FCRA). Over 90% of contributed resources go directly into field deliverables—such as construction materials for tribal brick housing, learning supplies for school kits, and borewell drilling—with minimal administrative overhead."
  },
  {
    question: "How and when do I receive my Section 80G tax exemption certificate?",
    answer: "All domestic contributions to CARD are eligible for a 50% tax deduction under Section 80G of the Income Tax Act. After completing your bank transfer or donation, simply email your transaction screenshot, Full Name, Address, and PAN Number to cardngo.org@gmail.com. Our accounts team will verify and issue your official 80G receipt within 48 to 72 hours."
  },
  {
    question: "Who are the primary beneficiary groups that CARD supports?",
    answer: "Our grassroots initiatives are primarily focused on the indigenous Yanadi Scheduled Tribe (ST) communities, underprivileged rural school children, women artisans (such as broom makers), landless agricultural wage labourers, and differently-abled individuals across Chittoor District, Andhra Pradesh."
  },
  {
    question: "How can I volunteer or intern with CARD on the ground or remotely?",
    answer: "We welcome individuals from all backgrounds! You can contribute on the ground in Chittoor (child tutoring, community health camps, photo documentation) or remotely (grant writing, research, graphic design). Simply fill out our Volunteer Application form under Get Involved or contact us directly."
  },
  {
    question: "Can corporate organizations collaborate with CARD for CSR projects?",
    answer: "Yes. CARD is registered with the Ministry of Corporate Affairs for CSR (CSR-1) and holds active 12AB, 80G, and NITI Aayog NGO Darpan registrations. We partner with corporate foundations to deliver turnkey infrastructure projects—including community borewells, solar street lighting, and school sanitation facilities."
  },
  {
    question: "Can donors and supporters visit CARD's field projects in Chittoor?",
    answer: "Absolutely. We encourage visitors to witness the grassroots transformation firsthand. You are welcome to visit our registered office in Chittoor town or schedule an advance field visit to Anupu ST Colony, Dasarapalli school centers, or our MGNREGS community tree nurseries."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-4"></div>
          <p className="text-brand-deep text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our field projects, donation transparency, 80G tax receipts, and volunteer participation.
          </p>
        </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                isOpen ? 'border-brand-primary/30 bg-white shadow-md' : 'border-brand-light bg-brand-soft/30 hover:border-brand-primary/20 hover:bg-brand-soft/60'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-dark'}`}>
                  {faq.question}
                </span>
                <span className={`ml-4 shrink-0 transition-colors ${isOpen ? 'text-brand-primary' : 'text-brand-muted'}`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-brand-deep leading-relaxed text-sm md:text-base border-t border-gray-100 mt-2">
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
