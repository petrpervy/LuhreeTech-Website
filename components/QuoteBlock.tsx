'use client'

interface QuoteBlockProps {
  quote: string
  author: string
  role?: string
  company?: string
}

export function QuoteBlock({ quote, author, role, company }: QuoteBlockProps) {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-soft">
      <div className="space-y-4">
        <div className="text-2xl text-theme-text leading-relaxed">
          "{quote}"
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-8 bg-theme-primary rounded-full"></div>
          <div>
            <div className="font-semibold text-theme-text">{author}</div>
            {role && company && (
              <div className="text-sm text-theme-muted">{role}, {company}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
