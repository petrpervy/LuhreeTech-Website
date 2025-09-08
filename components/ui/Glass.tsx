import { cn } from "../../lib/utils"
import { PropsWithChildren } from "react"

export function Glass({
  className, as:Comp="div", large=false, ink=false, ...props
}: PropsWithChildren<{className?:string; as?:any; large?:boolean; ink?:boolean;}>) {
  return (
    <Comp className={cn("relative", large ? "glass-lg" : "glass", ink && "glass-ink", "card-hover")} {...props} />
  )
}
