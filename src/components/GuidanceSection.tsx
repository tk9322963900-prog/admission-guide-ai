import { Check, FileText, Upload, CreditCard, BookOpen, Award } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  status: 'completed' | 'current' | 'upcoming';
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Check Eligibility & Choose Course',
    description: 'Use our AI assistant to check eligibility criteria and get personalized course recommendations based on your interests and academic background.',
    icon: BookOpen,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Fill Application Form',
    description: 'Complete your application form with accurate details. Our system guides you through each section to ensure nothing is missed.',
    icon: FileText,
    status: 'current',
  },
  {
    id: 3,
    title: 'Upload Documents',
    description: 'Submit all required documents including transcripts, certificates, and identification. Our document checker ensures everything is in order.',
    icon: Upload,
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'Pay Application Fee',
    description: 'Secure payment gateway supports multiple payment methods. Fee waivers and scholarships are automatically applied where eligible.',
    icon: CreditCard,
    status: 'upcoming',
  },
  {
    id: 5,
    title: 'Entrance Exam (if applicable)',
    description: 'Some programs require entrance exams. We provide preparation resources and schedule your exam at your convenience.',
    icon: Award,
    status: 'upcoming',
  },
  {
    id: 6,
    title: 'Admission Confirmation',
    description: 'Receive your admission confirmation and welcome package. Get ready to start your academic journey with us!',
    icon: Check,
    status: 'upcoming',
  },
];

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const Icon = step.icon;
  
  return (
    <div className="relative">
      {/* Connection Line */}
      {index < steps.length - 1 && (
        <div className="absolute left-6 top-16 h-20 w-px bg-gradient-to-b from-accent via-border to-border" />
      )}
      
      <div className={`flex gap-6 p-6 rounded-xl glass transition-all duration-300 ${
        step.status === 'current' ? 'border-accent shadow-glass' : 'border-border'
      } hover-glow`}>
        {/* Step Number & Icon */}
        <div className="flex-shrink-0">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
            step.status === 'completed' 
              ? 'bg-success text-success-foreground' 
              : step.status === 'current'
              ? 'bg-gradient-primary text-white'
              : 'bg-muted text-muted-foreground'
          } transition-colors duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-center mt-2">
            <span className="text-xs font-medium text-muted-foreground">Step {step.id}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className={`text-xl font-semibold mb-3 ${
            step.status === 'current' ? 'text-accent' : 'text-foreground'
          }`}>
            {step.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
          
          {step.status === 'current' && (
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
                <span>Current Step</span>
              </div>
            </div>
          )}
          
          {step.status === 'completed' && (
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-success">
                <Check className="w-4 h-4" />
                <span>Completed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const GuidanceSection = () => {
  return (
    <section id="guidance" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Application <span className="text-transparent bg-clip-text bg-gradient-primary">Guidance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our step-by-step guidance to ensure a smooth admission process. 
            We'll be with you every step of the way to your academic success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StepCard step={step} index={index} />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-12 p-6 glass rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-foreground">Application Progress</span>
              <span className="text-sm text-muted-foreground">2 of 6 steps completed</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: '33%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;