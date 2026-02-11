
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import Modelbutton from './ButtonComp/Modelbutton';

const navItems: NavItem[] = [
  { label: 'Sports', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="max-w-7xl mx-auto px-3 px-sm-3 px-lg-4">
        <div className="d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
          {/* Logo */}
          <div className="d-flex align-items-center">
            <span className="fs-4 fw-bold tracking-tight text-brand">
              e<span className="text-gray-400">.</span>con
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex align-items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${item.label === 'Sports' ? 'active' : ''
                  }`}
              >
                {item.label}
              </a>
            ))}
            {/* <button className="navbar-contact-btn">
              Contact Us
            </button> */}
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
            <a
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <button className="mobile-contact-btn">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};
