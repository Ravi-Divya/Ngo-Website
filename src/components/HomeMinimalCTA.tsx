import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeMinimalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F5F7] border-b border-slate-200/80">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        <div className="max-w-4xl space-y-6">
          {/* Main Headline with new inspiring phrasing */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-medium text-slate-900 leading-[1.18] tracking-tight">
            True community change begins on the ground — with the people who live it.
          </h2>

          {/* Subheading text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-sans leading-relaxed max-w-2xl pt-1">
            Connect directly with our dedicated field leadership and grassroots teams driving daily transformation across rural villages — transparent, accountable, and rooted in service since 1995.
          </p>

          {/* Action CTAs: Solid button and clean text link */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-primary hover:bg-[#D95300] text-white font-medium text-sm md:text-base px-7 py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              Connect with our team
            </Link>

            <Link
              to="/case-study"
              className="text-slate-800 hover:text-brand-primary font-medium text-sm md:text-base transition-colors underline-offset-4 hover:underline"
            >
              Explore our case studies &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
