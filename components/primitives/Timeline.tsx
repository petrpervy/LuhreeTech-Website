'use client'
import React from 'react'

type Step = { title: string; body: string }

export function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-5 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full" />
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <li key={s.title} className="relative">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-lime-200/80 ring-1 ring-white/40 text-brand-ink font-semibold">{i + 1}</div>
            <h4 className="mt-4 text-h3 text-brand-ink">{s.title}</h4>
            <p className="mt-2 text-brand-gray-mid max-w-prose">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}


