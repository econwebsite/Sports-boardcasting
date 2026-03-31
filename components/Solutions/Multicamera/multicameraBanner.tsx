import React from "react";
import "./multicameraBanner.css";
import Modelbutton from "../../ButtonComp/Modelbutton";
import multicameraBannerImg from '../../../public/images/multicamera/multicamera-banner.jpg';

const MulticameraBanner: React.FC = () => {
  return (
    <section
      className="multicamera-banner"
      style={{ backgroundImage: `url(${multicameraBannerImg})` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">

          <h1 className="banner-title">
            Multi-Camera Solutions for Sports Streaming
          </h1>

          <p className="banner-subtitle">
            Build your own integrated automated sports streaming systems
          </p>

          <Modelbutton
            className="banner-btn productIntraButtonEnd"
            text="Discuss Your Multi-Camera Vision System"
            backgroundColor="#fff"
            type="contact"
            textColor="#000"
            animationColor="#00aeef"
            hoverColor="#344ea1"
          />

        </div>
      </div>
    </section>
  );
};

export default MulticameraBanner;