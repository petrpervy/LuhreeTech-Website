"use client";
import { useState } from "react";
export function Tabs({labels,children}:{labels:string[];children:any;}){
  const [i,setI]=useState(0);
  return (
    <div>
      <div className="flex gap-2 border-b border-[var(--border)] bg-white/70 px-3 pt-3 backdrop-blur-md">
        {labels.map((l,idx)=>(
          <button key={l} onClick={()=>setI(idx)}
            className={"link-chip "+(i===idx?"shadow-md":"opacity-75")}>{l}</button>
        ))}
      </div>
      <div className="bg-white/70 backdrop-blur-md">{Array.isArray(children)?children[i]:children}</div>
    </div>
  );
}
export function Tab({children}:{children:any}){ return <>{children}</>; }
