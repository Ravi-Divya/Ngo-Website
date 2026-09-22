import { MapPin, Navigation, Trees, Home as HomeIcon, BookOpen, Droplets, HeartHandshake, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface Cluster {
  name: string;
  focus: string;
  villages: string;
  icon: typeof Trees;
  badge: string;
}

const operationalClusters: Cluster[] = [
  {
    name: 'Gudipala Mandal',
    focus: 'MGNREGS Community Tree Nurseries & Rural Wage Employment',
    villages: 'Gram Panchayats across Gudipala',
    icon: Trees,
    badge: 'Social Forestry',
  },
  {
    name: 'Anupu & Dasarapalli ST Colonies',
    focus: 'Permanent Disaster-Resilient Housing & OTF Girl Child Coaching',
    villages: 'Dedicated Yanadi ST Housing Settlements',
    icon: HomeIcon,
    badge: 'Housing & Education',
  },
  {
    name: 'Puthalapattu Cluster',
    focus: 'Melania Women Broom Makers Producer Collective & Enterprise',
    villages: 'Puthalapattu Tribal Hamlets',
    icon: HeartHandshake,
    badge: 'Women Enterprise',
  },
  {
    name: 'G.D. Nellore Mandal',
    focus: 'Pedha Venpenjeri School Tree Cover & Learning Infrastructure',
    villages: 'Rural School Centers & Coaching Centers',
    icon: BookOpen,
    badge: 'Child Welfare',
  },
  {
    name: 'Singagarapeta & Buchanna Kandiga',
    focus: 'Clean Drinking Water Borewells & Emergency Ration Support',
    villages: 'Smallholder Farming & Forest Fringes',
    icon: Droplets,
    badge: 'Water & Relief',
  },
];

export default function HomeLocation() {
  return (
    <section id="location" className="py-16 md:py-24 bg-white border-b border-brand-light relative">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light/70 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-light mb-3">
            <MapPin size={13} />
            <span>Regional Presence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Our Locations &amp; Field Reach
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-sm md:text-base mt-3 leading-relaxed">
            Concentrated grassroots operations reaching into remote tribal colonies, forest fringes, and drought-prone villages across Andhra Pradesh.
          </p>
        </div>

        {/* 2-Column Unique Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 cols): Office Details & Interactive Map Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-soft via-white to-brand-soft rounded-3xl p-6 sm:p-8 border border-brand-light shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs mb-4">
                <Navigation size={13} />
                <span>Registered Head Office</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-brand-dark mb-2">
                Chittoor District, AP
              </h3>
              
              <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Headquartered in Chittoor, CARD directly serves remote settlements where families face infrastructural isolation.
              </p>

              {/* Office Address Card */}
              <div className="bg-white rounded-2xl p-4 border border-brand-light shadow-xs space-y-2 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-primary shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-brand-deep leading-relaxed">
                    <strong className="text-brand-dark block font-bold mb-0.5">COMMUNITY ALTERNATIVE RESEARCH AND DEVELOPMENT (CARD)</strong>
                    Mittapalyam, Ellamarajupalli (Post), G.D. Nellore (Mandal) &bull; Chittoor District, Andhra Pradesh — PIN 517125, India.
                  </div>
                </div>
              </div>

              {/* Impact Metric Counters */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3 rounded-xl border border-brand-light text-center shadow-2xs">
                  <div className="font-display font-bold text-xl text-brand-primary">150+</div>
                  <div className="text-[10px] uppercase font-bold text-brand-muted mt-0.5">Villages</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-brand-light text-center shadow-2xs">
                  <div className="font-display font-bold text-xl text-brand-primary">5+</div>
                  <div className="text-[10px] uppercase font-bold text-brand-muted mt-0.5">Mandals</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-brand-light text-center shadow-2xs">
                  <div className="font-display font-bold text-xl text-brand-primary">50,000+</div>
                  <div className="text-[10px] uppercase font-bold text-brand-muted mt-0.5">Lives</div>
                </div>
              </div>
            </div>

            {/* Map Directions Link Button */}
            <div className="pt-6 mt-6 border-t border-brand-light/70">
              <a
                href="https://maps.google.com/?q=Chittoor+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-brand-primary hover:text-white text-brand-primary font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-brand-primary transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>View Region on Google Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): Operational Field Clusters */}
          <div className="lg:col-span-7 space-y-3.5 flex flex-col justify-between">
            {operationalClusters.map((cluster, idx) => {
              const Icon = cluster.icon;
              return (
                <motion.div
                  key={cluster.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.07 }}
                  className="bg-brand-soft/30 hover:bg-white border border-brand-light hover:border-brand-primary/40 rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 shadow-2xs hover:shadow-md group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-brand-light flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-2xs shrink-0 mt-0.5">
                    <Icon size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-primary transition-colors">
                        {cluster.name}
                      </h4>
                      <span className="text-[10px] font-bold text-brand-primary bg-brand-light/60 px-2 py-0.5 rounded-md border border-brand-light shrink-0 self-start sm:self-auto">
                        {cluster.badge}
                      </span>
                    </div>

                    <p className="text-brand-deep text-xs sm:text-sm leading-relaxed mb-1.5 font-sans">
                      {cluster.focus}
                    </p>

                    <span className="text-[11px] text-brand-muted flex items-center gap-1 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{cluster.villages}</span>
                    </span>
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
