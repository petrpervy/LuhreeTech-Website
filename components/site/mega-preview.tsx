import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { type NavPreview } from "@/lib/content";
import { NavPreviewPricing } from "@/components/nav/NavPreviewPricing";

export function MegaPreview({
  open, 
  onClose, 
  anchorId, 
  item, 
  className
}: { 
  open: boolean; 
  onClose: () => void; 
  anchorId: string; 
  item: NavPreview; 
  className?: string 
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { 
      if (e.key === "Escape") onClose(); 
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Use special pricing preview for pricing nav item
  if (item.title === "Pricing") {
    return (
      <div
        role="menu"
        aria-labelledby={anchorId}
        className={cn(
          "absolute left-1/2 -translate-x-1/2 mt-3 outline-0 mega-arrow",
          "motion-safe:transition-opacity motion-safe:duration-150 will-change-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          className
        )}
        ref={panelRef}
        onMouseLeave={onClose}
      >
        <NavPreviewPricing />
      </div>
    );
  }

  return (
    <div
      role="menu"
      aria-labelledby={anchorId}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 mt-3 w-[620px] glass-strong p-4 md:p-5 rounded-3xl shadow-soft-lg outline-0 mega-arrow",
        "motion-safe:transition-opacity motion-safe:duration-150 will-change-opacity",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        className
      )}
      ref={panelRef}
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-3">
          <h3 className="heading-hover text-base font-semibold text-base-ink">{item.title}</h3>
          <p className="mt-1 text-sm text-base-gray/80">{item.blurb}</p>
          {item.cta && (
            <a 
              href={item.cta.href} 
              className="inline-block mt-3 text-sm font-medium link-underline hover:text-primary-lime focus-ring rounded-md"
            >
              {item.cta.label} →
            </a>
          )}
        </div>
        <ul className="md:col-span-2 grid gap-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="glass-tile p-2 text-sm text-base-ink link-shimmer">{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
