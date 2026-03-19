import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'LevelUp',
    desc: 'A self-improvement web app with AI-generated schedules, habit streaks, leaderboard, and productivity tracking.',
    tags: ['React', 'Supabase', 'AI', 'TailwindCSS'],
    live: 'https://kiasatulcool.github.io/levelup',
    source: 'https://github.com/kiasatulcool/levelup',
    bg: 'linear-gradient(135deg, #16a34a, #052e16)',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="#16a34a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    label: 'Self-Improvement App',
  },
  {
    title: 'Smart Study Buddy',
    desc: 'A study platform for Class 9–12 students with timetable generation, habit tracking, and AI-powered adaptive tests.',
    tags: ['React', 'AI', 'HTML', 'CSS'],
    live: 'https://lusac.lovable.app',
    source: null,
    bg: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="#1d4ed8" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    label: 'Study Platform',
  },
  {
    title: 'TutorConnect',
    desc: 'A platform connecting tutors with students for personalized learning with profiles, dashboards, and session scheduling.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://kiasatulcool.github.io/Tutorconnect.github.io',
    source: 'https://github.com/kiasatulcool/Tutorconnect.github.io',
    bg: 'linear-gradient(135deg, #b45309, #451a03)',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="#b45309" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'EdTech Platform',
  },
  {
    title: 'Mabood WebStudios',
    desc: 'The agency website you\'re currently viewing — built with React, Supabase auth, rate limiting, and full multi-page routing.',
    tags: ['React', 'Supabase', 'Vite', 'Vercel'],
    live: '/',
    source: 'https://github.com/kiasatulcool/mabood-webstudios',
    bg: 'linear-gradient(135deg, #16a34a, #0f4c25)',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" stroke="#16a34a" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: 'Agency Website',
  },
]

export default function Portfolio() {
  return (
    <main>
      <div className="page-hero">
        <h1>Our Work</h1>
        <p>Real projects built with clean code and attention to detail</p>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
          {projects.map(p => (
            <div key={p.title} style={{
              border: '1px solid #e5e5e5', borderRadius: '1rem', overflow: 'hidden',
              transition: 'all 0.25s', background: '#fff'
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
            >
              {/* Thumbnail */}
              <div style={{ width: '100%', height: 180, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.95)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                    {p.icon}
                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, color: '#333' }}>
                    {p.label}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href={p.live} target={p.live.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 600, color: '#16a34a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', border: '1.5px solid #dcfce7', padding: '0.3rem 0.75rem', borderRadius: '0.4rem', transition: 'all 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#dcfce7'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >🌐 Live Demo</a>
                  {p.source && (
                    <a href={p.source} target="_blank" rel="noreferrer"
                      style={{ fontSize: '0.85rem', fontWeight: 600, color: '#16a34a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', border: '1.5px solid #dcfce7', padding: '0.3rem 0.75rem', borderRadius: '0.4rem', transition: 'all 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#dcfce7'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >⚙️ Source</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#555', marginBottom: '1rem' }}>Want to see more? Check out all projects on GitHub.</p>
          <a href="https://github.com/kiasatulcool" target="_blank" rel="noreferrer" className="btn btn-outline">
            ⚙️ View GitHub Profile
          </a>
        </div>
      </section>

      <section className="section section-alt">
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Want us to build something for you?</h2>
          <p style={{ marginTop: '0.75rem', color: '#555' }}>Every project is built from scratch — no templates, no shortcuts.</p>
          <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: '1.5rem' }}>
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  )
}
