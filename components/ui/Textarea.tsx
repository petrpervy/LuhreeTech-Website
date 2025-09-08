import { cn } from '@/lib/cn'
import React from 'react'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helpText?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, label, error, helpText, id, ...props },
  ref
) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  const errorId = error ? `${textareaId}-error` : undefined
  const helpId = helpText ? `${textareaId}-help` : undefined

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        aria-describedby={cn(errorId, helpId)}
        aria-invalid={error ? 'true' : 'false'}
        className={cn('w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50 transition-all duration-300 resize-vertical glass-frost glass-ripple', className)}
        {...props}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={helpId} className="text-sm text-gray-500">
          {helpText}
        </p>
      )}
    </div>
  )
})


