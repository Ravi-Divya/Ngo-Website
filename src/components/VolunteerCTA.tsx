import { Link } from 'react-router-dom';
import { Users, GraduationCap, HeartPulse, Camera, Laptop, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Role {
  title: string;
  icon: typeof GraduationCap;
  type: string;
}

const roles: Role[] = [
  { title: 'Tribal Child Tutoring & Mentorship', icon: GraduationCap, type: 'Field Engagement' },
  { title: 'Community Health & Hygiene Camps', icon: HeartPulse, type: 'Field Support' },
  { title: 'Grassroots Photo & Video Documentation', icon: Camera, type: 'Field / Creative' },
  { title: 'Grant Writing & Digital Storytelling', icon: Laptop, type: 'Remote / Virtual' },
];

export default function VolunteerCTA() {
  return (
    <section id="volunteer" className="py-16 md:py-24 bg-white border-b border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        
        <div className="bg-gradient-to-br from-[#0F2847] via-[#0A1E36] to-[#071628] text-white rounded-3xl p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-sky-400/30">
                <Users size={14} /> Join Our Field Family
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Be The Catalyst on The Ground
              </h2>

              <p className="text-sky-100/80 text-sm md:text-base leading-relaxed max-w-xl font-sans">
                Whether you have one weekend a month or want to spend a full internship with tribal communities in Chittoor, your unique talents can change lives. We welcome educators, healthcare workers, students, photographers, and passionate advocates.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-primary hover:bg-sky-500 text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Apply to Volunteer</span>
                  <ArrowRight size={16} />
                </Link>
                
                <span className="text-xs text-sky-200/70">
                  Volunteer Certificate &bull; Hands-on Grassroots Exposure
                </span>
              </div>
            </div>

            {/* Right: Volunteer Opportunities List */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300 block mb-2">
                Active Volunteer Tracks
              </span>
              
              {roles.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center justify-between hover:bg-white/15 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0">
                        <Icon size={18} />
                      </div>
                      <span className="font-semibold text-xs sm:text-sm text-white">
                        {r.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-sky-300/80 bg-white/5 px-2 py-0.5 rounded-md border border-white/10 shrink-0">
                      {r.type}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
