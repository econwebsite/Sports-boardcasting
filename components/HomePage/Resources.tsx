
import React from 'react';
import { Resource } from '../../types';
import Modelbutton from '../ButtonComp/Modelbutton';
const resources: Resource[] = [
  {
    title: 'Vision for Automated Sports Streaming ',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?q=80&w=200&auto=format&fit=crop'
  },
  {
    title: 'How to Choose Cameras for Sports Broadcasting',
    category: 'Blogs',
    image: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?q=80&w=200&auto=format&fit=crop'
  }
];

export const Resources: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <h2 className="fs-3 fw-bold text-slate-800 mb-5">Sports Resources</h2>

        <div className="row g-5">
          {/* Resource List */}
          <div className="col-12 col-lg-5">
            <div className="d-flex flex-column gap-4">
              {resources.map((res, idx) => (
                <div key={idx} className="resource-item">
                  <div className="resource-thumb">
                    <img src={res.image} alt={res.title} />
                  </div>
                  <div>
                    <h4 className="resource-title">
                      {res.title}
                    </h4>
                    <p className="resource-category">
                      {res.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="col-12 col-lg-7">
            <div className="cta-box">
              <div
                className="cta-bg"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1510051646601-9860a1ae76bc?q=80&w=1200&auto=format&fit=crop')` }}
              >
                <div className="cta-overlay" />
              </div>
              <div className="position-relative max-w-md" style={{ zIndex: 10 }}>
                <h3 className="fs-3 fw-bold mb-3">Give Extraordinary Vision To Your Sports Imaging System</h3>
                <p className="text-blue-100 mb-4">
                  Need help selecting the right cameras for sports streaming, analytics, or training?

                </p>
                {/* <button className="cta-btn">
                  Talk to Us
                </button> */}
                <Modelbutton
                  className="cta-btn"
                  text="Contact Us"
                  backgroundColor="#fff"
                  type="contact"
                  textColor="#000"
                  animationColor="#00aeef"
                  hoverColor="#344ea1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
