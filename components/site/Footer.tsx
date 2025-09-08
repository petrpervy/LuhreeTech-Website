import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Star } from 'lucide-react'
import { getFooterData, getNavCta, getBrandData } from '@/lib/content'

export function Footer() {
  const footerData = getFooterData()
  const navCta = getNavCta()
  const brandData = getBrandData()

  return (
    <footer className="border-t border-base-border bg-base-light/50" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <span className="text-h3 font-bold text-base-ink">{brandData.name}</span>
            </div>
            <p className="text-body text-base-gray max-w-md">
              {brandData.one_liner}
            </p>
            <Button variant="primary" size="sm" asChild>
              <Link href={navCta.href} className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                {navCta.label}
              </Link>
            </Button>
          </div>

          {/* Footer Columns */}
          {footerData.columns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-body font-semibold text-base-ink">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-body text-base-gray hover:text-primary-lime transition-colors focus-visible:ring-2 focus-visible:ring-primary-lime focus-visible:ring-offset-2 rounded"
                    >
                      {link.label}
                      {link.note && <span className="text-xs text-base-gray/60 ml-1">({link.note})</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-base-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-small text-base-gray">
            {footerData.disclaimer}
          </div>
        </div>
      </div>
    </footer>
  )
}
