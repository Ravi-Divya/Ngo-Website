import ProgramPageLayout from '../components/ProgramPageLayout';

export default function MGNREGS() {
  return (
    <ProgramPageLayout
      title="MAHATMA GANDHI NATIONAL RURAL EMPLOYMENT GUARANTEE SCHEME (MGNREGS) - SSS GROUP FORMATION & AWARENESS PROGRAM"
      fundedBy="COMMISSIONER, RURAL DEVELOPMENT, GOVT. OF INDIA THROUGH GOVT OF A.P"
      sector="Rural Development, 100 Days Guaranteed Wage Employment & Natural Resource Management"
      place="Gangadhara Nellore Mandalam, Yadamari Mandalam, Gudipala Mandalam, Chittoor District, Andhra Pradesh State, India"
      images={[
        { src: '/images/mgnregs_1.jpg', alt: 'Community group meeting and awareness campaign', caption: 'SSS Group Formation & 100 Days Wage Employment Workshop' },
        { src: '/images/mgnregs_2.jpg', alt: 'MGNREGS social forestry plantation site', caption: 'Community Nursery Raising, Plantations & Pond Desilting' },
      ]}
      paragraphs={[
        'Supported by the Commissioner of Rural Development, Govt. of India through the Govt. of Andhra Pradesh, this flagship program guarantees 100 days of wage employment per financial year to rural wage-seeking households across Gangadhara Nellore Mandalam, Yadamari Mandalam, and Gudipala Mandalam in Chittoor District, Andhra Pradesh State, India under the Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS).',
        'CARD provides extensive capacity-building trainings, Shrama Shakthi Sangha (SSS) group formation workshops, wage rights awareness campaigns, and hands-on guidance for core rural development works including community nursery raising, extensive block and avenue plantations, desilting of ponds and irrigation tanks, check dams, and farm percolation ponds to revitalize groundwater tables and secure sustainable rural livelihoods.',
      ]}
      backLink="/our-work"
    />
  );
}