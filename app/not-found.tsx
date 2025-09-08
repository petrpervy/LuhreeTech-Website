import Link from 'next/link'
import CardGlass from '@/components/ui/CardGlass'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <CardGlass className="p-8 text-center">
          <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-8 h-8 text-brand-lime" />
          </div>
          
          <h1 className="text-4xl font-bold text-brand-ink mb-4">404</h1>
          <h2 className="text-xl font-semibold text-brand-ink mb-4">Page Not Found</h2>
          <p className="text-brand-gray mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary">
                <Home className="w-4 h-4 mr-2" />
                Back Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </CardGlass>
      </div>
    </div>
  )
}


