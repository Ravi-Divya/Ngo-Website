import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { CheckCircle2 } from 'lucide-react';

const sectors = [
  {
    id: 'educational-support',
    sector: 'Educational Support',
    poster: '/images/poster_education.png',
    keyFeatures: [
      'Free school bags, notebooks, uniforms, and learning kits',
      'Evening academic coaching for tribal children',
      'Financial aid and scholarships for girl students',
      'Parental counseling to prevent school dropouts',
      'Infrastructure & digital aids for village schools',
    ],
  },
  {
    id: 'nutrition-support',
    sector: 'Nutrition Support',
    poster: '/images/poster_relief.png',
    keyFeatures: [
      'Monthly dry ration grocery kits (rice, pulses, oil)',
      'High-protein supplements for malnourished kids & mothers',
      'Emergency food grain relief during crises & floods',
      'Daily warm meal service for destitute & elderly',
      'Community hygiene & nutrition awareness drives',
    ],
  },
  {
    id: 'infrastructure-water-support',
    sector: 'Infrastructure and Water Support',
    poster: '/images/poster_water.png',
    keyFeatures: [
      'Permanent disaster-resilient brick houses with land titles',
      'Deep borewells & overhead piped drinking water supply',
      'Hygienic household toilets & community sanitation',
      'Solar-powered street lighting for tribal colonies',
      'Concrete village roads & stormwater drainage systems',
    ],
  },
  {
    id: 'agriculture-support',
    sector: 'Agriculture Support',
    poster: '/images/poster_agriculture.png',
    keyFeatures: [
      'Community nurseries for fruit & timber saplings',
      'MGNREGS Shrama Shakthi Sangha (SSS) group land work',
      'Check dams & farm ponds for groundwater recharge',
      'Organic farming & vermicomposting training',
      'Distribution of agricultural toolkits & high-yield seeds',
    ],
  },
];

export default function OurWork() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader title="Our Work" />

      <main className="flex-grow py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-10 max-w-6xl">
          
          <div className="space-y-12">
            {sectors.map((sec, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={sec.id}
                  className="bg-white rounded-3xl border border-brand-light overflow-hidden shadow-sm hover:shadow-lg transition-all p-6 md:p-8"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Poster Image */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white aspect-[4/3] bg-slate-900">
                        <img
                          src={sec.poster}
                          alt={`${sec.sector} - CARD NGO`}
                          loading="lazy"
                          className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Sector Title & Half-line Key Features */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        <span className="text-brand-primary font-bold text-xs uppercase tracking-widest">Support Program</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mt-1">
                          {sec.sector}
                        </h2>
                        <div className="w-12 h-1 bg-brand-primary rounded-full mt-2 mb-4"></div>
                      </div>

                      {/* Half-line Key Features List */}
                      <div className="grid grid-cols-1 gap-2.5">
                        {sec.keyFeatures.map((kf, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-brand-deep font-medium bg-white px-3.5 py-2 rounded-xl border border-brand-light/80 shadow-2xs">
                            <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                            <span>{kf}</span>
                          </div>
                        ))}
                      </div>

                      {/* Donate Now CTA Button */}
                      <div className="pt-3">
                        <Link
                          to="/donate"
                          className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary hover:bg-brand-deep text-white font-display font-bold px-7 py-3 rounded-xl text-xs md:text-sm tracking-wider uppercase shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-center"
                        >
                          Donate Now
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
    </div>
  );
}
