
import React from 'react';
import { Navbar } from './components/Navbar';
import Home from './components/HomePage/Home';
import MultiCamera from './components/Solutions/Multicamera/MultiCamera';
import GolfSwing from './components/Solutions/GolfSwing/GolfSwing';
import EthernetCamera from './components/Solutions/ethernetcomp/ethernetpage';
import Blogs from './components/resources/blogs/blogs';
import CaseStudies from './components/resources/casestudies/caseStudies';
import Videos from './components/resources/videos/videos';
import NotFound from './components/NotFound';
import { Footer } from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter basename="/sports-boardcasting-analytics"> 

      <ScrollToTop />
      <div className='fixed-container'>
        <div className="d-flex flex-column min-vh-100 overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/multicamera" element={<MultiCamera />} />
            <Route path="/golfswing" element={<GolfSwing />} />
            <Route path="/ethernet-camera" element={<EthernetCamera />} />
            <Route path="/resources/blogs" element={<Blogs />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/videos" element={<Videos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
