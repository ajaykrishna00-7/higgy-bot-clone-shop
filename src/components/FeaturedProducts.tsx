
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    brand: 'Crocin',
    price: 45,
    originalPrice: 55,
    rating: 4.5,
    reviews: 234,
    image: '/placeholder.svg',
    prescription: false
  },
  {
    id: 2,
    name: 'Vitamin D3 Tablets',
    brand: 'HealthKart',
    price: 299,
    originalPrice: 399,
    rating: 4.3,
    reviews: 156,
    image: '/placeholder.svg',
    prescription: false
  },
  {
    id: 3,
    name: 'Digital Thermometer',
    brand: 'Omron',
    price: 450,
    originalPrice: 550,
    rating: 4.7,
    reviews: 89,
    image: '/placeholder.svg',
    prescription: false
  },
  {
    id: 4,
    name: 'Hand Sanitizer 500ml',
    brand: 'Dettol',
    price: 120,
    originalPrice: 150,
    rating: 4.4,
    reviews: 312,
    image: '/placeholder.svg',
    prescription: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600">Top-rated products trusted by thousands of customers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="absolute top-2 right-2 bg-brand-orange text-white text-xs px-2 py-1 rounded">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
              </div>
              
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-gray-800">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white"
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
            className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
