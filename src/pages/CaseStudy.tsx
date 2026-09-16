import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Calendar, User, Tag } from 'lucide-react';

export default function CaseStudy() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="/jaga_portrait.png"
          alt="Community support in rural India"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <article className="relative z-10 -mt-32 mx-auto w-full max-w-3xl px-4 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-2xl px-8 md:px-14 pt-10 pb-8 mb-10 border border-brand-light"
        >
          <div className="mb-6">
            <span className="bg-brand-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Case Study
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-dark leading-tight mb-5">
            When Silence Becomes a Cry for Help: <span className="whitespace-nowrap">The Story of <span className="text-brand-primary">S.&nbsp;Jaga</span></span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-muted border-b border-brand-light pb-6 mb-6">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              <span>S. Ravi, President — CARD</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>May 2006</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} />
              <span>Disability Rights · Women Empowerment · Rural India</span>
            </span>
          </div>

          <p className="text-xl text-brand-deep leading-relaxed font-serif italic">
            She is thirty years old. She cannot speak. She cannot hear. She never learned to read. And yet, her story is one of the most articulate indictments of a society that has failed its most vulnerable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-brand-deep text-[18px] leading-[1.9] mb-6">
            <span className="whitespace-nowrap">S.&nbsp;Jaga</span>, 30 years old, a mute (deaf and dumb) lady, residing in Amullathala Dalitwada village in Chittoor District, Andhra Pradesh. She is the only daughter of Mr. Sagayadevan and Mrs. Shantha. Mother Shantha passed away a few years ago. The father is taking care of Kaja. She got married to one Mr. Subramaniam, an agriculture laborer. The marriage took place in the famous Venkatachalapathi temple, Tirupathi in the year of 2005.
          </p>
          <p className="text-brand-deep text-[18px] leading-[1.9] mb-6">
            <span className="whitespace-nowrap">S.&nbsp;Jaga</span> encountered torture physically and chased away by her husband after merely a week's time from her marriage day. She is illiterate, unable to express her feelings and problems. When she returned home her father realized that she lost her married life and will remain with him forever. It was highly difficult for him to take care of his daughter. He hardly finds work to earn out a living. Finally he decided to remove the uterus of her daughter in order to prevent her from becoming pregnant due to sexual exploitation. He approached a Doctor in the Govt. hospital in Thoo Kundram. The Doctor advised him not to remove the uterus but she can undergo Sterilization so that she could never get pregnant. Eventually she underwent the operation in 2006. She was not aware of what happened to her.
          </p>

          <div className="not-prose bg-brand-soft border-l-4 border-brand-dark rounded-r-2xl px-8 py-6 my-8">
            <p className="text-brand-dark text-[17px] leading-relaxed">
              <strong>PS:</strong> This case study indicates that the physically challenged women do not have the basic rights to lead a normal life. The rights were violated badly. This project will address the physically challenged women's problems in a specific way to protect them from all forms of physical and sexual harassments and discrimination. The project will empower them socially and politically to confront the reality.
            </p>
          </div>

          <div className="not-prose border-t border-brand-light pt-8 mb-10 flex items-start gap-5">
            <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center shrink-0">
              <Heart size={22} className="text-brand-primary" />
            </div>
            <div>
              <p className="font-bold text-brand-dark text-lg">S. Ravi</p>
              <p className="text-brand-muted text-sm">President, CARD (Community Action for Rural Development)</p>
              <p className="text-brand-muted/60 text-xs mt-1">Mittapalyam, Ellamarajupalli Post, G.D. Nellore Mandal, Chittoor District, Andhra Pradesh</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-dark to-brand-deep rounded-3xl p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Be the Voice She Never Had</h3>
            <p className="text-white/60 mb-8 leading-relaxed max-w-xl mx-auto">
              Your contribution helps CARD reach, document, and empower the most vulnerable women in rural India. Every rupee matters. Every story matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="bg-white text-brand-primary px-8 py-3.5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-2"
              >
                Donate Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/40 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}