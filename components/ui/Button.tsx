"use client"
import { cva, VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const styles = cva("btn", {
  variants: {
    variant: {
      cta: "btn-cta",
      outline: "btn-outline",
      ghost: "btn-outline", // ghost uses same styles as outline for now
      primary: "btn-cta", // primary uses same styles as cta for now
      secondary: "btn-outline", // secondary uses same styles as outline for now
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }
  },
  defaultVariants: { variant: "outline", size: "md" }
})

export function Button({variant, size, className, asChild, ...props}:{variant?:VariantProps<typeof styles>["variant"], size?:VariantProps<typeof styles>["size"], asChild?: boolean} & React.ButtonHTMLAttributes<HTMLButtonElement>){
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(styles({variant, size}), className)} {...props} />
}