import { ReactNode } from "react"
export function Card({children, className=""}:{children:ReactNode, className?:string}) {
  return <div className={`glass hover-lift ${className}`}>{children}</div>
}
