import './ctafooterethernet.css';

const CTAFooterEthernet = () => {
  return (
    <section className="ctafooter" id="contact">
      <div className="ctafooter__inner">
       
        <h2 className="ctafooter__title">
          Maximize Your Sports System's<br />
          Performance with <span>Ethernet Cameras</span>
        </h2>
        {/* <p className="ctafooter__sub">
          Talk to our experts about the right PoE camera configuration for your
          sports installation, streaming pipeline, or analytics workflow.
        </p> */}
        <a href="mailto:sales@e-consystems.com" className="ctafooter__cta">
          Talk to Us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTAFooterEthernet;