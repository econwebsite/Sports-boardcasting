import './Domeethernet.css';

const DomeVisualSVG = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dome camera */}
    <circle cx="38" cy="45" r="22" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="38" cy="45" r="10" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="38" cy="45" r="4" fill="#5bb8ff" opacity="0.4" />
    <rect x="26" y="69" width="24" height="10" rx="3" stroke="#5bb8ff" strokeWidth="1.5" />
    <line x1="38" y1="67" x2="38" y2="69" stroke="#5bb8ff" strokeWidth="2" />
    {/* Bullet camera */}
    <rect x="68" y="30" width="36" height="22" rx="4" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="76" cy="41" r="7" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="76" cy="41" r="3" fill="#5bb8ff" opacity="0.4" />
    <rect x="104" y="37" width="8" height="8" rx="1" stroke="#5bb8ff" strokeWidth="1.5" />
    <line x1="86" y1="52" x2="86" y2="62" stroke="#5bb8ff" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* Mount */}
    <line x1="20" y1="92" x2="100" y2="92" stroke="#5bb8ff" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

const specs = [
  { label: 'Resolution', value: '8MP' },
  { label: 'Frame Rate', value: 'Up to 60fps' },
  { label: 'Field of View', value: '90° to 120°' },
  { label: 'Power', value: 'PoE' },
  { label: 'Rating', value: 'IP66 (Indoor/Outdoor)' },
  { label: 'Connector', value: 'PoE, Ethernet' },
];

const extras = [
  'Optical Zoom Level: 3X',
  'Wide Dynamic Range',
  'In-Built Microphone',
];

const DomeEthernet = () => {
  return (
    <section className="dome" id="dome">
      <div className="dome__container">
        <div className="dome__left">
          {/* <p className="dome__eyebrow">Static Camera Recording</p> */}
          <h2 className="dome__title">
            Dome &amp; Bullet Cameras for<br />
            <span>Superior Static Recording</span>
          </h2>
          <p className="dome__desc">
           Leverage e-con Systems’ Sports PoE-based dome and bullet cameras
          </p>

          <div className="dome__specs-grid">
            {specs.map((s) => (
              <div className="spec-item" key={s.label}>
                <div className="spec-item__label">{s.label}</div>
                <div className="spec-item__value">{s.value}</div>
              </div>
            ))}
          </div>

          <ul className="dome__extras">
            {extras.map((e) => <li key={e}>{e}</li>)}
          </ul>

          <div className="dome__actions">
            <a href="#spec-dome" className="dome__btn-primary">Download Spec Sheet — Dome</a>
            <a href="#contact" className="dome__btn-secondary">Contact Us for Samples</a>
          </div>
        </div>

        <div className="dome__right">
          <div className="dome__visual">
            <DomeVisualSVG />
          </div>
          <div className="dome__badge-row">
            <div className="dome__badge">
              <div className="dome__badge-value">8MP</div>
              <div className="dome__badge-label">Max Resolution</div>
            </div>
            <div className="dome__badge">
              <div className="dome__badge-value">60fps</div>
              <div className="dome__badge-label">Frame Rate</div>
            </div>
            <div className="dome__badge">
              <div className="dome__badge-value">IP66</div>
              <div className="dome__badge-label">Weather Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomeEthernet;
