import React from "react";
import { cn } from "@/lib/cn";

export type Tint = "lavender" | "peach" | "teal" | "none";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  tint?: Tint;
  hover?: boolean;
};

export default function GlassCard({ className, tint = "none", hover = true, ...props }: Props){
  const tints = {
    none: "",
    lavender: "bg-tint-lavender",
    peach: "bg-tint-peach",
    teal: "bg-tint-teal",
  } as const;

  return (
    <div
      className={cn(
        "card relative", tints[tint], hover && "transition hover:-translate-y-1 hover:shadow-glow",
        className
      )}
      {...props}
    />
  );
}