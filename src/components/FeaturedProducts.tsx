
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import { useSearch } from '@/contexts/SearchContext';
import { useAuth } from '@/contexts/AuthContext';

const FeaturedProducts = () => {
  const { allBooks } = useSearch();
  const { isAuthenticated } = useAuth();
  
  // Show first 4 books as featured
  const featuredBooks = allBooks.slice(0, 4);

  return (
    <section className="py-16 bg-parchment-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-leather-800 mb-4">Recommended Reads</h2>
          <p className="text-leather-600 font-serif text-lg">Handpicked favorites from our literary collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book, index) => (
            <Card 
              key={book.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-book-open vintage-paper aged-border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-leather-600 text-parchment-100 text-xs px-3 py-1 rounded-full font-serif">
                  {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                </div>
                <div className="absolute top-2 left-2 bg-parchment-100 text-leather-700 text-xs px-3 py-1 rounded-full border border-leather-300 font-serif">
                  {book.genre}
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-sm text-leather-500 mb-1 font-serif italic">{book.author}</div>
                <h3 className="font-display font-semibold text-leather-800 mb-3 line-clamp-2 text-lg">{book.title}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="ml-1 text-sm text-leather-600 font-serif">{book.rating}</span>
                  </div>
                  <span className="text-xs text-leather-500 ml-2 font-serif">({book.reviews} reviews)</span>
                </div>

                <p className="text-sm text-leather-600 mb-4 font-serif line-clamp-2">{book.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xl font-display font-bold text-leather-800">₹{book.price}</span>
                    <span className="text-sm text-leather-500 line-through ml-2 font-serif">₹{book.originalPrice}</span>
                  </div>
                </div>

                <Button 
                  className="w-full leather-texture text-parchment-50 hover:bg-leather-600 font-serif shadow-md"
                  size="sm"
                  disabled={!isAuthenticated}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {isAuthenticated ? 'Add to Library' : 'Login to Purchase'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-leather-600 text-leather-700 hover:bg-leather-700 hover:text-parchment-50 font-serif px-8 py-3 aged-border"
            onClick={() => window.location.href = '/search'}
          >
            Explore Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
