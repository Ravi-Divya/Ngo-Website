import { MapPin, Building2, Trees, Droplets, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface Cluster {
  name: string;
  focus: string;
  villages: string;
  icon: typeof Building2;
}

const clusters: Cluster[] = [
  {
    name: 'Gudipala Mandal',
    focus: 'MGNREGS Social Forestry & Rural Employment',
    villages: 'Gram Panchayats across Gudipala',
    icon: Trees,
  },
  {
    name: 'GD Nellore (Gangadhara Nellore)',
    focus: 'School Green Cover & Rural Child Tutoring',
    villages: 'Pedha Venpenjeri & surrounding schools',
    icon: Building2,
  },
  {
    name: 'Puthalapattu Cluster',
    focus: 'Melania Women Broom Makers & Micro-Enterprise',
    villages: 'Puthalapattu ST settlements & hamlets',
    icon: Building2,
  },
  {
    name: 'Anupu & Dasarapalli Settlements',
    focus: 'Permanent Housing, OTF Education & Piped Water',
    villages: 'Dedicated Yanadi ST Housing Colonies',
    icon: Home,
  },
  {
    name: 'Singagarapeta & Buchanna Kandiga',
    focus: 'Food Grain Relief & Organic Agriculture',
    villages: 'Smallholder farming & tribal fringe villages',
    icon: Droplets,
  },
];

export default function WhereWeWork() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Geographic Footprint
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Where We Work
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Concentrated grassroots presence across Chittoor District and surrounding tribal settlements in Andhra Pradesh.
          </p>
        </div>

        {/* Map & Cluster Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Geographical Snapshot Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F2847] via-[#0B1E36] to-[#071628] text-white rounded-3xl p-7 md:p-8 border border-[#16385C] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full text-xs font-bold border border-sky-400/30 mb-4">
                <MapPin size={14} /> Andhra Pradesh, India
              </div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
                Chittoor District &amp; Forest Fringes
              </h3>
              <p className="text-sky-100/75 text-xs md:text-sm leading-relaxed mb-6">
                Our projects reach into deep rural interiors, foothill tribal settlements, and drought-prone mandals where government services face topographical hurdles.
              </p>

              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/60">State:</span>
                  <span className="font-bold text-white">Andhra Pradesh</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/60">Primary District:</span>
                  <span className="font-bold text-white">Chittoor</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/60">Active Mandals:</span>
                  <span className="font-bold text-white">5+ Administrative Blocks</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/60">Target Communities:</span>
                  <span className="font-bold text-sky-300">Yanadi Scheduled Tribes &amp; Rural Labourers</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/60">Total Villages Served:</span>
                  <span className="font-bold text-emerald-400">150+ Villages</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-white/50">
              Registered Office: Doraiswamy Ayangar, Chittoor &bull; PIN 517001
            </div>
          </div>

          {/* Right Column: Key Operational Hubs */}
          <div className="lg:col-span-7 space-y-3.5">
            {clusters.map((cluster, i) => {
              const Icon = cluster.icon;
              return (
                <motion.div
                  key={cluster.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-brand-soft/50 border border-brand-light rounded-2xl p-4 md:p-5 flex items-start gap-4 hover:bg-white hover:border-brand-primary/40 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-light flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-2xs">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-primary transition-colors">
                        {cluster.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-brand-muted bg-white px-2.5 py-0.5 rounded-full border border-brand-light self-start sm:self-auto">
                        {cluster.villages}
                      </span>
                    </div>
                    <p className="text-brand-deep text-xs md:text-sm mt-1 leading-relaxed">
                      {cluster.focus}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
