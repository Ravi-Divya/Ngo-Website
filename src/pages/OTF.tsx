import ProgramPageLayout from '../components/ProgramPageLayout';

export default function OTF() {
  return (
    <ProgramPageLayout
      title="EDUCATIONAL DEVELOPMENT FOR POOR GIRL CHILDREN"
      fundedBy="ONTARIO TEACHERS FEDERATION (OTF/FEP)"
      sector="Girl Child Education & Academic Support"
      place="GD.Nellore Dasarapalli S.T. Colony, Chittoor District, AP"
      images={[
        { src: '/images/otf_1.jpg', alt: 'Distribution of school kits and learning materials', caption: 'Supply of Learning Material & School Bags Distribution' },
        { src: '/images/otf_2.jpg', alt: 'Girl children and students receiving educational aids', caption: 'Empowering Underprivileged Girl Children in S.T. Colony' },
      ]}
      paragraphs={[
        'Supported by the Ontario Teachers Federation (OTF/FEP), this dedicated educational program directly supports the academic development and retention of underprivileged girl children in Dasarapalli S.T. Colony, GD Nellore Mandal.',
        'CARD distributes comprehensive learning kits containing durable school bags, textbooks, notebooks, writing materials, geometry boxes, uniforms, and shoes. In addition, evening tuition assistance and parental counseling are provided to reduce dropouts and promote higher education for tribal girls.',
      ]}
      backLink="/our-work"
    />
  );
}