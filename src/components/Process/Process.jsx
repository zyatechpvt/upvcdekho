import { useState, useEffect, useRef } from 'react';
import './Process.css';

const steps = [
  { num: '01', title: 'Discuss Your Requirements', desc: 'Tell us about your property, preferred products, and design preferences.' },
  { num: '02', ExploreDesigns: 'Explore Designs', title: 'Explore Designs', desc: 'Review suitable window styles, railing options, and product configurations.' },
  { num: '03', title: 'Measurement & Quotation', desc: 'Discuss the measurements and specifications required for an accurate quotation.' },
  { num: '04', title: 'Confirm Project Details', desc: 'Review specifications, agreed pricing, scope of work, and timeline.' },
  { num: '05', title: 'Project Execution', desc: 'Proceed with the agreed supply and installation arrangements.' },
];

export default function Process() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= 768 : false));

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
    setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  // Mobile touch gestures
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

  // Mouse drag support for emulators / tests
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
    <section id="process" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 className="section-title">From Your Requirements to the <span>Right Solution</span></h2>
          <p className="section-subtitle">
            We make it easy to start a conversation about your UPVC window or railing project.
          </p>
        </div>

        <div className="process-carousel-wrapper">
          <div
            className="process-carousel-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { isDraggingRef.current = false; }}
          >
            <div
              className="process-track"
              style={{
                transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none',
              }}
            >
              {steps.map((s, i) => (
                <div className="process-step" key={s.num}>
                  <div className="step-number">{s.num}</div>
                  <div className="step-card glass-light">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                  {i !== steps.length - 1 && <div className="step-line"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Active on Mobile Only */}
          <div className="process-carousel-nav">
            <button
              type="button"
              className="carousel-nav-btn prev-btn"
              aria-label="Previous step"
              onClick={handlePrev}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="carousel-pagination">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to step ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-nav-btn next-btn"
              aria-label="Next step"
              onClick={handleNext}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="process-cta">
          <h4>Ready to discuss your project?</h4>
          <a href="#contact" className="btn btn-gold">Get a Free Quote</a>
        </div>
      </div>
    </section>
  );
}