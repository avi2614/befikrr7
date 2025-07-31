import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, User, Search, Mic } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Try-On', path: '/try-on' },
    { name: 'Design', path: '/design' },
    { name: 'Track', path: '/track' }
  ];

  const toggleVoice = () => {
    setIsVoiceActive(!isVoiceActive);
    // Voice recognition implementation would go here
  };

  return (
    <nav className="fixed top-0 w-full bg-[#f5f0e6]/95 backdrop-blur-md z-50 border-b border-[#1c5681]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#1c5681]">बेfikrr</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#1c5681] ${
                  location.pathname === item.path
                    ? 'text-[#1c5681] border-b-2 border-[#1c5681] pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search styles..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-200 focus:border-[#1c5681] focus:outline-none focus:ring-1 focus:ring-[#1c5681]"
              />
            </div>
            <button
              onClick={toggleVoice}
              className={`p-2 rounded-full transition-colors ${
                isVoiceActive 
                  ? 'bg-[#1c5681] text-white' 
                  : 'text-gray-600 hover:text-[#1c5681] hover:bg-gray-100'
              }`}
            >
              <Mic className="h-5 w-5" />
            </button>
            <Link to="/wishlist" className="text-gray-600 hover:text-[#1c5681] transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-[#1c5681] transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[#1c5681] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-[#1c5681] transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#1c5681] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#1c5681] hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                <button
                  onClick={toggleVoice}
                  className={`p-2 rounded-full transition-colors ${
                    isVoiceActive 
                      ? 'bg-[#1c5681] text-white' 
                      : 'text-gray-600 hover:text-[#1c5681]'
                  }`}
                >
                  <Mic className="h-5 w-5" />
                </button>
                <Link to="/wishlist" className="text-gray-600 hover:text-[#1c5681] transition-colors">
                  <Heart className="h-5 w-5" />
                </Link>
                <Link to="/cart" className="text-gray-600 hover:text-[#1c5681] transition-colors relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-[#1c5681] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <Link to="/account" className="text-gray-600 hover:text-[#1c5681] transition-colors">
                  <User className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;