
import React from 'react';
import Modelbutton from '../ButtonComp/Modelbutton';
const Hero = () => {
  return (
    <div className="hero-section">
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url('/images/sports-boardcasting-banner-en.jpg')` }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="position-relative max-w-7xl mx-auto px-3 px-sm-3 px-lg-4 text-white w-100">
        <div className="max-w-3xl">
          <h1 className="hero-title">
            High-Performance Vision Solutions for Sports Streaming, Analysis & Training
          </h1>
          <p className="hero-subtitle max-w-xl">
            e-con Systems offers camera modules, including Ethernet cameras – perfect for automated sports systems with AI-driven workflows
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <Modelbutton
              className="productIntraButtonEnd"
              text="Explore Sports Solutions"
              docName="e-con-Densicam-technical-documents.zip"
              title="Sports Brochure"
              productName="ProductDocument"
              backgroundColor="#00aeef"
              animationColor="#69ba2f"
              hoverColor="#344ea1"
            />
            <Modelbutton
              className="productIntraButtonEnd"
              text="Contact Us"
              backgroundColor="#fff"
              type="contact"
              textColor="#000"
              animationColor="#00aeef"
              hoverColor="#344ea1"
            />
          </div>
        </div>
      </div>

      {/* Camera Rig Overlay */}
      {/* <div className="d-none d-xl-block hero-camera-overlay">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
          alt="Professional Camera"
          className="w-100"
        />
      </div> */}
    </div>
  );
};
export { Hero };