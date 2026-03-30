import React from 'react';

const caseStudies = [
  {
    title: 'Automated Sports Broadcasting & Analytics',
    description: 'e-con Systems® developed a 180° camera solution using three MIPI cameras integrated with a NVIDIA® Jetson™ platform.',
    image: 'https://www.e-consystems.com/images/markets/case-study/sports-systems/sports-analytics-benefits-en.jpg',
    link: 'https://www.e-consystems.com/resources/case-studies/oem-180-degree-camera-solution.asp'
  },
  {
    title: 'Reinventing real-time sports broadcasting experiences',
    description: 'The client wanted to increase their viewer base by live-broadcasting soccer matches (or on-demand or recorded or highlight reels) without the need for a camera operator.',
    image: 'https://www.e-consystems.com/images/markets/case-study/sports-and-education/Sports_Featured-image.jpg',
    link: 'https://www.e-consystems.com/resources/case-studies/sports-broadcasting-case-study.asp'
  }
];

const blogs = [
  {
    title: 'How High-Resolution Cameras Help Maximize Soccer Broadcasting Efficiency',
    description: 'The easy integration of high-resolution cameras is changing the game for soccer clubs of all sizes.',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2023/12/How-High-Resolution-Cameras-Help-Maximize-Soccer-Broadcasting-Efficiency.png',
    link: 'https://www.e-consystems.com/blog/camera/applications/how-high-resolution-cameras-help-maximize-soccer-broadcasting-efficiency/'
  },
  {
    title: 'How multi-camera systems are used in sports broadcasting',
    description: 'Multi-camera systems have changed sports broadcasting as they help capture various angles simultaneously, transition between camera feeds, provide replays, etc.',
    image: 'https://www.e-consystems.com/blog/camera/wp-content/uploads/2023/07/How-multi-camera-systems-are-used-in-sports-broadcasting-960x640.jpg',
    link: 'https://www.e-consystems.com/blog/camera/applications/how-multi-camera-systems-are-used-in-sports-broadcasting/'
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
                      {/* <p className="text-muted small">{study.description}</p> */}
                      <a href={study.link} className="text-primary fw-bold">Read More →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="card border-0 shadow-sm" style={{ height: '250px' }}>
                <img src={caseStudies[0].image} className="card-img-top" alt={caseStudies[0].title} style={{ height: '250px', objectFit: 'cover', borderRadius: '0px' }} />
                <div className="card-body" >
                  <h5 className="card-title fw-bold" style={{ color: '#000' }}>{caseStudies[0].title}</h5>
                  {/* <p className="card-text text-muted">{caseStudies[0].description}</p> */}
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
                      {/* <p className="text-muted small">{blog.description}</p> */}
                      <a href={blog.link} className="text-primary fw-bold">Read More →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="card border-0 shadow-sm" style={{ height: '250px' }}>
                <img src={blogs[0].image} className="card-img-top" alt={blogs[0].title} style={{ height: '250px', objectFit: 'cover', borderRadius: '0px'  }} />
                <div className="card-body" style={{ height: '250px' }}>
                  <h5 className="card-title fw-bold" style={{ color: '#000' }}>{blogs[0].title}</h5>
                  {/* <p className="card-text text-muted">{blogs[0].description}</p> */}
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