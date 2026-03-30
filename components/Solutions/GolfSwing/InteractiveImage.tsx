import React, { useState } from 'react';

interface InteractiveImageProps {
  onPointClick: (pointId: string) => void;
  blinkState: { point1: boolean; point2: boolean; point3: boolean };
}

const InteractiveImage: React.FC<InteractiveImageProps> = ({ onPointClick, blinkState }) => {
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <>
      <div className="image-container pregius-img">
        <img
          src="https://www.e-consystems.com/images/golf-simulator/golf-simulator-analysis-image-eng.jpg"
          alt="Interactive Image"
          id="interactiveImage"
        />

        {/* Point 1 - Launch Monitor */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onPointClick('point1'); }}
          style={{ position: 'absolute', top: '73.3%', left: '8.3%', textDecoration: 'none' }}
        >
          <div className="point left blink" id="point1">
            {blinkState.point1 && <div className="blink-circle" id="blink1"></div>}
          </div>
        </a>

        {/* Point 2 - Ceiling */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onPointClick('point2'); }}
          style={{ position: 'absolute', top: '6%', left: '39%', textDecoration: 'none' }}
        >
          <div className="point left" id="point2">
            {blinkState.point2 && <div className="blink-circle" id="blink2"></div>}
          </div>
        </a>

        {/* Point 3 - Swing Analysis */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onPointClick('point3'); }}
          style={{ position: 'absolute', top: '51%', left: '79%', textDecoration: 'none' }}
        >
          <div className="point" id="point3">
            {blinkState.point3 && <div className="blink-circle" id="blink3"></div>}
          </div>
        </a>
      </div>

      {/* Mobile Pixel Image (click to open overlay) */}
      <div id="pixelmob" className="pixel-mobile" onClick={() => setOverlayOpen(true)}>
        <img src="https://www.e-consystems.com/images/golf-simulator/golf-simulator-analysis-image-eng.jpg" alt="Interactive Mobile" />
      </div>

      {/* Overlay for mobile */}
      {overlayOpen && (
        <div id="overlay1" className="overlay" style={{ display: 'block' }}>
          <div className="overlay-content">
            <span className="close" onClick={() => setOverlayOpen(false)}>&times;</span>
            <img src="https://www.e-consystems.com/images/golf-simulator/golf-simulator-analysis-image-eng.jpg" alt="Interactive Image" id="largeImage1" />
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveImage;