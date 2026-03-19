import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#111', padding: '3rem 1.5rem', textAlign: 'center' }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#16a34a', marginBottom: '1rem' }}>
        Mabood WebStudios
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {[
          ['/', 'Home'], ['/about', 'About'], ['/services', 'Services'],
          ['/portfolio', 'Portfolio'], ['/pricing', 'Pricing'], ['/contact', 'Contact'],
          ['/privacy-policy', 'Privacy Policy'], ['/terms-of-service', 'Terms'],
        ].map(([to, label]) => (
          <Link key={to} to={to} style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}>
            {label}
          </Link>
        ))}
        <a href="https://github.com/kiasatulcool" target="_blank" rel="noreferrer"
          style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/kiasatul-mabood-8146923b7" target="_blank" rel="noreferrer"
          style={{ fontSize: '0.875rem', color: '#999', textDecoration: 'none' }}>
          LinkedIn
        </a>
      </div>
      <p style={{ fontSize: '0.8rem', color: '#555' }}>
        © {new Date().getFullYear()} Mabood WebStudios. All rights reserved. Built with ❤️ in Kolkata.
      </p>
    </footer>
  )
}
