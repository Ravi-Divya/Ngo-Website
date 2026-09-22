import ImpactStories from './ImpactStories';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SuccessStoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/30 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            Voices of Change
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Success Stories
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Real stories from individuals and families whose lives have been transformed through CARD's continuous grassroots partnership.
          </p>
        </div>

        {/* Stories Grid */}
        <ImpactStories />

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-deep text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md transition-all"
          >
            <span>Read More Beneficiary Case Studies</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
