
import React from 'react';
import { Camera, Layers, Target, Cpu, Settings, Factory } from 'lucide-react';

interface Feature {
  title: string | React.ReactNode;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Camera Modules & Ethernet Cameras",
    icon: <Camera className="text-brand" size={32} />
  },
  {
    title: "Multi-Camera Synchronization & Stitching Support",
    icon: <Layers className="text-brand" size={32} />
  },
  {
    title: <span>ISP tuning for <br /><span className="text-gray-400 fw-normal">fast motion and low lighting</span></span>,
    icon: <Target className="text-brand" size={32} />
  },
  {
    title: "Optics & Form-Factor Customization",
    icon: <Settings className="text-brand" size={32} />
  },
  {
    title: <span>Platform Support <span className="text-gray-400 fw-normal">(NVIDIA, Qualcomm, Ambarella)</span></span>,
    icon: <Cpu className="text-brand" size={32} />
  },
  {
    title: <span>Manufacturing, <br /><span className="text-gray-400 fw-normal">Calibration & Scale-Up Support</span></span>,
    icon: <Factory className="text-brand" size={32} />
  },
];

export const WhyEcon: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <h2 className="fs-3 fw-bold text-center text-slate-800 mb-5">
          Why e-con for Sports Imaging Systems
        </h2>

        <div className="row g-3">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  {feature.icon}
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
