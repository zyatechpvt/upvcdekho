import './ServiceAreas.css';

const nearbyAreas = [
  'Lachhmangarh', 'Ramgarh Shekhawati', 'Sikar', 'Laxmangarh', 'Jhunjhunu Road Belt',
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">OUR LOCATION</span>
          <h2 className="section-title">UPVC Windows & Railing Near <span>Fatehpur Shekhawati</span></h2>
          <p className="section-subtitle">
            Tirupati Balaji is based on Sikar Road in Fatehpur Shekhawati, Rajasthan.
            We welcome enquiries about UPVC windows and railing requirements from
            customers in Fatehpur Shekhawati and surrounding areas.
          </p>
        </div>

        <div className="area-grid">
          <div className="area-card primary glass-light">
            <div className="area-pin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h4>Fatehpur Shekhawati, Rajasthan</h4>
            <p>Panchayat Samiti ke paas, Surya Mandal ke samne, Sikar Road.</p>
            <a href="#contact" className="btn btn-gold">Check Availability</a>
          </div>

          <div className="area-map glass-light">
            <iframe
              title="Tirupati Balaji Location"
              src="https://www.google.com/maps?q=Fatehpur%20Shekhawati%20Sikar%20Road&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 'var(--radius-md)' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <h4 className="nearby-title">Nearby Areas We Serve</h4>
        <div className="nearby-chips">
          {nearbyAreas.map((area) => (
            <span className="chip" key={area}>{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
}