import React from 'react';

const caseStudies = [
  {
    title: 'Vision for Automated Sports Streaming',
    description: 'Explore how automated systems revolutionize sports broadcasting.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'AI in Sports Analytics',
    description: 'Case study on implementing AI for real-time sports analytics.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=200&auto=format&fit=crop',
    link: '#'
  }
];

const blogs = [
  {
    title: 'How to Choose Cameras for Sports Broadcasting',
    description: 'A guide to selecting the best cameras for high-quality sports streaming.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'The Future of Sports Technology',
    description: 'Insights into emerging technologies shaping the sports industry.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=200&auto=format&fit=crop',
    link: '#'
  }
];

const RelatedResources: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <h2 className="fs-3 fw-bold text-slate-800 mb-5 text-center">Related Resources</h2>

        {/* Case Studies Section */}
        <div className="mb-5">
          <h3 className="fs-4 fw-bold text-slate-700 mb-4">Case Studies</h3>
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <div className="d-flex flex-column gap-4">
                {caseStudies.slice(0, 2).map((study, idx) => (
                  <div key={idx} className="resource-item">
                    <div className="resource-thumb">
                      <img src={study.image} alt={study.title} />
                    </div>
                    <div>
                      <h4 className="resource-title">
                        {study.title}
                      </h4>
                      <p className="resource-category">
                        Case Study
                      </p>
                      <p className="text-muted small">{study.description}</p>
                      <a href={study.link} className="text-primary fw-bold">Read More →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="card border-0 shadow-sm h-100">
                <img src={caseStudies[0].image} className="card-img-top" alt={caseStudies[0].title} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{caseStudies[0].title}</h5>
                  <p className="card-text text-muted">{caseStudies[0].description}</p>
                  <a href={caseStudies[0].link} className="text-primary fw-bold">Know More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div>
          <h3 className="fs-4 fw-bold text-slate-700 mb-4">Blogs</h3>
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <div className="d-flex flex-column gap-4">
                {blogs.slice(0, 2).map((blog, idx) => (
                  <div key={idx} className="resource-item">
                    <div className="resource-thumb">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div>
                      <h4 className="resource-title">
                        {blog.title}
                      </h4>
                      <p className="resource-category">
                        Blog
                      </p>
                      <p className="text-muted small">{blog.description}</p>
                      <a href={blog.link} className="text-primary fw-bold">Read More →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="card border-0 shadow-sm h-100">
                <img src={blogs[0].image} className="card-img-top" alt={blogs[0].title} style={{ height: '250px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{blogs[0].title}</h5>
                  <p className="card-text text-muted">{blogs[0].description}</p>
                  <a href={blogs[0].link} className="text-primary fw-bold">Know More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedResources;