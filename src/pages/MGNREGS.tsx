import ProgramPageLayout from '../components/ProgramPageLayout';

export default function MGNREGS() {
  return (
    <ProgramPageLayout
      title="MGNREGS SSS GROUP FORMATION & AWARENESS PROGRAM"
      fundedBy="COMMISSIONER, RURAL DEVELOPMENT, GOVT. OF INDIA THROUGH GOVT OF A.P"
      sector="Rural Development & Skill Capacity Building"
      place="Gudipala 10 Gram Panchayats (GPs), Chittoor District, AP"
      images={[
        { src: '/images/mgnregs_1.jpg', alt: 'Community group meeting and awareness campaign', caption: 'SSS Group Formation & Rights Literacy Workshop' },
        { src: '/images/mgnregs_2.jpg', alt: 'MGNREGS social forestry plantation site', caption: 'Community Nursery & Plantation in Gram Panchayats' },
      ]}
      paragraphs={[
        'Supported by the Commissioner of Rural Development, Govt. of India through the Govt of Andhra Pradesh, this initiative empowers rural wage-seekers across 10 Gram Panchayats of Gudipala Mandal under the Mahatma Gandhi National Rural Employment Guarantee Scheme.',
        'CARD provides extensive capacity-building trainings, Shrama Shakthi Sangha (SSS) group formation workshops, rights-awareness campaigns, and hands-on guidance for community nursery raising, soil-water conservation work, and social forestry to secure guaranteed wage employment and eco-restoration.',
      ]}
      backLink="/our-work"
    />
  );
}