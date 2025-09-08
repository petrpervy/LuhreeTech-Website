"use client";
import * as React from "react";
import { motion } from "framer-motion";

type Props = {
  variant?: "full" | "mark";   // full = logomark + wordmark
  dark?: boolean;              // on dark backgrounds
  size?: number;               // px height
  animated?: boolean;
  className?: string;
};

export default function Logo({ variant="full", dark=false, size=28, animated=true, className="" }: Props) {
  const ink = dark ? "#F7FAFF" : "#0A1B2F";
  const sub = dark ? "fill-white/70" : "fill-black/60";
  
  const mark = (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-label="Luhreetech logo" className="shrink-0">
      {/* Navy coin background */}
      <circle cx="14" cy="14" r="14" fill="#0A1B2F"/>
      
      {/* White loop L stroke */}
      <path d="M8 8C8 6.89543 8.89543 6 10 6H18C19.1046 6 20 6.89543 20 8V20C20 21.1046 19.1046 22 18 22H10C8.89543 22 8 21.1046 8 20V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      
      {/* Inner loop detail */}
      <path d="M12 12C12 10.8954 12.8954 10 14 10H16C17.1046 10 18 10.8954 18 12V16C18 17.1046 17.1046 18 16 18H14C12.8954 18 12 17.1046 12 16V12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );

  if (variant === "mark") return <span className={className}>{mark}</span>;

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark}
      <span 
        style={{
          fontWeight: 800, 
          letterSpacing: "0.02em", 
          fontFamily: "Inter, ui-sans-serif",
          color: ink
        }} 
        className="text-[calc(var(--s,1)*18px)]" 
        aria-hidden="true"
      >
        Luhreetech
      </span>
    </span>
  );
}

