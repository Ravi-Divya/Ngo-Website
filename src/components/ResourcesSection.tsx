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
    <section id="transparency" className="py-16 md:py-24 bg-white border-y border-brand-light">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        <Section className="text-center mb-12">
          <span className="text-brand-primary font-bold text-xs uppercase tracking-widest bg-brand-light/60 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-brand-light">
            Governance &amp; Trust
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Transparency &amp; Accountability
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-4"></div>
          <p className="text-brand-deep text-base max-w-2xl mx-auto leading-relaxed">
            CARD operates with total fiscal integrity. Review and download our statutory registrations, annual profiles, and tax exemption certificates.
          </p>

          {/* Registration badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <span className="bg-brand-soft px-3 py-1 rounded-full text-xs font-semibold text-brand-dark border border-brand-light">
              ✓ 80G Tax Exemption (IT Act)
            </span>
            <span className="bg-brand-soft px-3 py-1 rounded-full text-xs font-semibold text-brand-dark border border-brand-light">
              ✓ 12AB Legal Registration
            </span>
            <span className="bg-brand-soft px-3 py-1 rounded-full text-xs font-semibold text-brand-dark border border-brand-light">
              ✓ FCRA Certified (MHA, Govt of India)
            </span>
            <span className="bg-brand-soft px-3 py-1 rounded-full text-xs font-semibold text-brand-dark border border-brand-light">
              ✓ NITI Aayog NGO Darpan Verified
            </span>
          </div>
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