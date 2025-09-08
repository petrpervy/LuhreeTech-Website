"use client";
import { motion, useReducedMotion } from "framer-motion";

export function NavPreviewPricing(){
  const r = useReducedMotion();
  return (
    <motion.div
      initial={{opacity:0, y:6}} animate={{opacity:1, y:0}}
      transition={{duration: r?0:0.25}}
      className="relative w-[min(720px,90vw)] rounded-2xl overflow-hidden"
      role="dialog" aria-label="Pricing quick view"
    >
      {/* Soft vignette/aurora background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1000px 420px at 10% -10%, rgba(220,235,255,.65), transparent 60%), radial-gradient(900px 420px at 120% 110%, rgba(255,230,207,.55), transparent 60%)"
        }} />
      <div className="relative grid gap-4 p-5 md:grid-cols-[1.1fr,1fr]">
        {/* Left: summary */}
        <div className="glass-panel p-5">
          <h3 className="heading-hover text-xl font-extrabold text-ink">Pricing</h3>
          <p className="mt-1 text-sm text-ink-70">
            Simple tiers. Month-to-month. On-prem available for compliance.
          </p>
          <a href="/pricing" className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/92 px-3 py-1.5 text-sm font-medium text-ink hover-glow">
            See plans →
          </a>
        </div>

        {/* Right: stacked tiles */}
        <div className="grid gap-3">
          <a href="/pricing#plans" className="glass-tile p-4 hover-glow text-ink font-semibold link-shimmer">Starter / Pro / On-Prem</a>
          <a href="/pricing#comparison" className="glass-tile p-4 hover-glow text-ink font-semibold link-shimmer">Comparison Table</a>
          <a href="/pricing#faq" className="glass-tile p-4 hover-glow text-ink font-semibold link-shimmer">FAQ</a>
        </div>
      </div>
    </motion.div>
  );
}


