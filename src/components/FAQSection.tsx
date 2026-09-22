import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can I volunteer with CARD?",
    answer: "We welcome passionate individuals! You can reach out to us via the contact form above, detailing your area of interest and availability. Our team will get back to you with upcoming volunteer opportunities."
  },
  {
    question: "Are donations to CARD tax-exempt?",
    answer: "Yes, all monetary contributions to CARD are eligible for tax exemption under Section 80G of the Income Tax Act. We provide an official receipt for all donations."
  },
  {
    question: "Where are your programs primarily located?",
    answer: "Our grassroots initiatives are primarily focused on the Chittoor District of Andhra Pradesh, where we partner with marginalized families, Yanadi tribal communities, and smallholder farmers."
  },
  {
    question: "Can I sponsor a specific project?",
    answer: "Absolutely. We offer options to support specific initiatives such as rural education, women's empowerment, or sustainable agriculture. Please contact us directly to discuss project sponsorships."
  },
  {
    question: "How can I visit your office or field projects?",
    answer: "You are always welcome to visit our registered office during working hours. If you wish to visit our field projects, we request that you schedule an appointment in advance so we can arrange a guided tour with our field staff."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Frequently Asked Questions</h2>
        <p className="text-brand-deep text-sm md:text-base max-w-2xl mx-auto">
          Have questions about our work, donations, or volunteering? Find answers to the most common queries below.
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
  );
}
