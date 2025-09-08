"use client";
import { useEffect, useRef } from "react";

export default function LogosMarquee({children}:{children:React.ReactNode}){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{ 
    if(!ref.current) return; 
    const el=ref.current; 
    let x=0; 
    let raf:number;
    const step=()=>{ 
      x-=0.3; 
      el.style.transform=`translateX(${x}px)`; 
      if(Math.abs(x)>el.scrollWidth/2) x=0; 
      raf=requestAnimationFrame(step); 
    };
    raf=requestAnimationFrame(step); 
    return ()=>cancelAnimationFrame(raf);
  },[]);
  return (
    <div className="relative overflow-hidden">
      <div className="flex gap-2 md:gap-3 will-change-transform" ref={ref}>
        {children}{children /* duplicate for seamless loop */}
      </div>
    </div>
  );
}
