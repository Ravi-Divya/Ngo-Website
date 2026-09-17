import Hero from '../components/Hero';
import PartnersScroll from '../components/PartnersScroll';
import ResourcesSection from '../components/ResourcesSection';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, HeartHandshake, TreePine, BookOpen, Utensils } from 'lucide-react';

const programs = [
  {
    id: 'mgnregs',
    title: 'MGNREGS SSS Group Formation',
    tagline: 'Awareness programs, community nursery raising & rural wage employment in Gudipala GPs.',
    icon: TreePine,
    link: '/mgnregs',
    image: '/images/mgnregs_1.jpg',
  },
  {
    id: 'lacim',
    title: 'LACIM Tribal Development & Rehabilitation',
    tagline: 'Community upliftment, sanitation, and child education in Yanadi ST colonies.',
    icon: Users,
    link: '/lacim',
    image: '/images/lacim_1.jpg',
  },
  {
    id: 'otf',
    title: 'OTF Girl Child Education Support',
    tagline: 'Supply of learning materials and school support for poor girl children in Dasarapalli ST Colony.',
    icon: BookOpen,
    link: '/otf',
    image: '/images/otf_1.jpg',
  },
  {
    id: 'melania',
    title: 'Melania Livelihoods — Broom Makers',
    tagline: 'Empowering tribal women broom makers of Puthalapattu with livelihood support & enterprise.',
    icon: HeartHandshake,
    link: '/melania',
    image: '/images/melania_1.jpg',
  },
  {
    id: 'pollination',
    title: 'The Pollination — Food Grains Relief',
    tagline: 'Emergency Covid-19 food groceries and grain distribution in Buchanna Kandiga & Singagara Peta.',
    icon: Utensils,
    link: '/pollination',
    image: '/images/pollination_1.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Banner / Hero */}
      <Hero />

      {/* 1st Section: Who We Are */}
      <section className="py-14 md:py-18 bg-white border-b border-brand-light">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark leading-tight">
                About Us
              </h2>
              <div className="w-16 h-1 bg-brand-primary rounded-full mb-1"></div>
              <p className="text-brand-deep text-base md:text-lg leading-relaxed">
                Established in 1995 by founder <strong>S. Ravi</strong>, <strong>Community Alternative Research and Development (CARD)</strong> is a registered non-profit organization with 30 years of empowering rural communities across Andhra Pradesh.
              </p>
              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                Over three decades, CARD has pioneered permanent housing colonies for Yanadi tribal families, quality education for underprivileged rural children, drinking water infrastructure, and sustainable agricultural livelihoods across 150+ villages in Chittoor District.
              </p>
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
                <div className="bg-brand-soft p-3 md:p-3.5 rounded-2xl border border-brand-light text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-brand-primary">1995</div>
                  <div className="text-[10px] md:text-xs text-brand-muted mt-0.5 font-semibold uppercase tracking-wider">Established</div>
                </div>
                <div className="bg-brand-soft p-3 md:p-3.5 rounded-2xl border border-brand-light text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-brand-primary">150+</div>
                  <div className="text-[10px] md:text-xs text-brand-muted mt-0.5 font-semibold uppercase tracking-wider">Villages Served</div>
                </div>
                <div className="bg-brand-soft p-3 md:p-3.5 rounded-2xl border border-brand-light text-center">
                  <div className="text-xl md:text-2xl font-display font-bold text-brand-primary">50,000+</div>
                  <div className="text-[10px] md:text-xs text-brand-muted mt-0.5 font-semibold uppercase tracking-wider">Lives Impacted</div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold rounded-full px-6 py-3 text-sm md:text-base shadow-md hover:bg-brand-deep transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-brand-light bg-slate-100 max-w-sm w-full">
                <img
                  src="/images/card_felicitation_award.jpg"
                  alt="Founder S. Ravi felicitated by Chittoor MP Daggumalla Prasada Rao, District Collector Sumit Kumar IAS, and CHUDA Chairperson Katari Hemalatha"
                  className="w-full h-52 sm:h-56 md:h-64 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] md:text-xs text-brand-muted text-center mt-2.5 max-w-xs font-medium leading-tight">
                Founder <strong>S. Ravi</strong> felicitated by Chittoor MP <strong>Daggumalla Prasada Rao</strong>, District Collector <strong>Sumit Kumar, IAS</strong>, and CHUDA Chairperson <strong>Katari Hemalatha</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Our Programs */}
      <section className="py-16 md:py-24 bg-white border-b border-brand-light">
        <div className="container mx-auto px-4 md:px-10">
          <Section className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-2">
              Our Programs
            </h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div
                  key={prog.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-brand-light shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col"
                >
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-xl text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-brand-deep text-sm leading-relaxed mb-6 flex-grow">
                      {prog.tagline}
                    </p>
                    <Link
                      to={prog.link}
                      className="inline-flex items-center gap-2 font-bold text-sm text-brand-primary hover:text-brand-deep transition-colors"
                    >
                      Read Full Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3rd Section: Governance & Compliance Reports */}
      <ResourcesSection />

      {/* 4th Section: Our Partners */}
      <PartnersScroll />

    </div>
  );
}