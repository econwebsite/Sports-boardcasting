import React from "react";
import "./designedSports.css";

const DesignedSports: React.FC = () => {
  const sections = [
    {
      title: "Get Optics Designed for Sports Coverage",
      bullets: [
        "Off-the-Shelf (OTS) and Custom High-Quality Lenses from Trusted Partners",
        "Application-Specific FOV Engineering",
        "High MTF and Centre to Corner Sharpness Validation",
      ],
      image: "../../images/multicamera/sports-optics.jpg",
      reverse: false,
    },
    {
      title: "In-House Production-Level Optical Precision",
      bullets: [
        {
          title: "Active Alignment:",
          desc: "Minimizes camera-to-camera optical variation for consistent multi-camera output.",
        },
        {
          title: "Focusing & Gluing Process:",
          desc: "Locks the optimized focus position to ensure long-term optical stability.",
        },
        {
          title: "Camera Calibration (Intrinsic & Extrinsic):",
          desc: "Improves stitching accuracy and spatial alignment between cameras.",
        },
      ],
      image: "../../images/multicamera/sports-alignment.jpg",
      reverse: true,
    },
    {
      title: "ISP & Platform Expertise",
      bullets: [
        "Processor-Aligned ISP Tuning",
        "e-con's Proprietary onboard ISP for High-Dynamic Camera Modules",
        "Carrier Board Design and Manufacturing",
      ],
      image: "../../images/multicamera/sports-isp.jpg",
      reverse: false,
      logos: true,
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
      image: "../../images/multicamera/sports-mechanical.jpg",
      reverse: true,
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
              {item.bullets.map((bullet: any, i) => (
                <li key={i}>
                  {typeof bullet === "string" ? (
                    bullet
                  ) : (
                    <>
                      <strong>{bullet.title}</strong>
                      <p>{bullet.desc}</p>
                    </>
                  )}
                </li>
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