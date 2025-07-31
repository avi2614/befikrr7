import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', { name, email });
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="bg-gradient-to-br from-[#1c5681] to-[#2a6a92] p-8 text-white text-center">
          <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Get 10% Off Your First Drop</h2>
          <p className="text-blue-100">Join the crew and never miss exclusive styles!</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none focus:ring-1 focus:ring-[#1c5681]"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none focus:ring-1 focus:ring-[#1c5681]"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1c5681] text-white py-3 rounded-lg font-semibold hover:bg-[#164a6b] transition-colors"
            >
              Claim My 10% Off
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            By subscribing, you agree to receive marketing emails from बेfikrr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;