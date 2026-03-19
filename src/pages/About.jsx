import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main>
      <div className="page-hero">
        <h1>About Us</h1>
        <p>The story behind Mabood WebStudios</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#16a34a' }}>
                Who We Are
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Mabood WebStudios is a web development agency founded by Kiasatul Mabood, a 16-year-old developer from Kolkata, India. We build clean, fast, and professional websites for small businesses across India — at prices that actually make sense.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#16a34a' }}>
                Our Mission
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                We believe every small business deserves a professional online presence. Our mission is to make high-quality web development accessible and affordable for businesses of all sizes — from local shops in Kolkata to entrepreneurs across India.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#16a34a' }}>
                The Founder
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Hi, I'm Kiasatul — a Class 11 Science student and self-taught developer. I started coding with HTML and CSS, and have since built multiple live projects using React, Supabase, JavaScript, Python, and more. I founded Mabood WebStudios to help businesses grow online while building real-world experience as a developer.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#16a34a' }}>
                Our Tech Stack
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Supabase', 'TailwindCSS', 'Python', 'Java', 'Git', 'Vite', 'Vercel'].map(t => (
                  <span key={t} className="tag" style={{ fontSize: '0.875rem', padding: '0.3rem 0.8rem' }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
