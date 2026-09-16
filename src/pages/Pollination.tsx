import ProgramPageLayout from '../components/ProgramPageLayout';

export default function Pollination() {
  return (
    <ProgramPageLayout
      title="COVID-19 FOOD GROCERIES & GRAINS DISTRIBUTION"
      fundedBy="THE POLLINATION – USA"
      sector="Humanitarian Relief & Food Security"
      place="GD Nellore (1. Buchanna Kandiga SC Colony, 2. Singagara Peta SC Colony), Chittoor District, AP"
      images={[
        { src: '/images/pollination_1.jpg', alt: 'Food grains and grocery kit distribution', caption: 'Covid-19 Relief Grocery Kits Distribution' },
        { src: '/images/pollination_2.jpg', alt: 'Beneficiary families receiving nutritional support', caption: 'Direct Household Relief in SC Colonies' },
      ]}
      paragraphs={[
        'Supported by The Pollination – USA, this emergency humanitarian relief intervention provided vital food security and nutritional relief during lockdown crises.',
        'CARD teams conducted door-to-door distribution of comprehensive dry ration kits containing staple food grains (rice, pulses, wheat flour, cooking oil, spices) and essential sanitation kits to vulnerable Scheduled Caste (SC) families in Buchanna Kandiga and Singagara Peta colonies.',
      ]}
      backLink="/our-work"
    />
  );
}