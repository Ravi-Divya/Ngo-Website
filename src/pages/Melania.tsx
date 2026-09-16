import ProgramPageLayout from '../components/ProgramPageLayout';

export default function Melania() {
  return (
    <ProgramPageLayout
      title="BROOM MAKERS OF PUTHALAPATTU LIVELIHOOD PROJECT"
      fundedBy="MELANIA - THE NETHERLANDS"
      sector="Livelihood Development & Women Empowerment"
      place="Puthalapattu ST Colony, Chittoor District, AP"
      images={[
        { src: '/images/melania_1.jpg', alt: 'Livelihood support and craft materials', caption: 'Livelihood Toolkits & Raw Material Support' },
        { src: '/images/melania_2.jpg', alt: 'Tribal women artisan enterprise', caption: 'Tribal Women Broom Makers Cooperative Group' },
      ]}
      paragraphs={[
        'Supported by Melania, The Netherlands, this micro-livelihood initiative focuses on the economic self-reliance and social empowerment of tribal artisan families in Puthalapattu ST Colony.',
        'CARD supplies raw natural grass fibers, binding materials, specialized broom-making toolkits, and market linkage assistance to Yanadi ST women. By organizing them into self-help craft groups, the program enables sustainable daily income generation and financial independence.',
      ]}
      backLink="/our-work"
    />
  );
}