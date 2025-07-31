import React, { useState } from 'react';
import { User, Package, Heart, Settings, Gift, Star, MapPin, CreditCard } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'orders', name: 'Orders', icon: Package },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'measurements', name: 'Measurements', icon: Settings },
    { id: 'referrals', name: 'Referrals', icon: Gift },
    { id: 'reviews', name: 'Reviews', icon: Star }
  ];

  const orders = [
    {
      id: 'ORD001',
      date: '2025-01-15',
      status: 'Delivered',
      total: '₹1,299',
      items: 2,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 'ORD002',
      date: '2025-01-10',
      status: 'Shipped',
      total: '₹2,199',
      items: 3,
      image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Oversized Hoodie',
      price: '₹1,799',
      image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'Classic Polo',
      price: '₹1,299',
      image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Arjun Sharma"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="arjun@example.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    defaultValue="1995-06-15"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-6">Shipping Address</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address Line 1</label>
                  <input
                    type="text"
                    defaultValue="123 Fashion Street"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      defaultValue="Mumbai"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      defaultValue="Maharashtra"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                    <input
                      type="text"
                      defaultValue="400001"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-[#1c5681] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#164a6b] transition-colors">
              Save Changes
            </button>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#1c5681]">Order #{order.id}</h3>
                    <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={order.image}
                    alt="Order item"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-gray-700">{order.items} items</p>
                    <p className="text-lg font-semibold text-gray-900">{order.total}</p>
                  </div>
                  <button className="text-[#1c5681] hover:text-[#164a6b] font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'wishlist':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1c5681]">{item.price}</span>
                    <button className="bg-[#1c5681] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#164a6b] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'measurements':
        return (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-[#1c5681] mb-6">Body Measurements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Chest (inches)</label>
                <input
                  type="number"
                  defaultValue="38"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Waist (inches)</label>
                <input
                  type="number"
                  defaultValue="32"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                <input
                  type="number"
                  defaultValue="175"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                <input
                  type="number"
                  defaultValue="70"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#f5f0e6] rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>AI Recommendation:</strong> Based on your measurements, we recommend size M for most items. 
                For oversized fits, consider size L.
              </p>
            </div>
          </div>
        );

      case 'referrals':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#1c5681] to-[#2a6a92] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Your Referral Code</h3>
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <code className="text-lg font-mono">BEFIKRR-ARJUN123</code>
              </div>
              <p className="text-blue-100 mb-4">
                Share your code and earn ₹200 for every friend who makes their first purchase!
              </p>
              <button className="bg-white text-[#1c5681] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Share Code
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-4">Referral Stats</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#f5f0e6] rounded-lg">
                  <div className="text-2xl font-bold text-[#1c5681]">12</div>
                  <div className="text-sm text-gray-600">Friends Invited</div>
                </div>
                <div className="text-center p-4 bg-[#f5f0e6] rounded-lg">
                  <div className="text-2xl font-bold text-[#1c5681]">8</div>
                  <div className="text-sm text-gray-600">Successful Referrals</div>
                </div>
                <div className="text-center p-4 bg-[#f5f0e6] rounded-lg">
                  <div className="text-2xl font-bold text-[#1c5681]">₹1,600</div>
                  <div className="text-sm text-gray-600">Total Earned</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Classic White Tee</h4>
                  <div className="flex items-center space-x-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    "Perfect fit and amazing quality! The fabric is so soft and comfortable. 
                    Definitely ordering more colors."
                  </p>
                  <p className="text-xs text-gray-400 mt-2">Reviewed on Jan 10, 2025</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1c5681] mb-2">My Account</h1>
          <p className="text-gray-600">Manage your profile, orders, and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#1c5681] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Arjun Sharma</h3>
                <p className="text-sm text-gray-600">Member since Jan 2024</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-[#1c5681] text-white'
                        : 'text-gray-700 hover:bg-[#f5f0e6] hover:text-[#1c5681]'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;