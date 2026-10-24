import { useState, useEffect, useRef } from 'react';
import avatarSuresh from '../../assets/avatar-suresh.jpg';
import avatarPriya from '../../assets/avatar-priya.jpg';
import avatarManoj from '../../assets/avatar-manoj.jpg';
import './Reviews.css';

const reviews = [
  {
    name: 'Suresh Kumar',
    location: 'Fatehpur Shekhawati',
    project: '8 Sliding UPVC Windows',
    rating: 5,
    date: 'Verified Customer • 2 weeks ago',
    avatar: avatarSuresh,
    text: 'Installed 8 UPVC sliding windows with mosquito mesh in our newly built home near Panchayat Samiti. The difference in dust protection and outside traffic noise is huge. Rajuram ji took exact measurements on site and the installation was finished smoothly in 3 days. Profile quality and locking mechanisms feel very solid.',
  },
  {
    name: 'Priya Sharma',
    location: 'Laxmangarh, Sikar',
    project: 'SSR Balcony Toughened Glass Railing',
    rating: 5,
    date: 'Verified Customer • 1 month ago',
    avatar: avatarPriya,
    text: 'We got SS 304 stainless steel and toughened glass railing done for our front balcony and terrace. The mirror polish and heavy pillar fitting are top class. Very honest pricing with no hidden charges, and Rajuram ji personally ensured child safety spacing. Best railing work in the Shekhawati region!',
  },
  {
    name: 'Manoj Saini',
    location: 'Ramgarh Shekhawati',
    project: 'UPVC Casement & Fixed Panels',
    rating: 5,
    date: 'Verified Customer • 3 weeks ago',
    avatar: avatarManoj,
    text: 'Replaced all old rusted iron windows during our home renovation with Tirupati Balaji’s UPVC casement windows. Excellent air sealing against Rajasthan summer heat and wind dust. The multi-point locking operates like butter. Genuine local business with great after-sales support.',
  },
];

export default function Reviews() {
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
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
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
    const diffX = touchStartXRef.current - touchEndXRef.current;
    const diffY = touchStartYRef.current - touchEndYRef.current;

    // Trigger only if horizontal swipe dominates vertical scroll
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Mouse drag handlers for mobile testing
  const handleMouseDown = (e) => {
    if (!isMobile) return;
    isDraggingRef.current = true;
    touchStartXRef.current = e.clientX;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isMobile || !isDraggingRef.current) return;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isMobile || !isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diffX = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">CUSTOMER EXPERIENCES</span>
          <h2 className="section-title">What Our <span>Customers Say</span></h2>
          <p className="section-subtitle">
            Choosing windows or railing for your property is an important decision.
            Genuine customer feedback from homeowners across Fatehpur Shekhawati and Sikar.
          </p>
        </div>

        <div className="reviews-carousel-wrapper">
          <div
            className="reviews-carousel-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { isDraggingRef.current = false; }}
          >
            <div
              className="reviews-carousel-track"
              style={{
                transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none',
              }}
            >
              {reviews.map((r) => (
                <div className="review-card glass-light" key={r.name}>
                  <div className="review-card-top">
                    <span className="quote-icon">&ldquo;</span>
                    <span className="verified-pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="verified-check">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Verified Customer
                    </span>
                  </div>

                  <p className="review-text">{r.text}</p>

                  <div className="review-meta-row">
                    <div className="review-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                    <span className="review-date">{r.date.split('•')[1]?.trim() || 'Recent'}</span>
                  </div>

                  <div className="review-footer">
                    <div className="review-avatar">
                      <img src={r.avatar} alt={r.name} className="avatar-img" />
                    </div>
                    <div className="review-author">
                      <h4>{r.name}</h4>
                      <span className="author-location">{r.location}</span>
                      <span className="author-project">{r.project}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Active on Mobile Only */}
          <div className="reviews-carousel-nav">
            <button
              type="button"
              className="carousel-nav-btn prev-btn"
              aria-label="Previous review"
              onClick={handlePrev}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="carousel-pagination">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to review ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-nav-btn next-btn"
              aria-label="Next review"
              onClick={handleNext}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="reviews-cta">
          <h4>Have you worked with us?</h4>
          <p>We welcome your feedback about your experience.</p>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
}