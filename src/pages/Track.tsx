import React, { useState } from 'react';
import { Package, Truck, MapPin, CheckCircle, Clock, Search } from 'lucide-react';

const Track = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const orderStatuses = [
    {
      status: 'Order Placed',
      description: 'Your order has been received and is being processed',
      date: '2025-01-15 10:30 AM',
      completed: true,
      icon: CheckCircle
    },
    {
      status: 'Order Confirmed',
      description: 'Payment confirmed and order is being prepared',
      date: '2025-01-15 11:45 AM',
      completed: true,
      icon: CheckCircle
    },
    {
      status: 'Packed',
      description: 'Your items are packed and ready for shipment',
      date: '2025-01-16 02:15 PM',
      completed: true,
      icon: Package
    },
    {
      status: 'Shipped',
      description: 'Your order is on its way to you',
      date: '2025-01-17 09:00 AM',
      completed: true,
      icon: Truck
    },
    {
      status: 'Out for Delivery',
      description: 'Your order is out for delivery and will arrive soon',
      date: '2025-01-18 08:30 AM',
      completed: false,
      icon: MapPin
    },
    {
      status: 'Delivered',
      description: 'Order delivered successfully',
      date: 'Expected by 2025-01-18 06:00 PM',
      completed: false,
      icon: CheckCircle
    }
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // Simulate tracking API call
    setTimeout(() => {
      setIsTracking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e6] to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1c5681] mb-4">Track Your Order</h1>
          <p className="text-lg text-gray-600">
            Stay updated with real-time tracking of your बेfikrr order
          </p>
        </div>

        {/* Tracking Input */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Order ID or Email"
                className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:border-[#1c5681] focus:outline-none focus:ring-1 focus:ring-[#1c5681] text-lg"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isTracking}
              className="bg-[#1c5681] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#164a6b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTracking ? 'Tracking...' : 'Track Order'}
            </button>
          </form>
        </div>

        {/* Sample Order Status */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Order Header */}
          <div className="bg-gradient-to-r from-[#1c5681] to-[#2a6a92] p-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">Order #BEF12345</h2>
                <p className="text-blue-100">Placed on January 15, 2025</p>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <div className="text-3xl font-bold">₹1,299</div>
                <div className="text-blue-100">2 items</div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Current Status Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-900">Currently Shipped</h3>
                  <p className="text-blue-700">Your order is on its way and will be delivered soon!</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-6">Order Timeline</h3>
              
              {orderStatuses.map((status, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    status.completed 
                      ? 'bg-green-100 text-green-600' 
                      : index === 4 
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-400'
                  }`}>
                    <status.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-semibold ${
                        status.completed 
                          ? 'text-green-600' 
                          : index === 4 
                            ? 'text-blue-600'
                            : 'text-gray-400'
                      }`}>
                        {status.status}
                      </h4>
                      <span className={`text-sm ${
                        status.completed 
                          ? 'text-green-600' 
                          : index === 4 
                            ? 'text-blue-600'
                            : 'text-gray-400'
                      }`}>
                        {status.date}
                      </span>
                    </div>
                    <p className={`text-sm ${
                      status.completed 
                        ? 'text-gray-600' 
                        : index === 4 
                          ? 'text-gray-600'
                          : 'text-gray-400'
                    }`}>
                      {status.description}
                    </p>
                    
                    {index < orderStatuses.length - 1 && (
                      <div className={`w-px h-8 ml-5 mt-4 ${
                        status.completed ? 'bg-green-200' : 'bg-gray-200'
                      }`}></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Items */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-4">Order Items</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Classic White Tee"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Classic White Tee</h4>
                    <p className="text-gray-600">Size: M | Color: White</p>
                    <p className="text-[#1c5681] font-bold">₹799</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Qty: 1</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src="https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Navy Polo"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">Navy Polo</h4>
                    <p className="text-gray-600">Size: L | Color: Navy</p>
                    <p className="text-[#1c5681] font-bold">₹1,299</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">Qty: 1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-4">Delivery Address</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Arjun Sharma</p>
                    <p className="text-gray-600">
                      123 Fashion Street, Bandra West<br />
                      Mumbai, Maharashtra 400050<br />
                      Phone: +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-[#f5f0e6] p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-[#1c5681] mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Having issues with your order? Our customer support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-[#1c5681] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#164a6b] transition-colors">
                    Contact Support
                  </button>
                  <button className="border border-[#1c5681] text-[#1c5681] px-6 py-2 rounded-lg font-medium hover:bg-[#1c5681] hover:text-white transition-colors">
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;