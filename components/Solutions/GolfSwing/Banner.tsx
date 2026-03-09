import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="banner-main" style={{ width: '100%' }}>
      <div className="banner">
        <img
          src="https://www.e-consystems.com/images/golf-simulator/Golfing-banner.jpg"
          alt="Deliver Smart Precision in Every Golf Swing with High-Performance Cameras"
        />
      </div>
    </div>
  );
};

export default Banner;