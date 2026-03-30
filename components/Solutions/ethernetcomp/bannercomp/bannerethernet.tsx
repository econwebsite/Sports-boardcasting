import './bannerethernet.css';

const BannerEthernet = () => {
  return (
    <section className="banner">
      {/* <div className="banner__badge">OEM Ready PoE Camera Solutions</div> */}
      <h1 className="banner__title">
        Ethernet Cameras for<br />
        <span>Sports Streaming & Analytics</span>
      </h1>
      <p className="banner__subtitle">
        OEM Ready PoE Camera Solutions for Streaming, Automation &amp; Analytics
      </p>
      <a href="#contact" className="banner__cta">
        Talk to Us
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
};

export default BannerEthernet;