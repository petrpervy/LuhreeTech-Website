"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);
  return (
    <div className={cn(
      "sticky top-0 z-50 mx-auto w-full", scrolled ? "bg-glass glass-border shadow-glass" : "bg-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-glass glass-border" />
          <span className="text-[17px] font-semibold">Luhreetech</span>
        </div>
        <nav className="hidden gap-6 md:flex text-[14px] text-muted">
          <a className="hover:text-ink" href="/features">Features</a>
          <a className="hover:text-ink" href="/pricing">Pricing</a>
          <a className="hover:text-ink" href="/roi">ROI Calculator</a>
          <a className="hover:text-ink" href="/case-studies">Case Studies</a>
          <a className="hover:text-ink" href="/about">About</a>
          <a className="hover:text-ink" href="/contact">Contact</a>
        </nav>
        <Button variant="primary">Start Free Audit</Button>
      </div>
    </div>
  );
}