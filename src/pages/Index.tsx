import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ChatSection from '@/components/ChatSection';
import CoursesSection from '@/components/CoursesSection';
import GuidanceSection from '@/components/GuidanceSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ChatSection />
      <CoursesSection />
      <GuidanceSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
