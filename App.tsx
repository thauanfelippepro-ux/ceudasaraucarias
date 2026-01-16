
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Storytelling from './components/Storytelling';
import Specs from './components/Specs';
import SpacesGrid from './components/SpacesGrid';
import MomentsGallery from './components/MomentsGallery';
import EventCategories from './components/EventCategories';
import GeminiPlanner from './components/GeminiPlanner';
import FAQ from './components/FAQ';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-forest selection:text-white overflow-x-hidden bg-linen">
      <Navbar />
      <main>
        <Hero />
        <Specs />
        <Storytelling />
        <MomentsGallery />
        <EventCategories />
        <SpacesGrid />
        <section id="planejador" className="bg-[#EEEEEE] py-32 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-6">
             <div className="text-center mb-16">
               <span className="text-xs uppercase tracking-[0.3em] text-sage mb-4 block font-bold">Guia Prático</span>
               <h2 className="text-4xl md:text-5xl font-serif text-forest">Assistente Virtual</h2>
               <p className="mt-4 text-forest/60 max-w-xl mx-auto">Respostas imediatas sobre nossa infraestrutura, logística e agendamentos.</p>
             </div>
             <GeminiPlanner />
          </div>
        </section>
        <FAQ />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
};

export default App;
