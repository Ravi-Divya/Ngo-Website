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
          
          {/* Genesis & History Card */}
          {/* Genesis & History Card */}
          <div className="bg-white border border-gray-200 shadow-xl shadow-brand-soft/20 rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden">
            
            <div className="flow-root">
              
              {/* Left Side Image (Floated) */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-2 w-full sm:w-1/2 lg:w-5/12 float-left mr-6 md:mr-8 lg:mr-10 mb-4 md:mb-6 mt-1 hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/card_felicitation_award.jpg"
                  alt="Founder S. Ravi felicitated by Chittoor MP Daggumalla Prasada Rao garu, District Collector Sumit Kumar garu, IAS, and CHUDA Chairperson Katari Hemalatha garu"
                  className="w-full h-auto aspect-[4/3] object-cover object-center rounded-xl"
                />
              </div>
              
              {/* Right Side & Wrapping Content */}
              <div className="space-y-5">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark leading-tight">
                  About Us
                </h2>
                <div className="w-16 h-1 bg-brand-primary rounded-full mb-6"></div>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Established in 1995 by founder <strong className="text-gray-900 font-bold">S. Ravi</strong>, <strong className="text-gray-900 font-bold">Community Alternative Research and Development (CARD)</strong> is a registered non-profit organization with 30 years of empowering rural communities across Andhra Pradesh.
                </p>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  For over three decades, <strong className="text-gray-900 font-bold">CARD</strong> has served as a catalyst for transformative, grassroots change across the Chittoor District. We work closely with marginalized families, Yanadi tribal communities, smallholder farmers, and rural women, understanding that true empowerment begins at the community level. Our comprehensive initiatives focus on advancing access to quality education, securing permanent and safe housing, cultivating sustainable agricultural livelihoods, and fiercely upholding the civil rights and dignity of every individual we serve.
                </p>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  In recognition of this tireless dedication, Founder <strong className="text-gray-900 font-bold">S. Ravi</strong> was recently felicitated for his exemplary contributions to rural development. The honoring ceremony was led by esteemed dignitaries, including Chittoor Member of Parliament <strong className="text-gray-900 font-bold">Sri Daggumalla Prasada Rao garu</strong>, Honorable District Collector <strong className="text-gray-900 font-bold">Sri Sumit Kumar garu, IAS</strong>, and CHUDA Chairperson <strong className="text-gray-900 font-bold">Smt. Katari Hemalatha garu</strong>—a powerful testament to CARD's lasting impact on the region.
                </p>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Operating with full transparency, <strong className="text-gray-900 font-bold">CARD</strong> is officially registered as an NGO with the Government of AP, holds 12A &amp; 80G tax-exempt status under the Income Tax Act, and is FCRA registered under the Ministry of Home Affairs. With 30+ years of active service, our grassroots initiatives have expanded to serve over 150 villages, profoundly impacting more than 50,000 lives.
                </p>
              </div>
            </div>

            {/* Tagline centered at the end of the paragraphs */}
            <div className="clear-both pt-6 mt-6 border-t border-gray-100 text-center">
              <h3 className="text-xl md:text-2xl font-serif italic text-brand-primary/90 font-medium">
                "Building resilience and dignity, one village at a time."
              </h3>
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
