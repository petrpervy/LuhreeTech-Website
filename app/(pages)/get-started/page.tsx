import { ContactForm } from '@/components/ContactForm'

export const metadata = { title: 'Get Started' }

export default function GetStartedPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-5xl font-bold text-white">Get Started</h1>
      <div className="glass-deep p-8">
        <ContactForm />
      </div>
    </section>
  )
}


