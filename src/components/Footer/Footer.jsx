import logoImage from '../../assets/logo11.webp';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-col-brand">
          <div className="footer-logo">
            <img src={logoImage} alt="UPVC Dekho Logo" className="footer-logo-img" />
          </div>
          <p>
            Tirupati Balaji — Premium UPVC windows and SSR railing solutions in
            Fatehpur Shekhawati, Rajasthan.
          </p>
        </div>

        <div className="footer-col footer-col-quick">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#our-work">Our Work</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-products">
          <h4>Products</h4>
          <ul>
            <li><a href="#window-types">UPVC Windows</a></li>
            <li><a href="#products">SSR Railing</a></li>
            <li><a href="#window-types">Sliding Windows</a></li>
            <li><a href="#window-types">Casement Windows</a></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contact">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <span className="footer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>Panchayat Samiti ke paas, Surya Mandal ke samne, Sikar Road, Fatehpur Shekhawati, Rajasthan.</span>
            </li>
            <li>
              <span className="footer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span><a href="tel:+918976922929">8976922929</a> — Rajuram Bishnoi</span>
            </li>
            <li>
              <span className="footer-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span><a href="tel:+919571553447">9571553447</a> — Ramesh Bishnoi</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tirupati Balaji — UPVC Dekho. All Rights Reserved.</p>
      </div>
    </footer>
  );
}