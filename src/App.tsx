import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { WatchDemoModal } from './components/WatchDemoModal';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isWatchDemoModalOpen, setIsWatchDemoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);
  
  const openWatchDemoModal = () => setIsWatchDemoModalOpen(true);
  const closeWatchDemoModal = () => setIsWatchDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Blue Wave Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100/20 to-transparent animate-blue-flow"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/20 to-transparent animate-blue-flow" style={{animationDelay: '-4s'}}></div>
      </div>

      <Header 
        onRequestDemo={openDemoModal}
        onScrollToSection={scrollToSection}
      />
      
      <main>
        <section id="home">
          <Hero 
            onStartTrial={openDemoModal}
            onWatchDemo={openWatchDemoModal}
          />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <Clients onRequestDemo={openDemoModal} />
        
        <section id="contact">
          <Contact onRequestDemo={openDemoModal} />
        </section>
      </main>
      
      <Footer />

      {/* Modals */}
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
      />
      
      <WatchDemoModal
        isOpen={isWatchDemoModalOpen}
        onClose={closeWatchDemoModal}
        onStartTrial={openDemoModal}
        onContactSales={openDemoModal}
      />
    </div>
  );
}

export default App;