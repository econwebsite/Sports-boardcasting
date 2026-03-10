import React, { useState, useEffect } from 'react';
import { CategoryProps } from './types';

interface CategorySectionProps extends CategoryProps {
  imageAlign: 'left' | 'right';
}

const CategorySection: React.FC<CategorySectionProps> = ({
  id,
  title,
  description,
  features,
  images,
  productImages,
  productLinks,
  datasheetLink,
  buyNowLink,
  contactLink,
  showContactOnly = false,
  imageAlign,
}) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  // Auto-slide for main slider
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Determine flex direction based on imageAlign
  const flexDirectionClass = imageAlign === 'right'
    ? 'flex-column flex-sm-row-reverse'
    : 'flex-column flex-sm-row';

  return (
    <div
      id={id}
      className={`col-xl-11 col-lg-11 col-md-12 col-sm-12 text-justify d-flex ${flexDirectionClass} markets-sections flex-wrap golf-section mx-auto`}
    >
      {/* Image side */}
      <div className="col-lg-5 col-md-12 col-sm-12 text-justify d-flex justify-content-center align-items-center golfimg-section">
        <div className="col-11 d-flex justify-content-center align-items-center content-section">
          <div className="img-box text-center w-100">
            <div className="slider">
              <div
                className="slider-images"
                style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
              >
                {images.map((src, idx) => (
                  <img key={idx} src={src} alt={`slide ${idx + 1}`} className="img-fluid" />
                ))}
              </div>
              {images.length > 1 && (
                <>
                  <button
                    className="slider-arrow left-arrow"
                    disabled={sliderIndex === 0}
                    onClick={() => setSliderIndex(0)}
                  >
                    &#10094;
                  </button>
                  <button
                    className="slider-arrow right-arrow"
                    disabled={sliderIndex === images.length - 1}
                    onClick={() => setSliderIndex(images.length - 1)}
                  >
                    &#10095;
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div className="col-lg-7 col-md-12 col-sm-12 text-left golfcontent-section">
        <h5
          className="col-12 mb-2 ps-3 mt-3 head-deskview"
          style={{ color: '#0073aa', fontWeight: 'bold', fontSize: '25px' }}
        >
          <a name={id}>{title}</a>
        </h5>
        <p
          className="text-justify p-3 animate-slide"
          style={{ fontSize: '14px', marginBottom: 0 }}
        >
          {description}
        </p>

        <div className="col-sm-12 col-lg-12 p-1 d-lg-flex justify-content-center align-items-center server_section">
          {/* Left: Product image carousel */}
          <div className="col-sm-12 col-lg-5 p-1 d-flex justify-content-center align-items-center">
            <div className="img-box animate-slide-left w-100">
              <div className="product-carousel">
                <div className="product-carousel-inner">
                  <img
                    src={productImages[productIndex]}
                    alt={`product ${productIndex + 1}`}
                    className="product-carousel-image"
                  />
                </div>
                {productImages.length > 1 && (
                  <div className="product-carousel-indicators">
                    {productImages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`indicator ${idx === productIndex ? 'active' : ''}`}
                        onClick={() => setProductIndex(idx)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Features and buttons */}
          <div className="col-sm-12 col-lg-7 p-1 d-flex justify-content-center align-items-center">
            <div className="detail-box animate-slide-left w-100">
              <p>Features:</p>
              <ul className="SolutionsList">
                {features.map((feat, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: feat }} />
                ))}
              </ul>

              {!showContactOnly ? (
                <div className="row d-flex justify-content-center align-items-center">
                  {datasheetLink && (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-1">
                      <div className="downloads-section text-center">
                        <p className="subtitle mediumSize">Download datasheet</p>
                        <div className="document-btn">
                          <a href={datasheetLink} id="Download-datasheet">
                            <img src="https://www.e-consystems.com/images/download-btn.png" alt="Download Document" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {buyNowLink && (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-1">
                      <div className="purchase-section text-center">
                        <p className="subtitle mediumSize" style={{ fontWeight: 'bold' }}>
                          Samples
                        </p>
                        <div className="price-btn">
                          <a href={buyNowLink} id="Buynow-btn">
                            <img src="https://www.e-consystems.com/images/buynow-btn.png" alt="Buy Now" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {contactLink && (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-1">
                      <div className="purchase-section text-center">
                        <p className="subtitle mediumSize" style={{ fontWeight: 'bold' }}>
                          {showContactOnly ? 'To know more' : 'For different lens options'}
                        </p>
                        <div className="price-btn">
                          <a href={contactLink} className="contactus-product" style={{ cursor: 'pointer' }}>
                            <img src="https://www.e-consystems.com/images/contactus-btn.png" alt="Contact Us" className="img-fluid" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 p-1">
                    <div className="purchase-section text-center">
                      <p className="subtitle mediumSize" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                        To know more
                      </p>
                      <div className="price-btn">
                        <a href={contactLink} className="contactus-product" style={{ cursor: 'pointer' }}>
                          <img src="https://www.e-consystems.com/images/contactus-btn.png" alt="Contact Us" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;