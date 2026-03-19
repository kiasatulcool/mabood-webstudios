export default function TermsOfService() {
  return (
    <main>
      <div className="page-hero">
        <h1>Terms of Service</h1>
        <p>Last updated: March 2026</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.8 }}>

            {[
              {
                title: '1. Acceptance of Terms',
                content: 'By accessing and using Mabood WebStudios ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
              },
              {
                title: '2. Services',
                content: `Mabood WebStudios provides web development services including but not limited to:
                \n• Landing page design and development
                \n• Business website development
                \n• E-commerce store development
                \n• Website maintenance\n\nAll services are subject to separate project agreements.`
              },
              {
                title: '3. Payment Terms',
                content: `• A 50% advance payment is required before project commencement
                \n• Remaining 50% is due upon project completion before delivery
                \n• Payments are non-refundable once development work has begun
                \n• Prices are quoted in Indian Rupees (INR)
                \n• Payment methods: UPI, bank transfer`
              },
              {
                title: '4. Project Timeline',
                content: `Delivery timelines are estimates and may vary based on:
                \n• Complexity of requirements
                \n• Timely provision of content and feedback by the client
                \n• Revisions requested beyond the agreed scope\n\nWe will communicate any delays promptly.`
              },
              {
                title: '5. Intellectual Property',
                content: `• Upon full payment, the client owns all rights to the final deliverable
                \n• Mabood WebStudios retains the right to showcase the project in our portfolio unless the client requests otherwise
                \n• Third-party assets (fonts, images, libraries) are subject to their respective licenses`
              },
              {
                title: '6. Revisions',
                content: `Each package includes a set number of revision rounds:
                \n• Basic: 2 rounds of revisions
                \n• Standard: 3 rounds of revisions
                \n• Premium: 5 rounds of revisions\n\nAdditional revisions are charged at ₹500 per round.`
              },
              {
                title: '7. User Accounts',
                content: `If you create an account on our website:
                \n• You are responsible for maintaining the confidentiality of your password
                \n• You are responsible for all activities under your account
                \n• You must notify us immediately of any unauthorized use
                \n• We reserve the right to terminate accounts that violate these terms`
              },
              {
                title: '8. Limitation of Liability',
                content: `Mabood WebStudios shall not be liable for any indirect, incidental, or consequential damages arising from use of our services. Our total liability shall not exceed the amount paid for the specific service in question.`
              },
              {
                title: '9. Governing Law',
                content: 'These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Kolkata, West Bengal.'
              },
              {
                title: '10. Contact',
                content: 'For questions about these Terms, contact us at:\n\nEmail: kiasatulmabood@gmail.com\nLocation: Kolkata, West Bengal, India'
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
