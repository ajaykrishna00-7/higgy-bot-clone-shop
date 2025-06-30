
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-r from-gray-100 to-gray-200 flex items-center">
      {/* Background with classical building */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <div className="text-6xl md:text-8xl font-bold text-gray-400 tracking-widest">
            HIGGINBOTHAMS
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Where History Meets
              <span className="block text-gray-600">Literature</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              India's oldest bookstore since 1844. Discover timeless classics, 
              contemporary bestsellers, and rare collections across our 40+ stores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gray-800 text-white hover:bg-gray-700 font-semibold px-8 py-3"
              >
                Explore Books
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3"
              >
                Find a Store
              </Button>
            </div>
          </div>

          {/* Right content - Heritage highlights */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">180+</div>
              <h3 className="font-semibold mb-2 text-gray-700">Years of Legacy</h3>
              <p className="text-sm text-gray-600">Serving readers since 1844</p>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">40+</div>
              <h3 className="font-semibold mb-2 text-gray-700">Store Locations</h3>
              <p className="text-sm text-gray-600">Across India</p>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">1M+</div>
              <h3 className="font-semibold mb-2 text-gray-700">Books Collection</h3>
              <p className="text-sm text-gray-600">Diverse genres & languages</p>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur-sm shadow-lg">
              <div className="text-3xl font-bold text-gray-800 mb-2">Est.</div>
              <h3 className="font-semibold mb-2 text-gray-700">1844</h3>
              <p className="text-sm text-gray-600">India's oldest bookstore</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
