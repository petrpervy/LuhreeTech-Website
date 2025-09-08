import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import { ContactForm } from '@/components/ContactForm'
import { ContactPanel } from '@/components/contact/ContactPanel'
import { MicroFAQ } from '@/components/contact/MicroFAQ'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with our AI automation experts'
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          <ContactForm />
          <ContactPanel />
        </div>
      </div>
      
      <MicroFAQ />
    </div>
  )
}