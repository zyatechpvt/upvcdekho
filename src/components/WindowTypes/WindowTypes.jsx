import { useState, useEffect, useRef } from 'react';
import sliding from '../../assets/window-sliding.png';
import casement from '../../assets/window-casement.png';
import fixed from '../../assets/window-fixed.png';
import tiltTurn from '../../assets/window-tilt.png';
import './WindowTypes.css';

const types = [
  { title: 'Sliding Windows', img: sliding, desc: 'Panels slide horizontally along a track, useful where you want to avoid extra clearance.' },
  { title: 'Casement Windows', img: casement, desc: 'Hinged panels open inward or outward, allowing flexible ventilation.' },
  { title: 'Fixed Windows', img: fixed, desc: 'Non-opening windows designed to provide natural light and views.' },
  { title: 'Tilt-and-Turn Windows', img: tiltTurn, desc: 'Windows offering different opening modes depending on hardware configuration.' },
];

export default function WindowTypes() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch and drag swipe tracking
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchEndXRef = useRef(0);
  const touchEndYRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile((prev) => {
        if (prev !== mobile) {
          setCurrentIndex(0);
          return mobile;
        }
        return prev;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? types.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === types.length - 1 ? 0 : prev + 1));
  };

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    const deltaX = touchEndXRef.current - touchStartXRef.current;
    const deltaY = touchEndYRef.current - touchStartYRef.current;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag support for mobile preview/emulators
  const handleMouseDown = (e) => {
    if (!isMobile) return;
    isDraggingRef.current = true;
    touchStartXRef.current = e.clientX;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !isMobile) return;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current || !isMobile) return;
    isDraggingRef.current = false;
    const deltaX = touchEndXRef.current - touchStartXRef.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section id="window-types" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">FIND YOUR STYLE</span>
          <h2 className="section-title">Explore Different Types of <span>UPVC Windows</span></h2>
          <p className="section-subtitle">
            Every space has different requirements. Explore common UPVC window styles
            to understand their appearance and functionality.
          </p>
        </div>

        <div className="window-types-carousel-wrapper">
          <div
            className="window-types-carousel-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { isDraggingRef.current = false; }}
          >
            <div
              className="window-types-carousel-track"
              style={{
                transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none',
              }}
            >
              {types.map((t) => (
                <div className="type-card glass-light" key={t.title}>
                  <div className="type-img"><img src={t.img} alt={t.title} /></div>
                  <div className="type-body">
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Active on Mobile Only */}
          <div className="window-types-carousel-nav">
            <button
              type="button"
              className="carousel-nav-btn prev-btn"
              aria-label="Previous window type"
              onClick={handlePrev}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="carousel-pagination">
              {types.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to window type ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-nav-btn next-btn"
              aria-label="Next window type"
              onClick={handleNext}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="type-cta glass-light">
          <div>
            <h4>Looking for a particular window style?</h4>
            <p>Contact us to discuss the available options.</p>
          </div>
          <a href="#contact" className="btn btn-gold">Request a Quote</a>
        </div>
      </div>
    </section>
  );
}