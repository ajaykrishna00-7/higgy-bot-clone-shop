
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Higginbotham's assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    'hello': 'Hi there! How can I assist you with your healthcare needs today?',
    'hi': 'Hello! Welcome to Higginbotham\'s. What can I help you find?',
    'help': 'I can help you with:\n• Finding medicines and products\n• Prescription uploads\n• Store locations\n• Order tracking\n• Health advice',
    'medicine': 'I can help you find medicines. Please tell me the name of the medicine you\'re looking for, or upload your prescription.',
    'prescription': 'You can easily upload your prescription by clicking the "Upload Prescription" button on our homepage. We\'ll process it and deliver your medicines to your doorstep.',
    'delivery': 'We offer free delivery on orders above ₹499. Same-day delivery is available in select cities. Standard delivery takes 1-2 business days.',
    'store': 'We have 750+ stores across India. You can find your nearest store using our store locator on the website.',
    'price': 'Our prices are competitive and we offer regular discounts. You can compare prices on our website before making a purchase.',
    'genuine': 'All our medicines are 100% genuine and sourced directly from authorized distributors. We guarantee authenticity.',
    'order': 'You can track your order by logging into your account or using the order tracking feature on our website.',
    'payment': 'We accept all major payment methods including credit/debit cards, UPI, net banking, and cash on delivery.',
    'return': 'We have a hassle-free return policy. You can return unopened medicines within 7 days of delivery.',
    'contact': 'You can reach us at:\n📞 1860-123-4567\n📧 care@higginbothams.in\n🕒 Available 24/7'
  };

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Check for keywords in the message
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseMessage.includes(key)) {
        return response;
      }
    }
    
    // Default response
    return "I understand you're asking about '" + userMessage + "'. For specific medical advice or detailed product information, please consult with our pharmacists at 1860-123-4567 or visit your nearest store.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickActions = [
    'Find medicines',
    'Upload prescription',
    'Store locations',
    'Track order',
    'Contact support'
  ];

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-brand-teal hover:bg-brand-teal-dark text-white rounded-full p-4 shadow-lg animate-pulse"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 flex flex-col shadow-2xl animate-slide-up">
          {/* Header */}
          <div className="bg-brand-teal text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Higginbotham's Assistant</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-brand-teal text-white'
                      : 'bg-white border shadow-sm'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-brand-teal" />}
                    {message.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                    <div>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="bg-white border shadow-sm p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-brand-teal" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          <div className="p-2 bg-white border-t">
            <div className="flex flex-wrap gap-1 mb-2">
              {quickActions.map((action) => (
                <Button
                  key={action}
                  variant="outline"
                  size="sm"
                  className="text-xs h-6 px-2"
                  onClick={() => setInputMessage(action)}
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t rounded-b-lg">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-brand-teal hover:bg-brand-teal-dark text-white p-2"
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
