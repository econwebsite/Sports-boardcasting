import React, { useEffect } from 'react';
import Banner from './Banner';
import BigImageWithCategories from './BigImageWithCategories';
import Resources from './Resources';
import './GolfSwing.css';

const GolfSwing: React.FC = () => {
  // Animation on scroll using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.animate-slide, .animate-slide-left').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="maincontainer market-patient-care">
      <div className="m_main">
        <Banner />
        <div className="container-wrapper">
          <BigImageWithCategories />
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default GolfSwing;