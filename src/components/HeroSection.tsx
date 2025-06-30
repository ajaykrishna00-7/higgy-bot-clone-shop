
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, Truck, Shield, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-teal to-brand-green py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Your Health,
              <br />
              Our Priority
            </h2>
            <p className="text-xl mb-6 opacity-90">
              India's most trusted pharmacy with over 175+ years of experience in healthcare
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-brand-teal hover:bg-gray-100 font-semibold"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Prescription
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-brand-teal"
              >
                Shop Now
              </Button>
            </div>
          </div>

          {/* Right content - Service highlights */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Truck className="h-8 w-8 mb-3 text-white" />
              <h3 className="font-semibold mb-2">Free Delivery</h3>
              <p className="text-sm opacity-90">On orders above ₹499</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Shield className="h-8 w-8 mb-3 text-white" />
              <h3 className="font-semibold mb-2">100% Genuine</h3>
              <p className="text-sm opacity-90">Authentic medicines</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Clock className="h-8 w-8 mb-3 text-white" />
              <h3 className="font-semibold mb-2">Quick Delivery</h3>
              <p className="text-sm opacity-90">Same day delivery</p>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Upload className="h-8 w-8 mb-3 text-white" />
              <h3 className="font-semibold mb-2">Easy Ordering</h3>
              <p className="text-sm opacity-90">Upload & order</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
