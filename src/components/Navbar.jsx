import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'
import { supabase } from '../lib/supabase'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user } = useAuth()
  const location = useLocation()

  async function handleSignOut() {
    await supabase.auth.signOut()
    setOpen(false)
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#fff', borderBottom: '1px solid #e5e5e5'
    }}>
      <nav style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#16a34a', textDecoration: 'none' }}>
          Mabood WebStudios
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                color: location.pathname === l.to ? '#16a34a' : '#111',
                transition: 'color 0.2s'
              }}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }} className="desktop-nav">
          {user ? (
            <>
              <span style={{ fontSize: '0.85rem', color: '#555' }}>
                {user.email?.split('@')[0]}
              </span>
              <button onClick={handleSignOut} className="btn btn-ghost btn-sm">Sign out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
              <Link to="/signup" className="btn btn-primary btn-sm">Sign up</Link>
            </>
          )}
          <Link to="/contact" className="btn btn-primary btn-sm">Get a Quote</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger-btn"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid #e5e5e5', padding: '1rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          background: '#fff'
        }} className="mobile-menu">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              onClick={() => setOpen(false)}
              style={{
                textDecoration: 'none', fontSize: '1rem', fontWeight: 500,
                color: '#111', padding: '0.6rem 0.75rem', borderRadius: '0.4rem'
              }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {user ? (
              <button onClick={handleSignOut} className="btn btn-ghost btn-sm">Sign out</button>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="btn btn-outline">Log in</Link>
                <Link to="/signup" onClick={() => setOpen(false)} className="btn btn-primary">Sign up</Link>
              </>
            )}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary">Get a Quote</Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
