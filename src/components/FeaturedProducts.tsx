
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 399,
    originalPrice: 499,
    rating: 4.6,
    reviews: 1234,
    image: '/placeholder.svg',
    genre: 'Fiction'
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 892,
    image: '/placeholder.svg',
    genre: 'Self-Help'
  },
  {
    id: 3,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 350,
    originalPrice: 450,
    rating: 4.4,
    reviews: 567,
    image: '/placeholder.svg',
    genre: 'Thriller'
  },
  {
    id: 4,
    title: 'Educated',
    author: 'Tara Westover',
    price: 425,
    originalPrice: 525,
    rating: 4.7,
    reviews: 743,
    image: '/placeholder.svg',
    genre: 'Memoir'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Bestsellers</h2>
          <p className="text-gray-600">Top-rated books loved by our readers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card 
              key={book.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover bg-gray-100"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                </div>
                <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {book.genre}
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{book.author}</div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{book.title}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">({book.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-gray-800">₹{book.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{book.originalPrice}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
          >
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
