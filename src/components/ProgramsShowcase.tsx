import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  TreePine,
  HeartHandshake,
  Users,
  Droplets,
  BookOpen,
  Utensils,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface Program {
  id: string;
  title: string;
  tagline: string;
  columnId: 'livelihood' | 'housing' | 'education';
  columnTitle: string;
  icon: typeof TreePine;
  link: string;
  image: string;
  category: string;
  metric: string;
}

const programs: Program[] = [
  {
    id: 'mgnregs',
    title: 'MGNREGS SSS Group Formation',
    tagline: 'Awareness programs, community nursery raising & rural wage employment in Gudipala GPs.',
    columnId: 'livelihood',
    columnTitle: 'LIVELIHOODS & FORESTRY',
    icon: TreePine,
    link: '/mgnregs',
    image: '/images/mgnregs_1.jpg',
    category: 'Ecology & Jobs',
    metric: '300+ Wage Workers',
  },
  {
    id: 'melania',
    title: 'Melania Livelihoods — Broom Makers',
    tagline: 'Empowering tribal women broom makers of Puthalapattu with livelihood support & enterprise.',
    columnId: 'livelihood',
    columnTitle: 'LIVELIHOODS & FORESTRY',
    icon: HeartHandshake,
    link: '/melania',
    image: '/images/melania_1.jpg',
    category: 'Women Enterprise',
    metric: '150+ Women Artisans',
  },
  {
    id: 'lacim',
    title: 'LACIM Tribal Rehabilitation',
    tagline: 'Permanent disaster-resilient brick colonies, sanitation, and child education in Yanadi settlements.',
    columnId: 'housing',
    columnTitle: 'HOUSING & REHABILITATION',
    icon: Users,
    link: '/lacim',
    image: '/images/lacim_1.jpg',
    category: 'Colony Housing',
    metric: '450+ Homes Built',
  },
  {
    id: 'water',
    title: 'Drinking Water & Sanitation Network',
    tagline: 'Deep borewells, overhead tanks, and safe piped drinking water to eradicate waterborne diseases.',
    columnId: 'housing',
    columnTitle: 'HOUSING & REHABILITATION',
    icon: Droplets,
    link: '/our-work',
    image: '/images/water_infrastructure_1.jpg',
    category: 'Water Security',
    metric: '25+ Borewells Installed',
  },
  {
    id: 'otf',
    title: 'OTF Girl Child Education Support',
    tagline: 'Supply of learning materials, backpacks, uniforms, and evening academic tutoring in Dasarapalli.',
    columnId: 'education',
    columnTitle: 'EDUCATION & RELIEF',
    icon: BookOpen,
    link: '/otf',
    image: '/images/otf_1.jpg',
    category: 'Child Education',
    metric: '500+ Girl Students',
  },
  {
    id: 'pollination',
    title: 'The Pollination — Food Grains Relief',
    tagline: 'Emergency dry grocery kits and food grain security for daily wage families during crises.',
    columnId: 'education',
    columnTitle: 'EDUCATION & RELIEF',
    icon: Utensils,
    link: '/pollination',
    image: '/images/pollination_1.jpg',
    category: 'Emergency Nutrition',
    metric: '15,000+ Ration Kits',
  },
];

const columns = [
  { id: 'livelihood', title: 'LIVELIHOODS & FORESTRY' },
  { id: 'housing', title: 'HOUSING & REHABILITATION' },
  { id: 'education', title: 'EDUCATION & RELIEF' },
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    y: -15,
    scale: 0.96,
    transition: { duration: 0.25 },
  },
};

