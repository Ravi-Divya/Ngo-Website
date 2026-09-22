import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeMinimalCTA() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-10 max-w-6xl">
        <div className="bg-[#1F242D] rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-700/60 shadow-xl">
          <div className="max-w-4xl space-y-4">
            {/* Main Headline with exact same text */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-display font-medium text-white leading-[1.2] tracking-tight">
              True community change begins on the ground — with the people who live it.
            </h2>

            {/* Subheading text with exact same text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl">
              Connect directly with our dedicated field leadership and grassroots teams driving daily transformation across rural villages — transparent, accountable, and rooted in service since 1995.
            </p>

            {/* Action CTAs: Solid button and clean text link with exact same text */}
            <div className="pt-3 flex flex-wrap items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-deep text-white font-medium text-sm md:text-base px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                Connect with our team
              </Link>

              <Link
                to="/case-study"
                className="text-slate-300 hover:text-white font-medium text-sm md:text-base transition-colors underline-offset-4 hover:underline"
              >
                Explore our case studies &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
