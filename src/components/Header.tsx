
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top bar */}
      <div className="bg-brand-teal text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>1860-123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>care@higginbothams.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Find Store Near You</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-brand-teal">Higginbotham's</h1>
            <span className="text-sm text-gray-600 ml-2">Since 1844</span>
          </div>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for medicines, health products..."
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 bg-brand-teal hover:bg-brand-teal-dark text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Account</span>
            </Button>
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search medicines..."
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-teal"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1 bg-brand-teal hover:bg-brand-teal-dark text-white"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
              <li><a href="#" className="block py-2 text-gray-700 hover:text-brand-teal font-medium">Medicines</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-brand-teal font-medium">Health Care</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-brand-teal font-medium">Personal Care</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-brand-teal font-medium">Baby Care</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-brand-teal font-medium">Wellness</a></li>
              <li><a href="#" className="block py-2 text-gray-700 hover:text-brand-teal font-medium">Upload Prescription</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
