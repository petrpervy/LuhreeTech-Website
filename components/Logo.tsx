import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image 
        src="/brand-mark.svg" 
        alt="Luhreetech" 
        width={28} 
        height={28} 
        priority 
      />
      <Image 
        src="/brand-horizontal.svg" 
        alt="Luhreetech" 
        width={140} 
        height={32} 
        className="hidden sm:block" 
      />
    </div>
  )
}
