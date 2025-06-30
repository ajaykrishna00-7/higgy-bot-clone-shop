
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const stores = [
    {
      name: 'Chennai',
      address: 'No. 116, Anna Salai, Chennai - 600 002',
      phone: '044 2851 3519',
      email: 'chennai@higginbothams.co.in',
      image: '/placeholder.svg'
    },
    {
      name: 'Bengaluru',
      address: '74, Mahatma Gandhi Road, Bengaluru - 560 001',
      phone: '096202 14348',
      email: 'ananda.c@higginbothams.co.in',
      image: '/placeholder.svg'
    },
    {
      name: 'Anekal',
      address: 'Alliance University Campus, Chandrapura, Anekal main rd., Anekal.',
      phone: '080 2782 5555',
      email: 'anekal@higginbothams.co.in',
      image: '/placeholder.svg'
    },
    {
      name: 'Ooty',
      address: 'Supermarket Complex, Commercial rd.',
      phone: '0423 244 4567',
      email: 'ooty@higginbothams.co.in',
      image: '/placeholder.svg'
    },
    {
      name: 'Coimbatore',
      address: 'Cross Cut Road, Gandhipuram',
      phone: '0422 238 5678',
      email: 'coimbatore@higginbothams.co.in',
      image: '/placeholder.svg'
    },
    {
      name: 'Madurai',
      address: 'West Masi Street, Near Meenakshi Temple',
      phone: '0452 234 1234',
      email: 'madurai@higginbothams.co.in',
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your bookish needs! If you have questions about our stores, 
              need assistance with your subscription, or just want to chat about books, feel free to reach out.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gray-800 hover:bg-gray-700">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">+91-44-2851-3519</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">customercare@higginbothams.co.in</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-600 mr-3 mt-1" />
                    <span className="text-gray-700">814 Anna Salai, Chennai, Tamil Nadu 600002</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Saturday</span>
                    <span className="text-gray-600">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday</span>
                    <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  For any other queries, please contact us on the email address or phone number below:
                </p>
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-800 mb-2">customercare@higginbothams.co.in</p>
                  <p className="text-lg font-semibold text-gray-800">044 2851 3519</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Store Locations */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Store Locations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stores.map((store, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={store.image} 
                    alt={`${store.name} store`}
                    className="w-full h-48 object-cover bg-gray-200"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{store.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-gray-600 mr-2 mt-1" />
                        <span className="text-gray-600">{store.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="text-gray-600">{store.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="text-gray-600 break-all">{store.email}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View Map
                    </Button>
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

export default Contact;
