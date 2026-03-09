import React from "react";
import "./multicameraSolution.css";

const MulticameraSolution: React.FC = () => {
  const sensors = [
    {
      name: "Sony IMX678",
      image:
        "../../images/multicamera/imx678-sensor-camera.jpg",
      title: "4K STARVIS™ 2 HDR Sensor",
      text1:
        "4K resolution optimized for streaming and sports analytics applications.",
      text2:
        "STARVIS™ 2 sensor with wide dynamic range for high sensitivity and low-noise imaging.",
    },
    {
      name: "Sony IMX676",
      image:
        "../../images/multicamera/imx676-sensor-camera.jpg",
      title: "12MP Square STARVIS™ 2 HDR Sensor",
      text1:
        "Square sensor format enabling higher scene utilization compared to conventional rectangular sensors.",
      text2:
        "STARVIS™ 2 technology enabling enhanced low-light sensitivity and reduced noise imaging",
    },
    {
      name: "onsemi AR2020",
      image:
        "../../images/multicamera/ar2020-sensor-camera.jpg",
      title: "20MP High-Resolution Sensor",
      text1:
        "20MP high resolution for broad field coverage and finer detail capture",
      text2:
        "1/1.8” optical format enabling improved light collection with balanced pixel size",
    },
    {
      name: "IMX06A/IMX06C",
      image:
        "../../images/multicamera/imx06-sensor-camera.jpg",
      title: "50MP High Resolution Sensor",
      text1:
        "50MP ultra-high resolution enabling large-area sports coverage with fewer cameras.",
      text2:
        "Quad binning support enabling flexible high-detail capture and improved low-light performance",
    },
  ];

  return (
    <section className="multi-wrapper">
      <h2 className="multi-heading">
        Leverage Multi-Camera Solutions Powered <br />
        By World-Class Sensors
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

              <h4>{sensor.title}</h4>

              <p>{sensor.text1}</p>

              <p>{sensor.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MulticameraSolution;