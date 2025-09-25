import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', query: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'admissions@university.edu',
      description: 'Get response within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9 AM - 6 PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 University Ave, City, State 12345',
      description: 'Campus tours available',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have specific questions or need personalized assistance? Our admissions team is here to help you 
            navigate your journey to academic success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Send us a message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 text-success mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-success mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-background/50 border-border focus:border-accent transition-smooth"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="bg-background/50 border-border focus:border-accent transition-smooth"
                      />
                    </div>

                    <div>
                      <label htmlFor="query" className="block text-sm font-medium text-foreground mb-2">
                        Your Message
                      </label>
                      <Textarea
                        id="query"
                        name="query"
                        value={formData.query}
                        onChange={handleInputChange}
                        placeholder="Tell us about your query, course interests, or any questions you have..."
                        rows={6}
                        required
                        className="bg-background/50 border-border focus:border-accent transition-smooth resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-floating transition-all duration-300 py-6 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Reach out through any of these channels. We're here to support your academic journey.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="glass border-border hover-glow transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-white flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-accent font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="glass border-border">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button
                    onClick={() => document.querySelector('#chat')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Chat with AI Assistant</span>
                  </button>
                  
                  <button
                    onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Browse Courses</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;