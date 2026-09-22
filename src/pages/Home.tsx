import Hero from '../components/Hero';
import PartnersScroll from '../components/PartnersScroll';
import ResourcesSection from '../components/ResourcesSection';
import ProgramsShowcase from '../components/ProgramsShowcase';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


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
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Our Programs (Modern Animated Dashboard & Showcase) */}
      <ProgramsShowcase />

      {/* 3rd Section: Governance & Compliance Reports */}
      <ResourcesSection />

      {/* 4th Section: Our Partners */}
      <PartnersScroll />

    </div>
  );
}