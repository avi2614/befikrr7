import React, { useState, useRef } from 'react';
import { Camera, Upload, RefreshCw, Download, ArrowLeft, ArrowRight } from 'lucide-react';

const TryOn = () => {
  const [mode, setMode] = useState<'camera' | 'upload' | null>(null);
  const [selectedClothing, setSelectedClothing] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const clothingItems = [
    {
      id: 1,
      name: 'Classic White Tee',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: '₹799'
    },
    {
      id: 2,
      name: 'Navy Polo',
      image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: '₹1,299'
    },
    {
      id: 3,
      name: 'Street Hoodie',
      image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: '₹1,799'
    },
    {
      id: 4,
      name: 'Crop Top',
      image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=300',
      price: '₹899'
    }
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setMode('camera');
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMode('upload');
      // Handle file upload logic here
    }
  };

  const startBodyScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
    }, 3000);
  };

  const nextClothing = () => {
    setSelectedClothing((prev) => (prev + 1) % clothingItems.length);
  };

  const prevClothing = () => {
    setSelectedClothing((prev) => (prev - 1 + clothingItems.length) % clothingItems.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0e6] to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1c5681] mb-4">Virtual Try-On</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of shopping. See how clothes look on you using our advanced AR technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Camera/Upload Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {!mode ? (
                <div className="p-12 text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 bg-[#1c5681] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1c5681] mb-2">Choose Your Method</h3>
                    <p className="text-gray-600">Select how you'd like to try on clothes</p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={startCamera}
                      className="w-full bg-[#1c5681] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#164a6b] transition-colors flex items-center justify-center space-x-3"
                    >
                      <Camera className="h-5 w-5" />
                      <span>Use Camera</span>
                    </button>
                    
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-[#1c5681] text-[#1c5681] py-4 px-6 rounded-xl font-semibold hover:bg-[#1c5681] hover:text-white transition-colors flex items-center justify-center space-x-3"
                    >
                      <Upload className="h-5 w-5" />
                      <span>Upload Photo</span>
                    </button>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="relative">
                  {mode === 'camera' && (
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      className="w-full h-[600px] object-cover"
                    />
                  )}
                  
                  {mode === 'upload' && (
                    <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Your uploaded image will appear here</p>
                      </div>
                    </div>
                  )}

                  {/* AR Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <span className="text-sm font-medium text-[#1c5681]">
                        {clothingItems[selectedClothing].name}
                      </span>
                    </div>
                    
                    {isScanning && (
                      <div className="absolute inset-0 bg-[#1c5681]/20 flex items-center justify-center">
                        <div className="bg-white rounded-2xl p-8 text-center">
                          <RefreshCw className="h-12 w-12 text-[#1c5681] animate-spin mx-auto mb-4" />
                          <p className="text-[#1c5681] font-semibold">Scanning your body...</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Controls */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                    <button
                      onClick={prevClothing}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                    >
                      <ArrowLeft className="h-5 w-5 text-[#1c5681]" />
                    </button>
                    
                    <button
                      onClick={startBodyScan}
                      disabled={isScanning}
                      className="bg-[#1c5681] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#164a6b] transition-colors disabled:opacity-50"
                    >
                      {isScanning ? 'Scanning...' : 'Fit Check'}
                    </button>
                    
                    <button
                      onClick={nextClothing}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                    >
                      <ArrowRight className="h-5 w-5 text-[#1c5681]" />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors">
                      <Download className="h-5 w-5 text-[#1c5681]" />
                    </button>
                    <button 
                      onClick={() => setMode(null)}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
                    >
                      <RefreshCw className="h-5 w-5 text-[#1c5681]" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Clothing Selection */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-4">Try These Styles</h3>
              <div className="space-y-4">
                {clothingItems.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedClothing(index)}
                    className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all ${
                      selectedClothing === index
                        ? 'bg-[#f5f0e6] border-2 border-[#1c5681]'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-[#1c5681] font-bold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurement Tool */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-4">Smart Sizing</h3>
              <p className="text-gray-600 mb-4">
                Get accurate measurements using AI body scanning for the perfect fit.
              </p>
              <button
                onClick={startBodyScan}
                disabled={!mode || isScanning}
                className="w-full bg-[#1c5681] text-white py-3 rounded-xl font-semibold hover:bg-[#164a6b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? 'Scanning...' : 'Start Body Scan'}
              </button>
            </div>

            {/* AI Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#1c5681] mb-4">AI Stylist Says</h3>
              <div className="space-y-3">
                <div className="bg-[#f5f0e6] p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    "This style suits your body type perfectly! The fit looks great on you."
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    "Consider size M for the most comfortable fit based on your measurements."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryOn;