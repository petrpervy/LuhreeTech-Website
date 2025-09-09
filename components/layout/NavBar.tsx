"use client"
import Link from "next/link"
import { Button } from "../ui/Button"

export default function NavBar(){
  const links = ["Features","Pricing","ROI Calculator","Case Studies","About","Contact"]
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="glass flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand/10 border border-glassBorder grid place-items-center">
              <span className="text-[18px] font-bold text-ink">L</span>
            </div>
            <span className="font-semibold text-[18px] text-ink">Luhreetech</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => <Link key={l} href={`/${l.toLowerCase().replaceAll(" ","-")}`} className="nav-link">{l}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="cta">Start Free Audit</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
