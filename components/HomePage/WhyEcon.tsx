import React from "react";
import "./WhyEconTimeline.css";
import cameraIcon from '../../public/images/why-econ/camera.svg';
import multiCameraIcon from '../../public/images/why-econ/multi-camera.svg';
import broadcastGradeIcon from '../../public/images/why-econ/broadcast-grade.svg';
import opticsIcon from '../../public/images/why-econ/optics.svg';
import enclosureDesignIcon from '../../public/images/why-econ/enclosure-design.svg';
import calibrationIcon from '../../public/images/why-econ/calibration.svg';
import platformIcon from '../../public/images/why-econ/platform.svg';
import factoryIcon from '../../public/images/why-econ/factory.svg';

interface Feature {
  title: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Proven, field-tested camera modules and Ethernet cameras",
    icon: cameraIcon,
  },
  {
    title:
      "Accurate multi-camera synchronization with 180 panoramic stitching support",
    icon: multiCameraIcon,
  },
  {
    title:
      "Broadcast-grade image quality with ISP tuning flexibility.",
    icon: broadcastGradeIcon,
  },
  {
    title:
      "Optics customization to meet sport-specific imaging requirements.",
    icon: opticsIcon,
  },
  {
    title:
      "Mechanical and enclosure design expertise for diverse deployment needs",
    icon: enclosureDesignIcon,
  },
  {
    title:
      "In-house active alignment and precision calibration capabilities",
    icon: calibrationIcon,
  },
  {
    title:
      "Platform and carrier board development across NVIDIA, Qualcomm, and Ambarella",
    icon: platformIcon,
  },
  {
    title:
      "Strong manufacturing ecosystem supporting reliable volume production",
    icon: factoryIcon,
  },
];

export const WhyEcon: React.FC = () => {
  return (
    <section className="whyEconTimeline-section">
      <div className="whyEconTimeline-container">
        <h2 className="whyEconTimeline-heading">
          Why e-con Systems for Sports Imaging Systems
        </h2>

        <div className="whyEconTimeline-wrapper">
          <div className="whyEconTimeline-line" />

                {features.map((feature, index) => (
          <div
            key={index}
            className={`whyEconTimeline-row ${
              index % 2 === 0
                ? "whyEconTimeline-left"
                : "whyEconTimeline-right"
            }`}
          >
            <div className="whyEconTimeline-content">
              <div className="whyEconTimeline-card">
                <div className="whyEconTimeline-icon">
                  <img src={feature.icon} alt="icon" />
                </div>
                <p>{feature.title}</p>
              </div>
            </div>

            {/* NEW horizontal connector */}
            <div className="whyEconTimeline-connector" />

            {/* Center dot */}
            <div className="whyEconTimeline-dot" />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};