import React from 'react';
import { ArrowRight, Sparkles, Zap, Camera, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Oversized Crew Neck',
      price: '₹1,299',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Oversized'
    },
    {
      id: 2,
      name: 'Classic Polo',
      price: '₹999',
      image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Polos'
    },
    {
      id: 3,
      name: 'Street Hoodie',
      price: '₹1,799',
      image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hoodies'
    }
  ];

  const features = [
    {
      icon: Camera,
      title: 'Virtual Try-On',
      description: 'See how clothes look on you with AR technology'
    },
    {
      icon: Palette,
      title: 'Design Studio',
      description: 'Create custom designs with our 3D preview tool'
    },
    {
      icon: Sparkles,
      title: 'AI Stylist',
      description: 'Get personalized style recommendations'
    },
    {
      icon: Zap,
      title: 'Voice Shopping',
      description: 'Shop hands-free with voice commands'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f5f0e6] via-[#f5f0e6] to-[#e8dcc6] pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#1c5681] rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#1c5681] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#1c5681] rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-[#1c5681] leading-tight">
                  बेfikrr
                </h1>
                <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                  Wear Your Vibe
                </p>
                <p className="text-lg text-gray-600 max-w-md">
                  The future of fashion meets technology. Experience AI-powered styling, 
                  virtual try-ons, and custom designs that define your unique style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/try-on"
                  className="group bg-[#1c5681] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#164a6b] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Camera className="h-5 w-5" />
                  <span>Try Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/design"
                  className="group bg-white text-[#1c5681] border-2 border-[#1c5681] px-8 py-4 rounded-full font-semibold hover:bg-[#1c5681] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Palette className="h-5 w-5" />
                  <span>Customize</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fashion Model"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-[#1c5681] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Limited Edition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c5681] mb-4">
              Fashion Meets Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of shopping with our cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-[#f5f0e6] transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-[#1c5681] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#1c5681] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-[#f5f0e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c5681] mb-4">
              Trending Drops
            </h2>
            <p className="text-lg text-gray-600">
              Discover the latest styles that define your vibe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#1c5681] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Link
                      to="/try-on"
                      className="bg-white text-[#1c5681] px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Try On
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1c5681] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-gray-800">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="group bg-[#1c5681] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#164a6b] transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Shop All Styles</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1c5681] to-[#2a6a92] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Express Your Style?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands who've already discovered their perfect fit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/try-on"
              className="bg-white text-[#1c5681] px-8 py-4 rounded-full font-semibold hover:bg-[#f5f0e6] transition-colors"
            >
              Start Virtual Try-On
            </Link>
            <Link
              to="/design"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1c5681] transition-colors"
            >
              Create Custom Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;