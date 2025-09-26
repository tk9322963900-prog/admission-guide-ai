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
  
  console.log('Current activeSection:', activeSection);

  const sections = {
    home: <Hero onNavigateToChat={() => setActiveSection('chat')} />,
    chat: <ChatSection />,
    courses: <CoursesSection />,
    guidance: <GuidanceSection />,
    faqs: <FAQSection />,
    contact: <ContactSection />
  };

  console.log('Available sections:', Object.keys(sections));

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <div className="relative w-full h-screen pt-16">
        {Object.entries(sections).map(([key, component]) => (
          <div
            key={key}
            className={`absolute inset-0 top-16 w-full h-full transition-all duration-700 ease-in-out transform ${
              activeSection === key
                ? 'translate-x-0 opacity-100 scale-100 z-10'
                : 'translate-x-full opacity-0 scale-95 z-0'
            }`}
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;