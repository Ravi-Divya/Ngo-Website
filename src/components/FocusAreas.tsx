import { BookOpen, Briefcase, HeartPulse, Home as HomeIcon, Sparkles, TreePine } from 'lucide-react';

const focusAreas = [
  {
    title: 'Education',
    icon: BookOpen,
  },
  {
    title: 'Livelihood',
    icon: Briefcase,
  },
  {
    title: 'Health',
    icon: HeartPulse,
  },
  {
    title: 'Re-habitation',
    icon: HomeIcon,
  },
  {
    title: 'Women Empowerment',
    icon: Sparkles,
  },
  {
    title: 'Environment',
    icon: TreePine,
  },
];

export default function FocusAreas() {
  return (
    <section className="py-12 md:py-16 bg-brand-soft/40 border-y border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
            Our Focus Areas
          </h2>
          {/* Small Blue Line */}
          <div className="w-16 h-1 bg-brand-primary mx-auto mt-2.5 rounded-full"></div>
        </div>

        {/* 6 Focus Areas Grid: Unified Styling & No Roman Numerals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-white rounded-2xl border border-brand-light p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-light/50 text-brand-primary border border-brand-light shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-display font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {area.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
