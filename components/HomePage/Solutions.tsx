
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SolutionCard } from '../../types';

const solutions: SolutionCard[] = [
  {
    title: 'Build Your Own Multi-Camera Sports Imaging Solution',
    description: 'Explore camera modules and hardware platforms to configure a complete automated sports imaging solution.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Deployment-Ready Ethernet Cameras',
    description: 'PoE cameras for reliable, fixed sports capture installations.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Global Shutter Cameras for High-Speed Motion Capture',
    description: 'Our high-speed cameras empower golf swing capture systems and other simulators with reliable imaging.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export const Solutions: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <h2 className="fs-3 fw-bold text-center text-slate-800 mb-5">
          Core Vision Solutions for Sports Imaging Systems enabling Automated Streaming and Performance Analytics.
        </h2>

        <div className="row g-4">
          {solutions.map((item, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="solution-card h-100">
                <div className="card-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="card-body">
                  <h3 className="fs-5 fw-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4 small leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    className="solution-link"
                  >
                    <ArrowRight className="me-2" size={16} />
                    View solution
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
