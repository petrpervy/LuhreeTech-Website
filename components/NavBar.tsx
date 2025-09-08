"use client"
import Link from "next/link"
import { Button } from "./ui/Button"
import { GlassShimmer } from "./ui/GlassShimmer"

export default function NavBar(){
  const links = ["Features","Pricing","ROI Calculator","Case Studies","About","Contact"]
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="relative glass flex items-center justify-between px-5 py-3 overflow-hidden">
          {/* Glass shimmer effect */}
          <GlassShimmer className="opacity-30" />

          {/* Logo section */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 rounded-full bg-brand/10 border border-glassBorder grid place-items-center backdrop-blur-sm">
              <span className="text-[18px] font-bold text-ink">L</span>
            </div>
            <span className="font-semibold text-[18px] text-ink">Luhreetech</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative z-10">
            {links.map(l => (
              <Link
                key={l}
                href={`/${l.toLowerCase().replaceAll(" ","-")}`}
                className="nav-link relative group"
              >
                <span className="relative z-10">{l}</span>
                {/* Hover glass effect */}
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3 relative z-10">
            <Button variant="cta" className="relative overflow-hidden group">
              <span className="relative z-10">Start Free Audit</span>
              {/* Button glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
