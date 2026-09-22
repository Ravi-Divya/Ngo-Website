import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import OurMissionSection from '../components/OurMissionSection';
import WhoWeHelp from '../components/WhoWeHelp';
import OurProgramsSection from '../components/OurProgramsSection';
import HowWeHelp from '../components/HowWeHelp';
import ImpactAtAGlance from '../components/ImpactAtAGlance';
import FeaturedProject from '../components/FeaturedProject';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import GalleryPreview from '../components/GalleryPreview';
import WorkInAction from '../components/WorkInAction';
import WhereWeWork from '../components/WhereWeWork';
import PartnersScroll from '../components/PartnersScroll';
import ResourcesSection from '../components/ResourcesSection';
import WhySupportUs from '../components/WhySupportUs';
import WaysToSupport from '../components/WaysToSupport';
import DonationQuickCTA from '../components/DonationQuickCTA';
import VolunteerCTA from '../components/VolunteerCTA';
import EventsUpdates from '../components/EventsUpdates';
import NewsStories from '../components/NewsStories';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 3. Hero Section (Powerful headline, mission statement, Donate & Learn More CTAs, impact imagery) */}
      <Hero />

      {/* 4. Trust Strip (Years of service, villages served, beneficiaries reached, 80G/12A/FCRA certification) */}
      <TrustStrip />

      {/* 5. Our Mission (Problem addressed, transformative change, vision, mission & founder recognition) */}
      <OurMissionSection />

      {/* 6. Who We Help (Yanadi tribals, rural children, women artisans, differently-abled & elderly) */}
      <WhoWeHelp />

      {/* 7. Our Programs (Education, Housing, Livelihoods, Forestry, Emergency Relief, Water) */}
      <OurProgramsSection />

      {/* 8. How We Help (4-step transparent cycle from donor contribution to field delivery) */}
      <HowWeHelp />

      {/* 9. Impact at a Glance (Key measurable metrics: children educated, homes built, water borewells) */}
      <ImpactAtAGlance />

      {/* 10. Featured Project / Current Campaign (Clean drinking water for Anupu Yanadi Colony with progress bar) */}
      <FeaturedProject />

      {/* 11. Success Stories (Chinnamma, Lalithamma, Kishore & Venkataiya, Murali) */}
      <SuccessStoriesSection />

      {/* 12. Photo & Video Gallery (Real field photographs with hover lightbox preview & full gallery link) */}
      <GalleryPreview />

      {/* 13. Our Work in Action (Field relief drives, skill development, health camps, Gram Sabha advocacy) */}
      <WorkInAction />

      {/* 14. Where We Work (Andhra Pradesh, Chittoor District, Gudipala, GD Nellore, Puthalapattu, Anupu) */}
      <WhereWeWork />

      {/* 15. Our Partners / Supporters (Continuous verified partner logo carousel) */}
      <PartnersScroll />

      {/* 16. Transparency & Accountability (80G, 12AB, FCRA, NGO Darpan, downloadable documents) */}
      <ResourcesSection />

      {/* 17. Why Support Us? (4 pillars: 30-year legacy, direct-to-community, statutory compliance, sustainability) */}
      <WhySupportUs />

      {/* 18. Ways to Support (Donate, Volunteer, CSR Partnership, Sponsor a Child/Project) */}
      <WaysToSupport />

      {/* 19. Donation CTA (Quick donation amount selector ₹500, ₹1000, ₹2500, ₹5000 + Canara Bank copy details) */}
      <DonationQuickCTA />

      {/* 20. Volunteer CTA (Call to volunteer with skills-based tracks and one-click application) */}
      <VolunteerCTA />

      {/* 21. Events / Updates (Upcoming school supplies drive, water workshops, and recent field milestones) */}
      <EventsUpdates />

      {/* 22. News / Stories (Government felicitations, project expansions, and reforestation milestones) */}
      <NewsStories />

      {/* 23. Testimonials (Feedback from village elders, international partners, and grassroots volunteers) */}
      <TestimonialsSection />

      {/* 24. FAQ (6 comprehensive questions on donations, tax receipts, volunteering, CSR, visits) */}
      <FAQSection />

      {/* 25. Newsletter / Updates (Email signup connected to /api/subscribe with real-time feedback) */}
      <NewsletterSection />

      {/* 26. Final CTA (High-impact closing banner with Donate, Volunteer, and Contact actions) */}
      <FinalCTA />
    </div>
  );
}