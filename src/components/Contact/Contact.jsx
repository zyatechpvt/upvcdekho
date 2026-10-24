import { useState } from 'react';
import logo from '../../assets/logo11.webp';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', location: '', product: 'UPVC Windows', qty: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend / email service / WhatsApp API
    console.log('Enquiry Submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="blob blob-gold" style={{ width: 320, height: 320, top: -60, left: -100 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">LET'S TALK ABOUT YOUR PROJECT</span>
          <h2 className="section-title">Get a <span>Free Quote</span></h2>
          <p className="section-subtitle">
            Planning a new home, renovating your property, or exploring UPVC windows
            and railing options? Contact Tirupati Balaji to discuss your requirements.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-light">
            <div className="contact-logo-wrap">
              <img src={logo} alt="Tirupati Balaji Logo" className="contact-logo" />
            </div>

            <h3>Tirupati Balaji</h3>
            <p className="owner-line">Owner: Rajuram Bishnoi</p>

            <ul className="info-list">
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Panchayat Samiti ke paas, Surya Mandal ke samne, Sikar Road, Fatehpur Shekhawati, Rajasthan.</span>
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+918976922929" className="contact-phone-link">8976922929</a>
              </li>
            </ul>

            <div className="contact-btns">
              <a href="tel:+918976922929" className="btn btn-green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-inline-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
              <a href="https://wa.me/918976922929" target="_blank" rel="noreferrer" className="btn btn-gold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="btn-inline-icon">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.26 15.1 13.66 14.88 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.67 14.52 13.53 14.69C13.38 14.85 13.23 14.87 12.98 14.75C12.73 14.62 11.93 14.36 10.98 13.51C10.24 12.85 9.74 12.04 9.6 11.79C9.45 11.54 9.58 11.41 9.71 11.28C9.82 11.17 9.96 10.99 10.08 10.85C10.21 10.71 10.25 10.6 10.33 10.44C10.42 10.27 10.37 10.13 10.31 10C10.25 9.88 9.75 8.65 9.54 8.14C9.34 7.65 9.13 7.71 8.98 7.71C8.83 7.7 8.67 7.7 8.5 7.7C8.33 7.7 8.07 7.76 7.84 8.01C7.62 8.26 6.98 8.85 6.98 10.07C6.98 11.29 7.87 12.46 8 12.63C8.12 12.79 9.75 15.3 12.24 16.37C12.83 16.63 13.29 16.78 13.65 16.89C14.25 17.08 14.79 17.05 15.22 16.99C15.7 16.92 16.69 16.39 16.9 15.8C17.11 15.21 17.11 14.7 17.04 14.6C16.98 14.5 16.82 14.44 16.57 14.39Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <form className="contact-form glass-light" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="form-success">
                <div className="success-icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. We'll contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
                  <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
                </div>
                <div className="form-row">
                  <input type="text" name="location" placeholder="Town / Location" onChange={handleChange} />
                  <select name="product" onChange={handleChange} defaultValue="UPVC Windows">
                    <option>UPVC Windows</option>
                    <option>SSR Railing</option>
                    <option>Both</option>
                  </select>
                </div>
                <input type="number" name="qty" placeholder="Approximate Quantity (optional)" onChange={handleChange} className="full-input" />
                <textarea name="message" rows="4" placeholder="Your Message" onChange={handleChange} className="full-input"></textarea>
                <button type="submit" className="btn btn-green full-btn">Submit Enquiry</button>
              </>
            )}
          </form>
        </div>

        <div className="map-wrap glass-light">
          <iframe
            title="Tirupati Balaji Map"
            src="https://www.google.com/maps?q=Fatehpur%20Shekhawati%20Sikar%20Road&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}