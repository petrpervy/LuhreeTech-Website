'use client'

import { useEffect } from 'react'
import CardGlass from '@/components/ui/CardGlass'
import { Button } from '@/components/ui/Button'
import { Home, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <CardGlass className="p-8 text-center">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-brand-ink mb-4">Something went wrong</h1>
          <p className="text-brand-gray mb-8">
            We encountered an unexpected error. Please try again or contact us if the problem persists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={reset}
              variant="ghost"
            >
              Try again
            </Button>
            <Link href="/">
              <Button variant="primary">
                <Home className="w-4 h-4 mr-2" />
                Go home
              </Button>
            </Link>
          </div>
        </CardGlass>
      </div>
    </div>
  )
}
