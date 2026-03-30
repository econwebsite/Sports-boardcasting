import React from "react";
import "./multicameraSolution.css";
import Modelbutton from "../../ButtonComp/Modelbutton";

const MulticameraSolution: React.FC = () => {
  const sensors = [
    {
      name: "Sony IMX678",
      image: "/images/multicamera/imx678-sensor-camera.jpg",
      title: "4K STARVIS™ 2 HDR Sensor",
      text1:
        "4K resolution optimized for sports streaming and analytics applications.",
      text2:
        "STARVIS™ 2 sensor with wide dynamic range enabling clear imaging across both indoor arenas and outdoor sports environments with varying lighting conditions.",
      knowMore: true,
      link: "https://www.e-consystems.com/camera-modules/4k-sony-starvis2-imx678-low-light-camera-module.asp",
    },
    {
      name: "Sony IMX676",
      image: "/images/multicamera/imx676-sensor-camera.jpg",
      title: "12MP Square STARVIS™ 2 HDR Sensor",
      text1:
        "Square sensor format enabling higher scene utilization compared to conventional rectangular sensors.",
      text2:
        "STARVIS™ 2 technology delivering high sensitivity and low-noise imaging across varied lighting conditions.",
      knowMore: true,
      link: "https://www.e-consystems.com/camera-modules/imx676-12mp-sony-starvis2-low-light-camera-module.asp",
    },
    {
      name: "onsemi AR2020",
      image: "/images/multicamera/ar2020-sensor-camera.jpg",
      title: "20MP High-Resolution Sensor",
      text1:
        "20MP high resolution for broad field coverage and finer detail capture",
      text2:
        "1/1.8” optical format enabling improved light collection with balanced pixel size",
      knowMore: true,
      link: "https://www.e-consystems.com/camera-modules/20mp-ar2020-high-resolution-camera-module.asp",
    },
    {
      name: "IMX06A/IMX06C",
      image: "/images/multicamera/imx06-sensor-camera.jpg",
      title: "50MP High Resolution Sensor",
      text1:
        "50MP ultra-high resolution enabling large-area sports coverage with fewer cameras.",
      text2:
        "Quad binning support enabling flexible high-detail capture and improved low-light performance",
      knowMore: true,
      link: "#",
      contact: true,
    },
  ];

  return (
    <section className="multi-wrapper">
      <h2 className="multi-heading">
        Leverage Multi-Camera Imaging Solutions Powered <br />
        by World-Class Sensors
      </h2>

      <div className="multi-grid">
        {sensors.map((sensor, index) => (
          <div className="sensor-card" key={index}>
            <div className="sensor-header">{sensor.name}</div>

            <div className="sensor-content">
              <img
                src={sensor.image}
                alt={sensor.name}
                loading="lazy"
                className="sensor-img"
              />
            <div className="sensor-content-inside">
              <h4>{sensor.title}</h4>

              <p>{sensor.text1}</p>
              <p>{sensor.text2}</p>
            </div>
              {/* CTA Buttons */}
              <div className="sensor-cta">
                {sensor.knowMore && (
                  <a href={sensor.link} target="_blank" rel="noopener noreferrer" className="knowmore-btn">Know More</a>
                )}

                {sensor.contact && (
                  <Modelbutton
                    className="contact-btn"
                    text="Contact Us"
                    backgroundColor="transparent"
                    type="contact"
                    textColor="#2c58a5"
                    animationColor="#2e874a"
                    hoverColor="#2e874a"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MulticameraSolution;