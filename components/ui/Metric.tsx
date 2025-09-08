"use client";
import { useEffect, useRef, useState } from "react";

export default function Metric({ value, suffix="", duration=1.0, className="" }:{
  value:number; suffix?:string; duration?:number; className?:string;
}){
  const [v,setV]=useState<number|null>(null);
  const ref = useRef<HTMLSpanElement|null>(null);

  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const obs = new IntersectionObserver(([e])=>{
      if(!e.isIntersecting) return;
      const t0 = performance.now();
      const step = (t:number)=>{
        const p = Math.min((t - t0)/(duration*1000),1);
        setV(Math.round(value * p));
        if(p<1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.disconnect();
    },{threshold:.4});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[value,duration]);

  return <span ref={ref} className={className}>{(v??Math.round(value*0.3)).toLocaleString()}{suffix}</span>;
}