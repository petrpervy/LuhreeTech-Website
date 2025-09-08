"use client"
import { useEffect, useState } from 'react'
import { GlassCard } from './GlassCard'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'
import { Button } from './ui/Button'

export function TryItModal() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    function onHash() { setOpen(location.hash === '#try-it') }
    onHash();
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <GlassCard className="max-w-lg w-full p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold">Tell us your automation idea</h3>
          <a href="#" className="text-white/60">Close</a>
        </div>
        <form className="space-y-3">
          <Input placeholder="Company / Team" />
          <Textarea rows={5} placeholder="Describe the workflow to automate" />
          <div className="flex gap-2">
            <Button>Submit</Button>
            <Button asChild className="bg-brand-teal text-black hover:bg-brand-teal/90"><a href="/get-started">Get Started</a></Button>
          </div>
        </form>
      </GlassCard>
    </div>
  )
}


