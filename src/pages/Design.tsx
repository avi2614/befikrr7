import React, { useState } from 'react';
import { Palette, Type, Image, Download, RotateCcw, Save } from 'lucide-react';

const Design = () => {
  const [selectedColor, setSelectedColor] = useState('#f5f0e6');
  const [selectedSize, setSelectedSize] = useState('M');
  const [customText, setCustomText] = useState('बेfikrr');
  const [textColor, setTextColor] = useState('#1c5681');
  const [selectedGraphic, setSelectedGraphic] = useState<string | null>(null);

  const colors = [
    { name: 'Cream', value: '#f5f0e6' },
    { name: 'Navy', value: '#1c5681' },
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Grey', value: '#6b7280' },
    { name: 'Pink', value: '#f472b6' }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const graphics = [
    { id: 1, name: 'Minimal Logo', url: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 2, name: 'Street Art', url: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 3, name: 'Abstract', url: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 4, name: 'Typography', url: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const handleSaveDesign = () => {
    const design = {
      color: selectedColor,
      size: selectedSize,
      text: customText,
      textColor: textColor,
      graphic: selectedGraphic
    };
    console.log('Saving design:', design);
    // Save to local storage or send to backend
  };

  const handleDownloadMockup = () => {
    // Generate and download mockup
    console.log('Downloading mockup...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e6] to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1c5681] mb-4">Design Studio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create your unique style with our real-time design tool. Customize colors, add text, and see your creation come to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[#1c5681] mb-2">Live Preview</h3>
                <p className="text-gray-600">See your design in real-time</p>
              </div>

              {/* T-shirt Mockup */}
              <div className="relative bg-gray-50 rounded-2xl p-8 mb-6">
                <div 
                  className="w-full h-80 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: selectedColor }}
                >
                  {/* T-shirt shape */}
                  <div className="absolute inset-4 bg-gradient-to-b from-white/20 to-transparent rounded-lg"></div>
                  
                  {/* Custom text */}
                  {customText && (
                    <div 
                      className="text-center font-bold text-2xl z-10"
                      style={{ color: textColor }}
                    >
                      {customText}
                    </div>
                  )}
                  
                  {/* Graphic overlay */}
                  {selectedGraphic && (
                    <div className="absolute top-8 right-8 w-16 h-16 opacity-80">
                      <img 
                        src={selectedGraphic} 
                        alt="Graphic" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
                
                <div className="text-center mt-4">
                  <span className="inline-block bg-[#1c5681] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Size: {selectedSize}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSaveDesign}
                  className="flex-1 bg-[#1c5681] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#164a6b] transition-colors flex items-center justify-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Design</span>
                </button>
                <button
                  onClick={handleDownloadMockup}
                  className="flex-1 border-2 border-[#1c5681] text-[#1c5681] py-3 px-6 rounded-xl font-semibold hover:bg-[#1c5681] hover:text-white transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>

          {/* Design Controls */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Color Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="h-5 w-5 text-[#1c5681]" />
                <h3 className="text-lg font-semibold text-[#1c5681]">T-shirt Color</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`aspect-square rounded-lg border-4 transition-all ${
                      selectedColor === color.value
                        ? 'border-[#1c5681] scale-110'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-[#1c5681] mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-[#1c5681] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#f5f0e6] hover:text-[#1c5681]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Text Customization */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Type className="h-5 w-5 text-[#1c5681]" />
                <h3 className="text-lg font-semibold text-[#1c5681]">Custom Text</h3>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Enter your text..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-[#1c5681] focus:outline-none focus:ring-1 focus:ring-[#1c5681]"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-full h-12 border border-gray-200 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Graphics Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Image className="h-5 w-5 text-[#1c5681]" />
                <h3 className="text-lg font-semibold text-[#1c5681]">Add Graphics</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {graphics.map((graphic) => (
                  <button
                    key={graphic.id}
                    onClick={() => setSelectedGraphic(graphic.url)}
                    className={`aspect-square rounded-lg border-2 overflow-hidden transition-all ${
                      selectedGraphic === graphic.url
                        ? 'border-[#1c5681] scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={graphic.url}
                      alt={graphic.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              {selectedGraphic && (
                <button
                  onClick={() => setSelectedGraphic(null)}
                  className="w-full mt-3 text-red-600 hover:text-red-700 font-medium flex items-center justify-center space-x-1"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Remove Graphic</span>
                </button>
              )}
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-[#1c5681] to-[#2a6a92] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Your Custom Design</h3>
              <div className="flex justify-between items-center mb-4">
                <span>Base Price:</span>
                <span className="font-bold">₹899</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Customization:</span>
                <span className="font-bold">₹200</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold">₹1,099</span>
                </div>
              </div>
              <button className="w-full bg-white text-[#1c5681] py-3 mt-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;