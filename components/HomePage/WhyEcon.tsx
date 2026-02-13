
import React from 'react';
import { Camera, Layers, Target, Cpu, Settings, Factory } from 'lucide-react';

interface Feature {
  title: string | React.ReactNode;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Proven, field-tested camera modules and Ethernet cameras",
    icon: <Camera className="text-brand" size={32} />
  },
  {
    title: "Accurate multi-camera synchronization with 180° panoramic stitching support",
    icon: <Layers className="text-brand" size={32} />
  },
  {
    title: "Broadcast-grade image quality with ISP tuning flexibility.",
    icon: <Target className="text-brand" size={32} />
  },
  {
    title: "Optics customization to meet sport-specific imaging requirements.",
    icon: <Settings className="text-brand" size={32} />
  },
  {
    title: "Mechanical and enclosure design expertise for diverse deployment needs",
    icon: <Cpu className="text-brand" size={32} />
  },
  {
    title: "In-house active alignment and precision calibration capabilities",
    icon: <Factory className="text-brand" size={32} />
  },
   {
    title: "Platform and carrier board development across NVIDIA, Qualcomm, and Ambarella",
    icon: <Factory className="text-brand" size={32} />
  },
  {
    title: "Strong manufacturing ecosystem supporting reliable volume production",
    icon: <Factory className="text-brand" size={32} />
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
