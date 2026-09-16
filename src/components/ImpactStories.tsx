import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { api, type Story } from '@/lib/api';

const defaultStories = [
  {
    title: "Chinnamma's Story",
    text: "Living in the remote Anupu ST Colony settlement, Chinnamma always dreamed of a better future for her community. Through dedicated community initiatives supported by our partners, everything began to change. Today, Chinnamma stands as a proud leader in her village.",
    image: '/images/lacim_1.jpg',
    person: 'Chinnamma',
    location: 'Anupu ST Colony',
  },
  {
    title: "Lalithamma's Story",
    text: "By embracing sustainable agricultural practices and new pollination techniques, she transformed her fields into a thriving ecosystem. Lalithamma now trains other women, proving that harmony with nature is the true path forward.",
    image: '/images/pollination_1.jpg',
    person: 'Lalithamma',
    location: 'Singagarapeta',
  },
  {
    title: "Kishore & Venkataiya's Stories",
    text: "With vital support from OTF, we organized comprehensive training sessions for eight different local groups. Now, these once-struggling families have secure incomes and newfound confidence.",
    image: '/images/otf_1.jpg',
    person: 'Kishore & Venkataiya',
    location: 'Dasarapalli / Puthalapattu ST Colony',
  },
  {
    title: "Murali's Story",
    text: "At Pedha Venpenjeri High School in GD Nellore, he spearheaded a massive tree plantation drive. Thanks to his dedication, the students now study under the shade of a greener, brighter future.",
    image: '/images/mgnregs_1.jpg',
    person: 'Murali',
    location: 'Pedha Venpenjeri High School, GD Nellore',
  },
];

interface StoryItem {
  title: string;
  text: string;
  image: string;
  person: string;
  location: string;
}

export default function ImpactStories() {
  const [stories, setStories] = useState<StoryItem[]>(defaultStories);

  useEffect(() => {
    api.getStories().then((items: Story[]) => {
      if (items.length > 0) {
        setStories(items.map((s) => ({
          title: s.title,
          text: s.text,
          image: s.image_url,
          person: s.person_name,
          location: s.location,
        })));
      }
    }).catch(() => {});
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      {stories.map((story, i) => (
        <motion.article
          key={story.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-brand-light shadow-sm relative group overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light/40 rounded-bl-[80px] transition-transform group-hover:scale-110 duration-700" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 rounded-xl overflow-hidden mb-5 border-2 border-white shadow-md">
              <img src={story.image} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <Quote size={28} className="text-brand-accent/50 mb-3" />
            <h3 className="text-xl md:text-2xl font-display font-bold text-brand-dark mb-3">{story.title}</h3>
            <p className="text-base text-brand-deep leading-relaxed italic mb-6 flex-grow">"{story.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-brand-light">
              <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-primary font-bold text-lg">
                {story.person.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-brand-dark text-sm">{story.person}</div>
                <div className="text-xs text-brand-muted">{story.location}</div>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}