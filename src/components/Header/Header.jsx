import { useState, useEffect } from 'react';
import logoImage from '../../assets/logo11.webp';
import './Header.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track current section on screen
      const sectionIds = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          <a href="#home" className="logo">
            <img src={logoImage} alt="UPVC Dekho Logo" className="logo-img" />
          </a>

          {/* Desktop Nav in Glassmorphic Capsule */}
          <nav className="nav-links">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </a>
              );
            })}
            <a href="#contact" className="btn btn-gold nav-cta">
              Get a Free Quote
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-overlay-header">
          <a href="#home" className="mobile-overlay-logo" onClick={handleNavClick}>
            <img src={logoImage} alt="UPVC Dekho Logo" />
          </a>
          <button
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-overlay-body">
          <nav className="mobile-overlay-nav">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-item"
                style={{ '--i': idx }}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-cta-wrap" style={{ '--i': navLinks.length }}>
              <a
                href="#contact"
                className="btn btn-gold mobile-nav-cta"
                onClick={handleNavClick}
              >
                Get a Free Quote
              </a>
            </div>
          </nav>

          <div className="mobile-overlay-footer" style={{ '--i': navLinks.length + 1 }}>
            <p className="mobile-footer-phone">
              <span className="mobile-phone-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:+918976922929">8976922929</a>
            </p>
            <p className="mobile-footer-brand">
              Tirupati Balaji · Fatehpur Shekhawati, Rajasthan
            </p>
          </div>
        </div>
      </div>
    </>
  );
}