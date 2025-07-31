import React, { useState } from 'react';
import { Filter, Grid, List, Heart, ShoppingCart, Star, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'T-Shirts', 'Oversized', 'Polos', 'Hoodies', 'Crop Tops', 'Partywear'];
  
  const products = [
    {
      id: 1,
      name: 'Classic White Tee',
      price: 799,
      originalPrice: 999,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'T-Shirts',
      rating: 4.8,
      reviews: 124,
      colors: ['white', 'black', 'cream'],
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: true
    },
    {
      id: 2,
      name: 'Oversized Street Hoodie',
      price: 1799,
      originalPrice: 2199,
      image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Oversized',
      rating: 4.9,
      reviews: 89,
      colors: ['navy', 'black', 'grey'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      isNew: false
    },
    {
      id: 3,
      name: 'Premium Polo',
      price: 1299,
      originalPrice: 1599,
      image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Polos',
      rating: 4.7,
      reviews: 67,
      colors: ['white', 'navy', 'black'],
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: false
    },
    {
      id: 4,
      name: 'Crop Top Essential',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Crop Tops',
      rating: 4.6,
      reviews: 156,
      colors: ['cream', 'pink', 'white'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true
    },
    {
      id: 5,
      name: 'Party Blazer',
      price: 2999,
      originalPrice: 3999,
      image: 'https://images.pexels.com/photos/8532614/pexels-photo-8532614.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Partywear',
      rating: 4.9,
      reviews: 45,
      colors: ['navy', 'black', 'charcoal'],
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: false
    },
    {
      id: 6,
      name: 'Oversized Graphic Tee',
      price: 1099,
      originalPrice: 1399,
      image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Oversized',
      rating: 4.8,
      reviews: 203,
      colors: ['black', 'white', 'grey'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      isNew: true
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#1c5681] mb-2">Shop Collection</h1>
          <p className="text-gray-600">Discover styles that define your vibe</p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#1c5681] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-[#f5f0e6] hover:text-[#1c5681]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border border-gray-200 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#1c5681] text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#1c5681] text-white' : 'text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                    viewMode === 'list' ? 'h-48' : 'h-64'
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Link
                      to="/try-on"
                      className="bg-white text-[#1c5681] p-2 rounded-full hover:bg-[#f5f0e6] transition-colors"
                    >
                      <Camera className="h-4 w-4" />
                    </Link>
                    <button className="bg-white text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="bg-[#1c5681] text-white p-2 rounded-full hover:bg-[#164a6b] transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#1c5681] group-hover:text-[#164a6b] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-600">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border-2 border-gray-200 ${
                          color === 'white' ? 'bg-white' :
                          color === 'black' ? 'bg-black' :
                          color === 'navy' ? 'bg-[#1c5681]' :
                          color === 'cream' ? 'bg-[#f5f0e6]' :
                          color === 'grey' ? 'bg-gray-400' :
                          color === 'pink' ? 'bg-pink-300' :
                          'bg-gray-600'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sizes:</span>
                  <div className="flex gap-1">
                    {product.sizes.map((size, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-[#1c5681] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#164a6b] transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;