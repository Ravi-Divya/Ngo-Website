import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarLetter: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Before CARD intervened to construct our permanent housing colony, every heavy monsoon wiped away our thatch huts. Today, over 450 families in our mandals sleep securely under solid brick roofs with legal land titles and clean drinking water.",
    author: "Ramanamma",
    role: "Community Elder & SHG Member",
    location: "Anupu Yanadi ST Colony",
    avatarLetter: "R",
  },
  {
    quote: "Our partnership with CARD has spanned over 20 years. What stands out consistently is their unwavering fiscal transparency, regular photographic field reports, and their total commitment to unorganized tribal populations.",
    author: "International Project Director",
    role: "European NGO Partner",
    location: "France / LACIM",
    avatarLetter: "L",
  },
  {
    quote: "Spending weeks in the field with CARD’s team in Chittoor showed me the true meaning of grassroots action. There are no middlemen—every single school kit and ration package is placed directly into a child's hands.",
    author: "Kavitha R.",
    role: "Youth Volunteer & Educator",
    location: "Tirupati / Chittoor",
    avatarLetter: "K",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/40 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            Community Voices
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            What People Say About CARD
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Feedback from community leaders, international partners, and grassroots volunteers who experience our work firsthand.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 border border-brand-light shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote size={28} className="text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-brand-deep text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-light text-brand-primary font-bold flex items-center justify-center shrink-0">
                  {t.avatarLetter}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-brand-dark">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-brand-muted">
                    {t.role} &bull; {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
