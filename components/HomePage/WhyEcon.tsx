import React from "react";
import "./WhyEconTimeline.css";

interface Feature {
  title: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Proven, field-tested camera modules and Ethernet cameras",
    icon: "/images/why-econ/camera.svg",
  },
  {
    title:
      "Accurate multi-camera synchronization with 180° panoramic stitching support",
    icon: "/images/why-econ/multi-camera.svg",
  },
  {
    title:
      "Broadcast-grade image quality with ISP tuning flexibility.",
    icon: "/images/why-econ/broadcast-grade.svg",
  },
  {
    title:
      "Optics customization to meet sport-specific imaging requirements.",
    icon: "/images/why-econ/optics.svg",
  },
  {
    title:
      "Mechanical and enclosure design expertise for diverse deployment needs",
    icon: "/images/why-econ/enclosure-design.svg",
  },
  {
    title:
      "In-house active alignment and precision calibration capabilities",
    icon: "/images/why-econ/calibration.svg",
  },
  {
    title:
      "Platform and carrier board development across NVIDIA, Qualcomm, and Ambarella",
    icon: "/images/why-econ/platform.svg",
  },
  {
    title:
      "Strong manufacturing ecosystem supporting reliable volume production",
    icon: "/images/why-econ/factory.svg",
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