import React from "react";
import { cn } from "@/lib/cn";

type MaxW = "lg" | "xl" | "2xl" | "7xl";
const maxWMap: Record<MaxW, string> = {
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "7xl": "max-w-7xl",
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  padded?: boolean;
  maxW?: MaxW;
  gradient?: boolean;
  children?: React.ReactNode;
};

export default function Section({
  className,
  padded = true,
  maxW = "7xl",
  gradient = true,
  children,
  ...rest
}: Props) {
  return (
    <section className={cn(gradient && "section-gradient", className)}>
      <div className={cn("mx-auto", padded && "px-4 py-20 md:py-24", maxWMap[maxW])} {...rest}>
        {children}
      </div>
    </section>
  );
}