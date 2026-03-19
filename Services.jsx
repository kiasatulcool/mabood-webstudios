import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🎯',
    title: 'Landing Pages',
    price: 'From ₹2,999',
    desc: 'High-converting landing pages designed to capture leads and drive action. Perfect for product launches, campaigns, and promotions.',
    features: ['Single page design', 'Mobile responsive', 'Contact form', 'WhatsApp button', 'Fast loading', '3-day delivery'],
  },
  {
    icon: '🌐',
    title: 'Business Websites',
    price: 'From ₹5,999',
    desc: 'Professional multi-page websites that showcase your brand, services, and build credibility with your customers.',
    features: ['Up to 5 pages', 'Mobile responsive', 'Contact form + email', 'Google Maps', 'Basic SEO', '5-day delivery'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Stores',
    price: 'From ₹9,999',
    desc: 'Full-featured online stores with secure payment integration, product management, and seamless shopping experience.',
    features: ['Unlimited products', 'Payment gateway', 'Order management', 'Customer accounts', 'Admin dashboard', '10-day delivery'],
  },
  {
    icon: '⚙️',
    title: 'Custom Web Apps',
    price: 'Custom pricing',
    desc: 'Complex web applications with custom features, user authentication, database, and backend — built to your specifications.',
    features: ['Custom features', 'Supabase backend', 'User auth', 'Database design', 'API integration', 'Timeline varies'],
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    price: '₹499/month',
    desc: 'Keep your website running smoothly with regular updates, security checks, and content changes.',
    features: ['Monthly updates', 'Uptime monitoring', 'Content edits', 'Security checks', 'Bug fixes', 'Priority support'],
  },
  {
    icon: '📱',
    title: 'Responsive Redesign',
    price: 'From ₹3,999',
    desc: 'Already have a website that looks bad on mobile? We\'ll redesign it to be fully responsive and modern.',
    features: ['Mobile-first design', 'Performance boost', 'Modern UI', 'SEO improvements', 'Fast delivery', '5-day delivery'],
  },
]

export default function Services() {
  return (
    <main>
      <div className="page-hero">
        <h1>Our Services</h1>
        <p>Professional web development solutions for every business need</p>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {services.map(s => (
            <div key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{s.title}</h3>
                <span style={{ background: '#dcfce7', color: '#16a34a', fontSize: '0.825rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: 999 }}>
                  {s.price}
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#111' }}>
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#16a34a" fill="none" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                Get a Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Not sure what you need?</h2>
          <p style={{ marginTop: '0.75rem', color: '#555' }}>
            Get in touch and I'll help you figure out the best solution for your business.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
            Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
