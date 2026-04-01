import './Deploymentethernet.css';

const sports = [
  {
    label: 'Outdoor Fields',
    detail: 'PTZ + Static wide-angle coverage',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#5bb8ff" strokeWidth="1.8">
        <ellipse cx="16" cy="16" rx="10" ry="7" />
        <path d="M6 16 Q16 10 26 16" />
        <path d="M6 16 Q16 22 26 16" />
        <line x1="16" y1="9" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    label: 'Indoor Courts',
    detail: 'Multi-angle full-field tracking',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#5bb8ff" strokeWidth="1.8">
        <circle cx="16" cy="16" r="10" />
        <path d="M10 8 L16 14 L22 8" />
        <path d="M10 24 L16 18 L22 24" />
        <line x1="8" y1="16" x2="24" y2="16" />
      </svg>
    ),
  },
  {
    label: 'Training Facilities',
    detail: 'Outfield dome + infield PTZ',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#5bb8ff" strokeWidth="1.8">
        <circle cx="16" cy="16" r="10" />
        <path d="M12 10 C10 14 10 18 12 22" />
        <path d="M20 10 C22 14 22 18 20 22" />
        <line x1="6" y1="16" x2="26" y2="16" />
      </svg>
    ),
  },
  {
    label: 'Automated Boardcast',
    detail: 'Ceiling-mounted dome arrays',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="#5bb8ff" strokeWidth="1.8">
        <path d="M6 22 Q16 6 26 22" />
        <line x1="6" y1="22" x2="26" y2="22" />
        <circle cx="16" cy="18" r="3" />
        <line x1="16" y1="10" x2="16" y2="6" />
      </svg>
    ),
  },
];

const DeploymentEthernet = () => {
  return (
    <section className="deployment" id="deployment">
      <div className="deployment__header">
        {/* <p className="deployment__eyebrow">Sports Deployment Scenarios</p> */}
        <h2 className="deployment__title">Sports Deployment Scenarios</h2>
      </div>

      <div className="deployment__grid">
        {sports.map((s) => (
          <div className="deploy-card" key={s.label}>
            <div className="deploy-card__icon">{s.icon}</div>
            <div className="deploy-card__sport">{s.label}</div>
            {/* <p className="deploy-card__detail">{s.detail}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeploymentEthernet;