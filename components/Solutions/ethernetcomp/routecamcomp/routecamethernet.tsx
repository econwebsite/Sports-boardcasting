import './routecamethernet.css';

const RouteVisualSVG = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main body */}
    <rect x="20" y="35" width="50" height="40" rx="5" stroke="#5bb8ff" strokeWidth="2" />
    {/* Lens */}
    <circle cx="38" cy="55" r="12" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="38" cy="55" r="6" stroke="#5bb8ff" strokeWidth="1.5" />
    <circle cx="38" cy="55" r="2.5" fill="#5bb8ff" opacity="0.5" />
    {/* Connectors */}
    <rect x="70" y="46" width="14" height="18" rx="2" stroke="#5bb8ff" strokeWidth="1.5" />
    <line x1="84" y1="52" x2="92" y2="52" stroke="#5bb8ff" strokeWidth="1.5" />
    <line x1="84" y1="58" x2="92" y2="58" stroke="#5bb8ff" strokeWidth="1.5" />
    {/* Mount bottom */}
    <line x1="30" y1="75" x2="30" y2="85" stroke="#5bb8ff" strokeWidth="1.5" />
    <line x1="60" y1="75" x2="60" y2="85" stroke="#5bb8ff" strokeWidth="1.5" />
    <line x1="22" y1="85" x2="68" y2="85" stroke="#5bb8ff" strokeWidth="1.5" />
    {/* Indicator light */}
    <circle cx="62" cy="44" r="3" fill="#5bb8ff" opacity="0.6" />
    <circle cx="62" cy="44" r="6" stroke="#5bb8ff" strokeWidth="1" opacity="0.2" />
  </svg>
);

const features = [
  {
    icon: <><rect x="3" y="3" width="18" height="14" rx="2" strokeWidth="1.5" /><circle cx="8" cy="10" r="3" strokeWidth="1.5" /></>,
    text: 'Resolution: 2MP & 4K',
    detail: 'High-res imaging options',
  },
  {
    icon: <><circle cx="12" cy="12" r="9" strokeWidth="1.5" /><path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" /></>,
    text: 'Multi Camera Synchronization',
    detail: 'Precise time synchronization',
  },
  {
    icon: <><path d="M3 7h18M3 12h18M3 17h18" strokeWidth="1.5" strokeLinecap="round" /></>,
    text: 'Fixed Focus with Customizable lens Options',
    detail: 'Customizable lens options',
  },
  {
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="1.5" /><path d="M2 17l10 5 10-5" strokeWidth="1.5" /></>,
    text: 'IP67 rating for outdoor sports venues',
    detail: 'Fully weather sealed',
  },
];

const RouteCAMEthernet = () => {
  return (
    <section className="routecam" id="routecam">
      <div className="routecam__container">
        <div className="routecam__visual">
          <RouteVisualSVG />
        </div>
        <div className="routecam__right">
          {/* <p className="routecam__eyebrow">Compact Ethernet Cameras</p> */}
          <h2 className="routecam__title">
            <span>RouteCAM Series</span> for Reliable<br />Sports Action Imaging
          </h2>
          <p className="routecam__desc">
            Check out e-con System’s’ RouteCAM cameras series that comes with must-have sports imaging features
          </p>

          <div className="routecam__features">
            {features.map((f) => (
              <div className="routecam__feat" key={f.text}>
                <div className="routecam__feat-icon">
                  <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <div className="routecam__feat-text">{f.text}</div>
                  {/* <div className="routecam__feat-detail">{f.detail}</div> */}
                </div>
              </div>
            ))}
          </div>

          <a href="#routecam-models" className="routecam__cta">
            Explore RouteCAM Cameras
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RouteCAMEthernet;