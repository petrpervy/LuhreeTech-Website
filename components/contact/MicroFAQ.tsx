'use client'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What happens on the audit?",
    answer: "We map calls/forms/workflows (~30min), define 'done', and outline a go-live plan."
  },
  {
    question: "How soon can we launch?",
    answer: "Usually 1–2 weeks post-audit depending on integrations."
  },
  {
    question: "Do you replace staff?",
    answer: "No—our digital employees offload routine so your team focuses on high-value work."
  },
  {
    question: "What if we're not ready?",
    answer: "No pressure. We'll share quick wins you can implement today, and stay in touch for when you're ready."
  }
]

export function MicroFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  
  return (
    <div className="space-y-2">
      {faqItems.map((item, index) => (
        <div key={index} className="border border-white/20 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2"
            aria-expanded={openItems.has(index)}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-sm font-medium text-ink">{item.question}</span>
            {openItems.has(index) ? (
              <ChevronDown className="w-4 h-4 text-ink/60 flex-shrink-0" />
            ) : (
              <ChevronRight className="w-4 h-4 text-ink/60 flex-shrink-0" />
            )}
          </button>
          
          {openItems.has(index) && (
            <div
              id={`faq-answer-${index}`}
              className="px-4 pb-3 text-sm text-ink/70 leading-relaxed"
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}


