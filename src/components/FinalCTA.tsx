import { Link } from 'react-router-dom';
import { Heart, Users, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0B1E36] via-[#071628] to-[#040C17] text-white relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 max-w-5xl relative z-10 text-center space-y-8">
        
        {/* Trust Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-sky-300 border border-white/15"
        >
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>30 Years of Grassroots Trust &bull; 80G Tax Exemption Certified</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto"
        >
          Every Child Deserves Learning. Every Family Deserves Dignity.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sky-100/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Join hands with Community Alternative Research and Development (CARD) today. Together, we can build permanent brick homes, secure clean drinking water, and educate the next generation of rural Andhra Pradesh.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/donate"
            className="bg-brand-primary hover:bg-sky-400 text-white font-bold py-4 px-9 rounded-full text-base shadow-xl hover:shadow-sky-500/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Heart size={18} />
            <span>Donate Now (80G Benefit)</span>
          </Link>

          <Link
            to="/contact"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-8 rounded-full text-base backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Users size={18} />
            <span>Volunteer With Us</span>
          </Link>

          <Link
            to="/contact"
            className="text-sky-300 hover:text-white font-semibold py-4 px-6 text-sm transition-colors flex items-center gap-1.5"
          >
            <Mail size={16} />
            <span>Contact Our Team</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-6 text-xs text-white/50"
        >
          Registered NGO with Government of AP &bull; Income Tax 12A &amp; 80G Certified &bull; FCRA Approved
        </motion.div>

      </div>
    </section>
  );
}
