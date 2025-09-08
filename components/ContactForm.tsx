"use client"
import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm } from '@/app/(pages)/contact/actions'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Button } from './ui/Button'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button 
      type="submit" 
      variant="primary" 
      size="md" 
      disabled={pending}
    >
      {pending ? 'Sending…' : 'Send Message'}
    </Button>
  )
}

export function ContactForm() {
  const [state, action] = useFormState(async (_prev: any, formData: FormData) => {
    const result = await submitContactForm(formData)
    return result
  }, null)

  return (
    <div className="glass-liquid glass-glow glass-ripple card p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Free Audit</h2>
      <form action={action} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Email" required />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Input name="company" placeholder="Company" />
          <Input name="size" placeholder="Team size" />
          <Input name="goal" placeholder="Primary goal" />
        </div>
        <Textarea name="message" rows={5} placeholder="What would you like to automate?" required />
        <div className="space-y-4">
          <SubmitButton />
          {state?.ok ? (
            <div className="text-sm text-green-600 bg-green-50 px-4 py-2 rounded-lg">
              Thanks! We'll get back within 24h.
            </div>
          ) : state?.error ? (
            <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
              {state.error}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  )
}


