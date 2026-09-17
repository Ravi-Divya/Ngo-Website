import PageHeader from '../components/PageHeader';
import FocusAreas from '../components/FocusAreas';
import { Target, Eye, Heart, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
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
              
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Established in 1995 by founder <strong className="text-gray-900 font-bold">S. Ravi</strong>, <strong className="text-gray-900 font-bold">Community Alternative Research and Development (CARD)</strong> is a registered non-profit organization with 30 years of empowering rural communities across Andhra Pradesh.
              </p>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Over three decades, <strong className="text-gray-900 font-bold">CARD</strong> has implemented targeted, grassroots initiatives across Chittoor District—partnering with marginalized families, Yanadi tribal communities, smallholder farmers, and rural women to advance education, secure permanent housing, build sustainable livelihoods, and uphold civil dignity.
              </p>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Founder <strong className="text-gray-900 font-bold">S. Ravi</strong> felicitated by Chittoor MP <strong className="text-gray-900 font-bold">Daggumalla Prasada Rao garu</strong>, District Collector <strong className="text-gray-900 font-bold">Sumit Kumar garu, IAS</strong>, and CHUDA Chairperson <strong className="text-gray-900 font-bold">Katari Hemalatha garu</strong>.
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
                  Founder <strong>S. Ravi</strong> felicitated by Chittoor MP <strong>Daggumalla Prasada Rao garu</strong>, District Collector <strong>Sumit Kumar garu, IAS</strong>, and CHUDA Chairperson <strong>Katari Hemalatha garu</strong>.
                </p>
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

        <div className="container mx-auto px-4 md:px-10 max-w-6xl mt-16 text-center">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold rounded-full px-8 py-4 text-base shadow-lg hover:bg-brand-deep transition-all"
          >
            <Heart size={18} /> Support Our Mission <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
}