export default function ProgramsShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'livelihood' | 'housing' | 'education'>('all');

  const filteredColumns = activeTab === 'all' 
    ? columns 
    : columns.filter((col) => col.id === activeTab);

  return (
    <section id="our-programs" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/60 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-light mb-3">
            <Sparkles size={13} />
            <span>CARD Community Action</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-sm md:text-base mt-3 leading-relaxed">
            Explore our grassroots initiatives orchestrated across 150+ villages in Chittoor District, Andhra Pradesh.
          </p>
        </div>

        {/* Outer Dark Container styled like the uploaded design frame */}
        <div className="bg-[#0B0F17] rounded-3xl border border-slate-800/90 shadow-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
          
          {/* Subtle background gradient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top macOS-style window header bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
            {/* Left: 3 colored dots and subtle pill tabs */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444] shadow-xs inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-xs inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-xs inline-block" />
              </div>

              {/* Decorative pills matching screenshot */}
              <div className="hidden sm:flex items-center gap-2 ml-3">
                <div className="w-12 h-2.5 rounded-full bg-slate-800/70" />
                <div className="w-16 h-2.5 rounded-full bg-slate-800/70" />
                <div className="w-10 h-2.5 rounded-full bg-slate-800/70" />
              </div>
            </div>

            {/* Right: Badge matching screenshot's "NextStack Orchestration" */}
            <div className="bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs font-mono font-bold px-3 py-1 rounded-lg flex items-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CARD Grassroots Orchestration</span>
            </div>
          </div>

          {/* 3 Columns Grid matching the screenshot */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className={`grid gap-5 md:gap-6 ${
                activeTab === 'all'
                  ? 'grid-cols-1 lg:grid-cols-3'
                  : 'grid-cols-1 max-w-2xl mx-auto'
              }`}
            >
              {filteredColumns.map((col) => {
                const columnPrograms = programs.filter((p) => p.columnId === col.id);

                return (
                  <div
                    key={col.id}
                    className="bg-[#0E1420]/80 rounded-2xl border border-slate-800/80 p-4 sm:p-5 flex flex-col space-y-4"
                  >
                    {/* Column Title matching the screenshot */}
                    <div className="text-center pb-2">
                      <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                        {col.title}
                      </span>
                    </div>

                    {/* Cards appearing one by one */}
                    <div className="space-y-4 flex-grow">
                      {columnPrograms.map((prog) => {
                        const Icon = prog.icon;
                        return (
                          <motion.div
                            key={prog.id}
                            variants={cardVariants}
                            className="bg-[#131B26] hover:bg-[#182332] rounded-2xl border border-slate-800/90 hover:border-emerald-500/40 p-4 transition-all duration-300 shadow-lg group flex flex-col justify-between"
                          >
                            <div>
                              {/* Top Bar with glowing green indicator & dot (matching the screenshot exactly!) */}
                              <div className="flex items-center justify-between mb-3.5">
                                <div className="h-2 w-36 sm:w-44 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                              </div>

                              {/* Small placeholder line below indicator, matching the screenshot */}
                              <div className="w-20 h-1.5 rounded-full bg-slate-800 mb-3" />

                              {/* Thumbnail Image + Badge */}
                              <div className="relative h-32 rounded-xl overflow-hidden mb-3.5 bg-slate-900 border border-slate-800/80">
                                <img
                                  src={prog.image}
                                  alt={prog.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                                  {prog.category}
                                </div>
                                <div className="absolute bottom-2 right-2 bg-emerald-950/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-mono text-emerald-300 border border-emerald-400/20">
                                  {prog.metric}
                                </div>
                              </div>

                              {/* Program Title */}
                              <div className="flex items-start gap-2.5 mb-2">
                                <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                                  <Icon size={15} />
                                </div>
                                <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-emerald-300 transition-colors leading-snug">
                                  {prog.title}
                                </h3>
                              </div>

                              {/* Description */}
                              <p className="text-slate-400 text-xs leading-relaxed mb-4 pl-9">
                                {prog.tagline}
                              </p>
                            </div>

                            {/* Explore Button */}
                            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                              <span className="text-[11px] font-mono text-slate-400">
                                Field Initiative
                              </span>
                              <Link
                                to={prog.link}
                                className="inline-flex items-center gap-1.5 font-bold text-xs text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-0.5"
                              >
                                <span>Explore Details</span>
                                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Pagination / Capsule Switcher matching the screenshot (`• • • ▬▬`) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="bg-[#131B26] border border-slate-800 px-4 py-2 rounded-full flex items-center gap-2.5 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`transition-all duration-300 cursor-pointer ${
                  activeTab === 'all'
                    ? 'w-7 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-500'
                }`}
                title="All Pillars"
                aria-label="All Pillars"
              />

              <button
                type="button"
                onClick={() => setActiveTab('livelihood')}
                className={`transition-all duration-300 cursor-pointer ${
                  activeTab === 'livelihood'
                    ? 'w-7 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-500'
                }`}
                title="Livelihoods & Forestry"
                aria-label="Livelihoods & Forestry"
              />

              <button
                type="button"
                onClick={() => setActiveTab('housing')}
                className={`transition-all duration-300 cursor-pointer ${
                  activeTab === 'housing'
                    ? 'w-7 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-500'
                }`}
                title="Housing & Rehabilitation"
                aria-label="Housing & Rehabilitation"
              />

              <button
                type="button"
                onClick={() => setActiveTab('education')}
                className={`transition-all duration-300 cursor-pointer ${
                  activeTab === 'education'
                    ? 'w-7 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                    : 'w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-slate-500'
                }`}
                title="Education & Relief"
                aria-label="Education & Relief"
              />
            </div>

            <span className="text-slate-400 font-mono text-xs">
              {activeTab === 'all' ? 'All 3 Strategic Pillars Active' : `Viewing ${activeTab.toUpperCase()}`}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
