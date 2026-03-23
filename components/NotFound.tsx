import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            The page you're looking for doesn't exist or has been moved.
            Let’s get you back on track.
          </p>

          <div className="not-found-links">
            <Link to="/" className="not-found-btn primary-btn">
              Back to Home
            </Link>
            <Link to="/multicamera" className="not-found-btn secondary-btn">
              Multi-Camera Solutions
            </Link>
          </div>

          <div className="not-found-explore">
            <h3>Explore Our Services</h3>
            <div className="explore-links">
              <Link to="/golfswing">Golf Swing Analysis</Link>
              <Link to="/resources/blogs">Blogs</Link>
              <Link to="/resources/case-studies">Case Studies</Link>
              <Link to="/resources/videos">Videos</Link>
            </div>
          </div>
        </div>

        <div className="not-found-illustration">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e9e9ed" />
                <stop offset="100%" stopColor="#d2d2d7" />
              </linearGradient>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
              </filter>
            </defs>
            <circle cx="100" cy="100" r="80" fill="url(#circleGrad)" filter="url(#shadow)" />
            <text
              x="100"
              y="120"
              fontSize="60"
              fontWeight="300"
              textAnchor="middle"
              fill="#1d1d1f"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            >
              404
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;