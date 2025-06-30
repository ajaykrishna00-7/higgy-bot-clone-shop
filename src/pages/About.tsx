
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Nasir Ahmed Shariff',
      position: 'Chief Operating Officer',
      email: 'nasir@higginbothams.co.in',
      description: 'Dynamic career of over 30 years that reflects pioneering experience and year-on-year success in achieving business growth objectives in midsized as well as large, established organisations. Enterprising leader with a solid record of contributions that streamlined operations, invigorated businesses, heightened productivity & enhanced internal controls. Leveraged entrepreneurial ability and skills in translating corporate vision, to overcome complex business challenges and deliver on high-impact decisions.',
      image: '/lovable-uploads/a80c0a0c-2df0-4650-8c3f-f631ef6b4e91.png'
    },
    {
      name: 'Murali D.P',
      position: 'Head Retail and Procurement',
      email: 'murali.dp@higginbothams.co.in',
      description: 'A seasoned professional with 20 years of experience in managing book business',
      image: '/lovable-uploads/1d0a42a9-3f31-4f93-b158-b5cdf8a3b570.png'
    },
    {
      name: 'Radha S',
      position: 'GM - Finance',
      email: 'radha.s@higginbothams.co.in',
      description: 'Financial expert with extensive experience in retail operations and strategic planning.',
      image: '/placeholder.svg'
    },
    {
      name: 'Mohammed Nawaz',
      position: 'Buyer - Books',
      email: 'nawaz@higginbothams.co.in',
      description: 'Expert book buyer with deep knowledge of market trends and customer preferences.',
      image: '/placeholder.svg'
    },
    {
      name: 'Udaykiran',
      position: 'Buyer - Books',
      email: 'udaykiran@higginbothams.co.in',
      description: 'Experienced in sourcing quality books across various genres and academic subjects.',
      image: '/placeholder.svg'
    },
    {
      name: 'Serena',
      position: 'Buyer - Non Books',
      email: 'serena@higginbothams.co.in',
      description: 'Specialist in non-book merchandise including stationery, gifts, and educational materials.',
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our name says a lot, but there's much more to it see.
              Discover the passion behind and uncover the essence
              of who we are
            </p>
          </div>

          {/* Company Heritage */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="w-64 h-32 mx-auto mb-8 bg-gray-200 flex items-center justify-center rounded-lg">
                <div className="text-4xl font-bold text-gray-400">HIGGINBOTHAMS</div>
              </div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Established in 1844, Higginbothams stands as India's oldest bookstore, serving generations of readers 
                with an unwavering commitment to literature, knowledge, and culture. For over 180 years, we have been 
                the cornerstone of India's literary landscape, fostering a love for books and learning across the nation.
              </p>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership Team</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {teamMembers.slice(0, 2).map((member, index) => (
                <Card key={member.name} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mb-6 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-gray-600 font-medium mb-2">{member.position}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.email}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.slice(2).map((member, index) => (
                <Card key={member.name} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{member.position}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.email}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Values */}
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Heritage & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">180+</div>
                <h3 className="font-semibold text-gray-700 mb-2">Years of Legacy</h3>
                <p className="text-gray-600">Serving readers since 1844 with dedication and passion</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">40+</div>
                <h3 className="font-semibold text-gray-700 mb-2">Store Locations</h3>
                <p className="text-gray-600">Nationwide presence bringing books to every corner of India</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">1M+</div>
                <h3 className="font-semibold text-gray-700 mb-2">Books Collection</h3>
                <p className="text-gray-600">Diverse genres spanning literature, academics, and beyond</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
