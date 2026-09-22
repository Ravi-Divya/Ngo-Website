import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Copy, Check, Heart, Building2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface AmountOption {
  amount: number;
  label: string;
  impact: string;
}

const amounts: AmountOption[] = [
  {
    amount: 500,
    label: '₹500',
    impact: 'Equips 1 child with an annual school bag, notebooks, and learning supplies',
  },
  {
    amount: 1000,
    label: '₹1,000',
    impact: 'Provides monthly hygiene, nutrition, and first-aid kits for a rural household',
  },
  {
    amount: 2500,
    label: '₹2,500',
    impact: 'Feeds a Yanadi tribal family with dry rations (rice, dal, cooking oil) for 1 month',
  },
  {
    amount: 5000,
    label: '₹5,000',
    impact: 'Funds household pipeline tap connections for safe, clean drinking water',
  },
];

export default function DonationQuickCTA() {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  const handleCopy = (text: string, type: 'acc' | 'ifsc') => {
    navigator.clipboard.writeText(text);
    if (type === 'acc') {
      setCopiedAcc(true);
      setTimeout(() => setCopiedAcc(false), 2000);
    } else {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    }
  };

  const selectedOption = amounts.find((a) => a.amount === selectedAmount);

  return (
    <section id="donate-cta" className="py-16 md:py-24 bg-gradient-to-b from-brand-soft/40 to-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-6xl">
        
        <div className="bg-white rounded-3xl border-2 border-brand-light shadow-xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 mb-3 border border-brand-light">
              <Sparkles size={13} /> Direct Ground Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
              Empower a Community Today
            </h2>
            <p className="text-brand-deep text-sm md:text-base mt-3 leading-relaxed">
              Every rupee donated is directly converted into education, clean drinking water, and permanent shelter for rural families.
            </p>
          </div>

          {/* Amount Options Selector */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {amounts.map((item) => (
                <button
                  key={item.amount}
                  type="button"
                  onClick={() => setSelectedAmount(item.amount)}
                  className={`py-3.5 px-4 rounded-2xl font-display font-bold text-lg transition-all cursor-pointer border ${
                    selectedAmount === item.amount
                      ? 'bg-brand-primary text-white border-brand-primary shadow-md scale-102'
                      : 'bg-brand-soft/60 text-brand-dark border-brand-light hover:border-brand-primary/40'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dynamic Impact Statement */}
            <motion.div
              key={selectedAmount}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-soft p-4 rounded-2xl border border-brand-light text-center"
            >
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block mb-1">
                Your ₹{selectedAmount.toLocaleString('en-IN')} Contribution Achieves:
              </span>
              <p className="text-brand-dark font-medium text-sm md:text-base">
                {selectedOption?.impact}
              </p>
            </motion.div>

            {/* Donate Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                to="/donate"
                className="w-full sm:flex-1 bg-brand-primary hover:bg-brand-deep text-white font-bold py-4 px-8 rounded-full text-center text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart size={18} />
                <span>Donate ₹{selectedAmount.toLocaleString('en-IN')} Now</span>
              </Link>

              <Link
                to="/donate"
                className="w-full sm:w-auto border-2 border-brand-light hover:border-brand-primary text-brand-deep font-bold py-3.5 px-6 rounded-full text-center text-sm transition-all"
              >
                Custom Amount
              </Link>
            </div>

            {/* Bank Transfer Details Accordion / Quick Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 mt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-dark uppercase tracking-wider">
                <Building2 size={16} className="text-brand-primary" />
                <span>Direct NEFT / RTGS / IMPS Bank Transfer</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Account Number</span>
                    <span className="font-mono font-bold text-slate-800 text-xs sm:text-sm">0852101019697</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('0852101019697', 'acc')}
                    className="text-brand-primary hover:text-brand-deep p-1.5 rounded-md hover:bg-brand-soft transition-colors cursor-pointer"
                    title="Copy Account Number"
                  >
                    {copiedAcc ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">IFSC Code</span>
                    <span className="font-mono font-bold text-slate-800 text-xs sm:text-sm">CNRB0000852</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('CNRB0000852', 'ifsc')}
                    className="text-brand-primary hover:text-brand-deep p-1.5 rounded-md hover:bg-brand-soft transition-colors cursor-pointer"
                    title="Copy IFSC Code"
                  >
                    {copiedIfsc ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 text-center sm:text-left">
                Bank: Canara Bank, Doraiswamy Ayangar, Chittoor &bull; Beneficiary: COMMUNITY ALTERNATIVE RESEARCH AND DEVELOPMENT
              </p>
            </div>

            {/* Tax Exemption Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-brand-muted text-center pt-2">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span>All Indian donations are 50% tax exempt under Section 80G. Tax receipt emailed upon verification.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
