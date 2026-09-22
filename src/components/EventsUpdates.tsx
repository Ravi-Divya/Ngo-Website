import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface EventItem {
  title: string;
  status: 'Upcoming' | 'Recent Activity';
  date: string;
  location: string;
  description: string;
  link: string;
}

const events: EventItem[] = [
  {
    title: 'Annual Tribal Child School Supplies & Uniform Drive',
    status: 'Upcoming',
    date: 'Next Month',
    location: 'Dasarapalli & Anupu Tribal Hamlets',
    description: 'Preparing 500+ comprehensive educational kits containing backpacks, notebooks, geometries, and uniforms for rural primary students.',
    link: '/donate',
  },
  {
    title: 'Community Water Filtration & Pipeline Audit Workshop',
    status: 'Upcoming',
    date: 'Bi-Weekly Program',
    location: 'Chittoor Operational Mandals',
    description: 'Training village water committees in borewell filter sanitation, pipeline maintenance, and testing drinking water purity.',
    link: '/our-work',
  },
  {
    title: 'MGNREGS Shrama Shakthi Sangha (SSS) Social Audit',
    status: 'Recent Activity',
    date: 'Recently Concluded',
    location: 'Gudipala Gram Panchayats',
    description: 'Mobilized 300+ wage workers to audit rural road construction, tree plantations, and fair wage disbursement under government schemes.',
    link: '/mgnregs',
  },
  {
    title: 'Yanadi Women Artisans Collective Exhibition',
    status: 'Recent Activity',
    date: 'Field Milestone',
    location: 'Puthalapattu Community Center',
    description: 'Organized direct-to-consumer exhibition for hand-crafted broom makers supported under the Melania Foundation partnership.',
    link: '/melania',
  },
];

export default function EventsUpdates() {
  return (
    <section className="py-16 md:py-24 bg-brand-soft/40 border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light shadow-2xs">
            Calendar &bull; Field Engagements
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark tracking-tight">
            Events &amp; Community Updates
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-3.5 rounded-full" />
          <p className="text-brand-deep text-base md:text-lg mt-4 leading-relaxed">
            Stay updated with our upcoming drives, workshops, and recently concluded grassroots field actions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 md:p-7 border border-brand-light shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    ev.status === 'Upcoming'
                      ? 'bg-amber-100 text-amber-800 border border-amber-200'
                      : 'bg-sky-100 text-brand-deep border border-sky-200'
                  }`}>
                    {ev.status}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                    <Clock size={13} />
                    <span>{ev.date}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                  {ev.title}
                </h3>

                <p className="text-brand-deep text-xs md:text-sm leading-relaxed mb-4 font-sans">
                  {ev.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-light/70 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                  <MapPin size={14} className="text-brand-primary shrink-0" />
                  <span className="truncate max-w-[200px]">{ev.location}</span>
                </div>

                <Link
                  to={ev.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-deep transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
