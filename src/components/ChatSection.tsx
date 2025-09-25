import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your College Admission Assistant. I can help you with course selection, application guidance, eligibility requirements, and much more. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Based on your interests, I'd recommend looking into our Computer Science and Engineering programs. Would you like me to provide more details about the eligibility criteria?",
        "I can help you with that! For most programs, you'll need to complete your application by the end of this month. Let me guide you through the application process step by step.",
        "Excellent choice! Our scholarship programs can cover up to 75% of tuition fees. I'll need to know more about your academic background to suggest the best options for you.",
        "The admission process typically takes 2-3 weeks after document submission. I can help you track your application status and prepare for any entrance exams if required.",
      ];

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <section id="chat" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chat with Your <span className="text-transparent bg-clip-text bg-gradient-primary">AI Assistant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your admission queries. Our AI assistant is trained to help with courses, applications, and guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl shadow-card overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-6 border-b border-border bg-gradient-card">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Admission Assistant</h3>
                <p className="text-sm text-success">Online • Ready to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 animate-fade-in-up ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'ai' && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  
                  <div className={message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}>
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>

                  {message.sender === 'user' && (
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary flex-shrink-0">
                      <User className="w-4 h-4 text-secondary-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3 animate-fade-in-up">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="chat-bubble-ai">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-border bg-gradient-card">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about courses, eligibility, applications, or anything else..."
                  className="flex-1 bg-background/50 border-border focus:border-primary transition-smooth"
                />
                <Button 
                  onClick={sendMessage}
                  className="bg-gradient-primary hover:shadow-floating transition-all duration-300 px-6"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;