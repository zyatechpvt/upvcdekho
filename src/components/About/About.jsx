import { useState } from 'react';
import pillarsImg from '../../assets/railing-pillars.jpg';
import stairsImg from '../../assets/work-railing-1.png';
import './About.css';

const highlights = [
  {
    title: 'Local Business',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    title: 'UPVC Windows',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <line x1="12" y1="3" x2="12" y2="21"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
      </svg>
    ),
  },
  {
    title: 'SSR Railing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16"></path>
        <path d="M4 18h16"></path>
        <line x1="7" y1="6" x2="7" y2="18"></line>
        <line x1="12" y1="6" x2="12" y2="18"></line>
        <line x1="17" y1="6" x2="17" y2="18"></line>
      </svg>
    ),
  },
  {
    title: 'Personal Assistance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path d="M8 10h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M16 10h.01"></path>
      </svg>
    ),
  },
];

const cardServices = [
  'एस.एस. रेलिंग',
  'सोफा सैट',
  'पलंग',
  'लेटर',
  'ग्लास फिटिंग, रेलिंग',
  'गेट,',
  'जंगले-खिड़की,',
  'कुर्सी-टेबल',
];

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `*तिरुपति बालाजी - स्टेनलेस स्टील रेलिंग एण्ड फर्नीचर*\n(UPVC Windows & SSR Railing)\n\n👤 राजुराम बिश्नोई: +91 8976922929 (WhatsApp)\n👤 रमेश बिश्नोई: +91 9571553447\n\n📍 पता: पंचायत समिति के पास, सूर्य मण्डल के सामने, सीकर रोड़, फतेहपुर शेखावाटी (राज.)\n\n🌐 वेबसाईट देखें: ${window.location.origin}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tirupati Balaji - Digital Visiting Card',
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // user cancelled or share failed, fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  };

  return (
    <section id="about" className="section section-alt">
      <div className="container about-grid">
        {/* Left narrative content */}
        <div className="about-text">
          <div className="about-header">
            <span className="eyebrow">ABOUT OUR BUSINESS</span>
            <h2 className="section-title">
              About Tirupati Balaji <br /> <span>Modern Windows & Railing Solutions</span>
            </h2>
          </div>

          <div className="about-paras">
            <p className="about-para">
              Welcome to Tirupati Balaji, your trusted destination for UPVC windows,
              stainless steel railing (SSR), and custom metal furniture solutions in
              Fatehpur Shekhawati, Rajasthan.
            </p>
            <p className="about-para">
              From modern residential homes to commercial showrooms, we help clients
              select precision-engineered railing, stylish UPVC windows, and durable
              furniture tailored to their architectural needs.
            </p>
            <p className="about-para">
              Conveniently located on Sikar Road in Fatehpur Shekhawati, we welcome
              inquiries and site visits from Fatehpur and surrounding regions across Shekhawati.
            </p>
          </div>

          <div className="highlight-grid">
            {highlights.map((h) => (
              <div className="highlight-item" key={h.title}>
                <div className="highlight-icon-box">
                  {h.icon}
                </div>
                <h4 className="highlight-title">{h.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Interactive Digital Visiting Card */}
        <div className="digital-card-wrapper">
          {/* The Physical-Style Digital Visiting Card Canvas */}
          <div className="dcard-canvas">
            {/* Top Contacts Bar: Ramesh on left, TB Steel emblem center, Rajuram on right */}
            <div className="dcard-top-row">
              {/* Contact: Ramesh Bishnoi (Left) */}
              <div className="dcard-person dcard-person-left">
                <span className="dcard-person-name">रमेश बिश्नोई</span>
                <a href="tel:+919571553447" className="dcard-person-phone" title="Call Ramesh Bishnoi">
                  <span className="wa-icon-inline">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="phone-prefix">M.</span> 9571553447
                </a>
              </div>

              {/* Emblem: TB Steel (Center) */}
              <div className="dcard-center-emblem" title="Tirupati Balaji Steel & Fabrication">
                <div className="dcard-emblem-roof">
                  <svg viewBox="0 0 60 30" className="dcard-roof-svg">
                    <polygon points="30,2 2,28 58,28" fill="#153e75" stroke="#0f2b52" strokeWidth="1.5" />
                    <line x1="12" y1="28" x2="26" y2="8" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                    <line x1="20" y1="28" x2="28" y2="5" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                    <line x1="29" y1="28" x2="30" y2="3" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                    <line x1="38" y1="28" x2="31" y2="4" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                    <line x1="47" y1="28" x2="34" y2="8" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
                  </svg>
                  <div className="dcard-emblem-box">
                    <span className="emblem-tb">TB</span>
                    <span className="emblem-steel">steel</span>
                  </div>
                </div>
              </div>

              {/* Contact: Rajuram Bishnoi (Right) */}
              <div className="dcard-person dcard-person-right">
                <span className="dcard-person-name">राजुराम बिश्नोई</span>
                <a href="tel:+918976922929" className="dcard-person-phone wa-phone" title="Call or WhatsApp Rajuram Bishnoi">
                  <span className="wa-icon-inline">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.07-.3-.1-.43.1-.12.19-.49.61-.6.74-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.14-1.07-1.33-.11-.19-.01-.3.08-.39.09-.08.19-.23.29-.34.09-.12.13-.2.19-.34.07-.13.03-.25-.02-.34-.05-.1-.43-1.04-.6-1.42-.16-.38-.32-.32-.44-.33h-.37c-.13 0-.34.05-.51.24-.18.19-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.09.14 1.38 2.11 3.34 2.96.47.2.83.32 1.12.41.47.15.9.13 1.23.08.38-.06 1.12-.46 1.28-.9.16-.44.16-.82.11-.9-.05-.08-.18-.13-.37-.22" />
                    </svg>
                  </span>
                  <span className="phone-prefix">M.</span> 8976922929
                </a>
              </div>
            </div>

            {/* Main Brand Title: तिरुपति बालाजी */}
            <div className="dcard-title-wrap">
              <h3 className="dcard-title-hindi">तिरुपति बालाजी</h3>
              <span className="dcard-title-eng">TIRUPATI BALAJI</span>
            </div>

            {/* Subtitle Pill / Banner */}
            <div className="dcard-pill-wrap">
              <div className="dcard-pill">
                स्टेनलेस स्टील रेलिंग एण्ड फर्नीचर
              </div>
            </div>

            {/* Note badge */}
            <div className="dcard-note-bar">
              <strong>नोट:</strong> हमारे यहां एल्युमिनियम का कार्य भी किया जाता है।
            </div>

            {/* Center Content Section: Left Services List + Right Work Photos */}
            <div className="dcard-body-grid">
              {/* Left Column: Products & Services List */}
              <div className="dcard-services-list">
                {cardServices.map((service, idx) => (
                  <div className="dcard-service-item" key={idx}>
                    <span className="dcard-bullet">■</span>
                    <span className="dcard-service-text">{service}</span>
                  </div>
                ))}
              </div>

              {/* Right Column: High Quality Work Photos */}
              <div className="dcard-photos-col">
                <div className="dcard-photo-card" title="Ornamental SSR Balusters & Pillars">
                  <img src={pillarsImg} alt="Ornamental SS Railing Pillars" />
                  <div className="dcard-photo-tag">एस.एस. पिलर व रेलिंग</div>
                </div>
                <div className="dcard-photo-card" title="Stainless Steel Staircase Railing">
                  <img src={stairsImg} alt="SS Staircase Railing Installation" />
                  <div className="dcard-photo-tag">सीढ़ी व बालकनी रेलिंग</div>
                </div>
              </div>
            </div>

            {/* Bottom Curved Address Stripe */}
            <div className="dcard-address-strip">
              <div className="dcard-pin-circle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <p className="dcard-address-text">
                पंचायत समिति के पास, सूर्य मण्डल के सामने, सीकर रोड़, फतेहपुर शेखावाटी (राज.)
              </p>
            </div>
          </div>

          {/* Quick Action Bar (Call, WhatsApp, Mail, Share) - Icon Only Below Card */}
          <div className="dcard-actions-bar">
            {/* Call button */}
            <a
              href="tel:+918976922929"
              className="dcard-btn dcard-btn-call"
              title="Call Rajuram Bishnoi (8976922929)"
              aria-label="Call Rajuram Bishnoi"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/918976922929?text=Namaste%20Tirupati%20Balaji%2C%20I%20saw%20your%20digital%20card%20and%20want%20to%20enquire%20about%20SS%20Railing%20and%20UPVC%20Windows"
              target="_blank"
              rel="noreferrer"
              className="dcard-btn dcard-btn-wa"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.07-.3-.1-.43.1-.12.19-.49.61-.6.74-.11.12-.23.14-.42.05-.19-.09-.81-.3-1.55-.95-.57-.51-.96-1.14-1.07-1.33-.11-.19-.01-.3.08-.39.09-.08.19-.23.29-.34.09-.12.13-.2.19-.34.07-.13.03-.25-.02-.34-.05-.1-.43-1.04-.6-1.42-.16-.38-.32-.32-.44-.33h-.37c-.13 0-.34.05-.51.24-.18.19-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.09.14 1.38 2.11 3.34 2.96.47.2.83.32 1.12.41.47.15.9.13 1.23.08.38-.06 1.12-.46 1.28-.9.16-.44.16-.82.11-.9-.05-.08-.18-.13-.37-.22" />
              </svg>
            </a>

            {/* Email button */}
            <a
              href="mailto:tirupatibalajiupvc@gmail.com?subject=Enquiry%20regarding%20Windows%20and%20Railing"
              className="dcard-btn dcard-btn-mail"
              title="Send an Email"
              aria-label="Send Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>

            {/* Share button */}
            <button
              type="button"
              className="dcard-btn dcard-btn-share"
              onClick={handleShare}
              title="Share Digital Card"
              aria-label="Share"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>

          {/* Toast Notification */}
          {copied && (
            <div className="dcard-toast-notify">
              ✓ Digital Visiting Card details copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}