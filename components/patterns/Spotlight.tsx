"use client";
import { useMotionValue, useTransform, motion } from "framer-motion";

export default function Spotlight({children}:{children:React.ReactNode}){
  const x = useMotionValue(0), y = useMotionValue(0);
  const bg = useTransform([x,y], ([mx,my]) =>
    `radial-gradient(480px 240px at ${mx}px ${my}px, rgba(255,255,255,.35), transparent 70%)`);
  return (
    <motion.div className="relative" style={{ backgroundImage:bg }}
      onMouseMove={(e)=>{ const r=e.currentTarget.getBoundingClientRect(); x.set(e.clientX-r.left); y.set(e.clientY-r.top); }}>
      {children}
    </motion.div>
  );
}
