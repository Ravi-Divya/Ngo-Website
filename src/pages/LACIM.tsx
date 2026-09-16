import ProgramPageLayout from '../components/ProgramPageLayout';

export default function LACIM() {
  return (
    <ProgramPageLayout
      title="LACIM TRIBAL DEVELOPMENT PROGRAMME"
      fundedBy="LES AMIS DU C.I.M. (LACIM), FRANCE"
      sector="Tribal Upliftment & Primary Child Education"
      place="Anupu ST Colony, G.D. Nellore & Surrounding Tribal Hamlets, Chittoor District, AP"
      images={[
        { src: '/images/lacim_1.jpg', alt: 'Tribal community development and schooling', caption: 'Child Education & Nutritional Support Center' },
        { src: '/images/lacim_2.jpg', alt: 'Community support under LACIM partnership', caption: 'Community Development & Support for Yanadi Families' },
      ]}
      paragraphs={[
        'In enduring partnership with Les Amis Du C.I.M. (LACIM), France, CARD has spearheaded transformative developmental projects in isolated Yanadi tribal settlements to uplift historically marginalized communities.',
        'The intervention provides ongoing nutritional support, regular health hygiene awareness camps, educational scholarships for first-generation learners, and micro-income generating assets for women, fostering self-reliance and community pride.',
      ]}
      backLink="/our-work"
    />
  );
}