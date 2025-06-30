
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '@/contexts/SearchContext';
import { useAuth } from '@/contexts/AuthContext';
import AccountModal from './AccountModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const { setSearchQuery } = useSearch();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
    navigate('/search');
  };

  return (
    <header className="bg-parchment-50 shadow-lg relative z-50 vintage-paper">
      {/* Top bar with vintage styling */}
      <div className="bg-leather-700 text-parchment-100 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91-44-2819-3586</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@higginbothams.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>Find Store Near You</span>
          </div>
        </div>
      </div>

      {/* Main header with old bookshop styling */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo with vintage typography */}
          <Link to="/" className="flex items-center">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-leather-800 tracking-wider mb-1">
                HIGGINBOTHAMS
              </div>
              <div className="text-xs text-leather-600 font-serif italic tracking-wide">
                Est. 1844 • India's Oldest Bookstore
              </div>
            </div>
          </Link>

          {/* Search bar with vintage styling */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Search for books, authors, genres..."
                value={localSearchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-2 border-leather-300 rounded-lg focus:border-leather-500 bg-parchment-50 vintage-paper font-serif"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 leather-texture text-parchment-50 hover:bg-leather-600"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:flex items-center space-x-2 text-leather-700 hover:text-leather-800 hover:bg-parchment-100"
              onClick={() => setIsAccountModalOpen(true)}
            >
              <User className="h-5 w-5" />
              <span className="font-serif">
                {isAuthenticated ? user?.name?.split(' ')[0] : 'Account'}
              </span>
            </Button>
            <Button variant="ghost" className="relative text-leather-700 hover:text-leather-800 hover:bg-parchment-100">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-leather-600 text-parchment-50 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              className="md:hidden text-leather-700 hover:text-leather-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search books..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border-2 border-leather-300 rounded-lg focus:border-leather-500 bg-parchment-50 font-serif"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1 leather-texture text-parchment-50"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Navigation with aged paper styling */}
      <nav className="bg-parchment-100 border-t border-leather-300 aged-border">
        <div className="container mx-auto px-4">
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-8 py-4">
              <li><Link to="/" className="block py-2 text-leather-700 hover:text-leather-800 font-serif font-medium transition-colors">Home</Link></li>
              <li><Link to="/about" className="block py-2 text-leather-700 hover:text-leather-800 font-serif font-medium transition-colors">About Us</Link></li>
              <li><Link to="/news-events" className="block py-2 text-leather-700 hover:text-leather-800 font-serif font-medium transition-colors">News & Events</Link></li>
              <li><Link to="/new-releases" className="block py-2 text-leather-700 hover:text-leather-800 font-serif font-medium transition-colors">New Releases</Link></li>
              <li><Link to="/search" className="block py-2 text-leather-700 hover:text-leather-800 font-serif font-medium transition-colors">All Books</Link></li>
              <li><Link to="/contact" className="block py-2 text-leather-700 hover:text-leather-800 font-serif font-medium transition-colors">Contact</Link></li>
              <li className="md:hidden">
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 text-leather-700 hover:text-leather-800 hover:bg-parchment-100 py-2"
                  onClick={() => setIsAccountModalOpen(true)}
                >
                  <User className="h-5 w-5" />
                  <span className="font-serif">
                    {isAuthenticated ? user?.name?.split(' ')[0] : 'Account'}
                  </span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <AccountModal isOpen={isAccountModalOpen} onClose={() => setIsAccountModalOpen(false)} />
    </header>
  );
};

export default Header;
