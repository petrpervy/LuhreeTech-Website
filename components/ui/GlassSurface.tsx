'use client'

export default function GlassSurface({className="", children, as:Tag="div"}:any){
  const baseClasses = [
    "rounded-2xl border border-white/40 bg-white/55 backdrop-blur-xl",
    "shadow-[0_12px_50px_rgba(0,0,0,0.12)] transition-all duration-220",
    "hover:translate-y-[-2px] hover:shadow-[0_16px_60px_rgba(0,0,0,0.16)]"
  ].join(' ')

  const finalClasses = className ? `${baseClasses} ${className}` : baseClasses

  return (
    <Tag className={finalClasses}>{children}</Tag>
  )
}
