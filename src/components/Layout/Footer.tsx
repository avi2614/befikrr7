import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1c5681] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-[#f5f0e6]">बेfikrr</div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Wear Your Vibe. The future of fashion meets technology with AI-powered styling, 
              virtual try-ons, and custom designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-[#f5f0e6] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-[#f5f0e6] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-[#f5f0e6] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#f5f0e6]">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/shop" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Shop All
              </Link>
              <Link to="/try-on" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Virtual Try-On
              </Link>
              <Link to="/design" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Design Studio
              </Link>
              <Link to="/track" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Track Order
              </Link>
              <Link to="/referral" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Referral Program
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#f5f0e6]">Categories</h3>
            <div className="space-y-2">
              <a href="#" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                T-Shirts
              </a>
              <a href="#" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Oversized
              </a>
              <a href="#" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Hoodies
              </a>
              <a href="#" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Polos
              </a>
              <a href="#" className="block text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
                Crop Tops
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#f5f0e6]">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100 text-sm">hello@befikrr.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100 text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">
            © 2025 बेfikrr. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/size-guide" className="text-blue-100 hover:text-[#f5f0e6] transition-colors text-sm">
              Size Guide
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;