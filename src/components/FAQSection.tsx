import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the last date to apply for admissions?',
    answer: 'The application deadline varies by program. For most undergraduate programs, the deadline is March 31st, while graduate programs typically have rolling admissions until May 15th. We recommend applying early to secure your spot and have more scholarship opportunities available.',
  },
  {
    id: '2',
    question: 'Can I apply for multiple courses at the same time?',
    answer: 'Yes, you can apply for up to 3 different courses with a single application. However, you\'ll need to meet the eligibility criteria for each program and pay the application fee for each course. Our AI assistant can help you choose the best combination based on your profile.',
  },
  {
    id: '3',
    question: 'Is there a scholarship facility available?',
    answer: 'We offer various scholarship programs including merit-based scholarships (up to 75% tuition fee waiver), need-based financial aid, sports scholarships, and special scholarships for underrepresented communities. Our financial aid team will automatically evaluate your eligibility during the application process.',
  },
  {
    id: '4',
    question: 'What documents are required for admission?',
    answer: 'Required documents include: academic transcripts, graduation certificates, standardized test scores (if applicable), passport-size photographs, identity proof, migration certificate, and character certificate. International students need additional documentation including visa status and English proficiency scores.',
  },
  {
    id: '5',
    question: 'How long does the admission process take?',
    answer: 'The complete admission process typically takes 2-3 weeks after document submission. This includes document verification, eligibility assessment, entrance exam evaluation (if applicable), and final admission decision. You\'ll receive regular updates via email and SMS throughout the process.',
  },
  {
    id: '6',
    question: 'Is there an entrance exam for all courses?',
    answer: 'Not all courses require entrance exams. Most undergraduate programs have entrance exams, while some graduate programs rely on previous academic performance and interviews. Professional courses like MBA and medical programs have mandatory entrance exams. Check the specific requirements for your chosen course.',
  },
  {
    id: '7',
    question: 'Can I change my course after admission?',
    answer: 'Course changes are possible within the first two weeks of the semester, subject to seat availability and meeting the eligibility criteria for the new course. There may be additional fees involved. We recommend discussing your options with our academic counselors before making any changes.',
  },
  {
    id: '8',
    question: 'What are the accommodation facilities available?',
    answer: 'We offer modern on-campus hostels with Wi-Fi, 24/7 security, mess facilities, recreational areas, and study rooms. Both AC and non-AC accommodations are available. Off-campus housing assistance is also provided for students who prefer external accommodation.',
  },
];

const FAQItem = ({ faq }: { faq: FAQ }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-accent/50">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/10 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-foreground pr-4">
          {faq.question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-5 border-t border-border/50">
          <p className="text-muted-foreground leading-relaxed pt-4">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faqs" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-6">
            <HelpCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">Got Questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our admission process, courses, and facilities. 
            Can't find what you're looking for? Our AI assistant is here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <FAQItem faq={faq} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI-powered admission assistant is available 24/7 to answer all your queries instantly.
              </p>
              <button
                onClick={() => document.querySelector('#chat')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-floating transition-all duration-300 transform hover:scale-105"
              >
                <HelpCircle className="w-5 h-5" />
                Ask AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;