'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Star, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'
import { NAV_ITEMS, getNavPreviewData } from '@/lib/nav'
import { getNavCta } from '@/lib/content'
import { MegaPreview } from './mega-preview'
import Logo from '@/components/brand/Logo'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openKey, setOpenKey] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  
  const close = () => setOpenKey(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 6)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_12px_rgba(16,24,40,.08)]" data-scrolled={isScrolled}>
      <div className="px-4 md:px-6 py-3">
        <nav
          ref={navRef}
          className="mx-auto max-w-[1200px] flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="brand-hover focus:outline-none focus:ring-2 focus:ring-brand-teal/40 focus:ring-offset-2 focus:ring-offset-white"
            aria-label="Luhreetech - Home"
          >
            <Logo size={28} />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-[15px] relative">
            {NAV_ITEMS.map((item) => {
              const id = `nav-${item.key}`
              const isOpen = openKey === item.key
              return (
                <li 
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setOpenKey(item.key)}
                  onMouseLeave={() => isOpen && close()}
                >
                  <Link 
                    id={id}
                    href={item.href}
                    className={cn(
                      'rounded-pill px-3 py-1.5 hover:bg-white/60 hover:shadow-[var(--glass)] focus:outline-none focus:ring-2 focus:ring-brand-teal/40 transition duration-180',
                      pathname === item.href && 'text-brand-teal'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    onFocus={() => setOpenKey(item.key)}
                    onBlur={(e) => { 
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) close() 
                    }}
                  >
                    {item.label}
                  </Link>
                  {getNavPreviewData(item.key) && (
                    <MegaPreview 
                      open={isOpen} 
                      onClose={close} 
                      anchorId={id} 
                      item={getNavPreviewData(item.key)!} 
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          <Button 
            variant="primary" 
            className="btn-shine focus-ring rounded-full px-5 py-2.5 text-[15px]"
            asChild
          >
            <Link href={getNavCta().href}>
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4" /> 
                {getNavCta().label}
              </span>
            </Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-accent-teal-500 focus-ring"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3"
            >
              <div className="glass-strong p-3 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block rounded-xl px-3 py-2 hover:bg-white/70 focus-ring',
                      pathname === item.href && 'bg-accent-teal-500/10 text-accent-teal-500'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button 
                    variant="primary" 
                    className="w-full btn-shine focus-ring rounded-full"
                    asChild
                  >
                    <Link href={getNavCta().href} onClick={() => setIsOpen(false)}>
                      <span className="inline-flex items-center gap-2">
                        <Star className="h-4 w-4" /> 
                        {getNavCta().label}
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
