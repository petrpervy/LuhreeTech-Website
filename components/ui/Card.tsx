import { cn } from "@/lib/cn";

interface CardProps {
  children: any;
  className?: string;
  glass?: boolean;
  blur?: boolean;
}

export default function Card({children, className="", glass=false, blur=false}: CardProps){
  return (
    <div className={cn(
      glass ? "glass" : "card",
      blur ? "backdrop-blur-2xl" : "",
      "p-6",
      className
    )}>
      {children}
    </div>
  )
}