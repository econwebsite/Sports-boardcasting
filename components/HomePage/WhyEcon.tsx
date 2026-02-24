
import React from 'react';

interface Feature {
  title: string | React.ReactNode;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Proven, field-tested camera modules and Ethernet cameras",
    icon: "/images/why-econ/camera.svg" 
  },
  {
    title: "Accurate multi-camera synchronization with 180° panoramic stitching support",
    icon: "/images/why-econ/multi-camera.svg"
  },
  {
    title: "Broadcast-grade image quality with ISP tuning flexibility.",
    icon: "/images/why-econ/broadcast-grade.svg"
  },
  {
    title: "Optics customization to meet sport-specific imaging requirements.",
    icon: "/images/why-econ/optics.svg"
  },
  {
    title: "Mechanical and enclosure design expertise for diverse deployment needs",
    icon: "/images/why-econ/enclosure-design.svg"
  },
  {
    title: "In-house active alignment and precision calibration capabilities",
    icon: "/images/why-econ/calibration.svg"
  },
   {
    title: "Platform and carrier board development across NVIDIA, Qualcomm, and Ambarella",
    icon: "/images/why-econ/platform.svg"
  },
  {
    title: "Strong manufacturing ecosystem supporting reliable volume production",
    icon: "/images/why-econ/factory.svg"
  },
];

export const WhyEcon: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <h2 className="fs-3 fw-bold text-center text-slate-800 mb-5">
          Why e-con Systems for Sports Imaging Systems
        </h2>

        <div className="row g-3">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <img src={feature.icon} alt="feature icon" style={{ width: '40px', height: '40px' }} />
                </div>
                <h3 className="mb-0 fw-bold text-slate-700 leading-snug" style={{ fontSize: '1rem' }}>
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
