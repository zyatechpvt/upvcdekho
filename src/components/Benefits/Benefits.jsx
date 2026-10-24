import { useState, useEffect, useRef } from 'react';
import benefitImg from '../../assets/benefit-main.jpg';
import './Benefits.css';

const benefits = [
  {
    title: 'Low Maintenance',
    desc: 'UPVC frames are generally easy to clean and do not require routine repainting like traditional timber frames.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Weather Resistance',
    desc: 'Quality UPVC systems can withstand everyday weather exposure when appropriately specified and installed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M19.07 4.93l-1.41 1.41" />
        <path d="M7 16a4 4 0 0 1 0-8 4.2 4.2 0 0 1 2.2.6A5 5 0 0 1 19 11a4 4 0 0 1-2 7H7z" />
        <line x1="8" y1="19" x2="7" y2="22" />
        <line x1="12" y1="19" x2="11" y2="22" />
        <line x1="16" y1="19" x2="15" y2="22" />
      </svg>
    ),
  },
  {
    title: 'Modern Designs',
    desc: 'Explore window styles that complement contemporary and traditional architectural designs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-10 10c0 4.42 3.58 8 8 8 1.1 0 2-.9 2-2 0-.46-.17-.88-.45-1.2A1.98 1.98 0 0 1 11 15.5c0-1.1.9-2 2-2h2.5c3.58 0 6.5-2.92 6.5-6.5A7 7 0 0 0 12 2z" />
        <circle cx="7.5" cy="10" r="1.2" fill="currentColor" />
        <circle cx="12" cy="7" r="1.2" fill="currentColor" />
        <circle cx="16.5" cy="10" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Easy Cleaning',
    desc: 'UPVC frames generally require simple cleaning with suitable products and routine care.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.2 4.8 4.8 2.2-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2z" />
        <path d="M19 16l1.1 2.4 2.4 1.1-2.4 1.1L19 23l-1.1-2.4-2.4-1.1 2.4-1.1z" />
        <path d="M5 2l.8 1.7L7.5 4.5l-1.7.8L5 7l-.8-1.7L2.5 4.5l1.7-.8z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Touch & drag swipe refs
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

  // Split benefits into slides based on viewport:
  // Desktop: 2 cards per slide (2 slides total)
  // Mobile: 1 card per slide (4 slides total)
  const cardsPerSlide = isMobile ? 1 : 2;
  const slides = [];
  for (let i = 0; i < benefits.length; i += cardsPerSlide) {
    slides.push(benefits.slice(i, i + cardsPerSlide));
  }
  const totalPages = slides.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Touch gestures for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
    touchEndYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndXRef.current - touchStartXRef.current;
    const deltaY = touchEndYRef.current - touchStartYRef.current;

    // Trigger when horizontal swipe exceeds 40px and dominates vertical movement
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag support
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    touchStartXRef.current = e.clientX;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
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
    <section id="benefits" className="section">
      <div className="blob blob-green" style={{ width: 340, height: 340, bottom: -100, left: -100 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">WHY UPVC?</span>
          <h2 className="section-title">Why Consider <span>UPVC Windows</span> for Your Property?</h2>
          <p className="section-subtitle">
            UPVC windows combine a modern appearance with practical maintenance and
            durability characteristics. The right window system can complement your
            property while meeting your functional requirements.
          </p>
        </div>

        <div className="benefits-layout">
          <div className="benefits-image">
            <img src={benefitImg} alt="Modern UPVC window installation" />
          </div>

          <div className="benefits-carousel-wrapper">
            <div
              className="benefits-carousel-viewport"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => { isDraggingRef.current = false; }}
            >
              <div
                className="benefits-carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {slides.map((slideCards, slideIdx) => (
                  <div className="benefits-carousel-slide" key={slideIdx}>
                    <div className="benefits-carousel-slide-inner">
                      {slideCards.map((b) => (
                        <div className="benefit-card glass-light" key={b.title}>
                          <div className="benefit-icon">{b.icon}</div>
                          <h4>{b.title}</h4>
                          <p>{b.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="benefits-carousel-nav">
              <button
                type="button"
                className="carousel-nav-btn prev-btn"
                aria-label="Previous slide"
                onClick={handlePrev}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="carousel-pagination">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="carousel-nav-btn next-btn"
                aria-label="Next slide"
                onClick={handleNext}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}