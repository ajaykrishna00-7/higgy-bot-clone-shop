
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

const NewsEvents = () => {
  const events = [
    {
      title: 'Author Meet & Greet: Bestselling Fiction Writers',
      date: '2024-07-15',
      time: '6:00 PM - 8:00 PM',
      location: 'Chennai - Anna Salai Store',
      description: 'Join us for an exclusive evening with acclaimed fiction authors as they discuss their latest works and share insights into their creative process.',
      image: '/placeholder.svg'
    },
    {
      title: 'Children\'s Book Reading Session',
      date: '2024-07-20',
      time: '4:00 PM - 5:30 PM',
      location: 'Bengaluru - Mahatma Gandhi Road',
      description: 'A delightful reading session for children featuring popular picture books and interactive storytelling.',
      image: '/placeholder.svg'
    },
    {
      title: 'Academic Book Fair - Engineering & Medical',
      date: '2024-07-25',
      time: '10:00 AM - 7:00 PM',
      location: 'Multiple Locations',
      description: 'Special discounts on academic textbooks, reference materials, and study guides for engineering and medical students.',
      image: '/placeholder.svg'
    },
    {
      title: 'Poetry Workshop with Local Authors',
      date: '2024-08-05',
      time: '3:00 PM - 6:00 PM',
      location: 'Chennai - Anna Salai Store',
      description: 'Learn the art of poetry writing from established poets and share your own creations in a supportive environment.',
      image: '/placeholder.svg'
    }
  ];

  const news = [
    {
      title: 'Higginbothams Celebrates 180 Years of Literary Excellence',
      date: '2024-06-15',
      excerpt: 'As we mark another milestone in our journey, we reflect on nearly two centuries of serving India\'s reading community with dedication and passion.',
      image: '/placeholder.svg'
    },
    {
      title: 'New Store Opening in Coimbatore',
      date: '2024-06-10',
      excerpt: 'We\'re excited to announce the opening of our newest location in Coimbatore, bringing our curated collection closer to book lovers in the region.',
      image: '/placeholder.svg'
    },
    {
      title: 'Partnership with Local Schools for Reading Programs',
      date: '2024-06-05',
      excerpt: 'Higginbothams has partnered with local schools to promote reading habits among students through specially designed programs and book donations.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">News & Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings, book launches, author events, and literary celebrations at Higginbothams
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-lg bg-gray-200"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 mt-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Latest News */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest News</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover bg-gray-200"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(article.date).toLocaleDateString('en-IN')}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                    <p className="text-gray-600">{article.excerpt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsEvents;
