import './categoriesethernet.css';

const DomeSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="28" r="14" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="32" cy="28" r="6" stroke="#5bb8ff" strokeWidth="2" />
    <rect x="20" y="44" width="24" height="8" rx="2" stroke="#5bb8ff" strokeWidth="2" />
    <line x1="32" y1="42" x2="32" y2="44" stroke="#5bb8ff" strokeWidth="2" />
    <rect x="10" y="52" width="44" height="4" rx="2" fill="#5bb8ff" opacity="0.3" />
  </svg>
);

const RouteSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="30" height="22" rx="3" stroke="#5bb8ff" strokeWidth="2" />
    <rect x="16" y="24" width="10" height="10" rx="1" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="42" cy="31" r="4" stroke="#5bb8ff" strokeWidth="2" />
    <line x1="42" y1="20" x2="42" y2="17" stroke="#5bb8ff" strokeWidth="2" />
    <line x1="42" y1="42" x2="42" y2="45" stroke="#5bb8ff" strokeWidth="2" />
    <rect x="44" y="27" width="8" height="8" rx="1" stroke="#5bb8ff" strokeWidth="2" />
    <line x1="12" y1="50" x2="52" y2="50" stroke="#5bb8ff" strokeWidth="1.5" strokeDasharray="3 2" />
  </svg>
);

const PTZSSVG = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="30" r="12" stroke="#5bb8ff" strokeWidth="2" />
    <circle cx="32" cy="30" r="5" fill="#5bb8ff" opacity="0.3" />
    <path d="M8 30 Q20 14 32 30 Q44 46 56 30" stroke="#5bb8ff" strokeWidth="1.5" strokeDasharray="3 2" />
    <line x1="32" y1="44" x2="32" y2="50" stroke="#5bb8ff" strokeWidth="2" />
    <rect x="24" y="50" width="16" height="6" rx="2" stroke="#5bb8ff" strokeWidth="2" />
    <path d="M44 18 L50 12 M50 18 L44 12" stroke="#5bb8ff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const categories = [
  {
    tag: 'Static Recording',
    name: 'Dome & Bullet Cameras',
    subtitle: 'For Indoor and Outdoor Sports Venues',
    icon: <DomeSVG />,
    desc: 'Fixed-view cameras for consistent, long-duration sports recording and streaming.',
    label: 'Key Highlights',
    points: [
      'Up to 4K Resolution',
      'Motorized Zoom Lens',
      'Fixed coverage with stable framing',
      'Consistent & long sports recording',
    ],
    btnText: 'Dome & Bullet Camera Specs',
    btnHref: '#dome',
  },
  {
    tag: 'Compact Ethernet',
    name: 'RouteCAM Series',
    subtitle: 'For Space-Constrained Installations',
    icon: <RouteSVG />,
    desc: 'Compact form-factor cameras for discreet and constrained sports deployments.',
    label: 'Key Features',
    points: [
      'Compact IP Rated Ethernet Cameras',
      'Ideal for Indoor & Outdoor Deployments',
      'Multi Camera PTP Synchronization',
    ],
    btnText: 'RouteCAM Series ›',
    btnHref: '#routecam',
  },
  {
    tag: 'Dynamic Coverage',
    name: 'PTZ Cameras',
    subtitle: 'For Large Sports Fields',
    icon: <PTZSSVG />,
    desc: 'Remotely controllable PTZ cameras for following play across large fields.',
    label: 'Key Highlights',
    points: [
      'Pan, Tilt & Zoom for flexible coverage',
      'Centralized Control over Ethernet',
      'Ideal for American Football & Rugby',
      'Baseball & Softball, etc.',
    ],
    btnText: 'PTZ Camera Specs',
    btnHref: '#ptz',
  },
];

const CategoriesEthernet = () => {
  return (
    <section className="categories">
      <div className="categories__header">
        {/* <p className="categories__eyebrow">Product Portfolio</p> */}
        <h2 className="categories__title">
          <span>Ethernet Camera</span> Categories for Sports Venues
        </h2>
      </div>
      <div className="categories__grid">
        {categories.map((cat) => (
          <div className="cat-card" key={cat.name}>
            <div className="cat-card__head">
              {/* <div className="cat-card__tag">{cat.tag}</div> */}
              <div className="cat-card__name">{cat.name}</div>
              {/* <div className="cat-card__subtitle">{cat.subtitle}</div> */}
              <div className="cat-card__img-wrap">
                <div className="cat-card__img-placeholder">{cat.icon}</div>
              </div>
            </div>
            <div className="cat-card__body">
              {/* <p className="cat-card__desc">{cat.desc}</p> */}
              <div className="cat-card__label">{cat.label}</div>
              <ul className="cat-card__list">
                {cat.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <a href={cat.btnHref} className="cat-card__btn">{cat.btnText}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesEthernet;