
import React from 'react';
import { Navbar } from './components/Navbar';
import Home from './components/HomePage/Home';
import MultiCamera from './components/Solutions/Multicamera/MultiCamera';
import GolfSwing from './components/Solutions/GolfSwing/GolfSwing';
import { Footer } from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <div className='fixed-container'>
        <div className="d-flex flex-column min-vh-100 overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/multicamera" element={<MultiCamera />} />
            <Route path="/golfswing" element={<GolfSwing />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
