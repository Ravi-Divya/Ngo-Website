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

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 w-full">
                <img
                  src="/images/card_felicitation_award.jpg"
                  alt="Founder S. Ravi receiving official felicitation from Chittoor MP Daggumalla Prasada Rao, District Collector Sumit Kumar IAS, and CHUDA Chairperson Katari Hemalatha"
                  className="w-full h-[360px] sm:h-[400px] object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 bg-brand-soft/80 border border-brand-light p-3.5 rounded-2xl w-full text-center">
                <div className="text-xs font-bold text-brand-dark">Official Felicitation &amp; Leadership Honor</div>
                <p className="text-[11px] text-brand-muted mt-1 leading-snug">
                  Founder <strong>S. Ravi</strong> honored by Chittoor MP <strong>Daggumalla Prasada Rao</strong>, District Collector <strong>Sumit Kumar, IAS</strong>, and CHUDA Chairperson <strong>Katari Hemalatha</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Government & District Leadership Felicitation Block */}
          <div className="bg-gradient-to-r from-amber-50/90 via-orange-50/40 to-amber-50/90 border border-amber-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-amber-200/60">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-amber-500/15 text-amber-800 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  <Award size={14} className="text-amber-600" /> District Felicitation &amp; Honor
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-brand-dark">
                  Honored by Chittoor District Leadership
                </h3>
                <p className="text-brand-deep text-xs md:text-sm mt-1">
                  Founder &amp; Executive Secretary <strong>S. Ravi</strong> was formally awarded and felicitated by top government and public representatives for 30 years of transformative rural welfare.
                </p>
              </div>
              <div className="shrink-0 bg-white px-4 py-2 rounded-2xl border border-amber-200 text-center shadow-2xs">
                <div className="text-lg font-bold text-brand-primary">1995 – 2025</div>
                <div className="text-[10px] text-brand-muted uppercase font-semibold">30 Years of Service</div>
              </div>
            </div>

            {/* Dignitaries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/95 p-4 rounded-2xl border border-amber-100 shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  MP
                </div>
                <div>
                  <div className="font-bold text-sm text-brand-dark">Daggumalla Prasada Rao</div>
                  <div className="text-xs text-amber-800 font-medium mt-0.5">Hon&apos;ble Member of Parliament (MP)</div>
                  <div className="text-[11px] text-brand-muted">Chittoor Lok Sabha Constituency</div>
                </div>
              </div>

              <div className="bg-white/95 p-4 rounded-2xl border border-amber-100 shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  IAS
                </div>
                <div>
                  <div className="font-bold text-sm text-brand-dark">Sumit Kumar, IAS</div>
                  <div className="text-xs text-sky-800 font-medium mt-0.5">District Collector &amp; Magistrate</div>
                  <div className="text-[11px] text-brand-muted">Chittoor District, Govt. of Andhra Pradesh</div>
                </div>
              </div>

              <div className="bg-white/95 p-4 rounded-2xl border border-amber-100 shadow-2xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  CHUDA
                </div>
                <div>
                  <div className="font-bold text-sm text-brand-dark">Katari Hemalatha</div>
                  <div className="text-xs text-rose-800 font-medium mt-0.5">Chairperson</div>
                  <div className="text-[11px] text-brand-muted">Chittoor Urban Development Authority (CHUDA)</div>
                </div>
              </div>
            </div>

            {/* Extra Impact Points for About Us */}
            <div className="mt-5 pt-4 border-t border-amber-200/60">
              <div className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                Key Grassroots Milestones Recognized:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-brand-deep">
                <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-100">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Yanadi Tribal Housing:</strong> Constructed permanent pucca housing colonies with official land pattas &amp; solar electricity.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-100">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Drinking Water &amp; Sanitation:</strong> Installed deep borewells and community water systems across 150+ rural habitations.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-100">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Girl Child Education:</strong> Distributed free study kits, uniforms, and digital literacy support to school dropouts.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-100">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Sustainable Agriculture:</strong> Rejuvenated rural lands with check dams, honeybee apiculture &amp; MGNREGS SSS groups.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-100">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Women Self-Help Groups:</strong> Mobilized women into federations for livelihood training and micro-enterprise loans.</span>
                </div>
                <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-amber-100">
                  <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Disaster &amp; COVID Relief:</strong> Emergency food supplies, ration kits, and medical aid provided during pandemics and cyclones.</span>
                </div>
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
