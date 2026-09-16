import PageHeader from '../components/PageHeader';
import ImpactStories from '../components/ImpactStories';

export default function Impact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader title="Our Impact" />

      <main className="flex-grow py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-10 max-w-6xl">
          
          {/* Voices from the Field */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                Voices from the Field
              </h2>
              <div className="w-16 h-1 bg-brand-primary mx-auto mt-2.5 rounded-full"></div>
            </div>

            <ImpactStories />
          </div>

        </div>
      </main>
    </div>
  );
}