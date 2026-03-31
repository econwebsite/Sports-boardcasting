import React from "react";
import "./designedSports.css";
import sportsOpticsImg from '../../../public/images/multicamera/sports-optics.jpg';
import sportsAlignmentImg from '../../../public/images/multicamera/sports-alignment.jpg';
import sportsIspImg from '../../../public/images/multicamera/sports-isp.jpg';
import sportsMechanicalImg from '../../../public/images/multicamera/sports-mechanical.jpg';
import nvidiaLogo from '../../../public/images/multicamera/nvidia-logo.jpg';
import ambarellaLogo from '../../../public/images/multicamera/ambarella-logo.jpg';
import qualcommLogo from '../../../public/images/multicamera/qualcomm-logo.jpg';

const DesignedSports: React.FC = () => {
  const sections = [
    {
      title: "Get Optics Designed for Sports Coverage",
      bullets: [
        "Off-the-Shelf (OTS) and Custom High-Quality Lenses from Trusted Partners",
        "Application-Specific FOV Engineering",
        "High MTF and Centre to Corner Sharpness Validation",
      ],
      image: sportsOpticsImg,
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
      image: sportsAlignmentImg,
      reverse: true,
    },
    {
      title: "ISP & Platform Expertise",
      bullets: [
        "Processor-Aligned ISP Tuning",
        "e-con's Proprietary onboard ISP for Hardware Agnostic Camera Module",
        "Carrier Board Design and Manufacturing",
      ],
      image: sportsIspImg,
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
      image: sportsMechanicalImg,
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
                  src={nvidiaLogo}
                  alt="Nvidia"
                />
                <img
                  src={ambarellaLogo}
                  alt="Ambarella"
                />
                <img
                  src={qualcommLogo}
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