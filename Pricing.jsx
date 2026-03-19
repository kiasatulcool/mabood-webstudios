import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic',
    price: '₹2,999',
    desc: 'Perfect for individuals and small shops',
    popular: false,
    features: ['1-page landing site', 'Mobile responsive', 'Contact form', 'WhatsApp button', 'Google Maps link', 'Delivery in 3 days'],
  },
  {
    name: 'Standard',
    price: '₹5,999',
    desc: 'Best for growing businesses',
    popular: true,
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form + email alerts', 'Google Maps integration', 'Basic SEO setup', 'Delivery in 5 days'],
  },
  {
    name: 'Premium',
    price: '₹9,999',
    desc: 'For businesses that need everything',
    popular: false,
    features: ['Unlimited pages', 'Supabase backend + database', 'Payment gateway integration', 'Google OAuth login', 'Admin dashboard', 'Delivery in 10 days'],
  },
]

export default function Pricing() {
  return (
    <main>
      <div className="page-hero">
        <h1>Simple Pricing</h1>
        <p>Transparent packages with no hidden fees. Pay once, own it forever.</p>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', maxWidth: 1000 }}>
          {plans.map(p => (
            <div key={p.name} style={{
              background: '#fff', border: p.popular ? '2px solid #16a34a' : '1px solid #e5e5e5',
              borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column',
              position: 'relative', transition: 'box-shadow 0.25s'
            }}>
              {p.popular && (
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: '#16a34a', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 1rem', borderRadius: 999, whiteSpace: 'nowrap' }}>
                  ⭐ Most Popular
                </div>
              )}
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#555', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.name}</div>
              <div style={{ marginTop: '0.75rem', fontSize: '2.25rem', fontWeight: 800, color: '#111' }}>{p.price} <span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#555' }}>one-time</span></div>
              <div style={{ marginTop: '0.4rem', fontSize: '0.875rem', color: '#555' }}>{p.desc}</div>
              <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.875rem', color: '#111' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" style={{ minWidth: 16, marginTop: 2 }} stroke="#16a34a" fill="none" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`btn ${p.popular ? 'btn-primary' : 'btn-outline'}`} style={{ marginTop: '2rem', textAlign: 'center' }}>
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div style={{ maxWidth: 600, margin: '2.5rem auto 0', textAlign: 'center', background: '#fff', border: '1px solid #e5e5e5', borderRadius: '1rem', padding: '1.5rem' }}>
          <strong style={{ display: 'block', fontSize: '1rem', color: '#111', marginBottom: '0.3rem' }}>🔧 Monthly Maintenance — ₹499/month</strong>
          <p style={{ fontSize: '0.875rem', color: '#555' }}>Includes updates, uptime monitoring, and minor edits. Available for all plans.</p>
        </div>
      </section>

      {/* Payment section */}
      <section className="section section-alt">
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="section-header">
            <h2>How to Pay</h2>
            <p>Simple and secure payment via UPI — no account needed</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: '1rem' }}>Payment Process</h3>
              <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem' }}>
                {[
                  'Contact us and confirm your package',
                  'We send you a project scope document',
                  'Pay 50% advance via UPI',
                  'Development begins',
                  'Pay remaining 50% on delivery',
                  'Website goes live 🚀',
                ].map((step, i) => (
                  <li key={i} style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>{step}</li>
                ))}
              </ol>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: '1rem', padding: '1.5rem', display: 'inline-block' }}>
                <p style={{ fontWeight: 700, marginBottom: '1rem', color: '#111' }}>Scan to Pay</p>
                <img
                  src="/gpay-qr.png"
                  alt="GPay QR Code - kiasatulmabood@oksbi"
                  style={{ width: 180, height: 180, borderRadius: '0.5rem' }}
                />
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#555' }}>
                  UPI ID: <strong>kiasatulmabood@oksbi</strong>
                </p>
                <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '0.25rem' }}>
                  Works with GPay, PhonePe, Paytm, any UPI app
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Still have questions?</h2>
          <p style={{ marginTop: '0.75rem', color: '#555' }}>Get in touch and I'll answer everything before you commit.</p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
