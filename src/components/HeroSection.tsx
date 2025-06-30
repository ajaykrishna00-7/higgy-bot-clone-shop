
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] bg-gradient-to-br from-parchment-100 via-parchment-50 to-leather-100 flex items-center vintage-paper">
      {/* Vintage book texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content with elegant typography */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-leather-800 mb-6 leading-tight">
              Where Literary
              <span className="block text-leather-600 italic">Tradition Lives</span>
            </h1>
            <p className="text-xl text-leather-600 mb-8 leading-relaxed font-serif">
              Since 1844, Higginbothams has been the sanctuary for book lovers across India. 
              Discover timeless classics, contemporary masterpieces, and rare literary treasures 
              in our heritage collection spanning over 180 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="leather-texture text-parchment-50 hover:bg-leather-600 font-serif font-semibold px-8 py-3 shadow-lg"
              >
                Browse Our Collection
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-leather-600 text-leather-700 hover:bg-leather-700 hover:text-parchment-50 px-8 py-3 font-serif aged-border"
              >
                Visit Our Stores
              </Button>
            </div>
          </div>

          {/* Right content - Heritage cards with vintage styling */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 vintage-paper aged-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-leather-700 mb-2">180+</div>
              <h3 className="font-display font-semibold mb-2 text-leather-600">Years of Heritage</h3>
              <p className="text-sm text-leather-500 font-serif">A literary legacy since 1844</p>
            </Card>
            <Card className="p-6 vintage-paper aged-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-leather-700 mb-2">40+</div>
              <h3 className="font-display font-semibold mb-2 text-leather-600">Store Locations</h3>
              <p className="text-sm text-leather-500 font-serif">Across the Indian subcontinent</p>
            </Card>
            <Card className="p-6 vintage-paper aged-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-leather-700 mb-2">1M+</div>
              <h3 className="font-display font-semibold mb-2 text-leather-600">Books Collection</h3>
              <p className="text-sm text-leather-500 font-serif">In multiple languages & genres</p>
            </Card>
            <Card className="p-6 vintage-paper aged-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-display font-bold text-leather-700 mb-2">Est.</div>
              <h3 className="font-display font-semibold mb-2 text-leather-600">1844</h3>
              <p className="text-sm text-leather-500 font-serif">India's oldest bookstore</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
