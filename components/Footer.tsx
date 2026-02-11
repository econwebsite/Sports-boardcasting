
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-custom">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
          <div>
            <span className="fs-4 fw-bold tracking-tight text-white">
              e<span className="text-brand">.</span>con
            </span>
            <p className="mt-2 small max-w-xs">
              World leader in camera modules and embedded vision solutions.
            </p>
          </div>
          <div className="d-flex gap-4 small">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="small">
            © {new Date().getFullYear()} e-con Systems. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
