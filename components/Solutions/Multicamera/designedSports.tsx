import React from "react";
import "./designedSports.css";

const DesignedSports: React.FC = () => {
  const sections = [
    {
      title: "Get Optics Designed for Sports Coverage",
      bullets: [
        "OTS – High-quality lenses from trusted partners",
        "Application-Specific FOV Engineering",
        "High MTF and Centre to Corner Sharpness Validation",
        "Multi-Camera Alignment and Mounting Design",
      ],
      image:
        "../../images/multicamera/sports-optics.jpg",
      reverse: false,
    },
    {
      title: "Form Factor & Mechanical Customization",
      bullets: [
        "Custom Camera Module Form Factor",
        "Cable and Connector Customization",
        "Multi-Camera Alignment and Stitching Mechanical Support",
        "Enclosure Design and Scalable Manufacturing",
        "Battery and Power Integration Support",
      ],
      image:
        "../../images/multicamera/sports-mechanical.jpg",
      reverse: true,
    },
    {
      title: "In-House Production-Level Optical Precision",
      bullets: [
        "Active Alignment",
        "Minimizes camera-to-camera optical variation for consistent multi-camera output.",
        "Focusing & Gluing Process",
        "Locks the optimized focus position to ensure long-term optical stability.",
        "Camera Calibration (Intrinsic & Extrinsic)",
        "Improves stitching accuracy and spatial alignment between cameras.",
      ],
      image:
        "../../images/multicamera/sports-alignment.jpg",
      reverse: false,
    },
    {
      title: "ISP & Platform Expertise",
      bullets: [
        "Processor-Aligned ISP Tuning",
        "e-con's Proprietary onboard ISP for High-Dynamic Camera Modules",
        "Carrier Board Design and Manufacturing",
      ],
      image:
        "../../images/multicamera/sports-isp.jpg",
      reverse: true,
      logos: true,
    },
  ];

  return (
    <section className="sports-wrapper">
      {sections.map((item, index) => (
        <div
          key={index}
          className={`sports-row ${item.reverse ? "reverse" : ""}`}
        >
          <div className="sports-text">
            <h3>{item.title}</h3>

            <ul>
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {item.logos && (
              <div className="platform-logos">
                <img
                  src="../../images/multicamera/nvidia-logo.jpg"
                  alt="Nvidia"
                />
                <img
                  src="../../images/multicamera/ambarella-logo.jpg"
                  alt="Ambarella"
                />
                <img
                  src="../../images/multicamera/qualcomm-logo.jpg"
                  alt="Qualcomm"
                />
              </div>
            )}
          </div>

          <div className="sports-image">
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default DesignedSports;