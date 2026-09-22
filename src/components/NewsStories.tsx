import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Award, BookOpen, TreePine } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsItem {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
  icon: typeof Award;
}

const newsItems: NewsItem[] = [
  {
    title: 'Founder S. Ravi Felicitated by District Collector and MP for 30-Year Grassroots Service',
    category: 'Civic Honor',
    date: 'Recent Honor',
    excerpt: 'Chittoor MP Sri Daggumalla Prasada Rao and District Collector Sri Sumit Kumar IAS officially commended CARD for three decades of tribal empowerment.',
    image: '/images/card_felicitation_award.jpg',
    link: '/about',
    icon: Award,
  },
  {
    title: 'Girl Child Education Support Expanded to 8 Tribal Settlements with International Partner OTF',
    category: 'Education Milestone',
    date: 'Field Update',
    excerpt: 'Comprehensive academic kits, uniforms, and evening study sessions launched in Dasarapalli ST Colony, curbing early dropouts among young girls.',
    image: '/images/clothing_formal_donation.jpg',
    link: '/otf',
    icon: BookOpen,
  },
  {
    title: '5,000+ Fruit & Shade Saplings Raised in Community Nurseries Under MGNREGS Partnership',
    category: 'Environmental Action',
    date: 'Sustainability',
    excerpt: 'Rural wage labourers in Gudipala Gram Panchayats organized into Shrama Shakthi Sangha groups, generating sustainable wages and enhancing soil moisture.',
    image: '/images/mgnregs_1.jpg',
    link: '/mgnregs',
    icon: TreePine,
  },
];

export default function NewsStories() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            In The News &bull; Press &amp; Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            News &amp; Field Stories
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Highlights of government recognitions, project expansions, and notable milestones from our field teams.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-brand-light overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-brand-dark shadow-2xs">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted mb-2">
                    <Calendar size={13} />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-base md:text-lg text-brand-dark mb-2.5 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-brand-deep text-xs md:text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-light/70">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-1.5 font-bold text-xs text-brand-primary hover:text-brand-deep transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
