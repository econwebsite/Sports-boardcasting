
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
        

        <div className="row g-5">
          
          {/* CTA Box */}
          <div className="col-12 col-lg-12">
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
