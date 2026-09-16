import { ExternalLink, ShieldCheck, ScrollText, Download } from 'lucide-react';
import Section from './Section';

interface Report {
  id: string;
  title: string;
  category: string;
  file: string;
  icon: typeof ShieldCheck | typeof ScrollText;
}

const reports: Report[] = [
  {
    id: 'profile',
    title: 'CARD Profile',
    category: 'Organization Profile',
    file: 'about:blank',
    icon: ScrollText,
  },
  {
    id: '12ab',
    title: 'CARD 12AB Certificate',
    category: 'Tax Registration',
    file: 'about:blank',
    icon: ShieldCheck,
  },
  {
    id: '80g',
    title: 'CARD 80G Certificate',
    category: 'Tax Exemption',
    file: 'about:blank',
    icon: ShieldCheck,
  },
  {
    id: 'fcra',
    title: 'CARD FCRA Certificate',
    category: 'Foreign Grant Registration',
    file: 'about:blank',
    icon: ShieldCheck,
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-brand-light">
      <div className="container mx-auto px-4 md:px-10">
        <Section className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Our Documents
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
        </Section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <div
                key={report.id}
                className="group bg-white rounded-2xl border border-brand-light shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-12 h-12 bg-brand-light/50 text-brand-primary rounded-xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  {/* Download Button */}
                  <a
                    href={report.file}
                    download
                    title={`Download ${report.title}`}
                    className="p-2.5 rounded-xl bg-brand-soft hover:bg-brand-primary text-brand-primary hover:text-white transition-colors border border-brand-light shadow-xs"
                    aria-label={`Download ${report.title}`}
                  >
                    <Download size={18} />
                  </a>
                </div>

                <div className="flex-1 w-full">
                  <h3 className="font-display font-bold text-brand-dark leading-snug mb-1 group-hover:text-brand-primary transition-colors">
                    {report.title}
                  </h3>
                  <span className="text-xs text-brand-muted font-medium">{report.category}</span>
                </div>

                <div className="w-full pt-3 border-t border-slate-100">
                  <a
                    href={report.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-brand-primary hover:text-white bg-brand-soft hover:bg-brand-primary py-2.5 px-3 rounded-xl transition-all border border-brand-light group-hover:border-brand-primary"
                  >
                    <ExternalLink size={14} /> Review
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}