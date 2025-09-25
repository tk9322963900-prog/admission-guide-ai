import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ChatSection from '@/components/ChatSection';
import CoursesSection from '@/components/CoursesSection';
import GuidanceSection from '@/components/GuidanceSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: <Hero onNavigateToChat={() => setActiveSection('chat')} />,
    chat: <ChatSection />,
    courses: <CoursesSection />,
    guidance: <GuidanceSection />,
    faqs: <FAQSection />,
    contact: <ContactSection />
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <div className="relative w-full h-screen">
        {Object.entries(sections).map(([key, component]) => (
          <div
            key={key}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              activeSection === key
                ? 'translate-x-0 opacity-100 scale-100'
                : key === 'home' && activeSection !== 'home'
                ? '-translate-x-full opacity-0 scale-95'
                : activeSection === 'home' && key !== 'home'
                ? 'translate-x-full opacity-0 scale-95'
                : activeSection > key
                ? '-translate-x-full opacity-0 scale-95'
                : 'translate-x-full opacity-0 scale-95'
            }`}
            style={{
              zIndex: activeSection === key ? 10 : 1
            }}
          >
            {component}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;