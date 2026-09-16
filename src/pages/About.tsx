import PageHeader from '../components/PageHeader';
import FocusAreas from '../components/FocusAreas';
import { Award, Target, Eye, Heart, ArrowRight, ShieldCheck, FileText, CheckCircle2, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader title="About Us" />

      {/* Main Content */}
      <main className="flex-grow py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-10 max-w-6xl space-y-20">
          
          {/* Genesis & History */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark leading-tight">
                About Us
              </h2>
              <div className="w-16 h-1 bg-brand-primary rounded-full mb-2"></div>
              
              <p className="text-brand-deep text-base md:text-lg leading-relaxed">
                Established in 1995 by founder <strong>S. Ravi</strong>, <strong>Community Alternative Research and Development (CARD)</strong> is a registered non-profit organization with 30 years of empowering rural communities across Andhra Pradesh.
              </p>
              
              <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                Over three decades, CARD has implemented targeted, grassroots initiatives across Chittoor District—partnering with marginalized families, Yanadi tribal communities, smallholder farmers, and rural women to advance education, secure permanent housing, build sustainable livelihoods, and uphold civil dignity.
              </p>

              {/* Legal Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 bg-brand-soft/70 border border-brand-light p-3 rounded-2xl">
                  <ShieldCheck size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark">Registered NGO</div>
                    <div className="text-[11px] text-brand-muted">Government of AP</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-brand-soft/70 border border-brand-light p-3 rounded-2xl">
                  <FileText size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark">12A &amp; 80G Tax Exempt</div>
                    <div className="text-[11px] text-brand-muted">Income Tax Act</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-brand-soft/70 border border-brand-light p-3 rounded-2xl">
                  <CheckCircle2 size={20} className="text-brand-primary shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-brand-dark">FCRA Registered</div>
                    <div className="text-[11px] text-brand-muted">Ministry of Home Affairs</div>
                  </div>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-brand-soft p-4 rounded-2xl border border-brand-light text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-brand-primary">1995</div>
                  <div className="text-[11px] text-brand-muted mt-1 font-semibold uppercase tracking-wider">30+ Years Active</div>
                </div>
                <div className="bg-brand-soft p-4 rounded-2xl border border-brand-light text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-brand-primary">150+</div>
                  <div className="text-[11px] text-brand-muted mt-1 font-semibold uppercase tracking-wider">Villages Served</div>
                </div>
                <div className="bg-brand-soft p-4 rounded-2xl border border-brand-light text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-brand-primary">50,000+</div>
                  <div className="text-[11px] text-brand-muted mt-1 font-semibold uppercase tracking-wider">Lives Impacted</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/poster_agriculture.png"
                  alt="CARD Sustainable Agriculture & Rural Livelihoods"
                  className="w-full h-[430px] object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission as per official document */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Vision */}
            <div className="bg-brand-soft/70 border border-brand-light rounded-2xl p-5 md:p-6 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 bg-brand-primary text-white rounded-xl flex items-center justify-center mb-3 shadow-xs">
                  <Eye size={20} />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-dark mb-1">Our Vision</h3>
                <div className="w-10 h-1 bg-brand-primary rounded-full mb-3"></div>
                <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                  To work for a better society where the unorganized, marginalized, and underprivileged people will get equal resources and opportunities for dignity, self-esteem, and sustainable life without any form of discrimination against them.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-brand-soft/70 border border-brand-light rounded-2xl p-5 md:p-6 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 bg-brand-deep text-white rounded-xl flex items-center justify-center mb-3 shadow-xs">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-display font-bold text-brand-dark mb-1">Our Mission</h3>
                <div className="w-10 h-1 bg-brand-deep rounded-full mb-3"></div>
                <p className="text-brand-deep text-xs md:text-sm leading-relaxed">
                  To improve the socio, economic, political, and cultural condition of women, children, landless labourers, small farmers, tribal, and physically challenged people to lead a sustainable life by raising awareness, promoting essential life skills to foster self-confidence, and fostering positive practices of civil rights through their own identity of association.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Our Focus Areas Section */}
        <div className="mt-20">
          <FocusAreas />
        </div>

        <div className="container mx-auto px-4 md:px-10 max-w-6xl space-y-20 mt-20">

          {/* Founder National Recognition */}
          <div className="bg-gradient-to-br from-[#0B1E36] via-[#16385C] to-[#0B1E36] rounded-3xl p-8 md:p-12 text-white shadow-xl border border-[#16385C]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-sky-400/20 border border-sky-400/40 rounded-full px-4 py-1 text-xs font-bold text-sky-300 uppercase tracking-widest">
                  <Award size={14} /> National Honor
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold">
                  Founder &amp; Leadership Recognized: Dr. A.P.J. Abdul Kalam Lifetime Achievement Award
                </h3>
                <p className="text-white/85 leading-relaxed font-sans text-base">
                  In recognition of CARD’s three decades of tireless commitment to Yanadi tribal housing, environmental social forestry, safe water infrastructure, and disability rights in Andhra Pradesh, CARD founder <strong>S. Ravi</strong> and the organization received national honors in New Delhi.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <User size={22} className="text-sky-300" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-white">S. Ravi</div>
                    <div className="text-sky-300 text-xs font-medium">Founder &amp; Executive Secretary — CARD NGO</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 flex justify-center">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center max-w-xs backdrop-blur-xs">
                  <Award size={48} className="text-sky-300 mx-auto mb-3" />
                  <div className="font-bold text-sm text-white">Lifetime Achievement Award</div>
                  <div className="text-xs text-white/80 mt-1">Conferred for Outstanding Grassroots Rural Development &amp; Social Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-2">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold rounded-full px-8 py-4 text-base shadow-lg hover:bg-brand-deep transition-all"
            >
              <Heart size={18} /> Support Our Mission <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
