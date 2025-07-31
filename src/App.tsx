import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import NewsletterPopup from './components/Newsletter/NewsletterPopup';
import Home from './pages/Home';
import Shop from './pages/Shop';
import TryOn from './pages/TryOn';
import Design from './pages/Design';
import Account from './pages/Account';
import Track from './pages/Track';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/try-on" element={<TryOn />} />
            <Route path="/design" element={<Design />} />
            <Route path="/account" element={<Account />} />
            <Route path="/track" element={<Track />} />
          </Routes>
        </main>
        <Footer />
        <NewsletterPopup />
      </div>
    </Router>
  );
}

export default App;