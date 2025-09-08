"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "../ui/Button"

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "ROI Calculator", href: "/roi-calculator" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
]

export default function Nav(){
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container">
        <nav className={`transition-all duration-300 ${isScrolled ? 'py-3 px-6' : 'py-4 px-8'}`}>
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span>Luhreetech</span>
            </Link>
            
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4">
              <Link href="/demo" className="hidden md:inline-block">
                <Button className="px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 hover:opacity-90" style={{background: '#f97316'}}>
                  Book a Demo
                </Button>
              </Link>
              
              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}