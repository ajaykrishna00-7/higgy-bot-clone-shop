
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
      text: "Hello! I'm your Higginbotham's literary assistant. How can I help you find your next great read?",
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
    'hello': 'Hi there! Welcome to Higginbothams. What kind of books are you looking for today?',
    'hi': 'Hello! I\'m here to help you discover amazing books. What genre interests you?',
    'help': 'I can help you with:\n• Finding books by genre, author, or title\n• Book recommendations\n• Store locations\n• New releases\n• Literary events\n• Order assistance',
    'fiction': 'We have an amazing fiction collection! Are you looking for contemporary fiction, classics, literary fiction, or perhaps a specific author?',
    'book': 'I\'d love to help you find the perfect book! Could you tell me what genre you\'re interested in or if you have a specific author in mind?',
    'recommend': 'I\'d be happy to recommend books! What are some of your favorite books or genres? This will help me suggest something you\'ll love.',
    'author': 'Which author are you looking for? We have works from classic authors like Dickens and Austen to contemporary writers like Haruki Murakami and Chimamanda Ngozi Adichie.',
    'store': 'We have 40+ stores across India! Our flagship store is on Anna Salai in Chennai. You can find your nearest store using our store locator.',
    'new': 'We get new releases every week! Currently popular are "The Seven Husbands of Evelyn Hugo", "Atomic Habits", and "The Silent Patient". What genre interests you?',
    'price': 'Our book prices vary by title and format. We offer competitive pricing and regular discounts. Paperbacks typically range from ₹200-600.',
    'events': 'We regularly host book launches, author interactions, and literary events at our stores. Check our events page for upcoming programs!',
    'children': 'We have a wonderful children\'s section with picture books, early readers, middle grade, and young adult titles. What age group are you shopping for?',
    'academic': 'Our academic section covers textbooks for schools and colleges across various subjects. Which subject or level are you looking for?',
    'order': 'You can order books online through our website or visit any of our 40+ stores. We also offer home delivery in select cities.',
    'contact': 'You can reach us at:\n📞 +91-44-2819-3586\n📧 info@higginbothams.com\n📍 814 Anna Salai, Chennai\n🕒 Mon-Sun: 9:30 AM - 9:00 PM'
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
    return "That's an interesting question about '" + userMessage + "'. For specific book recommendations or detailed information, I'd suggest visiting one of our stores where our knowledgeable staff can assist you personally. You can also call us at +91-44-2819-3586.";
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
    'Book recommendations',
    'Fiction books',
    'New releases',
    'Store locations',
    'Contact us'
  ];

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-4 shadow-lg animate-pulse"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 flex flex-col shadow-2xl animate-slide-up">
          {/* Header */}
          <div className="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
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
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border shadow-sm'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-gray-800" />}
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
                    <Bot className="h-4 w-4 text-gray-800" />
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
                placeholder="Ask about books..."
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gray-800 hover:bg-gray-700 text-white p-2"
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
