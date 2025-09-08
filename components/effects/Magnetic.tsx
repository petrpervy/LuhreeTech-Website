"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({children}:{children:React.ReactNode}){
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x,{ stiffness:300, damping:20 }), sy = useSpring(y,{ stiffness:300, damping:20 });
  return (
    <motion.div style={{ x:sx, y:sy }} onMouseMove={(e)=>{const r=e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left-r.width/2)/6); y.set((e.clientY-r.top-r.height/2)/6);}}
      onMouseLeave={()=>{x.set(0); y.set(0);}}>
      {children}
    </motion.div>
  );
}
