
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="leather-texture text-parchment-100 relative">
      {/* Vintage pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          radial-gradient(circle at 30% 30%, rgba(255, 248, 240, 0.1) 2px, transparent 2px),
          radial-gradient(circle at 70% 70%, rgba(255, 248, 240, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px, 25px 25px'
      }}></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with vintage styling */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">HIGGINBOTHAMS</h3>
            <p className="text-parchment-200 mb-4 font-serif leading-relaxed">
              India's oldest bookstore since 1844. A literary sanctuary where tradition meets 
              contemporary reading across four decades of locations nationwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-parchment-300 hover:text-parchment-100 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-parchment-300 hover:text-parchment-100 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-parchment-300 hover:text-parchment-100 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-parchment-300 hover:text-parchment-100 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Literary Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">About Our Heritage</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Store Locator</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Literary Events</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Join Our Team</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Book Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Classic Literature</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Contemporary Fiction</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Academic Texts</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Children's Literature</a></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-100 font-serif transition-colors">Regional Works</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-parchment-300" />
                <span className="text-parchment-200 font-serif">+91-44-2819-3586</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-parchment-300" />
                <span className="text-parchment-200 font-serif">info@higginbothams.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-parchment-300 mt-1" />
                <span className="text-parchment-200 font-serif">
                  814 Anna Salai<br />
                  Chennai, Tamil Nadu 600002
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-leather-500" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-parchment-300 text-sm font-serif">
            © 2024 Higginbothams. All rights reserved.
          </p>
          <p className="text-parchment-300 text-sm mt-2 md:mt-0 font-serif italic">
            Preserving India's literary heritage since 1844
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
