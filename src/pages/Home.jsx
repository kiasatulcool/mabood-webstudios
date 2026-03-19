import { Link } from 'react-router-dom'

const services = [
  { icon: '🎯', title: 'Landing Pages', desc: 'High-converting pages designed to capture leads and drive action.' },
  { icon: '🌐', title: 'Business Websites', desc: 'Professional, responsive websites that establish credibility and attract customers.' },
  { icon: '🛒', title: 'E-Commerce Stores', desc: 'Full-featured online stores with secure payments and seamless shopping.' },
]

const benefits = [
  { title: 'Fast Delivery', desc: 'Your project delivered on time, every time. 3–10 day turnaround.' },
  { title: 'Mobile Responsive', desc: 'Perfect on all devices — phones, tablets, and desktops.' },
  { title: 'Affordable Pricing', desc: 'Starting at ₹2,999. No hidden fees, no surprises.' },
  { title: 'Clean Code', desc: 'Well-structured, maintainable code built to scale.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '6rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: '#dcfce7', color: '#16a34a',
            fontSize: '0.825rem', fontWeight: 700, padding: '0.3rem 1rem',
            borderRadius: 999, marginBottom: '1.5rem', letterSpacing: '0.05em'
          }}>
            WEB DEVELOPMENT AGENCY — KOLKATA
          </div>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-0.02em', color: '#111'
          }}>
            We Build Websites That<br />
            <span style={{ color: '#16a34a', fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
              Work For Your Business
            </span>
          </h1>
          <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', color: '#555', maxWidth: 550, margin: '1.5rem auto 0' }}>
            Professional web development for small businesses across India. Fast, affordable, and built to convert.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/portfolio" className="btn btn-primary btn-lg">View Our Work</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Get a Free Quote</Link>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#888' }}>
            Starting at <strong style={{ color: '#16a34a' }}>₹2,999</strong> · 3–10 day delivery · Free consultation
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section section-alt">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Everything you need to establish a powerful online presence</p>
        </div>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
          {services.map(s => (
            <div key={s.title} className="card">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.93rem', color: '#555', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>We deliver excellence in every project we undertake</p>
        </div>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {benefits.map(b => (
            <div key={b.title} style={{ display: 'flex', gap: '1rem' }}>
              <div style={{
                width: 36, height: 36, minWidth: 36, background: '#dcfce7',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="#16a34a" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{b.title}</h3>
                <p style={{ marginTop: '0.35rem', fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
            Ready to get your website built?
          </h2>
          <p style={{ marginTop: '0.75rem', color: '#555', fontSize: '1rem' }}>
            Get a free consultation and quote within 24 hours.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Project</Link>
            <Link to="/pricing" className="btn btn-outline btn-lg">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
