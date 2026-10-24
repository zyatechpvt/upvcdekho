import { useState, useEffect, useRef } from 'react';
import w1 from '../../assets/work-window-1.jpg';
import w2 from '../../assets/work-window-2.jpg';
import r1 from '../../assets/work-railing-1.png';
import r2 from '../../assets/work-railing-2.jpg';
import w3 from '../../assets/work-window-3.jpg';
import r3 from '../../assets/work-railing-3.jpg';
import './OurWork.css';

const items = [
  { id: 1, category: 'UPVC Windows', title: 'UPVC Sliding Window', desc: 'A modern sliding-window design suitable for a contemporary residential space.', img: w1 },
  { id: 2, category: 'SSR Railing', title: 'SSR Balcony Railing', desc: 'A railing design for a balcony, subject to intended application and safety specifications.', img: r1 },
  { id: 3, category: 'UPVC Windows', title: 'Casement Window Design', desc: 'A casement-style window suited for flexible ventilation needs.', img: w2 },
  { id: 4, category: 'SSR Railing', title: 'Staircase Railing', desc: 'An SSR railing solution designed for staircase safety and style.', img: r2 },
  { id: 5, category: 'UPVC Windows', title: 'Fixed Window Panel', desc: 'A large fixed window panel for enhanced natural lighting.', img: w3 },
  { id: 6, category: 'SSR Railing', title: 'Terrace Railing', desc: 'A railing solution designed for terrace applications.', img: r3 },
];

const filters = ['All Projects', 'UPVC Windows', 'SSR Railing'];

export default function OurWork() {
  const [active, setActive] = useState('All Projects');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= 768 : false));

  // Touch and drag tracking for mobile carousel
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

  const filtered = active === 'All Projects'
    ? items
    : items.filter((i) => i.category === active);

  const handleFilterClick = (f) => {
    setActive(f);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));
  };

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
    <section id="our-work" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">OUR PROJECTS</span>
          <h2 className="section-title">Our UPVC Windows & <span>SSR Railing</span> Projects</h2>
          <p className="section-subtitle">
            Explore UPVC window designs and SSR railing solutions for residential and
            commercial spaces — ideas for your next renovation or new build.
          </p>
        </div>

        {/* Filter Tabs: Horizontal swipeable row on mobile */}
        <div className="work-filters-wrapper">
          <div className="work-filters">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => handleFilterClick(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards: Desktop Grid with hover overlay / Mobile Carousel with swipe & controls */}
        <div className="work-carousel-wrapper">
          <div
            className="work-carousel-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { isDraggingRef.current = false; }}
          >
            <div
              className="work-carousel-track"
              style={{
                transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none',
              }}
            >
              {filtered.map((item) => (
                <div className="work-card" key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <div className="work-overlay glass-dark">
                    <span className="work-tag">{item.category}</span>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Visible on Mobile Only */}
          <div className="work-carousel-nav">
            <button
              type="button"
              className="carousel-nav-btn prev-btn"
              aria-label="Previous project"
              onClick={handlePrev}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="carousel-pagination">
              {filtered.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to project ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-nav-btn next-btn"
              aria-label="Next project"
              onClick={handleNext}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="work-cta glass-light">
          <div>
            <h4>Have a Similar Project in Mind?</h4>
            <p>Tell us about your requirements, and we can discuss suitable options.</p>
          </div>
          <a href="#contact" className="btn btn-green">Discuss Your Project</a>
        </div>
      </div>
    </section>
  );
}