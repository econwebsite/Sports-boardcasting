
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';
import Modelbutton from './ButtonComp/Modelbutton';

const navItems: NavItem[] = [
  { label: 'Solutions', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
];

const solutionDropdown = [
  { label: 'Multi-Camera Solutions', href: '/multicamera' },
  { label: 'Ethernet Cameras', href: '#' },
  { label: 'Global Shutter Cameras', href: '#' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <div className="d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
          {/* Logo */}
          <div className="d-flex align-items-center">
            <a href="/">
              <img
                src="/images/footerlogo-1.svg"
                alt="Company Logo"
                className="navbar-logo"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex align-items-center gap-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="nav-item-wrapper position-relative"
                onMouseEnter={() => item.label === 'Solutions' && setIsDropdownOpen(true)}
              >
                {item.label === 'Solutions' ? (
                  <>
                    <button
                      className="nav-link d-flex align-items-center gap-1 border-0 bg-transparent p-0"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  {isDropdownOpen && (
  <div
    className="dropdown-menu show position-absolute bg-white shadow rounded mt-2"
    style={{ top: "100%", left: 0, minWidth: "200px", zIndex: 1000 }}
    onMouseEnter={() => setIsDropdownOpen(true)}
    onMouseLeave={() => setIsDropdownOpen(false)}
  >
                        {solutionDropdown.map((dropItem) => (
                          <a
                            key={dropItem.label}
                            href={dropItem.href}
                            className="dropdown-item"
                          >
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`nav-link ${item.label === 'Sports' ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <Modelbutton
              className="navbar-contact-btn"
              text="Contact Us"
              backgroundColor="#fff"
              type="contact"
              textColor="#334155"
              animationColor="#69ba2f"
              hoverColor="#344ea1"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="d-md-none">
            <button onClick={() => setIsOpen(!isOpen)} className="btn text-slate-600 p-0 border-0">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="d-md-none mobile-nav py-3 px-3 d-flex flex-column gap-3">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.label === 'Solutions' ? (
                <>
                  <div className="fw-bold text-slate-700 mb-2">{item.label}</div>
                  <div className="ps-3 d-flex flex-column gap-2">
                    {solutionDropdown.map((dropItem) => (
                      <a
                        key={dropItem.label}
                        href={dropItem.href}
                        className="mobile-dropdown-item"
                      >
                        {dropItem.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href={item.href}>
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <button className="mobile-contact-btn">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};
