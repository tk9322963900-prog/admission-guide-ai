import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onNavigateToChat?: () => void;
}

const Hero = ({ onNavigateToChat }: HeroProps) => {
  const scrollToChat = () => {
    onNavigateToChat?.();
  };

  return (
    <section id="home" className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero opacity-60" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent animate-glow" />
            <span className="text-sm font-medium text-accent">AI-Powered Admission Assistant</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              College Admission
            </span>
            <br />
            <span className="text-foreground">Agent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your AI-powered assistant for seamless college admissions. Get personalized guidance, course recommendations, and instant answers to all your questions.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-glow" />
              <span>Instant Responses</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-warning animate-glow" />
              <span>Course Matching</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
              <span>24/7 Available</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={onNavigateToChat}
              className="bg-gradient-primary hover:shadow-floating transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-glow" />
              Start Chat with Admission Agent
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="group p-6 rounded-2xl glass hover:shadow-floating transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Browse Courses</h3>
              <p className="text-sm text-muted-foreground">Explore 500+ courses across different streams and find your perfect match.</p>
            </div>

            <div className="group p-6 rounded-2xl glass hover:shadow-floating transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Check Eligibility</h3>
              <p className="text-sm text-muted-foreground">Verify your eligibility for courses with our AI-powered assessment tool.</p>
            </div>

            <div className="group p-6 rounded-2xl glass hover:shadow-floating transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fee Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate total fees including scholarships and payment plans.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
              <div className="text-muted-foreground">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Colleges Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>

          {/* Student Testimonial */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="max-w-2xl mx-auto p-8 rounded-2xl glass">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Priya Sharma</h4>
                  <p className="text-sm text-muted-foreground">Engineering Student, IIT Delhi</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The AI assistant helped me navigate through the complex admission process seamlessly. 
                Got admission in my dream college with a 40% scholarship!"
              </p>
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;