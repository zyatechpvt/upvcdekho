import heroDesktop from '../../assets/hero11.webp';
import heroMobile from '../../assets/hero22.webp';
import './Hero.css';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        '--hero-bg-desktop': `url(${heroDesktop})`,
        '--hero-bg-mobile': `url(${heroMobile})`,
      }}
    >
      {/* Animated Cinematic Background Layer */}
      <div className="hero-bg-media"></div>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-glass-badge">
          <div className="hero-pill">
            <span className="hero-pill-dot"></span>
            <span>FATEHPUR SHEKHAWATI · RAJASTHAN</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-main">Tirupati Balaji</span>
            <span className="hero-ornament">
              <span className="line"></span>
              <span className="diamond">◆</span>
              <span className="line"></span>
            </span>
            <span className="hero-title-sub">UPVC Windows &amp; SSR Railing</span>
          </h1>

          <div className="hero-chips">
            <span className="hero-chip" style={{ '--c-i': 0 }}>✦ German Standard Profiles</span>
            <span className="hero-chip" style={{ '--c-i': 1 }}>✦ Sound &amp; Heat Insulation</span>
            <span className="hero-chip" style={{ '--c-i': 2 }}>✦ Precision Installation</span>
          </div>
        </div>
      </div>
    </section>
  );
}