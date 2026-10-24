import { useState } from 'react';
import './FAQs.css';

const faqData = {
  'UPVC Basics': [
    { q: 'What is UPVC?', a: 'UPVC stands for unplasticised polyvinyl chloride. It is a rigid material commonly used to manufacture window and door frames.' },
    { q: 'What are the benefits of UPVC windows?', a: 'UPVC windows offer straightforward maintenance and resistance to moisture. Suitable configurations can also provide thermal and acoustic insulation benefits, depending on glazing, seals, and installation.' },
    { q: "Are UPVC windows suitable for Rajasthan's climate?", a: 'They can be suitable when the profiles, glazing, hardware, and installation are selected appropriately for the climate and building requirements.' },
    { q: 'What is the difference between UPVC and aluminium windows?', a: 'UPVC and aluminium differ in material properties, appearance, frame design, and maintenance requirements. The right choice depends on application, budget, and performance requirements.' },
  ],
  'UPVC Windows': [
    { q: 'What types of UPVC windows are available?', a: 'Common styles include sliding, casement, fixed, and tilt-and-turn windows. Availability depends on the supplier\'s product range.' },
    { q: 'Are UPVC windows easy to maintain?', a: 'Yes. They generally require routine cleaning and periodic checks of their hardware, seals, and drainage openings.' },
    { q: 'Can UPVC windows help reduce outside noise?', a: 'Suitable window systems can help reduce outside noise. Actual performance depends on the glazing, seals, frame configuration, and installation.' },
    { q: 'Are UPVC windows available in different designs?', a: 'UPVC windows are available in various styles, configurations, and finishes, depending on the supplier\'s product range.' },
    { q: 'How long do UPVC windows last?', a: 'Their lifespan depends on the quality of the profiles, hardware, glazing, installation, environmental exposure, and maintenance.' },
  ],
  'SSR Railing': [
    { q: 'What types of railing do you offer?', a: 'Contact Tirupati Balaji to confirm the railing materials, designs, and configurations currently available.' },
    { q: 'Where can railing be installed?', a: 'Depending on product specifications, railing may be suitable for staircases, balconies, terraces, and other applications.' },
    { q: 'Can I enquire about a specific railing design?', a: 'Yes. Share your preferred design, intended application, approximate dimensions, and photographs of the area so available options can be discussed.' },
  ],
  'Pricing & Quotations': [
    { q: 'What is the price of UPVC windows in Fatehpur Shekhawati?', a: 'Pricing depends on dimensions, quantity, window style, glazing, hardware, and the agreed supply and installation scope.' },
    { q: 'How can I get a quotation?', a: 'Call 8976922929 or message us with your location, preferred product, approximate dimensions, and quantity.' },
    { q: 'Is installation included in the product price?', a: 'Installation, transportation, and related charges depend on the agreed scope of work. Confirm these details in your quotation.' },
  ],
  'Installation & Planning': [
    { q: 'Do I need measurements before ordering UPVC windows?', a: 'Accurate measurements are important. A site measurement may be needed to confirm opening dimensions and installation requirements.' },
    { q: 'How long does installation take?', a: 'The timeline depends on the number of windows, site conditions, product availability, and installation requirements.' },
    { q: 'Can I enquire about UPVC windows for a new house?', a: 'Yes. Share your plans, approximate dimensions, or photographs so your requirements can be discussed.' },
    { q: 'Can I replace existing windows with UPVC windows?', a: 'Replacement may be possible depending on the opening dimensions, existing frames, wall condition, and installation requirements.' },
  ],
  'Location & Service Areas': [
    { q: 'Where is Tirupati Balaji located?', a: 'Near Panchayat Samiti, opposite Surya Mandal, Sikar Road, Fatehpur Shekhawati, Rajasthan.' },
    { q: 'Do you serve customers outside Fatehpur Shekhawati?', a: 'We welcome enquiries from nearby areas. Contact us with your location to confirm availability.' },
    { q: 'How can I contact Tirupati Balaji?', a: 'Call 8976922929 to discuss UPVC window and railing requirements.' },
  ],
};

const categories = Object.keys(faqData);

export default function FAQs() {
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faqs" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">NEED HELP?</span>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <p className="section-subtitle">
            Find answers to common questions about UPVC windows, SSR railing,
            quotations, and service availability.
          </p>
        </div>

        <div className="faq-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`faq-tab ${activeCat === cat ? 'active' : ''}`}
              onClick={() => { setActiveCat(cat); setOpenIndex(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {faqData[activeCat].map((item, i) => (
            <div className={`faq-item glass-light ${openIndex === i ? 'open' : ''}`} key={item.q}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <a href="#contact" className="btn btn-gold">Still Have Questions? Contact Us</a>
        </div>
      </div>
    </section>
  );
}