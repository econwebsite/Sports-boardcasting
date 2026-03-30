import './ptzethernet.css';

const PTZVisualSVG = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Head/dome */}
    <circle cx="60" cy="48" r="20" stroke="#5bb8ff" strokeWidth="2" />
    {/* Lens aperture */}
    <circle cx="60" cy="48" r="10" stroke="#5bb8ff" strokeWidth="1.5" />
    <circle cx="60" cy="48" r="4" fill="#5bb8ff" opacity="0.4" />
    {/* Pan arc */}
    <path d="M28 48 Q44 28 60 48 Q76 68 92 48" stroke="#5bb8ff" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
    {/* Tilt arrow */}
    <path d="M48 28 L52 22 L56 28" stroke="#5bb8ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    {/* Neck/stem */}
    <line x1="60" y1="68" x2="60" y2="82" stroke="#5bb8ff" strokeWidth="2.5" />
    {/* Base */}
    <rect x="44" y="82" width="32" height="12" rx="3" stroke="#5bb8ff" strokeWidth="2" />
    {/* Mount plate */}
    <rect x="38" y="94" width="44" height="6" rx="2" fill="#5bb8ff" opacity="0.2" />
    {/* Zoom range lines */}
    <path d="M80 42 L92 35" stroke="#5bb8ff" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5" />
    <path d="M80 54 L92 61" stroke="#5bb8ff" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5" />
  </svg>
);

const specs = [
  {
    label: 'Coverage Range',
    value: 'Wide pan-tilt capabilities with effective zoom of 18X',
  },
  {
    label: 'Edge AI',
    value: 'Inbuilt Compute of 12 TOPS to run your Sports Model',
  },
  {
    label: 'AI Tracking',
    value: 'AI based Ball and Player tracking for Automated Broadcasting.',
  },
];

const highlights = [
  { val: '18X', label: 'Optical Zoom' },
  { val: '12T', label: '12 TOPS' },
];

const PTZEthernet = () => {
  return (
    <section className="ptz" id="ptz">
      <div className="ptz__container">
        <div className="ptz__left">
          {/* <p className="ptz__eyebrow">Dynamic Tracking & Wide-Area Coverage</p> */}
          <h2 className="ptz__title">
            <span>PTZ Cameras</span> for Dynamic<br />Tracking and Wide-Area Coverage
          </h2>
          <p className="ptz__desc">
            Tap into the power of e-con System’s’ remotely controllable PTZ cameras
          </p>

          <div className="ptz__specs">
            {specs.map((s) => (
              <div className="ptz__spec" key={s.label}>
                <div className="ptz__spec-label">{s.label}</div>
                <div className="ptz__spec-value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="ptz__early-access">
            <div className="ptz__early-text">
              <div className="ptz__early-title">Early Access Available</div>
              <div className="ptz__early-sub">Want to know about our PTZ camera launch and how to get early access?</div>
            </div>
            <a href="#contact" className="ptz__early-btn">
              Connect With Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="ptz__right">
          <div className="ptz__visual">
            <PTZVisualSVG />
          </div>
          <div className="ptz__highlight-grid">
            {highlights.map((h) => (
              <div className="ptz__highlight" key={h.label}>
                <div className="ptz__highlight-val">{h.val}</div>
                <div className="ptz__highlight-label">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTZEthernet;