import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy',
}

export default function PrivacyPage() {
  return (
    <section className="prose prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>We only collect information you provide in the contact form. We do not sell data. For any request, email hello@example.com.</p>
      <p>This site does not use invasive tracking. Basic analytics are anonymized.</p>
    </section>
  )
}


