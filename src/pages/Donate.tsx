import { useState } from 'react';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { ShieldCheck, FileText, CheckCircle2, Building2, Copy, Check, Info } from 'lucide-react';

export default function Donate() {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedIfsc, setCopiedIfsc] = useState(false);

  const handleCopy = (text: string, type: 'account' | 'ifsc') => {
    navigator.clipboard.writeText(text);
    if (type === 'account') {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } else {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader title="Donate" />

      <main className="flex-grow py-12 md:py-18">
        <div className="container mx-auto px-4 md:px-10 max-w-4xl space-y-8">

          {/* 1. Starting Section: 80G & 12A Legal Registrations (Compact) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-brand-soft/70 border border-brand-light rounded-xl p-4 md:p-5 shadow-2xs space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary text-white rounded-lg flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h2 className="text-sm md:text-base font-display font-bold text-brand-dark">
                  Approved Non-Profit — 80G &amp; 12A Registered
                </h2>
                <p className="text-brand-deep text-xs leading-normal">
                  CARD is officially registered under the Income Tax Act &amp; Government of India. All domestic contributions are eligible for tax exemption under Section 80G.
                </p>
              </div>
            </div>

            {/* Compact Registration Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-brand-light/60">
              <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-brand-light text-xs font-semibold text-brand-dark shadow-2xs">
                <FileText size={13} className="text-brand-primary" />
                <span>12A Registered</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-brand-light text-xs font-semibold text-brand-dark shadow-2xs">
                <ShieldCheck size={13} className="text-brand-primary" />
                <span>80G Tax Exempt</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-brand-light text-xs font-semibold text-brand-dark shadow-2xs">
                <CheckCircle2 size={13} className="text-brand-primary" />
                <span>FCRA Registered</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Local Funds Box (Compact) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-brand-soft/70 border border-brand-light rounded-xl p-4 md:p-5 relative overflow-hidden shadow-2xs space-y-3.5"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 bg-brand-primary text-white rounded-lg flex items-center justify-center shrink-0 shadow-2xs">
                  <Building2 size={18} />
                </div>
                <h3 className="text-base md:text-lg font-display font-bold text-brand-dark">
                  Only Local Funds and Contribution
                </h3>
              </div>
              <p className="text-brand-muted text-xs">
                Direct bank transfer details for domestic contributions:
              </p>
            </div>

            {/* Bank Details - Compact Clean Dividers */}
            <div className="space-y-2 font-sans text-xs pt-0.5">
              
              {/* Account Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 pb-2 border-b border-brand-light/70">
                <span className="font-bold text-brand-primary uppercase text-[11px] tracking-wider shrink-0 sm:w-28">Name:</span>
                <span className="font-bold text-brand-dark text-xs sm:text-sm">COMMUNITY ALTERNATIVE RESEARCH AND DEVELOPMENT</span>
              </div>

              {/* Account No */}
              <div className="flex flex-wrap items-center justify-between gap-2 py-1.5 border-b border-brand-light/70">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-bold text-brand-primary uppercase text-[11px] tracking-wider shrink-0 sm:w-28">Account No:</span>
                  <span className="font-bold font-mono text-brand-dark text-xs sm:text-sm tracking-wide">0852101019697</span>
                </div>
                <button
                  onClick={() => handleCopy('0852101019697', 'account')}
                  className="bg-white hover:bg-brand-soft text-brand-primary text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors cursor-pointer border border-brand-light shadow-2xs"
                >
                  {copiedAccount ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
                  <span>{copiedAccount ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* IFSC Code */}
              <div className="flex flex-wrap items-center justify-between gap-2 py-1.5 border-b border-brand-light/70">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-bold text-brand-primary uppercase text-[11px] tracking-wider shrink-0 sm:w-28">IFSC Code:</span>
                  <span className="font-bold font-mono text-brand-dark text-xs sm:text-sm tracking-wide">CNRB0000852</span>
                </div>
                <button
                  onClick={() => handleCopy('CNRB0000852', 'ifsc')}
                  className="bg-white hover:bg-brand-soft text-brand-primary text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors cursor-pointer border border-brand-light shadow-2xs"
                >
                  {copiedIfsc ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
                  <span>{copiedIfsc ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* MICR Code */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 py-1.5 border-b border-brand-light/70">
                <span className="font-bold text-brand-primary uppercase text-[11px] tracking-wider shrink-0 sm:w-28">MICR Code:</span>
                <span className="font-bold font-mono text-brand-dark text-xs sm:text-sm tracking-wide">517015102</span>
              </div>

              {/* Bank Address */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 pt-1.5">
                <span className="font-bold text-brand-primary uppercase text-[11px] tracking-wider shrink-0 sm:w-28 mt-0.5">Bank:</span>
                <span className="font-semibold text-brand-dark text-xs leading-normal">CANARA BANK , DORAISWAMY AYANGAR, CHITTOOR, PIN 517001, ANDHRA PRADESH</span>
              </div>

            </div>
          </motion.div>

          {/* 3. Receipt Note */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 md:p-6 text-sm text-brand-dark flex items-start gap-3.5 shadow-2xs"
          >
            <Info size={22} className="text-brand-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold text-brand-dark text-base">Note on Official Tax Receipts</div>
              <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                After completing your contribution, please send your transaction details (reference screenshot, Full Name, Address, and PAN Number) to our email ID: <a href="mailto:cardngo.org@gmail.com" className="text-brand-primary font-bold underline">cardngo.org@gmail.com</a>. Our team will verify and send your official 80G tax exemption receipt directly to your email.
              </p>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}