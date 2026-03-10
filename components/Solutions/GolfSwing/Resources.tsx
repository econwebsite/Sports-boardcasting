import React from 'react';

const Resources: React.FC = () => {
  return (
    <>
      <div className="col-lg-12 d-block text-center mt-5">
        <h2 className="main-title">Related Articles and Blogs</h2>
      </div>
      <div className="col-lg-12 d-lg-flex flex-column justify-content-center align-items-center text-justify main-section">
        <div className="col-xl-11 col-lg-11 d-flex flex-column flex-lg-row justify-content-center align-items-center text-justify my-4 flex-wrap">
          {/* Card 1 */}
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center mb-2">
            <div className="card col-11 p-1 text-center animate-slide">
              <a
                href="https://www.e-consystems.com/blog/camera/applications/choosing-the-right-camera-setup-for-golf-swing-analysis/"
                className="category-product-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.e-consystems.com/images/golf-simulator/choosing-the-right-camera-setup-for-golf.jpg"
                  title="Choosing the Right Camera Setup for Golf Swing Analysis"
                  alt="blog"
                />
              </a>
              <div className="card-body p-2">
                <a
                  href="https://www.e-consystems.com/blog/camera/applications/choosing-the-right-camera-setup-for-golf-swing-analysis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hubpage-casestudy-title">
                    Choosing the Right Camera Setup for Golf Swing Analysis
                  </div>
                </a>
                <a
                  href="https://www.e-consystems.com/blog/camera/applications/choosing-the-right-camera-setup-for-golf-swing-analysis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hubpage-casestudy-sub-title">
                    Golf simulator system providers and developers face many challenges...
                  </div>
                </a>
                <a
                  href="https://www.e-consystems.com/blog/camera/applications/choosing-the-right-camera-setup-for-golf-swing-analysis/"
                  className="casestudyhub-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="casestudyhub-link">Know more</div>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center mb-2">
            <div className="card col-11 p-1 text-center animate-slide">
              <a
                href="https://www.e-consystems.com/blog/camera/applications/what-is-sports-analytics-how-is-embedded-vision-reimagining-it/"
                className="category-product-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.e-consystems.com/images/golf-simulator/what-is-sports-analytics-how-is-embedded.jpg"
                  title="What is sports analytics? How is embedded vision reimagining it?"
                  alt="blog"
                />
              </a>
              <div className="card-body p-2">
                <a
                  href="https://www.e-consystems.com/blog/camera/applications/what-is-sports-analytics-how-is-embedded-vision-reimagining-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hubpage-casestudy-title">
                    What is sports analytics? How is embedded vision reimagining it?
                  </div>
                </a>
                <a
                  href="https://www.e-consystems.com/blog/camera/applications/what-is-sports-analytics-how-is-embedded-vision-reimagining-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hubpage-casestudy-sub-title">
                    Embedded vision and sports analytics go hand-in-hand as the collected...
                  </div>
                </a>
                <a
                  href="https://www.e-consystems.com/blog/camera/applications/what-is-sports-analytics-how-is-embedded-vision-reimagining-it/"
                  className="casestudyhub-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="casestudyhub-link">Know More</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;