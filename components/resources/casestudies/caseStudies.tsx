import React from 'react';
import './caseStudies.css';

// Sample case study data
const caseStudies = [
  {
    title: 'Vision for Automated Sports Streaming',
    description: 'Explore how automated systems revolutionized sports broadcasting for a major league.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop',
    industry: 'Broadcasting',
    link: '#',
    featured: true
  },
  {
    title: 'AI in Sports Analytics',
    description: 'Implementing real-time AI analytics for player performance and game strategy.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop',
    industry: 'Analytics',
    link: '#',
    featured: false
  },
  {
    title: 'Cloud-Based Replay Systems',
    description: 'How cloud infrastructure enabled instant replays and highlights for remote production.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop',
    industry: 'Cloud',
    link: '#',
    featured: false
  },
  {
    title: 'Fan Engagement via Mobile Apps',
    description: 'Case study on building a second-screen experience for live sports fans.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop',
    industry: 'Mobile',
    link: '#',
    featured: false
  }
];

const CaseStudies: React.FC = () => {
  // Separate featured study
  const featured = caseStudies.find(study => study.featured) || caseStudies[0];
  const others = caseStudies.filter(study => study !== featured);

  return (
    <section className="casestudies-section section-padding">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-slate-800">Case Studies</h1>
          <p className="lead text-muted">Real-world success stories powered by innovation</p>
        </div>

        {/* Featured Case Study */}
        <div className="featured-study mb-5">
          <div className="row g-0 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="featured-study__image-wrapper">
                <img src={featured.image} alt={featured.title} className="featured-study__image" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="featured-study__content">
                <span className="featured-study__badge">Featured Case Study</span>
                <h2 className="featured-study__title">{featured.title}</h2>
                <p className="featured-study__description">{featured.description}</p>
                <div className="featured-study__meta">
                  <span className="featured-study__industry">{featured.industry}</span>
                  <a href={featured.link} className="featured-study__link">View Case Study →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Case Studies Grid */}
        <h3 className="fs-2 fw-bold text-slate-700 mb-4">More Success Stories</h3>
        <div className="row g-4">
          {others.map((study, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="case-card h-100">
                <div className="case-card__image-wrapper">
                  <img src={study.image} alt={study.title} className="case-card__image" />
                </div>
                <div className="case-card__content">
                  <span className="case-card__industry">{study.industry}</span>
                  <h4 className="case-card__title">{study.title}</h4>
                  <p className="case-card__description">{study.description}</p>
                  <a href={study.link} className="case-card__link">Read Case Study →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;