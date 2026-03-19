import { useState } from 'react'
import { checkRateLimit, recordRateLimit, submitContact } from '../lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      // Rate limit check — max 3 submissions per email per hour
      const limited = await checkRateLimit(form.email)
      if (limited) {
        setStatus({ type: 'error', msg: 'Too many submissions. Please wait an hour before trying again.' })
        setLoading(false)
        return
      }

      // Submit to Supabase
      const { error } = await submitContact({
        name: form.name,
        email: form.email,
        subject: form.subject || 'No subject',
        message: form.message,
      })

      if (error) throw error

      // Record rate limit entry
      await recordRateLimit(form.email)

      // Also send via Formspree as email notification
      await fetch('https://formspree.io/f/xreyaavq', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      })

      setStatus({ type: 'success', msg: "Thanks! I'll get back to you within 24 hours." })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong. Email directly: kiasatulmabood@gmail.com' })
    }

    setLoading(false)
  }

  const info = [
    { icon: '📧', label: 'kiasatulmabood@gmail.com', href: 'mailto:kiasatulmabood@gmail.com' },
    { icon: '📱', label: '+91 74399 38849', href: 'tel:+917439938849' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kiasatul-mabood-8146923b7' },
    { icon: '⚙️', label: 'github.com/kiasatulcool', href: 'https://github.com/kiasatulcool' },
    { icon: '📍', label: 'Kolkata, West Bengal, India', href: null },
  ]

  return (
    <main>
      <div className="page-hero">
        <h1>Get In Touch</h1>
        <p>Have a project in mind? I'll get back to you within 24 hours.</p>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: 900 }}>

          {/* Form */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry" />
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project, budget, and timeline..." required />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <div className={`form-status ${status.type}`} style={{ marginTop: '1rem' }}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {info.map(i => (
                <div key={i.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>{i.icon}</span>
                  {i.href ? (
                    <a href={i.href} target={i.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                      style={{ color: '#16a34a', textDecoration: 'none', fontSize: '0.9rem' }}>
                      {i.label}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.9rem', color: '#555' }}>{i.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', background: '#f9fafb', border: '1px solid #e5e5e5', borderRadius: '1rem', padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.95rem' }}>⏱️ Response Time</h3>
              <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>
                I typically respond within <strong>2–4 hours</strong> during the day and within 24 hours otherwise. For urgent projects, call or WhatsApp directly.
              </p>
            </div>

            <div style={{ marginTop: '1rem', background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '1rem', padding: '1.5rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '0.95rem', color: '#15803d' }}>🎁 Free Consultation</h3>
              <p style={{ fontSize: '0.875rem', color: '#166534', lineHeight: 1.7 }}>
                First consultation is completely free. I'll review your requirements and give you an honest recommendation before you spend anything.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
