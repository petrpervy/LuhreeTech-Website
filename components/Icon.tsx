import * as Lucide from "lucide-react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function Icon({name, className}:{name:keyof typeof Lucide; className?:string}){
  const I = (Lucide[name] ?? Lucide.Circle) as LucideIcon;
  return <I className={cn("w-5 h-5 stroke-[1.75]", className)} />;
}
