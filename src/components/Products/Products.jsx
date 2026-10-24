import windowImg from '../../assets/product-window.png';
import railingImg from '../../assets/work-railing-1.png';
import './Products.css';

const products = [
  {
    id: 'upvc-windows',
    title: 'Modern UPVC Windows',
    desc: 'Explore different window styles for homes, apartments, offices, and other spaces. Find options that suit your preferred appearance, ventilation requirements, and room layout.',
    img: windowImg,
    cta: 'Explore Windows',
    link: '#window-types',
  },
  {
    id: 'ssr-railing',
    title: 'Stylish SSR Railing',
    desc: 'Explore railing solutions for suitable residential and commercial applications. Discuss your preferred design, intended use, and project requirements with us.',
    img: railingImg,
    cta: 'Explore Railing',
    link: '#our-work',
  },
];

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="blob blob-gold" style={{ width: 300, height: 300, top: -80, right: -80 }}></div>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">OUR PRODUCTS</span>
          <h2 className="section-title">Explore Our Windows & <span>Railing Solutions</span></h2>
          <p className="section-subtitle">
            Discover modern UPVC windows and SSR railing solutions for residential and
            commercial spaces. Explore the available designs and contact Tirupati Balaji
            to discuss your requirements.
          </p>
        </div>

        <div className="grid-2 product-grid">
          {products.map((p) => (
            <div className="product-card glass-light" key={p.id}>
              <div className="product-img-wrap">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="product-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} className="btn btn-green">{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}