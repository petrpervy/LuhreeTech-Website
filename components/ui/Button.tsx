"use client"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const styles = cva("btn", {
  variants: {
    variant: {
      cta: "btn-cta",
      outline: "btn-outline",
    }
  },
  defaultVariants: { variant: "outline" }
})

export function Button({variant, className, ...props}:{variant?:VariantProps<typeof styles>["variant"]} & React.ButtonHTMLAttributes<HTMLButtonElement>){
  return <button className={cn(styles({variant}), className)} {...props} />
}
