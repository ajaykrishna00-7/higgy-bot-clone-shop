
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const NewReleases = () => {
  const newBooks = [
    {
      title: 'The Seven Moons of Maali Almeida',
      author: 'Shehan Karunatilaka',
      price: '₹599',
      originalPrice: '₹699',
      category: 'Fiction',
      rating: 4.5,
      description: 'Booker Prize winner 2022 - A darkly comic satire set in 1990s Sri Lanka.',
      image: '/placeholder.svg',
      isNew: true
    },
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      price: '₹450',
      originalPrice: '₹550',
      category: 'Self-Help',
      rating: 4.8,
      description: 'The life-changing million-copy bestseller on building good habits.',
      image: '/placeholder.svg',
      isNew: true
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: '₹399',
      originalPrice: '₹499',
      category: 'Fiction',
      rating: 4.3,
      description: 'A novel about all the choices that go into a life well lived.',
      image: '/placeholder.svg',
      isNew: true
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      price: '₹525',
      originalPrice: '₹625',
      category: 'Memoir',
      rating: 4.6,
      description: 'A memoir about education, transformation, and the price of learning.',
      image: '/placeholder.svg',
      isNew: true
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      price: '₹375',
      originalPrice: '₹425',
      category: 'Finance',
      rating: 4.4,
      description: 'Timeless lessons on wealth, greed, and happiness.',
      image: '/placeholder.svg',
      isNew: true
    },
    {
      title: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      price: '₹650',
      originalPrice: '₹750',
      category: 'Fiction',
      rating: 4.2,
      description: 'From the Nobel Prize-winning author of Never Let Me Go.',
      image: '/placeholder.svg',
      isNew: true
    }
  ];

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Self-Help', 'Academic', 'Biography', 'Children'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">New Releases</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest books from renowned authors and emerging voices. Stay ahead with our carefully curated collection of new releases.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured New Release */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Featured New Release
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">The Seven Moons of Maali Almeida</h2>
                <p className="text-gray-600 mb-4">by Shehan Karunatilaka</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-gray-600">(4.5/5)</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Winner of the 2022 Booker Prize, this darkly comic satire follows a photographer who must solve his own murder from the afterlife. A brilliant exploration of Sri Lankan history and politics wrapped in magical realism.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-gray-800">₹599</span>
                  <span className="text-lg text-gray-500 line-through">₹699</span>
                  <Button className="bg-gray-800 hover:bg-gray-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Book Cover" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* New Releases Grid */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Arrivals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newBooks.map((book, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-64 object-cover bg-gray-200"
                    />
                    {book.isNew && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        NEW
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-white text-gray-800 hover:bg-gray-100">
                        Quick View
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{book.category}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{book.title}</h3>
                    <p className="text-gray-600 mb-3">by {book.author}</p>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({book.rating}/5)</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-800">{book.price}</span>
                        <span className="text-sm text-gray-500 line-through">{book.originalPrice}</span>
                      </div>
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-700">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with New Releases</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter and be the first to know about new books, exclusive offers, and author events.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg text-gray-800"
              />
              <Button className="bg-white text-gray-800 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewReleases;
