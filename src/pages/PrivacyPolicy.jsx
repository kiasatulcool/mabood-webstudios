export default function PrivacyPolicy() {
  return (
    <main>
      <div className="page-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: March 2026</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.8 }}>

            {[
              {
                title: '1. Information We Collect',
                content: `When you use Mabood WebStudios ("we", "our", "us"), we may collect the following information:
                \n• Contact form submissions: name, email address, and message content
                \n• Account information: email address and password (if you create an account)
                \n• Usage data: pages visited, time spent, browser type, and IP address (collected automatically)
                \n• Cookies: we use cookies to improve your experience on our website`
              },
              {
                title: '2. How We Use Your Information',
                content: `We use the information we collect to:
                \n• Respond to your inquiries and provide our services
                \n• Send project updates and communications
                \n• Improve our website and services
                \n• Display relevant advertisements (via Google AdSense)
                \n• Comply with legal obligations`
              },
              {
                title: '3. Google AdSense',
                content: `We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings at https://adssettings.google.com.`
              },
              {
                title: '4. Data Storage',
                content: `Your data is stored securely using Supabase, a cloud database provider. Contact form submissions are stored to allow us to respond to your inquiries. We do not sell your personal data to third parties.`
              },
              {
                title: '5. Cookies',
                content: `We use cookies and similar tracking technologies to improve your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly.`
              },
              {
                title: '6. Third-Party Services',
                content: `Our website uses the following third-party services:
                \n• Supabase (database and authentication)
                \n• Google AdSense (advertising)
                \n• Formspree (contact form email delivery)
                \n• Vercel (website hosting)
                \n• Google Fonts (typography)\n\nEach of these services has their own privacy policies.`
              },
              {
                title: '7. Your Rights',
                content: `You have the right to:
                \n• Access the personal data we hold about you
                \n• Request correction of inaccurate data
                \n• Request deletion of your data
                \n• Opt out of marketing communications\n\nTo exercise these rights, contact us at kiasatulmabood@gmail.com`
              },
              {
                title: '8. Children\'s Privacy',
                content: `Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.`
              },
              {
                title: '9. Changes to This Policy',
                content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.`
              },
              {
                title: '10. Contact Us',
                content: `If you have questions about this Privacy Policy, contact us at:\n\nEmail: kiasatulmabood@gmail.com\nLocation: Kolkata, West Bengal, India`
              },
            ].map(section => (
              <div key={section.title}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111', marginBottom: '0.75rem' }}>
                  {section.title}
                </h2>
                <p style={{ color: '#555', whiteSpace: 'pre-line' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
