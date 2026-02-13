
import React from 'react';
import { Application } from '../../types';

const apps: Application[] = [
  {
    title: 'Automated Soccer Match Streaming',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Training and Performance Analysis',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Fixed Compact deployment for racquet sports',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Automated PTZ for Rugby and Baseball',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop'
  }
];

export const Applications: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <h2 className="fs-3 fw-bold text-center text-slate-800 mb-2">
          Sports Applications <span className="text-gray-400 fw-medium">We Support</span>
        </h2>
        <div className="accent-divider" />

        <div className="row g-3">
          {apps.map((app, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div className="app-card h-100">
                <div className="card-img-wrapper">
                  <img
                    src={app.image}
                    alt={app.title}
                  />
                </div>
                <div className="p-3">
                  <h3 className="fs-6 fw-bold text-slate-800 leading-tight">
                    {app.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
