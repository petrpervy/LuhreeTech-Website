'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Clock, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  teamSize: string
  primaryGoal: string
  automation: string
}

const teamSizeOptions = [
  '1-5 people',
  '6-15 people', 
  '16-50 people',
  '50+ people'
]

const goalOptions = [
  'Reduce manual data entry',
  'Improve customer response time',
  'Automate scheduling & reminders',
  'Streamline lead intake',
  'Other'
]

export function ContactPanel() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    primaryGoal: '',
    automation: ''
  })
  
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.teamSize) newErrors.teamSize = 'Team size is required'
    if (!formData.primaryGoal) newErrors.primaryGoal = 'Primary goal is required'
    if (!formData.automation.trim()) newErrors.automation = 'Please describe what you want to automate'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For now, just log the form data
      console.log('Contact form submitted:', formData)
      
      setIsSuccess(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }
  
  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-teal-500" />
        </div>
        <h3 className="text-xl font-semibold text-ink mb-2">Thanks for reaching out!</h3>
        <p className="text-ink/70 mb-6">We'll reply within 24 hours with next steps.</p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" asChild>
            <a href="/contact#book">Book audit</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/case-studies">See case studies</a>
          </Button>
        </div>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`
              w-full px-3 py-2 rounded-lg border bg-white/50 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2
              ${errors.name ? 'border-red-300' : 'border-white/40'}
            `}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`
              w-full px-3 py-2 rounded-lg border bg-white/50 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2
              ${errors.email ? 'border-red-300' : 'border-white/40'}
            `}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink mb-1">
          Company *
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          className={`
            w-full px-3 py-2 rounded-lg border bg-white/50 backdrop-blur-sm
            focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2
            ${errors.company ? 'border-red-300' : 'border-white/40'}
          `}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-xs text-red-500">{errors.company}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="teamSize" className="block text-sm font-medium text-ink mb-1">
            Team Size *
          </label>
          <select
            id="teamSize"
            value={formData.teamSize}
            onChange={(e) => handleInputChange('teamSize', e.target.value)}
            className={`
              w-full px-3 py-2 rounded-lg border bg-white/50 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2
              ${errors.teamSize ? 'border-red-300' : 'border-white/40'}
            `}
            aria-invalid={!!errors.teamSize}
            aria-describedby={errors.teamSize ? 'teamSize-error' : undefined}
          >
            <option value="">Select team size</option>
            {teamSizeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.teamSize && (
            <p id="teamSize-error" className="mt-1 text-xs text-red-500">{errors.teamSize}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="primaryGoal" className="block text-sm font-medium text-ink mb-1">
            Primary Goal *
          </label>
          <select
            id="primaryGoal"
            value={formData.primaryGoal}
            onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
            className={`
              w-full px-3 py-2 rounded-lg border bg-white/50 backdrop-blur-sm
              focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2
              ${errors.primaryGoal ? 'border-red-300' : 'border-white/40'}
            `}
            aria-invalid={!!errors.primaryGoal}
            aria-describedby={errors.primaryGoal ? 'primaryGoal-error' : undefined}
          >
            <option value="">Select primary goal</option>
            {goalOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.primaryGoal && (
            <p id="primaryGoal-error" className="mt-1 text-xs text-red-500">{errors.primaryGoal}</p>
          )}
        </div>
      </div>
      
      <div>
        <label htmlFor="automation" className="block text-sm font-medium text-ink mb-1">
          What would you like to automate? *
        </label>
        <textarea
          id="automation"
          rows={3}
          value={formData.automation}
          onChange={(e) => handleInputChange('automation', e.target.value)}
          className={`
            w-full px-3 py-2 rounded-lg border bg-white/50 backdrop-blur-sm
            focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:ring-offset-2
            resize-none
            ${errors.automation ? 'border-red-300' : 'border-white/40'}
          `}
          aria-invalid={!!errors.automation}
          aria-describedby={errors.automation ? 'automation-error' : undefined}
          placeholder="Describe your current workflow and what you'd like to improve..."
        />
        {errors.automation && (
          <p id="automation-error" className="mt-1 text-xs text-red-500">{errors.automation}</p>
        )}
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary" 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
              <span className="ml-2">Sending...</span>
            </>
          ) : (
            'Send message'
          )}
        </Button>
      </div>
      
      <p className="text-xs text-ink/60 text-center">
        No spam. We reply within 24h.
      </p>
      
      {/* Live region for form status */}
      <div role="status" aria-live="polite" className="sr-only">
        {isSubmitting ? 'Submitting form...' : ''}
      </div>
    </form>
  )
}


