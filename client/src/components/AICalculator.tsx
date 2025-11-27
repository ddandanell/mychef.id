import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
}

const calculatePrice = (query: string) => {
  const lower = query.toLowerCase();
  
  // Daily rates
  if ((lower.includes('1') || lower.includes('one')) && (lower.includes('day') || lower.includes('nights'))) {
    return 'For 1-2 days, our daily rate is Rp 800,000 per hour. For a typical 4-hour dinner service, that would be Rp 3,200,000. Would you like a custom quote for specific dates?';
  }
  
  if ((lower.includes('3') || lower.includes('4') || lower.includes('5') || lower.includes('6')) && (lower.includes('day') || lower.includes('days'))) {
    return 'For 3-6 days, we offer a weekly rate of Rp 350,000 per hour. That\'s 56% savings compared to daily rates! For a 4-hour dinner each night, that\'s about Rp 1,400,000 per day.';
  }
  
  if ((lower.includes('week') || lower.includes('7') || lower.includes('7-20') || lower.includes('20')) && !lower.includes('month')) {
    return 'For 7-20 days, our weekly rate is Rp 350,000 per hour. Perfect for villa stays! A week of dinners (28 hours) would be approximately Rp 9,800,000.';
  }
  
  if ((lower.includes('month') || lower.includes('30') || lower.includes('monthly'))) {
    return 'For 30+ days, our monthly rate is Rp 250,000 per hour. That\'s 69% off daily rates! A full month (120 hours) is approximately Rp 30,000,000. Perfect for long-term stays.';
  }
  
  if (lower.includes('breakfast') || lower.includes('lunch') || lower.includes('dinner')) {
    return 'Breakfast: 2 hours | Lunch: 3 hours | Dinner: 3 hours. These meal hours are added to your daily total. For example, a breakfast + dinner day would be 5 hours total.';
  }
  
  if (lower.includes('shopping') || lower.includes('grocery') || lower.includes('market')) {
    return 'Our chef arrives 2 hours early to plan your menu and shop at local markets for premium ingredients. This shopping time is FREE for you! Quality control at Bali\'s best markets is guaranteed.';
  }
  
  if (lower.includes('equipment') || lower.includes('cook') || lower.includes('cleanup')) {
    return 'All our chefs arrive fully equipped with professional cooking tools. We handle complete kitchen cleanup after every service. You just enjoy the meal!';
  }
  
  if (lower.includes('person') || lower.includes('guest') || lower.includes('group') || lower.includes('party')) {
    return 'Our pricing doesn\'t change based on guest count! Whether it\'s an intimate dinner for 2 or a party of 20, the hourly rate stays the same. Perfect for flexible entertaining!';
  }
  
  if (lower.includes('deposit') || lower.includes('payment') || lower.includes('cancel')) {
    return '50% deposit to secure your booking, 50% due 24 hours before. Cancellations within 48 hours incur a fee. We also offer flexible rescheduling options.';
  }
  
  if (lower.includes('24') || lower.includes('advance') || lower.includes('notice')) {
    return 'We require 48 hours advance notice for all bookings. This ensures we match you with the perfect chef for your event. Urgent requests? Contact us via WhatsApp!';
  }
  
  return 'I can help you calculate pricing! Ask me about: daily/weekly/monthly rates, meal types (breakfast/lunch/dinner), shopping, equipment, guest count, or booking terms. What would you like to know?';
};

export default function AICalculator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      text: 'Hello! 👋 I\'m your AI pricing assistant. Ask me about our rates, meal types, shopping services, or anything else about pricing. How can I help?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        text: calculatePrice(input)
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="hidden md:flex flex-col h-full"
      data-testid="container-ai-calculator"
    >
      <div className="relative bg-gradient-to-br from-primary/15 to-primary/8 rounded-2xl p-6 shadow-lg border border-primary/20 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">AI Price Assistant</h3>
            <p className="text-xs text-foreground/60">Instant pricing help</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                  msg.type === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-background border border-primary/20 text-foreground rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-background border border-primary/20 text-foreground rounded-lg rounded-bl-none px-4 py-2 flex items-center gap-2">
                <Loader className="w-4 h-4 animate-spin text-primary" />
                <span className="text-xs">Thinking...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask about pricing..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
            className="text-sm border-primary/20 focus-visible:ring-primary"
            data-testid="input-ai-calculator"
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-primary hover:bg-primary text-primary-foreground hover-elevate active-elevate-2"
            data-testid="button-ai-calculator-send"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
