
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HIGGINBOTHAMS</h3>
            <p className="text-gray-300 mb-4">
              India's oldest bookstore since 1844. Where history meets literature across 40+ stores nationwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Store Locator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">New Releases</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Book Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Book Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Fiction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Non-Fiction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Academic</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Children's Books</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Regional Literature</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-300">+91-44-2819-3586</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-300">info@higginbothams.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  814 Anna Salai<br />
                  Chennai, Tamil Nadu 600002
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Higginbothams. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            India's oldest bookstore since 1844
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
